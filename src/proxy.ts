import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PORTFOLIO_TRACKS, type PortfolioTrack } from "./data/tracks";

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

// ISO 3166-1 alpha-2 country codes for Arab League member states
const ARAB_COUNTRIES = new Set([
  "SA", // Saudi Arabia
  "AE", // United Arab Emirates
  "EG", // Egypt
  "KW", // Kuwait
  "QA", // Qatar
  "OM", // Oman
  "BH", // Bahrain
  "JO", // Jordan
  "LB", // Lebanon
  "IQ", // Iraq
  "DZ", // Algeria
  "MA", // Morocco
  "TN", // Tunisia
  "LY", // Libya
  "SD", // Sudan
  "YE", // Yemen
  "SY", // Syria
  "PS", // Palestine
  "MR", // Mauritania
  "SO", // Somalia
  "DJ", // Djibouti
  "KM", // Comoros
]);

function parseAcceptLanguage(header: string | null): string[] {
  if (!header) return [];
  return header
    .split(",")
    .map((item) => {
      const [lang, qVal] = item.trim().split(";");
      const q = qVal && qVal.startsWith("q=") ? parseFloat(qVal.slice(2)) : 1.0;
      return { lang: lang.toLowerCase(), q: isNaN(q) ? 0 : q };
    })
    .sort((a, b) => b.q - a.q)
    .map((item) => item.lang);
}

function getLocale(request: NextRequest): Locale {
  // 1. Check user cookie preference
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value || request.cookies.get("locale")?.value;
  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  // 2. Check geo-location headers (Vercel, Cloudflare, CloudFront, etc.)
  const country = (
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    request.headers.get("x-country-code") ||
    request.headers.get("x-country") ||
    request.headers.get("cloudfront-viewer-country") ||
    request.headers.get("geo-country")
  )?.toUpperCase();

  if (country && ARAB_COUNTRIES.has(country)) {
    return "ar";
  }

  // 3. Check Accept-Language header
  const languages = parseAcceptLanguage(request.headers.get("accept-language"));
  for (const lang of languages) {
    if (lang === "ar" || lang.startsWith("ar-") || lang.startsWith("ar_")) {
      return "ar";
    }
    if (lang === "en" || lang.startsWith("en-") || lang.startsWith("en_")) {
      return "en";
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const hostname = request.headers.get("host") || request.nextUrl.hostname;
  const hostWithoutPort = hostname.split(":")[0].toLowerCase();

  // If request arrives on legacy subdomains (e.g. frontend.codiac.online), redirect to canonical track page
  let legacySubdomainTrack: PortfolioTrack | null = null;
  if (hostWithoutPort.startsWith("frontend.") || hostWithoutPort === "frontend") {
    legacySubdomainTrack = "frontend";
  } else if (hostWithoutPort.startsWith("backend.") || hostWithoutPort === "backend") {
    legacySubdomainTrack = "backend";
  } else if (hostWithoutPort.startsWith("mobile.") || hostWithoutPort === "mobile") {
    legacySubdomainTrack = "mobile";
  }

  if (legacySubdomainTrack) {
    const locale = getLocale(request);
    const localeInPath = locales.find(
      (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
    );
    const effectiveLocale = localeInPath || locale;
    const pathWithoutLocale = localeInPath
      ? pathname.slice(`/${localeInPath}`.length)
      : pathname;
    const cleanPath = pathWithoutLocale === "/" ? "" : pathWithoutLocale;

    const isLocalhost = hostWithoutPort.includes("localhost");
    const primaryHost = isLocalhost ? "localhost:3000" : "www.codiac.online";
    const protocol = request.nextUrl.protocol || "https:";
    const targetUrl = new URL(
      `${protocol}//${primaryHost}/${effectiveLocale}/${legacySubdomainTrack}${cleanPath}${search}`
    );
    return NextResponse.redirect(targetUrl, 301);
  }

  // Detect track from pathname if on a track page (e.g. /en/frontend, /frontend)
  const trackFromPath = PORTFOLIO_TRACKS.find(
    (t) =>
      pathname === `/${t}` ||
      pathname.startsWith(`/${t}/`) ||
      locales.some(
        (l) => pathname === `/${l}/${t}` || pathname.startsWith(`/${l}/${t}/`)
      )
  );
  const track = trackFromPath || "all";

  // Check if pathname starts with any supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-portfolio-track", track);

  if (pathnameHasLocale) {
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  // Redirect to localized path if none present (e.g. /frontend -> /en/frontend)
  const locale = getLocale(request);
  const redirectUrl = new URL(
    `/${locale}${pathname === "/" ? "" : pathname}${search}`,
    request.url
  );

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next/static, _next/image, _next/data
     * - favicon.ico, sitemap.xml, robots.txt, manifest
     * - Static asset file extensions (jpg, png, svg, pdf, etc.)
     */
    "/((?!api|_next/static|_next/image|_next/data|favicon\\.ico|sitemap\\.xml|robots\\.txt|manifest\\.webmanifest|manifest\\.json|.*\\.(?:jpg|jpeg|png|gif|svg|webp|ico|pdf|woff2?|txt)$).*)",
  ],
};
