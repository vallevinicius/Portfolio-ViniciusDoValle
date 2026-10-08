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
    <footer id="contact" className="scroll-mt-16 bg-ink text-foam">
      <Reveal className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="max-w-3xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
          {t.contact.title}
        </h2>

        <a
          href="mailto:contatoviniciusvalledev@gmail.com"
          className="mt-10 inline-block break-all font-display text-xl font-bold text-buoy underline decoration-2 underline-offset-8 sm:text-3xl"
        >
          contatoviniciusvalledev@gmail.com
        </a>

        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-4">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 font-medium underline-offset-8 decoration-buoy decoration-2 hover:underline"
              >
                <Icon aria-hidden className="h-5 w-5" />
                {label}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-20 border-t border-foam/25 pt-6 text-base text-foam/70">
          {t.contact.footer}
        </p>
      </Reveal>
    </footer>
  );
}
