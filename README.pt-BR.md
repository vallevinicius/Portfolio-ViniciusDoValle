<div align="center">

# Vinicius do Valle — Portfolio

**Portfólio pessoal de Vinicius do Valle, desenvolvedor full-stack.**

🇺🇸 [Read in English](README.md)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

</div>

## Sobre

Portfólio de página única feito com React, TypeScript e Vite. O visual é preto com acento vermelho-alaranjado, painéis em "liquid glass" e um personagem 3D do autor no hero. A seção de projetos é uma galeria dos sites que eu fiz e estão no ar, cada um com uma prévia do site, o link e, quando público, o link do código.

## Funcionalidades

- Hero com nome gigante, personagem 3D, painel "Sobre mim" e caixa de contato
- Interface bilíngue (English / Português): detecta o idioma do navegador, lembra a escolha e atualiza o título da página e o `lang`
- Projetos: galeria expansível em liquid glass com os sites no ar, cada um com imagem de prévia, descrição curta, stack, link "Visitar site" e link "Código" quando o repositório é público (acordeão vertical no celular)
- Formação (experiência, graduação, nível de inglês, habilidades), prêmios com carrossel de fotos e certificados
- Interface em liquid glass, revelação no scroll e animações de entrada que respeitam `prefers-reduced-motion`
- Layout responsivo, de celulares a desktops largos

## Design

| Token | Valor | Uso |
|---|---|---|
| `ink` | `#000000` | Fundo da página |
| `paper` | `#FFFFFF` | Texto |
| `flame` | `#FF422A` | Acento (botões, destaques) |

- **Fonte:** Inter Tight
- **Liquid glass:** as classes `.glass` em [`src/index.css`](src/index.css) (desfoque e saturação do fundo, bordas de luz e brilho no canto). Precisa de um navegador com suporte a `backdrop-filter`.
- **Tokens:** cores, fontes e raios ficam definidos uma única vez no bloco `@theme` de `src/index.css`.

## Stack

| Camada | Tecnologia |
|---|---|
| Front-end | React 19, TypeScript, Vite |
| Estilo | Tailwind CSS 4 |
| Ícones | react-icons |

## Como rodar

**Pré-requisitos:** Node.js 20.19+ (exigido pelo Vite 7)

```bash
npm install
npm run dev        # http://localhost:3000
```

### Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento (porta 3000) |
| `npm run build` | Checagem de tipos e build de produção |
| `npm run preview` | Serve o build de produção localmente |
| `npm run lint` | ESLint |

## Estrutura do projeto

```text
src/
  components/   Nav, Hero, Work, Background, Certifications (Prêmios + Certificados), Contact, Section, Reveal
  i18n.tsx      Textos em inglês e português, provider de idioma e hook
  index.css     Tokens de tema do Tailwind e estilos de liquid glass
public/         Personagem 3D (WebP), prévias dos projetos (public/projects), fotos dos prêmios e o conjunto de favicons
```

## Observações

- **Textos:** todo o conteúdo fica em [`src/i18n.tsx`](src/i18n.tsx). O dicionário em português é tipado a partir do inglês, então uma chave faltando quebra o build.
- **Adicionar um projeto:** inclua uma entrada no array `projects` de [`src/components/Work.tsx`](src/components/Work.tsx), o texto em `work.items` no `src/i18n.tsx` (EN e PT) e um screenshot WebP de 1200×800 em `public/projects/`.
- **Prévias:** são screenshots estáticos dos sites no ar, porque muitos sites bloqueiam ser exibidos em `<iframe>`. Tire de novo quando um site mudar bastante.
- **Personagem 3D:** gerado a partir de uma foto do autor e salvo em `public/personagem-3d.webp` (fundo transparente).

## Equipe

- [Vinicius do Valle](https://github.com/vallevinicius)
