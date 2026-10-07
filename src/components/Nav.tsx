import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { href: '#work', label: 'Projects' },
  { href: '#background', label: 'Background' },
  { href: '#awards', label: 'Awards' },
  { href: '#certifications', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-foam/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 md:px-8">
        <a href="#top" className="py-3 font-display text-lg font-extrabold tracking-tight" onClick={() => setOpen(false)}>
          Vinicius Valle
        </a>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
          className="-mr-2 flex h-11 w-11 items-center justify-center sm:hidden"
        >
          {open ? <FiX aria-hidden className="h-6 w-6" /> : <FiMenu aria-hidden className="h-6 w-6" />}
        </button>

        <nav
          id="main-nav"
          aria-label="Main"
          className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col border-b border-ink/15 bg-foam px-5 pb-3 sm:static sm:flex sm:flex-row sm:gap-7 sm:border-0 sm:bg-transparent sm:p-0`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-t border-ink/10 py-3.5 text-lg font-medium first:border-t-0 sm:border-0 sm:py-3 sm:text-base sm:underline-offset-8 sm:decoration-2 sm:hover:underline sm:hover:decoration-buoy"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
