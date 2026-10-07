import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="border-t-2 border-ink">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-3">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h2>
        </Reveal>
        <Reveal className="lg:col-span-9" delay={120}>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
