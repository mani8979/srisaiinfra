import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import { ScrollFadeSection, ScrollReveal } from './animation';

export default function Footer({ onOpenQuote }) {
  const currentYear = new Date().getFullYear();

  return (
    <ScrollFadeSection
      as="footer"
      isLast={true}
      className="bg-brand-navy-dark text-slate-300 border-t border-white/10 relative overflow-hidden"
    >
      {/* Decorative architectural background element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-40" />
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-brand-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-brand-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 relative z-10">
        <ScrollReveal direction="up" delay={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Col 1: Brand & Bio (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <Link to="/" className="inline-flex items-center space-x-3 group">
                <div className="h-12 w-auto bg-[#241407]/90 p-1 rounded-md border border-amber-600/30 shadow-md">
                  <img
                    src="/logo/logo_cropped_dark.jpg"
                    alt="Sai Sri Infra Solutions"
                    className="h-10 w-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/logo/logo_screenshot.png';
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-extrabold text-lg tracking-tight font-heading">
                    SAI SRI INFRA
                  </span>
                  <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">
                    SOLUTIONS
                  </span>
                </div>
              </Link>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Established in 2017 with our guiding motto <span className="text-amber-300 font-semibold">&ldquo;{COMPANY_INFO.motto}&rdquo;</span>. Specialists in architectural aluminium, ACP cladding, structural glass fixing, and executive office partitions.
              </p>

              <div className="pt-1 flex items-center space-x-2 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Over 235+ successful commercial engagements</span>
              </div>
            </div>

            {/* Col 2: Quick Links (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link to="/" className="hover:text-emerald-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-emerald-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-emerald-400 transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-emerald-400 transition-colors">
                    Projects Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/clients" className="hover:text-emerald-400 transition-colors">
                    Clients & Sectors
                  </Link>
                </li>
                <li>
                  <Link to="/referrals" className="hover:text-emerald-400 transition-colors">
                    Referral Program
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-emerald-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Core Services (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Core Specialisations
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                {SERVICES.slice(0, 5).map((s) => (
                  <li key={s.id}>
                    <Link
                      to={`/services?highlight=${s.id}`}
                      className="hover:text-emerald-400 transition-colors flex items-center"
                    >
                      <span className="truncate">{s.title}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/services"
                    className="text-emerald-400 hover:underline inline-flex items-center text-xs font-semibold mt-1"
                  >
                    View All Services &rarr;
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & Enquiries (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Direct Contact
              </h4>

              <div className="space-y-2 text-xs text-slate-400">
                <div className="flex items-start space-x-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Phone Line</span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-white hover:text-emerald-400 transition-colors font-medium text-xs sm:text-sm"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">WhatsApp</span>
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-emerald-400 transition-colors font-medium"
                    >
                      Instant Project Chat
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Hours</span>
                    <span>{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Service Region</span>
                    <span>{COMPANY_INFO.serviceRegions}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-brand-green-dark to-brand-green-emerald hover:from-brand-green hover:to-emerald-500 rounded-lg shadow-md transition-all cursor-pointer"
                >
                  <span>Request Project Quotation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Bar: Copyright & Genuine notice */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p className="text-center md:text-left">
            &copy; {currentYear} <span className="text-white font-medium">Sai Sri Infra Solutions</span>. All Rights Reserved. Motto: &ldquo;{COMPANY_INFO.motto}&rdquo;.
          </p>
          <p className="text-center md:text-right text-[11px] text-slate-400">
            * All project photographs featured across this website are genuine works executed by Sai Sri Infra Solutions.
          </p>
        </div>
      </div>
    </ScrollFadeSection>
  );
}
