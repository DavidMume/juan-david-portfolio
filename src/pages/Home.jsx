import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { useReveal } from '../hooks/useReveal';

export default function Home() {
  useReveal();

  return (
    <main>
      <Hero />
      <About />
      <Highlights />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
