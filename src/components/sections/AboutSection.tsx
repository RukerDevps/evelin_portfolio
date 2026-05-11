import { Container } from "@/components/layout/Container";

const ABOUT = {
  heading: "ABOUT",
  title: "Stories with clarity. Strategy with warmth.",
  body:
    "I write for brands that want to sound human. My process lives at the intersection of curiosity, editorial instinct, and a quiet obsession with getting the tone exactly right.",
};

export const AboutSection = () => {
  return (
    <section id="about" className="px-4 py-14 sm:px-6 lg:px-10 lg:py-18">
      <Container>
        <div className="section-paper rounded-[2rem] px-6 py-8 sm:px-10 sm:py-12">
          <p className="text-xs tracking-[0.4em] text-[var(--text-muted)]">
            {ABOUT.heading}
          </p>
          <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,4.25rem)] leading-[0.94] tracking-[-0.04em]">
            <span className="paper-underline">{ABOUT.title}</span>
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
            {ABOUT.body}
          </p>
        </div>
      </Container>
    </section>
  );
};
