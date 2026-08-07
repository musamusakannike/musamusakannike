"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const RulerTicks = () => (
  <svg className="absolute top-0 left-0 w-full h-[18px]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ruler-ticks-portfolio" width="40" height="18" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="18" stroke="var(--color-primary)" strokeWidth="2" />
        <line x1="8" y1="0" x2="8" y2="8" stroke="var(--color-primary)" strokeWidth="1.5" />
        <line x1="16" y1="0" x2="16" y2="8" stroke="var(--color-primary)" strokeWidth="1.5" />
        <line x1="24" y1="0" x2="24" y2="8" stroke="var(--color-primary)" strokeWidth="1.5" />
        <line x1="32" y1="0" x2="32" y2="8" stroke="var(--color-primary)" strokeWidth="1.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ruler-ticks-portfolio)" />
  </svg>
);

const Hamburger = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="flex flex-col justify-center items-end w-10 h-10 gap-[5px] focus:outline-none z-50 relative"
    aria-label={isOpen ? "Close Menu" : "Open Menu"}
    aria-expanded={isOpen}
  >
    <span className={`w-7 h-[3px] bg-black transition-all duration-300 ease-out origin-center ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
    <span className={`w-7 h-[3px] bg-black transition-all duration-300 ease-out ${isOpen ? "opacity-0 translate-x-2" : ""}`} />
    <span className={`w-7 h-[3px] bg-black transition-all duration-300 ease-out origin-center ${isOpen ? "-rotate-45 translate-y-[-8px]" : ""}`} />
  </button>
);

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonials", href: "#testimonials" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative w-full z-50">
      {/* Top Ruler Bar */}
      <div className="relative w-full h-[40px] md:h-[60px] bg-black transition-all duration-300">
        <RulerTicks />
        {/* Brand mark in ruler */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-primary font-bold tracking-[0.3em] text-xs uppercase hidden md:block">
          CODIAC
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white border-b-2 border-black py-4 px-6 md:px-8 lg:px-16 transition-all duration-300 ${scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.08)]" : ""} lg:absolute lg:bottom-[-50%] lg:left-[5%] lg:right-[5%]`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-black flex items-center justify-center border-2 border-black" style={{ boxShadow: "3px 3px 0 var(--color-primary)" }}>
              <span className="text-primary font-bold text-sm tracking-widest" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>MK</span>
            </div>
            <span className="font-bold text-[18px] tracking-wide uppercase text-black hidden sm:block" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>
              Musa<span className="text-primary">.</span>Kannike
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="relative py-1 font-semibold text-[#171717] hover:text-primary transition-colors text-[15px] tracking-wide bg-transparent border-none cursor-pointer"
              >
                <span className="relative z-10">{link.name}</span>
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/musa-musa-kannike-fullstack-cv.pdf"
              download
              className="font-bold text-[14px] tracking-wide text-[#525252] hover:text-primary transition-colors"
            >
              Download CV
            </a>
            <button
              onClick={() => handleNavClick("#contact")}
              className="inline-flex items-center justify-center border-[3px] border-black bg-primary text-black font-bold uppercase tracking-wider text-[13px] px-5 py-2 transition-all duration-100 ease-out select-none cursor-pointer shadow-[2px_2px_0px_#0A0E11] hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0px_#0A0E11] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              HIRE ME
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col transition-all duration-300 ease-in-out lg:hidden ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
      >
        <div className="relative w-full h-[40px] bg-black"><RulerTicks /></div>
        <div className="py-4 px-6 flex items-center justify-between border-b-2 border-black">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-black flex items-center justify-center">
              <span className="text-primary font-bold text-xs tracking-widest" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>MK</span>
            </div>
            <span className="font-bold text-[16px] uppercase" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>Musa<span className="text-primary">.</span>Kannike</span>
          </Link>
          <div className="w-10 h-10" />
        </div>
        <div className="flex flex-col gap-1 p-6 pt-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="flex items-center w-full h-12 px-4 text-[16px] font-semibold text-[#171717] hover:bg-neutral-50 rounded-md transition-colors bg-transparent border-none cursor-pointer text-left"
            >
              {link.name}
            </button>
          ))}
        </div>
        <div className="mt-auto p-6 pb-12 flex flex-col gap-3">
          <a
            href="/musa-musa-kannike-fullstack-cv.pdf"
            download
            onClick={() => setIsOpen(false)}
            className="flex h-12 w-full items-center justify-center border-[3px] border-black font-bold uppercase tracking-wider text-[15px] bg-white text-black"
          >
            DOWNLOAD CV
          </a>
          <button
            onClick={() => handleNavClick("#contact")}
            className="flex h-12 w-full items-center justify-center border-[3px] border-black bg-primary text-black font-bold uppercase tracking-wider text-[15px] shadow-[3px_3px_0px_#0A0E11] cursor-pointer"
          >
            HIRE ME
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
