import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectLightbox from './components/ProjectLightbox';
import ServiceModal from './components/ServiceModal';
import QuoteModal from './components/QuoteModal';
import WhatsAppFloat from './components/WhatsAppFloat';
import BackToTop from './components/BackToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ClientsPage from './pages/ClientsPage';
import ReferralsPage from './pages/ReferralsPage';
import ContactPage from './pages/ContactPage';

import { PROJECTS } from './data/companyData';

const ROUTE_META = {
  '/': {
    title: 'Sai Sri Infra Solutions | Aluminium, ACP & Glass Works',
    description: 'Sai Sri Infra Solutions delivers professional architectural aluminium, ACP sheet fixing, structural front elevations, and office partitions with steadfast dedication since 2017.'
  },
  '/about': {
    title: 'About Us | Sai Sri Infra Solutions',
    description: 'Learn about Sai Sri Infra Solutions, established in 2017 with our foundational motto "Serve All to the BEST". Commercial facade and office partition specialists.'
  },
  '/services': {
    title: 'Our Services | Sai Sri Infra Solutions',
    description: 'Explore our 9 specialized architectural services: ACP sheet fixing, structural front elevation glass fixing, louvers, and interior office partitions.'
  },
  '/projects': {
    title: 'Our Projects | Sai Sri Infra Solutions',
    description: 'Browse authentic commercial facade elevations, structural glazing, louvers, and office partitions executed by Sai Sri Infra Solutions.'
  },
  '/clients': {
    title: 'Our Clients | Sai Sri Infra Solutions',
    description: 'Serving corporate offices, retail showrooms, hotels, hospitals, and commercial complexes across South India with over 235+ completed engagements.'
  },
  '/referrals': {
    title: 'Business Referrals | Sai Sri Infra Solutions',
    description: 'Partner with Sai Sri Infra Solutions. Refer commercial showrooms, office spaces, hotels, or hospitals for facade and partition opportunities.'
  },
  '/contact': {
    title: 'Contact Us | Sai Sri Infra Solutions',
    description: 'Connect with Sai Sri Infra Solutions for commercial project enquiries, site surveys, and cost estimates. Call +91 82972 01888 or chat on WhatsApp.'
  }
};

// Helper component to scroll to top and sync page metadata on route change
function ScrollAndMetaSync() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    // 2. Synchronize SEO metadata
    const meta = ROUTE_META[pathname] || ROUTE_META['/'];
    document.title = meta.title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', meta.title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', meta.description);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const canonicalUrl = `https://saisriinfra.com${pathname === '/' ? '' : pathname}`;
      canonical.setAttribute('href', canonicalUrl);
    }
  }, [pathname]);

  return null;
}

function MainApp() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialService, setQuoteInitialService] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenQuote = (serviceName = '') => {
    setQuoteInitialService(serviceName);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteInitialService('');
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProjectLightbox = () => {
    setSelectedProject(null);
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  const handleCloseServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-brand-green/20 selection:text-brand-green-dark no-horizontal-overflow">
      {/* Skip to Main Content Link for Keyboard and Screen-Reader Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-emerald-700 focus:text-white focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white text-sm font-semibold transition-all"
      >
        Skip to main content
      </a>

      <ScrollAndMetaSync />

      {/* Main Sticky Header */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Routed Page Content */}
      <main id="main-content" className="flex-1 w-full max-w-full overflow-x-hidden" tabIndex="-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenQuote={handleOpenQuote}
                onSelectProject={handleSelectProject}
                onSelectService={handleSelectService}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage onOpenQuote={handleOpenQuote} />}
          />
          <Route
            path="/services"
            element={
              <ServicesPage
                onSelectService={handleSelectService}
                onOpenQuote={handleOpenQuote}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <ProjectsPage
                onSelectProject={handleSelectProject}
                onOpenQuote={handleOpenQuote}
              />
            }
          />
          <Route
            path="/clients"
            element={<ClientsPage onOpenQuote={handleOpenQuote} />}
          />
          <Route
            path="/referrals"
            element={<ReferralsPage onOpenQuote={handleOpenQuote} />}
          />
          <Route
            path="/contact"
            element={<ContactPage />}
          />
          {/* Catch all / fallback */}
          <Route
            path="*"
            element={
              <HomePage
                onOpenQuote={handleOpenQuote}
                onSelectProject={handleSelectProject}
                onSelectService={handleSelectService}
              />
            }
          />
        </Routes>
      </main>

      {/* Multi-Column Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Floating Utilities */}
      <WhatsAppFloat />
      <BackToTop />

      {/* Global Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        initialService={quoteInitialService}
      />

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={handleCloseServiceModal}
          onOpenQuote={handleOpenQuote}
        />
      )}

      {selectedProject && (
        <ProjectLightbox
          project={selectedProject}
          projects={PROJECTS}
          onClose={handleCloseProjectLightbox}
          onSelectProject={setSelectedProject}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}
