import { notFound } from "next/navigation";
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
import { getDictionary, hasLocale, type Locale } from "./dictionaries";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary();
  const currentLang = lang as Locale;

  return (
    <main className="min-h-screen bg-white text-text">
      <Navbar lang={currentLang} dict={dict.nav} />
      <Hero lang={currentLang} dict={dict.hero} />
      <Marquee skills={dict.marquee} />
      <About lang={currentLang} dict={dict.about} />
      <Stack lang={currentLang} dict={dict.stack} />
      <Projects lang={currentLang} dict={dict.projects} projectItems={dict.projectItems} />
      <Experience lang={currentLang} dict={dict.experience} />
      <Testimonials lang={currentLang} dict={dict.testimonials} />
      <CTA lang={currentLang} dict={dict.cta} />
      <Footer lang={currentLang} dict={dict.footer} navDict={dict.nav} />
    </main>
  );
}
