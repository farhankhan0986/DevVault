"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code2, Zap, Shield, Cpu, Network, Flame, Terminal, GitBranch, Sparkles,
  Layers, Lock, Server, Search, Target,
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
    <div className="about-stat-card" style={{ animationDelay: `${0.1 + index * 0.12}s` }}>
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
    { icon: Network, title: "Backend Architecture", description: "Designing scalable, resilient systems with clean, maintainable code and battle-tested patterns.", tag: "System Design" },
    { icon: Shield,  title: "API Security",         description: "Building hardened, authenticated, and rate-limited APIs  security-first from day one.",                tag: "Auth & Guards" },
    { icon: Zap,     title: "Performance",           description: "Profiling and optimising applications for throughput, low latency, and smooth UX.",                    tag: "Optimisation"  },
  ];

  const stats = [
    { value: "15+",  label: "Projects Built", icon: Cpu   },
    { value: "50k+", label: "Lines of Code",  icon: Code2 },
    { value: "100%", label: "Dedication",     icon: Flame },
  ];

  const terminalLines = [
    { prefix: "~", cmd: "whoami",                                      color: "#a3e635" },
    { prefix: ">", cmd: "Farhan Khan · Software Engineer",             color: "#e2e8f0" },
    { prefix: "~", cmd: "cat mission.txt",                             color: "#a3e635" },
    { prefix: ">", cmd: "Build systems that scale, secure, and inspire.", color: "#94a3b8" },
    { prefix: "~", cmd: "git status",                                  color: "#a3e635" },
    { prefix: ">", cmd: "On branch: main  ·  Always shipping ✓",      color: "#34d399" },
  ];

  // ── Development Playbook data ──────────────────────────────────
  const STEPS = [
    {
      n: "01", icon: Search, color: "#6366f1",
      phase: "Discover",
      sub: "Understand before you build",
      desc: "I immerse in the problem  understanding business goals, user needs, constraints, and what's been tried before. No assumptions, no skipped conversations.",
      chips: ["Stakeholder interviews", "User flow mapping", "Technical audit", "Risk scoping"],
    },
    {
      n: "02", icon: Layers, color: "#8b5cf6",
      phase: "Architect",
      sub: "Design systems, not just screens",
      desc: "Before a line of code, I define data models, API contracts, system boundaries, and infrastructure. Architecture decisions are cheapest made on paper.",
      chips: ["System design", "API contracts", "Data modeling", "Stack selection"],
    },
    {
      n: "03", icon: Code2, color: "#3b82f6",
      phase: "Build",
      sub: "Iterative, transparent progress",
      desc: "Development in focused sprints with clean commits and constant communication. The client always knows what's done, what's next, and why.",
      chips: ["Sprint cycles", "Clean commits", "CI/CD from day one", "Daily updates"],
    },
    {
      n: "04", icon: Shield, color: "#10b981",
      phase: "Harden",
      sub: "Ship code you can stand behind",
      desc: "Performance profiling, security review, and edge case elimination. I only ship code I'd be proud to maintain six months from now.",
      chips: ["Load testing", "Security audit", "Performance profiling", "Code review"],
    },
    {
      n: "05", icon: Zap, color: "#f59e0b",
      phase: "Ship & Evolve",
      sub: "Launch is a milestone, not the end",
      desc: "Production deployment with monitoring, alerting, and docs in place. After launch I track real usage and iterate based on actual feedback.",
      chips: ["Production deploy", "Uptime monitoring", "Feedback loops", "Continuous iteration"],
    },
  ];

  const PRINCIPLES = [
    { icon: Target,    color: "#6366f1", title: "Outcomes over outputs",    desc: "Every technical decision is evaluated against its effect on users and business goals  not code elegance." },
    { icon: GitBranch, color: "#8b5cf6", title: "Architecture before code", desc: "A day of planning saves a week of refactoring. Thinking before typing consistently produces better systems." },
    { icon: Lock,      color: "#10b981", title: "Security by default",      desc: "Auth, validation, and rate limiting are in from line one. Security is architecture  not a checklist added later." },
    { icon: Terminal,  color: "#3b82f6", title: "Readable beats clever",    desc: "Code any developer can pick up, understand, and extend six months from now. No unnecessary magic." },
    { icon: Zap,       color: "#f59e0b", title: "Ship small, learn fast",   desc: "Real user feedback beats long perfect sprints. I prefer frequent small releases over big-bang launches." },
    { icon: Server,    color: "#ef4444", title: "Full-stack ownership",     desc: "End-to-end responsibility  from database schema to production monitoring. No 'that's someone else's problem.'" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative select-none py-32 bg-background text-foreground overflow-hidden"
    >
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-120px] right-[-80px] h-[600px] w-[600px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #ffffff, transparent 65%)" }} />
        <div className="absolute bottom-[-100px] left-[-60px] h-[500px] w-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #ffffff, transparent 65%)" }} />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)" }} />
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className={`mb-20 about-fade-in ${inView ? "about-visible" : ""}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="about-eyebrow-pill">
              <Sparkles className="w-3 h-3" />
              About
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
            Who I{" "}
            <span style={{ background: "linear-gradient(135deg, #ffffff 30%, rgba(255,255,255,0.35) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Am
            </span>
          </h2>
          <div className="section-line mt-5" />
        </div>

        {/* Main two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Left  Bio + Stats */}
          <div className="lg:col-span-3 space-y-8">

            {/* Terminal card */}
            <div className={`about-terminal about-fade-in ${inView ? "about-visible" : ""}`} style={{ animationDelay: "0.15s" }}>
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

            {/* Bio */}
            <div className={`space-y-5 about-fade-in ${inView ? "about-visible" : ""}`} style={{ animationDelay: "0.25s" }}>
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
                working with modern JavaScript ecosystems, and shipping products that fuse solid business
                logic with{" "}
                <span className="font-semibold text-foreground">clean engineering principles</span>.
                My goal  grow into a backend-heavy, high-impact engineer trusted with large-scale infrastructure.
              </p>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-4 about-fade-in ${inView ? "about-visible" : ""}`} style={{ animationDelay: "0.35s" }}>
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
              ))}
            </div>
          </div>

          {/* Right  Highlight cards + Journey */}
          <div className="lg:col-span-2 space-y-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className={`about-highlight-card about-fade-in ${inView ? "about-visible" : ""}`}
                  style={{ animationDelay: `${0.2 + index * 0.14}s` }}>
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

            {/* Journey */}
            <div className={`about-journey-card about-fade-in ${inView ? "about-visible" : ""}`} style={{ animationDelay: "0.55s" }}>
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
                { year: "Now",  event: "Shipping & always learning" },
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

        {/* ── My Development Playbook ── */}
        <div
          className={`mt-24 pt-16 about-fade-in ${inView ? "about-visible" : ""}`}
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)", animationDelay: "0.45s" }}
        >
          {/* Header */}
          <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
            <div>
              <p className="about-section-label">Process</p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                My Development{" "}
                <span style={{ color: "rgba(255,255,255,0.35)" }}>Playbook</span>
              </h2>
              <div className="section-line mt-4" />
            </div>
            <p className="text-sm text-muted max-w-xs text-right hidden sm:block leading-relaxed">
              How I turn an idea into a shipped, production-ready product.
            </p>
          </div>

          {/* Process steps */}
          <div className="about-steps-grid">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.n}
                  className="about-step-card"
                  style={{ "--step-c": step.color }}
                >
                  <span className="about-step-bg-num">{step.n}</span>
                  {i < STEPS.length - 1 && <span className="about-step-connector" />}
                  <div
                    className="about-step-icon-wrap"
                    style={{
                      background: `color-mix(in srgb, ${step.color} 14%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${step.color} 28%, transparent)`,
                    }}
                  >
                    <Icon style={{ width: 16, height: 16, color: step.color }} />
                  </div>
                  <p className="about-step-phase" style={{ color: step.color }}>{step.phase}</p>
                  <p className="about-step-sub">{step.sub}</p>
                  <p className="about-step-desc">{step.desc}</p>
                  <div className="about-step-chips">
                    {step.chips.map(c => (
                      <span
                        key={c}
                        className="about-step-chip"
                        style={{
                          borderColor: `color-mix(in srgb, ${step.color} 28%, transparent)`,
                          color: `color-mix(in srgb, ${step.color} 75%, rgba(255,255,255,0.5))`,
                          background: `color-mix(in srgb, ${step.color} 6%, transparent)`,
                        }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Engineering standards */}
          <div className="mt-14">
            <p className="about-section-label mb-5">Engineering Standards</p>
            <div className="about-principles-grid">
              {PRINCIPLES.map(p => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="about-principle-item">
                    <div className="about-principle-accent" style={{ background: p.color }} />
                    <div className="about-principle-icon-wrap">
                      <Icon style={{ width: 13, height: 13, color: p.color }} />
                    </div>
                    <p className="about-principle-title">{p.title}</p>
                    <p className="about-principle-desc">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scoped styles */}
      <style>{`
        .about-fade-in {
          opacity: 0; transform: translateY(28px);
          transition: opacity .7s cubic-bezier(.22,.68,0,1.2), transform .7s cubic-bezier(.22,.68,0,1.2);
        }
        .about-fade-in.about-visible { opacity: 1; transform: translateY(0); }

        .about-eyebrow-pill {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 12px; border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          font-size: .7rem; font-weight: 700; letter-spacing: .12em;
          text-transform: uppercase; color: rgba(255,255,255,0.6);
        }

        /* Terminal */
        .about-terminal { border-radius: 14px; border: 1px solid rgba(255,255,255,0.1); background: rgba(10,10,10,0.85); backdrop-filter: blur(16px); overflow: hidden; box-shadow: 0 0 0 1px rgba(255,255,255,0.03), 0 24px 48px rgba(0,0,0,0.5); }
        .about-terminal-bar { display: flex; align-items: center; gap: 6px; padding: 10px 14px; border-bottom: 1px solid rgba(255,255,255,0.07); background: rgba(255,255,255,0.03); }
        .about-terminal-dot { width: 11px; height: 11px; border-radius: 50%; }
        .about-terminal-title { margin-left: 8px; font-size: .7rem; color: rgba(255,255,255,0.3); letter-spacing: .05em; display: flex; align-items: center; gap: 5px; }
        .about-terminal-body { padding: 18px 20px 20px; font-family: 'JetBrains Mono','Fira Code','Courier New',monospace; font-size: .8rem; line-height: 2; letter-spacing: .02em; }
        .about-terminal-line { opacity: 0; animation: termLine .4s ease forwards; }
        @keyframes termLine { from { opacity:0; transform:translateX(-6px); } to { opacity:1; transform:translateX(0); } }
        .about-terminal-cursor { display: inline-block; width: 8px; height: 14px; background: rgba(255,255,255,0.6); border-radius: 1px; animation: blink 1.1s step-end infinite; vertical-align: text-bottom; margin-top: 4px; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        .about-inline-highlight { font-weight: 600; color: rgb(var(--foreground)); border-bottom: 1px solid rgba(255,255,255,0.25); padding-bottom: 1px; }

        /* Stat cards */
        .about-stat-card { position: relative; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); padding: 22px 14px; text-align: center; overflow: hidden; background: rgba(17,17,17,0.7); backdrop-filter: blur(12px); opacity: 0; animation: statPop .6s cubic-bezier(.22,.68,0,1.4) forwards; transition: border-color .25s, transform .25s; }
        .about-stat-card:hover { border-color: rgba(255,255,255,0.18); transform: translateY(-4px); }
        @keyframes statPop { from{opacity:0;transform:scale(.88) translateY(12px)} to{opacity:1;transform:scale(1) translateY(0)} }
        .about-stat-glow { position: absolute; inset: -30%; background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.06), transparent 70%); pointer-events: none; }
        .about-stat-inner { position: relative; display: flex; flex-direction: column; align-items: center; gap: 8px; }
        .about-stat-icon-wrap { padding: 8px; border-radius: 10px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.07); }
        .about-stat-icon { width: 16px; height: 16px; color: rgba(255,255,255,0.5); }
        .about-stat-value { font-size: 2rem; font-weight: 900; letter-spacing: -.03em; color: rgb(var(--foreground)); line-height: 1; }
        .about-stat-label { font-size: .7rem; color: rgba(255,255,255,0.4); letter-spacing: .07em; text-transform: uppercase; }

        /* Highlight cards */
        .about-highlight-card { position: relative; overflow: hidden; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); padding: 22px 20px; background: rgba(17,17,17,0.65); backdrop-filter: blur(14px); transition: border-color .25s, transform .25s, box-shadow .25s; cursor: default; }
        .about-highlight-card:hover { border-color: rgba(255,255,255,0.16); transform: translateY(-3px); box-shadow: 0 16px 40px rgba(0,0,0,0.4); }
        .about-highlight-accent { position: absolute; left:0; top:0; height:100%; width:2px; background: linear-gradient(180deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05)); border-radius:1px; transition: background .25s; }
        .about-highlight-card:hover .about-highlight-accent { background: linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.1)); }
        .about-highlight-icon-wrap { flex-shrink:0; padding:10px; border-radius:12px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.08); transition:background .25s,transform .25s; }
        .about-highlight-card:hover .about-highlight-icon-wrap { background:rgba(255,255,255,0.1); transform:translateY(-2px) scale(1.08); }
        .about-tag { font-size:.65rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; padding:3px 9px; border-radius:9999px; border:1px solid rgba(255,255,255,0.1); color:rgba(255,255,255,0.45); background:rgba(255,255,255,0.04); white-space:nowrap; }

        /* Journey card */
        .about-journey-card { border-radius:16px; border:1px solid rgba(255,255,255,0.07); padding:22px 20px; background:rgba(17,17,17,0.5); backdrop-filter:blur(12px); }
        .about-journey-row { display:flex; align-items:center; gap:12px; padding:7px 0; border-bottom:1px solid rgba(255,255,255,0.04); }
        .about-journey-row:last-child { border-bottom:none; }
        .about-journey-year { font-size:.7rem; font-weight:700; color:rgba(255,255,255,0.35); letter-spacing:.05em; min-width:34px; }
        .about-journey-dot { width:6px; height:6px; border-radius:50%; background:rgba(255,255,255,0.25); flex-shrink:0; }

        /* ── Development Playbook ── */
        .about-section-label {
          font-size: .65rem; font-weight: 700; letter-spacing: .12em;
          text-transform: uppercase; color: rgba(255,255,255,0.3);
        }

        /* Process steps grid */
        .about-steps-grid { display:grid; grid-template-columns:repeat(1,1fr); gap:12px; }
        @media (min-width:640px)  { .about-steps-grid { grid-template-columns:repeat(2,1fr); gap:14px; } }
        @media (min-width:1024px) { .about-steps-grid { grid-template-columns:repeat(5,1fr); gap:10px; } }

        .about-step-card {
          position:relative; border-radius:14px; padding:20px 16px 18px;
          border:1px solid rgba(255,255,255,0.07);
          background:rgba(12,12,16,0.85); backdrop-filter:blur(12px);
          overflow:hidden;
          transition:border-color .25s, transform .25s, box-shadow .25s;
          cursor:default;
        }
        .about-step-card:hover {
          border-color:color-mix(in srgb, var(--step-c) 38%, rgba(255,255,255,0.07));
          transform:translateY(-4px);
          box-shadow:0 18px 44px rgba(0,0,0,0.45);
        }
        .about-step-bg-num {
          position:absolute; top:-8px; right:6px;
          font-size:5rem; font-weight:900;
          color:rgba(255,255,255,0.025); letter-spacing:-.05em;
          line-height:1; user-select:none; pointer-events:none;
        }
        .about-step-connector { display:none; }
        @media (min-width:1024px) {
          .about-step-connector {
            display:block; position:absolute;
            top:30px; right:-6px;
            width:12px; height:1px;
            background:rgba(255,255,255,0.1); z-index:1;
          }
        }
        .about-step-icon-wrap {
          display:inline-flex; align-items:center; justify-content:center;
          width:34px; height:34px; border-radius:9px;
          margin-bottom:12px;
          transition:transform .25s;
        }
        .about-step-card:hover .about-step-icon-wrap { transform:scale(1.1) rotate(-4deg); }
        .about-step-phase { font-size:.7rem; font-weight:800; letter-spacing:.08em; text-transform:uppercase; margin-bottom:3px; }
        .about-step-sub   { font-size:.8rem; font-weight:600; color:rgba(255,255,255,0.7); line-height:1.35; margin-bottom:9px; }
        .about-step-desc  { font-size:.75rem; color:rgba(255,255,255,0.36); line-height:1.65; margin-bottom:12px; }
        .about-step-chips { display:flex; flex-wrap:wrap; gap:4px; }
        .about-step-chip  { font-size:.6rem; font-weight:600; padding:2px 7px; border-radius:9999px; border:1px solid; white-space:nowrap; letter-spacing:.03em; }

        /* Engineering standards */
        .about-principles-grid {
          display:grid; grid-template-columns:repeat(1,1fr);
          gap:1px; background:rgba(255,255,255,0.06);
          border-radius:14px; overflow:hidden;
          border:1px solid rgba(255,255,255,0.07);
        }
        @media (min-width:640px)  { .about-principles-grid { grid-template-columns:repeat(2,1fr); } }
        @media (min-width:1024px) { .about-principles-grid { grid-template-columns:repeat(3,1fr); } }

        .about-principle-item {
          position:relative; padding:18px 20px 18px 24px;
          background:rgba(10,10,14,0.92);
          transition:background .25s;
        }
        .about-principle-item:hover { background:rgba(18,18,24,0.95); }
        .about-principle-accent {
          position:absolute; left:0; top:0; bottom:0; width:2px;
          opacity:.55; transition:opacity .25s;
        }
        .about-principle-item:hover .about-principle-accent { opacity:1; }
        .about-principle-icon-wrap { margin-bottom:8px; }
        .about-principle-title { font-size:.82rem; font-weight:700; color:rgba(255,255,255,0.82); margin-bottom:4px; line-height:1.3; }
        .about-principle-desc  { font-size:.74rem; color:rgba(255,255,255,0.36); line-height:1.65; }
      `}</style>
    </section>
  );
}
