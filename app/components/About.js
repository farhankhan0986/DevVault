"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Zap,
  Shield,
  Cpu,
  Network,
  Database,
  Flame,
  Server,
  Lock,
  Globe,
  Layers,
  Monitor,
  ArrowRight,
  Terminal,
  GitBranch,
  Sparkles,
} from "lucide-react";

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const numeric = parseInt(target.replace(/\D/g, ""), 10);
    const suffix = target.replace(/[0-9]/g, "");
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numeric) + suffix);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ stat, index, inView }) {
  const Icon = stat.icon;
  const count = useCountUp(stat.value, 1600 + index * 200, inView);
  return (
    <div
      className="about-stat-card"
      style={{ animationDelay: `${0.1 + index * 0.12}s` }}
    >
      <div className="about-stat-glow" />
      <div className="about-stat-inner">
        <div className="about-stat-icon-wrap">
          <Icon className="about-stat-icon" />
        </div>
        <p className="about-stat-value">{inView ? count : "0"}</p>
        <p className="about-stat-label">{stat.label}</p>
      </div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Network,
      title: "Backend Architecture",
      description: "Designing scalable, resilient systems with clean, maintainable code and battle-tested patterns.",
      tag: "System Design",
    },
    {
      icon: Shield,
      title: "API Security",
      description: "Building hardened, authenticated, and rate-limited APIs — security-first from day one.",
      tag: "Auth & Guards",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Profiling and optimising applications for throughput, low latency, and smooth UX.",
      tag: "Optimisation",
    },
  ];

  const stats = [
    { value: "15+", label: "Projects Built", icon: Cpu },
    { value: "50k+", label: "Lines of Code", icon: Code2 },
    { value: "100%", label: "Dedication", icon: Flame },
  ];

  const competencies = [
    { label: "Scalable Web Applications", desc: "Fast, responsive, maintainable apps that grow with your business — from MVP to millions of users.", icon: Globe },
    { label: "Secure Backend APIs", desc: "Reliable APIs with authentication, authorisation, validation, and full database integration.", icon: Lock },
    { label: "AI-Powered Products", desc: "Integrate modern AI — chatbots, content generation, automation, and intelligent workflows.", icon: Sparkles },
    { label: "Business Automation Tools", desc: "Custom tools that eliminate repetitive work and let your team focus on what matters.", icon: Zap },
    { label: "Admin Dashboards & Panels", desc: "Data-rich control centres with real-time analytics, user management, and CRUD interfaces.", icon: Monitor },
    { label: "Booking & Management Systems", desc: "End-to-end reservation, appointment, and resource management systems for any industry.", icon: Layers },
    { label: "SaaS Platforms", desc: "Multi-tenant SaaS products with billing, role-based access, and production-ready infrastructure.", icon: Server },
    { label: "Responsive Mobile Apps", desc: "Cross-platform mobile applications with native-like performance for iOS and Android.", icon: Network },
    { label: "Database Architecture", desc: "Optimised schema design, indexing, query tuning, and migration strategies across SQL and NoSQL.", icon: Database },
    { label: "Performance Optimisation", desc: "Profiling and tuning backends for throughput, low latency, and smooth user experiences.", icon: Cpu },
  ];

  const terminalLines = [
    { prefix: "~", cmd: "whoami", color: "#a3e635" },
    { prefix: ">", cmd: "Farhan Khan · Software Engineer", color: "#e2e8f0" },
    { prefix: "~", cmd: "cat mission.txt", color: "#a3e635" },
    { prefix: ">", cmd: "Build systems that scale, secure, and inspire.", color: "#94a3b8" },
    { prefix: "~", cmd: "git status", color: "#a3e635" },
    { prefix: ">", cmd: "On branch: main  ·  Always shipping ✓", color: "#34d399" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative select-none py-32 bg-background text-foreground overflow-hidden"
    >
      {/* ── Ambient background layers ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* top-right glow */}
        <div
          className="absolute top-[-120px] right-[-80px] h-[600px] w-[600px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #ffffff, transparent 65%)" }}
        />
        {/* bottom-left glow */}
        <div
          className="absolute bottom-[-100px] left-[-60px] h-[500px] w-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #ffffff, transparent 65%)" }}
        />
        {/* centre subtle band */}
        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)" }}
        />
        {/* dot-grid texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ── Section header ── */}
        <div className={`mb-20 about-fade-in ${inView ? "about-visible" : ""}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="about-eyebrow-pill">
              <Sparkles className="w-3 h-3" />
              About
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
            Who I{" "}
            <span
              className="about-gradient-text"
              style={{
                background: "linear-gradient(135deg, #ffffff 30%, rgba(255,255,255,0.35) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Am
            </span>
          </h2>
          <div className="section-line mt-5" />
        </div>

        {/* ── Main two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Left — Bio + Stats (3 cols) */}
          <div className="lg:col-span-3 space-y-8">

            {/* Terminal card */}
            <div
              className={`about-terminal about-fade-in ${inView ? "about-visible" : ""}`}
              style={{ animationDelay: "0.15s" }}
            >
              <div className="about-terminal-bar">
                <span className="about-terminal-dot" style={{ background: "#ff5f57" }} />
                <span className="about-terminal-dot" style={{ background: "#febc2e" }} />
                <span className="about-terminal-dot" style={{ background: "#28c840" }} />
                <span className="about-terminal-title">
                  <Terminal className="w-3 h-3" /> farhan@devvault ~ bash
                </span>
              </div>
              <div className="about-terminal-body">
                {terminalLines.map((line, i) => (
                  <div key={i} className="about-terminal-line" style={{ animationDelay: `${0.3 + i * 0.15}s` }}>
                    <span style={{ color: "rgba(255,255,255,0.25)" }}>{line.prefix}</span>{" "}
                    <span style={{ color: line.color }}>{line.cmd}</span>
                  </div>
                ))}
                <div className="about-terminal-cursor" />
              </div>
            </div>

            {/* Bio paragraphs */}
            <div
              className={`space-y-5 about-fade-in ${inView ? "about-visible" : ""}`}
              style={{ animationDelay: "0.25s" }}
            >
              <p className="text-base md:text-[1.07rem] leading-[1.85] text-muted">
                I&apos;m a final-year B.Tech student and{" "}
                <span className="about-inline-highlight">Software Engineer</span>{" "}
                with a deep passion for{" "}
                <span className="font-semibold text-foreground">backend systems</span>,
                API design, and security-focused architectures. Currently working as a{" "}
                <span className="about-inline-highlight">AI Agent Developer Intern at Tripify India</span>,
                building production-grade solutions that go beyond the demo.
              </p>
              <p className="text-base md:text-[1.07rem] leading-[1.85] text-muted">
                I love crafting{" "}
                <span className="font-semibold text-foreground">scalable systems</span>,
                working with modern JavaScript ecosystems, and shipping products that fuse
                solid business logic with{" "}
                <span className="font-semibold text-foreground">clean engineering principles</span>.
                My goal — grow into a backend-heavy, high-impact engineer trusted with
                large-scale infrastructure.
              </p>
            </div>

            {/* Stats row */}
            <div
              className={`grid grid-cols-3 gap-4 about-fade-in ${inView ? "about-visible" : ""}`}
              style={{ animationDelay: "0.35s" }}
            >
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
              ))}
            </div>
          </div>

          {/* Right — Highlight cards (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`about-highlight-card about-fade-in ${inView ? "about-visible" : ""}`}
                  style={{ animationDelay: `${0.2 + index * 0.14}s` }}
                >
                  {/* accent line */}
                  <span className="about-highlight-accent" />

                  <div className="flex items-start gap-4">
                    <div className="about-highlight-icon-wrap">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                        <h3 className="font-bold text-base text-foreground">{item.title}</h3>
                        <span className="about-tag">{item.tag}</span>
                      </div>
                      <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Journey card */}
            <div
              className={`about-journey-card about-fade-in ${inView ? "about-visible" : ""}`}
              style={{ animationDelay: "0.55s" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <GitBranch className="w-4 h-4 text-muted" />
                <span className="text-xs font-semibold text-muted uppercase tracking-widest">My Journey</span>
              </div>
              {[
                { year: "2019", event: "Made my first web page" },
                { year: "2020", event: "Made my first website" },
                { year: "2022", event: "Started B.Tech Computer Science" },
                { year: "2024", event: "Built first production app" },
                { year: "2025", event: "Joined Tripify India as AI Agent Developer Intern" },
                { year: "Now", event: "Shipping & always learning" },
              ].map((item, i) => (
                <div key={i} className="about-journey-row">
                  <span className="about-journey-year">{item.year}</span>
                  <span className="about-journey-dot" />
                  <span className="text-sm text-muted leading-tight">{item.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── What I Help Businesses Build ── */}
        <div
          className={`mt-24 pt-16 about-fade-in ${inView ? "about-visible" : ""}`}
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            animationDelay: "0.45s",
          }}
        >
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
                What I Help{" "}
                <span style={{ color: "rgba(255,255,255,0.4)" }}>Businesses Build</span>
              </h2>
              <div className="section-line" />
            </div>
            <p className="text-sm text-muted max-w-xs text-right hidden sm:block">
              Real outcomes — not just a list of technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {competencies.map((item, i) => {
              const CompIcon = item.icon;
              return (
                <div key={item.label} className="about-comp-card about-comp-card-rich">
                  <span className="about-comp-accent" />
                  <div className="flex items-start gap-3">
                    <div className="about-comp-icon-wrap flex-shrink-0">
                      <CompIcon className="w-4 h-4 text-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-foreground leading-snug mb-1">{item.label}</p>
                      <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Scoped styles ── */}
      <style>{`
        /* Fade-in animation */
        .about-fade-in {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(.22,.68,0,1.2), transform 0.7s cubic-bezier(.22,.68,0,1.2);
        }
        .about-fade-in.about-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Eyebrow pill */
        .about-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
        }

        /* ── Terminal ── */
        .about-terminal {
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(10,10,10,0.85);
          backdrop-filter: blur(16px);
          overflow: hidden;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.03), 0 24px 48px rgba(0,0,0,0.5);
        }
        .about-terminal-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 14px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
        }
        .about-terminal-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }
        .about-terminal-title {
          margin-left: 8px;
          font-size: 0.7rem;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .about-terminal-body {
          padding: 18px 20px 20px;
          font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
          font-size: 0.8rem;
          line-height: 2;
          letter-spacing: 0.02em;
        }
        .about-terminal-line {
          opacity: 0;
          animation: termLine 0.4s ease forwards;
        }
        @keyframes termLine {
          from { opacity: 0; transform: translateX(-6px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .about-terminal-cursor {
          display: inline-block;
          width: 8px;
          height: 14px;
          background: rgba(255,255,255,0.6);
          border-radius: 1px;
          animation: blink 1.1s step-end infinite;
          vertical-align: text-bottom;
          margin-top: 4px;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        /* Inline highlight */
        .about-inline-highlight {
          font-weight: 600;
          color: rgb(var(--foreground));
          border-bottom: 1px solid rgba(255,255,255,0.25);
          padding-bottom: 1px;
        }

        /* ── Stat cards ── */
        .about-stat-card {
          position: relative;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.08);
          padding: 22px 14px;
          text-align: center;
          overflow: hidden;
          background: rgba(17,17,17,0.7);
          backdrop-filter: blur(12px);
          opacity: 0;
          animation: statPop 0.6s cubic-bezier(.22,.68,0,1.4) forwards;
          transition: border-color 0.25s, transform 0.25s;
        }
        .about-stat-card:hover {
          border-color: rgba(255,255,255,0.18);
          transform: translateY(-4px);
        }
        @keyframes statPop {
          from { opacity: 0; transform: scale(0.88) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .about-stat-glow {
          position: absolute;
          inset: -30%;
          background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.06), transparent 70%);
          pointer-events: none;
        }
        .about-stat-inner {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .about-stat-icon-wrap {
          padding: 8px;
          border-radius: 10px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.07);
        }
        .about-stat-icon { width: 16px; height: 16px; color: rgba(255,255,255,0.5); }
        .about-stat-value {
          font-size: 2rem;
          font-weight: 900;
          letter-spacing: -0.03em;
          color: rgb(var(--foreground));
          line-height: 1;
        }
        .about-stat-label {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }

        /* ── Highlight cards ── */
        .about-highlight-card {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.08);
          padding: 22px 20px;
          background: rgba(17,17,17,0.65);
          backdrop-filter: blur(14px);
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
          cursor: default;
        }
        .about-highlight-card:hover {
          border-color: rgba(255,255,255,0.16);
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.4);
        }
        .about-highlight-accent {
          position: absolute;
          left: 0; top: 0;
          height: 100%;
          width: 2px;
          background: linear-gradient(180deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05));
          border-radius: 1px;
          transition: background 0.25s;
        }
        .about-highlight-card:hover .about-highlight-accent {
          background: linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.1));
        }
        .about-highlight-icon-wrap {
          flex-shrink: 0;
          padding: 10px;
          border-radius: 12px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          transition: background 0.25s, transform 0.25s;
        }
        .about-highlight-card:hover .about-highlight-icon-wrap {
          background: rgba(255,255,255,0.1);
          transform: translateY(-2px) scale(1.08);
        }
        .about-tag {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 9px;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.45);
          background: rgba(255,255,255,0.04);
          white-space: nowrap;
        }

        /* ── Journey card ── */
        .about-journey-card {
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.07);
          padding: 22px 20px;
          background: rgba(17,17,17,0.5);
          backdrop-filter: blur(12px);
        }
        .about-journey-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 7px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .about-journey-row:last-child { border-bottom: none; }
        .about-journey-year {
          font-size: 0.7rem;
          font-weight: 700;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.05em;
          min-width: 34px;
        }
        .about-journey-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          flex-shrink: 0;
        }

        /* ── Competency cards ── */
        .about-comp-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.07);
          padding: 14px 16px;
          background: rgba(17,17,17,0.55);
          backdrop-filter: blur(8px);
          transition: border-color 0.25s, transform 0.25s, background 0.25s;
          cursor: default;
        }
        .about-comp-card:hover {
          border-color: rgba(255,255,255,0.15);
          transform: translateY(-2px);
          background: rgba(30,30,30,0.65);
        }
        .about-comp-accent {
          position: absolute;
          left: 0; top: 0;
          height: 100%;
          width: 3px;
          background: linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.0));
          border-radius: 1px;
          transition: background 0.25s;
        }
        .about-comp-card:hover .about-comp-accent {
          background: linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.05));
        }
        .about-comp-icon-wrap {
          flex-shrink: 0;
          padding: 7px;
          border-radius: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.07);
          transition: background 0.25s, transform 0.25s;
        }
        .about-comp-card:hover .about-comp-icon-wrap {
          background: rgba(255,255,255,0.09);
          transform: scale(1.1);
        }
        .about-comp-card-rich { padding: 18px 18px 18px 20px; align-items: flex-start; flex-direction: column; gap: 0; }
        .about-comp-card-rich:hover { transform: translateY(-3px); }
        .about-comp-arrow {
          width: 13px; height: 13px;
          color: rgba(255,255,255,0.15);
          margin-left: auto; flex-shrink: 0;
          transition: color 0.25s, transform 0.25s;
        }
        .about-comp-card:hover .about-comp-arrow {
          color: rgba(255,255,255,0.45);
          transform: translateX(3px);
        }
      `}</style>
    </section>
  );
}
