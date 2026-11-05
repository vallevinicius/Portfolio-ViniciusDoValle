import { FaAsterisk } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { useLang } from '../i18n';

const ticker = ['Java', 'Spring Boot', 'Node.js', 'TypeScript', 'React', 'PostgreSQL', 'MySQL', 'Docker', 'AWS'];

export function Hero() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <>
      <section id="top" className="mx-auto max-w-7xl px-5 pb-16 pt-8 md:px-10 md:pb-24 md:pt-14">
        <p className="mb-8 inline-flex items-center gap-3 rounded-full border border-paper/25 px-4 py-2 text-sm font-semibold">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-flame opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-flame" />
          </span>
          {h.status}
        </p>

        <h1 className="font-display mb-12 text-[clamp(1.75rem,5.6vw,5rem)] font-bold uppercase leading-[1] tracking-[-0.02em]">
          {h.headline.map((line, i) => (
            <span key={line} className="rise">
              <span className={i === h.headline.length - 1 ? 'text-flame' : undefined}>{line}</span>
            </span>
          ))}
        </h1>

        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="max-w-[34rem] text-lg leading-relaxed text-paper/80">{h.intro}</p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-flame px-7 py-3.5 font-bold text-night transition-colors hover:bg-paper"
              >
                {h.seeProjects}
                <FiArrowUpRight aria-hidden className="h-5 w-5" />
              </a>
              <a
                href="mailto:contatoviniciusvalledev@gmail.com"
                className="rounded-full border border-paper/40 px-7 py-3.5 font-bold transition-colors hover:border-flame hover:text-flame"
              >
                {h.email}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[28rem] pb-20 lg:col-span-5 lg:max-w-none lg:pb-0">
            <img
              src="/Foto%20perfil.jpeg"
              alt={h.photoAlt}
              width={480}
              height={600}
              className="aspect-[4/5] w-full rounded-[2rem] object-cover object-[55%_75%]"
            />

            <div className="absolute -bottom-0 left-0 w-[46%] rounded-2xl bg-wine-deep p-4 shadow-xl shadow-night/40 ring-1 ring-paper/10 sm:p-5 lg:-left-8 lg:bottom-10">
              <FaAsterisk aria-hidden className="h-4 w-4 text-flame" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-paper/70">{h.stackLabel}</p>
              <p className="mt-1 font-display text-base font-bold leading-snug sm:text-lg">Java, Node.js, React</p>
            </div>

            <div className="absolute bottom-0 right-0 w-[46%] rounded-2xl bg-paper p-4 text-wine shadow-xl shadow-night/40 sm:p-5 lg:-right-4 lg:bottom-0">
              <FaAsterisk aria-hidden className="h-4 w-4 text-flame" />
              <p className="mt-2 font-display text-3xl font-extrabold leading-none sm:text-4xl">{h.stat}</p>
              <p className="mt-2 text-xs font-semibold leading-snug">{h.statLabel}</p>
            </div>
          </div>
        </div>
      </section>

      <div aria-hidden className="overflow-hidden bg-flame py-4 text-night">
        <div className="marquee">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((item, i) => (
            <span key={i} className="flex items-center font-display text-xl font-extrabold uppercase tracking-tight">
              <span className="px-6">{item}</span>
              <FaAsterisk className="h-4 w-4" />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
