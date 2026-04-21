import Hero from '@/src/components/sections/Hero';
import Projects from '@/src/components/sections/Projects';
import About from '@/src/components/sections/About';
import Contact from '@/src/components/sections/Contact';
import Marquee from '@/src/components/Marquee';

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee text="BRANDING • UX/UI • WEB DEV • STRATEGY • ART DIRECTION" className="-rotate-1 z-20" />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
