import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MenuSection } from "@/components/MenuSection";
import { Gallery } from "@/components/Gallery";
import { Team } from "@/components/Team";
import { Press } from "@/components/Press";
import { Reserve } from "@/components/Reserve";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Gallery />
        <Team />
        <Press />
        <Reserve />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
