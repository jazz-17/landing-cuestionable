# CuestionaBle Mentorship Landing Page

A modern, high-performance landing page for a Spanish-language mentorship platform connecting mentors with mentees in Peru.

**Live Site:** [https://cuestionable.pe/](https://cuestionable.pe/)

---

## Tech Stack

- **Framework:** Astro 5 with Vue 3 islands architecture
- **Styling:** Tailwind CSS v4 with custom design tokens
- **UI Components:** shadcn-vue (reka-ui base)
- **Deployment:** Cloudflare Pages
- **Icons:** Lucide Vue

## Features

- **Hybrid Rendering** — Static-first Astro pages with hydrated Vue components for interactivity
- **Optimized Images** — Responsive WebP generation with `srcSet` via Astro's image pipeline
- **Scroll Animations** — Dual animation system (Astro IntersectionObserver + Vue composable) with `prefers-reduced-motion` support
- **SEO Ready** — Structured data (JSON-LD) for Organization, FAQPage, and ItemList schemas
- **Video Integration** — YouTube embeds with lazy-loaded thumbnails and modal playback
- **Accessible UI** — Keyboard navigation, screen reader support, and focus management

## Architecture Highlights

```
src/
├── pages/
│   └── index.astro          # Single-page landing with data in frontmatter
├── components/
│   ├── landing/             # Section components (Hero, Mentors, FAQ, etc.)
│   └── ui/                  # shadcn-vue primitives (Button, Dialog, Accordion)
├── composables/
│   └── useScrollReveal.js   # Vue scroll animation composable
├── assets/mentors/          # Mentor images (processed at build time)
└── styles/
    └── global.css           # Design tokens & Tailwind config
```

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (localhost:4321)
npm run dev

# Production build
npm run build

# Deploy to Cloudflare Pages
npm run deploy
```

Built with Astro + Vue + Tailwind CSS
