import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function WhatsAppFloat() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-5 sm:bottom-8 sm:right-7 z-40 flex items-center group">
      {/* Tooltip on desktop hover */}
      <div className="hidden md:flex items-center mr-3 px-3 py-1.5 rounded-lg bg-slate-900/95 text-white text-xs font-medium shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <span>Chat on WhatsApp: {COMPANY_INFO.phoneDisplay}</span>
      </div>

      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white flex items-center justify-center shadow-2xl hover:shadow-glow-green transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 border-white/40 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
        aria-label="Direct WhatsApp consultation with Sai Sri Infra Solutions"
      >
        {/* Animated Ping Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white/10" />
      </a>
    </aside>
  );
}

