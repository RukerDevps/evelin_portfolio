# Architecture Context — Evelin Elizabeth VP | Portfolio Website

> **Scope:** This document covers system architecture, folder structure, component conventions, and invariants only.
> Design tokens, color systems, and UI specs live in `ui-design.md`.
> Data models and content management are out of scope — this is a fully static site.

---

## 1. System Overview

A **fully static** personal portfolio website built with Next.js (App Router). No database, no CMS, no auth. All content is hardcoded directly into components or co-located as static constants in the same file. The goal is maximum simplicity: every page is a pre-rendered HTML file at build time.

**Agent Rule:** This is a static site. Do not introduce API routes, server actions, dynamic data fetching, or any external data layer. If content needs to change, it is edited directly in the component or its co-located constants.

---

## 2. Core Technologies

| Layer | Choice |
|---|---|
| **Framework** | Next.js 16+ (App Router) |
| **Language** | TypeScript (strict mode) |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion + GSAP |
| **Icons** | Lucide React |
| **Fonts** | `next/font/google` + `next/font/local` |
| **Hosting** | Vercel — static export |

**Agent Rule:** Do not add any library not listed above without explicit instruction. No UI kits, no component libraries (no shadcn, no MUI, no Radix standalone installs).

---

## 3. Next.js Configuration

```ts
// next.config.ts
const nextConfig = {
  output: 'export',       // fully static HTML output
  images: {
    unoptimized: true,    // required for static export
  },
};
```

**Agent Rule:** `output: 'export'` must never be removed. This enforces the static constraint at the build level.

---

## 4. Folder Structure

```text
src/
├── app/
│   ├── globals.css           # Tailwind entry + CSS custom properties
│   ├── layout.tsx            # Root layout: font loading, Nav, Footer
│   └── page.tsx              # Single-page homepage — section composition only
│
├── components/
│   ├── ui/                   # Primitive, reusable building blocks
│   │   ├── Button.tsx
│   │   ├── Tag.tsx
│   │   └── SectionLabel.tsx
│   │
│   ├── layout/               # Structural chrome
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx     # Max-width wrapper used by all sections
│   │
│   └── sections/             # One file per homepage section
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── BrandsSection.tsx
│       ├── WorkSection.tsx
│       ├── ExperienceSection.tsx
│       └── ContactSection.tsx
│
├── lib/
│   └── motion.ts             # All shared Framer Motion variants
│
└── public/
    ├── work/                 # Work sample images: [id].jpg
    ├── brands/               # Brand logos: [id].svg
    └── og-image.png          # Open Graph image
```

### Boundary Rules

- `src/components/ui/` — stateless primitives only; no section-specific logic
- `src/components/layout/` — structural wrappers; no content, no business logic
- `src/components/sections/` — page-specific; one section per file; not reused elsewhere
- `src/lib/motion.ts` — the only place Framer Motion variant objects are defined
- `src/app/page.tsx` — imports and composes sections only; no markup of its own beyond the wrapper

---

## 5. Page Composition

`src/app/page.tsx` renders sections in this fixed order:

```tsx
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <BrandsSection />
      <WorkSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
```

**Agent Rule:** Do not reorder, merge, or rename sections. Do not add markup or styling to `page.tsx` — it is a composition file only.

---

## 6. Component Rules

### Server vs. Client

All components are React Server Components by default. Add `"use client"` only when the component requires:
- `useState` or `useReducer`
- `useEffect` or other browser-lifecycle hooks
- Event handlers (`onClick`, `onChange`, etc.)
- Framer Motion `motion.*` elements with runtime variants

```tsx
// Required: document the reason above the directive
// "use client" — requires useState for work filter tab
"use client";
```

### Props Pattern

Always define a `Props` interface directly above the component. Named exports only — no default exports except in `src/app/` route files.

```tsx
interface ButtonProps {
  label: string;
  href?: string;
  variant?: "primary" | "ghost";
}

export function Button({ label, href, variant = "primary" }: ButtonProps) {
  // ...
}
```

### Images

Always use `next/image`. Never use raw `<img>` tags.

```tsx
// Always provide width + height OR use fill with a positioned parent
<Image src="/work/herbally-blog.jpg" alt="Herbally Touch blog post" width={800} height={450} />
```

### Content

Static text content lives as constants at the top of the section file that uses it — not in a separate data file.

```tsx
// HeroSection.tsx
const HERO = {
  headline: "Words have always been more than words to me.",
  subline: "Copywriter & Content Writer — turning ideas into stories.",
  cta: "View My Work",
};

export function HeroSection() { ... }
```

**Agent Rule:** Do not create `src/data/` directories or separate content files. Keep content co-located with the component that renders it.

---

## 7. Animation Rules

All Framer Motion variant objects are defined once in `src/lib/motion.ts` and imported where needed. No inline variant objects inside component files.

```ts
// src/lib/motion.ts
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};
```

**Standard usage pattern for sections:**

```tsx
<motion.section
  variants={stagger}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
>
  <motion.h2 variants={fadeUp}>...</motion.h2>
  <motion.p variants={fadeUp}>...</motion.p>
</motion.section>
```

**Agent Rule:** Only animate `opacity` and `transform` (translate, scale). Never animate `width`, `height`, `margin`, or `padding` — these cause layout thrashing and hurt performance.

---

## 8. Font Loading

Fonts are loaded once in `src/app/layout.tsx` using `next/font/google` and/or `next/font/local`. Nowhere else.

```ts
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

const bileDemo = localFont({ src: "../../public/fonts/Bile Demo.ttf", variable: "--font-display" });
const dmSans   = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
```

Applied to `<html>` as CSS variable classes:

```tsx
<html className={`${bileDemo.variable} ${dmSans.variable}`}>
```

Then consumed in Tailwind via `font-[family-name:var(--font-display)]` or configured in `tailwind.config.ts`.

---

## 9. SEO & Metadata

Defined in `src/app/layout.tsx` using the Next.js `Metadata` API:

```ts
export const metadata: Metadata = {
  title: "Evelin Elizabeth VP — Copywriter & Content Writer",
  description: "Copywriter and content writer crafting scripts, blogs, brand copy, and social media content.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Evelin Elizabeth VP",
  },
};
```

---

## 10. System Invariants

The agent must never violate these. Flag a conflict rather than silently break a rule.

| # | Rule |
|---|---|
| 1 | Static only. No API routes, no `getServerSideProps`, no server actions. |
| 2 | `output: 'export'` stays in `next.config.ts`. |
| 3 | No `<img>` tags. Use `next/image` with explicit dimensions always. |
| 4 | No `any` types. TypeScript strict mode is on. |
| 5 | `"use client"` must have a documented reason in a comment above it. |
| 6 | Framer Motion variants only in `src/lib/motion.ts`. |
| 7 | Fonts loaded only in `src/app/layout.tsx`. |
| 8 | Section content (copy, labels, links) co-located in the section file — not in separate data files. |
| 9 | `src/app/page.tsx` is composition only — sections, no markup. |
| 10 | Semantic HTML required. All images need descriptive `alt` text. |

---

*Companion documents: `project-overview.md` · `ui-design.md`*
*Consumer: AI coding agents and developers*
