"use client";

import React from "react";
import Link from "next/link";
import { TRACK_LIST, type PortfolioTrack } from "@/data/tracks";
import type { Locale } from "@/app/[lang]/dictionaries";

type TrackSwitcherProps = {
  currentTrack: PortfolioTrack;
  lang: Locale;
  variant?: "hero" | "hero-dark" | "compact";
  className?: string;
};

export default function TrackSwitcher({
  currentTrack = "all",
  lang,
  variant = "hero",
  className = "",
}: TrackSwitcherProps) {
  const isRtl = lang === "ar";
  const isDark = variant === "hero-dark";

  return (
    <div
      className={`inline-flex flex-wrap items-center gap-1.5 p-1 select-none font-heading ${
        isDark
          ? "bg-[#0A0E11]/90 border-2 border-white/30 shadow-[3px_3px_0px_var(--color-primary)] backdrop-blur-sm"
          : "bg-[#F3F4F6] border-2 border-black shadow-[3px_3px_0px_#0A0E11]"
      } ${className}`}
      role="navigation"
      aria-label={isRtl ? "المسارات والتخصصات" : "Portfolio specializations"}
    >
      <span
        className={`text-[11px] font-bold uppercase tracking-widest px-2 ${
          isDark ? "text-neutral-300" : "text-[#525252]"
        } hidden sm:inline-block`}
      >
        {isRtl ? "المسار:" : "TRACK:"}
      </span>

      {TRACK_LIST.map((t) => {
        const isActive = currentTrack === t.id;
        const href = t.path(lang);
        const label = isRtl ? t.labelAr : t.labelEn;

        if (isActive) {
          return (
            <span
              key={t.id}
              aria-current="page"
              className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs sm:text-[13px] font-extrabold uppercase tracking-wider border-2 border-black bg-primary text-black cursor-default transition-all duration-100 ${
                isDark
                  ? "shadow-[2px_2px_0px_#FFFFFF]"
                  : "shadow-[2px_2px_0px_#0A0E11]"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" aria-hidden="true" />
              {label}
            </span>
          );
        }

        return (
          <Link
            key={t.id}
            href={href}
            prefetch={true}
            className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs sm:text-[13px] font-bold uppercase tracking-wider border-2 transition-all duration-100 ease-out cursor-pointer ${
              isDark
                ? "border-transparent bg-neutral-900/80 text-neutral-300 hover:text-white hover:border-white/50 hover:bg-neutral-800"
                : "border-transparent bg-white text-[#525252] hover:text-black hover:border-black hover:bg-neutral-50 hover:shadow-[1.5px_1.5px_0px_#0A0E11]"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
