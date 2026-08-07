import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const SITE_URL = "https://www.codiac.online";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "All production projects built by Musa Musa Kannike (Codiac) — web, mobile, and backend platforms shipped for startups and companies across Nigeria, Saudi Arabia, and beyond.",
  alternates: { canonical: `${SITE_URL}/projects` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/projects`,
    title: "Projects | Musa Musa Kannike",
    description:
      "All production projects built by Musa Musa Kannike — web, mobile, and backend platforms shipped for startups and companies worldwide.",
    images: [{ url: "/profile.jpg", width: 1200, height: 630, alt: "Musa Musa Kannike — Fullstack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Musa Musa Kannike",
    description: "All production projects built by Musa Musa Kannike.",
    images: ["/profile.jpg"],
  },
};

const ExternalIcon = () => (
  <svg className="w-3.5 h-3.5 ml-1 inline shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="square" strokeLinejoin="miter" />
  </svg>
);

export default function ProjectsPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Navbar />

      <section className="py-16 lg:py-20 px-6 sm:px-8 lg:px-14 bg-[#ece0e0] w-full">
        <div className="max-w-[1200px] mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-[13px] font-semibold uppercase tracking-wide text-[#525252]">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#171717]">Projects</span>
          </nav>

          <div className="mb-14">
            <span className="block text-base font-semibold tracking-[0.12em] uppercase text-primary mb-3">
              {"// ALL WORK"}
            </span>
            <h1
              className="text-4xl lg:text-[46px] font-bold leading-[1.2] text-[#171717]"
              style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
            >
              All Projects
            </h1>
            <p className="text-[#525252] text-[17px] font-medium mt-3 max-w-2xl">
              Every production project built by Musa Musa Kannike — web, mobile, and backend platforms shipped for startups and companies worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col bg-white border-2 border-black group hover:-translate-y-1 transition-transform duration-200"
                style={{ boxShadow: "4px 4px 0px #0A0E11" }}
              >
                <div className="relative w-full h-[200px] overflow-hidden border-b-2 border-black bg-[#F3F4F6]">
                  <Image
                    src={project.image}
                    alt={`${project.name} — ${project.tagline} project screenshot by Musa Musa Kannike`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col gap-3 p-5 flex-1">
                  <div>
                    <h2 className="font-bold text-[#171717] text-xl" style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}>
                      {project.name}
                    </h2>
                    <p className="text-primary text-[13px] font-semibold tracking-wide uppercase">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-[#525252] text-[14px] font-medium leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-bold uppercase tracking-wide border border-black px-2 py-0.5 text-[#171717] bg-[#F3F4F6]">
                        {tag}
                      </span>
                    ))}
                  </div>

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

      <Footer />
    </main>
  );
}
