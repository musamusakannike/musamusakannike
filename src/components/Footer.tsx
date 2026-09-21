"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { Locale, Dictionary } from "@/app/[lang]/dictionaries";

type FooterProps = {
  lang: Locale;
  dict: Dictionary["footer"];
  navDict: Dictionary["nav"];
};

const Footer = ({ lang, dict, navDict }: FooterProps) => {
  const isRtl = lang === "ar";
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageSwitch = (targetLang: Locale) => {
    document.cookie = `NEXT_LOCALE=${targetLang}; path=/; max-age=31536000; SameSite=Lax`;
    let newPath = pathname;
    if (newPath.startsWith(`/${lang}`)) {
      newPath = `/${targetLang}${newPath.slice(lang.length + 1)}`;
    } else {
      newPath = `/${targetLang}${newPath}`;
    }
    if (!newPath.startsWith(`/${targetLang}`)) {
      newPath = `/${targetLang}`;
    }
    router.push(newPath);
  };

  const footerLinks = [
    {
      title: dict.navTitle,
      links: [
        { name: navDict.about, href: `/${lang}#about`, external: false },
        { name: navDict.stack, href: `/${lang}#stack`, external: false },
        { name: navDict.projects, href: `/${lang}#projects`, external: false },
        { name: navDict.experience, href: `/${lang}#experience`, external: false },
        { name: navDict.testimonials, href: `/${lang}#testimonials`, external: false },
      ],
    },
    {
      title: dict.projectsTitle,
      links: [
        { name: "Terrachow", href: "https://www.terrachow.com/", external: true },
        { name: "360Gadgets Africa", href: "https://360gadgetsafrica.com/", external: true },
        { name: "A1 Info Tech", href: "https://www.a1info.tech/", external: true },
        { name: "GlamConnect", href: "https://glam-sync-mvp.vercel.app/", external: true },
        { name: "Cloudstech", href: "https://www.cloudstech.org/", external: true },
      ],
    },
    {
      title: dict.connectTitle,
      links: [
        { name: "GitHub", href: "https://github.com/musamusakannike", external: true },
        { name: "X / Twitter", href: "https://x.com/musa_codes", external: true },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/musa-musa-kannike-02604b418/", external: true },
        { name: "Email", href: "mailto:musamusakannike@gmail.com", external: true },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white py-16 px-6 sm:px-8 lg:px-14 border-t border-neutral-900 w-full box-border">
      <div className="max-w-300 mx-auto flex flex-col gap-12">

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col items-start gap-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary border-2 border-primary flex items-center justify-center" style={{ boxShadow: "3px 3px 0 #fff" }}>
                <span className="text-black font-bold text-base tracking-widest font-heading">MK</span>
              </div>
              <div>
                <p className="font-bold text-white text-[18px] leading-tight tracking-wide uppercase font-heading">
                  {isRtl ? "موسى موسى كانيكي" : "Musa Musa Kannike"}
                </p>
                <p className="text-primary text-[13px] font-semibold tracking-widest uppercase font-heading">{isRtl ? "كودياك" : "Codiac"}</p>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-[#D4D4D4] text-[15px] font-medium leading-relaxed max-w-xs tracking-wide">
              {dict.tagline}
            </p>

            {/* CV Download & Language Switch Button */}
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <div className="relative">
                <div className="absolute inset-0 border-2 border-primary bg-primary translate-x-1.5 translate-y-1.5" />
                <a
                  href="/musa-musa-kannike-fullstack-cv.pdf"
                  download
                  className="relative bg-primary text-black border-2 border-primary font-extrabold px-6 py-3 uppercase tracking-wider text-sm cursor-pointer select-none transition-transform duration-100 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1.5 active:translate-y-1.5 inline-block font-heading"
                >
                  {dict.downloadCv}
                </a>
              </div>

              <button
                onClick={() => handleLanguageSwitch(navDict.targetLang as Locale)}
                className="border-2 border-neutral-700 bg-neutral-900 text-white hover:border-primary hover:text-primary px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                🌐 {navDict.switchTo}
              </button>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col items-start">
              <h3 className="font-extrabold text-white text-[16px] tracking-wider uppercase font-heading">
                {section.title}
              </h3>
              <div className="w-10 h-[2.5px] bg-primary mt-2 mb-6" />
              <ul className="flex flex-col gap-3.5 w-full p-0 m-0 list-none">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${link.name} (opens in new tab)`}
                        className="text-[#A3A3A3] hover:text-primary transition-colors duration-200 text-[15px] font-medium"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[#A3A3A3] hover:text-primary transition-colors duration-200 text-[15px] font-medium"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Separator */}
        <hr className="border-t border-neutral-800 my-0" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-sm font-semibold tracking-wide">
          <p className="text-center md:text-start">
            © {new Date().getFullYear()} {dict.rights}
          </p>
          <p className="text-center">
            {dict.builtWith} <Link href="https://www.a1info.tech/" target="_blank" rel="noopener noreferrer" className="text-primary">A1 info tech</Link> {dict.uiInspiration}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
