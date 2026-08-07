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

const SITE_URL = "https://musamusakannike.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Musa Musa Kannike | Fullstack Developer — Codiac",
    template: "%s | Musa Musa Kannike",
  },
  description:
    "Musa Musa Kannike (Codiac) — Fullstack Developer with 4+ years of experience building web, mobile, and desktop applications using React, Next.js, React Native, Node.js, and more.",
  keywords: [
    "Musa Musa Kannike",
    "Codiac",
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
    title: "Musa Musa Kannike | Fullstack Developer",
    description:
      "4+ years building production apps in web, mobile & desktop. React, Next.js, React Native, Node.js, TypeScript.",
    images: [{ url: "/profile.png", width: 1200, height: 630, alt: "Musa Musa Kannike — Fullstack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Musa Musa Kannike | Fullstack Developer",
    description: "4+ years building production apps in web, mobile & desktop.",
    images: ["/profile.png"],
    creator: "@musa_codes",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Musa Musa Kannike",
    alternateName: "Codiac",
    url: SITE_URL,
    image: `${SITE_URL}/profile.png`,
    jobTitle: "Fullstack Developer",
    sameAs: [
      "https://github.com/musamusakannike",
      "https://x.com/musa_codes",
      "https://www.linkedin.com/in/musa-musa-kannike-02604b418/",
    ],
    knowsAbout: ["TypeScript", "React", "Next.js", "React Native", "Node.js", "Python"],
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
        {children}
      </body>
    </html>
  );
}
