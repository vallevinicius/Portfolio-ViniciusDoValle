import { FaAsterisk } from 'react-icons/fa';
import { Section } from './Section';
import { useLang } from '../i18n';

const skills = [
  { group: 'backEnd', items: 'Java, Spring Boot, Node.js, REST APIs' },
  { group: 'frontEnd', items: 'TypeScript, React' },
  { group: 'data', items: 'PostgreSQL, MySQL' },
  { group: 'tools', items: 'Docker, Git, AWS' },
] as const;

export function Background() {
  const { t } = useLang();
  const b = t.background;
  return (
    <Section id="background" title={b.title}>
      <div className="grid gap-5 lg:grid-cols-12">
        <article className="glass rounded-card p-7 md:p-10 lg:col-span-7">
          <FaAsterisk aria-hidden className="h-5 w-5 text-flame" />
          <h3 className="mt-5 font-display text-3xl uppercase leading-tight tracking-tight">{b.cityHall}</h3>
          <p className="mt-2 font-medium text-paper/70">{b.cityHallRole}</p>
          <p className="mt-5 max-w-prose">{b.cityHallText}</p>
          <p className="mt-5 inline-block rounded-pill bg-paper/10 px-4 py-1.5 text-sm font-semibold">
            TypeScript, React, Node.js, MySQL
          </p>
        </article>

        <div className="grid gap-5 lg:col-span-5">
          <article className="glass rounded-card p-7 md:p-8">
            <h3 className="font-display text-2xl uppercase leading-tight tracking-tight">{b.degree}</h3>
            <p className="mt-2 font-semibold text-flame">{b.degreeSchool}</p>
            <p className="mt-3 text-paper/80">{b.degreeText}</p>
          </article>

          <article className="glass glass-accent rounded-card p-7 md:p-8">
            <h3 className="font-display text-2xl uppercase leading-tight tracking-tight">{b.english}</h3>
            <p className="mt-2 font-semibold">{b.englishText}</p>
          </article>
        </div>

        <article className="glass rounded-card p-7 md:p-10 lg:col-span-12">
          <h3 className="font-display text-2xl uppercase tracking-tight">{b.skills}</h3>
          <dl className="mt-6 grid gap-x-12 md:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group} className="grid gap-1 border-t border-paper/20 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6">
                <dt className="font-semibold text-flame">{b.groups[s.group]}</dt>
                <dd className="text-paper/85">{s.items}</dd>
              </div>
            ))}
          </dl>
        </article>
      </div>
    </Section>
  );
}
