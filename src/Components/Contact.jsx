import React, { useState } from "react";

const contactInfo = [
  {
    label: "Email",
    value: "vinaylakamanahalli@gmail.com",
    href: "mailto:vinaylakamanahalli@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "9380237827",
    href: "tel:9380237827",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Dharwad, Karnataka",
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Connect a backend to make this functional)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative section-padding grid-bg border-b border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 container-custom">
        {/* Section label */}
        <div className="text-center mb-32 stagger">
          <span className="fade-in-up inline-block text-xs font-bold text-indigo-400 tracking-widest uppercase mb-4 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            Contact
          </span>
          <h2 className="fade-in-up text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[Space_Grotesk] text-white tracking-tight">
            Get In <span className="gradient-text font-black">Touch</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Info cards */}
          <div className="stagger space-y-8">
            {contactInfo.map((info) => {
              const Wrapper = info.href ? "a" : "div";
              return (
                <Wrapper
                  key={info.label}
                  {...(info.href ? { href: info.href } : {})}
                  className="fade-in-up flex items-center gap-6 glass-premium glowing-card rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300 shadow-inner">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{info.label}</p>
                    <p className="text-white font-semibold text-lg sm:text-xl tracking-wide">{info.value}</p>
                  </div>
                </Wrapper>
              );
            })}

            {/* Social links */}
            <div className="fade-in-up flex items-center gap-6 pt-6">
              <a
                href="https://github.com/VINAYLAKAMANAHALLI"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl glass-premium text-gray-400 hover:text-white hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-2"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/vinay-lakamanahalli-0906b431b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl glass-premium text-gray-400 hover:text-white hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-2"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="fade-in-up glass-premium glowing-card rounded-3xl p-10 sm:p-12 space-y-8">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Name</label>
              <input id="contact-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" className="w-full px-5 py-4 rounded-xl bg-[#090d16]/75 border border-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/80 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300" />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email</label>
              <input id="contact-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className="w-full px-5 py-4 rounded-xl bg-[#090d16]/75 border border-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/80 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300" />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Message</label>
              <textarea id="contact-message" name="message" rows="5" required value={form.message} onChange={handleChange} placeholder="Your message..." className="w-full px-5 py-4 rounded-xl bg-[#090d16]/75 border border-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/80 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 resize-none" />
            </div>
            <button type="submit" id="send-message-btn" className="group w-full py-5 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer">
              Send Message
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
