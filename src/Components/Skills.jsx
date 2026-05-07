import React from "react";

const skills = [
  { name: "React.js", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Next.js", level: 70 },
  { name: "Node.js", level: 72 },
  { name: "Express.js", level: 68 },
  { name: "MongoDB", level: 65 },
  { name: "PostgreSQL", level: 60 },
  { name: "Git", level: 85 },
];

const Skills = () => {
  return (
    <section id="skills" className="relative section-padding border-b border-white/5">
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 container-custom">
        {/* Section label */}
        <div className="text-center mb-32 stagger">
          <span className="fade-in-up inline-block text-xs font-bold text-indigo-400 tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            Skills
          </span>
          <h2 className="fade-in-up text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[Space_Grotesk] text-white tracking-tight">
            My <span className="gradient-text font-black">Tech Stack</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 stagger">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="fade-in-up group glass-premium glowing-card rounded-2xl p-8 sm:p-10 hover:-translate-y-2 cursor-default transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <p className="text-lg sm:text-xl font-bold text-white font-[Space_Grotesk] tracking-tight group-hover:text-indigo-300 transition-colors duration-300">
                  {skill.name}
                </p>
                <span className="text-xs font-bold text-gray-400 group-hover:text-cyan-300 transition-colors duration-300">
                  {skill.level}%
                </span>
              </div>
              
              {/* Progress bar with glowing state */}
              <div className="w-full h-2.5 bg-gray-900/80 rounded-full overflow-hidden border border-gray-700/50">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 shadow-xl group-hover:shadow-indigo-500/50 group-hover:scale-y-110 transition-all duration-500 origin-left"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-gray-300 transition-colors duration-300">
                  Proficiency
                </span>
                <span className="w-2 h-2 rounded-full bg-gray-700 group-hover:bg-cyan-400 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
