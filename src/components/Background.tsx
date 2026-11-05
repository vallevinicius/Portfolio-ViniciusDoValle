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
        <article className="rounded-[2rem] bg-paper p-7 text-wine md:p-10 lg:col-span-7">
          <FaAsterisk aria-hidden className="h-5 w-5 text-flame" />
          <h3 className="mt-5 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight">{b.cityHall}</h3>
          <p className="mt-2 font-semibold text-wine/70">{b.cityHallRole}</p>
          <p className="mt-5 max-w-prose">{b.cityHallText}</p>
          <p className="mt-5 inline-block rounded-full bg-wine px-4 py-1.5 text-sm font-bold text-paper">
            TypeScript, React, Node.js, MySQL
          </p>
        </article>

        <div className="grid gap-5 lg:col-span-5">
          <article className="rounded-[2rem] bg-wine-deep p-7 ring-1 ring-paper/10 md:p-8">
            <h3 className="font-display text-2xl font-extrabold uppercase leading-tight tracking-tight">{b.degree}</h3>
            <p className="mt-2 font-semibold text-flame">{b.degreeSchool}</p>
            <p className="mt-3 text-paper/80">{b.degreeText}</p>
          </article>

          <article className="rounded-[2rem] bg-flame p-7 text-night md:p-8">
            <h3 className="font-display text-2xl font-extrabold uppercase leading-tight tracking-tight">{b.english}</h3>
            <p className="mt-2 font-semibold">{b.englishText}</p>
          </article>
        </div>

        <article className="rounded-[2rem] border border-paper/20 p-7 md:p-10 lg:col-span-12">
          <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight">{b.skills}</h3>
          <dl className="mt-6 grid gap-x-12 md:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group} className="grid gap-1 border-t border-paper/20 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6">
                <dt className="font-bold text-flame">{b.groups[s.group]}</dt>
                <dd className="text-paper/85">{s.items}</dd>
              </div>
            ))}
          </dl>
        </article>
      </div>
    </Section>
  );
}
