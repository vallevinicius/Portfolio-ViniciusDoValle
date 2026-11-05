import { Reveal } from './Reveal';
import { useLang } from '../i18n';
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok, FaDiscord } from 'react-icons/fa';

const socials = [
  { label: 'GitHub', href: 'https://github.com/vallevinicius', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/viniciusvalledev/', Icon: FaLinkedin },
  { label: 'Discord', href: 'https://discord.com/users/viniciusvalledev', Icon: FaDiscord },
  { label: 'Instagram', href: 'https://www.instagram.com/vinxvp/', Icon: FaInstagram },
  { label: 'TikTok', href: 'https://www.tiktok.com/@vinxvpdev', Icon: FaTiktok },
];

export function Contact() {
  const { t } = useLang();
  return (
    <footer id="contact" className="glass glass-accent mx-3 mb-3 scroll-mt-16 rounded-card-lg md:mx-5 md:mb-5">
      <Reveal className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <h2 className="max-w-4xl font-display text-[clamp(1.9rem,5.2vw,4.5rem)] uppercase leading-[0.95] tracking-[-0.03em]">
          {t.contact.title}
        </h2>

        <a
          href="mailto:contatoviniciusvalledev@gmail.com"
          className="mt-10 inline-block max-w-full break-all rounded-pill bg-flame px-6 py-3.5 font-display text-base font-semibold text-night transition-colors hover:bg-paper sm:text-2xl"
        >
          contatoviniciusvalledev@gmail.com
        </a>

        <ul className="mt-12 flex flex-wrap gap-3">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 glass rounded-pill px-5 py-2.5 font-semibold"
              >
                <Icon aria-hidden className="h-5 w-5" />
                {label}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-16 border-t border-paper/20 pt-6 text-base text-paper/80">{t.contact.footer}</p>
      </Reveal>
    </footer>
  );
}
