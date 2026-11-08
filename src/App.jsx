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

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
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
      <ScrollToTop />

      {/* Main Sticky Header */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Routed Page Content */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
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
