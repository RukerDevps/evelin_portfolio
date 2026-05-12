# Progress Tracker

_Last updated: 2026-05-11_

---

## Current Phase

**In Progress** — Layout & Styling Polish

---

## Current Goal

Refine layout consistency across all sections — particularly fixing
horizontal alignment, padding, and container behaviour so every
section feels visually consistent at all breakpoints (mobile → 1920px).

---

## Completed

### Foundation
- [x] Next.js App Router project scaffolded
- [x] Tailwind CSS + custom CSS variables design system
- [x] Google Fonts integrated (display, body, handwritten)
- [x] `Container` layout component (`mx-auto w-full`)
- [x] Netlify deployment config (`netlify.toml`)
- [x] Global CSS variables (`--text-primary`, `--accent-primary`, `--bg-paper`, etc.)
- [x] Paper/editorial visual utilities (`.paper-button`, `.paper-tape`, `.section-paper`, `.paper-underline`)

### Navigation
- [x] `Nav` component with active-link tracking via scroll
- [x] GSAP smooth-scroll on nav item click
- [x] Framer Motion hover/tap animations on nav buttons
- [x] Header paper texture image spanning full viewport width
- [x] Mobile nav (hidden on small screens — desktop-only links visible)
- [x] Nav full-width fix — `headerPaper` image uses `left-[50%] -translate-x-1/2 w-[100vw]` to escape container constraints

### Hero Section (`HeroSection.tsx`)
- [x] Two-column editorial layout (portrait left, text right)
- [x] GSAP curtain wipe intro animation
- [x] Staggered reveal: nav → portrait → paperclip → role → name → summary → CTA → background pieces
- [x] GSAP ScrollTrigger parallax on map, ship, landon, portrait, and text column
- [x] Sketch underline image on name line two
- [x] Paperclip decorative accent on portrait
- [x] Paper border + tape strips on portrait frame
- [x] Scroll-to-works CTA button with GSAP smooth-scroll

### About Section (`AboutSection.tsx`)
- [x] Editorial big heading with sketch underline image
- [x] Two-column grid: text left, image right
- [x] Static content wired from `ABOUT` data object
- [x] `about.png` displayed at `w-[45%]`

### Brands Section (`BrandsSection.tsx`)
- [x] Looping brand name pill strip (static, text-based)
- [x] 4 brands: Herbally Touch, Herbally Touch Ayurveda, Skora, Volosy
- [x] Section paper card with `section-paper rounded-[2rem]`

### Work Section (`WorkSection.tsx`)
- [x] 3-column grid of work format cards
- [x] Formats: Website Content, Blog Writing, Social Media Copy
- [x] Static card layout (no filtering or modal yet)
- [x] `paper-underline` on section heading

### Experience Section (`ExperienceSection.tsx`)
- [x] Timeline-style single entry
- [x] Role: Copywriter & Content Writer — Iravata Technologies (2024–Present)
- [x] Red left-border timeline indicator

### Contact Section (`ContactSection.tsx`)
- [x] `mailto:` CTA link with Mail icon
- [x] Section paper card styling consistent with rest of page

---

## In Progress

- [ ] **Layout consistency pass** — aligning horizontal padding/margin
  across all sections so they visually line up.
  - `AboutSection` currently has `mx-20` on the `<section>` and `px-20`
    on the text column — these are overrides being reviewed.
  - `Container.tsx` is `mx-auto w-full` (no horizontal padding — sections
    apply their own via `px-4 sm:px-6 lg:px-10`).

---

## Next Up

- [ ] Work section expanded: add remaining 2 formats (Ad/Video Scripts,
  Product Descriptions) — currently only 3 of 5 are listed.
- [ ] Work section: case cards with format label, brand name, description
  excerpt, and optional image thumbnail.
- [ ] About section: review/remove the `mx-20` on `<section>` and `px-20`
  on text column (inconsistent with other sections).
- [ ] Mobile nav: implement hamburger toggle for viewport < `sm`.
- [ ] Brands section: replace text pills with actual brand logos (SVG/PNG)
  if assets become available.
- [ ] Scroll-triggered reveal animations for About, Brands, Work, Experience,
  and Contact sections (currently only Hero has GSAP animations).
- [ ] SEO: `<title>`, `<meta description>`, Open Graph tags in `layout.tsx`.
- [ ] Lighthouse audit + performance pass.
- [ ] Final domain / Vercel deployment with custom domain.

---

## Open Questions

- Should the work cards link to full pieces (external URL) or open an
  in-page modal / expandable view?
- Is a profile photo for the About section available (currently using
  `about.png` placeholder)?
- Should the mobile nav use a slide-in drawer or a full-screen overlay?
- Do brand logos (SVG/PNG) exist for Herbally Touch, Skora, Volosy?
- Final custom domain name TBD.

---

## Architecture Decisions

| Decision | Rationale |
|---|---|
| Nav uses `left-[50%] -translate-x-1/2 w-[100vw]` for the header paper image | Allows the texture to bleed full-width even when Nav is inside a padded `Container`. |
| `Container` has no padding — sections own their own `px-*` | Gives each section full control over its horizontal breathing room; avoids double-padding. |
| GSAP used for both intro animations and scroll parallax in Hero | Framer Motion is used for micro-interactions (nav hover/tap); GSAP handles complex sequenced timelines and ScrollTrigger. |
| All section content is static data objects at top of each file | Keeps things simple for v1; can be extracted to a CMS or JSON later. |
| `AboutSection` wraps in `Container` but also has `mx-20` on section | This is an inconsistency — under active review. |

---

## Session Notes

- Dev server is running (`npm run dev`).
- Active files: `Container.tsx`, `AboutSection.tsx`.
- The user has been exploring horizontal alignment — specifically the
  gap/margin on the About section vs the rest of the page.
- `Container.tsx` is currently `mx-auto w-full` (no padding) — previously
  had `px-4` added then reverted.
- Next immediate task: clean up `AboutSection` padding/margin to match
  the layout system used by other sections.
