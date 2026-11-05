import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiPlus } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { Section } from './Section';
import { useLang } from '../i18n';

interface Project {
  id: string;
  name: string;
  url: string;
  /** Public repository, when there is one. */
  repo?: string;
  stack: string[];
  /** Screenshot of the live site, see public/projects. */
  image: string;
}

const GITHUB = 'https://github.com/vallevinicius';

const projects: Project[] = [
  {
    id: 'mei',
    name: 'Mei De Saquá',
    url: 'https://meidesaqua.saquarema.rj.gov.br/',
    repo: `${GITHUB}/MeiDeSaqua-Back`,
    stack: ['TypeScript', 'Node.js', 'React', 'Docker'],
    image: '/projects/mei.webp',
  },
  {
    id: 'ods',
    name: 'Aqui Tem ODS',
    url: 'https://aquitemods.saquarema.rj.gov.br/',
    stack: ['TypeScript', 'Node.js', 'React', 'MySQL'],
    image: '/projects/ods.webp',
  },
  {
    id: 'enigmas',
    name: 'ODS: Enigmas do Futuro',
    url: 'https://enigmasdofuturo.saquarema.rj.gov.br/',
    repo: `${GITHUB}/Jogo-ODS-ONU`,
    stack: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/enigmas.webp',
  },
  {
    id: 'apaixonese',
    name: 'Apaixone-se por Saquarema',
    url: 'https://apaixonese.saquarema.rj.gov.br/',
    stack: ['Next.js', 'React'],
    image: '/projects/apaixonese.webp',
  },
  {
    // Proprietary product: no public repository.
    id: 'marquo',
    name: 'Marquo',
    url: 'https://marquo.com.br/',
    stack: ['Next.js', 'NestJS', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/marquo.webp',
  },
  {
    id: 'grana',
    name: 'Your Money, Your Life',
    url: 'https://granafacil-58053.web.app',
    repo: `${GITHUB}/ControleFinanceiro`,
    stack: ['JavaScript', 'Firebase', 'Chart.js'],
    image: '/projects/grana.webp',
  },
  {
    id: 'total',
    name: 'Total Software',
    url: 'https://totalsoftware.com.br',
    repo: `${GITHUB}/TotalSoftware`,
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/total.webp',
  },
  // Client work: no code link on purpose.
  {
    id: 'rafael',
    name: 'Rafael Rodrigues Imóveis',
    url: 'https://rafaelrodriguesimoveis.com/',
    stack: ['Next.js', 'TypeScript'],
    image: '/projects/rafael.webp',
  },
  {
    id: 'pratagy',
    name: 'Pousada Pratagy',
    url: 'https://pousadapratagy.com/',
    stack: ['Next.js', 'React'],
    image: '/projects/pratagy.webp',
  },
  {
    id: 'vivamar',
    name: 'Pousada Viva Mar',
    url: 'https://vivamarpousada.com/',
    stack: ['Next.js', 'React'],
    image: '/projects/vivamar.webp',
  },
];

/** How long the pointer must rest on a card before it opens, so sweeping across the row does not make it flicker. */
const HOVER_INTENT_MS = 120;

export function Work() {
  const { t } = useLang();
  const w = t.work;
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const openOnHover = (i: number) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setActive(i), HOVER_INTENT_MS);
  };

  return (
    <Section id="work" title={w.title}>
      <ul aria-label={w.gallery} className="flex flex-col gap-3 lg:h-[34rem] lg:flex-row">
        {projects.map((p, i) => {
          const open = i === active;
          const copy = w.items[p.id];
          return (
            <li
              key={p.id}
              onMouseEnter={() => openOnHover(i)}
              onMouseLeave={() => clearTimeout(timer.current)}
              className={`glass relative min-h-0 overflow-hidden rounded-card transition-[flex-grow,height] duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] motion-reduce:transition-none lg:h-auto lg:basis-0 ${
                open ? 'h-[38rem] lg:grow-[9]' : 'h-16 lg:grow'
              }`}
            >
              <img
                src={p.image}
                alt={`${p.name}: preview`}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 h-full w-full object-cover object-top transition duration-700 ${
                  open ? '' : 'opacity-45 saturate-50'
                }`}
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/10 to-transparent" />

              {/* Opens the card. Stays mounted when open so keyboard focus is not lost. */}
              <button
                type="button"
                aria-expanded={open}
                aria-label={`${w.open}: ${p.name}`}
                onClick={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`absolute inset-0 z-10 flex items-center justify-between gap-3 px-5 lg:flex-col lg:justify-end lg:px-0 lg:py-6 ${
                  open ? 'pointer-events-none' : ''
                }`}
              >
                <span
                  className={`font-display text-lg uppercase tracking-tight transition-opacity duration-300 lg:text-xl lg:[writing-mode:vertical-rl] lg:rotate-180 ${
                    open ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {p.name}
                </span>
                <FiPlus
                  aria-hidden
                  className={`h-5 w-5 shrink-0 text-flame transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}
                />
              </button>

              <div
                inert={!open}
                className={`absolute inset-x-3 bottom-3 z-20 transition duration-500 motion-reduce:transition-none ${
                  open ? 'translate-y-0 opacity-100 delay-300' : 'pointer-events-none translate-y-4 opacity-0'
                }`}
              >
                <div className="glass rounded-card-sm p-5">
                  <p className="inline-block rounded-pill bg-paper/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    {copy.category}
                  </p>
                  <h3 className="mt-3 font-display text-3xl uppercase tracking-tight md:text-[2.5rem]">{p.name}</h3>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-paper/85 md:line-clamp-3">{copy.text}</p>
                  <div className="md:mt-4 md:flex md:flex-wrap md:items-center md:justify-between md:gap-4">
                  <ul className="mt-4 flex flex-wrap gap-2 md:mt-0">
                    {p.stack.map((s) => (
                      <li key={s} className="rounded-pill bg-paper/10 px-3 py-1 text-xs font-semibold">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-3 md:mt-0 md:shrink-0">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-pill bg-flame px-5 py-2.5 font-semibold text-night transition-colors hover:bg-paper"
                    >
                      {w.visit}
                      <FiArrowUpRight aria-hidden className="h-5 w-5" />
                    </a>
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="glass inline-flex items-center gap-2 rounded-pill px-5 py-2.5 font-semibold"
                      >
                        <FaGithub aria-hidden className="h-4 w-4" />
                        {w.code}
                      </a>
                    )}
                  </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
