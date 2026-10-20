"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { Locale, Dictionary } from "@/app/[lang]/dictionaries";
import {
  PORTFOLIO_TRACKS,
  TRACK_LIST,
  TRACK_DEFINITIONS,
  type PortfolioTrack,
} from "@/data/tracks";

const RulerTicks = () => (
  <svg
    className="absolute top-0 left-0 w-full h-4.5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="ruler-ticks-portfolio"
        width="40"
        height="18"
        patternUnits="userSpaceOnUse"
      >
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="18"
          stroke="var(--color-primary)"
          strokeWidth="2"
        />
        <line
          x1="8"
          y1="0"
          x2="8"
          y2="8"
          stroke="var(--color-primary)"
          strokeWidth="1.5"
        />
        <line
          x1="16"
          y1="0"
          x2="16"
          y2="8"
          stroke="var(--color-primary)"
          strokeWidth="1.5"
        />
        <line
          x1="24"
          y1="0"
          x2="24"
          y2="8"
          stroke="var(--color-primary)"
          strokeWidth="1.5"
        />
        <line
          x1="32"
          y1="0"
          x2="32"
          y2="8"
          stroke="var(--color-primary)"
          strokeWidth="1.5"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ruler-ticks-portfolio)" />
  </svg>
);

const Hamburger = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex flex-col justify-center items-end w-10 h-10 gap-1.25 focus:outline-none z-50 relative"
    aria-label={isOpen ? "Close Menu" : "Open Menu"}
    aria-expanded={isOpen}
  >
    <span
      className={`w-7 h-0.75 bg-black transition-all duration-300 ease-out origin-center ${isOpen ? "rotate-45 translate-y-2" : ""}`}
    />
    <span
      className={`w-7 h-0.75 bg-black transition-all duration-300 ease-out ${isOpen ? "opacity-0 translate-x-2" : ""}`}
    />
    <span
      className={`w-7 h-0.75 bg-black transition-all duration-300 ease-out origin-center ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
    />
  </button>
);

type NavbarProps = {
  lang: Locale;
  dict: Dictionary["nav"];
  currentTrack?: PortfolioTrack;
};

const Navbar = ({ lang, dict, currentTrack = "all" }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isTrackDropdownOpen, setIsTrackDropdownOpen] = useState(false);
  const trackDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        trackDropdownRef.current &&
        !trackDropdownRef.current.contains(event.target as Node)
      ) {
        setIsTrackDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: dict.about, href: "#about" },
    { name: dict.stack, href: "#stack" },
    { name: dict.projects, href: "#projects" },
    { name: dict.experience, href: "#experience" },
    { name: dict.testimonials, href: "#testimonials" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const isPortfolioPage =
      pathname === `/${lang}` ||
      pathname === `/${lang}/` ||
      pathname === "/" ||
      PORTFOLIO_TRACKS.some(
        (t) => pathname === `/${lang}/${t}` || pathname === `/${lang}/${t}/`
      );

    if (isPortfolioPage) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    const trackPrefix = currentTrack && currentTrack !== "all" ? `/${currentTrack}` : "";
    router.push(`/${lang}${trackPrefix}${href}`);
  };

  const handleLanguageSwitch = (targetLang: Locale) => {
    document.cookie = `NEXT_LOCALE=${targetLang}; path=/; max-age=31536000; SameSite=Lax`;

    // Replace current language in pathname
    let newPath = pathname;
    if (newPath.startsWith(`/${lang}`)) {
      newPath = `/${targetLang}${newPath.slice(lang.length + 1)}`;
    } else {
      newPath = `/${targetLang}${newPath}`;
    }
    if (!newPath.startsWith(`/${targetLang}`)) {
      newPath = `/${targetLang}`;
    }
    router.push(newPath);
  };

  const isRtl = lang === "ar";

  return (
    <header className="relative w-full z-50">
      {/* Top Ruler Bar */}
      <div className="relative w-full h-10 md:h-15 bg-black transition-all duration-300">
        <RulerTicks />
        {/* Brand mark in ruler */}
        <div
          className={`absolute ${isRtl ? "left-6" : "right-6"} top-1/2 -translate-y-1/2 text-primary font-bold tracking-[0.3em] text-xs uppercase hidden md:block font-heading`}
        >
          CODIAC
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-white border-b-2 border-black py-4 px-6 md:px-8 lg:px-16 transition-all duration-300 ${scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.08)]" : ""} lg:absolute lg:bottom-[-50%] lg:left-[5%] lg:right-[5%]`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-2 group">
            <div
              className="w-10 h-10 bg-black flex items-center justify-center border-2 border-black"
              style={{ boxShadow: "3px 3px 0 var(--color-primary)" }}
            >
              <span className="text-primary font-bold text-sm tracking-widest font-heading">
                MK
              </span>
            </div>
            <span className="font-bold text-[18px] tracking-wide uppercase text-black hidden sm:block font-heading">
              {isRtl ? (
                <>
                  موسى<span className="text-primary">.</span>كانيكي
                </>
              ) : (
                <>
                  Musa<span className="text-primary">.</span>Kannike
                </>
              )}
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="relative py-1 font-semibold text-text hover:text-primary transition-colors text-[15px] tracking-wide bg-transparent border-none cursor-pointer"
              >
                <span className="relative z-10">{link.name}</span>
              </button>
            ))}
          </div>

          {/* Desktop CTA & Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Track Switcher Dropdown */}
            <div className="relative" ref={trackDropdownRef}>
              <button
                onClick={() => setIsTrackDropdownOpen(!isTrackDropdownOpen)}
                aria-label="Select portfolio track"
                aria-expanded={isTrackDropdownOpen}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-black bg-white hover:bg-[#F3F4F6] text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#0A0E11] transition-all font-heading cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>
                  {isRtl
                    ? TRACK_DEFINITIONS[currentTrack]?.shortLabelAr || "المسار"
                    : TRACK_DEFINITIONS[currentTrack]?.shortLabelEn || "Track"}
                </span>
                <svg
                  className={`w-3 h-3 text-black transition-transform ${
                    isTrackDropdownOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isTrackDropdownOpen && (
                <div
                  className={`absolute top-full mt-1.5 ${
                    isRtl ? "left-0" : "right-0"
                  } w-52 bg-white border-2 border-black shadow-[4px_4px_0px_#0A0E11] z-50 flex flex-col p-1.5`}
                >
                  {TRACK_LIST.map((t) => {
                    const isActive = currentTrack === t.id;
                    return (
                      <Link
                        key={t.id}
                        href={t.path(lang)}
                        onClick={() => setIsTrackDropdownOpen(false)}
                        className={`flex items-center justify-between px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors font-heading ${
                          isActive
                            ? "bg-primary text-black"
                            : "text-text hover:bg-[#F3F4F6] hover:text-black"
                        }`}
                      >
                        <span>{isRtl ? t.labelAr : t.labelEn}</span>
                        {isActive && <span className="text-black font-extrabold">✓</span>}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Language Switcher Button */}
            <button
              onClick={() => handleLanguageSwitch(dict.targetLang as Locale)}
              aria-label={`Switch to ${dict.switchTo}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-black bg-[#F3F4F6] hover:bg-black hover:text-white transition-all text-xs font-bold uppercase tracking-wider rounded-none shadow-[2px_2px_0px_#0A0E11]"
            >
              <svg
                className="w-3.5 h-3.5 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>{dict.switchTo}</span>
            </button>

            <a
              href="/musa-musa-kannike-fullstack-cv.pdf"
              download
              className="font-bold text-[14px] tracking-wide text-[#525252] hover:text-primary transition-colors"
            >
              {dict.downloadCv}
            </a>

            <button
              onClick={() => handleNavClick("#contact")}
              className="inline-flex items-center justify-center border-[3px] border-black bg-primary text-black font-bold uppercase tracking-wider text-[13px] px-5 py-2 transition-all duration-100 ease-out select-none cursor-pointer shadow-[2px_2px_0px_#0A0E11] hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0px_#0A0E11] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none font-heading"
            >
              {dict.hireMe}
            </button>
          </div>

          {/* Mobile Actions: Language Switcher & Hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => handleLanguageSwitch(dict.targetLang as Locale)}
              aria-label={`Switch to ${dict.switchTo}`}
              className="px-2.5 py-1 border-2 border-black bg-[#F3F4F6] text-xs font-bold uppercase shadow-[1.5px_1.5px_0px_#0A0E11]"
            >
              {dict.switchTo}
            </button>
            <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col transition-all duration-300 ease-in-out lg:hidden ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
      >
        <div className="relative w-full h-10 bg-black">
          <RulerTicks />
        </div>
        <div className="py-4 px-6 flex items-center justify-between border-b-2 border-black">
          <Link
            href={`/${lang}`}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 bg-black flex items-center justify-center">
              <span className="text-primary font-bold text-xs tracking-widest font-heading">
                MK
              </span>
            </div>
            <span className="font-bold text-[16px] uppercase font-heading">
              {isRtl ? (
                <>
                  موسى<span className="text-primary">.</span>كانيكي
                </>
              ) : (
                <>
                  Musa<span className="text-primary">.</span>Kannike
                </>
              )}
            </span>
          </Link>
          <button
            onClick={() => {
              setIsOpen(false);
              handleLanguageSwitch(dict.targetLang as Locale);
            }}
            className="px-3 py-1.5 border-2 border-black bg-primary text-black font-bold text-xs uppercase tracking-wider"
          >
            {dict.switchTo}
          </button>
        </div>

        {/* Portfolio Track Switcher in mobile menu */}
        <div className="px-6 py-4 border-b-2 border-black bg-[#F9FAFB]">
          <span className="block text-[11px] font-extrabold uppercase tracking-widest text-[#525252] mb-2 font-heading">
            {isRtl ? "مسارات معرض الأعمال:" : "PORTFOLIO TRACKS:"}
          </span>
          <div className="grid grid-cols-2 gap-2">
            {TRACK_LIST.map((t) => {
              const isActive = currentTrack === t.id;
              return (
                <Link
                  key={t.id}
                  href={t.path(lang)}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-center px-2.5 py-2 text-xs font-bold uppercase tracking-wider border-2 border-black transition-all font-heading text-center ${
                    isActive
                      ? "bg-primary text-black shadow-[2px_2px_0px_#0A0E11]"
                      : "bg-white text-text hover:bg-neutral-100"
                  }`}
                >
                  {isRtl ? t.shortLabelAr : t.shortLabelEn}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-1 p-6 pt-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`flex items-center w-full h-12 px-4 text-[16px] font-semibold text-text hover:bg-neutral-50 rounded-md transition-colors bg-transparent border-none cursor-pointer ${isRtl ? "text-right" : "text-left"}`}
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
            className="flex h-12 w-full items-center justify-center border-[3px] border-black font-bold uppercase tracking-wider text-[15px] bg-white text-black font-heading"
          >
            {dict.downloadCv}
          </a>
          <button
            onClick={() => handleNavClick("#contact")}
            className="flex h-12 w-full items-center justify-center border-[3px] border-black bg-primary text-black font-bold uppercase tracking-wider text-[15px] shadow-[3px_3px_0px_#0A0E11] cursor-pointer font-heading"
          >
            {dict.hireMe}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
