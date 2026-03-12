/*
 * DESIGN: Editorial Longform — Magazine-Style Portfolio
 * Playfair Display headlines, Source Sans 3 body, JetBrains Mono details.
 * Warm cream (#F5F0EB) background, charcoal (#1A1A1A) text, burnt sienna (#C45D3E) accent.
 * Asymmetric layouts, oversized section numbers, scroll-driven reveals.
 */

import Navigation from "@/components/Navigation";
import SectionHeader from "@/components/SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Mail,
  Linkedin,
  ArrowUpRight,
  Play,
  ShoppingBag,
  TrendingUp,
  Video,
  Radio,
  BarChart3,
  Layers,
  Globe,
  Sparkles,
  Megaphone,
  Users,
  Lightbulb,
} from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663429506689/5x8vi4uUHvhBMwKdnUb9Ct/hero-editorial-8VvWHSnNqpLTYHQVw59ENe.webp";
const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663429506689/5x8vi4uUHvhBMwKdnUb9Ct/about-section-VFtMFfzXCRXhxe4ycbta7v.webp";
const EXPERIENCE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663429506689/5x8vi4uUHvhBMwKdnUb9Ct/experience-bg-JZSdnFYLxD7jks92eg7mPj.webp";
const SKILLS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663429506689/5x8vi4uUHvhBMwKdnUb9Ct/skills-pattern-E23obqKbwiqvdcMx2ieMyd.webp";

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
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/70 to-cream/30" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="max-w-3xl">
          {/* Mono tag */}
          <Reveal delay={200}>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-sienna mb-6">
              Product Management & Operations
            </p>
          </Reveal>

          {/* Name */}
          <Reveal delay={400}>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-charcoal tracking-tight leading-[0.95] mb-6">
              Haiyun
              <br />
              <span className="italic font-normal text-sienna">HE</span>
            </h1>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={600}>
            <p className="font-body text-lg sm:text-xl text-charcoal-light leading-relaxed max-w-xl mb-8">
              Multimedia Storyteller specializing in short video, live streaming,
              e-commerce, and monetization products. Based in Singapore.
            </p>
          </Reveal>

          {/* Location + CTA */}
          <Reveal delay={800}>
            <div className="flex flex-wrap items-center gap-6">
              <span className="flex items-center gap-2 font-mono text-xs tracking-wider text-warm-gray">
                <MapPin size={14} className="text-sienna" />
                Singapore
              </span>
              <a
                href="#about"
                className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-charcoal hover:text-sienna transition-colors duration-300"
              >
                Read more
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-sienna/40 animate-pulse" />
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader number="01" title="About" subtitle="Who I Am" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Text column — offset left */}
          <div className="lg:col-span-7 lg:pr-8">
            <Reveal>
              <p className="pull-quote text-xl sm:text-2xl mb-8">
                "Building products at the intersection of commerce, content, and community."
              </p>
            </Reveal>

            <Reveal delay={150}>
              <p className="font-body text-base sm:text-lg leading-relaxed text-charcoal-light mb-6">
                I am a Product Management & Operations professional with deep expertise in
                short-form video, live streaming, e-commerce, and monetization strategies.
                Currently based in Singapore, I work at Shopee — Southeast Asia's leading
                e-commerce platform — where I drive product initiatives that connect millions
                of users with engaging content-driven shopping experiences.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className="font-body text-base sm:text-lg leading-relaxed text-charcoal-light mb-6">
                My background bridges media and technology. With a foundation in Media and
                Communication from City University of Hong Kong, I bring a unique lens to
                product development — understanding not just the technical architecture, but
                the human stories that make products resonate.
              </p>
            </Reveal>

            <Reveal delay={450}>
              <p className="font-body text-base sm:text-lg leading-relaxed text-charcoal-light">
                As a Multimedia Storyteller, I believe the best products are narratives —
                they guide users through experiences that feel intuitive, delightful, and
                meaningful. This philosophy shapes everything I build.
              </p>
            </Reveal>
          </div>

          {/* Image column — offset right */}
          <div className="lg:col-span-5 lg:mt-12">
            <Reveal direction="right" delay={200}>
              <div className="relative">
                <img
                  src={ABOUT_IMG}
                  alt="Singapore skyline at golden hour"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-4 -left-4 bg-cream px-4 py-3">
                  <p className="font-mono text-[10px] tracking-widest uppercase text-warm-gray">
                    Singapore — Home Base
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── EXPERIENCE ─── */
function ExperienceSection() {
  const experiences = [
    {
      company: "Shopee",
      role: "Product Management & Operations",
      period: "Current",
      location: "Singapore",
      description:
        "Leading product initiatives in short video, live streaming, and e-commerce monetization at Southeast Asia's largest e-commerce platform. Driving content-commerce integration strategies that enhance user engagement and merchant growth across multiple markets.",
      highlights: [
        "Short video product strategy and feature development",
        "Live streaming commerce operations and optimization",
        "E-commerce monetization product management",
        "Cross-functional collaboration with engineering, design, and business teams",
      ],
      icon: ShoppingBag,
    },
    {
      company: "Previous Roles",
      role: "Product & Operations",
      period: "Prior Experience",
      location: "Various",
      description:
        "Built a strong foundation in product management and operations across multiple organizations, developing expertise in digital media, content strategy, and user engagement before joining Shopee.",
      highlights: [
        "Digital media product development",
        "Content operations and strategy",
        "User growth and engagement optimization",
        "Data-driven decision making",
      ],
      icon: Briefcase,
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-32 relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.04]">
        <img src={EXPERIENCE_IMG} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader number="02" title="Experience" subtitle="Career Journey" />

        <div className="space-y-16 sm:space-y-24">
          {experiences.map((exp, i) => (
            <Reveal key={i} delay={i * 150} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Meta column */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 mb-3">
                    <exp.icon size={18} className="text-sienna" />
                    <span className="font-mono text-[10px] tracking-widest uppercase text-warm-gray">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-charcoal mb-1">
                    {exp.company}
                  </h3>
                  <p className="font-body text-base text-sienna font-medium mb-1">
                    {exp.role}
                  </p>
                  <p className="font-mono text-xs text-warm-gray flex items-center gap-1.5">
                    <MapPin size={12} />
                    {exp.location}
                  </p>
                </div>

                {/* Content column */}
                <div className="lg:col-span-8 lg:border-l lg:border-border lg:pl-12">
                  <p className="font-body text-base sm:text-lg leading-relaxed text-charcoal-light mb-6">
                    {exp.description}
                  </p>
                  <ul className="space-y-3">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 font-body text-sm text-charcoal-light"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-sienna mt-2 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── EDUCATION ─── */
function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-32 bg-charcoal text-warm-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-12 sm:mb-16">
          <Reveal>
            <div className="flex items-end gap-4 sm:gap-6 mb-4">
              <span className="font-display text-6xl sm:text-8xl lg:text-9xl font-light italic leading-none -mb-1 text-warm-white/10">
                03
              </span>
              <div className="pb-2">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-warm-white tracking-tight">
                  Education
                </h2>
                <p className="font-mono text-xs tracking-widest uppercase text-warm-gray mt-1">
                  Academic Foundation
                </p>
              </div>
            </div>
            <hr className="border-none h-px bg-gradient-to-r from-sienna/40 to-warm-white/10" />
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap size={20} className="text-sienna-light" />
                  <span className="font-mono text-[10px] tracking-widest uppercase text-warm-gray">
                    Alma Mater
                  </span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-semibold text-warm-white mb-2">
                  City University of Hong Kong
                </h3>
                <p className="font-body text-lg text-sienna-light font-medium mb-4">
                  Department of Media and Communication
                </p>
                <p className="font-body text-base leading-relaxed text-warm-gray">
                  Developed a strong foundation in media theory, communication strategies,
                  and digital storytelling. This academic background provides a unique
                  perspective on product development — understanding how narratives, user
                  psychology, and media consumption patterns shape digital experiences.
                </p>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="border-l-2 border-sienna/30 pl-6">
                <p className="font-display text-lg italic text-warm-gray leading-relaxed">
                  "The intersection of media and technology is where the most compelling
                  products are born — understanding both the message and the medium."
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex items-center">
            <Reveal direction="right" delay={200}>
              <div className="space-y-6 w-full">
                {[
                  { label: "Media Theory", detail: "Communication frameworks & audience analysis" },
                  { label: "Digital Storytelling", detail: "Narrative design for digital platforms" },
                  { label: "Content Strategy", detail: "Multi-platform content planning" },
                  { label: "Research Methods", detail: "Quantitative & qualitative approaches" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 p-4 border border-warm-white/10 hover:border-sienna/30 transition-colors duration-300"
                  >
                    <span className="font-mono text-xs text-sienna-light mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-body text-sm font-medium text-warm-white group-hover:text-sienna-light transition-colors">
                        {item.label}
                      </p>
                      <p className="font-mono text-[10px] text-warm-gray mt-0.5">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SKILLS ─── */
function SkillsSection() {
  const skillCategories = [
    {
      title: "Product Management",
      icon: Layers,
      skills: [
        "Product Strategy & Roadmapping",
        "Feature Prioritization",
        "A/B Testing & Experimentation",
        "User Research & Insights",
        "Stakeholder Management",
      ],
    },
    {
      title: "Content & Media",
      icon: Video,
      skills: [
        "Short Video Strategy",
        "Live Streaming Operations",
        "Multimedia Storytelling",
        "Content Monetization",
        "Creator Ecosystem Management",
      ],
    },
    {
      title: "E-Commerce",
      icon: ShoppingBag,
      skills: [
        "E-Commerce Operations",
        "Marketplace Dynamics",
        "Conversion Optimization",
        "Merchant Growth Strategy",
        "Payment & Monetization",
      ],
    },
    {
      title: "Growth & Analytics",
      icon: TrendingUp,
      skills: [
        "Data-Driven Decision Making",
        "Growth Hacking",
        "User Engagement Metrics",
        "Funnel Analysis",
        "Market Research",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 relative">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <img src={SKILLS_IMG} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader number="04" title="Skills" subtitle="Core Competencies" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((cat, i) => (
            <Reveal key={i} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="group p-6 sm:p-8 border border-border hover:border-sienna/30 bg-warm-white/50 backdrop-blur-sm transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <cat.icon size={20} className="text-sienna" />
                  <h3 className="font-display text-xl font-semibold text-charcoal">
                    {cat.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {cat.skills.map((skill, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 font-body text-sm text-charcoal-light group-hover:text-charcoal transition-colors duration-300"
                    >
                      <span className="w-6 h-px bg-sienna/40 group-hover:w-8 transition-all duration-300" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Additional expertise tags */}
        <Reveal delay={500}>
          <div className="mt-16 pt-12 border-t border-border">
            <p className="font-mono text-xs tracking-widest uppercase text-warm-gray mb-6">
              Additional Expertise
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Cross-functional Leadership",
                "Agile Methodology",
                "SEA Market Expertise",
                "Platform Ecosystems",
                "Content-Commerce Integration",
                "User Acquisition",
                "Retention Strategy",
                "Localization",
                "Digital Transformation",
                "Strategic Partnerships",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="font-mono text-[11px] tracking-wide px-4 py-2 border border-border text-charcoal-light hover:border-sienna/40 hover:text-sienna transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── HIGHLIGHTS ─── */
function HighlightsSection() {
  const highlights = [
    {
      icon: Play,
      number: "Short Video",
      label: "Product Strategy",
      description: "Driving short-form video features that captivate millions of users across Southeast Asian markets.",
    },
    {
      icon: Radio,
      number: "Live Streaming",
      label: "Commerce Innovation",
      description: "Pioneering live commerce experiences that bridge entertainment and shopping.",
    },
    {
      icon: Globe,
      number: "Multi-Market",
      label: "Regional Operations",
      description: "Managing product rollouts across diverse Southeast Asian markets with localized strategies.",
    },
    {
      icon: BarChart3,
      number: "Data-Driven",
      label: "Product Decisions",
      description: "Leveraging analytics and experimentation to optimize user engagement and revenue.",
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-charcoal/[0.03]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="font-mono text-xs tracking-widest uppercase text-sienna mb-3">
            What I Do
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal tracking-tight mb-16">
            Crafting Digital Experiences
            <br />
            <span className="italic font-normal text-charcoal-light">at Scale</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {highlights.map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group bg-cream p-6 sm:p-8 h-full hover:bg-warm-white transition-colors duration-500">
                <item.icon
                  size={24}
                  className="text-sienna mb-6 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-display text-lg font-semibold text-charcoal mb-1">
                  {item.number}
                </h3>
                <p className="font-mono text-[10px] tracking-widest uppercase text-warm-gray mb-4">
                  {item.label}
                </p>
                <p className="font-body text-sm leading-relaxed text-charcoal-light">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader number="05" title="Contact" subtitle="Get in Touch" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-body text-lg sm:text-xl leading-relaxed text-charcoal-light mb-8">
                Whether you're interested in discussing product strategy, content-commerce
                innovation, or potential collaborations, I'd love to connect. The best
                ideas emerge from unexpected conversations.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/haiyunhe2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 border border-border hover:border-sienna/40 transition-all duration-300"
                >
                  <Linkedin size={20} className="text-sienna" />
                  <div className="flex-1">
                    <p className="font-body text-sm font-medium text-charcoal group-hover:text-sienna transition-colors">
                      LinkedIn
                    </p>
                    <p className="font-mono text-[10px] text-warm-gray">
                      linkedin.com/in/haiyunhe2
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-warm-gray group-hover:text-sienna group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </a>

                <a
                  href="mailto:contact@haiyunhe.com"
                  className="group flex items-center gap-4 p-5 border border-border hover:border-sienna/40 transition-all duration-300"
                >
                  <Mail size={20} className="text-sienna" />
                  <div className="flex-1">
                    <p className="font-body text-sm font-medium text-charcoal group-hover:text-sienna transition-colors">
                      Email
                    </p>
                    <p className="font-mono text-[10px] text-warm-gray">
                      Open to conversations
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-warm-gray group-hover:text-sienna group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex items-end">
            <Reveal direction="right" delay={300}>
              <div className="w-full">
                <p className="pull-quote text-xl sm:text-2xl">
                  "The best products are stories waiting to be told. Let's write the next chapter together."
                </p>
                <p className="font-mono text-xs text-warm-gray mt-4">
                  — Haiyun HE
                </p>
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
    <footer className="border-t border-border py-10 sm:py-14">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-lg font-semibold text-charcoal mb-1">
              Haiyun HE
            </p>
            <p className="font-mono text-[10px] tracking-widest uppercase text-warm-gray">
              Product Management & Operations
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/haiyunhe2"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-warm-gray hover:text-sienna transition-colors duration-300"
            >
              LinkedIn
            </a>
            <span className="text-border">|</span>
            <span className="font-mono text-[10px] text-warm-gray">
              &copy; {new Date().getFullYear()}
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
    <div className="min-h-screen bg-cream">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
