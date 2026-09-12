import React from "react";

const skills = [
  "Product Engineering", "TypeScript", "Next.js", "React.js",
  "React Native", "Expo", "Node.js", "Express.js", "Nest.js",
  "System Design", "MongoDB", "Prisma", "REST APIs", "GraphQL",
  "Paystack", "Flutterwave", "UX & Interaction", "Three.js", "GSAP",
];

const MarqueeSection = () => {
  const doubled = [...skills, ...skills];

  return (
    <div className="w-full overflow-hidden bg-black border-y-2 border-black py-4 select-none">
      <div className="flex animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
        {doubled.map((skill, i) => (
          <div key={i} className="flex items-center gap-4 mx-6">
            <span className="inline-block w-2 h-2 bg-primary rotate-45 shrink-0" />
            <span
              className="font-bold text-white tracking-widest uppercase text-sm"
              style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
            >
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;
