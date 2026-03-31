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

/* ─── New Generated Unified Illustrations ─── */
const DUO_IMG = "/duolingo-study.png";
const WEB_IMG = "/website-survivor.png";
const FILM_IMG = "/film-industry.png";
const FREEDOM_IMG = "/freedom-dreamer.png";
const MUSIC_IMG = "/hidden-vocalist.png";

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

/* ─── ABOUT ─── */
function AboutSection() {
  const { t } = useLang();
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
              <p className="font-body text-base sm:text-lg leading-relaxed text-forest-text-light">
                {t("about.p2")}
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:mt-4">
            <Reveal direction="right" delay={200}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src={PORTRAIT_IMG}
                  alt="Haiyun in the forest"
                  className="w-full aspect-[3/4] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FUN FACTS ─── */
function FunFactsSection() {
  const { t, lang } = useLang();
  const [activeCard, setActiveCard] = useState<number | null>(null);

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
      emoji: "🦉",
      title: `${t("ff.duo.title_prefix")} ${streakDays}${t("ff.duo.title_suffix")}`,
      description: t("ff.duo.desc"),
      image: DUO_IMG,
    },
    {
      emoji: "🌐",
      title: t("ff.web.title"),
      description: t("ff.web.desc"),
      image: WEB_IMG,
    },
    {
      emoji: "🎬",
      title: t("ff.film.title"),
      description: t("ff.film.desc"),
      image: FILM_IMG,
    },
    {
      emoji: "✨",
      title: t("ff.wish.title"),
      description: t("ff.wish.desc"),
      image: FREEDOM_IMG,
    },
    {
      emoji: "🎵",
      title: t("ff.music.title"),
      description: t("ff.music.desc"),
      image: MUSIC_IMG,
      hasLinks: true,
    },
    {
      emoji: "🐱",
      title: t("ff.cat.title"),
      description: t("ff.cat.desc"),
      image: HAZELNUT_IMG,
    },
  ];

  const catPhotos = [
    { src: HAZELNUT_IMG, alt: "Hazelnut 1", caption: t("ff.photo1") },
    { src: HAZELNUT_FLOOR_IMG, alt: "Hazelnut 2", caption: t("ff.photo2") },
    { src: HAZELNUT_LADDER_IMG, alt: "Hazelnut 3", caption: t("ff.photo3") },
  ];

  return (
    <section id="funfacts" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 opacity-[0.04]">
        <img src={MEADOW_IMG} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader title={t("ff.title")} subtitle={t("ff.subtitle")} />

        {/* Illustration Card Box - Fixed size for both states */}
        <div className="max-w-2xl mx-auto mb-16">
          <Reveal>
            <div className="relative aspect-[4/3] w-full border-2 border-dashed border-forest-teal/20 rounded-2xl overflow-hidden bg-white/40 backdrop-blur-sm shadow-sm group">
              {activeCard === null ? (
                <div 
                  className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer hover:bg-forest-teal/5 transition-colors duration-300"
                  onClick={() => setActiveCard(Math.floor(Math.random() * facts.length))}
                >
                  <div className="w-16 h-16 rounded-full bg-forest-mist flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="text-forest-teal" size={24} />
                  </div>
                  <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-forest-teal font-bold">
                    Draw a card to see the illustration
                  </p>
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col">
                  <div className="relative flex-1 overflow-hidden">
                    <img 
                      src={facts[activeCard].image} 
                      alt="" 
                      className="w-full h-full object-cover animate-in fade-in zoom-in duration-700"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-xl shadow-sm">
                      {facts[activeCard].emoji}
                    </div>
                    <button 
                      onClick={() => setActiveCard(null)}
                      className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-mono tracking-widest uppercase text-forest-deep hover:bg-forest-teal hover:text-white transition-all shadow-sm"
                    >
                      Reset
                    </button>
                  </div>
                  <div className="p-6 bg-white/80 backdrop-blur-md">
                    <h3 className="font-display text-xl font-semibold text-forest-deep mb-2">
                      {facts[activeCard].title}
                    </h3>
                    <p className="font-body text-sm text-forest-text-light leading-relaxed">
                      {facts[activeCard].description}
                    </p>
                    {facts[activeCard].hasLinks && (
                      <div className="flex gap-3 mt-4">
                        <a href="https://open.spotify.com/playlist/6J8KKxI8NRnZ6rUPpE8Jvv" target="_blank" className="text-[10px] font-mono uppercase text-forest-teal hover:underline">Playlist</a>
                        <a href="https://open.spotify.com/track/3pUIhxyUFzuhRAFEJqtees" target="_blank" className="text-[10px] font-mono uppercase text-forest-teal hover:underline">Track</a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {facts.map((fact, i) => (
            <Reveal key={i} delay={i * 80}>
              <div 
                className={`group p-6 border rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-400 cursor-pointer h-full ${activeCard === i ? 'border-forest-teal ring-1 ring-forest-teal' : 'border-border'}`}
                onClick={() => setActiveCard(i)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-forest-mist flex items-center justify-center text-lg">
                    {fact.emoji}
                  </div>
                  <h3 className="font-body text-sm font-semibold text-forest-deep group-hover:text-forest-teal transition-colors">
                    {fact.title}
                  </h3>
                </div>
                <p className="font-body text-xs leading-relaxed text-forest-text-light line-clamp-2">
                  {fact.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Gallery */}
        <Reveal delay={400}>
          <div className="mt-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-lg">🐱</span>
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

      <form onSubmit={handleSubmit} className="mb-6 p-4 sm:p-5 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row gap-3 mb-3">
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder={t("comments.name")}
            className="flex-1 sm:max-w-[200px] px-3 py-2 bg-white/10 border border-white/15 rounded-md text-sm text-white/90 placeholder:text-white/30 focus:outline-none focus:border-forest-teal-light/50 font-body"
          />
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={t("comments.placeholder")}
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

            <h3 className="font-display text-lg sm:text-xl font-semibold text-white/90 mb-4 leading-snug">
              {t("diary.post1.title")}
            </h3>

            <div className="space-y-4 font-body text-sm sm:text-base leading-relaxed text-white/70">
              <p>{t("diary.post1.p1")}</p>
              <p>{t("diary.post1.p2")}</p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={200}>
          <p className="font-body text-sm text-white/40 text-center mt-8 italic">
            {t("diary.more")}
          </p>
        </Reveal>

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
                I'm always open to interesting conversations, collaboration opportunities, or just a friendly 'hello'. Feel free to reach out through any of these channels:
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="space-y-3">
                <a href="mailto:haiyunhe2@gmail.com" className="group flex items-center gap-4 p-4 border border-border rounded-lg hover:border-forest-teal-light/50 bg-white/40 transition-all duration-300">
                  <Mail size={18} className="text-forest-teal" />
                  <div className="flex-1">
                    <p className="font-body text-sm font-medium text-forest-deep group-hover:text-forest-teal transition-colors">Email</p>
                    <p className="font-mono text-[10px] text-forest-text-light/70">haiyunhe2@gmail.com</p>
                  </div>
                  <ArrowUpRight size={14} className="text-forest-text-light/50 group-hover:text-forest-teal transition-all duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/haiyunhe2" target="_blank" className="group flex items-center gap-4 p-4 border border-border rounded-lg hover:border-forest-teal-light/50 bg-white/40 transition-all duration-300">
                  <Linkedin size={18} className="text-forest-teal" />
                  <div className="flex-1">
                    <p className="font-body text-sm font-medium text-forest-deep group-hover:text-forest-teal transition-colors">LinkedIn</p>
                    <p className="font-mono text-[10px] text-forest-text-light/70">linkedin.com/in/haiyunhe2</p>
                  </div>
                  <ArrowUpRight size={14} className="text-forest-text-light/50 group-hover:text-forest-teal transition-all duration-300" />
                </a>
                <a href="https://github.com/haiyunhesg" target="_blank" className="group flex items-center gap-4 p-4 border border-border rounded-lg hover:border-forest-teal-light/50 bg-white/40 transition-all duration-300">
                  <Github size={18} className="text-forest-teal" />
                  <div className="flex-1">
                    <p className="font-body text-sm font-medium text-forest-deep group-hover:text-forest-teal transition-colors">GitHub</p>
                    <p className="font-mono text-[10px] text-forest-text-light/70">github.com/haiyunhesg</p>
                  </div>
                  <ArrowUpRight size={14} className="text-forest-text-light/50 group-hover:text-forest-teal transition-all duration-300" />
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
            <p className="font-display text-sm font-semibold text-forest-deep">{t("footer.brand")}</p>
          </div>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[10px] text-forest-text-light/40">&copy; {new Date().getFullYear()} Haiyun HE</span>
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
