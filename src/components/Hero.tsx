import { FiArrowUpRight, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useLang } from '../i18n';

const EMAIL = 'contatoviniciusvalledev@gmail.com';

export function Hero() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Giant name; the 3D character stands in front of it. */}
      <div className="pointer-events-none absolute inset-x-0 top-[9%] z-0 flex justify-center md:top-[5%]">
        <p
          aria-hidden
          className="select-none text-center font-display text-[clamp(3.5rem,17vw,18rem)] font-semibold uppercase leading-[0.74] tracking-[-0.065em] text-paper"
        >
          <span className="block">Vinicius</span>
          <span className="block">Valle</span>
        </p>
      </div>
      <div aria-hidden className="aura pointer-events-none absolute left-1/2 top-[42%] z-10 aspect-square w-[min(64vw,34rem)] -translate-x-1/2 -translate-y-1/2 rounded-pill" />

      <div className="relative z-20 mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-[100rem] flex-col justify-between gap-10 px-5 pb-8 pt-6 md:px-10 md:pb-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h1 className="glass glass-solid inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-pill px-5 py-2.5 text-sm font-semibold leading-tight tracking-normal sm:text-base">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-pill bg-flame opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-pill bg-flame" />
            </span>
            <span className="sr-only">Vinicius Valle — </span>
            <span>
              {h.status} <strong className="font-bold text-flame">{h.statusPlaces}</strong>
            </span>
          </h1>
        </div>

        <img
          src="/personagem-3d.webp"
          alt={h.characterAlt}
          width={1127}
          height={1400}
          fetchPriority="high"
          className="cutout pointer-events-none relative z-0 mx-auto -mb-6 mt-14 h-[22rem] w-auto max-w-none select-none md:absolute md:inset-auto md:bottom-0 md:left-1/2 md:z-0 md:m-0 md:h-[92%] md:-translate-x-1/2"
        />

        <div className="relative z-10 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-display text-[clamp(2.4rem,4.6vw,4.25rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
              {h.headline.map((line, i) => (
                <span key={line} className="rise">
                  <span className={i === h.headline.length - 1 ? 'text-flame' : undefined}>{line}</span>
                </span>
              ))}
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div className="glass inline-flex items-baseline gap-3 rounded-card-sm px-5 py-3">
                <span className="font-display text-3xl font-semibold leading-none tracking-tight text-flame">{h.stat}</span>
                <span className="max-w-[11rem] text-xs font-medium leading-snug text-paper/80">{h.statLabel}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-pill bg-flame px-7 py-3.5 font-semibold text-night transition-colors hover:bg-paper"
              >
                {h.seeProjects}
                <FiArrowUpRight aria-hidden className="h-5 w-5" />
              </a>
              <a href={`mailto:${EMAIL}`} className="glass rounded-pill px-7 py-3.5 font-semibold">
                {h.email}
              </a>
            </div>
          </div>

          <div className="grid gap-4 lg:col-span-4 lg:col-start-9">
          <section aria-labelledby="about-title" className="glass rounded-card p-6">
            <h2 id="about-title" className="font-display text-xl font-semibold tracking-tight">{h.aboutTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-paper/80">{h.intro}</p>
          </section>

          <aside className="glass rounded-card p-6">
            <h2 className="font-display text-xl font-semibold tracking-tight">{h.contactTitle}</h2>
            <p className="mt-1 text-sm text-paper/70">{h.contactHint}</p>
            <a
              href={`mailto:${EMAIL}`}
              className="glass mt-4 flex items-center justify-between gap-3 rounded-pill py-2 pl-5 pr-2 text-sm font-medium"
            >
              <span className="min-w-0 truncate">{EMAIL}</span>
              <span aria-hidden className="flex h-9 w-9 shrink-0 items-center justify-center rounded-pill bg-flame text-night">
                <FiMail className="h-4 w-4" />
              </span>
            </a>
            <ul className="mt-4 flex gap-2">
              {[
                { label: 'GitHub', href: 'https://github.com/vallevinicius', Icon: FaGithub },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/viniciusvalledev/', Icon: FaLinkedin },
                { label: 'Instagram', href: 'https://www.instagram.com/vinxvp/', Icon: FaInstagram },
              ].map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="glass flex h-10 w-10 items-center justify-center rounded-pill"
                  >
                    <Icon aria-hidden className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
