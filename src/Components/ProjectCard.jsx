import React from "react";

const ProjectCard = ({ title, description, tags, color, link, icon }) => {
  return (
    <div className="fade-in-up flip-card">
      <div className="flip-card-inner">
        {/* ── FRONT ──────────────────────── */}
        <div className="flip-card-front glass-premium rounded-xl overflow-hidden">
          <div className={`h-[3px] bg-gradient-to-r ${color}`} />
          <div className="p-3.5 flex flex-col h-full">
            {/* Icon + Title */}
            <div className="flex items-center gap-2.5 mb-2">
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${color} text-white flex items-center justify-center`}
              >
                {icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white font-[Space_Grotesk] tracking-tight leading-snug">
                {title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-[11px] sm:text-xs leading-relaxed mb-2.5 line-clamp-2">
              {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mt-auto">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-1.5 py-0.5 rounded-full text-[9px] font-semibold bg-gray-800/80 text-gray-400 border border-gray-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── BACK ───────────────────────── */}
        <div className="flip-card-back rounded-xl overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-[0.08]`} />
          <div className="absolute inset-0 bg-[#0a0f1e]/90" />
          <div className={`relative h-[3px] bg-gradient-to-r ${color}`} />

          <div className="relative p-3.5 flex flex-col h-full">
            {/* Title */}
            <div className="flex items-center gap-2 mb-2">
              <div
                className={`flex-shrink-0 w-7 h-7 rounded-md bg-gradient-to-br ${color} text-white flex items-center justify-center`}
              >
                {icon}
              </div>
              <h3 className="text-sm font-bold text-white font-[Space_Grotesk] tracking-tight">
                {title}
              </h3>
            </div>

            {/* Full description */}
            <p className="text-gray-300 text-[11px] sm:text-xs leading-relaxed mb-3 flex-grow">
              {description}
            </p>

            {/* CTA */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r ${color} text-white text-[11px] font-bold tracking-wide shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 mt-auto`}
            >
              View Live
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
