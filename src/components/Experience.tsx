import React from "react";
import type { Locale, Dictionary } from "@/app/[lang]/dictionaries";

const typeColors: Record<string, string> = {
  Current: "var(--color-primary)",
  Contract: "#0A0E11",
  Hybrid: "#525252",
  Remote: "#525252",
};

type ExperienceProps = {
  lang: Locale;
  dict: Dictionary["experience"];
};

const Experience = ({ lang, dict }: ExperienceProps) => {
  const isRtl = lang === "ar";

  return (
    <section id="experience" className="py-20 lg:py-24 px-6 sm:px-8 lg:px-14 bg-white w-full">
      <div className="max-w-300 mx-auto">
        <div className="mb-14">
          <span className="block text-base font-semibold tracking-[0.12em] uppercase text-primary mb-3 font-heading">
            {dict.tag}
          </span>
          <h2 className="text-4xl lg:text-[46px] font-bold leading-[1.2] text-text font-heading">
            {dict.heading}
          </h2>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className={`absolute ${isRtl ? "right-5" : "left-5"} top-0 bottom-0 w-0.5 bg-[#E5E7EB] hidden md:block`} />

          <div className="flex flex-col gap-8">
            {dict.items.map((exp, index) => (
              <div key={index} className={`relative flex gap-8 ${isRtl ? "md:pr-16" : "md:pl-16"}`}>
                {/* Timeline dot */}
                <div
                  className={`absolute ${isRtl ? "right-3.25" : "left-3.25"} top-6 w-5 h-5 rounded-full border-2 border-black bg-primary hidden md:block shrink-0 z-10`}
                  style={{ animation: index === 0 ? "dot-pulse 2s infinite" : "none" }}
                />

                {/* Card */}
                <div
                  className="flex-1 bg-white border-2 border-black p-6"
                  style={{ boxShadow: "4px 4px 0px #0A0E11" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-bold text-text text-xl leading-tight font-heading">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-semibold text-[15px] tracking-wide font-heading">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                      <span className="text-[13px] font-semibold text-[#525252] bg-[#F3F4F6] border border-black px-2.5 py-1 whitespace-nowrap">
                        {exp.period}
                      </span>
                      <span
                        className="text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 border text-white font-heading"
                        style={{ backgroundColor: typeColors[exp.type] ?? "#525252", borderColor: typeColors[exp.type] ?? "#525252" }}
                      >
                        {exp.typeLabel}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#525252] text-[15px] font-medium leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-bold uppercase tracking-wide border border-black px-2 py-0.5 text-text bg-[#F3F4F6]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
