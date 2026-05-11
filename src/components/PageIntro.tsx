/**
 * PageIntro — a full-screen curtain overlay that GSAP wipes upward on first
 * load. It is purely visual; pointer-events are set to none after it leaves
 * so it never blocks interaction.
 *
 * The element is targeted by HeroSection's GSAP timeline via
 * data-page-intro="curtain". This component only mounts the DOM node; the
 * actual animation is driven from HeroSection so everything shares one
 * coordinated timeline.
 */
export const PageIntro = () => (
  <div
    data-page-intro="curtain"
    aria-hidden="true"
    style={{
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      background: "#f7f1e8",
      transformOrigin: "top center",
      pointerEvents: "none",
    }}
  />
);
