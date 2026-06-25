import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WhatIInvestigate from '../components/WhatIInvestigate';
import { useReveal } from '../hooks/useReveal';

export default function Home() {
  useReveal();

  return (
    <main>
      <Hero />
      <WhatIInvestigate />
      <img src="/images/brand/10-editorial-section-divider-transparent.png" className="section-divider" alt="" aria-hidden="true" />
      <About />
      <Highlights />
      <img src="/images/brand/10-editorial-section-divider-transparent.png" className="section-divider" alt="" aria-hidden="true" />
      <Projects />
      <Skills />
      <img src="/images/brand/10-editorial-section-divider-transparent.png" className="section-divider" alt="" aria-hidden="true" />
      <Contact />
    </main>
  );
}
