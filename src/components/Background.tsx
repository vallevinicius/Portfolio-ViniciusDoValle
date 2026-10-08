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
      <div className="space-y-14">
        <div>
          <h3 className="font-display text-2xl font-bold">{b.cityHall}</h3>
          <p className="mt-1 text-muted">{b.cityHallRole}</p>
          <p className="mt-4 max-w-prose">
            {b.cityHallText}
          </p>
          <p className="mt-3 font-medium">TypeScript, React, Node.js, MySQL</p>
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold">{b.degree}</h3>
          <p className="mt-1 text-muted">{b.degreeSchool}</p>
          <p className="mt-4 max-w-prose">{b.degreeText}</p>
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold">{b.english}</h3>
          <p className="mt-1 text-muted">{b.englishText}</p>
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold">{b.skills}</h3>
          <dl className="mt-4 border-t border-ink/30">
            {skills.map((s) => (
              <div key={s.group} className="grid gap-1 border-b border-ink/30 py-3 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="font-semibold">{b.groups[s.group]}</dt>
                <dd className="text-muted">{s.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
