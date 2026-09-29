import type { Metadata } from "next";
import { Rajdhani, Space_Grotesk, Cairo, Tajawal } from "next/font/google";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import "@/app/globals.css";
import { locales, hasLocale, getDictionaryForLocale, type Locale } from "./dictionaries";
import type { PortfolioTrack } from "@/data/tracks";
import { applyTrackToDictionary } from "@/data/trackContent";

const rajdhani = Rajdhani({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const cairo = Cairo({
  weight: ["400", "600", "700", "800"],
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  weight: ["400", "500", "700"],
  subsets: ["arabic", "latin"],
  variable: "--font-tajawal",
  display: "swap",
});

const SITE_URL = "https://www.codiac.online";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const rawDict = await getDictionaryForLocale(lang as Locale);
  const headerList = await headers();
  const track = (headerList.get("x-portfolio-track") as PortfolioTrack) || "all";
  const dict = applyTrackToDictionary(rawDict, track, lang);
  const isArabic = lang === "ar";
  const url = `${SITE_URL}/${lang}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.titleDefault,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: "Musa Musa Kannike" }],
    creator: "Musa Musa Kannike",
    robots: { index: true, follow: true },
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en`,
        ar: `${SITE_URL}/ar`,
        "x-default": `${SITE_URL}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: isArabic ? "ar_SA" : "en_US",
      url,
      siteName: isArabic ? "موسى موسى كانيكي — كودياك" : "Musa Musa Kannike — Codiac",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      creator: "@musa_codes",
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!hasLocale(lang)) {
    notFound();
  }

  const isRtl = lang === "ar";

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Musa Musa Kannike",
    alternateName: isRtl ? "كودياك" : "Codiac",
    url: `${SITE_URL}/${lang}`,
    image: `${SITE_URL}/profile.jpg`,
    jobTitle: isRtl ? "مطور فل ستاك للويب وتطبيقات الجوال" : "Fullstack Web & Mobile App Developer",
    sameAs: [
      "https://github.com/musamusakannike",
      "https://x.com/musa_codes",
      "https://www.linkedin.com/in/musa-musa-kannike-02604b418/",
    ],
    knowsAbout: [
      "Fullstack Web Development",
      "Mobile App Development",
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "System Design",
      "UI/UX",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/${lang}`,
    name: isRtl ? "موسى موسى كانيكي — كودياك" : "Musa Musa Kannike — Codiac",
    publisher: { "@id": `${SITE_URL}/#person` },
  };

  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    url: `${SITE_URL}/${lang}`,
    mainEntity: { "@id": `${SITE_URL}/#person` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };

  return (
    <html
      lang={lang}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${rajdhani.variable} ${spaceGrotesk.variable} ${cairo.variable} ${tajawal.variable}`}
    >
      <body
        className="min-h-full flex flex-col bg-white text-text"
        style={{
          fontFamily: isRtl
            ? "var(--font-tajawal), var(--font-cairo), sans-serif"
            : "var(--font-space-grotesk), sans-serif",
        }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
