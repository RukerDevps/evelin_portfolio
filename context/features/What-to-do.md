# What I Do Section

## Goal

Implement the editorial "WHAT I DO" services section from the uploaded reference with:

- a notebook-paper presentation and centered serif heading
- image-led service cards using the uploaded `whatido0*` assets
- GSAP horizontal scrolling on desktop
- a clean scroll release into the next page section once the horizontal track finishes

## UI Rules

- Keep the uploaded mockup as the visual source of truth
- Preserve the light scrapbook/editorial aesthetic already established in the site
- Use the existing red sketch underline treatment under the main title
- Show service cards as alternating image + copy blocks, not a standard grid
- Keep arrows, pagination dots, and the handwritten "Swipe to explore" cue

## Motion

- Use `gsap` + `ScrollTrigger` for desktop horizontal motion
- Pin the section only while the track still has horizontal distance remaining
- Release normal vertical scrolling immediately after the final card is fully reached
- Keep motion on transforms only
- Fall back to native horizontal scroll snap on mobile and reduced-motion environments

## Assets

- `public/images/whatido01.jpg`
- `public/images/whatido02.jpg`
- `public/images/whatido03.jpg`
- `public/images/whatido04.jpeg`
- `public/images/whatido05.jpg`
- `public/images/whatido06.png`
- `public/images/sketch_underline.png`

## Expected Files

- `src/components/sections/WorkSection.tsx`
- `src/app/page.tsx`
- `context/progress-tracker.md`
