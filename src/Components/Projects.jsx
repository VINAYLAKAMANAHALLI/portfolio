import React from "react";

const projects = [
  {
    title: "Sajre-NAS",
    description:
      "A comprehensive admin dashboard with multiple modules and seamless API integration for managing organizational workflows.",
    tags: ["React.js", "Tailwind CSS", "REST API", "Dashboard"],
    color: "from-indigo-500 to-blue-600",
    link: "#",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    title: "School ERP System",
    description:
      "Full-featured ERP platform with dedicated Teacher, Student, and Parent dashboards plus robust management modules.",
    tags: ["React.js", "JavaScript", "ERP", "Multi-dashboard"],
    color: "from-cyan-500 to-teal-600",
    link: "#",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Portfolio Website",
    description:
      "A sleek, animated personal portfolio built with modern technologies to showcase skills and projects in a premium design.",
    tags: ["React", "Tailwind CSS", "GSAP", "Three.js"],
    color: "from-purple-500 to-pink-600",
    link: "#",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce store with real-time cart updates, secure checkout, and a robust product management system.",
    tags: ["React", "Redux Toolkit", "Stripe API", "Tailwind CSS"],
    color: "from-emerald-500 to-green-600",
    link: "#",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    title: "TaskMaster Pro",
    description:
      "Advanced task management application with drag-and-drop kanban boards, real-time collaboration, and progress analytics.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Prisma"],
    color: "from-orange-500 to-red-600",
    link: "#",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "ChatConnect",
    description:
      "A real-time messaging application supporting private chats, group channels, multimedia sharing, and typing indicators.",
    tags: ["React", "Node.js", "Socket.io", "Express"],
    color: "from-pink-500 to-rose-600",
    link: "#",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative section-padding grid-bg border-b border-white/5">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 container-custom">
        {/* Section label */}
        <div className="text-center mb-32 stagger">
          <span className="fade-in-up inline-block text-xs font-bold text-indigo-400 tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            Projects
          </span>
          <h2 className="fade-in-up text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[Space_Grotesk] text-white tracking-tight">
            Things I've <span className="gradient-text font-black">Built</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 stagger">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.title}
              className="fade-in-up group relative glass-premium glowing-card rounded-2xl overflow-hidden hover:-translate-y-2.5 active:scale-98 cursor-pointer flex flex-col justify-between block"
            >
              {/* Gradient bar top */}
              <div className={`h-1.5 bg-gradient-to-r ${project.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="p-6 sm:p-8 flex flex-col h-full justify-between">
                <div className="mb-8">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} text-white mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}
                  >
                    {project.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-[Space_Grotesk] tracking-tight mb-4 group-hover:text-indigo-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-800/80 text-gray-300 border border-gray-700/50 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 group-hover:border-indigo-500/30 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link indicator */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 group-hover:text-cyan-300 transition-colors duration-300 mt-2">
                    Explore Project
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
