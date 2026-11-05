import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLang } from '../i18n';

const links = [
  { href: '#work', key: 'projects' },
  { href: '#background', key: 'background' },
  { href: '#awards', key: 'awards' },
  { href: '#certifications', key: 'certificates' },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const { t, toggle } = useLang();
  const n = t.nav;

  return (
    <header className="sticky top-0 z-50 bg-wine/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 md:px-10">
        <a
          href="#top"
          className="py-4 font-display text-xl font-extrabold lowercase tracking-tight"
          onClick={() => setOpen(false)}
        >
          vinicius valle<span className="text-flame">.</span>
        </a>

        <nav
          id="main-nav"
          aria-label="Main"
          className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col gap-1 bg-wine-deep px-5 pb-5 pt-2 md:static md:flex md:flex-row md:gap-8 md:bg-transparent md:p-0`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-lg font-medium text-paper/80 transition-colors hover:text-flame md:py-4 md:text-sm"
            >
              {n[l.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            lang={n.switchShort === 'PT' ? 'pt' : 'en'}
            aria-label={n.switchTo}
            title={n.switchTo}
            className="flex h-10 items-center rounded-full border border-paper/40 px-3.5 text-sm font-bold transition-colors hover:border-flame hover:text-flame"
          >
            {n.switchShort}
          </button>
          <a
            href="#contact"
            className="hidden h-10 items-center rounded-full bg-paper px-5 text-sm font-bold text-wine transition-colors hover:bg-flame hover:text-night sm:flex"
          >
            {n.cta}
          </a>
          <button
            type="button"
            aria-label={open ? n.closeMenu : n.openMenu}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
          >
            {open ? <FiX aria-hidden className="h-6 w-6" /> : <FiMenu aria-hidden className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}
