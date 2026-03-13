/*
 * DESIGN: Haiyun's Little Forest — Soft teal-green nav with language toggle
 * Playfair Display wordmark, Nunito body, JetBrains Mono links.
 * Tabs: About | Fun Facts | AI Diary | Contact | EN/中
 */

import { useState, useEffect } from "react";
import { Menu, X, TreePine, Globe } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggleLang, t } = useLang();

  const NAV_ITEMS = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.funfacts"), href: "#funfacts" },
    { label: t("nav.diary"), href: "#diary" },
    { label: t("nav.contact"), href: "#contact" },
  ];

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
          {t("footer.brand")}
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

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-forest-text-light hover:text-forest-teal transition-colors duration-300 border border-forest-teal-light/30 rounded-full px-3 py-1 hover:border-forest-teal/50"
            aria-label="Toggle language"
          >
            <Globe size={12} />
            {lang === "en" ? "中文" : "EN"}
          </button>
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

          {/* Mobile language toggle */}
          <button
            onClick={() => {
              toggleLang();
              setMobileOpen(false);
            }}
            className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-forest-text-light hover:text-forest-teal transition-colors duration-300 self-start"
            aria-label="Toggle language"
          >
            <Globe size={12} />
            {lang === "en" ? "切换中文" : "Switch to EN"}
          </button>
        </div>
      </div>
    </nav>
  );
}
