import React, { useState } from 'react';
import { 
  Building2, 
  Layers, 
  Filter, 
  Tag, 
  ExternalLink, 
  Clock, 
  Sparkles,
  ArrowRight,
  HardHat,
  CalendarCheck
} from 'lucide-react';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/companyData';
import { ScrollFadeSection, ScrollReveal, StaggerContainer, StaggerItem } from '../components/animation';

export default function ProjectsPage({ onSelectProject, onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects = selectedCategory === "All Projects"
    ? PROJECTS
    : PROJECTS.filter((p) => {
        if (selectedCategory === "Best Works") return p.category === "Best Works";
        if (selectedCategory === "ACP Sheet Fixing") return p.category === "ACP Sheet Fixing";
        if (selectedCategory === "ACP & Aluminium Louvers") return p.category === "ACP & Aluminium Louvers";
        if (selectedCategory === "Aluminium Partitioning") return p.category === "Aluminium Partitioning";
        if (selectedCategory === "Ongoing Projects") return p.category === "Ongoing Projects";
        if (selectedCategory === "Upcoming Projects") return p.category === "Upcoming Projects";
        return p.category.toLowerCase().includes(selectedCategory.toLowerCase());
      });

  const ongoingProjects = PROJECTS.filter((p) => p.category === "Ongoing Projects");
  const upcomingProjects = PROJECTS.filter((p) => p.category === "Upcoming Projects");

  const getCategoryCount = (category) => {
    if (category === "All Projects") return PROJECTS.length;
    return PROJECTS.filter(p => p.category === category).length;
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
              Genuine Portfolio &bull; 235+ Projects Executed
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
              Our Architectural Projects
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.18}>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed">
              Explore authentic commercial facade elevations, ACP sheet cladding, aluminium louvers, and executive office partitions executed by Sai Sri Infra Solutions.
            </p>
          </ScrollReveal>
        </div>
      </ScrollFadeSection>

      {/* Main Gallery Section */}
      <ScrollFadeSection
        as="section"
        className="py-14 sm:py-18 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Bar */}
          <ScrollReveal direction="up" className="flex items-center justify-between flex-wrap gap-4 mb-10 pb-6 border-b border-slate-200">
            <div className="flex items-center space-x-2 text-slate-700 text-sm font-semibold">
              <Filter className="w-4 h-4 text-emerald-600" />
              <span>Filter by Category:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {PROJECT_CATEGORIES.map((category) => {
                const count = getCategoryCount(category);
                const isSelected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-700 text-white shadow-md'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Project Cards Grid */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.08}>
            {filteredProjects.map((project) => (
              <StaggerItem
                key={project.id}
                scale={true}
                className="flex flex-col"
              >
                <div
                  onClick={() => onSelectProject(project)}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer card-hover-lift h-full"
                >
                  {/* Image Frame */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex items-center space-x-2">
                      <span className="inline-flex items-center text-[10px] font-semibold px-2.5 py-1 rounded-md bg-emerald-600 text-white shadow-sm">
                        <Tag className="w-3 h-3 mr-1" />
                        {project.category}
                      </span>
                    </div>

                    <span className="absolute top-3 right-3 text-[10px] font-mono font-medium text-slate-200 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/20">
                      {project.slideRef}
                    </span>

                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-base sm:text-lg font-bold text-white font-heading group-hover:text-emerald-300 transition-colors leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Caption & Metadata */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {project.caption}
                    </p>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 font-medium">
                        Genuine Site Photograph
                      </span>
                      <span className="text-emerald-700 font-semibold group-hover:underline inline-flex items-center">
                        Enlarge <ExternalLink className="w-3 h-3 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </ScrollFadeSection>

      {/* SECTION 10: DEDICATED ONGOING & UPCOMING PROJECTS SECTION */}
      <ScrollFadeSection
        as="section"
        className="py-16 sm:py-20 bg-white border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Ongoing Works */}
          <div>
            <ScrollReveal direction="left" className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800">
                <HardHat className="w-6 h-6" />
              </div>
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200">
                  Active Site Execution &bull; Slide 15 - 18
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  Ongoing Projects
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <p className="text-sm text-slate-600 mb-8 max-w-2xl">
                Live photographs from active project sites showcasing multi-story framework fabrication, scaffolding safety, and on-site ACP sheet & glass fixing in progress.
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
              {ongoingProjects.map((p) => (
                <StaggerItem
                  key={p.id}
                  scale={true}
                  className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all cursor-pointer group card-hover-lift"
                >
                  <div onClick={() => onSelectProject(p)}>
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-2 right-2 text-[10px] font-mono text-white bg-black/60 px-2 py-0.5 rounded">
                        {p.slideRef}
                      </span>
                      <span className="absolute bottom-2 left-2 text-[10px] font-semibold text-amber-400 bg-slate-900/90 px-2 py-0.5 rounded border border-amber-500/30">
                        Work In Progress
                      </span>
                    </div>
                    <div className="p-3.5">
                      <h4 className="text-sm font-bold text-slate-900 font-heading leading-tight group-hover:text-emerald-700">
                        {p.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {p.caption}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Upcoming Works */}
          <div className="pt-8 border-t border-slate-200">
            <ScrollReveal direction="left" className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200">
                  Scheduled Pipeline &bull; Slide 19 - 20
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  Upcoming / Next Works
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <p className="text-sm text-slate-600 mb-8 max-w-2xl">
                Contracted commercial locations and structures scheduled for upcoming front elevation glass fixing, ACP panelling, and facade transformation.
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl" staggerDelay={0.12}>
              {upcomingProjects.map((p) => (
                <StaggerItem
                  key={p.id}
                  scale={true}
                  className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all cursor-pointer group card-hover-lift"
                >
                  <div onClick={() => onSelectProject(p)}>
                    <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-2 right-2 text-[10px] font-mono text-white bg-black/60 px-2 py-0.5 rounded">
                        {p.slideRef}
                      </span>
                      <span className="absolute bottom-2 left-2 text-[10px] font-semibold text-emerald-300 bg-slate-900/90 px-2 py-0.5 rounded border border-emerald-500/30">
                        Scheduled Facade
                      </span>
                    </div>
                    <div className="p-4">
                      <h4 className="text-base font-bold text-slate-900 font-heading leading-tight group-hover:text-emerald-700">
                        {p.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1">
                        {p.caption}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>
      </ScrollFadeSection>

      {/* CTA Box */}
      <ScrollFadeSection
        as="section"
        className="py-12 bg-slate-100 border-t border-slate-200"
      >
        <ScrollReveal direction="up" className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
            Need Architectural Elevations For Your Upcoming Site?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Contact us for drawing review, site survey, sample finish approvals, and detailed quotation.
          </p>
          <button
            type="button"
            onClick={() => onOpenQuote()}
            className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-brand-green-dark to-brand-green-emerald hover:from-brand-green hover:to-emerald-500 text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
          >
            <span>Request Site Survey & Quote</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </ScrollReveal>
      </ScrollFadeSection>

    </div>
  );
}
