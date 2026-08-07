import React from "react";

const specializations = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Web Development",
    description:
      "Building fast, scalable, and SEO-optimized web platforms using React.js, Next.js, and modern CSS. From marketing sites to full-featured e-commerce platforms and SaaS dashboards.",
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Cross-Platform Mobile",
    description:
      "Crafting polished iOS & Android apps with React Native & Expo. Experience delivering real-time tracking, secure payments, deep linking, and native device features.",
    tags: ["React Native", "Expo", "TypeScript", "Paystack", "Flutterwave"],
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
      </svg>
    ),
    title: "Backend & APIs",
    description:
      "Designing and building robust REST APIs and server-side architectures with Node.js, Express, NestJS, and MongoDB. Integration experience with payment gateways and third-party services.",
    tags: ["Node.js", "Express", "NestJS", "MongoDB", "Prisma"],
  },
];

const Stack = () => {
  return (
    <section id="stack" className="py-20 lg:py-24 px-6 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="block text-base font-semibold tracking-[0.12em] uppercase text-primary mb-3">
            // WHAT I DO
          </span>
          <h2 className="text-4xl lg:text-[46px] font-bold leading-[1.2] text-[#171717]" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>
            My Specializations
          </h2>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 bg-white border-2 border-black p-8 lg:flex-1 group hover:-translate-y-1 transition-transform duration-200"
              style={{ boxShadow: "4px 4px 0px #0A0E11" }}
            >
              {/* Icon circle */}
              <div className="w-16 h-16 rounded-full border-2 border-black bg-[#FFF5F3] flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-black transition-colors duration-200">
                <div className="group-hover:[&_svg]:text-white transition-colors duration-200">
                  {spec.icon}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-[#171717] text-xl leading-[28px]" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>
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
                    className="text-xs font-bold uppercase tracking-wide border border-black px-2.5 py-1 text-[#171717] bg-[#F3F4F6]"
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
