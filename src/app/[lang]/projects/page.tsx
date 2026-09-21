import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects as projectsData } from "@/data/projects";
import { getDictionary, hasLocale, getDictionaryForLocale, type Locale } from "../dictionaries";

const SITE_URL = "https://www.codiac.online";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const dict = await getDictionaryForLocale(lang as Locale);
  const isArabic = lang === "ar";
  const title = isArabic ? "كافة المشاريع | موسى موسى كانيكي" : "Projects | Musa Musa Kannike";
  const description = dict.projects.allWorkSubheading;
  const url = `${SITE_URL}/${lang}/projects`;

  return {
    title: isArabic ? "المشاريع" : "Projects",
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en/projects`,
        ar: `${SITE_URL}/ar/projects`,
      },
    },
    openGraph: {
      type: "website",
      url,
      locale: isArabic ? "ar_SA" : "en_US",
      title,
      description,
      images: [{ url: "/profile.jpg", width: 1200, height: 630, alt: isArabic ? "موسى موسى كانيكي — مهندس برمجيات" : "Musa Musa Kannike — Software & Product Engineer" }],
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

export default async function ProjectsPage({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary();
  const currentLang = lang as Locale;
  const isRtl = lang === "ar";

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

      <Navbar lang={currentLang} dict={dict.nav} />

      <section className="py-16 lg:py-20 px-6 sm:px-8 lg:px-14 bg-[#ece0e0] w-full">
        <div className="max-w-300 mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-[13px] font-semibold uppercase tracking-wide text-[#525252]">
            <Link href={`/${lang}`} className="hover:text-primary transition-colors">
              {dict.projects.breadcrumbHome}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text">{dict.projects.breadcrumbProjects}</span>
          </nav>

          <div className="mb-14">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => {
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

      <Footer lang={currentLang} dict={dict.footer} navDict={dict.nav} />
    </main>
  );
}
