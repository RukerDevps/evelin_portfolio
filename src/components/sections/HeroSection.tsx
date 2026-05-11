// "use client" - requires GSAP scroll effects, browser refs, and Framer Motion runtime animations.
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/Container";
import { Nav } from "@/components/layout/Nav";
import { fadeLeft, fadeRight, fadeUp, staggerMedium } from "@/lib/motion";
import landonImage from "../../../public/images/landon.png";
import mapImage from "../../../public/images/map.png";
import portraitImage from "../../../public/images/portrait-happy-woman-with-diary-sitting-cafe.jpg";
import shipImage from "../../../public/images/ship.png";

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

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const context = gsap.context(() => {
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
    }, sectionRef);

    return () => context.revert();
  }, []);

  const handleWorkScroll = () => {
    const workSection = document.getElementById("works");

    if (!workSection) {
      return;
    }

    gsap.to(window, {
      duration: 1.1,
      ease: "power3.inOut",
      scrollTo: {
        y: workSection,
        offsetY: 24,
      },
    });
  };

  return (
    <motion.section
      id="home"
      ref={sectionRef}
      variants={staggerMedium}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden px-4 pb-14 pt-0 sm:px-6 lg:px-10"
    >
      <div
        data-parallax="nav-paper"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[14rem]"
      />

      <div className="pointer-events-none absolute inset-0">
        {/* <Image
          src={paperCutImage}
          alt=""
          width={2048}
          height={600}
          className="absolute left-0 top-[8.4rem] w-full opacity-65"
        /> */}
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
        <Nav className="mb-4" />

        <div className="grid items-center gap-14 lg:min-h-[calc(100vh-11rem)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-18">
          <motion.div variants={fadeRight} className="relative mx-auto w-full max-w-[34rem]">
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

            <div className="absolute -left-4 top-10 rounded-full border border-[rgba(227,177,76,0.9)] px-4 py-1 font-[family-name:var(--font-handwritten)] text-xl text-[var(--accent-soft)] sm:-left-10">
              paper dreams
            </div>

            {/* <motion.div
              variants={fadeUp}
              className="section-paper absolute -bottom-6 right-[-0.75rem] hidden w-[11rem] rotate-[1.8deg] border border-[rgba(73,58,41,0.12)] bg-[rgba(255,251,246,0.94)] p-2 md:block"
            >
              <Image
                src={booksImage}
                alt="Stacked books used as a scrapbook-style supporting detail in the hero collage."
                className="aspect-[3/4] w-full object-cover"
                sizes="176px"
              />
            </motion.div> */}
          </motion.div>

          <motion.div variants={fadeLeft} className="relative max-w-[40rem]">
            <motion.p
              variants={fadeUp}
              className="mb-5 text-sm tracking-[0.32em] text-[var(--text-secondary)]"
            >
              {HERO.role}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-display)] text-[clamp(3.3rem,8vw,7.25rem)] leading-[0.9] tracking-[-0.05em] text-[var(--text-primary)]"
            >
              <span className="block">{HERO.lineOne}</span>
              <span className="paper-underline mt-2 block">{HERO.lineTwo}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-10 max-w-[34rem] text-lg leading-8 text-[var(--text-secondary)]"
            >
              {HERO.summary}
            </motion.p>

            <motion.div
              variants={fadeUp}
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
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
};
