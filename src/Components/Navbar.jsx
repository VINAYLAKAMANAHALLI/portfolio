import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 60);

      // Hide navbar on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
        setMobileOpen(false); // close mobile menu when scrolling down
      } else {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-item", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out",
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      id="navbar"
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 transition-transform transition-colors duration-500 rounded-full ${
        isVisible ? "translate-y-0" : "-translate-y-24"
      } ${
        scrolled
          ? "bg-transparent backdrop-blur-xl border-b border-white/5 shadow-2xl py-4"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="nav-item text-3xl font-extrabold font-[Space_Grotesk] tracking-tighter hover:opacity-90 transition-opacity duration-300"
        >
          <span className="gradient-text">VL</span>
          <span className="text-cyan-400">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10 lg:gap-14">
          {navLinks.map((link) => (
            <li key={link.href} className="nav-item">
              <a
                href={link.href}
                className="relative text-base font-bold text-gray-300 hover:text-white tracking-wide transition-all duration-300 group hover:-translate-y-1 inline-block"
              >
                <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-cyan-300 transition-all duration-300">
                  {link.label}
                </span>
                <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full group-hover:w-full transition-all duration-500 ease-out shadow-[0_0_8px_rgba(34,211,238,0.8)] opacity-0 group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="nav-item hidden group md:inline-flex items-center gap-2 px-8 py-3 rounded-full text-base font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/20 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Let's Talk
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-item md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle navigation"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 py-8 mt-2 bg-[#030712]/95 backdrop-blur-xl border-t border-white/5">
          {navLinks.map((link) => (
            <li key={link.href} className="w-full text-center">
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-lg font-bold text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2 w-full px-10">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center py-4 rounded-full text-base font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/20"
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
