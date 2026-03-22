/*
 * DESIGN: Haiyun's Little Forest — Soft Blue-Green Nature Theme
 * Hana & Alice / Our Little Sister film-style imagery
 * Structure: Hero → About → Fun Facts → AI Diary (with comments) → Contact
 * Full EN/CN bilingual support via useLang()
 */

import Navigation from "@/components/Navigation";
import SectionHeader from "@/components/SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLang } from "@/contexts/LanguageContext";
import { trpc } from "@/lib/trpc";
import { useMemo, useState } from "react";
import {
  MapPin,
  Mail,
  Linkedin,
  Github,
  ArrowUpRight,
  TreePine,
  Pen,
  Calendar,
  Send,
  MessageCircle,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";

/* ─── Image URLs (Hana & Alice film style) ─── */
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663429506689/5x8vi4uUHvhBMwKdnUb9Ct/hero-option-3-M7xwbJFk3GBFt3RQ8p5gq4.webp";
const GARDEN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663429506689/5x8vi4uUHvhBMwKdnUb9Ct/ha-garden-stream-dmUYWfNwbnAEQ4wQ6bqxpS.webp";
const OCEAN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663429506689/5x8vi4uUHvhBMwKdnUb9Ct/ha-ocean-coast-Fz5YVsgQkTrwjGSCJzwEve.webp";
const MEADOW_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663429506689/5x8vi4uUHvhBMwKdnUb9Ct/ha-meadow-light-JwQH6HDNzyyCSUmszfo9hf.webp";

/* ─── Personal Photos ─── */
const PORTRAIT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663429506689/5x8vi4uUHvhBMwKdnUb9Ct/haiyun-portrait_8aca6323.webp";
const HAZELNUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663429506689/5x8vi4uUHvhBMwKdnUb9Ct/hazelnut-edited_e42818fc.png";
const HAZELNUT_FLOOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663429506689/5x8vi4uUHvhBMwKdnUb9Ct/hazelnut-floor_ea717f57.jpg";
const HAZELNUT_LADDER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663429506689/5x8vi4uUHvhBMwKdnUb9Ct/hazelnut-ladder_e176554f.jpg";

/* ─── Reveal wrapper ─── */
function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const { ref, isVisible } = useScrollReveal(0.12);
  const translate =
    direction === "left"
      ? "translate-x-8"
      : direction === "right"
        ? "-translate-x-8"
        : "translate-y-8";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${translate}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── HERO ─── */
function HeroSection() {
  const { t, lang } = useLang();
  return (
    <section className="relative min-h-screen flex items-end pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-mist via-forest-mist/60 to-forest-mist/20" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="max-w-2xl">
          <Reveal delay={200}>
            <div className="flex items-center gap-2 mb-5">
              <TreePine size={16} className="text-forest-teal" />
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-forest-teal">
                {t("hero.welcome")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-forest-deep tracking-tight leading-[0.95] mb-2">
              {lang === "en" ? (
                <>
                  Haiyun's
                  <br />
                  <span className="italic font-normal text-forest-teal">Little Forest</span>
                </>
              ) : (
                <>
                  海韵的
                  <br />
                  <span className="italic font-normal text-forest-teal">小森林</span>
                </>
              )}
            </h1>
          </Reveal>

          <Reveal delay={500}>
            <p className="font-body text-sm text-forest-text-light mt-2 mb-5">
              {lang === "en" ? "何海韵" : "Haiyun HE"}
            </p>
          </Reveal>

          <Reveal delay={600}>
            <p className="font-body text-base sm:text-lg text-forest-text-light leading-relaxed max-w-lg mb-6">
              {t("hero.tagline")}
            </p>
          </Reveal>

          <Reveal delay={800}>
            <div className="flex flex-wrap items-center gap-5">
              <span className="flex items-center gap-2 font-mono text-[11px] tracking-wider text-forest-text-light/70">
                <MapPin size={13} className="text-forest-teal" />
                Singapore
              </span>
              <a
                href="#about"
                className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-forest-deep hover:text-forest-teal transition-colors duration-300"
              >
                {t("hero.explore")}
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-forest-teal/30 animate-pulse" />
      </div>
    </section>
  );
}

/* ─── ABOUT (includes experience, education, skills) ─── */
function AboutSection() {
  const { t, lang } = useLang();

  const skillKeys = [
    "skill.product_strategy",
    "skill.short_video",
    "skill.live_streaming",
    "skill.ecommerce",
    "skill.content_monetization",
    "skill.user_growth",
    "skill.ab_testing",
    "skill.data_analysis",
    "skill.cross_functional",
    "skill.storytelling",
    "skill.creator_ecosystems",
    "skill.sea_markets",
    "skill.agile",
    "skill.localization",
    "skill.ai_tools",
  ];

  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader title={t("about.title")} subtitle={t("about.subtitle")} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-16 sm:mb-24">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-body text-base sm:text-lg leading-relaxed text-forest-text-light mb-5">
                {t("about.p1")}
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p className="font-body text-base sm:text-lg leading-relaxed text-forest-text-light mb-5">
                {t("about.p2")}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="font-body text-base sm:text-lg leading-relaxed text-forest-text-light">
                {t("about.p3")}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:mt-4">
            <Reveal direction="right" delay={200}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src={PORTRAIT_IMG}
                  alt="Haiyun in the forest, autumn vibes"
                  className="w-full aspect-[3/4] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Experience */}
        <Reveal>
          <div className="mb-14 sm:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase size={18} className="text-forest-teal" />
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-forest-deep">
                {t("exp.title")}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Reveal delay={100}>
                <div className="p-5 sm:p-6 border border-border rounded-lg bg-forest-cream/50 hover:border-forest-teal-light/50 transition-colors duration-300">
                  <h4 className="font-body text-sm font-semibold text-forest-deep mb-2">
                    {t("exp.shopee.title")}
                  </h4>
                  <p className="font-mono text-[10px] tracking-wider text-forest-text-light/70 uppercase mb-3">
                    {t("exp.shopee.role")}
                  </p>
                  <p className="font-body text-sm leading-relaxed text-forest-text-light">
                    {t("exp.shopee.desc")}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="p-5 sm:p-6 border border-border rounded-lg bg-forest-cream/50 hover:border-forest-teal-light/50 transition-colors duration-300">
                  <h4 className="font-body text-sm font-semibold text-forest-deep mb-2">
                    {t("exp.prev.title")}
                  </h4>
                  <p className="font-mono text-[10px] tracking-wider text-forest-text-light/70 uppercase mb-3">
                    {t("exp.prev.role")}
                  </p>
                  <p className="font-body text-sm leading-relaxed text-forest-text-light">
                    {t("exp.prev.desc")}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>

        {/* Education */}
        <Reveal>
          <div className="mb-14 sm:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={18} className="text-forest-teal" />
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-forest-deep">
                {t("edu.title")}
              </h3>
            </div>

            <div className="p-5 sm:p-6 border border-border rounded-lg bg-forest-cream/50">
              <h4 className="font-body text-base font-semibold text-forest-deep mb-1">
                {t("edu.school")}
              </h4>
              <p className="font-body text-sm text-forest-teal mb-3">
                {t("edu.dept")}
              </p>
              <p className="font-body text-sm leading-relaxed text-forest-text-light">
                {t("edu.desc")}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Skills */}
        <Reveal>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={18} className="text-forest-teal" />
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-forest-deep">
                {t("skills.title")}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {skillKeys.map((key) => (
                <span
                  key={key}
                  className="font-mono text-[11px] tracking-wide px-3.5 py-1.5 border border-border rounded-full text-forest-text-light hover:border-forest-teal-light hover:text-forest-teal transition-all duration-300 bg-white/40"
                >
                  {t(key)}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── FUN FACTS ─── */
function FunFactsSection() {
  const { t, lang } = useLang();

  const streakDays = useMemo(() => {
    const baseDate = new Date("2026-03-12");
    const baseStreak = 965;
    const today = new Date();
    const diffTime = today.getTime() - baseDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return baseStreak + Math.max(0, diffDays);
  }, []);

  const facts = [
    {
      emoji: "\u{1F989}",
      title: `${t("ff.duo.title_prefix")} ${streakDays}${t("ff.duo.title_suffix")}`,
      description: t("ff.duo.desc").replace("{days}", String(streakDays)),
    },
    {
      emoji: "\u{1F310}",
      title: t("ff.web.title"),
      description: t("ff.web.desc"),
    },
    {
      emoji: "\u{1F3AC}",
      title: t("ff.film.title"),
      description: t("ff.film.desc"),
    },
    {
      emoji: "\u{2728}",
      title: t("ff.wish.title"),
      description: t("ff.wish.desc"),
    },
    {
      emoji: "\u{1F3B5}",
      title: t("ff.music.title"),
      description: t("ff.music.desc"),
      hasLinks: true,
    },
    {
      emoji: "\u{1F431}",
      title: t("ff.cat.title"),
      description: t("ff.cat.desc"),
    },
  ];

  const catPhotos = [
    { src: HAZELNUT_IMG, alt: "Hazelnut with a toy on wood floor", caption: t("ff.photo1") },
    { src: HAZELNUT_FLOOR_IMG, alt: "Hazelnut lying on the floor looking back", caption: t("ff.photo2") },
    { src: HAZELNUT_LADDER_IMG, alt: "Hazelnut sitting on a ladder looking up", caption: t("ff.photo3") },
  ];

  return (
    <section id="funfacts" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 opacity-[0.04]">
        <img src={MEADOW_IMG} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader title={t("ff.title")} subtitle={t("ff.subtitle")} />

        {/* Fun facts cards in a 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {facts.map((fact, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="group flex gap-4 p-5 sm:p-6 border border-border rounded-lg bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:border-forest-teal-light/40 transition-all duration-400 h-full">
                <div className="shrink-0 w-10 h-10 rounded-full bg-forest-mist flex items-center justify-center text-lg">
                  {fact.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="font-body text-sm sm:text-base font-semibold text-forest-deep mb-1.5 group-hover:text-forest-teal transition-colors">
                    {fact.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-forest-text-light">
                    {fact.description}
                  </p>
                  {(fact as any).hasLinks && (
                    <div className="flex flex-wrap gap-3 mt-3">
                      <a
                        href="https://open.spotify.com/playlist/6J8KKxI8NRnZ6rUPpE8Jvv?si=8c7c08310e6a4bd0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-body rounded-full border border-forest-teal-light/30 text-forest-teal hover:bg-forest-teal/10 transition-colors duration-300"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                        {t("ff.music.playlist")}
                      </a>
                      <a
                        href="https://open.spotify.com/track/3pUIhxyUFzuhRAFEJqtees?si=c400d443716e4a22"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-body rounded-full border border-forest-teal-light/30 text-forest-teal hover:bg-forest-teal/10 transition-colors duration-300"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                        {t("ff.music.song")}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Hazelnut photo gallery — 3 portrait photos */}
        <Reveal delay={facts.length * 80}>
          <div className="mt-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">{"\u{1F431}"}</span>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-forest-deep">
                {t("ff.gallery.title")}
              </h3>
              <p className="font-body text-sm text-forest-text-light/70 ml-1">
                {t("ff.gallery.subtitle")}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {catPhotos.map((photo, i) => (
                <div key={i} className="group relative rounded-xl overflow-hidden shadow-md bg-white/60">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 font-body text-[10px] sm:text-xs text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── COMMENT SECTION ─── */
function CommentSection() {
  const { t } = useLang();
  const { data: comments, isLoading, refetch } = trpc.comments.list.useQuery();
  const addComment = trpc.comments.add.useMutation({
    onSuccess: () => {
      setNickname("");
      setContent("");
      refetch();
    },
  });
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim() || !content.trim()) return;
    addComment.mutate({ nickname: nickname.trim(), content: content.trim() });
  };

  return (
    <div className="mt-10">
      <div className="flex items-center gap-2 mb-6">
        <MessageCircle size={16} className="text-forest-teal-light" />
        <h3 className="font-body text-sm font-semibold text-white/80">
          {t("comments.title")} ({comments?.length ?? 0})
        </h3>
      </div>

      {/* Comment form */}
      <form onSubmit={handleSubmit} className="mb-6 p-4 sm:p-5 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row gap-3 mb-3">
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder={t("comments.name")}
            maxLength={100}
            className="flex-1 sm:max-w-[200px] px-3 py-2 bg-white/10 border border-white/15 rounded-md text-sm text-white/90 placeholder:text-white/30 focus:outline-none focus:border-forest-teal-light/50 font-body"
          />
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={t("comments.placeholder")}
          maxLength={2000}
          rows={3}
          className="w-full px-3 py-2 bg-white/10 border border-white/15 rounded-md text-sm text-white/90 placeholder:text-white/30 focus:outline-none focus:border-forest-teal-light/50 resize-none font-body mb-3"
        />
        <button
          type="submit"
          disabled={addComment.isPending || !nickname.trim() || !content.trim()}
          className="inline-flex items-center gap-2 px-4 py-2 bg-forest-teal/80 hover:bg-forest-teal text-white text-sm rounded-md transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed font-body"
        >
          <Send size={13} />
          {addComment.isPending ? t("comments.sending") : t("comments.submit")}
        </button>
      </form>

      {/* Comments list */}
      {isLoading ? (
        <p className="text-sm text-white/40 italic font-body">{t("comments.loading")}</p>
      ) : comments && comments.length > 0 ? (
        <div className="space-y-3">
          {comments.map((c) => (
            <div key={c.id} className="p-4 border border-white/8 rounded-lg bg-white/5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-forest-teal/20 flex items-center justify-center">
                  <span className="text-[10px] text-forest-teal-light font-semibold">
                    {c.nickname.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="font-body text-xs font-medium text-white/70">{c.nickname}</span>
                <span className="font-mono text-[10px] text-white/30">
                  {new Date(c.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <p className="font-body text-sm leading-relaxed text-white/60">{c.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-white/40 italic font-body">{t("comments.empty")}</p>
      )}
    </div>
  );
}

/* ─── AI DIARY ─── */
function AIDiarySection() {
  const { t } = useLang();
  return (
    <section id="diary" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0">
        <img src={OCEAN_IMG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest-deep/85" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader title={t("diary.title")} subtitle={t("diary.subtitle")} light />

        <Reveal>
          <article className="p-6 sm:p-8 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
            {/* Post meta */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-forest-teal/20 flex items-center justify-center">
                <Pen size={14} className="text-forest-teal-light" />
              </div>
              <div>
                <p className="font-body text-xs font-medium text-white/80">Haiyun</p>
                <p className="font-mono text-[10px] text-white/40 flex items-center gap-1.5">
                  <Calendar size={10} />
                  March 12, 2026
                </p>
              </div>
            </div>

            {/* Post title */}
            <h3 className="font-display text-lg sm:text-xl font-semibold text-white/90 mb-4 leading-snug">
              {t("diary.post1.title")}
            </h3>

            {/* Post body */}
            <div className="space-y-4 font-body text-sm sm:text-base leading-relaxed text-white/70">
              <p>{t("diary.post1.p1")}</p>
              <p>{t("diary.post1.p2")}</p>
              <p>{t("diary.post1.p3")}</p>
              <p>{t("diary.post1.p4")}</p>
              <p>{t("diary.post1.p5")}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/10">
              {["AI", "Manus", "creativity", "personal website", "first post"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-wider px-3 py-1 rounded-full border border-white/15 text-white/50"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal delay={200}>
          <article className="p-6 sm:p-8 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm mt-8">
            {/* Post meta */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-forest-teal/20 flex items-center justify-center">
                <Pen size={14} className="text-forest-teal-light" />
              </div>
              <div>
                <p className="font-body text-xs font-medium text-white/80">Haiyun</p>
                <p className="font-mono text-[10px] text-white/40 flex items-center gap-1.5">
                  <Calendar size={10} />
                  March 22, 2026
                </p>
              </div>
            </div>

            {/* Post title */}
            <h3 className="font-display text-lg sm:text-xl font-semibold text-white/90 mb-4 leading-snug">
              {t("diary.post2.title")}
            </h3>

            {/* Post body */}
            <div className="space-y-4 font-body text-sm sm:text-base leading-relaxed text-white/70">
              <p>{t("diary.post2.p1")}</p>
              <p>{t("diary.post2.p2")}</p>
              <p>{t("diary.post2.p3")}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/10">
              {["AI assistants", "personal growth", "learning", "productivity", "gems"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-wider px-3 py-1 rounded-full border border-white/15 text-white/50"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal delay={300}>
          <p className="font-body text-sm text-white/40 text-center mt-8 italic">
            {t("diary.more")}
          </p>
        </Reveal>

        {/* Comment Section */}
        <Reveal delay={300}>
          <CommentSection />
        </Reveal>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function ContactSection() {
  const { t } = useLang();
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-body text-base sm:text-lg leading-relaxed text-forest-text-light mb-8">
                {t("contact.desc")}
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="space-y-3">
                <a
                  href="mailto:haiyunhe2@gmail.com"
                  className="group flex items-center gap-4 p-4 border border-border rounded-lg hover:border-forest-teal-light/50 bg-white/40 transition-all duration-300"
                >
                  <Mail size={18} className="text-forest-teal" />
                  <div className="flex-1">
                    <p className="font-body text-sm font-medium text-forest-deep group-hover:text-forest-teal transition-colors">
                      {t("contact.email")}
                    </p>
                    <p className="font-mono text-[10px] text-forest-text-light/70">
                      haiyunhe2@gmail.com
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-forest-text-light/50 group-hover:text-forest-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/haiyunhe2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 border border-border rounded-lg hover:border-forest-teal-light/50 bg-white/40 transition-all duration-300"
                >
                  <Linkedin size={18} className="text-forest-teal" />
                  <div className="flex-1">
                    <p className="font-body text-sm font-medium text-forest-deep group-hover:text-forest-teal transition-colors">
                      LinkedIn
                    </p>
                    <p className="font-mono text-[10px] text-forest-text-light/70">
                      linkedin.com/in/haiyunhe2
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-forest-text-light/50 group-hover:text-forest-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </a>

                <a
                  href="https://github.com/haiyunhesg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 border border-border rounded-lg hover:border-forest-teal-light/50 bg-white/40 transition-all duration-300"
                >
                  <Github size={18} className="text-forest-teal" />
                  <div className="flex-1">
                    <p className="font-body text-sm font-medium text-forest-deep group-hover:text-forest-teal transition-colors">
                      GitHub
                    </p>
                    <p className="font-mono text-[10px] text-forest-text-light/70">
                      github.com/haiyunhesg
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-forest-text-light/50 group-hover:text-forest-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border py-8 sm:py-10">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <TreePine size={15} className="text-forest-teal" />
            <p className="font-display text-sm font-semibold text-forest-deep">
              {t("footer.brand")}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/haiyunhe2"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] text-forest-text-light/60 hover:text-forest-teal transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/haiyunhesg"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] text-forest-text-light/60 hover:text-forest-teal transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="mailto:haiyunhe2@gmail.com"
              className="font-mono text-[10px] text-forest-text-light/60 hover:text-forest-teal transition-colors duration-300"
            >
              Email
            </a>
            <span className="font-mono text-[10px] text-forest-text-light/40">
              &copy; {new Date().getFullYear()} Haiyun HE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <div className="min-h-screen bg-forest-mist">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FunFactsSection />
      <AIDiarySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
