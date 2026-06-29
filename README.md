# Zelio — Developer Portfolio (Next.js 15)

A pixel-faithful recreation of the **Zelio “index-2”** developer-portfolio landing
page, built as a production-ready Next.js application.

> Recreated from an HTML design reference. The visual source of truth is the
> dark, monospace “coder” aesthetic with a lime-green (`#8dd14f`) accent and a
> magenta (`#ec5fa0`) “code” accent.

---

## Tech Stack

| Concern        | Choice                                  |
| -------------- | --------------------------------------- |
| Framework      | **Next.js 15** (App Router)             |
| UI library     | **React 19**                            |
| Language       | **TypeScript** (strict)                 |
| Styling        | **Tailwind CSS v4** (CSS-first `@theme`)|
| Animation      | **Framer Motion**                       |
| Icons          | **lucide-react**                        |
| Font           | **JetBrains Mono** (via `next/font`)    |

---

## Getting Started

```bash
# 1. Install dependencies
npm install        # or: pnpm install / yarn

# 2. Run the dev server
npm run dev        # http://localhost:3000

# 3. Production build
npm run build && npm start
```

Requires **Node 18.18+** (Node 20 LTS recommended).

---

## Project Structure

```
zelio-nextjs/
├── app/
│   ├── globals.css        # Tailwind v4 import + theme tokens + keyframes
│   ├── layout.tsx         # Root layout, font, ThemeProvider, no-flash script
│   └── page.tsx           # Composes all sections in order
├── components/
│   ├── Navbar.tsx         # Sticky nav, active-link tracking, mobile menu, theme toggle
│   ├── Footer.tsx
│   ├── ScrollToTop.tsx
│   ├── ThemeProvider.tsx  # Dark/Light context, persisted to localStorage
│   ├── ui/                # Reusable primitives
│   │   ├── Reveal.tsx          # Scroll-reveal (fade-up) wrapper
│   │   ├── Counter.tsx         # Count-up animation on scroll-in
│   │   ├── Eyebrow.tsx         # “• Label” section tag
│   │   ├── RichTextRenderer.tsx# Renders highlighted copy segments
│   │   ├── GlowEdge.tsx        # Glowing top-edge accent line
│   │   └── OrbitRings.tsx      # Rotating decorative rings
│   └── home/              # Page sections
│       ├── Hero.tsx            # Typewriter headline + hexagon avatar + tech tiles
│       ├── Stats.tsx           # Animated counters
│       ├── Cooperation.tsx
│       ├── GitJournal.tsx
│       ├── Services.tsx        # 6-card grid, staggered reveal
│       ├── Experience.tsx      # Interactive company tabs
│       ├── Education.tsx       # Education + Researched timelines
│       ├── Projects.tsx        # Carousel with browser mock
│       ├── Skills.tsx
│       ├── Testimonials.tsx    # Carousel (arrows + dots)
│       ├── Pricing.tsx         # 3 tiers, featured plan highlighted
│       ├── Blog.tsx
│       └── Contact.tsx         # Validated contact form
├── hooks/
│   ├── useActiveSection.ts # Highlights the nav link of the section in view
│   └── useScrolledPast.ts  # Drives the scroll-to-top button
├── lib/
│   ├── data.ts             # All page content (typed arrays — edit here)
│   ├── animations.ts       # Shared Framer Motion variants + easing
│   └── utils.ts            # `cn()` class joiner
├── types/
│   └── index.ts            # All shared TypeScript interfaces
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json           # `@/*` path alias → project root
└── package.json
```

---

## Theming

Colors are defined once as CSS variables in `app/globals.css` and exposed to
Tailwind through the `@theme inline` block, so you can use utilities like
`bg-card`, `text-muted`, `border-border`, `text-accent`, `text-pink`.

```css
:root            { --accent:#8dd14f; --bg:#141419; --card:#1b1b22; ... }
[data-theme=light]{ --bg:#f1f2f5; --card:#fff; ... }
```

- **Dark/Light toggle** lives in `ThemeProvider.tsx`; the active theme is written
  to `data-theme` on `<html>` and persisted in `localStorage`. An inline script
  in `layout.tsx` applies it before paint to avoid a flash.
- **To rebrand**, change the hex values in `:root` / `[data-theme="light"]`.
  Every component reads the tokens, so no component edits are needed.

A custom Tailwind breakpoint `nav:` (1080px) controls when the desktop nav
collapses into the hamburger menu — defined via `--breakpoint-nav` in
`globals.css`.

---

## Editing Content

All copy and data lives in **`lib/data.ts`** as typed arrays (`SERVICES`,
`JOBS`, `PROJECTS`, `TESTIMONIALS`, `PRICING`, `BLOG_POSTS`, …). Update those and
the UI follows. Highlighted phrases inside service descriptions use the
`RichText` type — mark a segment `{ text: "...", em: true }` to render it in the
code-accent color.

---

## Animations

Defined as shared variants in `lib/animations.ts` and applied via
`whileInView` so they replay on scroll:

- `fadeUp`, `fadeLeft`, `fadeRight`, `scaleIn`
- `staggerContainer` for sequenced children
- `Counter` (count-up) and the Hero typewriter are self-contained
- All motion respects `prefers-reduced-motion` (handled in `globals.css`)

---

## Assets / Placeholders

The reference’s proprietary images are **not** bundled. Avatar, company logos,
project screenshots, and blog thumbnails are recreated with CSS/SVG/typographic
placeholders. Drop real images into `public/` and swap them into the relevant
component (e.g. replace the hexagon `<svg>` in `Hero.tsx` with a
`next/image`), or point the data arrays at your asset URLs.

---

## Notes

- `"use client"` is applied only to components that need interactivity or
  browser APIs; static sections (Footer, GitJournal, Education) stay server
  components.
- The contact form validates name/email/message client-side and is ready to be
  wired to a Server Action or API route (`onSubmit` in `Contact.tsx`).
- Run `npm run lint` to type/lint-check before deploying (e.g. to Vercel).
