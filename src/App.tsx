import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Background } from './components/Background';
import { Awards, Certifications } from './components/Certifications';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Background />
        <Awards />
        <Certifications />
      </main>
      <Contact />
    </>
  );
}
