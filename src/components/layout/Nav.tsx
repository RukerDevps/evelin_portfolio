"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Menu, X } from "lucide-react";
import headerPaper from "../../../public/images/header.png";

const NAV_ITEMS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "services", label: "SERVICES" },
  { id: "works", label: "WORKS" },
  { id: "contacts", label: "CONTACTS" },
];

gsap.registerPlugin(ScrollToPlugin);

interface NavProps {
  className?: string;
}

export const Nav = ({ className = "" }: NavProps) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        positions.findLast((item) => item.top <= 160)?.id ?? "home";
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (id: string) => {
    const target = document.getElementById(id);

    if (!target) return;

    setActiveSection(id);
    setIsMobileMenuOpen(false);

    gsap.to(window, {
      duration: 0.8,
      ease: "power2.inOut",
      scrollTo: {
        y: target,
        offsetY: 140,
      },
    });
  };

  return (
    <div
      className={`relative z-50 mx-auto min-h-[90px] sm:min-h-[110px] lg:min-h-[140px] w-full max-w-full ${className}`.trim()}
    >
      {/* Header background image */}
      <div className="pointer-events-none absolute left-[50%] top-0 h-[110px] sm:h-[110px] lg:h-[140px] w-[100vw] -translate-x-1/2">
        <Image
          src={headerPaper}
          alt=""
          priority
          fill
          sizes="100vw"
          className="object-fill object-top"
        />
      </div>

      {/* Bottom border line */}
      <div className="pointer-events-none absolute left-[50%] top-[89px] h-px w-[100vw] -translate-x-1/2 bg-[rgba(118,103,86,0.08)] sm:top-[109px] lg:top-[139px]" />

      <nav
        aria-label="Primary"
        className="relative z-10 flex w-full min-h-[90px] sm:min-h-[110px] lg:min-h-[140px] items-center justify-between gap-8 px-6 sm:px-12 lg:px-16 lg:pb-4"
      >
        {/* Logo */}
        <div className="flex items-center gap-5">
          <div className="font-[family-name:var(--font-display)] text-[2.5rem] leading-none tracking-[-0.06em] text-[#111111] sm:text-[3.5rem] lg:text-[4.1rem]">
            EE
          </div>
          <div className="h-10 w-px bg-[rgba(199,61,50,0.7)] sm:h-12 lg:h-14" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-5 sm:flex">
          {NAV_ITEMS.map((item, index) => (
            <div key={item.id} className="flex items-center gap-5">
              <button
                type="button"
                onClick={() => handleNavigate(item.id)}
                style={{ touchAction: "manipulation" }}
                className={`group relative text-[0.95rem] tracking-[0.18em] transition-colors duration-300 hover:-translate-y-0.5 active:scale-[0.98] transform ${
                  activeSection === item.id
                    ? "text-[var(--accent-primary)]"
                    : "text-[var(--text-primary)] hover:text-[var(--accent-primary)]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[var(--accent-primary)] transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>

              {index < NAV_ITEMS.length - 1 ? (
                <span className="text-[rgba(96,77,58,0.45)]">|</span>
              ) : null}
            </div>
          ))}
        </div>

        {/* Mobile hamburger toggle */}
        <div className="flex sm:hidden items-center">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            style={{ touchAction: "manipulation" }}
            className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors p-3 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen
              ? <X size={28} className="pointer-events-none" />
              : <Menu size={28} className="pointer-events-none" />
            }
          </button>
        </div>
      </nav>

      {/* Mobile dropdown — pure CSS transition, no framer-motion */}
      <div
        className={`absolute left-0 top-[90px] w-full bg-[#f2ecdf] shadow-xl border-b border-[rgba(118,103,86,0.1)] z-50 flex flex-col items-center py-6 sm:hidden
          transition-all duration-300 ease-in-out origin-top
          ${isMobileMenuOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-0 pointer-events-none"
          }`}
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleNavigate(item.id)}
            style={{ touchAction: "manipulation" }}
            className={`w-full py-3 text-center text-lg tracking-[0.18em] uppercase transition-colors duration-300 ${
              activeSection === item.id
                ? "text-[var(--accent-primary)] font-bold"
                : "text-[var(--text-primary)]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};