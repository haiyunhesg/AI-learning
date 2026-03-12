/*
 * DESIGN: Haiyun's Little Forest — Section Header
 * Soft teal accent, Playfair Display title, gentle gradient rule.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeader({ title, subtitle, light }: SectionHeaderProps) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`mb-10 sm:mb-14 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2
        className={`font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-2 ${
          light ? "text-white/90" : "text-forest-deep"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-mono text-[11px] tracking-widest uppercase mt-1 ${
            light ? "text-white/50" : "text-forest-text-light"
          }`}
        >
          {subtitle}
        </p>
      )}
      <hr
        className={`mt-4 border-none h-px ${
          light
            ? "bg-gradient-to-r from-white/30 to-transparent"
            : "bg-gradient-to-r from-forest-teal-light to-transparent"
        }`}
      />
    </div>
  );
}
