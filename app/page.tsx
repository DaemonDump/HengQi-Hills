import { Footer } from "./components/Footer";
import { Contact } from "./sections/Contact";
import { Concepts } from "./sections/Concepts";
import { Features } from "./sections/Features";
import { HeroSection } from "./sections/HeroSection";
import { Timeline } from "./sections/Timeline";

export default function HomePage() {
  return (
    <>
      <main className="pt-14">
        <HeroSection />
        <Concepts />
        <Features />
        <Timeline />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
