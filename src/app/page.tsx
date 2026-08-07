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

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Stack />
      <Projects />
      <Experience />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
