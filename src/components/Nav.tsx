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
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 md:px-8">
        <a href="#top" className="hidden whitespace-nowrap py-3 font-display text-lg font-extrabold tracking-tight sm:block">
          Vinicius Valle
        </a>
        <nav
          aria-label="Main"
          className="-mx-5 flex flex-1 gap-6 overflow-x-auto whitespace-nowrap px-5 text-base font-medium [scrollbar-width:none] sm:mx-0 sm:flex-none sm:gap-7 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="py-3.5 underline-offset-8 decoration-2 hover:underline hover:decoration-buoy"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
