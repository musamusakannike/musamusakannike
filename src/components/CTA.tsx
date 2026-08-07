import React from "react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/musamusakannike",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com/musa_codes",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/musa-musa-kannike-02604b418/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const CTA = () => {
  return (
    <section
      id="contact"
      className="w-full border-y-2 border-black bg-black py-20 px-6 sm:px-14 lg:px-20 flex flex-col gap-12 items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10, 14, 17, 0.90), rgba(10, 14, 17, 0.90)), url('/cta-layer.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Tag */}
      <div className="inline-flex items-center gap-2">
        <span className="block w-2 h-2 bg-[#FF634E] rotate-45" />
        <span className="font-bold text-[#FF634E] uppercase tracking-widest text-sm" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>
          LET&apos;S WORK TOGETHER
        </span>
        <span className="block w-2 h-2 bg-[#FF634E] rotate-45" />
      </div>

      {/* Heading */}
      <div className="flex flex-col gap-4 text-center">
        <h2
          className="text-[42px] sm:text-[52px] lg:text-[60px] text-white font-bold leading-[1.1] uppercase"
          style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
        >
          Got a project in mind?
        </h2>
        <p className="font-medium text-[#D4D4D4] text-center max-w-[580px] mx-auto text-[17px] leading-relaxed">
          I&apos;m available for freelance projects, full-time roles, and exciting collaborations. Let&apos;s build something great together.
        </p>
      </div>

      {/* Primary CTA */}
      <a
        href="mailto:musamusakannike@gmail.com"
        className="inline-flex items-center justify-center gap-3 border-[3px] border-white bg-[#FF634E] text-black font-bold uppercase tracking-wider text-[16px] px-10 py-4 transition-all duration-100 ease-out shadow-[4px_4px_0px_#FF634E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#FF634E] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none cursor-pointer select-none"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        SEND ME AN EMAIL
      </a>

      {/* Social Links */}
      <div className="flex items-center gap-6">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-11 h-11 border-2 border-[#525252] text-[#A3A3A3] hover:border-[#FF634E] hover:text-[#FF634E] flex items-center justify-center transition-colors duration-200"
          >
            {s.icon}
          </a>
        ))}
        <a
          href="/Musa Musa Kannike Fullstack CV.pdf"
          download
          className="border-2 border-[#525252] text-[#A3A3A3] hover:border-[#FF634E] hover:text-[#FF634E] flex items-center gap-2 px-4 py-2 text-[13px] font-bold uppercase tracking-wide transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          CV
        </a>
      </div>
    </section>
  );
};

export default CTA;
