// "use client" — requires GSAP timelines, browser refs, and ScrollTrigger.
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/Container";
import landonImage from "../../../public/images/landon.png";
import mapImage from "../../../public/images/map.png";
import shipImage from "../../../public/images/ship.png";
import sketchUnderlineImage from "../../../public/images/sketch_underline.png";

const HERO = {
  role: "COPYWRITER & CONTENT WRITER",
  lineOne: "EVELIN",
  lineTwo: "ELIZABETH VP",
  summary:
    "Words have always been more than words to me. I turn ideas into stories, stories into impact, and quiet observations into brand voices that feel human.",
  cta: "GET TO KNOW MY WORK",
  note: "voice-first portfolio",
};

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // ─── Intro + Parallax animation ───────────────────────────────────────────
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Instantly remove the curtain so content is visible
      gsap.set("[data-page-intro='curtain']", { scaleY: 0 });
      return undefined;
    }

    const ctx = gsap.context(() => {
      // ── 1. Gather targets ────────────────────────────────────────────────
      const curtain = document.querySelector("[data-page-intro='curtain']");
      const role = document.querySelector("[data-hero='role']");
      const nameOne = document.querySelector("[data-hero='name-one']");
      const nameTwo = document.querySelector("[data-hero='name-two']");
      const summary = document.querySelector("[data-hero='summary']");
      const cta = document.querySelector("[data-hero='cta']");
      const mapPiece = document.querySelector("[data-parallax='map-piece']");
      const shipPiece = document.querySelector("[data-parallax='ship-piece']");
      const landonPiece = document.querySelector("[data-parallax='landon-piece']");

      // ── 2. Set initial hidden states ────────────────────────────────────
      gsap.set([role, nameOne, nameTwo, summary, cta], { yPercent: 40, opacity: 0 });
      gsap.set([mapPiece, shipPiece, landonPiece], { opacity: 0, yPercent: 8 });

      // ── 3. Main intro timeline ───────────────────────────────────────────
      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
      });

      // Curtain wipes upward (scaleY 1 → 0, transformOrigin top)
      tl.to(curtain, {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.1,
        ease: "expo.inOut",
      })

        // Role label
        .to(
          role,
          { yPercent: 0, opacity: 1, duration: 0.65, ease: "expo.out" },
          "-=0.65"
        )

        // Name line 1
        .to(
          nameOne,
          { yPercent: 0, opacity: 1, duration: 0.7, ease: "expo.out" },
          "-=0.45"
        )

        // Name line 2
        .to(
          nameTwo,
          { yPercent: 0, opacity: 1, duration: 0.7, ease: "expo.out" },
          "-=0.5"
        )

        // Summary paragraph
        .to(
          summary,
          { yPercent: 0, opacity: 1, duration: 0.7, ease: "expo.out" },
          "-=0.45"
        )

        // CTA row
        .to(
          cta,
          { yPercent: 0, opacity: 1, duration: 0.65, ease: "expo.out" },
          "-=0.42"
        )

        // Decorative background pieces drift in last
        .to(
          [mapPiece, shipPiece, landonPiece],
          {
            opacity: 0.9,
            yPercent: 0,
            duration: 1.1,
            ease: "expo.out",
            stagger: 0.12,
          },
          "-=0.55"
        );

      // ── 4. ScrollTrigger parallax (attaches after intro) ─────────────────
      tl.call(() => {
        const section = sectionRef.current;
        const base = { trigger: section, start: "top top", end: "bottom top" };

        // ── Nav paper shadow layer — very slow, fades out ──────────────────
        gsap.to("[data-parallax='nav-paper']", {
          yPercent: -22,
          opacity: 0,
          ease: "none",
          scrollTrigger: { ...base, scrub: 0.8 },
        });

        // ── MAP — fast layer (closest to viewer) ───────────────────────────
        // Travels far in Y, drifts left, rotates more, scales down slightly
        gsap.timeline({
          scrollTrigger: { ...base, scrub: 0.6 },
        }).to("[data-parallax='map-piece']", {
          yPercent: -55,
          xPercent: -10,
          rotation: -10,
          scale: 0.88,
          opacity: 0.3,
          ease: "none",
        });

        // ── SHIP — mid layer ───────────────────────────────────────────────
        // Floats diagonally toward bottom-right corner, subtle scale growth
        gsap.timeline({
          scrollTrigger: { ...base, scrub: 1.1 },
        }).to("[data-parallax='ship-piece']", {
          yPercent: 35,
          xPercent: 8,
          rotation: 6,
          scale: 1.06,
          opacity: 0.25,
          ease: "none",
        });

        // ── LANDON — far background layer (slowest) ────────────────────────
        // Barely moves in Y, drifts right, very gentle rotation
        gsap.timeline({
          scrollTrigger: { ...base, scrub: 2 },
        }).to("[data-parallax='landon-piece']", {
          yPercent: 18,
          xPercent: 4,
          rotation: 2.5,
          scale: 1.04,
          opacity: 0.2,
          ease: "none",
        });



        // ── Text column — gentlest drift (feels pinned) ────────────────────
        gsap.to("[data-hero='text-col']", {
          yPercent: -4,
          ease: "none",
          scrollTrigger: { ...base, scrub: 2.5 },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ─── Smooth-scroll to work section ────────────────────────────────────────
  const handleWorkScroll = () => {
    const workSection = document.getElementById("works");
    if (!workSection) return;
    gsap.to(window, {
      duration: 1.1,
      ease: "power3.inOut",
      scrollTo: { y: workSection, offsetY: 24 },
    });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden px-4 pb-14 pt-0 sm:px-6 lg:px-10"
    >
      {/* Nav parallax layer */}
      <div
        data-parallax="nav-paper"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[14rem]"
      />

      {/* ── Decorative background pieces ──────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={mapImage}
          alt=""
          width={768}
          height={1536}
          data-parallax="map-piece"
          className="absolute right-0 top-[8.2rem] hidden w-[12rem] opacity-85 md:block lg:w-[10rem]"
        />
        <Image
          src={shipImage}
          alt=""
          width={1920}
          height={1280}
          data-parallax="ship-piece"
          className="absolute bottom-0 right-[-80px] hidden w-[30vw] opacity-80 md:block"
        />
        <Image
          src={landonImage}
          alt=""
          width={2330}
          height={1445}
          data-parallax="landon-piece"
          className="absolute bottom-0 left-0 hidden w-[20rem] opacity-65 lg:block"
        />
      </div>

      <Container className="relative z-10">
        <div className="mt-[90px] sm:mt-[110px] lg:mt-[140px] flex flex-col justify-center lg:min-h-[calc(100vh-11rem)] py-12">

          {/* ── Text content ─────────────────────────────────────────────── */}
          <div data-hero="text-col" className="relative mx-auto w-full max-w-[48rem]">
            <p
              data-hero="role"
              className="mb-5 text-sm tracking-[0.32em] text-[var(--text-secondary)]"
            >
              {HERO.role}
            </p>

            <h1 className="font-[family-name:var(--font-display)] text-[clamp(3.3rem,8vw,7.25rem)] leading-[0.9] tracking-[-0.05em] text-[var(--text-primary)]">
              <span data-hero="name-one" className="block">
                {HERO.lineOne}
              </span>
              <span data-hero="name-two" className="relative mt-2 inline-block">
                {HERO.lineTwo}
                <Image
                  src={sketchUnderlineImage}
                  alt=""
                  className="absolute -bottom-[0.3em] left-20 h-auto w-[60%] max-w-[100%]"
                />
              </span>
            </h1>

            <p
              data-hero="summary"
              className="mt-16 max-w-[38rem] text-lg leading-8 text-[var(--text-secondary)] sm:text-xl sm:leading-9"
            >
              {HERO.summary}
            </p>

            <div
              data-hero="cta"
              className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
            >
              <button
                type="button"
                onClick={handleWorkScroll}
                className="paper-button inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm tracking-[0.24em] text-[var(--text-primary)]"
              >
                <span>{HERO.cta}</span>
                <ArrowDownRight className="size-4" strokeWidth={1.75} />
              </button>

              <p className="font-[family-name:var(--font-handwritten)] text-2xl text-[var(--accent-primary)] -rotate-3 select-none">
                {HERO.note}
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
