import React from "react";

const experiences = [
  {
    role: "Product & Fullstack Engineer",
    company: "Africlana Ltd",
    period: "Aug 2026 – Present",
    type: "Current",
    description:
      "Driving end-to-end product features and user experience across Africlana's web and mobile platforms. Collaborating closely with product stakeholders to rapidly iterate on feedback loops, improve user retention, and ensure scalable application architecture.",
    tags: ["Product Engineering", "Fullstack", "Web", "Mobile"],
  },
  {
    role: "Lead Product Engineer",
    company: "A1 Information Technology",
    period: "May 2026 – Aug 2026",
    type: "Contract",
    description:
      "Spearheaded the 0-to-1 digital transformation for A1 Info Tech. Designed and built a dual-portal ecosystem uniting customer hardware repair intake with an interactive training academy for students, complete with curriculum delivery and automated tuition checkout.",
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Product Architecture"],
  },
  {
    role: "Frontend & Interactive Product Engineer",
    company: "Cloudstech",
    period: "Jan 2026 – Present",
    type: "Current",
    description:
      "Engineered high-performance web applications and internal tools for an international software & AI agency. Utilized Next.js, Three.js, and GSAP to deliver an engaging, interactive digital identity optimized for client lead generation and fast Core Web Vitals.",
    tags: ["Next.js", "Three.js", "GSAP", "TypeScript", "Interactive UX"],
  },
  {
    role: "Fullstack & Product Engineer",
    company: "360Gadgets Africa",
    period: "Apr 2025 – Jan 2026",
    type: "Hybrid",
    description:
      "Led fullstack feature delivery across mobile (React Native) and web (Next.js). Tackled checkout drop-offs by architecting multi-gateway payment routing with Paystack and Flutterwave, while engineering automated microservices for instant VTU digital service fulfillment.",
    tags: ["React Native", "Next.js", "Node.js", "Paystack", "Flutterwave", "Checkout UX"],
  },
  {
    role: "Product & Mobile App Developer",
    company: "Terrachow",
    period: "Jun 2024 – Mar 2025",
    type: "Remote",
    description:
      "Contributed to customer-facing mobile application development on React Native (Expo) for a multi-city Nigerian food delivery startup. Designed intuitive food discovery and checkout flows, integrated real-time delivery tracking, and improved mobile performance for lower-bandwidth networks.",
    tags: ["React Native", "Expo", "Mobile UX", "Order Tracking", "Remote"],
  },
];

const typeColors: Record<string, string> = {
  Current: "var(--color-primary)",
  Contract: "#0A0E11",
  Hybrid: "#525252",
  Remote: "#525252",
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-24 px-6 sm:px-8 lg:px-14 bg-white w-full">
      <div className="max-w-300 mx-auto">
        <div className="mb-14">
          <span className="block text-base font-semibold tracking-[0.12em] uppercase text-primary mb-3">
            // MY JOURNEY
          </span>
          <h2 className="text-4xl lg:text-[46px] font-bold leading-[1.2] text-text" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>
            Work Experience
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#E5E7EB] hidden md:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-8 md:pl-16">
                {/* Timeline dot */}
                <div
                  className="absolute left-3.25 top-6 w-5 h-5 rounded-full border-2 border-black bg-primary hidden md:block shrink-0 z-10"
                  style={{ animation: index === 0 ? "dot-pulse 2s infinite" : "none" }}
                />

                {/* Card */}
                <div
                  className="flex-1 bg-white border-2 border-black p-6"
                  style={{ boxShadow: "4px 4px 0px #0A0E11" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-bold text-text text-xl leading-tight" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>
                        {exp.role}
                      </h3>
                      <p className="text-primary font-semibold text-[15px] tracking-wide">{exp.company}</p>
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
