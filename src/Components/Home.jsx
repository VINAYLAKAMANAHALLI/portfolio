import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/* ── Waving Hand Icon ────────────────────────────────────── */
const WaveHand = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36">
    <path fill="#EF9645" d="M4.861 9.147c.94-.657 2.357-.531 3.201.166l-.968-1.407c-.779-1.111-.635-2.531.295-3.166.936-.636 2.277-.269 2.983.673l.503.756c-.527-1.021-.348-2.277.54-2.95.888-.674 2.163-.377 2.938.588l5.283 6.328c-.3-.893-.04-1.9.7-2.499.895-.683 2.174-.393 2.938.588l2.467 3.168c2.695 3.462 1.863 8.754-1.96 11.409L21 25.28c-3.823 2.655-8.694 1.454-11.39-2.008l-5.71-7.329C3.121 14.832 3.921 9.806 4.861 9.147z"/>
    <path fill="#FFDC5D" d="M2.695 17.336s-1.132-1.65.519-2.781c1.649-1.131 2.78.518 2.78.518l5.251 7.658c.181-.302.397-.597.649-.849l-6.101-8.9s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l6.101 8.901c.24-.239.515-.445.813-.614L9.906 11.35s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l6.101 8.901c.279-.178.582-.322.9-.432l-5.362-7.823s-1.132-1.649.518-2.78c1.649-1.131 2.78.518 2.78.518l5.362 7.823c.372-.066.758-.084 1.147-.05l-4.385-6.397s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l5.6 8.173c2.695 3.462 1.863 8.754-1.96 11.409l-2.78 1.906c-3.823 2.655-8.694 1.454-11.39-2.008L2.695 17.336z"/>
  </svg>
);

/* ── Custom Cursor Component ───────────────────────────── */
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorTrailRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = cursorTrailRef.current;
    if (!cursor || !trail) return;

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, [role='button']")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button, [role='button']")) {
        setIsHovering(false);
      }
    };

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.12;
      trailY += (mouseY - trailY) * 0.12;
      trail.style.left = `${trailX}px`;
      trail.style.top = `${trailY}px`;
      requestAnimationFrame(animateTrail);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    animateTrail();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor-dot"
        style={{
          width: isHovering ? "18px" : "10px",
          height: isHovering ? "18px" : "10px",
          background: isHovering
            ? "linear-gradient(135deg, #6366f1, #22d3ee)"
            : "linear-gradient(135deg, #6366f1, #8b5cf6)",
          boxShadow: isHovering
            ? "0 0 20px rgba(99,102,241,0.6), 0 0 40px rgba(34,211,238,0.3)"
            : "0 0 12px rgba(99,102,241,0.5)",
        }}
      />
      <div
        ref={cursorTrailRef}
        className="custom-cursor-trail"
        style={{
          width: isHovering ? "55px" : "40px",
          height: isHovering ? "55px" : "40px",
          borderColor: isHovering
            ? "rgba(34,211,238,0.5)"
            : "rgba(99,102,241,0.3)",
          boxShadow: isHovering
            ? "0 0 25px rgba(34,211,238,0.15)"
            : "0 0 15px rgba(99,102,241,0.1)",
        }}
      />
    </>
  );
};

/* ── Interactive Avatar Component ──────────────────────── */
const HeroAvatar = () => {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Tilt effect on mouse move near avatar
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleMouseMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);
      const maxDist = 350;

      if (distance < maxDist) {
        const rotateX = (distY / maxDist) * -12;
        const rotateY = (distX / maxDist) * 12;
        const scale = 1 + (1 - distance / maxDist) * 0.05;

        wrapper.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      } else {
        wrapper.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
      }
    };

    const handleMouseLeave = () => {
      wrapper.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="gsap-avatar hero-avatar-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)" }}
    >
      {/* Glow ring behind avatar */}
      <div className={`hero-avatar-glow ${isHovered ? "hero-avatar-glow--active" : ""}`} />
      <div className={`hero-avatar-ring ${isHovered ? "hero-avatar-ring--active" : ""}`} />

      {/* "Hi there!" speech bubble on hover */}
      <div className={`hero-speech-bubble ${isHovered ? "hero-speech-bubble--visible" : ""}`}>
        <WaveHand />
        <span>Hi there!</span>
      </div>

      {/* Orbiting particles on hover */}
      <div className={`hero-orbit-particles ${isHovered ? "hero-orbit-particles--active" : ""}`}>
        <span className="orbit-dot orbit-dot--1" />
        <span className="orbit-dot orbit-dot--2" />
        <span className="orbit-dot orbit-dot--3" />
        <span className="orbit-dot orbit-dot--4" />
      </div>

      <img
        ref={imgRef}
        src="/avatar.png"
        alt="Vinay Lakamanahalli — Frontend Developer"
        className={`hero-avatar-img ${isHovered ? "hero-avatar-img--hovered" : ""}`}
      />
    </div>
  );
};

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

      // Avatar floats in from right/top
      tl.fromTo(
        ".gsap-avatar",
        { opacity: 0, scale: 0.8, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2 }
      )
        .fromTo(
          ".gsap-badge",
          { opacity: 0, y: -20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 },
          "-=0.8"
        )
        .fromTo(
          ".gsap-heading",
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0 },
          "-=0.6"
        )
        .fromTo(
          ".gsap-role",
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.9 },
          "-=0.9"
        )
        .fromTo(
          ".gsap-desc",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.7"
        )
        .fromTo(
          ".gsap-btns a",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.7 },
          "-=0.6"
        )
        .fromTo(
          ".gsap-socials",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.6 },
          "-=0.5"
        );

      // Floating animation for avatar
      gsap.to(".gsap-avatar", {
        y: -12,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden grid-bg"
      ref={containerRef}
      style={{ minHeight: "100vh", cursor: "none", paddingTop: "7rem", paddingBottom: "5rem" }}
    >
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Glow Backgrounds */}
      <div className="absolute top-1/4 -left-24 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]" />

      {/* Content */}
      <div className="relative z-10 container-custom">

        {/* ── Split Hero Layout ──────────────────────────── */}
        <div className="hero-split">

          {/* LEFT — Text Content */}
          <div className="hero-left">
            {/* Badge */}
            <div className="gsap-badge inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="text-sm font-medium text-gray-200 tracking-wide">
                Available for New Opportunities
              </span>
            </div>

            {/* Heading */}
            <h1 className="gsap-heading responsive-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-[Space_Grotesk] mb-5 leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">
                Vinay
              </span>
              <br />
              <span className="gradient-text">
                Lakamanahalli
              </span>
            </h1>

            {/* Role */}
            <h2 className="gsap-role text-lg sm:text-xl lg:text-2xl font-semibold text-gray-300 mb-8 tracking-wide">
              Frontend Engineer{" "}
              <span className="text-indigo-400 mx-2 opacity-50">•</span>{" "}
              {/* UI/UX Developer */}
            </h2>

            {/* Description — increased bottom margin for breathing room */}
            <p className="gsap-desc text-gray-400 text-base sm:text-lg leading-loose mb-12 max-w-lg">
              I craft highly interactive, scalable, and pixel-perfect digital experiences.
              Specializing in{" "}
              <span className="text-indigo-400 font-medium">React.js</span>,{" "}
              <span className="text-cyan-400 font-medium">JavaScript</span>, and{" "}
              <span className="text-purple-400 font-medium">Tailwind CSS</span>.
            </p>

            {/* Buttons — increased gap & bottom margin */}
            <div className="gsap-btns flex flex-col sm:flex-row items-start gap-5 mb-20">
              <a
                href="#projects"
                className="px-8 py-4 text-base w-40 text-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold tracking-wide shadow-lg shadow-indigo-500/25 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Explore My Work
              </a>
              <a
                href="/Vinay_Resume.pdf"
                download="Vinay_Lakamanahalli_Resume.pdf"
                className="px-10 py-6 text-base w-50 text-center rounded-xl border border-white/10 glass text-gray-200 font-bold tracking-wide hover:border-purple-400/50 hover:bg-purple-500/10 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-6 mt-4">
              <a
                href="https://github.com/VINAYLAKAMANAHALLI"
                target="_blank"
                rel="noopener noreferrer"
                className="gsap-socials group flex items-center gap-3 px-5 py-3 rounded-2xl glass border border-white/5 text-gray-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:shadow-[0_0_25px_rgba(99,102,241,0.25)] hover:-translate-y-1.5 transition-all duration-300"
              >
                <GithubIcon />
                <span className="text-sm font-semibold tracking-wide opacity-0 max-w-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-300">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vinay-lakamanahalli-0906b431b/"
                target="_blank"
                rel="noopener noreferrer"
                className="gsap-socials group flex items-center gap-3 px-5 py-3 rounded-2xl glass border border-white/5 text-gray-400 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:-translate-y-1.5 transition-all duration-300"
              >
                <LinkedInIcon />
                <span className="text-sm font-semibold tracking-wide opacity-0 max-w-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-300">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* RIGHT — Avatar Illustration */}
          <div className="hero-right">
            <HeroAvatar />
          </div>
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