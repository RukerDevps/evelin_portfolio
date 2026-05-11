# UI Context

## Theme

Light-mode creative portfolio with a scrapbook/editorial aesthetic. The design language mimics a physical creative workspace — notebook paper backgrounds with blue ruled lines, polaroid-style photos with tape borders, handwritten annotations, sticky notes, and high-contrast editorial typography. The vibe is personal, playful, and professionally creative — like flipping through a designer's physical mood board and portfolio book.

## Colors

| Role | CSS Variable | Value |
|------|-------------|-------|
| Page background | `--bg-base` | `#FEFEFE` |
| Notebook line | `--bg-notebook-line` | `#A8C8EC` |
| Notebook line subtle | `--bg-notebook-line-faint` | `#D6E6F5` |
| Surface / Card | `--bg-surface` | `#FFFFFF` |
| Surface alt (sticky notes) | `--bg-sticky-yellow` | `#F5E050` |
| Surface alt (sticky green) | `--bg-sticky-green` | `#A8D46B` |
| Surface alt (sticky pink) | `--bg-sticky-pink` | `#F5A0C0` |
| Primary text | `--text-primary` | `#1A1A1A` |
| Secondary text | `--text-secondary` | `#4A4A4A` |
| Muted text | `--text-muted` | `#7A7A7A` |
| Primary accent | `--accent-primary` | `#E63946` |
| Accent underline | `--accent-underline` | `#E63946` |
| Accent highlight | `--accent-highlight` | `#FFD60A` |
| Accent tape | `--accent-tape` | `#F5E6C8` |
| Border default | `--border-default` | `#E0E0E0` |
| Border photo | `--border-photo` | `#FFFFFF` |
| Shadow soft | `--shadow-soft` | `rgba(0, 0, 0, 0.08)` |
| Shadow medium | `--shadow-medium` | `rgba(0, 0, 0, 0.15)` |

## Typography

| Role | Font | Weight | Size | Variable |
|------|------|--------|------|----------|
| Display / H1 | Bile Demo | 400-700 | 48-72px | `--font-display` |
| Section headers | Bile Demo | 400-600 | 36-48px | `--font-section` |
| Subsection headers | Inter or DM Sans | 600 | 24-28px | `--font-heading` |
| Body text | Inter | 400 | 14-16px | `--font-body` |
| Caption / Labels | Inter | 500 | 12-13px | `--font-caption` |
| Handwritten annotations | Caveat or Kalam | 400-700 | 18-24px | `--font-handwritten` |
| Mono / Technical | JetBrains Mono | 400 | 13-14px | `--font-mono` |

### Typography Patterns
- Display headers use tight letter-spacing (`-0.02em`) and often include decorative red underlines (hand-drawn wavy style)
- Section headers are ALL CAPS with elegant serif styling
- Body text uses relaxed line-height (`1.6-1.8`)
- Handwritten annotations appear at slight rotations (`-3deg` to `5deg`) for organic feel

## Border Radius

| Context | Value | Class |
|---------|-------|-------|
| Photos / Polaroids | `2px` | `rounded-sm` |
| Cards / Panels | `8px` | `rounded-lg` |
| Buttons / Pills | `9999px` | `rounded-full` |
| Sticky notes | `2px 8px 2px 8px` | `rounded-sticky` |
| Phone mockups | `24px` | `rounded-3xl` |
| Laptop mockups | `8px` | `rounded-lg` |

## Shadows

| Context | Value |
|---------|-------|
| Photo frames | `0 4px 12px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)` |
| Sticky notes | `0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)` |
| Phone mockups | `0 20px 40px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.1)` |
| Cards hover | `0 8px 24px rgba(0,0,0,0.12)` |

## Component Library

### PhotoFrame
- White border (`8-12px`) simulating polaroid style
- Subtle tape corners (beige/cream colored rectangles with slight rotation)
- Soft shadow beneath
- Optional caption below in handwritten font
- Slight random rotation (`-2deg` to `2deg`) for organic feel

### StickyNote
- Colored backgrounds (yellow, green, pink variants)
- Slight rotation (`-3deg` to `4deg`)
- Handwritten or bold sans-serif text
- Shadow for depth
- Often used for callouts, challenge cards, or annotations

### NotebookPaper
- Full-width container with repeating horizontal blue lines
- Lines spaced at `28-32px` intervals
- Optional vertical red margin line on left (`80px` from edge)
- Content sits on/between lines

### PhoneMockup
- Device frame with rounded corners (`24px`)
- Thin bezel (`8-12px`)
- Notch or dynamic island at top
- Screen content inside with `rounded-2xl`
- Realistic shadow
- Often shown in groups of 3, slightly overlapping or staggered

### LaptopMockup
- Screen with thin bezel
- Keyboard/trackpad base below (perspective transform)
- Screen content visible
- Used for showcasing web/blog work

### SectionHeader
- Large serif typography
- ALL CAPS for major sections
- Decorative red underline (wavy/hand-drawn style, `4px` height)
- Optional small red accent line to the left

### HandwrittenAnnotation
- Script font (Caveat/Kalam)
- Often in red or black ink color
- Includes arrows, circles, underlines
- Slight rotation for natural feel
- Used for connecting elements or adding commentary

### BrandLogoGrid
- Horizontal row of client logos
- Grayscale or muted color treatment
- Even spacing, aligned center
- Hover: full color or slight scale

### CertificateCard
- Clean white or light background
- Logo/header at top
- Body text centered
- Signature/footer area
- Subtle border or shadow

## Layout Patterns

### Hero Section
- Full viewport height or large top section
- Asymmetric two-column: left photo collage, right text
- Photo collage uses overlapping PhotoFrames with tape
- Name in large display serif font
- Tagline/subtitle in smaller sans-serif
- Handwritten annotations pointing to elements
- Notebook paper background with blue lines

### About Section
- Large "ABOUT ME" section header with red underline
- Two-column layout: text left, photo right
- Photo uses PhotoFrame with tape corners
- Body text sits on notebook lines
- Handwritten annotation/caption near photo

### Brands Section
- Centered section header
- Grid of brand logos (2 rows, 4-5 per row)
- Logos in grayscale, evenly spaced
- Clean spacing, no cards

### Work Showcase (Blogs / Technical / Social / Campaigns)
- Section header left-aligned with red underline
- Description paragraph below header
- Asymmetric layout mixing LaptopMockup and PhoneMockup
- Mockups often overlap or sit at slight angles
- Handwritten arrows connecting description to mockups
- Background remains notebook paper

### Spec Ads Section
- Two-column layout: challenge card (sticky note style) left, entry right
- Challenge uses green StickyNote with numbered badge
- Entry shows the creative work (poster/ad)
- "CHALLENGE" and "MY ENTRY" labels in small caps

### Certificates Section
- Section header with red underline
- Grid of certificate cards
- Clean, minimal card design

### Contact / Footer Section
- Large display text "LET'S GET THIS" with bread emoji
- Photo collage with playful vibe
- Contact info: phone and email with icons
- Handwritten-style friendly message

## Spacing System

| Token | Value |
|-------|-------|
| `space-xs` | `4px` |
| `space-sm` | `8px` |
| `space-md` | `16px` |
| `space-lg` | `24px` |
| `space-xl` | `32px` |
| `space-2xl` | `48px` |
| `space-3xl` | `64px` |
| `space-4xl` | `96px` |

## Icons

- Lucide React for UI icons (phone, mail, external link)
- Stroke width: `1.5-2`
- Sizes: `16px` inline, `20px` for buttons
- Custom SVG for decorative arrows (hand-drawn style)
- Emoji used sparingly for personality (🍞)

## Background Effects

### Notebook Paper Pattern
```css
background-color: var(--bg-base);
background-image: repeating-linear-gradient(
  0deg,
  transparent,
  transparent 31px,
  var(--bg-notebook-line) 31px,
  var(--bg-notebook-line) 32px
);
```

### Margin Line (Optional)
```css
border-left: 1px solid var(--accent-primary);
opacity: 0.3;
margin-left: 80px;
```

## Responsive Behavior

- Desktop: Full asymmetric layouts, side-by-side mockups
- Tablet: Mockups stack to 2 columns, reduced rotations
- Mobile: Single column, mockups full width, simplified photo collages
- Notebook lines remain visible at all breakpoints
- Font sizes scale down proportionally

## Animation & Interaction

- PhotoFrames: subtle hover lift (`translateY(-4px)`) with increased shadow
- StickyNotes: slight wobble on hover (`rotate` shift)
- Mockups: gentle float animation (optional, `2-3s` ease-in-out)
- Scroll: elements fade in + translate up as they enter viewport
- Links: underline animation left-to-right in red
- Buttons: scale `1.02` on hover

## Assets Required

1. **Photos**: Professional headshots, candid workspace photos, pet photos
2. **Brand Logos**: Activision, Johnson & Johnson, Aveeno, CleverTap, Special Olympics, edvanza, HungryPanda, actomica, Foodsta Kitchens, AlphaGen, WIZLY, COLORBAR
3. **Mockup Screenshots**: Blog pages, CleverTap landing page, Foodsta social posts, Call of Duty social posts, Human Race ASIA campaign, Fat Mario campaign
4. **Spec Ad Entries**: God tagline ad, Woodstock poster
5. **Certificates**: Copy Traineeship certificate, Google Digital Unlocked certificate
6. **Decorative**: Tape PNGs, hand-drawn arrow SVGs, bread emoji

## Key Design Rules

1. **Never use pure black** — always `#1A1A1A` for text
2. **Always use notebook paper background** on main sections
3. **Photos MUST have white polaroid borders and tape corners**
4. **Red underlines on all major section headers** — wavy/hand-drawn style
5. **Handwritten annotations in red or black** — never blue
6. **Sticky notes always slightly rotated** — never perfectly straight
7. **Maintain scrapbook asymmetry** — avoid perfect grids unless for logos
8. **Mix serif display with sans-serif body** — never use display for body text
9. **Shadows must be soft and diffused** — no harsh drop shadows
10. **Preserve whitespace** — let notebook lines breathe, don't overcrowd
