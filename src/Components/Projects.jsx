import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Sajre-NAS",
    description:
      "A comprehensive admin dashboard with multiple modules and seamless API integration for managing organizational workflows.",
    tags: ["React.js", "Tailwind CSS", "REST API", "Dashboard"],
    color: "from-indigo-500 to-blue-600",
    link: "https://sajre-nas.com", // Replace with the actual project URL
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Portfolio Website",
    description:
      "A sleek, animated personal portfolio built with modern technologies to showcase skills and projects in a premium design.",
    tags: ["React", "Tailwind CSS", "GSAP", "Responsive"],
    color: "from-purple-500 to-pink-600",
    link: "#",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Kookart E-Commerce",
    description:
      "A full-featured e-commerce platform with product browsing, cart management, secure checkout, and order tracking.",
    tags: ["React.js", "Tailwind CSS", "Redux", "REST API"],
    color: "from-emerald-500 to-green-600",
    link: "#",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    title: "Todo App",
    description:
      "A sleek task management app with add, edit, delete, and filter functionality. Features persistent storage and smooth animations.",
    tags: ["React.js", "JavaScript", "CSS", "LocalStorage"],
    color: "from-orange-500 to-amber-600",
    link: "#",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Customized Tailoring",
    description:
      "A web application for a tailoring business — browse services, book appointments, submit measurements, and place orders.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    color: "from-pink-500 to-rose-600",
    link: "#",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L5.121 5.121m0 0A3 3 0 107.243 7.243M5.121 5.121L3 3m0 0l2.121 2.121" />
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
        <div className="text-center mb-16 stagger">
          <span className="fade-in-up inline-block text-xs font-bold text-indigo-400 tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            Projects
          </span>
          <h2 className="fade-in-up text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[Space_Grotesk] text-white tracking-tight">
            Things I've <span className="gradient-text font-black">Built</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 stagger">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
