// Server component — no client-side runtime needed.
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import aboutImage from "../../../public/images/about.png";
import sketchUnderlineImage from "../../../public/images/sketch_underline.png";

const ABOUT = {
  heading: "ABOUT ME",
  subtitle: "Full-Time Grammar Sleuth,\nPart-Time Writer",
  para1:
    "I found my love for writing as a kid, and there's been no looking back since. From journalistic copywriting to scripts and social media, I've explored and experimented with all kinds of writing.",
  para2:
    "My belief — people don't buy products, they buy stories. They buy experiences. Looking for someone who can think of ideas — big and small, collaborates to create stories that move, shamelessly points out bad grammar and writes with versatility? We might make a great match.",
};

export const WhatIdoSection = () => {
  return (
    <section id="about" className="overflow-hidden py-16 lg:py-24 lg:mx-20">
      <Container>
        {/* ── Big editorial heading ──────────────────────────────────────── */}
        <div className="mb-10 lg:mb-14 px-4 sm:px-8 md:px-12">
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
            {ABOUT.heading}

            {/* Red sketch underline — reuses the same asset as the hero name */}
            <Image
              src={sketchUnderlineImage}
              alt=""
              aria-hidden="true"
              className="
                absolute -bottom-3 left-22
                h-auto w-[55%]
                sm:-bottom-4 sm:w-[50%]
              "
            />
          </h2>
        </div>

        {/* ── Two-column body ────────────────────────────────────────────── */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

          {/* ── Left: text ──────────────────────────────────────────────── */}
          <div className="w-full flex justify-center flex-col px-4 sm:px-8 md:px-12 lg:px-20">
            {/* Subtitle */}
            <p
              className="
                mb-7
                font-[family-name:var(--font-body)]
                text-[1.25rem] font-semibold leading-[1]
                text-[var(--text-primary)]
                sm:text-[2.4rem]
              "
            >
              {ABOUT.subtitle.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>

            {/* Body paragraphs */}
            <p className="mb-5 text-base leading-[1.85] text-[var(--text-secondary)] sm:text-[1.05rem]">
              {ABOUT.para1}
            </p>
            <p className="text-base leading-[1.85] text-[var(--text-secondary)] sm:text-[1.05rem]">
              {ABOUT.para2}
            </p>
          </div>

          {/* ── Right: arched polaroid photo ────────────────────────────── */}
          <div className="relative mx-auto w-full max-w-[20rem] md:max-w-[30rem] lg:mx-0 lg:max-w-none flex justify-center lg:block mt-10 lg:mt-0">
     

            <Image
              src={aboutImage}
              alt="Evelin Elizabeth VP — behind-the-scenes of a video shoot."
              priority={false}
              className="w-[80%] md:w-[65%] object-contain relative lg:absolute lg:-bottom-55 lg:right-0"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />

          </div>

        </div>
        <div className="flex flex-col sm:flex-row w-full justify-around mt-16 lg:mt-20 gap-10 sm:gap-4 px-4 sm:px-8 md:px-12">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl lg:text-6xl">10+</h1>
            <p className="text-xl lg:text-2xl text-center mt-2">Projects completed</p>

          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-5xl lg:text-6xl">10+</h1>
            <p className="text-xl lg:text-2xl text-center mt-2">Happy clients</p>

          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-5xl lg:text-6xl">3+</h1>
            <p className="text-xl lg:text-2xl text-center mt-2">Years of experience</p>

          </div>

        </div>
      </Container>
    </section>
  );
};
