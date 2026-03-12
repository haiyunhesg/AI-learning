/*
 * DESIGN: Haiyun's Little Forest — Soft Blue-Green Nature Theme
 * Garden of Words (言叶之庭) anime-style imagery
 * Structure: Hero → About → Fun Facts → AI Diary (with comments) → Contact
 */

import Navigation from "@/components/Navigation";
import SectionHeader from "@/components/SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { trpc } from "@/lib/trpc";
import { useMemo, useState } from "react";
import {
  MapPin,
  Mail,
  Linkedin,
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
                Welcome to my little corner
              </p>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-forest-deep tracking-tight leading-[0.95] mb-2">
              Haiyun's
              <br />
              <span className="italic font-normal text-forest-teal">Little Forest</span>
            </h1>
          </Reveal>

          <Reveal delay={500}>
            <p className="font-body text-sm text-forest-text-light mt-2 mb-5">
              何海韵
            </p>
          </Reveal>

          <Reveal delay={600}>
            <p className="font-body text-base sm:text-lg text-forest-text-light leading-relaxed max-w-lg mb-6">
              A product manager / AI learner / content creator / ex-film worker / mother of a cat
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
                Explore
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
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader title="About Me" subtitle="A little bit about who I am" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-16 sm:mb-24">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-body text-base sm:text-lg leading-relaxed text-forest-text-light mb-5">
                Hi there! I'm Haiyun (何海韵), currently living in sunny Singapore. By day I'm a product manager at Shopee, Southeast Asia's biggest e-commerce platform, where I get to work on fun things like short videos, live streaming, and figuring out how to make online shopping more engaging.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p className="font-body text-base sm:text-lg leading-relaxed text-forest-text-light mb-5">
                My background is a mix of media and tech — I studied Media and Communication at City University of Hong Kong, which gave me a storyteller's perspective on building products. I care about the "why" behind every feature, not just the "how."
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="font-body text-base sm:text-lg leading-relaxed text-forest-text-light">
                Outside of work, I'm diving into AI, learning Japanese on Duolingo (almost 1000 days!), and taking care of my fluffy cat Hazelnut. I believe in staying curious and creating things that bring a little joy to the world.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:mt-4">
            <Reveal direction="right" delay={200}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={PORTRAIT_IMG}
                  alt="Haiyun in the forest, autumn vibes"
                  className="w-full aspect-[3/4] object-cover"
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
                What I Do
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Reveal delay={100}>
                <div className="p-5 sm:p-6 border border-border rounded-lg bg-forest-cream/50 hover:border-forest-teal-light/50 transition-colors duration-300">
                  <h4 className="font-body text-sm font-semibold text-forest-deep mb-2">
                    Shopee · Singapore
                  </h4>
                  <p className="font-mono text-[10px] tracking-wider text-forest-text-light/70 uppercase mb-3">
                    Product Management & Operations
                  </p>
                  <p className="font-body text-sm leading-relaxed text-forest-text-light">
                    Working on short video, live streaming, and e-commerce monetization. I help connect millions of users with content-driven shopping experiences across Southeast Asia.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="p-5 sm:p-6 border border-border rounded-lg bg-forest-cream/50 hover:border-forest-teal-light/50 transition-colors duration-300">
                  <h4 className="font-body text-sm font-semibold text-forest-deep mb-2">
                    Previous Experience
                  </h4>
                  <p className="font-mono text-[10px] tracking-wider text-forest-text-light/70 uppercase mb-3">
                    Product & Content Operations
                  </p>
                  <p className="font-body text-sm leading-relaxed text-forest-text-light">
                    Built my foundation across digital media, content strategy, and user engagement. Also spent time in the film industry — a chapter I'm still proud of!
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
                Where I Studied
              </h3>
            </div>

            <div className="p-5 sm:p-6 border border-border rounded-lg bg-forest-cream/50">
              <h4 className="font-body text-base font-semibold text-forest-deep mb-1">
                City University of Hong Kong
              </h4>
              <p className="font-body text-sm text-forest-teal mb-3">
                Department of Media and Communication
              </p>
              <p className="font-body text-sm leading-relaxed text-forest-text-light">
                This is where I fell in love with storytelling and learned how media shapes the way we see the world. It taught me to think about products as narratives — every feature tells a story to the user.
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
                Things I'm Good At
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {[
                "Product Strategy",
                "Short Video",
                "Live Streaming",
                "E-Commerce",
                "Content Monetization",
                "User Growth",
                "A/B Testing",
                "Data Analysis",
                "Cross-functional Collaboration",
                "Multimedia Storytelling",
                "Creator Ecosystems",
                "SEA Markets",
                "Agile",
                "Localization",
                "AI Tools",
              ].map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[11px] tracking-wide px-3.5 py-1.5 border border-border rounded-full text-forest-text-light hover:border-forest-teal-light hover:text-forest-teal transition-all duration-300 bg-white/40"
                >
                  {skill}
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
      title: `Duolingo ${streakDays}-Day Streak`,
      description: `I've been learning Japanese on Duolingo for ${streakDays} consecutive days (and counting!). My Japanese score is 85/100. Once I finish the course, I dream of living in Japan, attending a language school, and passing the JLPT N2 exam.`,
    },
    {
      emoji: "🌐",
      title: "The Website That Never Was",
      description:
        "I once tried building a personal website on Weebly. I got about halfway through before abandoning it entirely. Well... look at me now! (Thanks, AI.)",
    },
    {
      emoji: "🎬",
      title: "Former Film Industry Worker",
      description:
        "I used to work in the film industry and even have my own IMDb page! It was a fascinating world of storytelling that still influences how I think about products today.",
    },
    {
      emoji: "🐱",
      title: "Cat Mom to Hazelnut 榛宝",
      description:
        "I adopted a gorgeous long-haired cat named Hazelnut (榛宝). She's fluffy, dramatic, and the undisputed queen of my apartment. Permanent cat lover status: confirmed.",
    },
  ];

  return (
    <section id="funfacts" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 opacity-[0.04]">
        <img src={MEADOW_IMG} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader title="Fun Facts" subtitle="Some random things about me" />

        {/* Top row: Fun facts cards in a 2-column grid */}
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
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Hazelnut photo gallery — 3 portrait photos in a row */}
        <Reveal delay={facts.length * 80}>
          <div className="mt-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">🐱</span>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-forest-deep">
                Hazelnut 榛宝 Gallery
              </h3>
              <p className="font-body text-sm text-forest-text-light/70 ml-1">
                — the fluffy queen of my apartment
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { src: HAZELNUT_IMG, alt: "Hazelnut sitting on wood floor with a toy", caption: "Catch of the day" },
                { src: HAZELNUT_FLOOR_IMG, alt: "Hazelnut lying on the floor looking back", caption: "What do you want?" },
                { src: HAZELNUT_LADDER_IMG, alt: "Hazelnut sitting on a ladder looking up", caption: "Queen of the ladder" },
              ].map((photo, i) => (
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
          Comments ({comments?.length ?? 0})
        </h3>
      </div>

      {/* Comment form */}
      <form onSubmit={handleSubmit} className="mb-6 p-4 sm:p-5 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row gap-3 mb-3">
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Your name"
            maxLength={100}
            className="flex-1 sm:max-w-[200px] px-3 py-2 bg-white/10 border border-white/15 rounded-md text-sm text-white/90 placeholder:text-white/30 focus:outline-none focus:border-forest-teal-light/50 font-body"
          />
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Leave a comment..."
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
          {addComment.isPending ? "Sending..." : "Post Comment"}
        </button>
      </form>

      {/* Comments list */}
      {isLoading ? (
        <p className="text-sm text-white/40 italic font-body">Loading comments...</p>
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
        <p className="text-sm text-white/40 italic font-body">No comments yet. Be the first to say hi!</p>
      )}
    </div>
  );
}

/* ─── AI DIARY ─── */
function AIDiarySection() {
  return (
    <section id="diary" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0">
        <img src={OCEAN_IMG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest-deep/85" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader title="AI Diary" subtitle="My AI creation journal" light />

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
              Manus Built Me a Personal Website in Under an Hour
            </h3>

            {/* Post body */}
            <div className="space-y-4 font-body text-sm sm:text-base leading-relaxed text-white/70">
              <p>
                So lately I've been having a bit of an existential crisis about AI. You know the kind — "robots are coming for our jobs" type of anxiety. But then I thought: instead of panicking on the sidelines, why not jump in and play?
              </p>
              <p>
                That's how this website was born. I used Manus (with free credits they gave me, bless them) and in about thirty minutes, I went from "I should really make a personal website someday" to... well, this. The last time I tried building a website was on Weebly, and we all know how that ended. (Spoiler: it didn't.)
              </p>
              <p>
                Honestly, the whole experience was kind of magical. I just described what I wanted, and it appeared. Like ordering food delivery, but for code.
              </p>
              <p>
                Here's the plot twist though: the first version took maybe fifteen minutes. I just gave Manus my LinkedIn link, and boom — a decent-looking website appeared. But "decent" isn't really my style. So I spent another thirty-plus minutes tweaking prompts, adjusting the tone, swapping out the corporate-speak for something that actually sounds like me. Turns out, getting AI to match your personality takes longer than getting it to write your resume. Who knew?
              </p>
              <p>
                I'm planning to use this little corner to document my AI creation adventures going forward. Here's what I believe: AI shouldn't scare creators — it should empower them. Creativity is a deeply human thing, and tools like this just give us new brushes to paint with. The canvas is still ours.
              </p>
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
          <p className="font-body text-sm text-white/40 text-center mt-8 italic">
            More posts coming soon...
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
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader title="Say Hello" subtitle="Let's connect" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-body text-base sm:text-lg leading-relaxed text-forest-text-light mb-8">
                Whether it's about product ideas, AI experiments, film recommendations, or just cat photos — I'd love to hear from you. Drop me a message anytime!
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
                      Email
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
  return (
    <footer className="border-t border-border py-8 sm:py-10">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <TreePine size={15} className="text-forest-teal" />
            <p className="font-display text-sm font-semibold text-forest-deep">
              Haiyun's Little Forest
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
