import React from "react";

const experienceData = [
  {
    company: "Sajre Edutech Pvt Ltd",
    role: "Frontend Developer | Web Developer",
    duration: "Sep 2025 – Mar 2026",
    points: [
      "Developed responsive web applications using React.js, Tailwind CSS, JavaScript",
      "Built reusable and scalable frontend components",
      "Worked on Sajre-NAS and School ERP System",
      "Integrated REST APIs with validation and error handling",
      "Collaborated with backend teams to optimize API response times",
      "Performed comprehensive testing and fixed critical UI/UX issues",
      "Enhanced application performance and accessibility standards",
    ],
  },
  {
    company: "TechNova Solutions",
    role: "Junior UI Developer",
    duration: "Jan 2024 – Aug 2025",
    points: [
      "Assisted in developing dynamic user interfaces using modern JavaScript frameworks",
      "Converted high-fidelity Figma designs into pixel-perfect CSS and React components",
      "Participated in Agile sprints and daily stand-ups to ensure timely feature delivery",
      "Reduced page load times by 15% through image optimization and code splitting",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative section-padding border-b border-white/5">
      {/* Ambient glow */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 container-custom">
        {/* Section label */}
        <div className="text-center mb-24 stagger">
          <span className="fade-in-up inline-block text-xs font-bold text-indigo-400 tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            Experience
          </span>
          <h2 className="fade-in-up responsive-heading text-[2.5rem] sm:text-4xl lg:text-5xl font-extrabold font-[Space_Grotesk] text-white">
            Where I've <span className="gradient-text font-black">Worked</span>
          </h2>
        </div>

        {/* Timeline centered cards */}
        <div className="flex flex-col gap-14 max-w-4xl mx-auto stagger">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative fade-in-up">
              {/* Card with interactive border/scale */}
              <div className="glass-premium glowing-card p-8 sm:p-12 hover:-translate-y-2 transition-transform duration-500">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 border-b border-white/5 pb-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-[Space_Grotesk] tracking-tight hover:text-indigo-300 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-cyan-400 font-semibold text-sm sm:text-base mt-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 shadow-inner">
                    <svg className="w-4 h-4 text-indigo-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {exp.duration}
                  </span>
                </div>

                {/* Points */}
                <ul className="space-y-5">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-400 hover:text-gray-200 transition-colors duration-300">
                      <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-lg shadow-cyan-400/50" />
                      <span className="text-base sm:text-lg leading-relaxed font-normal">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
