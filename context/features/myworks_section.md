# Feature: My Works Section

## Overview

A premium editorial portfolio section showcasing completed projects with a sophisticated **sticky-scroll image stack** interaction. Each work category presents multiple projects where images stack and transition on one side while the content remains static on the other, creating a magazine-style browsing experience without leaving the page.

---

## Layout Structure

### Desktop Layout (≥1024px)

```text
┌─────────────────────────────────────────────────────────────────────────┐
│  MY WORKS                                    (display heading)          │
│  ~~~~~~~~~~  (red hand-drawn scribble underline)                        │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  WORK CATEGORY: "Website Content"                               │   │
│  │  Layout: Image Left (Sticky Stack) | Content Right (Static)     │   │
│  │                                                                 │   │
│  │  ┌─────────────────────┐    ┌─────────────────────────────┐    │   │
│  │  │                     │    │  02 | Website Content         │    │   │
│  │  │   [Project Img 1]   │    │  ─────────────────────────    │    │   │
│  │  │   (scrolls away ↑)  │    │  BRANDING | SCRIPTING | STORY │  │   │
│  │  │                     │    │                               │    │   │
│  │  ├─────────────────────┤    │  VIEW PROJECT →               │    │   │
│  │  │                     │    │                               │    │   │
│  │  │   [Project Img 2]   │    │  Sample Details               │    │   │
│  │  │   (current/active)  │    │  ┌─────────────────────┐     │    │   │
│  │  │                     │    │  │ Lorem ipsum doler   │     │    │   │
│  │  ├─────────────────────┤    │  │ Gf amet, connectius │     │    │   │
│  │  │                     │    │  │ soncetectur...      │     │    │   │
│  │  │   [Project Img 3]   │    │  └─────────────────────┘     │    │   │
│  │  │   (scrolls in ↓)    │    │                               │    │   │
│  │  │                     │    │  Sample text anippet sit...   │    │   │
│  │  └─────────────────────┘    │                               │    │   │
│  
│  │                             │                               │    │   │
│  │                             │  VIEW PROJECT →               │    │   │
│  │                             └─────────────────────────────┘    │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  WORK CATEGORY: "Blog Writing"                                  │   │
│  │  Layout: Content Left (Static) | Image Right (Sticky Stack)    │   │
│  │  (MIRRORED from above)                                          │   │
│  │                                                                 │   │
│  │  ┌─────────────────────────────┐    ┌─────────────────────┐    │   │
│  │  │  03 | Blog Writing          │    │                     │    │   │
│  │  │  ─────────────────────────  │    │   [Project Img 1]   │    │   │
│  │  │  RESEARCH | WELLNESS | LIFE │    │   (scrolls away ↑)  │    │   │
│  │  │                             │    │                     │    │   │
│  │  │  VIEW PROJECT →             │    ├─────────────────────┤    │   │
│  │  │                             │    │                     │    │   │
│  │  │  Research-based blogs...    │    │   [Project Img 2]   │    │   │
│  │  │                             │    │   (current/active)  │    │   │
│  │  │  Sample Details...          │    │                     │    │   │
│  │  │                             │    ├─────────────────────┤    │   │
│  │  │           │    │                     │    │   │
│  │  │                             │    │   [Project Img 3]   │    │   │
│  │  │  VIEW PROJECT →             │    │   (scrolls in ↓)    │    │   │
│  │  └─────────────────────────────┘    │                     │    │   │
│  │                                     └─────────────────────┘    │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  [Additional work categories follow same alternating pattern]           │
└─────────────────────────────────────────────────────────────────────────┘
```

### Mobile Layout (<1024px)

```text
┌────────────────────────────────────────┐
│  MY WORKS                              │
│  ~~~~~~~~~~                            │
│                                        │
│  ┌──────────────────────────────────┐ │
│  │  WORK CATEGORY HEADER              │ │
│  │  02 | Website Content              │ │
│  │  BRANDING | SCRIPTING | STORYTELLING │ │
│  └──────────────────────────────────┘ │
│                                        │
│  ┌──────────────────────────────────┐ │
│  │                                  │ │
│  │      [Project Image 1]           │ │
│  │      (full-width, rounded)       │ │
│  │                                  │ │
│  └──────────────────────────────────┘ │
│                                        │
│  VIEW PROJECT →                        │
│                                        │
│  Sample Details                        │
    │ │
│                                        │
│  ┌──────────────────────────────────┐ │
│  │                                  │ │
│  │      [Project Image 2]           │ │
│  │      (full-width, rounded)       │ │
│  │                                  │ │
│  └──────────────────────────────────┘ │
│                                        │
│  [Repeat for each project in category] │
│                                        │
│  ┌──────────────────────────────────┐ │
│  │  WORK CATEGORY HEADER              │ │
│  │  03 | Blog Writing (mirrored)      │ │
│  └──────────────────────────────────┘ │
│  [Same stacked pattern continues]      │
└────────────────────────────────────────┘
```

---

## Section Architecture

### 1. Section Header
- **Title**: "MY WORKS" — large editorial serif display font (`--font-display`, ~64-80px)
- **Underline**: Red hand-drawn scribble/brush stroke beneath title (SVG or PNG asset)
- **Subtitle**: Small sans-serif body text — "Words that inform, stories that connect, and copy that creates impact."
- **Background**: Cream/beige (`#F5F0E8` or `--color-cream`)

### 2. Work Category Block
Each work category is a self-contained block with alternating layout direction.

#### Category Header Pattern
- **Number**: Oversized thin serif (e.g., "02", "03") — ~72px, weight 300, color `#1A1A1A`
- **Divider**: Vertical red line (`#D94F3D`, 2px width, ~60px height) separating number from title
- **Title**: Editorial serif heading (e.g., "Website Content", "Blog Writing") — ~36-42px
- **Tags**: Uppercase sans-serif category pills separated by vertical pipes — `BRANDING | SCRIPTING | STORYTELLING`
- **Tag Styling**: 12px, letter-spacing 0.1em, color `#1A1A1A`, font-weight 500

---

## Sticky-Scroll Image Stack Behavior (Desktop)

### Core Interaction
This is the **primary interaction pattern** for the section:

```
Behavior Rules:
├── Each Work Category has:
│   ├── ONE sticky content column (static, doesn't scroll)
│   └── ONE scrolling image column (images stack as user scrolls)
│
├── As user scrolls through a category:
│   ├── Images in the scrolling column stack vertically
│   ├── Each new image pushes the previous one upward (out of view)
│   ├── The content column remains FIXED in viewport center
│   └── Content updates/context may change based on active image
│
├── Layout alternates per category:
│   ├── Odd categories (01, 03, 05): Image LEFT | Content RIGHT
│   └── Even categories (02, 04): Content LEFT | Image RIGHT
│
└── Transition between categories:
    ├── Previous category's last image scrolls away
    ├── Next category's content column snaps into place
    └── Layout direction flips (mirror effect)
```

### Scroll Mechanics
1. **Image Column**: `position: sticky; top: 10vh; height: 80vh; overflow: hidden;`
   - Contains multiple project images stacked vertically
   - Each image is ~80vh tall with 5vh gap between
   - As user scrolls, images translate upward creating a "deck of cards" effect

2. **Content Column**: `position: sticky; top: 15vh;`
   - Remains fixed while images scroll
   - Contains: Title, Tags, "View Project" link, Description, Thumbnail Grid
   - Content is STATIC — does not change as images scroll within the same category

3. **Category Transition**:
   - When scrolling from Category A to Category B:
   - Category A's sticky elements release and scroll away
   - Category B's sticky elements snap into viewport
   - Layout direction reverses (left/right flip)

---

## Content Requirements

### Per Work Category

1. **Category Meta**
   - `number`: Two-digit string ("01", "02", etc.)
   - `title`: Work category name (e.g., "Website Content", "Blog Writing")
   - `tags`: Array of uppercase category tags (e.g., `["RESEARCH", "WELLNESS", "LIFESTYLE"]`)

2. **Project Images (Stack Column)**
   - `images`: Array of image objects for the sticky stack
   - Each image: `src`, `alt`, `aspectRatio` (optional)
   - Minimum 2-3 images per category for scroll effect to be visible
   - **Styling**: Rounded corners (8px), subtle drop shadow (`0 20px 40px rgba(0,0,0,0.08)`)
   - **Hover**: Slight scale (1.02) + shadow increase

3. **Content Column (Static)**
   - `description`: 2-3 sentence paragraph explaining the work category
   - `sampleDetails`: Optional extended text or bullet points

   - `viewProjectLink`: Text "VIEW PROJECT →" with arrow icon

### Content Example — Website Content

```yaml
category:
  number: "02"
  title: "Website Content"
  tags: ["BRANDING", "SCRIPTING", "STORYTELLING"]
  layout: "image-left"  # Images on left, content on right

  projects:
    - image: "/works/website-1.jpg"
      alt: "Skincare brand homepage on laptop"
    - image: "/works/website-2.jpg"
      alt: "E-commerce product page design"
    - image: "/works/website-3.jpg"
      alt: "Landing page conversion layout"

  content:
    description: "Creating homepage content, landing pages, service pages, and brand storytelling that balances creativity with clarity."
    sampleDetails: "Lorem ipsum doler Gf amet, connectius soncetectur adipiscing elit, sesra skincare akincass."

    cta: "VIEW PROJECT →"
```

### Content Example — Blog Writing (Mirrored Layout)

```yaml
category:
  number: "03"
  title: "Blog Writing"
  tags: ["RESEARCH", "WELLNESS", "LIFESTYLE"]
  layout: "image-right"  # Content on left, images on right

  projects:
    - image: "/works/blog-1.jpg"
      alt: "Open journal with Ayurveda notes"
    - image: "/works/blog-2.jpg"
      alt: "Wellness research notes"
    - image: "/works/blog-3.jpg"
      alt: "Lifestyle article layout"

  content:
    description: "Research-based blogs focused on Ayurveda, wellness, skincare, self-care, and lifestyle topics designed to educate and engage readers."
    sampleDetails: "Sample text anippet sit amet and cenoommetr selution ohinain inbonat et lanout lamboum addis."

    cta: "VIEW PROJECT →"
```

---

## Design Specifications



### Spacing
- Section padding: `120px 0` (top/bottom)
- Category block gap: `200px` (space between categories for scroll transition)
- Content column max-width: `480px`
- Image column max-width: `55%` of container
- Container max-width: `1280px`, centered
- Gap between stacked images: `5vh`

### Image Styling
- Border radius: `8px`
- Shadow: `0 20px 40px rgba(0,0,0,0.08)`
- Hover shadow: `0 30px 60px rgba(0,0,0,0.12)`
- Hover scale: `1.02`
- Transition: `all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)`

### Thumbnail Grid
- Layout: 2×2 or 1×3 grid depending on count
- Size: `80px × 80px` each
- Gap: `12px`
- Border radius: `6px`
- Hover: Scale `1.05`, opacity `0.8 → 1.0`

---

## Animation & Interaction (GSAP)

### 1. Section Entrance (ScrollTrigger)
```javascript
gsap.from(".works-header", {
  scrollTrigger: {
    trigger: ".works-section",
    start: "top 80%",
  },
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});
```

### 2. Category Block Reveal
```javascript
gsap.from(".work-category", {
  scrollTrigger: {
    trigger: ".work-category",
    start: "top 75%",
  },
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  stagger: 0.2
});
```

### 3. Sticky Image Stack (Core Animation)
```javascript
// Each image in the stack gets a scroll-linked animation
// Images translate from bottom to top as user scrolls through category

gsap.utils.toArray(".work-category").forEach((category, i) => {
  const images = category.querySelectorAll(".stack-image");
  const content = category.querySelector(".content-column");

  // Pin the content column
  ScrollTrigger.create({
    trigger: category,
    start: "top 10%",
    end: "bottom 90%",
    pin: content,
    pinSpacing: false
  });

  // Animate images through the stack
  images.forEach((img, index) => {
    gsap.fromTo(img, 
      { y: "100vh", opacity: 0 },
      {
        y: "-100vh",
        opacity: 1,
        scrollTrigger: {
          trigger: category,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      }
    );
  });
});
```

### 4. Image Hover Effects
```css
.stack-image {
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              box-shadow 0.4s ease;
}

.stack-image:hover {
  transform: scale(1.02);
  box-shadow: 0 30px 60px rgba(0,0,0,0.12);
}
```

### 5. CTA Link Animation
```css
.view-project-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-charcoal);
  text-decoration: none;
}

.view-project-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-red-accent);
  transition: width 0.3s ease;
}

.view-project-link:hover::after {
  width: 100%;
}

.view-project-link:hover .arrow-icon {
  transform: translateX(4px);
}
```

### 6. Number & Divider Animation
```javascript
gsap.from(".category-number", {
  scrollTrigger: { trigger: ".work-category", start: "top 70%" },
  x: -40,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
});

gsap.from(".category-divider", {
  scrollTrigger: { trigger: ".work-category", start: "top 70%" },
  scaleY: 0,
  duration: 0.6,
  delay: 0.2,
  ease: "power2.out",
  transformOrigin: "top"
});
```

---

## Responsive Behavior

### Tablet (768px – 1023px)
- Sticky scroll disabled — revert to standard stacked layout
- Images and content flow vertically within each category
- Category number reduced to 56px
- Two-column thumbnail grid maintained

### Mobile (<768px)
- Single column layout
- Category header full-width
- Images stack vertically with `margin-bottom: 40px`
- Content follows each image group
- Thumbnails become horizontal scroll or 2×2 grid
- Touch-friendly tap targets (min 44px)
- Reduced section padding: `80px 20px`

---

## Assets Required

### Images (Per Category)
- **Main stack images**: 3-5 high-quality project photos/mockups (16:10 or 4:3 ratio)
- **Thumbnail images**: 2-4 smaller preview crops (1:1 square)
- All images should have warm, desaturated tones matching cream background

### SVG Assets
- `scribble-underline.svg` — Red hand-drawn brush stroke for "MY WORKS" title
- `arrow-right.svg` — Small arrow for "VIEW PROJECT →" links
- Optional: `category-divider.svg` — Vertical red line (can be CSS)

---

## Accessibility

- All images must have descriptive `alt` text
- Sticky scroll should respect `prefers-reduced-motion`:
  ```css
  @media (prefers-reduced-motion: reduce) {
    .stack-image,
    .content-column {
      position: relative !important;
      transform: none !important;
    }
  }
  ```
- CTA links must have clear focus states (red outline)
- Color contrast ratio ≥ 4.5:1 for all text

---

## Status

- [x] Feature spec written
- [x] Sticky-scroll interaction defined
- [x] Alternating layout pattern specified
- [ ] Component structure created/updated
- [ ] Content populated (Images, Titles, Descriptions)
- [ ] GSAP sticky-scroll animation implemented
- [ ] Responsive layout verified (desktop + mobile)
- [ ] Reduced-motion accessibility tested
