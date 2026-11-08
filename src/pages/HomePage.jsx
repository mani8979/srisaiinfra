import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp,
  Award,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Images,
  Maximize2
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, PROJECTS, REFERRALS_DATA } from '../data/companyData';

export default function HomePage({ onOpenQuote, onSelectProject, onSelectService }) {
  const featuredProjects = PROJECTS.filter(p => p.category === "Best Works").slice(0, 3);
  const featuredServices = SERVICES.slice(0, 6);
  const galleryScrollRef = useRef(null);
  const [isGalleryPaused, setIsGalleryPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const handleMouseDown = (e) => {
    if (!galleryScrollRef.current) return;
    setIsDragging(true);
    setIsGalleryPaused(true);
    setStartX(e.pageX - galleryScrollRef.current.offsetLeft);
    setScrollLeftPos(galleryScrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsGalleryPaused(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !galleryScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - galleryScrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    galleryScrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const handleWheelScroll = (e) => {
    if (galleryScrollRef.current) {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        galleryScrollRef.current.scrollLeft += e.deltaY;
      }
    }
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-brand-navy text-white overflow-hidden pt-8 pb-16 sm:py-20 lg:py-24 border-b border-white/10">
        {/* Subtle Architectural Grid & Glow Background */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 -right-10 sm:-right-20 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-brand-green/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-10 sm:-left-20 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & CTAs (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Est. 2017 & Motto Pill */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-medium shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="uppercase tracking-wider font-semibold">Established 2017</span>
                <span className="text-slate-500">&bull;</span>
                <span className="text-amber-300 font-medium">Motto: &ldquo;{COMPANY_INFO.motto}&rdquo;</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.12]">
                Building Excellence Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">Aluminium, Glass</span> & Architectural Solutions
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Sai Sri Infra Solutions delivers professional architectural aluminium, ACP and glass solutions with a commitment to quality, precision and customer satisfaction.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-brand-green-dark via-brand-green to-emerald-500 hover:from-brand-green hover:to-emerald-400 rounded-xl shadow-lg shadow-emerald-950/40 hover:shadow-glow-green transition-all duration-300 transform active:scale-95 border border-emerald-400/40 cursor-pointer"
                >
                  <span>Explore Our Projects</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>

                <button
                  type="button"
                  onClick={() => onOpenQuote()}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 rounded-xl border border-white/20 transition-all duration-300 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 mr-2 text-brand-gold-warm" />
                  <span>Request a Quote</span>
                </button>
              </div>

              {/* Verified Mini Badges */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-white/10 text-left">
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-medium">ACP Cladding</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-medium">Glass Elevations</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-medium">Aluminium Partitions</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Composition (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Large Showcase Frame */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/15 bg-slate-900 group">
                  <img
                    src="/projects/image16.png"
                    alt="Sai Sri Infra Solutions - Best Work Front Elevation"
                    className="w-full h-72 sm:h-84 md:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-transparent to-transparent opacity-90" />
                  
                  {/* Floating caption on image */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-brand-navy/90 backdrop-blur-md border border-white/15 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                        Flagship Commercial Project
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-white">
                        Structural Glass & ACP Front Elevation
                      </p>
                    </div>
                    <span className="text-xs font-mono text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                      Slide 11
                    </span>
                  </div>
                </div>

                {/* Overlapping Secondary Card (Logo & Motto) */}
                <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-brand-navy-dark/95 backdrop-blur-xl border border-white/20 p-3.5 rounded-xl shadow-2xl items-center space-x-3 max-w-xs z-20">
                  <div className="w-12 h-12 rounded-lg bg-[#241407] p-1 border border-amber-600/40 shrink-0 flex items-center justify-center">
                    <img
                      src="/logo/logo_cropped_dark.jpg"
                      alt="Sai Sri Logo Badge"
                      className="h-9 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-white leading-tight">SAI SRI INFRA SOLUTIONS</p>
                    <p className="text-[11px] text-emerald-400 font-medium">Motto: &ldquo;{COMPANY_INFO.motto}&rdquo;</p>
                  </div>
                </div>

                {/* Overlapping Metric Tag */}
                <div className="absolute -top-3 right-1 sm:-top-4 sm:-right-4 bg-gradient-to-br from-emerald-600 to-green-700 text-white p-2.5 sm:p-3 rounded-xl shadow-xl border border-emerald-400/30 text-center z-20">
                  <span className="block text-xl sm:text-2xl font-black font-heading leading-none">235+</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider opacity-90">Projects Done</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COMPANY HIGHLIGHTS STRIP */}
      <section className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {COMPANY_INFO.stats.map((stat, i) => (
              <div key={i} className="text-center sm:text-left space-y-1 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-emerald-700 block uppercase tracking-wider">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-500 block leading-tight">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRODUCTION / ABOUT TEASER */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Mosaic of genuine works (5 cols) - Perfectly aligned 2x2 grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
              {/* Card 1: Front Elevations */}
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-slate-200 bg-white flex flex-col group transition-all duration-300">
                <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src="/projects/image17.png"
                    alt="Front Glass Elevation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-2.5 text-[11px] sm:text-xs font-semibold text-slate-800 bg-white border-t border-slate-100 truncate text-center">
                  Front Glass Elevation
                </div>
              </div>

              {/* Card 2: Office Partitioning */}
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-slate-200 bg-white flex flex-col group transition-all duration-300">
                <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src="/projects/image14.jpeg"
                    alt="Office Partitioning"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-2.5 text-[11px] sm:text-xs font-semibold text-slate-800 bg-white border-t border-slate-100 truncate text-center">
                  Office Partitioning
                </div>
              </div>

              {/* Card 3: ACP Cladding */}
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-slate-200 bg-white flex flex-col group transition-all duration-300">
                <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src="/projects/image4.jpeg"
                    alt="ACP Cladding"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-2.5 text-[11px] sm:text-xs font-semibold text-slate-800 bg-white border-t border-slate-100 truncate text-center">
                  ACP Cladding
                </div>
              </div>

              {/* Card 4: Aluminium Louvers */}
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg border border-slate-200 bg-white flex flex-col group transition-all duration-300">
                <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src="/projects/image10.jpeg"
                    alt="Aluminium Louvers"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-2.5 text-[11px] sm:text-xs font-semibold text-slate-800 bg-white border-t border-slate-100 truncate text-center">
                  Aluminium Louvers
                </div>
              </div>
            </div>

            {/* Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-md">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Our Heritage & Motto</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
                From Dedicated Facility Services to Leading Architectural Facade Specialists
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Sai Sri Infra Solutions was established in 2017. The company initially started with facility services, including housekeeping, and gradually expanded its service catalogue into aluminium, glass and architectural solutions.
              </p>

              <blockquote className="border-l-4 border-emerald-600 pl-4 py-2 my-2 bg-emerald-50/60 rounded-r-lg">
                <p className="text-base sm:text-lg font-bold text-slate-800 font-heading">
                  &ldquo;Serve All to the BEST&rdquo;
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  The foundational motto driving every panel alignment, structural joint, and customer relationship.
                </p>
              </blockquote>

              <p className="text-sm text-slate-600 leading-relaxed">
                Today, with documented experience executing over <strong>235+ projects</strong>, we partner with retail showrooms, corporate complexes, hotels, and healthcare institutions across Telangana and Andhra Pradesh.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-brand-navy hover:text-white bg-slate-200 hover:bg-brand-navy rounded-lg transition-colors cursor-pointer"
                >
                  <span>Read Full Company Story</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>

                <Link
                  to="/referrals"
                  className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Explore Referral Program</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CORE SERVICES SECTION */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-md">
                Our 3 Core Specialisations
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading mt-2">
                Specialized Architectural Services
              </h2>
              <p className="text-sm sm:text-base text-slate-500 mt-1 max-w-xl">
                Engineered front elevations, architectural structural glazing, and aluminium composite panel works executed to precision.
              </p>
            </div>

            <Link
              to="/services"
              className="mt-4 md:mt-0 inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800 group"
            >
              <span>Explore All 3 Services</span>
              <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Responsive Services Grid (3 cols desktop, 2 cols tablet, 1 col mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Service Card Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 text-[10px] font-semibold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                    {service.slideRef}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading group-hover:text-emerald-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-2 flex items-center justify-between border-t border-slate-200/80">
                    <button
                      type="button"
                      onClick={() => onSelectService(service)}
                      className="text-xs font-semibold text-slate-700 hover:text-emerald-700 transition-colors cursor-pointer"
                    >
                      View Details &rarr;
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenQuote(service.title)}
                      className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-md transition-colors cursor-pointer"
                    >
                      <span>Enquire</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-brand-navy hover:bg-brand-navy-light rounded-xl shadow-md transition-colors"
            >
              <span>Explore All 3 Core Services</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4.5 PROJECT GALLERY - INFINITE MARQUEE & SCROLLABLE SHOWCASE */}
      <section className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-10 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-3 py-1 rounded-md mb-2">
                <Images className="w-4 h-4 text-emerald-400" />
                <span>Gallery &bull; On-Site Project Portfolio</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading">
                Project Gallery
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-2xl">
                Continuous scrolling showcase of authentic commercial executions across elevations, structural glazing, ACP cladding, and louvers.
              </p>
            </div>

            <div className="text-xs text-slate-400 font-medium">
              Hover to pause &bull; Scroll / swipe freely
            </div>
          </div>
        </div>

        {/* Marquee & Touch Scroller Container (Scroll normally on the photos) */}
        <div
          ref={galleryScrollRef}
          className="w-full overflow-x-auto no-scrollbar touch-pan-x cursor-grab active:cursor-grabbing pb-2"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onWheel={handleWheelScroll}
          onTouchStart={() => setIsGalleryPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsGalleryPaused(false), 2000)}
          onMouseEnter={() => setIsGalleryPaused(true)}
        >
          <div
            className={`animate-marquee flex items-center space-x-4 sm:space-x-5 px-4 ${
              isGalleryPaused ? '[animation-play-state:paused]' : ''
            }`}
          >
            {[...PROJECTS, ...PROJECTS].map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                onClick={() => onSelectProject(project)}
                className="w-72 sm:w-84 md:w-96 h-52 sm:h-60 md:h-68 shrink-0 rounded-2xl overflow-hidden bg-slate-800 border border-white/10 relative group cursor-pointer shadow-lg hover:shadow-2xl hover:border-emerald-400/60 transition-all duration-300 select-none"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out select-none pointer-events-none"
                  loading="lazy"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom gallery guidance */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 text-center">
          <p className="text-xs text-slate-400">
            Click any photo to open high-resolution full-screen lightbox &bull; 22 genuine project milestones
          </p>
        </div>
      </section>

      {/* 5. BEST WORKS SHOWCASE */}
      <section className="py-16 sm:py-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-950/60 border border-amber-500/30 px-3 py-1 rounded-md">
              Verified Project Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white mt-3">
              Best Architectural Works
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-1">
              Genuine commercial front elevations, structural glazing, and exterior ACP panel installations directly from our portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => onSelectProject(p)}
                className="bg-slate-900/90 rounded-2xl overflow-hidden border border-white/10 shadow-xl group cursor-pointer hover:border-emerald-400/50 transition-all duration-300"
              >
                <div className="relative h-60 sm:h-64 w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-semibold text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/30">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {p.caption}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-2.5">
                    <span className="font-mono text-[11px] text-amber-400">{p.slideRef}</span>
                    <span className="text-emerald-400 font-medium group-hover:underline inline-flex items-center">
                      View Photo <ExternalLink className="w-3 h-3 ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-brand-navy bg-white hover:bg-emerald-400 hover:text-brand-navy rounded-xl shadow-lg transition-all duration-200 font-heading cursor-pointer"
            >
              <span>View Full Project Gallery ({PROJECTS.length} Works)</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. REFERRAL OPPORTUNITY BANNER */}
      <section className="py-14 sm:py-16 bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-950 text-white border-y border-emerald-500/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              Grow With Us &bull; Mutual Value Creation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white">
              Connect Opportunities With Sai Sri Infra Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              &ldquo;If you visit any office, showroom, or hotel — notice their elevation and partition needs and introduce Sai Sri Infra Solutions.&rdquo;
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/referrals"
                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-slate-900 bg-white hover:bg-emerald-300 rounded-xl transition-all shadow-md"
              >
                Learn How You Can Refer Us
              </Link>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-xl transition-all border border-emerald-400/40"
              >
                Direct WhatsApp Referral
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. QUICK CONTACT CTA */}
      <section className="py-14 sm:py-16 bg-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                Have a Commercial Elevation or Partition Project?
              </h3>
              <p className="text-sm text-slate-600 max-w-lg">
                Contact our engineering team today for site measurement, design consultation, and cost-effective quotation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors"
              >
                <PhoneCall className="w-4 h-4 mr-2 text-amber-400" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
              <button
                type="button"
                onClick={() => onOpenQuote()}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-brand-green-dark to-brand-green-emerald hover:from-brand-green hover:to-emerald-500 text-white text-sm font-semibold transition-all shadow-md cursor-pointer"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

