# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for **CuestionaBle Mentorship** (cuestionable.pe) — a Spanish-language mentorship platform connecting mentors with mentees in Peru. Built with Astro + Vue + Tailwind CSS, deployed to Cloudflare Pages.

## Commands

- `npm run dev` — Start dev server (localhost:4321)
- `npm run build` — Production build to `./dist/`
- `npm run preview` — Build + preview via Wrangler Pages dev server
- `npm run deploy` — Build + deploy to Cloudflare Pages
- `npm run cf-typegen` — Regenerate Cloudflare worker types

No test framework is configured.

## Architecture

**Astro as the shell, Vue for interactive islands.** The site is a single-page landing (`src/pages/index.astro`) wrapped in one layout (`src/layouts/Layout.astro`). All section content data (mentors, FAQs, steps, videos) is defined inline in `index.astro`'s frontmatter and passed as props to Vue components.

Interactive Vue components use Astro's `client:load` directive for hydration. The landing sections live in `src/components/landing/` (HeroSection, BenefitsSection, ProcessSection, MentorsSection, FAQSection, VideosSection, FooterSection). Shared UI primitives are in `src/components/ui/` and follow **shadcn-vue** conventions (New York style, reka-ui base, lucide-vue-next icons).

**Path alias:** `@/` maps to `./src/` (configured in both `astro.config.mjs` and `tsconfig.json`).

**Styling:** Tailwind CSS v4 via Vite plugin. Brand design tokens (colors, gradients, shadows) are CSS custom properties defined in `src/styles/global.css` under `:root`. The primary brand color is `#be7bed`. Headings use the "Outfit" font family; body text uses "Inter".

**Scroll animations:** Two systems coexist — an Astro-side `IntersectionObserver` in `index.astro`'s `<script>` tag for `.reveal-on-scroll` elements, and a Vue composable `src/composables/useScrollReveal.js` for `.vue-reveal` elements inside Vue components. Both add `is-visible` class on intersection. Animations are disabled when `prefers-reduced-motion: reduce`.

**Image optimization:** Mentor images are imported from `src/assets/mentors/` and processed via Astro's `getImage()` in the frontmatter with responsive `srcSet` generation (WebP format).

## Key Conventions

- All user-facing text is in **Spanish (es-PE)**
- UI components: use shadcn-vue patterns — `cn()` utility from `src/lib/utils.ts` for class merging, `class-variance-authority` for variants
- Structured data (JSON-LD) for SEO is generated in `index.astro` frontmatter (Organization, FAQPage, ItemList schemas)
- The site is a single-page app with anchor navigation (`#mentores`, `#faq`, etc.)
