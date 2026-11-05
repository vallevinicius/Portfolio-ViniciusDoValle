<div align="center">

# Vinicius do Valle — Portfolio

**Personal portfolio of Vinicius do Valle, full-stack developer.**

🇧🇷 [Leia em português](README.pt-BR.md)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

</div>

## About

Single-page portfolio built with React, TypeScript and Vite. The look is black with a red-orange accent, "liquid glass" panels and a 3D character of the author in the hero. The projects section is a gallery of the sites I built that are live, each with a preview of the site, a link to it and, when public, a link to the code.

## Features

- Hero with a giant name, a 3D character, an "About me" panel and a contact box
- Bilingual interface (English / Português): detects the browser language, remembers the choice and updates the page title and `lang`
- Projects: an expanding liquid-glass gallery of live sites with a preview image, short description, stack, a "Visit site" link and a "Code" link when the repository is public (a vertical accordion on phones)
- Background (experience, education, English level, skills), awards with a photo carousel, and certificates
- Liquid glass UI, scroll reveal and entrance animations that respect `prefers-reduced-motion`
- Responsive layout, from phones to wide desktops

## Design

| Token | Value | Use |
|---|---|---|
| `ink` | `#000000` | Page background |
| `paper` | `#FFFFFF` | Text |
| `flame` | `#FF422A` | Accent (buttons, highlights) |

- **Font:** Inter Tight
- **Liquid glass:** the `.glass` classes in [`src/index.css`](src/index.css) (backdrop blur and saturation, light rims and a corner highlight). It needs a browser with `backdrop-filter` support.
- **Tokens:** colors, fonts and radii are defined once in the `@theme` block of `src/index.css`.

## Tech stack

| Layer | Technology |
|---|---|
| Front-end | React 19, TypeScript, Vite |
| Styling | Tailwind CSS 4 |
| Icons | react-icons |

## Getting started

**Prerequisites:** Node.js 20.19+ (required by Vite 7)

```bash
npm install
npm run dev        # http://localhost:3000
```

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Dev server (port 3000) |
| `npm run build` | Type-check and production build |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |

## Project structure

```text
src/
  components/   Nav, Hero, Work, Background, Certifications (Awards + Certificates), Contact, Section, Reveal
  i18n.tsx      English and Portuguese copy, language provider and hook
  index.css     Tailwind theme tokens and the liquid glass styles
public/         3D character (WebP), project previews (public/projects), award photos and the favicon set
```

## Notes

- **Texts:** all copy lives in [`src/i18n.tsx`](src/i18n.tsx). The Portuguese dictionary is typed against the English one, so a missing key fails the build.
- **Adding a project:** add an entry to the `projects` array in [`src/components/Work.tsx`](src/components/Work.tsx), its copy under `work.items` in `src/i18n.tsx` (EN and PT), and a 1200×800 WebP screenshot in `public/projects/`.
- **Previews:** they are static screenshots of the live sites, because many sites block being embedded in an `<iframe>`. Retake them when a site changes a lot.
- **3D character:** generated from a photo of the author and stored as `public/personagem-3d.webp` (transparent background).

## Team

- [Vinicius do Valle](https://github.com/vallevinicius)
