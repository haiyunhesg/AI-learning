/*
 * DESIGN: Editorial Longform — Section Header
 * Oversized italic section number + title + horizontal rule.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`mb-12 sm:mb-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="flex items-end gap-4 sm:gap-6 mb-4">
        <span className="section-number text-6xl sm:text-8xl lg:text-9xl leading-none -mb-1">
          {number}
        </span>
        <div className="pb-2">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-charcoal tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mt-1">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <hr className="editorial-rule" />
    </div>
  );
}
