import React, { useState } from 'react';
import { 
  Share2, 
  Building2, 
  CheckCircle2, 
  MessageCircle, 
  PhoneCall, 
  ArrowRight, 
  Users, 
  Sparkles,
  HelpCircle,
  Eye,
  Send,
  CheckCircle
} from 'lucide-react';
import { COMPANY_INFO, REFERRALS_DATA } from '../data/companyData';

export default function ReferralsPage({ onOpenQuote }) {
  const [referralForm, setReferralForm] = useState({
    referrerName: '',
    referrerPhone: '',
    clientName: '',
    clientContact: '',
    projectCategory: 'Upcoming Showrooms',
    siteLocation: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!referralForm.referrerName || !referralForm.referrerPhone || !referralForm.clientName) {
      alert('Please fill in your name, contact phone, and the lead/client details.');
      return;
    }
    setSubmitted(true);
  };

  const shareViaWhatsApp = () => {
    const text = `Hello Sai Sri Infra Solutions!%0A*I have a project referral for you:*%0A- *My Name:* ${encodeURIComponent(referralForm.referrerName)}%0A- *My Phone:* ${encodeURIComponent(referralForm.referrerPhone)}%0A- *Client / Lead Name:* ${encodeURIComponent(referralForm.clientName)}%0A- *Client Contact / Location:* ${encodeURIComponent(referralForm.clientContact || 'N/A')}, ${encodeURIComponent(referralForm.siteLocation || '')}%0A- *Category:* ${encodeURIComponent(referralForm.projectCategory)}%0A- *Notes:* ${encodeURIComponent(referralForm.notes || 'Please connect with them.')}`;
    window.open(`https://wa.me/918297201888?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-0">
      
      {/* Header Banner */}
      <section className="bg-brand-navy text-white py-14 sm:py-20 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute -top-20 left-0 sm:left-10 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-brand-green/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 mb-4">
            Partnership & Referral Program &bull; Slides 21 & 22
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
            Refer Sai Sri Infra Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed">
            Help businesses discover high-precision aluminium facades, ACP cladding, and executive office partitions. We value every introduction and foster long-term partnerships.
          </p>
        </div>
      </section>

      {/* Slide 22: "How You Can Refer Us?" Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-md">
              Guidance & Action Points &bull; Slide 22
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mt-2">
              How Can You Refer Us?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Simple, everyday ways our clients, architects, and associates connect us with commercial opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {REFERRALS_DATA.callouts.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                    {item.title}
                  </h3>
                </div>

                <blockquote className="border-l-4 border-brand-gold-warm pl-4 py-2 bg-amber-50/70 rounded-r-lg">
                  <p className="text-base sm:text-lg font-bold text-slate-800 italic font-heading">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </blockquote>

                <p className="text-sm text-slate-600 leading-relaxed pt-1">
                  {item.action}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Slide 21: Direct and Indirect Referral Opportunities */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Direct Referrals (8 categories) */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Target Commercial Opportunities &bull; Slide 21
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  Direct Referrals
                </h2>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-8 max-w-2xl">
              Commercial projects requiring active structural glass fixing, aluminium framing, ACP sheet facade cladding, and spatial cubicle partitions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {REFERRALS_DATA.direct.map((dir, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-500/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-emerald-700 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{dir.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {dir.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indirect Referrals */}
          <div className="pt-6 border-t border-slate-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Trade & Supplier Synergy &bull; Slide 21
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  Indirect Referrals
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {REFERRALS_DATA.indirect.map((indir, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3"
                >
                  <div className="flex items-center space-x-2 text-slate-900 font-bold text-base">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                    <span>{indir.title}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {indir.desc}
                  </p>
                  <div className="pt-2 text-xs font-semibold text-emerald-700">
                    &bull; Long-term contractor & supply channel collaboration
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Referral Submission Form */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xl">
            
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-md">
                Fast-Track Connection
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-2">
                Submit a Project Referral
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Enter the details of the site or enterprise you wish to introduce. We handle inquiries with absolute professionalism.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Thank You for Your Valuable Referral!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  We have logged your introduction for <strong>{referralForm.clientName}</strong>. Our management will review the opportunity and keep you informed.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={shareViaWhatsApp}
                    className="inline-flex items-center space-x-2 py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Directly via WhatsApp to Sai Sri Infra</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={referralForm.referrerName}
                      onChange={(e) => setReferralForm({ ...referralForm, referrerName: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Your Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={referralForm.referrerPhone}
                      onChange={(e) => setReferralForm({ ...referralForm, referrerPhone: e.target.value })}
                      placeholder="Your 10-digit Mobile Number"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Referred Enterprise / Client Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={referralForm.clientName}
                      onChange={(e) => setReferralForm({ ...referralForm, clientName: e.target.value })}
                      placeholder="Company, Showroom, or Person Name"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Opportunity Category
                    </label>
                    <select
                      value={referralForm.projectCategory}
                      onChange={(e) => setReferralForm({ ...referralForm, projectCategory: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    >
                      <option value="Upcoming Showrooms">Upcoming Showrooms</option>
                      <option value="New Office Spaces">New Office Spaces</option>
                      <option value="Hotels & Restaurants">Hotels & Restaurants</option>
                      <option value="Hospitals & Clinics">Hospitals & Clinics</option>
                      <option value="Shopping Malls">Shopping Malls</option>
                      <option value="Convention Centres">Convention Centres</option>
                      <option value="Banks & Financial Hubs">Banks & Financial Hubs</option>
                      <option value="Architects & Civil Consultants">Architects & Civil Consultants</option>
                      <option value="Aluminium & Glass Showroom Tie-up">Aluminium & Glass Showroom Tie-up</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Client Phone or Email
                    </label>
                    <input
                      type="text"
                      value={referralForm.clientContact}
                      onChange={(e) => setReferralForm({ ...referralForm, clientContact: e.target.value })}
                      placeholder="Phone or Email (if known)"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Site City / Location
                    </label>
                    <input
                      type="text"
                      value={referralForm.siteLocation}
                      onChange={(e) => setReferralForm({ ...referralForm, siteLocation: e.target.value })}
                      placeholder="e.g. Hyderabad / Madhapur / Vijayawada"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Additional Notes / Elevation Scope
                  </label>
                  <textarea
                    rows={2}
                    value={referralForm.notes}
                    onChange={(e) => setReferralForm({ ...referralForm, notes: e.target.value })}
                    placeholder="Any specific requirement you noticed (e.g. ACP front elevation, glass cabins, louvers)..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center space-x-1.5 text-xs text-slate-500">
                    <PhoneCall className="w-3.5 h-3.5 text-brand-gold-warm" />
                    <span>Direct Hotline: {COMPANY_INFO.phoneDisplay}</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-brand-green-dark to-brand-green-emerald hover:from-brand-green hover:to-emerald-500 text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    <span>Submit Referral</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}

