// "use client" - requires browser scroll APIs, GSAP smooth scrolling, and active-link state.
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import headerPaper from "../../../public/images/header.png";

const NAV_ITEMS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "works", label: "WORKS" },
  { id: "contacts", label: "CONTACTS" },
];

gsap.registerPlugin(ScrollToPlugin);

interface NavProps {
  className?: string;
}

export const Nav = ({ className = "" }: NavProps) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const positions = NAV_ITEMS.map(({ id }) => {
        const element = document.getElementById(id);
        return {
          id,
          top: element?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY,
        };
      });

      const current =
        positions.findLast((item) => item.top <= 180)?.id ?? "home";
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (id: string) => {
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    setActiveSection(id);

    gsap.to(window, {
      duration: 1.05,
      ease: "power3.inOut",
      scrollTo: {
        y: target,
        offsetY: 24,
      },
    });
  };

  return (
    <div
      className={`relative mx-auto min-h-[164px] w-full max-w-[1220px] ${className}`.trim()}
    >
      <div className="pointer-events-none absolute inset-x-[-4%] top-0 h-[164px] sm:inset-x-[-6%] sm:h-[176px] lg:inset-x-[-8%] lg:h-[190px]">
        <Image
          src={headerPaper}
          alt=""
          priority
          fill
          sizes="(max-width: 640px) 118vw, (max-width: 1280px) 112vw, 1320px"
          className="object-fill object-top"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-[118px] h-px bg-[rgba(118,103,86,0.08)] sm:top-[126px] lg:top-[134px]">
        <Image
          src={headerPaper}
          alt=""
          priority
          fill
          sizes="(max-width: 640px) 118vw, (max-width: 1280px) 112vw, 1320px"
          className="opacity-0"
        />
      </div>

      <nav
        aria-label="Primary"
        className="relative z-10 flex min-h-[164px] items-start justify-between gap-8 px-8 pb-10 pt-7 sm:px-12 sm:pt-8 lg:px-16 lg:pt-9"
      >
        <div className="flex items-center gap-5 pt-2">
          <div className="font-[family-name:var(--font-display)] text-[3rem] leading-none tracking-[-0.06em] text-[#111111] sm:text-[4.1rem]">
            EE
          </div>
          <div className="h-12 w-px bg-[rgba(199,61,50,0.7)] sm:h-14" />
        </div>

        <div className="hidden items-center gap-5 pt-5 sm:flex lg:pt-6">
          {NAV_ITEMS.map((item, index) => (
            <div key={item.id} className="flex items-center gap-5">
              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavigate(item.id)}
                className={`relative text-[0.95rem] tracking-[0.18em] ${
                  activeSection === item.id
                    ? "text-[var(--accent-primary)]"
                    : "text-[var(--text-primary)]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[var(--accent-primary)] transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0"
                  }`}
                />
              </motion.button>

              {index < NAV_ITEMS.length - 1 ? (
                <span className="text-[rgba(96,77,58,0.45)]">|</span>
              ) : null}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};
