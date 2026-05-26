"use client";

// "use client" — requires GSAP ScrollTrigger and browser refs for scroll entrance animations.

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container } from "@/components/layout/Container";
import sketchUnderlineImage from "../../../public/images/sketch_underline.png";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

interface ExperienceItem {
  count: string;
  role: string;
  company: string;
  start: string;
  end: string;
  copy: string;
  cardStyle: string; // Tailored color/rotation for the scrapbook layout
  tapeLayout: "double" | "center" | "right";
}

const EXPERIENCES: ExperienceItem[] = [
  {
    count: "01",
    role: "COPYWRITER & CONTENT WRITER",
    company: "IRAVATA TECHNOLOGIES",
    start: "2024",
    end: "PRESENT",
    copy: "Building brand voice, website copy, social messaging, and long-form content with a balance of research, rhythm, and emotional clarity. Conceptualized and edited dozens of high-performance campaign scripts and corporate assets.",
    cardStyle: "rotate-[1.2deg] translate-x-1 lg:translate-x-4 bg-[var(--bg-paper-strong)] border-[rgba(107,88,65,0.12)]",
    tapeLayout: "double",
  },
  {
    count: "02",
    role: "FREELANCE COPYWRITER",
    company: "CREATIVE BRANDS CO.",
    start: "2023",
    end: "2024",
    copy: "Partnered directly with boutique lifestyle and wellness brands to craft high-impact landing pages, product copywriting, and email marketing sequences. Maintained consistent brand guidelines and increased client conversions.",
    cardStyle: "rotate-[-1.5deg] lg:-translate-x-4 bg-[#fcf9d2] border-yellow-200/60 shadow-[0_15px_45px_rgba(245,224,80,0.08)]",
    tapeLayout: "center",
  },
  {
    count: "03",
    role: "CONTENT WRITING INTERN",
    company: "DIGITAL PULSE AGENCY",
    start: "2022",
    end: "2023",
    copy: "Researched audience behaviors and SEO content strategies. Penned comprehensive wellness and lifestyle articles while working under senior copywriters to master brand voice adaptation and copy editing workflows.",
    cardStyle: "rotate-[1deg] translate-x-1 lg:translate-x-2 bg-[#fde9f0] border-pink-200/60 shadow-[0_15px_45px_rgba(245,160,192,0.08)]",
    tapeLayout: "right",
  },
];

export const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-experience-card]");
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 48,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay: index * 0.05, // Subtle stagger overlay if triggered simultaneously
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%", // Reveals when the top of the card is at 85% viewport height
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="relative overflow-hidden py-16 lg:py-24">
      {/* Repeating background notebook lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#c73d32_0.5px,transparent_0.5px)] [background-size:16px_16px]" />

      <Container>
        {/* ── Section Title ────────────────────────────────────────── */}
        <div className="mb-16 px-4 sm:px-8 md:px-12 text-center lg:text-left">
          <h2
            className="
              relative inline-block
              font-[family-name:var(--font-display)]
              text-[clamp(3.5rem,10vw,8.5rem)]
              leading-[0.88]
              tracking-[-0.04em]
              text-[var(--text-primary)]
            "
          >
            EXPERIENCE
            <Image
              src={sketchUnderlineImage}
              alt=""
              aria-hidden="true"
              className="
                absolute -bottom-3 left-4
                h-auto w-[60%]
                sm:-bottom-4
              "
            />
          </h2>
        </div>

        {/* ── Experience Timeline List ────────────────────────────── */}
        <div ref={containerRef} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 md:gap-14">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.count}
                data-experience-card
                className="w-full"
              >
                <div
                  className={`relative rounded-[2rem] border p-8 md:p-10 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:rotate-0 hover:-translate-y-1 transition-all duration-300 ${exp.cardStyle}`}
                >
                  {/* Scrapbook Tape Decors */}
                  {exp.tapeLayout === "double" && (
                    <>
                      <div className="paper-tape -top-3.5 left-8 rotate-[-6deg] bg-amber-100/70" />
                      <div className="paper-tape -top-3.5 right-8 rotate-[8deg] bg-amber-100/70" />
                    </>
                  )}
                  {exp.tapeLayout === "center" && (
                    <div className="paper-tape -top-3.5 left-[45%] rotate-[-2deg] bg-yellow-200/80" />
                  )}
                  {exp.tapeLayout === "right" && (
                    <div className="paper-tape -top-3.5 right-12 rotate-[12deg] bg-pink-200/80" />
                  )}

                  {/* Card Content Layout */}
                  <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-8">
                    {/* Visual Count Circle */}
                    <div className="flex sm:flex-col items-center gap-1.5 shrink-0 self-start sm:self-center">
                      <span className="font-[family-name:var(--font-display)] text-5xl md:text-6xl text-[var(--accent-primary)] opacity-85 leading-none">
                        {exp.count}
                      </span>
                      <span className="text-[var(--text-muted)] text-[0.62rem] tracking-[0.25em] hidden sm:inline uppercase font-bold">
                        STAGE
                      </span>
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden sm:block w-[1.5px] self-stretch bg-[rgba(107,88,65,0.14)] my-1" />

                    {/* Body Text */}
                    <div className="flex-1 w-full">
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2.5">
                        <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3.5xl tracking-tight text-[var(--text-primary)]">
                          {exp.company}
                        </h3>
                        <span className="font-[family-name:var(--font-body)] text-xs md:text-sm tracking-[0.2em] font-semibold text-[var(--accent-primary)] bg-[rgba(199,61,50,0.06)] px-3 py-1 rounded-full w-fit">
                          {exp.start} - {exp.end}
                        </span>
                      </div>

                      <p className="mt-2 text-sm md:text-base font-bold tracking-wide text-[var(--text-secondary)]">
                        {exp.role}
                      </p>

                      <p className="mt-4 text-sm leading-6 md:leading-7 text-[var(--text-secondary)] opacity-90 max-w-3xl">
                        {exp.copy}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
