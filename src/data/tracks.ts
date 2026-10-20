export const PORTFOLIO_TRACKS = ["frontend", "backend", "mobile"] as const;
export type ValidTrack = (typeof PORTFOLIO_TRACKS)[number];
export type PortfolioTrack = "all" | ValidTrack;

export function isValidTrack(track: string): track is ValidTrack {
  return (PORTFOLIO_TRACKS as readonly string[]).includes(track);
}

export interface TrackDefinition {
  id: PortfolioTrack;
  slug: string;
  labelEn: string;
  labelAr: string;
  shortLabelEn: string;
  shortLabelAr: string;
  badgeEn: string;
  badgeAr: string;
  path: (lang: string) => string;
}

export const TRACK_DEFINITIONS: Record<PortfolioTrack, TrackDefinition> = {
  all: {
    id: "all",
    slug: "",
    labelEn: "All / Fullstack",
    labelAr: "الكل / فل ستاك",
    shortLabelEn: "All",
    shortLabelAr: "الكل",
    badgeEn: "FULLSTACK WEB & MOBILE — CODIAC",
    badgeAr: "مطور فل ستاك للويب وتطبيقات الجوال — كودياك",
    path: (lang: string) => `/${lang}`,
  },
  frontend: {
    id: "frontend",
    slug: "frontend",
    labelEn: "Frontend",
    labelAr: "الواجهات الأمامية",
    shortLabelEn: "Frontend",
    shortLabelAr: "واجهات",
    badgeEn: "FRONTEND & INTERACTIVE DEVELOPER — CODIAC",
    badgeAr: "مطور الواجهات الأمامية والتفاعلية — كودياك",
    path: (lang: string) => `/${lang}/frontend`,
  },
  backend: {
    id: "backend",
    slug: "backend",
    labelEn: "Backend",
    labelAr: "الخوادم والأنظمة",
    shortLabelEn: "Backend",
    shortLabelAr: "خوادم",
    badgeEn: "BACKEND & SYSTEMS DEVELOPER — CODIAC",
    badgeAr: "مطور البنى التحتية والخوادم — كودياك",
    path: (lang: string) => `/${lang}/backend`,
  },
  mobile: {
    id: "mobile",
    slug: "mobile",
    labelEn: "Mobile",
    labelAr: "تطبيقات الجوال",
    shortLabelEn: "Mobile",
    shortLabelAr: "جوال",
    badgeEn: "MOBILE APP DEVELOPER — CODIAC",
    badgeAr: "مطور تطبيقات الجوال — كودياك",
    path: (lang: string) => `/${lang}/mobile`,
  },
};

export const TRACK_LIST: TrackDefinition[] = [
  TRACK_DEFINITIONS.all,
  TRACK_DEFINITIONS.frontend,
  TRACK_DEFINITIONS.backend,
  TRACK_DEFINITIONS.mobile,
];

export function getTrackFromHostname(hostname: string | null): PortfolioTrack {
  if (!hostname) return "all";

  // Strip port if present (e.g. mobile.localhost:3000 -> mobile.localhost)
  const hostWithoutPort = hostname.split(":")[0].toLowerCase();

  // Support mobile.codiac.online, mobile.localhost, etc.
  if (hostWithoutPort.startsWith("mobile.") || hostWithoutPort === "mobile") {
    return "mobile";
  }
  if (hostWithoutPort.startsWith("frontend.") || hostWithoutPort === "frontend") {
    return "frontend";
  }
  if (hostWithoutPort.startsWith("backend.") || hostWithoutPort === "backend") {
    return "backend";
  }

  return "all";
}

