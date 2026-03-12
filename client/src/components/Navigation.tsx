/*
 * DESIGN: Haiyun's Little Forest — Soft teal-green nav
 * Playfair Display wordmark, Nunito body, JetBrains Mono links.
 * Tabs: About | Fun Facts | AI Diary | Contact
 */

import { useState, useEffect } from "react";
import { Menu, X, TreePine } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Fun Facts", href: "#funfacts" },
  { label: "AI Diary", href: "#diary" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-forest-mist/90 backdrop-blur-md shadow-[0_1px_0_0_oklch(0.88_0.015_170)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-14 sm:h-18">
        {/* Wordmark */}
        <a
          href="#"
          className="flex items-center gap-2 font-display text-base sm:text-lg font-semibold tracking-tight text-forest-deep hover:text-forest-teal transition-colors duration-300"
        >
          <TreePine size={18} className="text-forest-teal" />
          Haiyun's Little Forest
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] tracking-widest uppercase text-forest-text-light hover:text-forest-teal transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-forest-deep hover:text-forest-teal transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-forest-mist/95 backdrop-blur-md border-t border-border px-5 py-5 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-[11px] tracking-widest uppercase text-forest-text-light hover:text-forest-teal transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
