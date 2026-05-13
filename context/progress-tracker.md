# Progress Tracker

_Last updated: 2026-05-13_

---

## Current Phase

**In Progress** - Section Build-out & Motion Polish

---

## Current Goal

Ship the "My Works" section as a reference-matched sticky-scroll editorial
experience, while continuing the broader pass on section composition and
layout consistency across breakpoints.

---

## Completed

### Foundation
- [x] Next.js App Router project scaffolded
- [x] Tailwind CSS + custom CSS variables design system
- [x] Google Fonts integrated (display, body, handwritten)
- [x] `Container` layout component updated to a shared centered wide canvas (`relative mx-auto w-full max-w-[96rem]`)
- [x] Netlify deployment config (`netlify.toml`)
- [x] Global CSS variables (`--text-primary`, `--accent-primary`, `--bg-paper`, etc.)
- [x] Paper/editorial visual utilities (`.paper-button`, `.paper-tape`, `.section-paper`, `.paper-underline`)

### Navigation
- [x] `Nav` component with active-link tracking via scroll
- [x] GSAP smooth-scroll on nav item click
- [x] Framer Motion hover/tap animations on nav buttons
- [x] Header paper texture image spanning full viewport width
- [x] Mobile nav toggle implemented
- [x] Nav full-width fix - `headerPaper` image uses `left-[50%] -translate-x-1/2 w-[100vw]` to escape container constraints

### Hero Section (`HeroSection.tsx`)
- [x] Two-column editorial layout (portrait left, text right)
- [x] GSAP curtain wipe intro animation
- [x] Staggered reveal: nav -> portrait -> paperclip -> role -> name -> summary -> CTA -> background pieces
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
- [x] One-time GSAP counter animation added for the stats row on first scroll into view

### Brands Section (`BrandsSection.tsx`)
- [x] Looping brand name pill strip (static, text-based)
- [x] 4 brands: Herbally Touch, Herbally Touch Ayurveda, Skora, Volosy
- [x] Section paper card with `section-paper rounded-[2rem]`

### My Brands Section (`MyBrands.tsx`)
- [x] Added responsive logo grid using 8 local brand images from `public/images`
- [x] Mobile layout: 2 columns / 4 rows
- [x] Desktop layout: 4 columns / 2 rows
- [x] Tablet layout scales to 3 columns for smoother spacing

### Work Section (`WorkSection.tsx`)
- [x] Rebuilt as centered editorial "WHAT I DO" section
- [x] 6 image-led service cards using uploaded `whatido0*` assets
- [x] GSAP `ScrollTrigger` horizontal pin-and-scroll interaction on desktop
- [x] Section releases directly into the next section after the final card
- [x] Arrow controls, pagination dots, and handwritten swipe cue
- [x] Mobile / reduced-motion fallback uses native horizontal scrolling

### My Works Section (`MyWorks.tsx`)
- [x] Rebuilt as alternating editorial categories for "Blogs and Scripts" and "Website Content"
- [x] Added desktop sticky-stack image scroll with GSAP `ScrollTrigger`
- [x] Added pinned companion content cards with category number, tags, CTA, and thumbnail strip
- [x] Added mobile/tablet fallback that returns to a readable vertical flow

### Experience Section (`ExperienceSection.tsx`)
- [x] Timeline-style single entry
- [x] Role: Copywriter & Content Writer - Iravata Technologies (2024-Present)
- [x] Red left-border timeline indicator

### Contact Section (`ContactSection.tsx`)
- [x] Notebook-style contact card with ruled lines and right-side pink margin
- [x] Arch-shaped contact portrait with taped photo styling
- [x] Phone and email contact pills with playful Joey-friendly copy

### Homepage Composition (`page.tsx`)
- [x] Mounted Work beneath About in the current homepage composition

---

## In Progress

- [ ] **Layout consistency pass** - aligning horizontal padding/margin
  across all sections so they visually line up.
  - `AboutSection` currently has `mx-20` on the `<section>` and `px-20`
    on the text column - these are overrides being reviewed.
  - `Container.tsx` is `mx-auto w-full` (no horizontal padding - sections
    apply their own via `px-4 sm:px-6 lg:px-10`).
- [ ] **Section refinement pass** - polish the newly mounted lower-page
  sections so their spacing and visual weight feel as intentional as Hero
  and the new Work section.
- [ ] **My Works content polish** - replace placeholder CTA target and refine copy/images once final project destinations are available.

---

## Next Up

- [ ] Review desktop pin duration and card widths on extra-wide screens
  (1440px+) to ensure the last service lands exactly where intended.
- [ ] Add optional subtle reveal animation for the Work heading and helper
  cues once the section enters view.
- [ ] Review whether the About counters should also fade/translate in with the count-up for a stronger entrance.
- [ ] About section: review/remove the `mx-20` on `<section>` and `px-20`
  on text column (inconsistent with other sections).
- [ ] Brands section: replace text pills with actual brand logos (SVG/PNG)
  if assets become available.
- [ ] Replace placeholder brand names in `MyBrands.tsx` with final client names if required.
- [ ] Scroll-triggered reveal animations for About, Brands, Experience,
  and Contact sections (Hero and Work now have GSAP motion).
- [ ] Review `MyWorks` sticky duration and viewport framing on extra-wide screens to ensure each image stack clears cleanly before the next category enters.
- [ ] SEO: `<title>`, `<meta description>`, Open Graph tags in `layout.tsx`.
- [ ] Lighthouse audit + performance pass.
- [ ] Final domain / Vercel deployment with custom domain.

---

## Open Questions

- Should the work cards link to full pieces (external URL) or open an
  in-page modal / expandable view?
- Is a profile photo for the About section available (currently using
  `about.png` placeholder)?
- Do brand logos (SVG/PNG) exist for Herbally Touch, Skora, Volosy?
- Final custom domain name TBD.

---

## Architecture Decisions

| Decision | Rationale |
|---|---|
| Nav uses `left-[50%] -translate-x-1/2 w-[100vw]` for the header paper image | Allows the texture to bleed full-width even when Nav is inside a padded `Container`. |
| `Container` uses a shared `max-w-[96rem]` and no internal padding | Keeps the page on a consistent centered canvas while sections still control their own horizontal breathing room and avoid double-padding. |
| GSAP used for both intro animations and scroll parallax in Hero | Framer Motion is used for micro-interactions (nav hover/tap); GSAP handles complex sequenced timelines and ScrollTrigger. |
| Work section uses a pinned GSAP horizontal track only on desktop | Preserves the reference interaction while keeping mobile and reduced-motion behavior simple and accessible. |
| All section content is static data objects at top of each file | Keeps things simple for v1; can be extracted to a CMS or JSON later. |
| `AboutSection` wraps in `Container` but also has `mx-20` on section | This is an inconsistency under active review. |

---

## Session Notes

- Dev server is running (`npm run dev`).
- Active files this session: `WorkSection.tsx`, `page.tsx`,
  `MyWorks.tsx`, `context/features/myworks_section.md`.
- The uploaded `whatido0*` images are now the source assets for the
  horizontal services section.
- Homepage composition currently includes Hero, About, and Work on the
  homepage while lower sections remain available as standalone components.
- About stats now count up once when the section first enters view.
- `MyBrands.tsx` now uses the uploaded `brand01` to `brand08` logo assets in a responsive grid.
- `MyWorks.tsx` now uses the uploaded `adsbranding_images0*` and `website_images0*` assets for an alternating sticky-scroll portfolio layout.
- `ContactSection.tsx` now matches the notebook-style contact feature brief with an arch portrait, ruled-paper background, and phone/email contact rows.
- Next immediate task: review the lower-page spacing system, especially the
  `AboutSection` margin/padding overrides and how they align with the new
  Work and My Works sections.
