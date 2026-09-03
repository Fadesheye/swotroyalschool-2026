# Swotroyal Montessori School — Website

Modern rebuild of the school site using [Astro](https://astro.build).

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:4321

## Build for production

```bash
npm run build
```

Outputs a static site to `dist/` — this can be deployed for free on Netlify, Vercel, or Cloudflare Pages by connecting this repo and using the default Astro build settings (build command `npm run build`, output directory `dist`).

## What to fill in before publishing

- **`src/pages/about.astro`** — the Core Values panel has a placeholder note where the old site had Lorem Ipsum text. Replace with real content.
- **`src/pages/staff.astro`** — the staff page was never finished on the original site. Add real teacher profiles (photo, name, role) here.
- **`src/content/events/`** — 6 events were carried over from the old site, each as its own markdown file with frontmatter (title, image, excerpt, link). Add new ones the same way — no code changes needed.

## Structure

- `src/pages/` — one file per route (Home, About, Curriculum, Facilities, Events, Staff, Proprietress' Note)
- `src/components/` — shared Header (with mobile menu) and Footer
- `src/layouts/Layout.astro` — shared page shell (meta tags, header/footer)
- `src/styles/global.css` — design tokens (colors, type) and shared styles
- `src/content/events/` — event posts as markdown, rendered on the Events page and the homepage's "Latest Events" section
- `public/images/` — images converted to WebP and resized from the original site (13MB → ~1.8MB)

## What changed from the old site

- Removed the COVID-19 marquee banner and dropped jQuery/Bootstrap/Popper — no JS framework dependency needed
- Replaced 19MB of Font Awesome font files (icons weren't even visible in some cases) — this version has no icon font
- Images converted to WebP and resized, cutting image weight by roughly 85%
- Added a real mobile navigation menu (the old site had none)
- Removed the duplicate "Services" page (it repeated Home's content) and merged into a cleaner 7-page nav
- Events are now individual content files instead of one long hardcoded HTML block — adding a new event doesn't require touching any layout code
