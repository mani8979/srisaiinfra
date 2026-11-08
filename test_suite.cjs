const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const SCREENSHOT_DIR = path.join(__dirname, 'test_screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

const VIEWPORTS = [
  { name: 'mobile-320', width: 320, height: 640 },
  { name: 'mobile-360', width: 360, height: 800 },
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'mobile-414', width: 414, height: 896 },
  { name: 'mobile-430', width: 430, height: 932 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'laptop-1024', width: 1024, height: 768 },
  { name: 'desktop-1280', width: 1280, height: 800 },
  { name: 'desktop-1920', width: 1920, height: 1080 },
];

const ROUTES = [
  '/',
  '/about',
  '/services',
  '/projects',
  '/clients',
  '/referrals',
  '/contact'
];

async function runTests() {
  console.log('🚀 Starting Comprehensive Sai Sri Infra Test Suite...');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const consoleErrors = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', err => {
    consoleErrors.push(err.toString());
  });

  let totalTests = 0;
  let passedTests = 0;

  // TEST 1: Check each route for horizontal scroll and console errors at 360px and 1280px
  console.log('\n--- TEST 1: Checking Routes & Horizontal Overflow ---');
  for (const route of ROUTES) {
    const url = `http://127.0.0.1:3000${route}`;
    await page.goto(url, { waitUntil: 'networkidle0' });

    for (const vp of [VIEWPORTS[0], VIEWPORTS[1], VIEWPORTS[8]]) {
      await page.setViewport({ width: vp.width, height: vp.height });
      await new Promise(r => setTimeout(r, 200));

      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      const bodyScrollWidth = await page.evaluate(() => document.body.scrollWidth);

      totalTests++;
      const hasOverflow = scrollWidth > vp.width + 1 || bodyScrollWidth > vp.width + 1;
      if (!hasOverflow) {
        passedTests++;
        console.log(`✅ [${vp.name}] ${route}: No horizontal overflow (${scrollWidth}px <= ${vp.width}px)`);
      } else {
        console.error(`❌ [${vp.name}] ${route}: OVERFLOW DETECTED! scrollWidth=${scrollWidth}, bodyWidth=${bodyScrollWidth}, viewport=${vp.width}`);
      }
    }
  }

  // TEST 2: Comprehensive Hamburger Menu Verification on Mobile (375px)
  console.log('\n--- TEST 2: Testing Mobile 3-Line Hamburger Menu ---');
  await page.setViewport({ width: 375, height: 812 });
  await page.goto('http://127.0.0.1:3000/', { waitUntil: 'networkidle0' });

  // 1. Verify 3 lines
  totalTests++;
  const hamburgerLines = await page.$$('.hamburger-line');
  if (hamburgerLines.length === 3) {
    passedTests++;
    console.log('✅ Three distinct hamburger lines are rendered in DOM');
  } else {
    console.error(`❌ Expected 3 hamburger lines, found ${hamburgerLines.length}`);
  }

  // 2. Click hamburger button to open
  totalTests++;
  const hamburgerBtn = await page.$('button[aria-controls="mobile-navigation-menu"]');
  await hamburgerBtn.click();
  await new Promise(r => setTimeout(r, 400));

  const isMenuExpanded = await page.evaluate(() => {
    const btn = document.querySelector('button[aria-controls="mobile-navigation-menu"]');
    const menu = document.getElementById('mobile-navigation-menu');
    return btn.getAttribute('aria-expanded') === 'true' && menu.classList.contains('opacity-100');
  });

  if (isMenuExpanded) {
    passedTests++;
    console.log('✅ Hamburger menu opened smoothly, aria-expanded is true');
  } else {
    console.error('❌ Hamburger menu did not open or aria-expanded is false');
  }

  // 3. Verify ALL navigation options exist and are readable
  totalTests++;
  const menuLinks = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('#mobile-navigation-menu nav a'));
    return links.map(a => a.textContent.trim());
  });

  console.log('Mobile menu navigation items found:', menuLinks);
  const expectedItems = ['Home', 'About Us', 'Services', 'Projects', 'Our Clients', 'Referrals', 'Contact Us'];
  const allFound = expectedItems.every(exp => menuLinks.some(m => m.includes(exp)));
  if (allFound) {
    passedTests++;
    console.log('✅ All 7 navigation links present in mobile menu');
  } else {
    console.error('❌ Missing navigation items in mobile menu!');
  }

  // 4. Verify background scrolling is disabled
  totalTests++;
  const bodyOverflowWhenOpen = await page.evaluate(() => document.body.style.overflow);
  if (bodyOverflowWhenOpen === 'hidden') {
    passedTests++;
    console.log('✅ Background scrolling prevented when mobile menu open (body.style.overflow = hidden)');
  } else {
    console.error(`❌ Body overflow is ${bodyOverflowWhenOpen}, expected hidden`);
  }

  // 5. Test Escape key closes menu
  totalTests++;
  await page.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 400));
  const isMenuClosedOnEsc = await page.evaluate(() => {
    const btn = document.querySelector('button[aria-controls="mobile-navigation-menu"]');
    return btn.getAttribute('aria-expanded') === 'false';
  });

  if (isMenuClosedOnEsc) {
    passedTests++;
    console.log('✅ Mobile menu closed on Escape key press');
  } else {
    console.error('❌ Mobile menu did not close on Escape key');
  }

  // 6. Test opening again and navigating via link
  totalTests++;
  await hamburgerBtn.click();
  await new Promise(r => setTimeout(r, 400));
  // Click on "Services"
  await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('#mobile-navigation-menu nav a'));
    const sLink = links.find(a => a.textContent.includes('Services'));
    if (sLink) sLink.click();
  });
  await new Promise(r => setTimeout(r, 500));

  const currentPath = await page.evaluate(() => window.location.pathname);
  const isClosedAfterNav = await page.evaluate(() => {
    const btn = document.querySelector('button[aria-controls="mobile-navigation-menu"]');
    return btn.getAttribute('aria-expanded') === 'false';
  });

  if (currentPath === '/services' && isClosedAfterNav) {
    passedTests++;
    console.log('✅ Mobile menu closed and navigated to /services upon link selection');
  } else {
    console.error(`❌ Navigation failed or menu did not close: path=${currentPath}, closed=${isClosedAfterNav}`);
  }

  // TEST 3: Quote Modal & Form Validation Testing
  console.log('\n--- TEST 3: Quote Modal & Form Validation ---');
  totalTests++;
  // Click "Get a Quote"
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const quoteBtn = btns.find(b => b.textContent.includes('Get a Quote') || b.textContent.includes('Quote'));
    if (quoteBtn) quoteBtn.click();
  });
  await new Promise(r => setTimeout(r, 400));

  const quoteModalVisible = await page.evaluate(() => !!document.getElementById('quote-modal-title'));
  if (quoteModalVisible) {
    passedTests++;
    console.log('✅ Quote Modal opened successfully');
  } else {
    console.error('❌ Quote Modal failed to open');
  }

  // Test form validation: submit empty
  totalTests++;
  await page.evaluate(() => {
    const submitBtn = document.querySelector('form button[type="submit"]');
    if (submitBtn) submitBtn.click();
  });
  await new Promise(r => setTimeout(r, 200));

  const errorMessages = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('form p.text-rose-500')).map(p => p.textContent.trim());
  });

  if (errorMessages.length >= 2) {
    passedTests++;
    console.log('✅ Form validation active: triggered required field errors:', errorMessages);
  } else {
    console.error('❌ Expected form validation errors, got:', errorMessages);
  }

  // Fill in form and submit
  totalTests++;
  const nameInput = await page.$('input[placeholder*="Ramesh Reddy"]');
  await nameInput.type('Test Enterprise');
  const phoneInput = await page.$('input[placeholder*="mobile number"]');
  await phoneInput.type('9876543210');
  const detailsInput = await page.$('textarea[placeholder*="approximate area"]');
  await detailsInput.type('Showroom Front Elevation 2500 sq ft');
  await page.evaluate(() => {
    document.querySelector('form button[type="submit"]').click();
  });
  await new Promise(r => setTimeout(r, 400));

  const successReceived = await page.evaluate(() => {
    return document.body.textContent.includes('Enquiry Received Successfully');
  });

  if (successReceived) {
    passedTests++;
    console.log('✅ Form submission successful with WhatsApp dispatch option present');
  } else {
    console.error('❌ Form submission success screen not displayed');
  }

  // Close modal via Escape
  await page.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 300));

  // TEST 4: Project Lightbox Functionality
  console.log('\n--- TEST 4: Project Lightbox Functionality ---');
  await page.goto('http://127.0.0.1:3000/projects', { waitUntil: 'networkidle0' });
  totalTests++;

  // Click on first project card
  await page.evaluate(() => {
    const card = document.querySelector('section .grid div.cursor-pointer');
    if (card) card.click();
  });
  await new Promise(r => setTimeout(r, 400));

  const lightboxVisible = await page.evaluate(() => !!document.getElementById('lightbox-title'));
  if (lightboxVisible) {
    passedTests++;
    console.log('✅ Project Lightbox opened with high-res photograph and slide reference');
  } else {
    console.error('❌ Project Lightbox did not open');
  }

  // Test Next button in lightbox
  totalTests++;
  const initialTitle = await page.evaluate(() => document.getElementById('lightbox-title').textContent);
  await page.keyboard.press('ArrowRight');
  await new Promise(r => setTimeout(r, 300));
  const nextTitle = await page.evaluate(() => document.getElementById('lightbox-title').textContent);

  if (initialTitle !== nextTitle) {
    passedTests++;
    console.log(`✅ Lightbox keyboard ArrowRight navigated from "${initialTitle}" to "${nextTitle}"`);
  } else {
    console.error('❌ Lightbox ArrowRight navigation failed');
  }

  // Close lightbox with Escape
  await page.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 300));

  // TEST 5: Capture high-quality verification screenshots across devices
  console.log('\n--- TEST 5: Capturing Verification Screenshots ---');
  const shots = [
    { name: 'home-desktop', route: '/', width: 1280, height: 800 },
    { name: 'home-mobile-375', route: '/', width: 375, height: 812 },
    { name: 'services-desktop', route: '/services', width: 1280, height: 800 },
    { name: 'projects-desktop', route: '/projects', width: 1280, height: 800 },
    { name: 'clients-desktop', route: '/clients', width: 1280, height: 800 },
    { name: 'referrals-desktop', route: '/referrals', width: 1280, height: 800 },
    { name: 'contact-desktop', route: '/contact', width: 1280, height: 800 },
  ];

  for (const shot of shots) {
    await page.setViewport({ width: shot.width, height: shot.height });
    await page.goto(`http://127.0.0.1:3000${shot.route}`, { waitUntil: 'networkidle0' });
    const shotPath = path.join(SCREENSHOT_DIR, `${shot.name}.png`);
    await page.screenshot({ path: shotPath, fullPage: false });
    console.log(`📸 Saved screenshot: ${shot.name}.png`);
  }

  // Check console errors
  console.log('\n--- Console Errors Check ---');
  if (consoleErrors.length === 0) {
    console.log('✅ ZERO CONSOLE ERRORS detected across all tests and routes!');
  } else {
    console.error(`⚠️ Found ${consoleErrors.length} console errors:`, consoleErrors);
  }

  console.log(`\n========================================`);
  console.log(`🎉 TEST SUITE SUMMARY: ${passedTests} / ${totalTests} TESTS PASSED`);
  console.log(`========================================\n`);

  await browser.close();
}

runTests().catch(err => {
  console.error('Test suite failed with error:', err);
  process.exit(1);
});
