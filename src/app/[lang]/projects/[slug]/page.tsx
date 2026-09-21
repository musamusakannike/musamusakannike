import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects as projectsData } from "@/data/projects";
import {
  getDictionary,
  hasLocale,
  getDictionaryForLocale,
  locales,
  type Locale,
} from "../../dictionaries";

const SITE_URL = "https://www.codiac.online";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    projectsData.map((project) => ({
      lang,
      slug: project.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};

  const baseProject = projectsData.find((p) => p.slug === slug);
  if (!baseProject) return {};

  const dict = await getDictionaryForLocale(lang as Locale);
  const localized =
    dict.projectItems[slug as keyof typeof dict.projectItems] || baseProject;
  const isArabic = lang === "ar";
  const url = `${SITE_URL}/${lang}/projects/${slug}`;

  return {
    title: `${localized.name} — ${localized.tagline}`,
    description: localized.description,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en/projects/${slug}`,
        ar: `${SITE_URL}/ar/projects/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      url,
      locale: isArabic ? "ar_SA" : "en_US",
      title: `${localized.name} — ${localized.tagline} | ${isArabic ? "موسى موسى كانيكي" : "Musa Musa Kannike"}`,
      description: localized.description,
      images: [
        {
          url: baseProject.image,
          width: 1536,
          height: 1536,
          alt: `${localized.name} project screenshot`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${localized.name} — ${localized.tagline}`,
      description: localized.description,
      images: [baseProject.image],
    },
  };
}

const ExternalIcon = ({ isRtl }: { isRtl: boolean }) => (
  <svg
    className={`w-3.5 h-3.5 ${isRtl ? "mr-1" : "ml-1"} inline shrink-0`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path
      d="M7 17L17 7M17 7H7M17 7V17"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

export default async function ProjectPage({ params }: Props) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();

  const baseProject = projectsData.find((p) => p.slug === slug);
  if (!baseProject) notFound();

  const dict = await getDictionary();
  const currentLang = lang as Locale;
  const isRtl = lang === "ar";
  const localized =
    dict.projectItems[slug as keyof typeof dict.projectItems] || baseProject;
  const url = `${SITE_URL}/${lang}/projects/${slug}`;

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: localized.name,
    description: localized.description,
    url,
    image: `${SITE_URL}${baseProject.image}`,
    creator: {
      "@type": "Person",
      name: "Musa Musa Kannike",
      alternateName: isRtl ? "كودياك" : "Codiac",
      url: `${SITE_URL}/${lang}`,
    },
    keywords: localized.tags.join(", "),
    dateCreated: localized.year,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict.projects.breadcrumbHome,
        item: `${SITE_URL}/${lang}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.projects.breadcrumbProjects,
        item: `${SITE_URL}/${lang}/projects`,
      },
      { "@type": "ListItem", position: 3, name: localized.name, item: url },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Navbar lang={currentLang} dict={dict.nav} />

      <article className="py-16 lg:py-20 px-6 sm:px-8 lg:px-14">
        <div className="max-w-225 mx-auto">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 text-[13px] font-semibold uppercase tracking-wide text-[#525252]"
          >
            <Link
              href={`/${lang}`}
              className="hover:text-primary transition-colors"
            >
              {dict.projects.breadcrumbHome}
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/${lang}/projects`}
              className="hover:text-primary transition-colors"
            >
              {dict.projects.breadcrumbProjects}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text">{localized.name}</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <span className="block text-base font-semibold tracking-[0.12em] uppercase text-primary mb-3 font-heading">
              {localized.role} — {localized.year}
            </span>
            <h1 className="text-4xl lg:text-[52px] font-bold leading-[1.1] text-text font-heading">
              {localized.name}
            </h1>
            <p className="text-[#525252] text-[18px] font-medium mt-3 font-heading">
              {localized.tagline}
            </p>
          </div>

          {/* Hero image */}
          <div
            className="relative w-full aspect-video border-2 border-black overflow-hidden mb-10"
            style={{ boxShadow: "6px 6px 0px #0A0E11" }}
          >
            <Image
              src={baseProject.image}
              alt={`${localized.name} — ${localized.tagline}`}
              fill
              sizes="(max-width: 900px) 100vw, 900px"
              className="object-cover"
              priority
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {localized.tags.map((tag) => (
              <span
                key={tag}
                className="text-[12px] font-bold uppercase tracking-wide border border-black px-2.5 py-1 text-text bg-[#F3F4F6]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Body */}
          <div className="flex flex-col gap-5 mb-12">
            {localized.detail.map((paragraph, i) => (
              <p
                key={i}
                className="text-[#404040] text-[17px] leading-relaxed font-medium"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 pb-12 border-b border-neutral-200">
            {localized.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-[3px] border-black bg-primary text-black font-bold uppercase tracking-wider text-[14px] px-6 py-3 transition-all duration-100 ease-out shadow-[3px_3px_0px_#0A0E11] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_#0A0E11] font-heading"
              >
                {link.label}
                <ExternalIcon isRtl={isRtl} />
              </a>
            ))}
          </div>

          {/* Back to all projects */}
          <div className="mt-10">
            <Link
              href={`/${lang}/projects`}
              className="font-bold text-[15px] text-text hover:text-primary transition-colors uppercase tracking-wide font-heading"
            >
              {dict.projects.backToProjects}
            </Link>
          </div>
        </div>
      </article>

      <Footer lang={currentLang} dict={dict.footer} navDict={dict.nav} />
    </main>
  );
}
