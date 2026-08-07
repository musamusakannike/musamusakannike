import React from "react";

const experiences = [
  {
    role: "Fullstack Engineer",
    company: "Africlana Ltd",
    period: "Aug 2026 – Present",
    type: "Current",
    description:
      "Working as a fullstack engineer contributing to Africlana's platforms. Building and maintaining web and mobile features for the platform's growing user base.",
    tags: ["Fullstack", "Web", "Mobile"],
  },
  {
    role: "Fullstack Engineer",
    company: "A1 Information Technology",
    period: "May 2026 – Aug 2026",
    type: "Contract",
    description:
      "3-month contract to design and develop the complete website platform for A1 Info Tech — covering gadget repair services, an online academy, product listings, and payment integrations.",
    tags: ["Next.js", "Node.js", "MongoDB", "Full Platform Build"],
  },
  {
    role: "Fullstack Engineer",
    company: "Cloudstech",
    period: "Jan 2026 – Present",
    type: "Current",
    description:
      "Building the company's website and internal tools at Cloudstech, an international software and AI agency. Utilized Next.js, Three.js, and GSAP to create a stunning, interactive web presence.",
    tags: ["Next.js", "Three.js", "GSAP", "TypeScript"],
  },
  {
    role: "Fullstack Engineer",
    company: "360Gadgets Africa",
    period: "Apr 2025 – Jan 2026",
    type: "Hybrid",
    description:
      "Worked on the full product stack — React Native mobile app, Next.js web platform, and Node.js/Express/MongoDB backend. Implemented Paystack and Flutterwave payment gateways, VTU digital services, and real-time features.",
    tags: ["React Native", "Next.js", "Node.js", "Paystack", "Flutterwave"],
  },
  {
    role: "Mobile App Developer Intern",
    company: "Terrachow",
    period: "Jun 2024 – Mar 2025",
    type: "Remote",
    description:
      "Joined Terrachow's mobile development team as an intern, contributing to the React Native Expo app for a Nigerian food delivery platform. Worked on real-time order tracking, vendor management flows, and UI improvements.",
    tags: ["React Native", "Expo", "Mobile", "Remote"],
  },
];

const typeColors: Record<string, string> = {
  Current: "#FF634E",
  Contract: "#0A0E11",
  Hybrid: "#525252",
  Remote: "#525252",
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-24 px-6 sm:px-8 lg:px-14 bg-white w-full">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14">
          <span className="block text-base font-semibold tracking-[0.12em] uppercase text-[#FF634E] mb-3">
            // MY JOURNEY
          </span>
          <h2 className="text-4xl lg:text-[46px] font-bold leading-[1.2] text-[#171717]" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>
            Work Experience
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-[#E5E7EB] hidden md:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-8 md:pl-16">
                {/* Timeline dot */}
                <div
                  className="absolute left-[13px] top-6 w-5 h-5 rounded-full border-2 border-black bg-[#FF634E] hidden md:block shrink-0 z-10"
                  style={{ animation: index === 0 ? "dot-pulse 2s infinite" : "none" }}
                />

                {/* Card */}
                <div
                  className="flex-1 bg-white border-2 border-black p-6"
                  style={{ boxShadow: "4px 4px 0px #0A0E11" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-bold text-[#171717] text-xl leading-tight" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>
                        {exp.role}
                      </h3>
                      <p className="text-[#FF634E] font-semibold text-[15px] tracking-wide">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                      <span className="text-[13px] font-semibold text-[#525252] bg-[#F3F4F6] border border-black px-2.5 py-1 whitespace-nowrap">
                        {exp.period}
                      </span>
                      <span
                        className="text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 border text-white"
                        style={{ backgroundColor: typeColors[exp.type] ?? "#525252", borderColor: typeColors[exp.type] ?? "#525252" }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#525252] text-[15px] font-medium leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-bold uppercase tracking-wide border border-black px-2 py-0.5 text-[#171717] bg-[#F3F4F6]">
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
