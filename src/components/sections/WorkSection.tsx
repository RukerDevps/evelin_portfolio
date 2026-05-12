// "use client" — requires GSAP ScrollTrigger, browser refs, and button-driven scroll sync.
"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Clapperboard,
  FilePenLine,
  MessageCircleHeart,
  NotebookPen,
  ScanSearch,
  Share2,
  type LucideIcon,
} from "lucide-react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sketchUnderlineImage from "../../../public/images/sketch_underline.png";
import whatido01Image from "../../../public/images/whatido01.jpg";
import whatido02Image from "../../../public/images/whatido02.jpg";
import whatido03Image from "../../../public/images/whatido03.jpg";
import whatido04Image from "../../../public/images/whatido04.jpeg";
import whatido05Image from "../../../public/images/whatido05.jpg";
import whatido06Image from "../../../public/images/whatido06.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface WorkItem {
  title: string[];
  copy: string;
  image: StaticImageData;
  imageAlt: string;
  icon: LucideIcon;
  imagePosition?: string;
}

const WORK_ITEMS: WorkItem[] = [
  {
    title: ["Video", "Scripts"],
    copy:
      "Conceptualize and write scripts for advertising and branding videos that tell stories and bring ideas to life.",
    image: whatido01Image,
    imageAlt: "Clapper board resting in front of soft bokeh lights for video script work.",
    icon: Clapperboard,
    imagePosition: "object-[22%_center]",
  },
  {
    title: ["Blog and Content", "Writing"],
    copy:
      "Write and edit blogs, articles, website content, and brand copy that reflect your voice and connect with your audience.",
    image: whatido02Image,
    imageAlt: "Hands typing on a laptop with a blog layout open on screen.",
    icon: FilePenLine,
  },
  {
    title: ["Social Media", "Storytelling"],
    copy:
      "Develop engaging content strategies and storytelling approaches for Instagram, Facebook, YouTube, and websites.",
    image: whatido03Image,
    imageAlt: "Phone in hand with social media reactions floating around it.",
    icon: Share2,
  },
  {
    title: ["Product", "Descriptions"],
    copy:
      "Write product descriptions that turn features into relatable benefits customers care about.",
    image: whatido04Image,
    imageAlt: "A product bottle styled on a neutral editorial still-life set.",
    icon: NotebookPen,
  },
  {
    title: ["Captions and", "Taglines"],
    copy:
      "Create captions, taglines, and hooks that grab attention and strengthen brand identity.",
    image: whatido05Image,
    imageAlt: "Hand holding a phone with floating social message icons around it.",
    icon: MessageCircleHeart,
  },
  {
    title: ["Research and", "Analysis"],
    copy:
      "Conduct daily research and audience analysis to create meaningful, informative, and value-driven content.",
    image: whatido06Image,
    imageAlt: "Notebook, magnifying glass, and pen arranged on a research desk.",
    icon: ScanSearch,
  },
];

const SECTION_COPY = {
  eyebrow: "SERVICES",
  title: "WHAT I DO",
  subtitle: "Crafting words that tell stories, build brands, and drive impact.",
  helper: "Swipe to explore",
};

export const WorkSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const isDesktopRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = (nextIndex: number) => {
    const boundedIndex = Math.max(0, Math.min(WORK_ITEMS.length - 1, nextIndex));
    setActiveIndex((currentIndex) =>
      currentIndex === boundedIndex ? currentIndex : boundedIndex
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const stage = stageRef.current;
        const viewport = viewportRef.current;
        const track = trackRef.current;

        if (!stage || !viewport || !track) {
          return undefined;
        }

        isDesktopRef.current = true;
        viewport.scrollLeft = 0;
        gsap.set(track, { x: 0 });

        const getDistance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);

        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
        });

        const trigger = ScrollTrigger.create({
          trigger: stage,
          start: "top top+=118",
          end: () => `+=${Math.max(getDistance(), 1)}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          animation: tween,
          onUpdate: (self) => {
            updateActiveIndex(Math.round(self.progress * (WORK_ITEMS.length - 1)));
          },
          onRefresh: (self) => {
            updateActiveIndex(Math.round(self.progress * (WORK_ITEMS.length - 1)));
          },
        });

        triggerRef.current = trigger;
        requestAnimationFrame(() => ScrollTrigger.refresh());

        return () => {
          triggerRef.current = null;
          tween.kill();
        };
      });

      media.add("(max-width: 1023px), (prefers-reduced-motion: reduce)", () => {
        isDesktopRef.current = false;
        triggerRef.current = null;
        const viewport = viewportRef.current;
        const track = trackRef.current;

        if (viewport) {
          viewport.scrollLeft = 0;
        }

        if (track) {
          gsap.set(track, { clearProps: "transform" });
        }

        updateActiveIndex(0);
        return undefined;
      });

      return () => media.revert();
    }, sectionRef);

    return () => {
      triggerRef.current = null;
      ctx.revert();
    };
  }, []);

  const scrollToIndex = (index: number) => {
    const boundedIndex = Math.max(0, Math.min(WORK_ITEMS.length - 1, index));

    if (isDesktopRef.current && triggerRef.current) {
      const progress = WORK_ITEMS.length === 1 ? 0 : boundedIndex / (WORK_ITEMS.length - 1);
      const scrollTarget =
        triggerRef.current.start + (triggerRef.current.end - triggerRef.current.start) * progress;

      gsap.to(window, {
        duration: 0.9,
        ease: "power2.inOut",
        scrollTo: scrollTarget,
      });

      return;
    }

    const viewport = viewportRef.current;
    const track = trackRef.current;
    const slides = track?.querySelectorAll<HTMLElement>("[data-whatido-item]");
    const targetSlide = slides?.[boundedIndex];

    if (!viewport || !targetSlide) {
      return;
    }

    viewport.scrollTo({
      left: targetSlide.offsetLeft - 8,
      behavior: "smooth",
    });

    updateActiveIndex(boundedIndex);
  };

  const handleViewportScroll = () => {
    if (isDesktopRef.current) {
      return;
    }

    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    const progress = maxScroll <= 0 ? 0 : viewport.scrollLeft / maxScroll;
    updateActiveIndex(Math.round(progress * (WORK_ITEMS.length - 1)));
  };

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-10 lg:py-24"
    >
      
        <div
          ref={stageRef}
          className=" relative overflow-hidden rounded-[2.4rem] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12"

        >
         

          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-[0.72rem] tracking-[0.55em] text-[var(--text-muted)]">
              {SECTION_COPY.eyebrow}
            </p>

            <div className="mt-4 flex items-center justify-center gap-4 sm:gap-6">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[rgba(230,57,70,0.42)]" />
                <span className="h-2 w-2 rounded-full bg-[rgba(230,57,70,0.42)]" />
                <span className="h-2 w-2 rounded-full bg-[rgba(230,57,70,0.42)]" />
              </span>

              <h2 className="relative font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,6.4rem)] leading-[0.9] tracking-[-0.05em] text-[var(--text-primary)]">
                {SECTION_COPY.title}
                <Image
                  src={sketchUnderlineImage}
                  alt=""
                  aria-hidden="true"
                  className="absolute -bottom-4 left-1/2 h-auto w-[12rem] -translate-x-1/2 sm:-bottom-5 sm:w-[15rem]"
                />
              </h2>

              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[rgba(230,57,70,0.25)]" />
                <span className="h-2 w-2 rounded-full bg-[rgba(230,57,70,0.25)]" />
                <span className="h-2 w-2 rounded-full bg-[rgba(230,57,70,0.25)]" />
              </span>
            </div>

            <p className="mx-auto mt-9 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
              {SECTION_COPY.subtitle}
            </p>
          </div>

          <div className="relative mt-10 lg:mt-14">
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="paper-button absolute left-0 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-45 lg:inline-flex"
              aria-label="Show previous writing format"
            >
              <ArrowLeft className="size-6" strokeWidth={1.8} />
            </button>

            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex + 1)}
              disabled={activeIndex === WORK_ITEMS.length - 1}
              className="paper-button absolute right-0 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-45 lg:inline-flex"
              aria-label="Show next writing format"
            >
              <ArrowRight className="size-6" strokeWidth={1.8} />
            </button>

            <div
              ref={viewportRef}
              onScroll={handleViewportScroll}
              className="no-scrollbar overflow-x-auto lg:overflow-hidden"
            >
              <div
                ref={trackRef}
                className="flex w-max snap-x snap-mandatory gap-4 px-1 py-2 sm:gap-5 lg:gap-6 lg:px-12 lg:py-4"
              >
                {WORK_ITEMS.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title.join(" ")}
                      data-whatido-item
                      className="grid w-[18.75rem] shrink-0 snap-center grid-cols-[0.82fr_1.18fr] overflow-hidden rounded-[1.7rem] border border-[rgba(73,58,41,0.08)] bg-[rgba(255,255,255,0.92)] shadow-[0_18px_45px_rgba(29,22,15,0.09)] sm:w-[22.5rem] lg:w-[25rem]"
                    >
                      <div className="relative min-h-[22rem]">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          sizes="(max-width: 640px) 140px, (max-width: 1024px) 180px, 220px"
                          className={`object-cover ${item.imagePosition ?? "object-center"}`}
                        />
                      </div>

                      <div className="flex min-h-[22rem] flex-col justify-between px-4 py-5 sm:px-5 sm:py-6">
                        <div>
                          <div className="inline-flex rounded-full border border-[rgba(26,26,26,0.1)] bg-[rgba(255,251,246,0.96)] p-3 text-[var(--text-primary)]">
                            <Icon className="size-7" strokeWidth={1.75} />
                          </div>

                          <h3 className="mt-5 font-[family-name:var(--font-display)] text-[2rem] leading-[0.92] tracking-[-0.04em] text-[var(--text-primary)] sm:text-[2.25rem]">
                            {item.title.map((line) => (
                              <span key={line} className="block">
                                {line}
                              </span>
                            ))}
                          </h3>

                          <span className="mt-4 block h-[3px] w-12 rounded-full bg-[var(--accent-primary)]" />

                          <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)] sm:text-[0.96rem]">
                            {item.copy}
                          </p>
                        </div>

                        <p className="mt-6 text-[0.68rem] tracking-[0.42em] text-[var(--text-muted)]">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-5">
            <div className="flex items-center gap-3">
              {WORK_ITEMS.map((item, index) => (
                <button
                  key={item.title.join(" ")}
                  type="button"
                  onClick={() => scrollToIndex(index)}
                  className={`h-3 w-3 rounded-full transition-transform ${
                    activeIndex === index
                      ? "scale-110 bg-[var(--accent-primary)]"
                      : "bg-[rgba(26,26,26,0.18)] hover:scale-105"
                  }`}
                  aria-label={`Show ${item.title.join(" ")} card`}
                  aria-pressed={activeIndex === index}
                />
              ))}
            </div>

            <div className="flex items-center gap-3 text-[var(--accent-primary)]">
              <span className="font-[family-name:var(--font-handwritten)] text-[1.65rem] leading-none">
                ☆
              </span>
              <p className="font-[family-name:var(--font-handwritten)] text-2xl">
                {SECTION_COPY.helper}
              </p>
              <span className="font-[family-name:var(--font-handwritten)] text-[1.85rem] leading-none">
                ↗
              </span>
            </div>
          </div>
        </div>
     
    </section>
  );
};
