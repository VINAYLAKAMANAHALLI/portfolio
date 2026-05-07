import React from "react";

const ProjectCard = ({ title, description, tags, color, link, icon }) => {
  return (
    <div className="fade-in-up flip-card aspect-square">
      <div className="flip-card-inner h-full w-full">
        {/* ── FRONT ──────────────────────── */}
        <div className="flip-card-front glass-premium rounded-xl overflow-hidden flex flex-col">
          <div className={`h-[3px] bg-gradient-to-r ${color}`} />
          <div className="p-4 flex flex-col h-full">
            {/* Icon + Title */}
            <div className="flex items-center gap-4 mb-3">
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${color} text-white flex items-center justify-center shadow-lg`}
              >
                {icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white font-[Space_Grotesk] tracking-tight leading-snug">
                {title}
              </h3>
            </div>

            {/* Project Image Placeholder */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-32 mb-4 rounded-lg overflow-hidden border border-white/5 shadow-inner block group"
            >
              <img
                src="/project-placeholder.png"
                alt={title}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
            </a>

            {/* Small Description */}
            <p className="text-gray-300 text-xs font-bold leading-relaxed mb-3 line-clamp-2">
              {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-white/5 text-indigo-300 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── BACK ───────────────────────── */}
        <div className="flip-card-back rounded-xl overflow-hidden flex flex-col h-full">
          <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-[0.08]`} />
          <div className="absolute inset-0 bg-[#0a0f1e]/90" />
          <div className={`relative h-[3px] bg-gradient-to-r ${color}`} />

          <div className="relative p-4 flex flex-col h-full">
            {/* Title */}
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${color} text-white flex items-center justify-center`}
              >
                {icon}
              </div>
              <h3 className="text-sm font-bold text-white font-[Space_Grotesk] tracking-tight">
                {title}
              </h3>
            </div>

            {/* Full description */}
            <p className="text-gray-200 text-sm font-bold leading-relaxed mb-6">
              {description}
            </p>

            {/* CTA */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r ${color} text-white text-xs font-bold tracking-wide shadow-lg hover:brightness-110 active:scale-95 transition-all duration-300 mt-auto`}
            >
              Explore Project
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
