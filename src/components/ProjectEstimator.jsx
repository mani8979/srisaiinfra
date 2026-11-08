import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/companyData';

export default function ProjectEstimator({ onOpenQuote }) {
  const [selectedService, setSelectedService] = useState('Front Elevation ACP Sheet Fixing');
  const [area, setArea] = useState(1500);
  const [buildingType, setBuildingType] = useState('Retail Showroom / Storefront');

  // Realistic architectural estimations
  const calculateDays = () => {
    if (area <= 500) return '4 – 7 Business Days';
    if (area <= 2000) return '8 – 15 Business Days';
    if (area <= 5000) return '15 – 25 Business Days';
    return '25 – 45 Business Days';
  };

  const getMaterialSpecs = () => {
    if (selectedService.includes('Aluminium Composite Panel') || selectedService.includes('ACP')) {
      return '4mm Exterior Grade PVDF-Coated ACP Sheets with Heavy-Duty Aluminium GI Sub-Frame & Weather Silicone';
    }
    if (selectedService.includes('Glazing') || selectedService.includes('Glass')) {
      return '10mm/12mm Toughened Safety Glass with Heavy-Gauge Aluminium Spider / Structural Glazing Profiles';
    }
    if (selectedService.includes('Elevations')) {
      return 'Commercial Front Elevation Framing with Heavy-Duty Aluminium Sub-Structure, Integrated Cladding & Structural Glazing';
    }
    return 'Heavy-Gauge Powder-Coated Aluminium Framing with Toughened Glazing & Composite Panel Inserts';
  };

  const handleConsultation = () => {
    const summary = `Estimated Scope: ${selectedService} | Approx. Area: ${area} sq.ft | Building Type: ${buildingType} | Projected Timeline: ${calculateDays()}`;
    onOpenQuote(summary);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-md mb-2">
            <Calculator className="w-4 h-4 text-emerald-600" />
            <span>Interactive Project Scope Estimator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
            Estimate Your Commercial Elevation & Partition Scope
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Configure approximate square footage to view projected materials, timeline, and request an on-site survey.
          </p>
        </div>

        <div className="text-right shrink-0">
          <span className="text-xs text-slate-500 font-medium block">
            Guaranteed Quality Benchmark
          </span>
          <span className="text-sm font-bold text-emerald-700 font-heading">
            &ldquo;{COMPANY_INFO.motto}&rdquo;
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        
        {/* Controls Column (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Service Selector */}
          <div>
            <label htmlFor="estimator-service" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              1. Select Architectural Service
            </label>
            <select
              id="estimator-service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          {/* Area Slider */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              <label htmlFor="estimator-area">
                2. Approximate Elevation / Partition Area
              </label>
              <span className="text-emerald-700 font-bold font-mono text-sm bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                {area.toLocaleString()} Sq. Ft.
              </span>
            </div>
            <input
              id="estimator-area"
              type="range"
              min="200"
              max="10000"
              step="100"
              value={area}
              aria-label="Approximate area in square feet"
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>200 sq.ft (Single Cabin/Portal)</span>
              <span>2,500 sq.ft</span>
              <span>10,000+ sq.ft (Tower Elevation)</span>
            </div>
          </div>

          {/* Building Category */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              3. Structure / Building Category
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                'Retail Showroom / Storefront',
                'Corporate Office / Interior',
                'Multi-Storey Commercial Complex'
              ].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setBuildingType(type)}
                  className={`p-2.5 rounded-lg text-xs font-medium text-left border transition-all cursor-pointer ${
                    buildingType === type
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold ring-1 ring-emerald-400'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Output & Summary Card (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl p-5 sm:p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Scope Projection
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                Est. {COMPANY_INFO.established}
              </span>
            </div>

            <div>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                Selected Work
              </span>
              <h4 className="text-base font-bold text-white font-heading mt-0.5">
                {selectedService}
              </h4>
            </div>

            <div>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                Recommended Specification
              </span>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed bg-white/5 p-2.5 rounded-lg border border-white/10">
                {getMaterialSpecs()}
              </p>
            </div>

            <div className="flex items-center space-x-2 text-xs text-amber-300 bg-amber-950/40 p-2.5 rounded-lg border border-amber-500/30">
              <Clock className="w-4 h-4 shrink-0 text-amber-400" />
              <span>Projected Installation: <strong>{calculateDays()}</strong></span>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleConsultation}
              className="w-full inline-flex items-center justify-center py-3 px-4 rounded-lg bg-gradient-to-r from-brand-green-dark to-brand-green-emerald hover:from-brand-green hover:to-emerald-500 text-white font-semibold text-xs tracking-wide shadow-md transition-all cursor-pointer"
            >
              <span>Request Detailed Site BOQ & Survey</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
            <p className="text-[10px] text-center text-slate-400 mt-2">
              Free on-site measurements and laser survey across South India.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

