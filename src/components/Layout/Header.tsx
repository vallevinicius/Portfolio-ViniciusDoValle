import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import ScrollExpandMedia from '../UI/scroll-expansion-hero';

interface HeaderProps {
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ setActiveTab }) => {
  const fullName = 'Vinicius Valle';
  const [typedName, setTypedName] = useState('');

  useEffect(() => {
    let mounted = true;
    let i = 0;
    const speed = 70;

    const tick = () => {
      if (!mounted) return;
      setTypedName(fullName.slice(0, i));
      i += 1;
      if (i <= fullName.length) {
        setTimeout(tick, speed);
      }
    };

    setTypedName('');
    tick();

    return () => { mounted = false; };
  }, [fullName]);

  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="/foto-perfil.jpeg"
      title={typedName}
      date="Software Developer"
      scrollToExpand="Scroll to reveal"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-8 gap-6 items-start text-center md:text-left">
        <div className="md:col-span-6">
          <div className="text-sm font-mono mb-2" style={{ color: 'var(--primary)' }}>&lt;/&gt; SOFTWARE_DEVELOPER</div>

          <p className="text-muted leading-relaxed mb-4 max-w-xl mx-auto md:mx-0">Fullstack software developer focused on building modern software systems, best practices and performance. I work with Java, Node.js, backend services and modern frontend.</p>

          <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start mb-4">
            <button onClick={() => setActiveTab('projects')} className="cta">View Portfolio</button>
            <a href="mailto:contatoviniciusvalledev@gmail.com" className="brand-link ml-2">Contact</a>

            <div className="flex gap-3 items-center ml-2">
              <a href="https://github.com/viniciusvalledev" target="_blank" rel="noreferrer" aria-label="GitHub" className="brand-link">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/viniciusvalledev" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="brand-link">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/vinxvp" target="_blank" rel="noreferrer" aria-label="Instagram" className="brand-link">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {['Java', 'Node.js', 'TypeScript', 'React', 'Docker'].map(s => (
              <span key={s} className="brand-tag">{s}</span>
            ))}
          </div>
        </div>

        <aside className="md:col-span-2 space-y-4">
          <div className="brand-card p-4">
            <div className="text-[10px] text-muted uppercase">Current Position</div>
            <div className="text-white font-semibold">Prefeitura de Saquarema</div>
            <div className="text-muted text-sm">FullStack Dev</div>
          </div>

          <div className="brand-card p-4">
            <div className="text-[10px] text-muted uppercase">Languages</div>
            <div className="text-white font-semibold">Cultura Inglesa</div>
            <div className="text-muted text-sm">Master 1 (C1/C2)</div>
          </div>

          <div className="brand-card p-4">
            <div className="text-[10px] text-muted uppercase">Status</div>
            <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <div className="text-muted">Available to talk</div>
            </div>
          </div>
        </aside>
      </div>
    </ScrollExpandMedia>
  );
};
