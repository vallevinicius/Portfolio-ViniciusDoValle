const links = [
  { href: '#work', label: 'Projects' },
  { href: '#background', label: 'Background' },
  { href: '#awards', label: 'Awards' },
  { href: '#certifications', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-foam/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a href="#top" className="font-display text-lg font-extrabold tracking-tight">
          Vinicius Valle
        </a>
        <nav aria-label="Main" className="flex gap-4 text-sm font-medium sm:gap-7 sm:text-base">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="py-1 underline-offset-8 decoration-2 hover:underline hover:decoration-buoy"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
