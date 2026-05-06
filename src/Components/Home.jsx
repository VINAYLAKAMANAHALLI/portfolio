import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a GSAP timeline for smooth, sequenced animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

      tl.fromTo(
        ".gsap-badge",
        { opacity: 0, y: -30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 }
      )
        .fromTo(
          ".gsap-heading",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0 },
          "-=0.5"
        )
        .fromTo(
          ".gsap-role",
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ".gsap-desc",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".gsap-btns",
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".gsap-socials",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.6 },
          "-=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding grid-bg"
      ref={containerRef}
    >
      {/* Glow Backgrounds */}
      <div className="absolute top-1/4 -left-24 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/20 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center flex flex-col items-center">

        {/* Badge */}
        <div className="gsap-badge inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-12">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span className="text-sm font-medium text-gray-200 tracking-wide">
            Available for New Opportunities
          </span>
        </div>

        {/* Heading */}
        <h1 className="gsap-heading responsive-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold font-[Space_Grotesk] mb-6 max-w-4xl leading-tight">
          Hi, I'm{" "}
          <span className="gradient-text">
            Vinay Lakamanahalli
          </span>
        </h1>

        {/* Role */}
        <h2 className="gsap-role text-xl sm:text-3xl font-semibold text-gray-300 mb-8 tracking-wide">
          Frontend Engineer{" "}
          <span className="text-indigo-400 mx-3 opacity-70">|</span> UI/UX Developer
        </h2>

        {/* Description */}
        <p className="gsap-desc max-w-3xl text-gray-400 text-lg sm:text-xl leading-relaxed mb-12">
          I craft highly interactive, scalable, and pixel-perfect digital experiences.
          Specializing in React.js, modern JavaScript, and Tailwind CSS, I bridge the gap
          between elegant design and flawless backend integration to build modern web architectures
          that captivate users.
        </p>

        {/* Buttons */}
        <div className="gsap-btns flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-20 mt-4">
          <a
            href="#projects"
            className="px-10 py-5 text-lg min-w-[220px] text-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold tracking-wide shadow-lg shadow-indigo-500/25 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Explore My Work
          </a>

          <a
            href="#"
            className="px-10 py-5 text-lg min-w-[220px] text-center rounded-xl border border-white/10 glass text-gray-200 font-bold tracking-wide hover:border-purple-400/50 hover:bg-purple-500/10 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Socials */}
        <div className="flex gap-7  mt-20">
          <a
            href="https://github.com/VINAYLAKAMANAHALLI"
            target="_blank"
            rel="noopener noreferrer"
            className="gsap-socials p-4 rounded-xl glass border border-white/5 text-gray-400 hover:text-indigo-400 hover:border-indigo-500/30 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-300"
          >
            <GithubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/vinay-lakamanahalli-0906b431b/"
            target="_blank"
            rel="noopener noreferrer"
            className="gsap-socials p-4 rounded-xl glass border border-white/5 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:-translate-y-1 transition-all duration-300"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-semibold">
          Scroll Down
        </span>
        <div className="w-5 h-8 rounded-full border border-gray-600 flex justify-center p-1">
          <div className="w-1 h-2 bg-indigo-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Home;