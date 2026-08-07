"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      {/* ── Mobile Hero (dark bg) ── */}
      <section
        className="relative w-full min-h-[calc(100vh-100px)] flex flex-col lg:hidden justify-center items-start overflow-hidden px-6 sm:px-12 py-16 md:py-24 bg-black"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(10, 14, 17, 0.95) 0%, rgba(10, 14, 17, 0.85) 55%, rgba(10, 14, 17, 0.6) 100%), url('/profile.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative w-full max-w-2xl flex flex-col items-start gap-8 z-10">
          {/* Pill tag */}
          <div className="inline-flex items-center gap-2 bg-white text-black border-[1.05px] border-black px-3 py-1.5 shadow-[2.5px_2.5px_0px_#0A0E11] select-none">
            <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span className="font-extrabold text-xs tracking-widest" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>
              FULLSTACK DEVELOPER — CODIAC
            </span>
          </div>

          <h1 className="text-white text-[40px] sm:text-[48px] font-bold uppercase tracking-tight leading-[1.1] flex flex-col gap-1" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>
            <span className="block">BUILDING THINGS</span>
            <span className="relative inline">
              <span className="relative z-50 px-0.5">THAT ACTUALLY</span>
              <span className="absolute left-0 right-0 bottom-0 h-[26px] bg-primary z-40 max-w-[95%]"></span>
            </span>
            <span className="block">WORK.</span>
          </h1>

          <p className="text-[#D4D4D4] text-[17px] leading-relaxed max-w-md font-medium tracking-wide">
            4+ years crafting production-grade web, mobile & desktop apps. React, Next.js, React Native, Node.js & more.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mt-2">
            <button
              onClick={() => handleScroll("#projects")}
              className="inline-flex items-center justify-center border-[3px] border-black bg-primary text-black font-bold uppercase tracking-wider text-[16px] px-7 py-3 transition-all duration-100 ease-out shadow-[4px_4px_0px_#fff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#fff] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none cursor-pointer"
            >
              VIEW MY WORK
            </button>
            <button
              onClick={() => handleScroll("#contact")}
              className="inline-flex items-center justify-center border-[3px] border-white bg-transparent text-white font-bold uppercase tracking-wider text-[16px] px-7 py-3 transition-all duration-100 ease-out hover:bg-white hover:text-black cursor-pointer"
            >
              HIRE ME
            </button>
          </div>
        </div>

        {/* Watermark */}
        <div className="absolute bottom-[-30px] right-[-30px] w-[200px] h-[200px] opacity-10 pointer-events-none select-none z-0 flex items-center justify-center">
          <span className="text-white font-bold text-[120px] leading-none" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>MK</span>
        </div>
      </section>

      {/* ── Desktop Hero ── */}
      <section className="relative w-full min-h-[calc(100vh-140px)] lg:min-h-screen hidden lg:flex items-center overflow-hidden px-6 sm:px-12 lg:px-20 pt-6 pb-20 lg:py-32 bg-white">
        <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10 pt-6 lg:pt-16">

          {/* Left column */}
          <div className="flex flex-col items-start gap-10 w-full col-span-7">
            <div className="flex flex-col gap-5">
              {/* Pill */}
              <div className="inline-flex items-center gap-2 bg-white text-black">
                <svg className="w-5 h-5 text-primary shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-base tracking-wider">FULLSTACK DEVELOPER — CODIAC</span>
              </div>

              {/* Headline */}
              <h1 className="text-black text-[60px] xl:text-[68px] font-bold uppercase tracking-tight leading-[1.05] flex flex-col gap-1.5" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>
                <span className="block">I BUILD THINGS</span>
                <span className="block">THAT ACTUALLY</span>
                <span className="relative inline">
                  <span className="relative inline-block self-start mt-1 z-50">WORK.</span>
                  <span className="absolute left-0 right-0 -bottom-1 h-[48px] bg-primary transition-all z-40 transform skew-x-12 max-w-[60%]"></span>
                </span>
              </h1>

              <p className="text-[#525252] text-[18px] leading-[30px] font-medium max-w-xl">
                4+ years building production-grade web, mobile & desktop applications for startups and companies across Nigeria and beyond. Specializing in React, Next.js, React Native (Expo), and Node.js.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8">
              {[
                { value: "4+", label: "Years Exp." },
                { value: "5+", label: "Companies" },
                { value: "10+", label: "Projects" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-[40px] font-bold leading-none text-primary" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>{stat.value}</span>
                  <span className="text-sm font-semibold text-[#525252] tracking-wide uppercase">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mt-2 w-full sm:w-auto">
              <button
                onClick={() => handleScroll("#projects")}
                className="inline-flex items-center justify-center border-[3px] border-black bg-primary text-black font-bold uppercase tracking-wider text-[16px] px-8 py-3.5 w-full sm:w-auto transition-all duration-100 ease-out shadow-[4px_4px_0px_#0A0E11] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0A0E11] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none cursor-pointer group"
              >
                VIEW MY WORK
                <svg className="w-5 h-5 ml-2.5 shrink-0 transition-transform duration-100 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="square" strokeLinejoin="miter" />
                </svg>
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="inline-flex items-center justify-center border-[3px] border-black bg-white text-black font-bold uppercase tracking-wider text-[16px] px-8 py-3.5 w-full sm:w-auto transition-all duration-100 ease-out shadow-[4px_4px_0px_#0A0E11] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0A0E11] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none cursor-pointer"
              >
                HIRE ME
              </button>
            </div>
          </div>

          {/* Right column — framed photo */}
          <div className="flex justify-center lg:justify-end w-full col-span-5">
            <div className="relative w-full max-w-[460px]">
              {/* Main image frame */}
              <div className="relative w-full aspect-[4/4.5] border-4 border-black bg-white shadow-[10px_10px_0px_#0A0E11] overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Musa Musa Kannike — Fullstack Developer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating badge — top left */}
              <div className="absolute -top-4 -left-4 bg-primary border-2 border-black px-3 py-2 shadow-[3px_3px_0_#0A0E11]">
                <span className="font-bold text-black text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>Available for hire</span>
              </div>
              {/* Floating badge — bottom right */}
              <div className="absolute -bottom-4 -right-4 bg-black border-2 border-primary px-3 py-2">
                <span className="font-bold text-primary text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>Fullstack Dev</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3D grid decoration */}
        <div className="absolute bottom-0 left-0 right-0 w-full h-[180px] sm:h-[220px] pointer-events-none select-none z-0">
          <Image src="/3d-grid.png" alt="Grid Pattern" fill sizes="100vw" className="object-cover object-bottom" priority />
        </div>
      </section>
    </section>
  );
};

export default Hero;
