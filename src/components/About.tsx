import React from "react";

const techStack = [
  { label: "TypeScript / JavaScript", percent: 95 },
  { label: "React.js / Next.js", percent: 92 },
  { label: "React Native (Expo)", percent: 88 },
  { label: "Node.js / Express / NestJS", percent: 85 },
  { label: "MongoDB / Prisma", percent: 80 },
  { label: "Python", percent: 72 },
];

const About = () => {
  return (
    <section id="about" className="bg-[#FAFAFA] py-20 lg:py-24 px-6 sm:px-8 lg:px-14 w-full box-border">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left — Content */}
        <div className="flex flex-col">
          <span className="block text-base font-semibold tracking-[0.12em] uppercase text-[#FF634E] mb-4">
            // WHO I AM
          </span>

          <h2 className="text-4xl lg:text-[42px] font-bold leading-[1.2] text-[#171717] m-0 mb-5" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>
            Fullstack Engineer &<br />Builder at Heart
          </h2>

          <p className="text-[17px] font-medium leading-[1.75] text-[#525252] m-0 mb-5">
            I&apos;m <strong className="text-[#171717]">Musa Musa Kannike</strong>, also known online as <strong className="text-[#FF634E]">Codiac</strong> — a Fullstack Developer with <strong className="text-[#171717]">4+ years</strong> of hands-on experience shipping production applications.
          </p>
          <p className="text-[17px] font-medium leading-[1.75] text-[#525252] m-0 mb-9">
            I specialize in building web, cross-platform mobile, and desktop applications — from pixel-perfect frontends to robust backends and API integrations. I&apos;ve worked with startups and established companies across Nigeria, Saudi Arabia, and internationally, contributing to projects that serve thousands of real users.
          </p>

          {/* Skill bars */}
          <div className="flex flex-col gap-5">
            {techStack.map((skill) => (
              <div key={skill.label} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-[15px] font-semibold text-[#171717]">{skill.label}</span>
                  <span className="text-[13px] font-bold text-[#FF634E]">{skill.percent}%</span>
                </div>
                <div className="w-full h-[8px] bg-[#E5E7EB] border border-black overflow-hidden">
                  <div
                    className="h-[8px] bg-[#FF634E] transition-[width] duration-1000 ease-out"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/Musa Musa Kannike Fullstack CV.pdf"
              download
              className="inline-flex items-center gap-2 border-[3px] border-black bg-[#FF634E] text-black font-bold uppercase tracking-wider text-[15px] px-7 py-3 transition-all duration-100 ease-out shadow-[4px_4px_0px_#0A0E11] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0A0E11] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none cursor-pointer select-none"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              DOWNLOAD CV
            </a>
          </div>
        </div>

        {/* Right — Stats & Info Cards */}
        <div className="grid grid-cols-2 gap-5">
          {[
            { icon: "🏆", value: "4+", label: "Years of Experience", color: "#FF634E" },
            { icon: "🚀", value: "10+", label: "Production Projects", color: "#0A0E11" },
            { icon: "🏢", value: "5+", label: "Companies Worked With", color: "#FF634E" },
            { icon: "📱", value: "3", label: "Platforms (Web, Mobile, Desktop)", color: "#0A0E11" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 bg-white border-2 border-black p-6"
              style={{ boxShadow: `4px 4px 0px ${item.color}` }}
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="text-[42px] font-bold leading-none" style={{ fontFamily: "var(--font-rajdhani), sans-serif", color: item.color }}>
                {item.value}
              </span>
              <span className="text-[13px] font-semibold text-[#525252] uppercase tracking-wide leading-tight">
                {item.label}
              </span>
            </div>
          ))}

          {/* Contact info card spans full width */}
          <div
            className="col-span-2 flex flex-col gap-2 bg-black border-2 border-[#FF634E] p-6"
            style={{ boxShadow: "4px 4px 0px #FF634E" }}
          >
            <span className="text-[#FF634E] font-bold text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>
              QUICK CONTACT
            </span>
            {[
              { label: "Email", value: "musamusakannike@gmail.com", href: "mailto:musamusakannike@gmail.com" },
              { label: "GitHub", value: "github.com/musamusakannike", href: "https://github.com/musamusakannike" },
              { label: "LinkedIn", value: "linkedin.com/in/musa-musa-kannike", href: "https://www.linkedin.com/in/musa-musa-kannike-02604b418/" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[14px] text-[#A3A3A3] hover:text-[#FF634E] transition-colors font-medium"
              >
                <span className="text-[#FF634E] font-bold w-14 shrink-0">{item.label}:</span>
                <span className="truncate">{item.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
