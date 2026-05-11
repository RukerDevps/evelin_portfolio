// "use client" — requires GSAP timelines, browser refs, and ScrollTrigger.
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/Container";
import { Nav } from "@/components/layout/Nav";
import landonImage from "../../../public/images/landon.png";
import mapImage from "../../../public/images/map.png";
import paperclipImage from "../../../public/images/paperclip.png";
import portraitImage from "../../../public/images/portrait-happy-woman-with-diary-sitting-cafe.jpg";
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
      const nav = document.querySelector("[data-hero='nav']");
      const portrait = document.querySelector("[data-hero='portrait']");
      const role = document.querySelector("[data-hero='role']");
      const nameOne = document.querySelector("[data-hero='name-one']");
      const nameTwo = document.querySelector("[data-hero='name-two']");
      const summary = document.querySelector("[data-hero='summary']");
      const cta = document.querySelector("[data-hero='cta']");
      const paperclip = document.querySelector("[data-hero='paperclip']");
      const mapPiece = document.querySelector("[data-parallax='map-piece']");
      const shipPiece = document.querySelector("[data-parallax='ship-piece']");
      const landonPiece = document.querySelector("[data-parallax='landon-piece']");

      // ── 2. Set initial hidden states ────────────────────────────────────
      gsap.set(nav, { yPercent: -110, opacity: 0 });
      gsap.set(portrait, { xPercent: -6, opacity: 0, scale: 0.97 });
      gsap.set(paperclip, { opacity: 0, rotate: -25, scale: 0.7 });
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

        // Nav descends into place
        .to(
          nav,
          { yPercent: 0, opacity: 1, duration: 0.9, ease: "expo.out" },
          "-=0.55"
        )

        // Portrait slides in from left, fades up
        .to(
          portrait,
          { xPercent: 0, opacity: 1, scale: 1, duration: 1.0, ease: "expo.out" },
          "-=0.65"
        )

        // Paperclip spins in
        .to(
          paperclip,
          { opacity: 1, rotate: -15, scale: 1, duration: 0.7, ease: "back.out(1.8)" },
          "-=0.7"
        )

        // Role label
        .to(
          role,
          { yPercent: 0, opacity: 1, duration: 0.65, ease: "expo.out" },
          "-=0.55"
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
            opacity: 0.8,
            yPercent: 0,
            duration: 1.1,
            ease: "expo.out",
            stagger: 0.12,
          },
          "-=0.55"
        );

      // ── 4. ScrollTrigger parallax (attaches after intro) ─────────────────
      tl.call(() => {
        gsap.to("[data-parallax='nav-paper']", {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to("[data-parallax='map-piece']", {
          yPercent: 12,
          xPercent: -4,
          rotation: -4,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.1,
          },
        });

        gsap.to("[data-parallax='ship-piece']", {
          yPercent: 18,
          xPercent: 4,
          rotation: 3,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.25,
          },
        });

        gsap.to("[data-parallax='landon-piece']", {
          yPercent: 14,
          xPercent: -3,
          rotation: -2,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
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
          className="absolute right-0 top-[12.2rem] hidden w-[12rem] opacity-85 md:block lg:w-[10rem]"
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
        {/* Nav gets its own wrapper so GSAP can target it independently */}
        <div data-hero="nav">
          <Nav className="mb-4" />
        </div>

        <div className="grid items-center gap-14 lg:min-h-[calc(100vh-11rem)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-18">

          {/* ── Portrait ────────────────────────────────────────────────── */}
          <div
            data-hero="portrait"
            className="relative mx-auto w-full max-w-[34rem]"
          >
            <div className="relative overflow-hidden border-[12px] border-white bg-[var(--bg-paper-strong)] shadow-[var(--shadow-card)]">
              <span className="paper-tape paper-tape-left" />
              <span className="paper-tape paper-tape-right" />
              <Image
                src={portraitImage}
                alt="Editorial placeholder portrait in a cafe setting for the Evelin portfolio hero."
                priority
                className="aspect-[4/5] w-full object-cover"
                sizes="(max-width: 1024px) 90vw, 520px"
              />
            </div>

            {/* Paperclip accent */}
            <div
              data-hero="paperclip"
              className="absolute -left-6 -top-6 z-10 w-[5rem] drop-shadow-md sm:-left-8 sm:-top-8 sm:w-[6rem]"
              style={{ rotate: "-15deg" }}
            >
              <Image
                src={paperclipImage}
                alt=""
                className="h-auto w-full"
                sizes="(max-width: 640px) 5rem, 6rem"
              />
            </div>
          </div>

          {/* ── Text content ─────────────────────────────────────────────── */}
          <div className="relative max-w-[40rem]">
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
              className="mt-16 max-w-[34rem] text-lg leading-8 text-[var(--text-secondary)]"
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

              <p className="font-[family-name:var(--font-handwritten)] text-2xl text-[var(--accent-primary)]">
                {HERO.note}
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
