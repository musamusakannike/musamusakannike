import type { Metadata } from "next";
import { Rajdhani, Space_Grotesk } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const SITE_URL = "https://www.codiac.online";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Musa Musa Kannike | Software & Product Engineer — Codiac",
    template: "%s | Musa Musa Kannike",
  },
  description:
    "Musa Musa Kannike (Codiac) — Software & Product Engineer with 4+ years of experience building web, mobile, and cloud products. Bridging product vision, UX architecture, and scalable fullstack engineering with React, Next.js, React Native, and Node.js.",
  keywords: [
    "Musa Musa Kannike",
    "Codiac",
    "product engineer",
    "software engineer",
    "product-minded engineer",
    "fullstack developer Nigeria",
    "React Native developer",
    "Next.js developer",
    "mobile app developer Nigeria",
    "web developer Ilorin",
    "fullstack engineer",
  ],
  authors: [{ name: "Musa Musa Kannike" }],
  creator: "Musa Musa Kannike",
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: "Musa Musa Kannike — Codiac",
    title: "Musa Musa Kannike | Software & Product Engineer",
    description:
      "4+ years bridging product vision and engineering execution across web, mobile & cloud. React, Next.js, React Native, Node.js, TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Musa Musa Kannike | Software & Product Engineer",
    description: "4+ years bridging product vision and engineering execution across web, mobile & cloud.",
    creator: "@musa_codes",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Musa Musa Kannike",
    alternateName: "Codiac",
    url: SITE_URL,
    image: `${SITE_URL}/profile.jpg`,
    jobTitle: "Software & Product Engineer",
    sameAs: [
      "https://github.com/musamusakannike",
      "https://x.com/musa_codes",
      "https://www.linkedin.com/in/musa-musa-kannike-02604b418/",
    ],
    knowsAbout: ["Product Engineering", "TypeScript", "React", "Next.js", "React Native", "Node.js", "System Design", "UI/UX"],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Musa Musa Kannike — Codiac",
    publisher: { "@id": `${SITE_URL}/#person` },
  };

  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    mainEntity: { "@id": `${SITE_URL}/#person` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };

  return (
    <html
      lang="en"
      className={`${rajdhani.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#171717]" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
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
