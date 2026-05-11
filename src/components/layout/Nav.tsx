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
    <div className={`relative mx-auto w-full max-w-[1220px] ${className}`.trim()}>
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={headerPaper}
          alt=""
          fill
          priority
          className="object-cover object-bottom"
          sizes="(max-width: 1280px) 100vw, 1220px"
        />
      </div>

      <nav
        aria-label="Primary"
        className="relative z-10 flex min-h-[136px] items-start justify-between gap-8 px-8 pb-8 pt-8 sm:px-12 lg:px-16"
      >
        <div className="flex items-center gap-5">
          <div className="font-[family-name:var(--font-display)] text-[3rem] leading-none tracking-[-0.06em] text-[#111111] sm:text-[4rem]">
            EE
          </div>
          <div className="h-12 w-px bg-[rgba(199,61,50,0.7)]" />
        </div>

        <div className="hidden items-center gap-5 pt-3 sm:flex">
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
