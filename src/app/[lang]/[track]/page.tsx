import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioView from "@/components/PortfolioView";
import {
  getDictionary,
  hasLocale,
  getDictionaryForLocale,
  locales,
  type Locale,
} from "../dictionaries";
import {
  PORTFOLIO_TRACKS,
  isValidTrack,
  type ValidTrack,
} from "@/data/tracks";
import { applyTrackToDictionary } from "@/data/trackContent";

const SITE_URL = "https://www.codiac.online";

type PageProps = {
  params: Promise<{ lang: string; track: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    PORTFOLIO_TRACKS.map((track) => ({
      lang,
      track,
    }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, track } = await params;
  if (!hasLocale(lang) || !isValidTrack(track)) return {};

  const rawDict = await getDictionaryForLocale(lang as Locale);
  const dict = applyTrackToDictionary(rawDict, track, lang);
  const isArabic = lang === "ar";
  const url = `${SITE_URL}/${lang}/${track}`;

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
        en: `${SITE_URL}/en/${track}`,
        ar: `${SITE_URL}/ar/${track}`,
        "x-default": `${SITE_URL}/en/${track}`,
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

export default async function TrackPage({ params }: PageProps) {
  const { lang, track } = await params;
  if (!hasLocale(lang) || !isValidTrack(track)) {
    notFound();
  }

  const rawDict = await getDictionary();
  const currentLang = lang as Locale;

  return (
    <PortfolioView
      lang={currentLang}
      rawDict={rawDict}
      track={track as ValidTrack}
    />
  );
}
