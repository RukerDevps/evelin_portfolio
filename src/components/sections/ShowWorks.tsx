"use client";

// "use client" — requires lightweight GSAP ScrollTrigger for viewport entrance fades.

import { useEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/Container";

import sketchUnderlineImage from "../../../public/images/sketch_underline.png";
import websiteImage01 from "../../../public/images/website_images01.jpg";
import websiteImage02 from "../../../public/images/website_images02.jpg";
import websiteImage03 from "../../../public/images/website_images03.jpg";

gsap.registerPlugin(ScrollTrigger);

interface WorkImage {
  src: StaticImageData;
  alt: string;
  rotation: string;
  tapeStyle: string;
}

interface EmbeddedVideo {
  title: string;
  src: string;
  rotation?: string;
}

interface WorkCategory {
  number: string;
  title: string;
  tags: string[];
  description: string;
  sampleDetails: string[];
  ctaLabel: string;
  ctaHref: string;
  images: WorkImage[];
  embeddedVideos?: EmbeddedVideo[];
}

const WORK_CATEGORIES: WorkCategory[] = [
  {
    number: "01",
    title: "Ad and Branding Video Scripts",
    tags: ["EDITORIAL", "STORYTELLING", "SCRIPTING"],
    description:
      "Long-form blog ideas and emotionally led scripts shaped to educate, connect, and leave a clear brand memory behind.",
    sampleDetails: [
      "From insight-led wellness articles to voice-first video concepts, each piece is built to sound human and feel intentional.",
      "The focus stays on clarity, rhythm, and story so the writing can hold attention from the first line to the final CTA.",
    ],
    ctaLabel: "View Project",
    ctaHref: "#contacts",
    images: [],
    embeddedVideos: [
      {
        title: "Herbally Touch Christmas video reel",
        src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1946381916222016%2F&show_text=false&width=267&t=0",
        rotation: "rotate-[-1.5deg] hover:rotate-0",
      },
      {
        title: "Volosy Care Instagram reel",
        src: "https://www.instagram.com/reel/DTIJxS6jBaf/embed/",
        rotation: "rotate-[1.5deg] hover:rotate-0",
      },
      {
        title: "Diabetes awareness branding video script for the brand Herbally Touch",
        src: "https://www.instagram.com/reel/DVGJOkAEhQL/embed/",
        rotation: "rotate-[1.5deg] hover:rotate-0",
      },
    ],
  },
  {
    number: "02",
    title: "Website Content",
    tags: ["BRANDING", "CLARITY", "STORYTELLING"],
    description:
      "Homepage messaging, landing page copy, and service-page content that balances persuasive structure with an editorial voice.",
    sampleDetails: [
      "Each page is written to guide readers naturally through the brand story while still keeping conversion goals visible.",
      "The result is web copy that feels warm and elevated, but still practical enough to support launches, offers, and everyday browsing.",
    ],
    ctaLabel: "View Project",
    ctaHref: "#contacts",
    images: [
      {
        src: websiteImage01,
        alt: "Website homepage content presented inside a soft editorial laptop mockup.",
        rotation: "rotate-[1deg] hover:rotate-0",
        tapeStyle: "paper-tape -top-3.5 left-10 rotate-[5deg] bg-yellow-100/80",
      },
      {
        src: websiteImage02,
        alt: "Landing page content design showing brand storytelling and structured website sections.",
        rotation: "rotate-[-2deg] hover:rotate-0",
        tapeStyle: "paper-tape -top-3.5 left-[40%] rotate-[-4deg] bg-amber-100/70",
      },
      {
        src: websiteImage03,
        alt: "Website content showcase with product storytelling and supporting content blocks.",
        rotation: "rotate-[1.2deg] hover:rotate-0",
        tapeStyle: "paper-tape -top-3.5 right-12 rotate-[8deg] bg-pink-100/70",
      },
    ],
  },
];

export const ShowWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Lightweight single-pass fade up triggers
      gsap.utils.toArray<HTMLElement>("[data-works-fade]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="works"
      ref={sectionRef}
      className="overflow-hidden px-4 py-16 sm:px-6 lg:mx-20 lg:px-10 lg:py-24"
    >
      <Container>
        {/* ── Heading ────────────────────────────────────────────── */}
        <div data-works-fade className="px-4 sm:px-8 md:px-12 max-w-4xl text-center lg:text-left">
          <h2 className="relative inline-block font-[family-name:var(--font-display)] text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-[-0.04em] text-[var(--text-primary)]">
            MY WORKS
            <Image
              src={sketchUnderlineImage}
              alt=""
              aria-hidden="true"
              className="absolute -bottom-3 left-8 h-auto w-[72%] sm:-bottom-4 sm:left-12 sm:w-[64%]"
            />
          </h2>
          <p className="mt-8 max-w-2xl text-sm uppercase tracking-[0.22em] text-[var(--text-secondary)] sm:text-base">
            Words that inform, stories that connect, and copy that creates impact.
          </p>
        </div>

        {/* ── Category Loop ──────────────────────────────────────── */}
        <div className="mt-16 lg:mt-24 space-y-24 lg:space-y-32">
          {WORK_CATEGORIES.map((category) => (
            <article
              key={category.title}
              data-works-fade
              className="relative w-full "
            >
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 border-b border-[rgba(26,26,26,0.08)] pb-6">
                <div className="flex items-center gap-3">
                  <span className="font-[family-name:var(--font-kudryashev)] text-4xl sm:text-5xl leading-none text-[var(--accent-primary)] opacity-85">
                    {category.number}
                  </span>
                  <span className="h-6 w-px bg-[var(--accent-primary)] opacity-50" />
                  <h3 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl leading-none tracking-tight text-[var(--text-primary)]">
                    {category.title}
                  </h3>
                </div>
                <div className="md:ml-auto">
                  <p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.22em] font-semibold text-[var(--text-muted)]">
                    {category.tags.join(" | ")}
                  </p>
                </div>
              </div>

              {/* Gallery Grid */}
              <div
                className={`mt-10 grid gap-8 lg:gap-10 ${
                  (category.images.length + (category.embeddedVideos?.length || 0)) === 1
                    ? "mx-auto max-w-md grid-cols-1"
                    : (category.images.length + (category.embeddedVideos?.length || 0)) === 2
                    ? "mx-auto max-w-2xl grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1 md:grid-cols-3"
                }`}
              >
                {/* Render embedded videos */}
                {category.embeddedVideos?.map((video, vidIdx) => (
                  <figure
                    key={`${category.title}-video-${vidIdx}`}
                    className={`relative mx-auto w-full max-w-[22rem] transition-all duration-300 ${video.rotation || ""}`}
                  >
                    <div className="relative w-full h-full">
                     
                      <div className="relative rounded-[3.25rem] bg-[#101214] p-[0.5rem] shadow-[0_28px_60px_rgba(0,0,0,0.22)] ring-1 ring-black/8">
                        <span className="absolute -left-[0.24rem] top-[6.2rem] h-12 w-[0.32rem] rounded-full bg-[#93a7bd]" />
                        <span className="absolute -left-[0.24rem] top-[9.8rem] h-16 w-[0.32rem] rounded-full bg-[#93a7bd]" />
                        <span className="absolute -right-[0.24rem] top-[8.6rem] h-20 w-[0.32rem] rounded-full bg-[#93a7bd]" />
                        <div className="absolute left-1/2 top-4 z-20 h-7 w-28 -translate-x-1/2 rounded-full bg-black shadow-[0_2px_6px_rgba(255,255,255,0.08)]" />
                        <div className="relative aspect-[8/16] overflow-hidden rounded-[2.7rem] bg-black">
                          <iframe
                            src={video.src}
                            title={video.title}
                            className="absolute inset-0 h-full w-full border-0"
                            scrolling="no"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            allowFullScreen
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-[2.7rem] ring-1 ring-white/10" />
                        </div>
                      </div>
                    </div>
                  </figure>
                ))}

                {/* Render static images */}
                {category.images.map((img, imgIdx) => (
                  <figure
                    key={`${category.title}-img-${imgIdx}`}
                    className={`relative ${
                      category.images.length === 1
                        ? "aspect-[9/16]"
                        : "aspect-[4/3]"
                    } transition-all duration-300 ${img.rotation}`}
                  >
                    {/* Inner image container */}
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 30vw"
                      />
                    </div>
                  </figure>
                ))}
              </div>

              {/* Copywriting Details Section */}
              <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 border-t border-[rgba(26,26,26,0.06)] pt-8">
                {/* Description column */}
                <div>
                  <p className="text-lg leading-[1.8] text-[var(--text-primary)] font-medium">
                    {category.description}
                  </p>

                </div>

              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
