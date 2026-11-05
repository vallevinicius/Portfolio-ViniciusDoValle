import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLang } from '../i18n';

const links = [
  { href: '#work', key: 'projects' },
  { href: '#background', key: 'background' },
  { href: '#awards', key: 'awards' },
  { href: '#certifications', key: 'certificates' },
] as const;

function useClock(lang: string) {
  const format = () =>
    new Intl.DateTimeFormat(lang === 'pt' ? 'pt-BR' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Sao_Paulo',
    }).format(new Date());
  const [time, setTime] = useState(format);
  useEffect(() => {
    setTime(format());
    const id = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);
  return time;
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const { t, lang, toggle } = useLang();
  const n = t.nav;
  const time = useClock(lang);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div className="mx-auto flex max-w-[100rem] items-center justify-between gap-3">
        <div className="relative flex items-center gap-2">
          <button
            type="button"
            aria-label={open ? n.closeMenu : n.openMenu}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((o) => !o)}
            className="glass flex h-11 items-center gap-2 rounded-pill px-4 text-sm font-semibold md:hidden"
          >
            {open ? <FiX aria-hidden className="h-5 w-5" /> : <FiMenu aria-hidden className="h-5 w-5" />}
            Menu
          </button>

          <nav
            id="main-nav"
            aria-label="Main"
            className={`${open ? 'flex' : 'hidden'} glass absolute left-0 top-full mt-2 w-64 flex-col gap-1 rounded-card-sm p-3 md:static md:mt-0 md:flex md:w-auto md:flex-row md:gap-1 md:rounded-pill md:p-1`}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-pill px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-paper/15"
              >
                {n[l.key]}
              </a>
            ))}
          </nav>

          <p className="glass hidden h-11 items-center gap-2 rounded-pill px-4 text-sm font-medium lg:flex">
            <span aria-hidden className="h-2 w-2 rounded-pill bg-flame" />
            {t.hero.location} <span className="text-paper/70">{time}</span>
          </p>
        </div>

        <a href="#top" className="absolute left-1/2 -translate-x-1/2 font-display text-xl font-semibold tracking-tight max-md:hidden">
          vv<span className="text-flame">.</span>
        </a>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            lang={n.switchShort === 'PT' ? 'pt' : 'en'}
            aria-label={n.switchTo}
            title={n.switchTo}
            className="glass flex h-11 items-center rounded-pill px-4 text-sm font-semibold"
          >
            {n.switchShort}
          </button>
          <a
            href="#contact"
            className="flex h-11 items-center rounded-pill bg-flame px-5 text-sm font-semibold text-night transition-colors hover:bg-paper"
          >
            {n.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
