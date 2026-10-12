import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioView from "@/components/PortfolioView";
import { getDictionary, hasLocale, getDictionaryForLocale, type Locale } from "./dictionaries";

const SITE_URL = "https://www.codiac.online";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const dict = await getDictionaryForLocale(lang as Locale);
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

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  if (!hasLocale(lang)) {
    notFound();
  }

  const rawDict = await getDictionary();
  const currentLang = lang as Locale;

  return (
    <PortfolioView
      lang={currentLang}
      rawDict={rawDict}
      track="all"
    />
  );
}
