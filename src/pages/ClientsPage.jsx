import React from 'react';
import { 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Briefcase,
  Store,
  Hotel,
  Activity,
  ShoppingBag,
  Landmark
} from 'lucide-react';
import { COMPANY_INFO, CLIENT_SECTORS } from '../data/companyData';

export default function ClientsPage({ onOpenQuote }) {
  const sectorIcons = [
    <Briefcase className="w-6 h-6 text-emerald-600" />,
    <Store className="w-6 h-6 text-emerald-600" />,
    <Hotel className="w-6 h-6 text-emerald-600" />,
    <Activity className="w-6 h-6 text-emerald-600" />,
    <ShoppingBag className="w-6 h-6 text-emerald-600" />,
    <Landmark className="w-6 h-6 text-emerald-600" />
  ];

  return (
    <div className="space-y-0">
      
      {/* Header Banner */}
      <section className="bg-brand-navy text-white py-14 sm:py-20 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute -top-20 right-0 sm:right-10 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-brand-green/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 mb-4">
            Commercial Client Relations &bull; Slide 14
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
            Our Commercial Clients & Sectors
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed">
            Delivering architectural precision, durable ACP facade finishes, and modular office partitions to prominent commercial enterprises across South India.
          </p>
        </div>
      </section>

      {/* Slide 14 Growth & Performance Chart Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Text & Analysis (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-md">
                Verified Commercial Track Record
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
                Consistent Year-on-Year Commercial Client Growth
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                As recorded in our corporate records (Slide 14: <em>My clients (commercial)</em>), Sai Sri Infra Solutions has maintained a continuous upward trajectory in client engagements and project volume from 2020 through 2024.
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Documented Milestone: 235+ Projects</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Spanning retail showrooms, corporate offices, healthcare facilities, and hospitality buildings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Strict Quality & Confidentiality Standards</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Client logos and trademarks are verified and added in compliance with corporate guidelines. We do not invent fake client logos or unverified testimonials.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenQuote()}
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
                >
                  <span>Partner With Us on Your Next Site</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Right: Slide 14 Genuine Chart Image Display (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border-2 border-slate-200 shadow-xl p-3 sm:p-5">
                <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10 text-xs">
                  <span className="font-semibold text-emerald-400 uppercase tracking-wider">
                    Slide 14 &bull; My clients (commercial)
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">
                    Yearly Commercial Growth
                  </span>
                </div>

                <div className="my-3 rounded-xl overflow-hidden bg-white p-2">
                  <img
                    src="/projects/image19.jpeg"
                    alt="Sai Sri Infra Solutions Commercial Client Growth Chart (Slide 14)"
                    className="w-full h-auto object-contain max-h-80 mx-auto"
                  />
                </div>

                <div className="px-2 pt-2 text-[11px] text-slate-300 leading-snug">
                  * Original commercial volume and client engagement chart from company presentation, documenting progressive expansion from 2020 through 2024.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Commercial Sectors Served */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-md">
              Industry Verticals
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mt-2">
              Commercial Sectors We Specialize In
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Tailored architectural solutions engineered to the specific operational, acoustic, and aesthetic needs of each industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CLIENT_SECTORS.map((sector, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3 card-hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  {sectorIcons[idx % sectorIcons.length]}
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  {sector.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {sector.description}
                </p>
                <div className="pt-2 text-xs font-semibold text-emerald-700 flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  <span>Verified Project Experience</span>
                </div>
              </div>
            ))}
          </div>

          {/* Genuine Note Banner */}
          <div className="mt-12 p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start space-x-3">
            <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="block text-amber-950 font-bold mb-0.5">Corporate Notice on Client Representation:</strong>
              Sai Sri Infra Solutions works with both private and enterprise commercial entities. In accordance with strict ethical standards, client company logos are presented only upon formal corporate confirmation. Contact us for direct reference projects in your sector.
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

