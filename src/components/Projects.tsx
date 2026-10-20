import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Locale, Dictionary } from "@/app/[lang]/dictionaries";
import { projects as projectsData } from "@/data/projects";

const ExternalIcon = ({ isRtl }: { isRtl: boolean }) => (
  <svg className={`w-3.5 h-3.5 ${isRtl ? "mr-1" : "ml-1"} inline shrink-0`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="square" strokeLinejoin="miter" />
  </svg>
);

import type { PortfolioTrack } from "@/data/tracks";

type ProjectsProps = {
  lang: Locale;
  dict: Dictionary["projects"];
  projectItems: Dictionary["projectItems"];
  track?: PortfolioTrack;
};

const Projects = ({ lang, dict, projectItems, track = "all" }: ProjectsProps) => {
  const isRtl = lang === "ar";

  const relevantProjects = projectsData.filter(
    (p) => track === "all" || p.tracks.includes(track)
  );

  return (
    <section id="projects" className="py-20 lg:py-24 px-6 sm:px-8 lg:px-14 bg-[#ece0e0] w-full">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relevantProjects.slice(0, 6).map((project) => {
            const localized = projectItems[project.slug as keyof typeof projectItems] || project;
            return (
              <div
                key={project.id}
                className="flex flex-col bg-white border-2 border-black group hover:-translate-y-1 transition-transform duration-200"
                style={{ boxShadow: "4px 4px 0px #0A0E11" }}
              >
                {/* Image */}
                <div className="relative w-full h-50 overflow-hidden border-b-2 border-black bg-[#F3F4F6]">
                  <Image
                    src={project.image}
                    alt={`${localized.name} — ${localized.tagline}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-5 flex-1">
                  <div>
                    <h3 className="font-bold text-text text-xl font-heading">
                      {localized.name}
                    </h3>
                    <p className="text-primary text-[13px] font-semibold tracking-wide uppercase font-heading">
                      {localized.tagline}
                    </p>
                  </div>

                  <p className="text-[#525252] text-[14px] font-medium leading-relaxed flex-1">
                    {localized.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {localized.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-bold uppercase tracking-wide border border-black px-2 py-0.5 text-text bg-[#F3F4F6]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3 pt-2 border-t border-neutral-100 mt-auto">
                    <Link
                      href={`/${lang}/projects/${project.slug}`}
                      className="text-[13px] font-bold text-primary hover:text-text transition-colors uppercase tracking-wide font-heading"
                    >
                      {dict.caseStudy}
                    </Link>
                    {localized.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] font-bold text-text hover:text-primary transition-colors uppercase tracking-wide font-heading"
                      >
                        {link.label}
                        <ExternalIcon isRtl={isRtl} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-14">
          <Link
            href={`/${lang}/projects${track && track !== "all" ? `?track=${track}` : ""}`}
            className="inline-flex items-center justify-center border-[3px] border-black bg-white text-black font-bold uppercase tracking-wider text-[16px] px-8 py-3.5 transition-all duration-100 ease-out shadow-[4px_4px_0px_#0A0E11] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#0A0E11] active:translate-x-1 active:translate-y-1 active:shadow-none font-heading"
          >
            {dict.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
