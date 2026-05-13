"use client";

import { useRef, useEffect } from "react";
import Image, { type StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container } from "@/components/layout/Container";

gsap.registerPlugin(ScrollTrigger);
import sketchUnderlineImage from "../../../public/images/sketch_underline.png";
import brand01Image from "../../../public/images/brand01.png";
import brand02Image from "../../../public/images/brand02.png";
import brand03Image from "../../../public/images/brand03.png";
import brand04Image from "../../../public/images/brand004.png";
import brand05Image from "../../../public/images/brand05.png";
import brand06Image from "../../../public/images/brand06.png";
import brand07Image from "../../../public/images/brand07.png";
import brand08Image from "../../../public/images/brand08.png";

interface BrandItem {
  name: string;
  logo: StaticImageData;
}

const BRANDS_COPY = {
  heading: "BRANDS",
  intro:
    "A growing set of brands, products, and creative teams I have helped shape with content, voice, and storytelling.",
};

const BRAND_LOGOS: BrandItem[] = [
  { name: "Brand 01", logo: brand01Image },
  { name: "Brand 02", logo: brand02Image },
  { name: "Brand 03", logo: brand03Image },
  { name: "Brand 04", logo: brand04Image },
  { name: "Brand 05", logo: brand05Image },
  { name: "Brand 06", logo: brand06Image },
  { name: "Brand 07", logo: brand07Image },
  { name: "Brand 08", logo: brand08Image },
];

const MyBrands = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".brand-logo",
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 40%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="mybrands" ref={containerRef} className="overflow-hidden px-4 py-16 sm:px-6 lg:mx-20 lg:px-10 lg:py-24">
      <Container>
        <div className="mb-10 px-4 sm:px-8 md:px-12 lg:mb-14">
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
            {BRANDS_COPY.heading}
            <Image
              src={sketchUnderlineImage}
              alt=""
              aria-hidden="true"
              className="
                absolute -bottom-3 left-10
                h-auto w-[60%]
                sm:-bottom-4 sm:w-[54%]
              "
            />
          </h2>


        </div>

        <div className="px-4 sm:px-8 md:px-12">
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {BRAND_LOGOS.map((brand) => (
              <article
                key={brand.name}
                className="brand-logo flex min-h-[8.75rem] items-center justify-center rounded-[1.6rem] px-4 py-5 sm:min-h-[10rem] sm:px-5 lg:min-h-[10.75rem] lg:px-6"
              >
                <div className="relative h-[52px] w-full sm:h-[60px] lg:h-[68px]">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    sizes="(max-width: 639px) 40vw, (max-width: 1023px) 28vw, 18vw"
                    className="object-contain"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MyBrands;
