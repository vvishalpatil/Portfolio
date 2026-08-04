# Portfolio

Personal site for Vishal Patil — frontend engineer.

Built with React, TypeScript, Vite, and Tailwind CSS. Static build, no
backend.

## Development

```sh
npm install
npm run dev
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build
- `npm run lint` — lint the codebase

## Structure

```
src/
  App.tsx              composes the page sections
  index.css            Tailwind import + design tokens (@theme)
  components/
    Hero.tsx           dark full-bleed banner: name, role, stack, photo
    About.tsx          bio
    Projects.tsx       project cards
    Experience.tsx     roles and highlights
    Recognition.tsx    recognition cards
    StackStrip.tsx     day-to-day tech chips
    Writing.tsx        articles (built, not yet enabled — see App.tsx)
    Footer.tsx         contact links and résumé
    Reveal.tsx         fade-up-on-scroll wrapper
    icons.tsx          inline SVG brand icons
  hooks/
    useReveal.ts       IntersectionObserver hook backing Reveal
public/
  vishal-photo.webp
  Vishal_Patil_Resume.pdf
```

Design tokens (colours, fonts, radii) live in `src/index.css` under
`@theme` — Tailwind v4 keeps config in CSS rather than a JS file.

## Deployment

Any static host. `npm run build` emits `dist/`.
