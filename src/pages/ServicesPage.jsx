import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink,
  ShieldCheck, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/companyData';
import ProjectEstimator from '../components/ProjectEstimator';
import { ScrollFadeSection, ScrollReveal, StaggerContainer, StaggerItem } from '../components/animation';

export default function ServicesPage({ onSelectService, onOpenQuote }) {
  const location = useLocation();
  const highlightedRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const highlightId = params.get('highlight');
    if (highlightId && highlightedRef.current) {
      highlightedRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [location.search]);

  const params = new URLSearchParams(location.search);
  const activeHighlight = params.get('highlight');

  return (
    <div className="space-y-0">
      
      {/* Services Header */}
      <ScrollFadeSection
        as="section"
        isHero={true}
        className="bg-brand-navy text-white py-14 sm:py-20 relative overflow-hidden border-b border-white/10"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-30" />
          <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-brand-green/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal direction="down" delay={0.05}>
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 mb-4">
              Architectural Catalogue &bull; 3 Core Specialisations
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
              Our Architectural Services
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.18}>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed">
              Delivering high-end front elevations, architectural structural glazing, and aluminium composite panel works with genuine craftsmanship.
            </p>
          </ScrollReveal>
        </div>
      </ScrollFadeSection>

      {/* Services Grid Section */}
      <ScrollFadeSection
        as="section"
        className="py-16 sm:py-20 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-md">
              Engineered Facade & Interior Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mt-2">
              Comprehensive Architectural Capabilities
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Select any service below to view detailed technical specifications and inspect genuine project site photographs.
            </p>
          </ScrollReveal>

          {/* Responsive Services Grid: Desktop 3 cols, Tablet 2 cols, Mobile 1 col */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.12}>
            {SERVICES.map((service, index) => {
              const isHighlighted = activeHighlight === service.id;

              return (
                <StaggerItem
                  key={service.id}
                  scale={true}
                  className="flex flex-col"
                >
                  <div
                    ref={isHighlighted ? highlightedRef : null}
                    className={`bg-white rounded-2xl overflow-hidden border ${
                      isHighlighted ? 'border-emerald-500 ring-2 ring-emerald-400 shadow-xl' : 'border-slate-200 shadow-sm hover:shadow-xl'
                    } transition-all duration-300 flex flex-col group card-hover-lift h-full`}
                  >
                    {/* Service Card Image */}
                    <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      
                      {/* Index & slide badge */}
                      <div className="absolute top-3 left-3 flex items-center space-x-2">
                        <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shadow-md">
                          {index + 1}
                        </span>
                      </div>

                      <span className="absolute top-3 right-3 text-[11px] font-mono font-medium text-slate-200 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/20">
                        {service.slideRef}
                      </span>

                      <div className="absolute bottom-3 left-4 right-4">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                          Architectural Work
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-white font-heading leading-snug">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {service.shortDesc}
                        </p>

                        <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                            Key Features:
                          </span>
                          {service.features.slice(0, 3).map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Actions */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => onSelectService(service)}
                          className="text-xs font-semibold text-slate-700 hover:text-emerald-700 transition-colors inline-flex items-center cursor-pointer py-1.5"
                        >
                          <span>View Details</span>
                          <ExternalLink className="w-3.5 h-3.5 ml-1" />
                        </button>

                        <button
                          type="button"
                          onClick={() => onOpenQuote(service.title)}
                          className="inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-brand-green-dark to-brand-green-emerald hover:from-brand-green hover:to-emerald-500 rounded-lg shadow-sm transition-all cursor-pointer"
                        >
                          <span>Enquire CTA</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Interactive Project Estimator Tool */}
          <ScrollReveal direction="up" delay={0.15} className="mt-16">
            <ProjectEstimator onOpenQuote={onOpenQuote} />
          </ScrollReveal>

          {/* Bottom Banner */}
          <ScrollReveal direction="up" delay={0.2} className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Custom Architectural Specifications
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                Require a Custom Elevation or Office Partition Layout?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Our site engineers provide on-site measurement, design coordination, and accurate BOQ cost estimation.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenQuote()}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-sm font-semibold transition-all shadow-md shrink-0 cursor-pointer"
            >
              <span>Get Custom Estimate</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </ScrollReveal>

        </div>
      </ScrollFadeSection>

    </div>
  );
}
