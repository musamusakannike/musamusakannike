import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const ExternalIcon = () => (
  <svg className="w-3.5 h-3.5 ml-1 inline shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="square" strokeLinejoin="miter" />
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-24 px-6 sm:px-8 lg:px-14 bg-[#ece0e0] w-full">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14">
          <span className="block text-base font-semibold tracking-[0.12em] uppercase text-primary mb-3">
            // MY WORK
          </span>
          <h2 className="text-4xl lg:text-[46px] font-bold leading-[1.2] text-[#171717]" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>
            Production Projects
          </h2>
          <p className="text-[#525252] text-[17px] font-medium mt-3 max-w-2xl">
            Real products used by real people — from Nigerian food delivery apps to Saudi beauty platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="flex flex-col bg-white border-2 border-black group hover:-translate-y-1 transition-transform duration-200"
              style={{ boxShadow: "4px 4px 0px #0A0E11" }}
            >
              {/* Image */}
              <div className="relative w-full h-[200px] overflow-hidden border-b-2 border-black bg-[#F3F4F6]">
                <Image
                  src={project.image}
                  alt={`${project.name} — ${project.tagline} project screenshot by Musa Musa Kannike`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Role badge */}
                <div className="absolute top-3 left-3 bg-black border border-primary px-2.5 py-1">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    {project.role}
                  </span>
                </div>
                {/* Index number */}
                <div className="absolute bottom-3 right-3 w-8 h-8 bg-primary border-2 border-black flex items-center justify-center">
                  <span className="text-black font-bold text-sm" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5 flex-1">
                <div>
                  <h3 className="font-bold text-[#171717] text-xl" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>
                    {project.name}
                  </h3>
                  <p className="text-primary text-[13px] font-semibold tracking-wide uppercase">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-[#525252] text-[14px] font-medium leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-bold uppercase tracking-wide border border-black px-2 py-0.5 text-[#171717] bg-[#F3F4F6]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 pt-2 border-t border-neutral-100 mt-auto">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-[13px] font-bold text-primary hover:text-[#171717] transition-colors uppercase tracking-wide"
                  >
                    Case Study
                  </Link>
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-bold text-[#171717] hover:text-primary transition-colors uppercase tracking-wide"
                    >
                      {link.label}
                      <ExternalIcon />
                    </a>
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

export default Projects;
