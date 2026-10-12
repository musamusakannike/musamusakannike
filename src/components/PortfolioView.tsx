import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Locale, Dictionary } from "@/app/[lang]/dictionaries";
import type { PortfolioTrack } from "@/data/tracks";
import { applyTrackToDictionary } from "@/data/trackContent";

type PortfolioViewProps = {
  lang: Locale;
  rawDict: Dictionary;
  track: PortfolioTrack;
};

export default function PortfolioView({
  lang,
  rawDict,
  track,
}: PortfolioViewProps) {
  const dict = applyTrackToDictionary(rawDict, track, lang);

  return (
    <main className="min-h-screen bg-white text-text">
      <Navbar lang={lang} dict={dict.nav} currentTrack={track} />
      <Hero lang={lang} dict={dict.hero} currentTrack={track} />
      <Marquee skills={dict.marquee} />
      <About lang={lang} dict={dict.about} />
      <Stack lang={lang} dict={dict.stack} />
      <Projects
        lang={lang}
        dict={dict.projects}
        projectItems={dict.projectItems}
        track={track}
      />
      <Experience lang={lang} dict={dict.experience} />
      <Testimonials lang={lang} dict={dict.testimonials} />
      <CTA lang={lang} dict={dict.cta} />
      <Footer
        lang={lang}
        dict={dict.footer}
        navDict={dict.nav}
        currentTrack={track}
      />
    </main>
  );
}
