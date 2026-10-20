import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects as projectsData } from "@/data/projects";
import { getDictionary, hasLocale, getDictionaryForLocale, type Locale } from "../dictionaries";
import {
  PORTFOLIO_TRACKS,
  TRACK_LIST,
  TRACK_DEFINITIONS,
  type PortfolioTrack,
} from "@/data/tracks";

const SITE_URL = "https://www.codiac.online";

type Props = {
  params: Promise<{ lang: string }>;
  searchParams?: Promise<{ track?: string }>;
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const resolvedSearchParams = searchParams ? await searchParams : {};
  const queryTrack = resolvedSearchParams.track;
  const track =
    queryTrack && (PORTFOLIO_TRACKS as readonly string[]).includes(queryTrack)
      ? (queryTrack as PortfolioTrack)
      : "all";

  const dict = await getDictionaryForLocale(lang as Locale);
  const isArabic = lang === "ar";
  const trackSuffix =
    track !== "all"
      ? ` — ${isArabic ? TRACK_DEFINITIONS[track]?.labelAr : TRACK_DEFINITIONS[track]?.labelEn}`
      : "";
  const title = isArabic
    ? `كافة المشاريع${trackSuffix} | موسى موسى كانيكي`
    : `Projects${trackSuffix} | Musa Musa Kannike`;
  const description = dict.projects.allWorkSubheading;
  const url = `${SITE_URL}/${lang}/projects${track !== "all" ? `?track=${track}` : ""}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en/projects${track !== "all" ? `?track=${track}` : ""}`,
        ar: `${SITE_URL}/ar/projects${track !== "all" ? `?track=${track}` : ""}`,
      },
    },
    openGraph: {
      type: "website",
      url,
      locale: isArabic ? "ar_SA" : "en_US",
      title,
      description,
      images: [{ url: "/profile.jpg", width: 1200, height: 630, alt: isArabic ? "موسى موسى كانيكي — مطور فل ستاك للويب والجوال" : "Musa Musa Kannike — Fullstack Web & Mobile App Developer" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/profile.jpg"],
    },
  };
}

const ExternalIcon = ({ isRtl }: { isRtl: boolean }) => (
  <svg className={`w-3.5 h-3.5 ${isRtl ? "mr-1" : "ml-1"} inline shrink-0`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="square" strokeLinejoin="miter" />
  </svg>
);

export default async function ProjectsPage({ params, searchParams }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) {
    notFound();
  }

  const resolvedSearchParams = searchParams ? await searchParams : {};
  const queryTrack = resolvedSearchParams.track;
  const currentTrack: PortfolioTrack =
    queryTrack && (PORTFOLIO_TRACKS as readonly string[]).includes(queryTrack)
      ? (queryTrack as PortfolioTrack)
      : "all";

  const dict = await getDictionary();
  const currentLang = lang as Locale;
  const isRtl = lang === "ar";

  const displayedProjects = projectsData.filter(
    (p) => currentTrack === "all" || p.tracks.includes(currentTrack)
  );

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: dict.projects.breadcrumbHome, item: `${SITE_URL}/${lang}` },
      { "@type": "ListItem", position: 2, name: dict.projects.breadcrumbProjects, item: `${SITE_URL}/${lang}/projects` },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Navbar lang={currentLang} dict={dict.nav} currentTrack={currentTrack} />

      <section className="py-16 lg:py-20 px-6 sm:px-8 lg:px-14 bg-[#ece0e0] w-full">
        <div className="max-w-300 mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-[13px] font-semibold uppercase tracking-wide text-[#525252]">
            <Link href={`/${lang}`} className="hover:text-primary transition-colors">
              {dict.projects.breadcrumbHome}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text">{dict.projects.breadcrumbProjects}</span>
            {currentTrack !== "all" && (
              <>
                <span className="mx-2">/</span>
                <span className="text-primary font-bold">
                  {isRtl ? TRACK_DEFINITIONS[currentTrack]?.labelAr : TRACK_DEFINITIONS[currentTrack]?.labelEn}
                </span>
              </>
            )}
          </nav>

          <div className="mb-10">
            <span className="block text-base font-semibold tracking-[0.12em] uppercase text-primary mb-3 font-heading">
              {dict.projects.allWorkTag}
            </span>
            <h1
              className="text-4xl lg:text-[46px] font-bold leading-[1.2] text-text font-heading"
            >
              {dict.projects.allWorkHeading}
            </h1>
            <p className="text-[#525252] text-[17px] font-medium mt-3 max-w-2xl">
              {dict.projects.allWorkSubheading}
            </p>
          </div>

          {/* Track Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {TRACK_LIST.map((t) => {
              const isActive = currentTrack === t.id;
              const count = projectsData.filter(
                (p) => t.id === "all" || p.tracks.includes(t.id)
              ).length;
              const href =
                t.id === "all"
                  ? `/${lang}/projects`
                  : `/${lang}/projects?track=${t.id}`;
              return (
                <Link
                  key={t.id}
                  href={href}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-black transition-all font-heading ${
                    isActive
                      ? "bg-primary text-black shadow-[3px_3px_0px_#0A0E11]"
                      : "bg-white text-text hover:bg-neutral-100 hover:shadow-[2px_2px_0px_#0A0E11]"
                  }`}
                >
                  <span>{isRtl ? t.labelAr : t.labelEn}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 border border-black ${
                      isActive ? "bg-black text-white" : "bg-[#F3F4F6] text-black"
                    }`}
                  >
                    {count}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project) => {
              const localized = dict.projectItems[project.slug as keyof typeof dict.projectItems] || project;
              return (
                <div
                  key={project.id}
                  className="flex flex-col bg-white border-2 border-black group hover:-translate-y-1 transition-transform duration-200"
                  style={{ boxShadow: "4px 4px 0px #0A0E11" }}
                >
                  <div className="relative w-full h-50 overflow-hidden border-b-2 border-black bg-[#F3F4F6]">
                    <Image
                      src={project.image}
                      alt={`${localized.name} — ${localized.tagline}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex flex-col gap-3 p-5 flex-1">
                    <div>
                      <h2 className="font-bold text-text text-xl font-heading">
                        {localized.name}
                      </h2>
                      <p className="text-primary text-[13px] font-semibold tracking-wide uppercase font-heading">
                        {localized.tagline}
                      </p>
                    </div>

                    <p className="text-[#525252] text-[14px] font-medium leading-relaxed flex-1">
                      {localized.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {localized.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-bold uppercase tracking-wide border border-black px-2 py-0.5 text-text bg-[#F3F4F6]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2 border-t border-neutral-100 mt-auto">
                      <Link
                        href={`/${lang}/projects/${project.slug}`}
                        className="text-[13px] font-bold text-primary hover:text-text transition-colors uppercase tracking-wide font-heading"
                      >
                        {dict.projects.caseStudy}
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
        </div>
      </section>

      <Footer
        lang={currentLang}
        dict={dict.footer}
        navDict={dict.nav}
        currentTrack={currentTrack}
      />
    </main>
  );
}
