import React, { useState, useEffect } from 'react';
import { X, Send, Phone, MessageCircle, CheckCircle, AlertCircle, Building } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';

export default function QuoteModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || SERVICES[0]?.title || '',
    details: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.details.trim()) {
      newErrors.details = 'Please briefly describe your project requirement or site location';
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
      details: ''
    });
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  const dispatchToWhatsApp = () => {
    const msg = `Hello Sai Sri Infra Solutions!%0A*New Project Enquiry:*%0A- *Name:* ${encodeURIComponent(formData.name)}%0A- *Phone:* ${encodeURIComponent(formData.phone)}%0A- *Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A- *Service:* ${encodeURIComponent(formData.service)}%0A- *Details:* ${encodeURIComponent(formData.details)}`;
    window.open(`https://wa.me/918297201888?text=${msg}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-fadeIn">
        
        {/* Header */}
        <div className="bg-brand-navy p-5 sm:p-6 text-white relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Building className="w-4 h-4" />
            <span>Sai Sri Infra Solutions &bull; Est. 2017</span>
          </div>
          <h2 id="quote-modal-title" className="text-xl sm:text-2xl font-bold font-heading text-white">
            Request a Free Project Quotation
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Share your project drawings, site location, or elevation requirements. We respond within 2-4 business hours.
          </p>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-7">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-9 h-9" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Enquiry Received Successfully!
                </h3>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-800">{formData.name}</strong>. Our architectural team has logged your requirement for <strong>{formData.service}</strong> and will contact you at <strong>{formData.phone}</strong> promptly.
                </p>
              </div>

              {/* Direct WhatsApp Action for Instant Response */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-left space-y-2 mt-4">
                <p className="text-xs font-semibold text-emerald-950 uppercase tracking-wider">
                  Instant Connect via WhatsApp:
                </p>
                <p className="text-xs text-emerald-800">
                  Would you like to forward these project details directly to our technical team on WhatsApp right away?
                </p>
                <button
                  type="button"
                  onClick={dispatchToWhatsApp}
                  className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Details to WhatsApp (+91 82972 01888)</span>
                </button>
              </div>

              <div className="pt-2 flex justify-center space-x-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ramesh Reddy / Project Architect"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                    errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                  } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`}
                />
                {errors.name && (
                  <p className="text-xs text-rose-500 mt-1 flex items-center">
                    <AlertCircle className="w-3.5 h-3.5 mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone and Email in 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                      errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                      errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Service Required Dropdown */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Service Required <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white transition-all"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="General Commercial Elevation Consultation">
                    General Commercial Elevation Consultation
                  </option>
                  <option value="Complete Office Spatial Interior & Partitions">
                    Complete Office Spatial Interior & Partitions
                  </option>
                </select>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Project Details & Location <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Provide approximate area (sq ft), building type (showroom, office, hospital, hotel), and site location..."
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                    errors.details ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                  } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`}
                ></textarea>
                {errors.details && (
                  <p className="text-xs text-rose-500 mt-1 flex items-center">
                    <AlertCircle className="w-3.5 h-3.5 mr-1" />
                    {errors.details}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center text-xs text-slate-500 space-x-1.5">
                  <Phone className="w-3.5 h-3.5 text-brand-gold-warm" />
                  <span>Direct hotline: {COMPANY_INFO.phoneDisplay}</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-brand-green-dark to-brand-green-emerald hover:from-brand-green hover:to-emerald-500 rounded-lg shadow-md hover:shadow-glow-green transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 mr-2" />
                  <span>Submit Quotation Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

