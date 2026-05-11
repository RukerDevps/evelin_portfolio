import { Container } from "@/components/layout/Container";

const EXPERIENCE = {
  role: "COPYWRITER & CONTENT WRITER",
  company: "IRAVATA TECHNOLOGIES",
  period: "2024 - PRESENT",
  copy:
    "Building brand voice, website copy, social messaging, and long-form content with a balance of research, rhythm, and emotional clarity.",
};

export const ExperienceSection = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
      <Container>
        <div className="section-paper rounded-[2rem] px-6 py-8 sm:px-10">
          <p className="text-xs tracking-[0.4em] text-[var(--text-muted)]">
            EXPERIENCE
          </p>
          <div className="mt-6 flex flex-col gap-4 border-l border-[rgba(199,61,50,0.35)] pl-6">
            <p className="text-sm tracking-[0.3em] text-[var(--accent-primary)]">
              {EXPERIENCE.period}
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-4xl tracking-[-0.04em]">
              {EXPERIENCE.company}
            </h3>
            <p className="text-sm tracking-[0.2em] text-[var(--text-secondary)]">
              {EXPERIENCE.role}
            </p>
            <p className="max-w-3xl text-base leading-7 text-[var(--text-secondary)]">
              {EXPERIENCE.copy}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
