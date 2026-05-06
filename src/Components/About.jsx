import React from "react";

const stats = [
  { value: "1+", label: "Year Experience" },
  { value: "3+", label: "Projects Built" },
  { value: "5+", label: "Technologies" },
];

const About = () => {
  return (
    <section id="about" className="relative section-padding grid-bg border-b border-white/5">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 container-custom">
        {/* Section label */}
        <div className="text-center mb-24 stagger">
          <span className="fade-in-up inline-block text-xs font-bold text-indigo-400 tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            About Me
          </span>
          <h2 className="fade-in-up text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[Space_Grotesk] text-white tracking-tight">
            Know Who I <span className="gradient-text font-black">Am</span>
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-5 gap-14 lg:gap-20 items-center">
          {/* Image placeholder card — takes 2 columns */}
          <div className="fade-in-up lg:col-span-2 flex justify-center">
            <div className="relative group cursor-pointer">
              {/* Outer decorative gradient glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-60 blur-lg transition-all duration-700 group-hover:scale-105" />
              
              {/* Inner container */}
              <div className="relative w-64 h-76 sm:w-72 sm:h-84 rounded-2xl overflow-hidden glass-premium flex flex-col items-center justify-center border border-white/10 group-hover:border-indigo-400/30 group-hover:scale-[1.02] transition-all duration-500">
                
                {/* Visual styling orbs */}
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl group-hover:bg-indigo-500/30 transition-all duration-500" />
                <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-500/30 transition-all duration-500" />

                {/* Main avatar graphic */}
                <div className="flex flex-col items-center gap-4 text-gray-400 group-hover:text-white z-10 transition-colors duration-500">
                  <div className="p-5 rounded-full bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-white/5 group-hover:from-indigo-500/20 group-hover:to-cyan-500/20 transition-all duration-500 group-hover:scale-110">
                    <svg className="w-16 h-16 text-indigo-400 group-hover:text-cyan-300 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold tracking-widest uppercase text-gray-500 group-hover:text-gray-300">Vinay L.</span>
                </div>

                {/* Interactive premium corners */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-indigo-500/40 rounded-tl group-hover:border-indigo-400 transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-500/40 rounded-br group-hover:border-cyan-400 transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
              </div>
            </div>
          </div>

          {/* Text content — takes 3 columns */}
          <div className="lg:col-span-3 stagger flex flex-col justify-between h-full">
            <div className="space-y-6">
              <p className="fade-in-up text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
                I am a Frontend Developer with a BCA degree and experience in
                building real-world applications including ERP systems and admin
                dashboards. I focus on clean UI, performance, and user experience.
              </p>
              <p className="fade-in-up text-gray-400 text-sm sm:text-base leading-relaxed">
                Passionate about continuous learning and building impactful digital
                products. I love transforming ideas into pixel-perfect,
                high-performance web applications.
              </p>
            </div>

            {/* Stats row */}
            <div className="fade-in-up grid grid-cols-3 gap-4 sm:gap-5 mt-12">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-premium glowing-card rounded-2xl py-6 px-4 text-center cursor-default hover:scale-105 active:scale-98"
                >
                  <p className="text-3xl sm:text-4xl font-extrabold gradient-text mb-1 font-[Space_Grotesk]">
                    {stat.value}
                  </p>
                  <p className="text-2xs sm:text-xs font-bold text-gray-500 tracking-wider uppercase group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
