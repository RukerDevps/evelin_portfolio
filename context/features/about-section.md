# Feature: About Section

## Overview

An editorial two-column "About Me" section that matches the scrapbook portfolio aesthetic.
Left column holds the large display heading, subtitle, and body copy. Right column shows
the `about.png` photo inside an arched / rounded-top polaroid-style frame.

---

## Layout

```
┌──────────────────────────────────────────────────────────┐
│  ABOUT ME          (display heading + red sketch line)   │
│                                                          │
│  [Subtitle — bold sans]      ┌─────────────────────┐    │
│                              │   ╭─────────────╮   │    │
│  [Body paragraph 1]          │   │  about.png  │   │    │
│                              │   │  (arched)   │   │    │
│  [Body paragraph 2]          │   ╰─────────────╯   │    │
│                              │   white polaroid     │    │
│                              │   border + tape      │    │
│                              └─────────────────────┘    │
└──────────────────────────────────────────────────────────┘
```

- **Mobile**: single column — heading → body → photo stacked
- **Tablet / Desktop**: two columns `[text | photo]`, `lg:grid-cols-2`

---

## Content

### Heading
`ABOUT ME`
Font: `--font-display` (Bile Demo), large editorial size ~`clamp(4rem, 10vw, 8rem)`
Red hand-drawn sketch underline below (reuse `paper-underline` pattern or custom SVG)

### Subtitle
`Full-Time Grammar Sleuth, Part-Time Writer`
Font: Inter 600, ~`1.4rem`

### Body Copy

**Paragraph 1**
> I found my love for writing as a kid, and there's been no looking back since.
> From journalistic copywriting to scripts and social media, I've explored and
> experimented with all kinds of writing.

**Paragraph 2**
> My belief — people don't buy products, they buy stories. They buy experiences.
> Looking for someone who can think of ideas — big and small, collaborates to create
> stories that move, shamelessly points out bad grammar and writes with versatility?
> We might make a great match.

---

## Photo Frame

- Image: `/images/about.png`
- Frame: white polaroid border (`border-[12px] border-white`), soft shadow
- Top corners: arched / fully rounded (`rounded-t-full` or large `border-radius` on top)
- Tape accents: two `paper-tape` strips at top corners
- Optional slight negative rotation: `rotate-[1deg]`

---

## CSS / Tailwind Patterns

| Element | Pattern |
|---|---|
| Section background | notebook paper (inherits from `body`) |
| Heading | `font-[family-name:var(--font-display)]` + `paper-underline` variant |
| Red underline | `sketch_underline.png` positioned below heading, or custom SVG |
| Photo border | `border-[12px] border-white shadow-[var(--shadow-card)]` |
| Arched top | `rounded-t-[50%]` or `rounded-t-full` with overflow-hidden |
| Tape strips | `.paper-tape .paper-tape-left` / `.paper-tape-right` |

---

## Animation

- Section scrolls into view → GSAP ScrollTrigger
- Heading fades + slides up (`fadeUp` variant, `y: 40 → 0, opacity 0 → 1`)
- Photo slides in from right (`x: 60 → 0, opacity 0 → 1`)
- Body text lines stagger up after heading settles

---

## Assets

| Asset | Path | Notes |
|---|---|---|
| About photo | `public/images/about.png` | BTS camera shoot scene |
| Sketch underline | `public/images/sketch_underline.png` | Reuse from hero |
| Paperclip | `public/images/paperclip.png` | Optional accent |

---

## Component Location

`src/components/sections/AboutSection.tsx`

---

## Status

- [ ] Feature spec written
- [ ] Component implemented
- [ ] Scroll animation wired
- [ ] Responsive QA (mobile / tablet / desktop)
