// "use client" - requires browser lifecycle hooks and GSAP ScrollTrigger for sticky scroll interactions
"use client";

import { useEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/Container";
import sketchUnderlineImage from "../../../public/images/sketch_underline.png";
import adsBrandingImage01 from "../../../public/images/adsbranding_images01.jpg";
import adsBrandingImage02 from "../../../public/images/adsbranding_images02.jpg";
import adsBrandingImage03 from "../../../public/images/adsbranding_images03.jpg";
import websiteImage01 from "../../../public/images/website_images01.jpg";
import websiteImage02 from "../../../public/images/website_images02.jpg";
import websiteImage03 from "../../../public/images/website_images03.jpg";

gsap.registerPlugin(ScrollTrigger);

interface WorkImage {
  src: StaticImageData;
  alt: string;
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
}

const WORK_CATEGORIES: WorkCategory[] = [
  {
    number: "01",
    title: "Blogs and Scripts",
    tags: ["EDITORIAL", "STORYTELLING", "SCRIPTING"],
    description:
      "Long-form blog ideas and emotionally led scripts shaped to educate, connect, and leave a clear brand memory behind.",
    sampleDetails: [
      "From insight-led wellness articles to voice-first video concepts, each piece is built to sound human and feel intentional.",
      "The focus stays on clarity, rhythm, and story so the writing can hold attention from the first line to the final CTA.",
    ],
    ctaLabel: "View Project",
    ctaHref: "#contacts",
    images: [
      {
        src: adsBrandingImage01,
        alt: "Laptop display showing a polished campaign concept for editorial writing and scripts.",
      },
      {
        src: adsBrandingImage02,
        alt: "Creative project layout used to showcase narrative-driven blog and script work.",
      },
      {
        src: adsBrandingImage03,
        alt: "Brand storytelling presentation highlighting structured editorial and scripting samples.",
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
      },
      {
        src: websiteImage02,
        alt: "Landing page content design showing brand storytelling and structured website sections.",
      },
      {
        src: websiteImage03,
        alt: "Website content showcase with product storytelling and supporting content blocks.",
      },
    ],
  },
];

export const MyWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const media = gsap.matchMedia();
    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>("[data-works-reveal]")
        .forEach((element, index) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 48 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              delay: index === 0 ? 0 : 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 82%",
                once: true,
              },
            },
          );
        });

      media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-work-category]").forEach((category) => {
          const track = category.querySelector<HTMLElement>("[data-stack-track]");
          const frame = category.querySelector<HTMLElement>("[data-stack-frame]");

          if (!track || !frame) {
            return;
          }

          gsap.to(track, {
            y: () => {
              const travelDistance = track.scrollHeight - frame.clientHeight;
              return travelDistance > 0 ? -travelDistance : 0;
            },
            ease: "none",
            scrollTrigger: {
              trigger: category,
              start: "top 40%",
              end: "center 51%",
              scrub: true,
              markers: true,
              invalidateOnRefresh: true,
            },
          });
        });
      });
    }, sectionRef);

    return () => {
      media.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="works"
      ref={sectionRef}
      className="overflow-hidden px-4 py-16 sm:px-6 lg:mx-20 lg:px-10 lg:py-24"
    >
      <Container className="">
        <div data-works-reveal className="mx-auto max-w-4xl text-center lg:mx-0 lg:text-left">
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

        <div className="mt-16 lg:mt-24">
          {WORK_CATEGORIES.map((category, index) => {
            const isMirrored = index % 2 === 1;

            const imageColumn = (
              <div className="w-full">
                <div
                  data-stack-frame
                  className="relative overflow-hidden rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.08)] lg:h-[60svh]"
                >
                  <div
                    data-stack-track
                    className="flex flex-col gap-6 will-change-transform lg:gap-[3svh]"
                  >
                    {category.images.map((image, imageIndex) => (
                      <figure
                        key={`${category.title}-${imageIndex}`}
                        className="group relative h-[22rem] flex-shrink-0 overflow-hidden rounded-[2rem] bg-[#d8cab6] shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:scale-[1.01] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] sm:h-[28rem] lg:h-[60svh]"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          sizes="(max-width: 1023px) 100vw, 52vw"
                        />
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            );

            const contentColumn = (
              <div className="lg:flex lg:min-h-[60svh] lg:items-center">
                <div className="w-full max-w-[42rem] rounded-[2rem] border border-[rgba(26,26,26,0.08)] bg-[rgba(255,255,255,0.44)] p-6 backdrop-blur-[2px] sm:p-8 lg:p-10">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="font-[family-name:var(--font-kudryashev)] text-[clamp(3.5rem,8vw,5rem)] leading-none tracking-[-0.05em] text-[var(--text-primary)]">
                      {category.number}
                    </span>
                    <span className="mt-2 block h-20 w-px bg-[var(--accent-primary)] sm:h-24" />
                    <div className="">
                      <h3 className="font-[family-name:var(--font-display)] text-4xl leading-[0.95] tracking-[-0.04em] text-[var(--text-primary)] sm:text-6xl">
                        {category.title}
                      </h3>

                    </div>
                  </div>

                  <a
                    href={category.ctaHref}
                    className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)] transition-colors duration-300 hover:text-[var(--accent-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-primary)]"
                  >
                    <span className="border-b border-[var(--accent-primary)] pb-1">
                      {category.ctaLabel}
                    </span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <div className="mt-10 space-y-5 text-base leading-[1.8] text-[var(--text-secondary)] sm:text-lg">
                    <p>{category.description}</p>
                    {category.sampleDetails.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>
                  <div>
                    <p className="mt-5 text-xs uppercase tracking-[0.22em] text-[var(--text-primary)] sm:text-sm font-semibold">
                      {category.tags.join(" | ")}
                    </p>
                  </div>

                </div>
              </div>
            );

            return (
              <article
                key={category.title}
                data-work-category
                data-works-reveal
                className="relative lg:min-h-[80svh]"
              >
                <div
                  className={`grid items-start gap-8 lg:sticky lg:top-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-10 ${
                    isMirrored ? "lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)]" : ""
                  }`}
                >
                  {isMirrored ? (
                    <>
                      {contentColumn}
                      {imageColumn}
                    </>
                  ) : (
                    <>
                      {imageColumn}
                      {contentColumn}
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
