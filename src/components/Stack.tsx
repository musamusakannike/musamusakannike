import React from "react";
import type { Locale, Dictionary } from "@/app/[lang]/dictionaries";

const icons = [
  (
    <svg key="1" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  (
    <svg key="2" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  (
    <svg key="3" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
    </svg>
  ),
];

type StackProps = {
  lang: Locale;
  dict: Dictionary["stack"];
};

const Stack = ({ dict }: StackProps) => {
  return (
    <section id="stack" className="py-20 lg:py-24 px-6 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="block text-base font-semibold tracking-[0.12em] uppercase text-primary mb-3 font-heading">
            {dict.tag}
          </span>
          <h2 className="text-4xl lg:text-[46px] font-bold leading-[1.2] text-text font-heading">
            {dict.heading}
          </h2>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {dict.items.map((spec, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 bg-white border-2 border-black p-8 lg:flex-1 group hover:-translate-y-1 transition-transform duration-200"
              style={{ boxShadow: "4px 4px 0px #0A0E11" }}
            >
              {/* Icon circle */}
              <div className="w-16 h-16 rounded-full border-2 border-black bg-[#FFF5F3] flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-black transition-colors duration-200">
                <div className="group-hover:[&_svg]:text-white transition-colors duration-200">
                  {icons[index]}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-text text-xl leading-7 font-heading">
                  {spec.title}
                </h3>
                <p className="text-[#525252] font-medium text-base leading-relaxed">
                  {spec.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {spec.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold uppercase tracking-wide border border-black px-2.5 py-1 text-text bg-[#F3F4F6]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
