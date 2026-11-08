import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';

export default function Footer({ onOpenQuote }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-dark text-slate-300 border-t border-white/10 relative overflow-hidden">
      {/* Decorative architectural background element */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 relative z-10">
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

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Established in {COMPANY_INFO.established}, Sai Sri Infra Solutions delivers professional architectural aluminium, ACP sheet fixing, structural front elevations, and office partitions with steadfast dedication.
            </p>

            {/* Motto Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Motto: &ldquo;{COMPANY_INFO.motto}&rdquo;</span>
            </div>

            <div className="pt-2">
              <p className="text-xs text-slate-400 font-medium">
                Milestone: <span className="text-amber-400 font-bold">{COMPANY_INFO.experienceMetric}</span>
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase font-heading">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors inline-block py-0.5">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors inline-block py-0.5">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors inline-block py-0.5">Our Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-emerald-400 transition-colors inline-block py-0.5">Projects Gallery</Link>
              </li>
              <li>
                <Link to="/clients" className="hover:text-emerald-400 transition-colors inline-block py-0.5">Our Clients</Link>
              </li>
              <li>
                <Link to="/referrals" className="hover:text-emerald-400 transition-colors inline-block py-0.5">Referral Program</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors inline-block py-0.5">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase font-heading">
              Our Services
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services?highlight=${s.id}`}
                    className="hover:text-emerald-400 transition-colors flex items-center py-0.5 text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 mr-2 shrink-0"></span>
                    <span className="truncate">{s.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-emerald-400 hover:text-emerald-300 font-medium text-xs inline-flex items-center mt-1"
                >
                  Explore all 3 services <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Action (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase font-heading">
              Get in Touch
            </h3>
            
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-start space-x-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-md bg-white/5 border border-white/10 group-hover:border-emerald-500/40 shrink-0 text-brand-gold-warm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Direct Phone Line</span>
                  <span className="font-semibold text-white group-hover:text-emerald-400 text-sm tracking-wide">
                    {COMPANY_INFO.phoneDisplay}
                  </span>
                </div>
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-md bg-emerald-950/60 border border-emerald-500/40 shrink-0 text-emerald-400">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">WhatsApp Inquiry</span>
                  <span className="font-semibold text-emerald-400 text-sm">Instant Project Connect</span>
                </div>
              </a>

              <div className="flex items-start space-x-3 text-slate-300">
                <div className="p-2 rounded-md bg-white/5 border border-white/10 shrink-0 text-slate-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Working Hours</span>
                  <span className="text-xs text-slate-300">{COMPANY_INFO.workingHours}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-slate-300">
                <div className="p-2 rounded-md bg-white/5 border border-white/10 shrink-0 text-slate-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Service Coverage</span>
                  <span className="text-xs text-slate-300">{COMPANY_INFO.serviceRegions}</span>
                </div>
              </div>
            </div>

            <div className="pt-1">
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
    </footer>
  );
}

