import { Section } from './Section';

const skills = [
  { group: 'Back end', items: 'Java, Spring Boot, Node.js, REST APIs' },
  { group: 'Front end', items: 'TypeScript, React' },
  { group: 'Data', items: 'PostgreSQL, MySQL' },
  { group: 'Tools', items: 'Docker, Git, AWS' },
];

export function Background() {
  return (
    <Section id="background" title="Background">
      <div className="space-y-14">
        <div>
          <h3 className="font-display text-2xl font-bold">Prefeitura de Saquarema</h3>
          <p className="mt-1 text-muted">Junior full-stack developer (internship), Feb 2025 to present</p>
          <p className="mt-4 max-w-prose">
            I build end-to-end APIs for high-demand city hall projects. The systems I work on handle
            registration peaks of more than 1,000 sign-ups and thousands of daily visits.
          </p>
          <p className="mt-3 font-medium">TypeScript, React, Node.js, MySQL</p>
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold">Bachelor in Computer Science</h3>
          <p className="mt-1 text-muted">UNESA (Estácio de Sá University), Jan 2023 to Nov 2026</p>
          <p className="mt-4 max-w-prose">Currently in the 7th of 8 semesters.</p>
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold">English</h3>
          <p className="mt-1 text-muted">Cultura Inglesa, Master 1 (C1/C2)</p>
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold">Skills</h3>
          <dl className="mt-4 border-t border-ink/30">
            {skills.map((s) => (
              <div key={s.group} className="grid gap-1 border-b border-ink/30 py-3 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="font-semibold">{s.group}</dt>
                <dd className="text-muted">{s.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
