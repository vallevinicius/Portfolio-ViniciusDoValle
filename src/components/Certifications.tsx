import { useEffect, useState } from 'react';
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaTrophy, FaMedal } from 'react-icons/fa';
import { Section } from './Section';
import { useLang } from '../i18n';

const awards = [
  {
    key: 'champion',
    project: 'Mei De Saqua',
    url: 'https://meidesaqua.saquarema.rj.gov.br/',
    Icon: FaTrophy,
    badge: 'bg-night text-flame',
  },
  {
    key: 'runnerUp',
    project: 'Aqui Tem ODS',
    url: 'https://aquitemods.saquarema.rj.gov.br/',
    Icon: FaMedal,
    badge: 'bg-wine text-paper',
  },
] as const;

// `award` links a photo to the card it belongs to (index in `awards`).
const photos = [
  { src: '/Foto%20lucimar%203.jpeg', award: 0 },
  { src: '/Foto%20lucimar%201.jpeg', award: 1 },
  { src: '/Foto%20lucimar%202.jpeg', award: null },
];

const certUrls = [
  'https://cursos.alura.com.br/formalCertificate/e94b5dd6-8f74-4c26-9c18-5d7b25e8125c',
  'https://cursos.alura.com.br/formalCertificate/01cb0146-5280-4e3a-8b00-aff49197ded2',
  'https://cursos.alura.com.br/formalCertificate/7c31e5d7-c9e8-42ad-a09d-ff222280602e',
];

function PhotoCarousel({ i, setI }: { i: number; setI: (n: number) => void }) {
  const { t } = useLang();
  const a = t.awards;
  const [paused, setPaused] = useState(false);
  const go = (n: number) => setI((n + photos.length) % photos.length);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI((i + 1) % photos.length), 4500);
    return () => clearInterval(t);
  }, [paused, i, setI]);

  const btn =
    'absolute top-[calc(50%-1rem)] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-night/70 text-paper transition-colors hover:bg-flame hover:text-night';

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={a.group}
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-[2rem]">
        <div
          className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {photos.map((p, n) => (
            <figure key={p.src} aria-hidden={n !== i} className="relative w-full shrink-0">
              <img src={p.src} alt={a.photos[n].alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/90 to-transparent px-6 pb-5 pt-14 font-display text-lg font-bold uppercase text-paper">
                {a.photos[n].caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <button type="button" aria-label={a.prev} onClick={() => go(i - 1)} className={`${btn} left-3`}>
        <FiChevronLeft aria-hidden className="h-6 w-6" />
      </button>
      <button type="button" aria-label={a.next} onClick={() => go(i + 1)} className={`${btn} right-3`}>
        <FiChevronRight aria-hidden className="h-6 w-6" />
      </button>
      <div className="mt-2 flex justify-center">
        {photos.map((p, n) => (
          <button
            key={p.src}
            type="button"
            aria-label={`${a.show} ${n + 1}`}
            aria-current={n === i}
            onClick={() => setI(n)}
            className="group flex h-8 items-center px-1"
          >
            <span className={`block h-2.5 rounded-full transition-all ${n === i ? 'w-8 bg-flame' : 'w-2.5 bg-paper/30'}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

export function Awards() {
  const { t } = useLang();
  const a = t.awards;
  const [i, setI] = useState(0);
  const active = photos[i].award;

  return (
    <Section id="awards" title={a.title}>
      <p className="mb-8 max-w-[40rem] text-lg text-paper/80">
        {a.intro}
      </p>
      <div className="grid items-start gap-8 xl:grid-cols-[1.4fr_1fr]">
        <PhotoCarousel i={i} setI={setI} />
        <div className="grid gap-4">
          {awards.map(({ key, project, url, Icon, badge }, n) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => {
                const idx = photos.findIndex((p) => p.award === n);
                if (idx >= 0) setI(idx);
              }}
              className={`group flex items-center gap-5 rounded-[2rem] p-6 transition-colors ${
                n === 0 ? 'bg-flame text-night hover:bg-paper' : 'bg-paper text-wine hover:bg-flame hover:text-night'
              } ${active === n ? 'ring-4 ring-paper/40' : ''}`}
            >
              <span aria-hidden className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${badge}`}>
                <Icon className="h-7 w-7" />
              </span>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-extrabold uppercase leading-tight">{a[key]}</h3>
                <p className="mt-1 font-bold">{project}</p>
                <p className="text-base font-medium opacity-80">{a.visit}</p>
              </div>
              <FiArrowUpRight aria-hidden className="h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Certifications() {
  const { t } = useLang();
  return (
    <Section id="certifications" title={t.certs.title}>
      <ul className="border-t border-paper/20">
        {t.certs.items.map((c, n) => (
          <li key={c.title} className="border-b border-paper/20">
            <a
              href={certUrls[n]}
              target="_blank"
              rel="noreferrer"
              className="group -mx-3 grid gap-1 px-3 py-5 transition-colors hover:bg-paper/5 sm:grid-cols-[1fr_auto] sm:gap-8"
            >
              <div>
                <span className="font-display text-xl font-bold group-hover:text-flame">{c.title}</span>
                <p className="mt-1 max-w-[60ch] text-base text-paper/70">{c.about}</p>
              </div>
              <span className="flex items-center gap-2 text-paper/70">
                Alura, {c.date}
                <FiArrowUpRight aria-hidden className="h-5 w-5 text-flame transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
