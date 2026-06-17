"use client";

import { useEffect, useRef, useState } from "react";
import {
  Layers, Layout, Server, Zap, Smartphone, Package,
  LayoutDashboard, Bot, Database, Briefcase, ArrowRight, Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Full Stack Web Development",
    desc: "End-to-end web applications with seamless frontend-backend integration — from responsive UI to scalable server logic and database.",
    tags: ["Next.js", "Node.js", "Python"],
    accent: "rgba(124,184,214,0.15)",
    accentBorder: "rgba(124,184,214,0.3)",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    desc: "Pixel-perfect, responsive, and performant interfaces using React, Next.js, and Tailwind — built for any screen size and interaction pattern.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    accent: "rgba(163,230,53,0.12)",
    accentBorder: "rgba(163,230,53,0.25)",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Robust server-side systems using Node.js or Python/FastAPI — built for reliability, security, and scale from day one.",
    tags: ["Node.js", "Python", "FastAPI"],
    accent: "rgba(125,196,114,0.12)",
    accentBorder: "rgba(125,196,114,0.25)",
  },
  {
    icon: Zap,
    title: "REST API Development",
    desc: "Clean, documented, and secure REST APIs with authentication, rate limiting, validation, and structured error handling.",
    tags: ["FastAPI", "Express.js", "JWT"],
    accent: "rgba(250,204,21,0.12)",
    accentBorder: "rgba(250,204,21,0.25)",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform mobile applications with native-like performance, smooth animations, and intuitive UX for iOS and Android.",
    tags: ["React Native", "Expo", "REST APIs"],
    accent: "rgba(167,139,250,0.12)",
    accentBorder: "rgba(167,139,250,0.25)",
  },
  {
    icon: Package,
    title: "SaaS / Product Development",
    desc: "Complete SaaS platforms with multi-tenant architecture, subscription billing, role-based access, and production-ready infrastructure.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    accent: "rgba(251,146,60,0.12)",
    accentBorder: "rgba(251,146,60,0.25)",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard & Admin Panels",
    desc: "Data-rich admin interfaces with real-time stats, charts, user management, and full CRUD — built clean and fast.",
    tags: ["React", "Recharts", "REST API"],
    accent: "rgba(56,189,248,0.12)",
    accentBorder: "rgba(56,189,248,0.25)",
  },
  {
    icon: Bot,
    title: "AI-Powered Web Applications",
    desc: "Intelligent apps integrating LLMs, AI agents, chatbots, content generation, and automated workflows using OpenAI, Anthropic, or Groq.",
    tags: ["OpenAI", "LangChain", "Anthropic"],
    accent: "rgba(52,211,153,0.12)",
    accentBorder: "rgba(52,211,153,0.25)",
  },
  {
    icon: Database,
    title: "Database Design & Integration",
    desc: "Schema design, query optimisation, indexing strategies, and seamless integration across SQL and NoSQL databases.",
    tags: ["PostgreSQL", "MongoDB", "Redis"],
    accent: "rgba(107,159,191,0.12)",
    accentBorder: "rgba(107,159,191,0.25)",
  },
  {
    icon: Briefcase,
    title: "Custom Business Applications",
    desc: "Tailor-made software solving specific business problems — booking systems, CRMs, ERP modules, or any internal tooling you need.",
    tags: ["Custom Stack", "Client-First"],
    accent: "rgba(251,191,36,0.12)",
    accentBorder: "rgba(251,191,36,0.25)",
  },
];

function ServiceCard({ svc, index, inView }) {
  const Icon = svc.icon;
  return (
    <div
      className={`svc-card ${inView ? "svc-card-visible" : ""}`}
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      {/* Top accent line */}
      <div className="svc-card-line" style={{ background: svc.accentBorder }} />

      <div className="svc-icon-wrap" style={{ background: svc.accent, borderColor: svc.accentBorder }}>
        <Icon className="w-5 h-5 text-foreground" />
      </div>

      <h3 className="svc-title">{svc.title}</h3>
      <p className="svc-desc">{svc.desc}</p>

      <div className="svc-tags">
        {svc.tags.map((t) => (
          <span key={t} className="svc-tag">{t}</span>
        ))}
      </div>

      <div className="svc-arrow">
        <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative select-none py-32 bg-background text-foreground overflow-hidden"
    >
      {/* Ambient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-[600px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(ellipse, #ffffff, transparent 70%)" }} />
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className={`mb-16 svc-fade ${inView ? "svc-visible" : ""}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="svc-eyebrow"><Sparkles className="w-3 h-3" />Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
            What I <span style={{ color: "rgba(255,255,255,0.3)" }}>Build</span>
          </h2>
          <p className="text-muted text-lg mt-3 max-w-2xl">
            From idea to production — I deliver full-stack solutions using the right technology for your project, not limited to a single stack.
          </p>
          <div className="section-line mt-5" />
        </div>

        {/* Stack note banner */}
        <div className={`svc-note svc-fade ${inView ? "svc-visible" : ""}`}
          style={{ animationDelay: "0.08s" }}>
          <div className="svc-note-dot" />
          <p>
            Every project is delivered using the <strong>best-fit technology stack</strong> — whether that&apos;s MERN, Next.js + Python/FastAPI, React Native, or any combination your requirements demand.
          </p>
        </div>

        {/* Services grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 svc-fade ${inView ? "svc-visible" : ""}`}
          style={{ animationDelay: "0.12s" }}>
          {services.map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA strip */}
        <div className={`mt-16 svc-cta-strip svc-fade ${inView ? "svc-visible" : ""}`}
          style={{ animationDelay: "0.2s" }}>
          <div>
            <p className="text-base font-bold text-foreground mb-1">Have a project in mind?</p>
            <p className="text-sm text-muted">Let&apos;s discuss your requirements and the best approach to build it.</p>
          </div>
          <a href="#contact" className="svc-cta-btn">
            Start a Project <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <style>{`
        .svc-fade { opacity:0; transform:translateY(24px); transition:opacity .65s cubic-bezier(.22,.68,0,1.1), transform .65s cubic-bezier(.22,.68,0,1.1); }
        .svc-visible { opacity:1; transform:translateY(0); }

        .svc-eyebrow { display:inline-flex; align-items:center; gap:6px; padding:4px 12px; border-radius:9999px; border:1px solid rgba(255,255,255,0.12); background:rgba(255,255,255,0.05); font-size:.7rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:rgba(255,255,255,0.55); }

        .svc-note { display:flex; align-items:flex-start; gap:10px; padding:14px 18px; border-radius:12px; border:1px solid rgba(255,255,255,0.09); background:rgba(255,255,255,0.03); font-size:.85rem; color:rgba(255,255,255,0.5); line-height:1.6; }
        .svc-note strong { color:rgba(255,255,255,0.85); }
        .svc-note-dot { width:7px; height:7px; border-radius:50%; background:#4ade80; box-shadow:0 0 8px #4ade80; flex-shrink:0; margin-top:5px; animation:svcPulse 2s ease-in-out infinite; }
        @keyframes svcPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }

        .svc-card { position:relative; overflow:hidden; border-radius:16px; padding:26px 22px 22px; border:1px solid rgba(255,255,255,0.07); background:rgba(17,17,17,0.75); backdrop-filter:blur(14px); opacity:0; transform:translateY(20px); transition:opacity .5s cubic-bezier(.22,.68,0,1.1), transform .5s cubic-bezier(.22,.68,0,1.1), border-color .25s, box-shadow .25s; cursor:default; display:flex; flex-direction:column; gap:12px; }
        .svc-card.svc-card-visible { opacity:1; transform:translateY(0); }
        .svc-card:hover { border-color:rgba(255,255,255,0.14); box-shadow:0 20px 50px rgba(0,0,0,0.4); transform:translateY(-4px); }

        .svc-card-line { position:absolute; top:0; left:0; right:0; height:2px; }

        .svc-icon-wrap { display:inline-flex; align-items:center; justify-content:center; padding:10px; border-radius:12px; border:1px solid; transition:transform .25s; width:fit-content; }
        .svc-card:hover .svc-icon-wrap { transform:scale(1.1); }

        .svc-title { font-size:.95rem; font-weight:800; color:rgba(255,255,255,0.92); line-height:1.3; }
        .svc-desc { font-size:.82rem; color:rgba(255,255,255,0.45); line-height:1.65; flex:1; }

        .svc-tags { display:flex; flex-wrap:wrap; gap:5px; }
        .svc-tag { font-size:.65rem; font-weight:600; padding:3px 9px; border-radius:9999px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.09); color:rgba(255,255,255,0.4); letter-spacing:.04em; }

        .svc-arrow { color:rgba(255,255,255,0.15); transition:color .25s, transform .25s; margin-top:2px; }
        .svc-card:hover .svc-arrow { color:rgba(255,255,255,0.45); transform:translateX(4px); }

        .svc-cta-strip { display:flex; align-items:center; justify-content:space-between; gap:16px; padding:24px 28px; border-radius:16px; border:1px solid rgba(255,255,255,0.09); background:rgba(17,17,17,0.6); flex-wrap:wrap; }

        .svc-cta-btn { display:inline-flex; align-items:center; gap:7px; padding:11px 22px; border-radius:10px; font-size:.85rem; font-weight:700; background:rgb(var(--foreground)); color:rgb(var(--background)); transition:opacity .2s, transform .2s, box-shadow .2s; text-decoration:none; white-space:nowrap; }
        .svc-cta-btn:hover { opacity:.9; transform:translateY(-2px); box-shadow:0 8px 28px rgba(255,255,255,0.15); }
      `}</style>
    </section>
  );
}
