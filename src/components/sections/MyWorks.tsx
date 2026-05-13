"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/layout/Container";
import sketchUnderlineImage from "../../../public/images/sketch_underline.png";

import adsImage from "../../../public/images/adsbranding_images01.jpg";
import websiteImage from "../../../public/images/website_images01.jpg";

gsap.registerPlugin(ScrollTrigger);

const WORKS_DATA = [
  {
    title: "Ads and Brandings video Scripts",
    description:
      "Writing emotionally driven scripts that help brands communicate their identity, values, and products in a memorable way.",
    image: adsImage,
    imageAlt: "Ads and branding scripts",
  },
  {
    title: "Website contents",
    description:
      "Creating homepage content, landing pages, service pages, and brand storytelling that balances creativity with clarity.",
    image: websiteImage,
    imageAlt: "Website contents",
  },
];

export const MyWorks = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const workItems = gsap.utils.toArray<HTMLElement>(".work-item");
      workItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="works" ref={containerRef} className="overflow-hidden px-4 py-16 sm:px-6 lg:mx-20 lg:px-10 lg:py-24">
      <Container>
        <div className="mb-12 px-4 sm:px-8 md:px-12 lg:mb-20">
          <h2
            className="
              relative inline-block
              font-[family-name:var(--font-display)]
              text-[clamp(3.5rem,10vw,8.5rem)]
              leading-[0.9]
              tracking-[-0.04em]
              text-[var(--text-primary)]
            "
          >
            MY WORKS
            <Image
              src={sketchUnderlineImage}
              alt=""
              aria-hidden="true"
              className="absolute -bottom-3 left-10 h-auto w-[70%] sm:-bottom-4 sm:w-[65%]"
            />
          </h2>
        </div>

        <div className="flex flex-col gap-16 lg:gap-24 px-4 sm:px-8 md:px-12">
          {WORKS_DATA.map((work, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={work.title}
                className={`work-item grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                  isEven ? "" : "lg:grid-flow-col-dense"
                }`}
              >
                {/* Image Side */}
                <div
                  className={`relative w-full aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lg ${
                    isEven ? "lg:col-start-1" : "lg:col-start-2"
                  }`}
                >
                  <Image
                    src={work.image}
                    alt={work.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Text Side */}
                <div
                  className={`flex flex-col justify-center ${
                    isEven ? "lg:col-start-2 lg:pl-8" : "lg:col-start-1 lg:pr-8"
                  }`}
                >
                  <h3 className="mb-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl leading-tight text-[var(--text-primary)]">
                    {work.title}
                  </h3>
                  <span className="mb-6 block h-[3px] w-12 rounded-full bg-[var(--accent-primary)]" />
                  <p className="text-base sm:text-lg leading-[1.8] text-[var(--text-secondary)]">
                    {work.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
