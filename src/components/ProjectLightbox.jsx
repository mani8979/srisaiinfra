import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

export default function ProjectLightbox({ project, projects, onClose, onSelectProject }) {
  const currentIndex = project ? projects.findIndex((p) => p.id === project.id) : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < projects.length - 1;

  const handlePrev = useCallback(() => {
    if (!project || currentIndex < 0) return;
    if (hasPrev) {
      onSelectProject(projects[currentIndex - 1]);
    } else {
      onSelectProject(projects[projects.length - 1]);
    }
  }, [currentIndex, hasPrev, onSelectProject, projects, project]);

  const handleNext = useCallback(() => {
    if (!project || currentIndex < 0) return;
    if (hasNext) {
      onSelectProject(projects[currentIndex + 1]);
    } else {
      onSelectProject(projects[0]);
    }
  }, [currentIndex, hasNext, onSelectProject, projects, project]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose, handlePrev, handleNext]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top Close Bar */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center space-x-3">
        <span className="text-xs text-slate-300 font-mono hidden sm:inline-block bg-white/10 px-2.5 py-1 rounded">
          {currentIndex + 1} / {projects.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
        aria-label="Previous project photo"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
        aria-label="Next project photo"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Main Image Container */}
      <div className="relative max-w-5xl max-h-[92vh] w-full flex flex-col items-center justify-center p-2">
        <div className="relative max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-lg bg-black/40 shadow-2xl border border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[72vh] max-w-full object-contain mx-auto select-none rounded"
          />
        </div>

        {/* Caption bar */}
        <div className="w-full mt-3 px-4 py-3 rounded-lg bg-slate-900/90 border border-white/10 text-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xl">
          <div>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Tag className="w-3 h-3 mr-1" />
                {project.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {project.slideRef}
              </span>
            </div>
            <h3 id="lightbox-title" className="text-base sm:text-lg font-bold text-white mt-1">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              {project.caption}
            </p>
          </div>

          <div className="text-right shrink-0">
            <span className="text-[11px] text-amber-400/90 bg-amber-950/40 px-2 py-1 rounded border border-amber-500/20">
              Verified Genuine Site Photo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
