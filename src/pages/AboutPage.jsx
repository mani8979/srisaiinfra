import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Target, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  Layers,
  Award
} from 'lucide-react';
import { COMPANY_INFO, COMPANY_JOURNEY } from '../data/companyData';

export default function AboutPage({ onOpenQuote }) {
  return (
    <div className="space-y-0">
      
      {/* Page Header Banner */}
      <section className="bg-brand-navy text-white py-14 sm:py-20 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute -top-24 right-0 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-brand-green/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-3.5 py-1.5 rounded-full mb-4">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>Established 2017 &bull; Architectural Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
            About Sai Sri Infra Solutions
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed">
            Delivering precision architectural aluminium, ACP cladding, structural glass fixing, and commercial spatial solutions with unwavering dedication to customer excellence.
          </p>
        </div>
      </section>

      {/* Main Company Story & Motto Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Story text (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-md">
                Company Inception & Background
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
                Built on Trust, Precision and Service Excellence
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Sai Sri Infra Solutions was established in 2017. The company initially started with facility services, including housekeeping, and gradually expanded its service catalogue into aluminium, glass and architectural solutions.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Over the years, our dedication to on-site quality and customer satisfaction enabled us to undertake complex commercial architectural projects. From modern front elevations with ACP sheets and architectural louvers to sound-dampened executive office partitions, we deliver end-to-end structural precision.
              </p>

              {/* Motto Card Highlight */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900 to-brand-navy text-white shadow-xl border border-emerald-500/30 space-y-2">
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>Official Company Motto</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-amber-300 tracking-tight">
                  &ldquo;SERVE ALL TO THE BEST&rdquo;
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  This guiding principle governs our client interactions, material selection, workmanship, and timely project delivery on every job site.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-2xl font-black text-brand-navy font-heading">2017</span>
                  <span className="text-xs font-semibold text-slate-600 uppercase">Year of Establishment</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-2xl font-black text-emerald-700 font-heading">235+</span>
                  <span className="text-xs font-semibold text-slate-600 uppercase">Completed Engagements</span>
                </div>
              </div>
            </div>

            {/* Visual Logo / Presentation Slide Tribute (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border-2 border-emerald-500/20 shadow-2xl p-6 text-center space-y-4">
                <div className="h-28 w-auto flex items-center justify-center mx-auto">
                  <img
                    src="/logo/logo_cropped_dark.jpg"
                    alt="Sai Sri Infra Solutions Official Logo"
                    className="h-24 w-auto object-contain rounded"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">
                    SAI SRI INFRA SOLUTIONS
                  </h3>
                  <p className="text-xs text-emerald-400 font-semibold tracking-wider uppercase mt-0.5">
                    Architectural Aluminium & Glazing
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 text-left space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Heavy-gauge architectural aluminium extrusions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>High-durability ACP sheets & weather-proof sealing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Structural glazing & safety glass elevations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Office partitions, cabins & cubicle engineering</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenQuote()}
                    className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide transition-colors shadow-md"
                  >
                    Discuss Your Project With Us
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Timeline / Journey Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-md">
              Growth & Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mt-2">
              Our Journey Since 2017
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Tracing our expansion from facility services to premier architectural aluminium and facade solutions.
            </p>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-slate-300">
            {COMPANY_JOURNEY.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-emerald-700 border-4 border-white shadow-md flex items-center justify-center text-white z-10">
                    <span className="text-[10px] font-bold font-mono">{index + 1}</span>
                  </div>

                  {/* Card Content */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-slate-200 transition-all">
                      <span className="inline-block px-2.5 py-0.5 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800 mb-2">
                        {step.year}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 font-heading">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values & Quality Commitment */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-md">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mt-2">
              Our Commitment to Quality & Precision
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Every project is measured, fabricated, and installed to meet rigorous commercial architectural standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                Precision Engineering
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Millimeter accuracy in aluminium frame fabrication, laser-aligned ACP panel groove joints, and secure mechanical anchors designed for high wind load.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                Certified Materials
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We utilize verified architectural grade aluminium alloys, premium PVDF-coated ACP sheets, and certified toughened safety glass with structural sealants.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                Customer-First Service
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Living our motto &ldquo;Serve All to the BEST&rdquo; by maintaining transparent communication, honoring project deadlines, and delivering lasting architectural value.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-brand-navy hover:bg-brand-navy-light rounded-xl shadow-md transition-colors mr-3"
            >
              <span>Explore Genuine Project Works</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <button
              type="button"
              onClick={() => onOpenQuote()}
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-colors cursor-pointer mt-3 sm:mt-0"
            >
              <span>Request Consultation</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

