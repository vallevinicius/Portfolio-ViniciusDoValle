import type { ReactNode } from 'react';
import { FaAsterisk } from 'react-icons/fa';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id}>
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <Reveal>
          <div className="mb-10 flex items-center gap-4 border-b border-paper/20 pb-6 md:mb-14">
            <FaAsterisk aria-hidden className="h-6 w-6 shrink-0 text-flame md:h-8 md:w-8" />
            <h2 className="font-display text-[clamp(1.9rem,5vw,4rem)] uppercase leading-none tracking-[-0.03em]">
              {title}
            </h2>
          </div>
        </Reveal>
        <Reveal delay={120}>{children}</Reveal>
      </div>
    </section>
  );
}
