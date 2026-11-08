import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  ArrowRight, 
  MessageCircle, 
  X, 
  ChevronDown, 
  Building2, 
  Maximize2, 
  Layers 
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';

export default function Navbar({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const desktopDropdownRef = useRef(null);
  const location = useLocation();

  // Handle scroll state for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname, location.search]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Handle click outside to close mobile menu & desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }

      if (
        servicesDropdownOpen &&
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target)
      ) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, servicesDropdownOpen]);

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isOpen) {
          setIsOpen(false);
          buttonRef.current?.focus();
        }
        if (servicesDropdownOpen) {
          setServicesDropdownOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, servicesDropdownOpen]);

  // Desktop hover handlers with debounce timeout
  const handleDesktopServicesMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleDesktopServicesMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Our Clients', path: '/clients' },
    { name: 'Referrals', path: '/referrals' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // Helper for service icons
  const getServiceIcon = (index) => {
    if (index === 0) return <Building2 className="w-4 h-4" />;
    if (index === 1) return <Maximize2 className="w-4 h-4" />;
    return <Layers className="w-4 h-4" />;
  };

  return (
    <>
      {/* Top micro-bar for phone & motto */}
      <div className="bg-brand-navy-dark text-slate-300 border-b border-white/5 text-xs py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 text-slate-300">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-green-emerald animate-pulse"></span>
            <span className="font-medium text-[11px] sm:text-xs tracking-wider uppercase text-emerald-400">
              Motto: &ldquo;{COMPANY_INFO.motto}&rdquo;
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-400">Est. {COMPANY_INFO.established}</span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center space-x-1.5 hover:text-white transition-colors text-slate-300 font-medium"
              aria-label={`Call ${COMPANY_INFO.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold-warm" />
              <span className="text-[12px] sm:text-xs font-semibold tracking-wide">{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 transition-colors text-xs font-medium"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-header shadow-premium py-2.5 sm:py-3' : 'bg-brand-navy border-b border-white/10 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Title */}
            <Link
              to="/"
              className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-brand-green/50 rounded-lg p-1 -m-1"
              aria-label="Sai Sri Infra Solutions - Back to Homepage"
            >
              <div className="relative h-11 sm:h-12 w-auto flex items-center justify-center overflow-hidden rounded-md bg-[#241407]/90 p-1 border border-amber-600/30 group-hover:border-emerald-500/50 transition-colors shadow-md">
                <img
                  src="/logo/logo_cropped_dark.jpg"
                  alt="Sai Sri Infra Solutions Logo"
                  className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/logo/logo_screenshot.png';
                  }}
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-extrabold text-base sm:text-lg tracking-tight font-heading leading-tight group-hover:text-emerald-300 transition-colors">
                  SAI SRI INFRA
                </span>
                <span className="text-emerald-400 text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase">
                  SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with Hover Dropdown */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Desktop Navigation">
              {navLinks.map((link) => {
                if (link.name === 'Services') {
                  const isServicesActive = location.pathname.startsWith('/services');

                  return (
                    <div
                      key={link.path}
                      ref={desktopDropdownRef}
                      className="relative"
                      onMouseEnter={handleDesktopServicesMouseEnter}
                      onMouseLeave={handleDesktopServicesMouseLeave}
                    >
                      {/* Services Header Button / Link */}
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
                            isActive || servicesDropdownOpen
                              ? 'text-white bg-white/10 shadow-sm border-b-2 border-brand-green-emerald'
                              : 'text-slate-300 hover:text-white hover:bg-white/5'
                          }`
                        }
                        aria-expanded={servicesDropdownOpen}
                        aria-haspopup="true"
                        aria-controls="desktop-services-dropdown"
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 ml-1 transition-transform duration-300 ease-in-out ${
                            servicesDropdownOpen ? 'rotate-180 text-emerald-400' : 'text-slate-400'
                          }`}
                        />
                      </NavLink>

                      {/* Desktop Hover Dropdown Menu with Fade In / Fade Out & Hover Effects */}
                      <div
                        id="desktop-services-dropdown"
                        className={`absolute top-full left-0 mt-2 w-[350px] rounded-2xl bg-slate-900/98 backdrop-blur-2xl border border-emerald-500/30 p-2.5 shadow-2xl transition-all duration-300 ease-out z-50 transform origin-top-left ${
                          servicesDropdownOpen
                            ? 'opacity-100 translate-y-0 scale-100 visible pointer-events-auto shadow-2xl shadow-emerald-950/50'
                            : 'opacity-0 -translate-y-2 scale-95 invisible pointer-events-none'
                        }`}
                        onMouseEnter={handleDesktopServicesMouseEnter}
                        onMouseLeave={handleDesktopServicesMouseLeave}
                      >
                        {/* Dropdown Header */}
                        <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between">
                          <span className="text-[11px] font-bold text-slate-300 tracking-wider uppercase font-heading">
                            Our Core Specialisations
                          </span>
                          <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-500/40">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>3 Services</span>
                          </span>
                        </div>

                        {/* Dropdown Items (The 3 Core Services) */}
                        <div className="py-1.5 space-y-1">
                          {SERVICES.map((service, sIdx) => (
                            <Link
                              key={service.id}
                              to={`/services?highlight=${service.id}`}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="group/item flex items-start p-2.5 rounded-xl border border-transparent hover:border-emerald-500/40 hover:bg-emerald-950/60 hover:shadow-sm transition-all duration-200 cursor-pointer"
                            >
                              {/* Service Icon */}
                              <div className="w-9 h-9 rounded-lg bg-emerald-900/50 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400 group-hover/item:scale-110 group-hover/item:bg-emerald-500 group-hover/item:text-slate-950 group-hover/item:shadow-md transition-all duration-200">
                                {getServiceIcon(sIdx)}
                              </div>

                              {/* Service Info */}
                              <div className="ml-3 flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-bold text-white group-hover/item:text-emerald-300 transition-colors">
                                    {service.title}
                                  </span>
                                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:text-emerald-400 transition-all duration-200" />
                                </div>
                                <p className="text-[11px] text-slate-400 group-hover/item:text-slate-200 mt-0.5 leading-snug transition-colors">
                                  {service.subtitle}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Dropdown Footer Link */}
                        <div className="pt-2 mt-1 border-t border-white/10 px-1">
                          <Link
                            to="/services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="w-full flex items-center justify-between text-xs font-semibold text-emerald-400 hover:text-emerald-300 hover:bg-white/5 py-1.5 px-2.5 rounded-lg transition-colors group"
                          >
                            <span>Explore Complete Services Catalogue</span>
                            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-white bg-white/10 shadow-sm border-b-2 border-brand-green-emerald'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </nav>

            {/* Desktop Right CTA: Get a Quote */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-brand-green-dark to-brand-green-emerald hover:from-brand-green hover:to-emerald-500 rounded-lg shadow-sm hover:shadow-glow-green transition-all duration-300 transform hover:scale-105 active:scale-95 border border-emerald-400/30 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-brand-navy cursor-pointer"
                aria-label="Request a quotation"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>

            {/* CRITICAL: Mobile Three-Line Hamburger Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                type="button"
                onClick={onOpenQuote}
                className="hidden xs:inline-flex items-center justify-center px-2.5 py-1.5 text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 rounded-md hover:bg-emerald-900/60 transition-colors"
                aria-label="Quote request"
              >
                Quote
              </button>

              <button
                ref={buttonRef}
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className={`relative w-11 h-11 flex flex-col items-center justify-center rounded-lg border text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-brand-navy cursor-pointer ${
                  isOpen
                    ? 'hamburger-active bg-emerald-900/40 border-emerald-400 text-emerald-300'
                    : 'bg-white/5 hover:bg-white/10 border-white/15 text-slate-200'
                }`}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
                aria-controls="mobile-navigation-menu"
              >
                {/* 3 clearly visible horizontal lines */}
                <span className="sr-only">{isOpen ? 'Close Menu' : 'Open Menu'}</span>
                <div className="w-6 h-5 flex flex-col justify-between items-center py-0.5">
                  <span className="hamburger-line line-1"></span>
                  <span className="hamburger-line line-2"></span>
                  <span className="hamburger-line line-3"></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown / Slide Panel */}
        <div
          id="mobile-navigation-menu"
          ref={menuRef}
          className={`lg:hidden fixed inset-x-0 top-[60px] sm:top-[66px] bg-brand-navy/98 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out transform ${
            isOpen ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
          }`}
          style={{ maxHeight: 'calc(100vh - 66px)' }}
          aria-hidden={!isOpen}
        >
          <div className="px-4 py-5 max-w-md mx-auto overflow-y-auto space-y-4 overscroll-contain" style={{ maxHeight: 'calc(100vh - 80px)' }}>
            {/* Quick Mobile Motto Badge */}
            <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-lg p-3 text-center">
              <p className="text-xs text-slate-300">
                Company Motto: <span className="text-emerald-400 font-bold">&ldquo;{COMPANY_INFO.motto}&rdquo;</span>
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">Aluminium, ACP Cladding & Glass Works Since {COMPANY_INFO.established}</p>
            </div>

            {/* Navigation Links list */}
            <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                if (link.name === 'Services') {
                  const isServicesActive = location.pathname === '/services';

                  return (
                    <div key={link.path} className="rounded-xl overflow-hidden bg-white/[0.03] border border-white/10">
                      {/* Services Click Trigger Row */}
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all text-left cursor-pointer ${
                          isServicesActive || mobileServicesOpen
                            ? 'text-white bg-emerald-600/25 border-l-4 border-brand-green-light font-semibold'
                            : 'text-slate-200 hover:text-white hover:bg-white/5 active:bg-white/10'
                        }`}
                        aria-expanded={mobileServicesOpen}
                        aria-controls="mobile-services-dropdown"
                      >
                        <div className="flex items-center space-x-2">
                          <span>{link.name}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                            3 Services
                          </span>
                        </div>

                        <div className="flex items-center space-x-1.5 text-xs text-emerald-400 font-semibold">
                          <span>{mobileServicesOpen ? 'Collapse' : 'Explore'}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-emerald-400 transition-transform duration-300 ease-in-out ${
                              mobileServicesOpen ? 'rotate-180' : 'rotate-0'
                            }`}
                          />
                        </div>
                      </button>

                      {/* Mobile Accordion Dropdown with Fade-Out to Fade-In Effect & Hover/Active Styles */}
                      <div
                        id="mobile-services-dropdown"
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          mobileServicesOpen
                            ? 'max-h-96 opacity-100 py-2.5'
                            : 'max-h-0 opacity-0 pointer-events-none py-0'
                        }`}
                      >
                        <div className="px-2.5 space-y-1.5">
                          {/* Overview Link */}
                          <NavLink
                            to="/services"
                            onClick={() => {
                              setIsOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className={({ isActive }) =>
                              `flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                                isActive && !location.search
                                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                  : 'text-emerald-400 hover:text-emerald-300 hover:bg-white/5'
                              }`
                            }
                          >
                            <span>Explore All 3 Services Overview</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-70" />
                          </NavLink>

                          {/* The 3 Core Services */}
                          {SERVICES.map((s, idx) => (
                            <Link
                              key={s.id}
                              to={`/services?highlight=${s.id}`}
                              onClick={() => {
                                setIsOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="group flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-emerald-950/50 active:bg-emerald-900/70 border border-transparent hover:border-emerald-500/30 transition-all duration-200"
                            >
                              <div className="flex items-center space-x-2.5 min-w-0">
                                <div className="w-7 h-7 rounded-md bg-emerald-900/50 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 group-hover:scale-105 transition-transform">
                                  {getServiceIcon(idx)}
                                </div>
                                <div className="truncate">
                                  <div className="font-semibold text-xs sm:text-sm group-hover:text-emerald-300 transition-colors truncate">
                                    {s.title}
                                  </div>
                                  <div className="text-[10px] text-slate-400 group-hover:text-slate-300 truncate">
                                    {s.subtitle}
                                  </div>
                                </div>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all ${
                        isActive
                          ? 'text-white bg-emerald-600/25 border-l-4 border-brand-green-light font-semibold'
                          : 'text-slate-200 hover:text-white hover:bg-white/5 active:bg-white/10'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-40" />
                  </NavLink>
                );
              })}
            </nav>

            {/* Action buttons inside mobile menu */}
            <div className="pt-2 border-t border-white/10 space-y-2.5">
              <button
                type="button"
                aria-label="Request a free project quotation"
                onClick={() => {
                  setIsOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center px-5 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-brand-green-dark to-brand-green-emerald hover:from-brand-green hover:to-emerald-500 rounded-lg shadow-lg shadow-emerald-900/30 active:scale-[0.98] transition-transform"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium text-center"
                >
                  <Phone className="w-4 h-4 text-brand-gold-warm" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-xs font-medium text-center"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop overlay when mobile menu is open */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

