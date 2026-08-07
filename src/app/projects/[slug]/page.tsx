import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const SITE_URL = "https://codiac.online";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const url = `${SITE_URL}/projects/${project.slug}`;

  return {
    title: `${project.name} — ${project.tagline}`,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${project.name} — ${project.tagline} | Musa Musa Kannike`,
      description: project.description,
      images: [{ url: project.image, width: 1536, height: 1536, alt: `${project.name} project screenshot` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — ${project.tagline}`,
      description: project.description,
      images: [project.image],
    },
  };
}

const ExternalIcon = () => (
  <svg className="w-3.5 h-3.5 ml-1 inline shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="square" strokeLinejoin="miter" />
  </svg>
);

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const url = `${SITE_URL}/projects/${project.slug}`;

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    url,
    image: `${SITE_URL}${project.image}`,
    creator: {
      "@type": "Person",
      name: "Musa Musa Kannike",
      alternateName: "Codiac",
      url: SITE_URL,
    },
    keywords: project.tags.join(", "),
    dateCreated: project.year,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/#projects` },
      { "@type": "ListItem", position: 3, name: project.name, item: url },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Navbar />

      <article className="py-16 lg:py-20 px-6 sm:px-8 lg:px-14">
        <div className="max-w-[900px] mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-[13px] font-semibold uppercase tracking-wide text-[#525252]">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/#projects" className="hover:text-primary transition-colors">Projects</Link>
            <span className="mx-2">/</span>
            <span className="text-[#171717]">{project.name}</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <span className="block text-base font-semibold tracking-[0.12em] uppercase text-primary mb-3">
              {project.role} — {project.year}
            </span>
            <h1
              className="text-4xl lg:text-[52px] font-bold leading-[1.1] text-[#171717]"
              style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
            >
              {project.name}
            </h1>
            <p className="text-[#525252] text-[18px] font-medium mt-3">{project.tagline}</p>
          </div>

          {/* Hero image */}
          <div className="relative w-full aspect-video border-2 border-black overflow-hidden mb-10" style={{ boxShadow: "6px 6px 0px #0A0E11" }}>
            <Image
              src={project.image}
              alt={`${project.name} — ${project.tagline} project screenshot by Musa Musa Kannike`}
              fill
              sizes="(max-width: 900px) 100vw, 900px"
              className="object-cover"
              priority
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[12px] font-bold uppercase tracking-wide border border-black px-2.5 py-1 text-[#171717] bg-[#F3F4F6]">
                {tag}
              </span>
            ))}
          </div>

          {/* Body */}
          <div className="flex flex-col gap-5 mb-12">
            {project.detail.map((paragraph, i) => (
              <p key={i} className="text-[#404040] text-[17px] leading-relaxed font-medium">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 pb-12 border-b border-neutral-200">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-[3px] border-black bg-primary text-black font-bold uppercase tracking-wider text-[14px] px-6 py-3 transition-all duration-100 ease-out shadow-[3px_3px_0px_#0A0E11] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#0A0E11]"
              >
                {link.label}
                <ExternalIcon />
              </a>
            ))}
          </div>

          {/* Back to all projects */}
          <div className="mt-10">
            <Link href="/#projects" className="font-bold text-[15px] text-[#171717] hover:text-primary transition-colors uppercase tracking-wide">
              ← Back to all projects
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
