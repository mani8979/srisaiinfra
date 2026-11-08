import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Building2,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import { ScrollFadeSection, ScrollReveal } from '../components/animation';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: SERVICES[0]?.title || '',
    details: '',
    honeypot: '', // anti-spam honeypot
    captchaAnswer: ''
  });

  const [captchaChallenge] = useState(() => {
    const n1 = Math.floor(Math.random() * 8) + 2;
    const n2 = Math.floor(Math.random() * 7) + 1;
    return { num1: n1, num2: n2, sum: n1 + n2 };
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    // Anti-spam honeypot
    if (formData.honeypot) {
      return false;
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit phone number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.details.trim()) {
      newErrors.details = 'Please briefly describe your elevation or partition project requirements';
    }

    if (parseInt(formData.captchaAnswer, 10) !== captchaChallenge.sum) {
      newErrors.captcha = 'Incorrect math answer. Please try again.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: SERVICES[0]?.title || '',
      details: '',
      honeypot: '',
      captchaAnswer: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="space-y-0">
      
      {/* Header Banner */}
      <ScrollFadeSection
        as="section"
        isHero={true}
        className="bg-brand-navy text-white py-14 sm:py-20 relative overflow-hidden border-b border-white/10"
      >
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 sm:right-10 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-brand-green/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal direction="down" delay={0.05}>
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 mb-4">
              Connect With Our Architectural Team
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
              Contact Sai Sri Infra Solutions
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.18}>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed">
              Reach out for technical consultations, commercial drawing reviews, site measurements, and formal quotation requests.
            </p>
          </ScrollReveal>
        </div>
      </ScrollFadeSection>

      {/* Main Contact Grid */}
      <ScrollFadeSection
        as="section"
        fadeExit={false}
        className="py-16 sm:py-20 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Contact Details & Info (5 cols) */}
            <ScrollReveal direction="right" delay={0.1} className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-md">
                  Official Communication Channels
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-2">
                  We&apos;re Here to Serve Your Project
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Living by our motto &ldquo;{COMPANY_INFO.motto}&rdquo;, our engineers respond swiftly with verified estimates and site coordination.
                </p>
              </div>

              {/* Direct Phone Box */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4 card-hover-lift">
                <div className="p-3 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                  <Phone className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                    Direct Phone Line
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-lg font-bold text-slate-900 hover:text-emerald-700 transition-colors block mt-0.5 tracking-wide"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Verified contact line from company flyer & creative
                  </span>
                </div>
              </div>

              {/* WhatsApp Box */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4 card-hover-lift">
                <div className="p-3 rounded-xl bg-emerald-950/20 text-emerald-600 shrink-0">
                  <MessageCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                    WhatsApp Hotline
                  </span>
                  <span className="text-base font-bold text-slate-900 block mt-0.5">
                    Instant Architectural Support
                  </span>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-emerald-700 hover:text-emerald-800 mt-2 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200"
                  >
                    <span>Launch WhatsApp Chat</span>
                    <Send className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </div>
              </div>

              {/* Working Hours & Coverage */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                      Operating Hours
                    </span>
                    <span className="text-sm font-semibold text-slate-800 block mt-0.5">
                      {COMPANY_INFO.workingHours}
                    </span>
                    <span className="text-xs text-slate-500">Site installations executed round-the-clock as per client shift requirements</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-3 border-t border-slate-100">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                      Service Territory
                    </span>
                    <span className="text-sm font-semibold text-slate-800 block mt-0.5">
                      {COMPANY_INFO.serviceRegions}
                    </span>
                    <span className="text-xs text-slate-500">Headquartered in Telangana with multi-site execution capabilities across South India</span>
                  </div>
                </div>
              </div>

              {/* Configurable Number Confirmation Notice */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                <div className="flex items-center space-x-1.5 font-bold text-amber-950">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>Configurable Contact Hotline:</span>
                </div>
                <p>
                  Official number <strong>+91 82972 01888</strong> is extracted directly from the business card creative.
                </p>
              </div>
            </ScrollReveal>

            {/* Contact Enquiry Form (7 cols) */}
            <ScrollReveal direction="left" delay={0.15} className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-md">
                    Direct Quotation Request
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading mt-2">
                    Commercial Architectural Enquiry Form
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Fill out project specifications below and our structural estimator will respond within 24 business hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-9 h-9" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 font-heading">
                      Enquiry Received Successfully!
                    </h4>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Our commercial elevation engineering lead will review your requirement for <strong>{formData.service}</strong> and contact you at <strong>{formData.phone}</strong>.
                    </p>
                    <div className="pt-3">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-6 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Send Another Project Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {/* Anti-spam honeypot field (hidden from view) */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website-hp">Leave this empty</label>
                      <input
                        id="website-hp"
                        type="text"
                        name="website-hp"
                        value={formData.honeypot}
                        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar / Sai Infra Builder"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                          errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                        } focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Mobile / Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 98765 43210"
                          className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                            errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                          } focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-rose-500 mt-1 flex items-center">
                            <AlertCircle className="w-3.5 h-3.5 mr-1" />
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                          Email Address (Optional)
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                            errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                          } focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all`}
                        />
                        {errors.email && (
                          <p className="text-xs text-rose-500 mt-1 flex items-center">
                            <AlertCircle className="w-3.5 h-3.5 mr-1" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Service Required */}
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Service Required <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white transition-all"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Complete Commercial Front Elevation Package">
                          Complete Commercial Front Elevation Package
                        </option>
                        <option value="Interior Office Glass & Aluminium Partitions">
                          Interior Office Glass & Aluminium Partitions
                        </option>
                      </select>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label htmlFor="contact-details" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Project Details & Site Location <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="contact-details"
                        rows={3}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="Mention project type (retail showroom, corporate office, hotel, hospital), estimated sq footage, and location..."
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                          errors.details ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                        } focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all`}
                      ></textarea>
                      {errors.details && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1" />
                          {errors.details}
                        </p>
                      )}
                    </div>

                    {/* Simple Spam Protection Check */}
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <label htmlFor="contact-captcha" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Security Verification: What is {captchaChallenge.num1} + {captchaChallenge.num2}? <span className="text-rose-500">*</span>
                      </label>
                      <div className="flex items-center space-x-3">
                        <input
                          id="contact-captcha"
                          type="number"
                          value={formData.captchaAnswer}
                          onChange={(e) => setFormData({ ...formData, captchaAnswer: e.target.value })}
                          placeholder="Enter answer"
                          className={`w-32 px-3 py-1.5 text-sm rounded-lg border ${
                            errors.captcha ? 'border-rose-400 bg-rose-50' : 'border-slate-300'
                          } focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white`}
                        />
                        <span className="text-xs text-slate-500">Automated spam protection</span>
                      </div>
                      {errors.captcha && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1" />
                          {errors.captcha}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-green-dark to-brand-green-emerald hover:from-brand-green hover:to-emerald-500 rounded-xl shadow-md hover:shadow-glow-green transition-all cursor-pointer"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        <span>Submit Project Enquiry</span>
                      </button>
                    </div>
                  </form>
                )}

              </div>
            </ScrollReveal>

          </div>
        </div>
      </ScrollFadeSection>

    </div>
  );
}
