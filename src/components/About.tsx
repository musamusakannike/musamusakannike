import React from "react";
import type { Locale, Dictionary } from "@/app/[lang]/dictionaries";

const AwardIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m-.12-8.54a6 6 0 00-7.38 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.69-4.2a1.5 1.5 0 11-2.12-2.12 1.5 1.5 0 012.12 2.12z" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const DevicesIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const statIcons = [<AwardIcon key="award" />, <RocketIcon key="rocket" />, <BuildingIcon key="building" />, <DevicesIcon key="devices" />];
const statColors = ["var(--color-primary)", "#0A0E11", "var(--color-primary)", "#0A0E11"];

type AboutProps = {
  lang: Locale;
  dict: Dictionary["about"];
};

const About = ({ lang, dict }: AboutProps) => {
  const isRtl = lang === "ar";

  return (
    <section id="about" className="bg-[#FAFAFA] py-20 lg:py-24 px-6 sm:px-8 lg:px-14 w-full box-border">
      <div className="max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left / Start — Content */}
        <div className="flex flex-col">
          <span className="block text-base font-semibold tracking-[0.12em] uppercase text-primary mb-4 font-heading">
            {dict.tag}
          </span>

          <h2 className="text-4xl lg:text-[42px] font-bold leading-[1.2] text-text m-0 mb-5 font-heading whitespace-pre-line">
            {dict.heading}
          </h2>

          <p className="text-[17px] font-medium leading-[1.75] text-[#525252] m-0 mb-5">
            {dict.bio1}
          </p>
          <p className="text-[17px] font-medium leading-[1.75] text-[#525252] m-0 mb-9">
            {dict.bio2}
          </p>

          {/* Skill bars */}
          <div className="flex flex-col gap-5">
            {dict.skills.map((skill) => (
              <div key={skill.label} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-[15px] font-semibold text-text">{skill.label}</span>
                  <span className="text-[13px] font-bold text-primary">{skill.percent}%</span>
                </div>
                <div className="w-full h-2 bg-[#E5E7EB] border border-black overflow-hidden">
                  <div
                    className="h-2 bg-primary transition-[width] duration-1000 ease-out"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/musa-musa-kannike-fullstack-cv.pdf"
              download
              className="inline-flex items-center gap-2 border-[3px] border-black bg-primary text-black font-bold uppercase tracking-wider text-[15px] px-7 py-3 transition-all duration-100 ease-out shadow-[4px_4px_0px_#0A0E11] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#0A0E11] active:translate-x-1 active:translate-y-1 active:shadow-none cursor-pointer select-none font-heading"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {dict.downloadCv}
            </a>
          </div>
        </div>

        {/* Right / End — Stats & Info Cards */}
        <div className="grid grid-cols-2 gap-5">
          {dict.statCards.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 bg-white border-2 border-black p-6"
              style={{ boxShadow: `4px 4px 0px ${statColors[i] || "#0A0E11"}` }}
            >
              <div className="w-10 h-10 flex items-center justify-center" style={{ color: statColors[i] === "#0A0E11" ? "#171717" : statColors[i] }}>
                {statIcons[i]}
              </div>
              <span className="text-[42px] font-bold leading-none font-heading" style={{ color: statColors[i] || "#0A0E11" }}>
                {item.value}
              </span>
              <span className="text-[13px] font-semibold text-[#525252] uppercase tracking-wide leading-tight">
                {item.label}
              </span>
            </div>
          ))}

          {/* Contact info card spans full width */}
          <div
            className="col-span-2 flex flex-col gap-2 bg-black border-2 border-primary p-6"
            style={{ boxShadow: "4px 4px 0px var(--color-primary)" }}
          >
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 font-heading">
              {dict.quickContact}
            </span>
            {[
              { label: dict.contacts.email, value: "musamusakannike@gmail.com", href: "mailto:musamusakannike@gmail.com" },
              { label: dict.contacts.github, value: "github.com/musamusakannike", href: "https://github.com/musamusakannike" },
              { label: dict.contacts.linkedin, value: "https://www.linkedin.com/in/musa-musa-kannike-02604b418/", href: "https://www.linkedin.com/in/musa-musa-kannike-02604b418/" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[14px] text-[#A3A3A3] hover:text-primary transition-colors font-medium"
              >
                <span className={`text-primary font-bold ${isRtl ? "w-16" : "w-14"} shrink-0`}>{item.label}:</span>
                <span className="truncate" dir="ltr">{item.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
