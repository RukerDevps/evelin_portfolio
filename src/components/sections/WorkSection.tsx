import { Container } from "@/components/layout/Container";

const WORK_ITEMS = [
  {
    title: "Website Content",
    copy: "Clear, voice-led pages that make brands feel precise and memorable.",
  },
  {
    title: "Blog Writing",
    copy: "Research-backed storytelling for wellness, skincare, and lifestyle audiences.",
  },
  {
    title: "Social Media Copy",
    copy: "Hooks, captions, and messaging systems that hold attention without sounding forced.",
  },
];

export const WorkSection = () => {
  return (
    <section id="works" className="px-4 py-14 sm:px-6 lg:px-10 lg:py-18">
      <Container>
        <div className="section-paper rounded-[2rem] px-6 py-8 sm:px-10 sm:py-12">
          <p className="text-xs tracking-[0.4em] text-[var(--text-muted)]">
            WORKS
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2.15rem,5vw,4rem)] leading-[0.95] tracking-[-0.04em]">
            <span className="paper-underline">Selected writing formats</span>
          </h2>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {WORK_ITEMS.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-[rgba(73,58,41,0.12)] bg-[rgba(255,252,247,0.88)] p-6"
              >
                <h3 className="text-lg tracking-[0.1em] text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
