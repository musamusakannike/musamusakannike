import React from "react";
import type { Locale, Dictionary } from "@/app/[lang]/dictionaries";

const QuoteIcon = () => (
  <svg
    className="w-8 h-8 text-primary opacity-50"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

type TestimonialsProps = {
  lang: Locale;
  dict: Dictionary["testimonials"];
};

const Testimonials = ({ lang, dict }: TestimonialsProps) => {
  const isRtl = lang === "ar";

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-24 px-6 sm:px-8 lg:px-14 bg-[#FAFAFA] w-full"
    >
      <div className="max-w-300 mx-auto">
        <div className="mb-14">
          <span className="block text-base font-semibold tracking-[0.12em] uppercase text-primary mb-3 font-heading">
            {dict.tag}
          </span>
          <h2 className="text-4xl lg:text-[46px] font-bold leading-[1.2] text-text font-heading">
            {dict.heading}
          </h2>
          <p className="text-[#525252] text-[17px] font-medium mt-3 max-w-2xl">
            {dict.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dict.items.map((t, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 bg-white border-2 border-black p-7 group hover:-translate-y-1 transition-transform duration-200"
              style={{ boxShadow: `4px 4px 0px ${t.accent}` }}
            >
              <QuoteIcon />

              <p className="text-[#525252] text-[15px] font-medium leading-[1.8] flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
                <div
                  className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center shrink-0 text-white font-bold text-[15px] font-heading"
                  style={{ backgroundColor: t.accent }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-text text-[16px] font-heading">
                    {t.name}
                  </p>
                  <p className="text-[13px] text-[#525252] font-semibold">
                    {t.title}
                  </p>
                </div>
                {/* 5 stars */}
                <div
                  className={`${isRtl ? "mr-auto" : "ml-auto"} flex items-center gap-0.5`}
                >
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
