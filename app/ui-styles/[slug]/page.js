"use client";
import { use, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, BarChart2, Users, Shield, Zap, Star, Check, ChevronRight,
  Send, Search, ShoppingCart, Bell, Settings, TrendingUp, DollarSign,
  Activity, Eye, MessageSquare, Home, FileText, PieChart, Download,
  Plus, Heart, ArrowUpRight,
} from "lucide-react";

function BackBtn({ light }) {
  return (
    <Link href="/#ui-styles" style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "8px 16px", borderRadius: 8,
      background: light ? "rgba(0,0,0,0.07)" : "rgba(255,255,255,0.08)",
      color: light ? "#333" : "rgba(255,255,255,0.7)",
      fontSize: "0.78rem", fontWeight: 600, textDecoration: "none",
      border: light ? "1px solid rgba(0,0,0,0.12)" : "1px solid rgba(255,255,255,0.12)",
    }}>
      <ArrowLeft size={13} /> Back to Portfolio
    </Link>
  );
}

/* ─── 1. MINIMALIST ─────────────────────────────────────────────── */
function MinimalistPage() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const projects = [
    {
      id: "01", title: "Meridian Studio", type: "Brand Identity & Visual Language",
      year: "2025", tags: ["Identity", "Typography", "Print"],
      color: "#f2ede7", accent: "#8b7355",
      desc: "Complete rebrand for a Copenhagen-based architecture firm — from mark to material.",
    },
    {
      id: "02", title: "Forma App", type: "Product Design & Design System",
      year: "2025", tags: ["UI Design", "Systems", "Mobile"],
      color: "#e8eeec", accent: "#4a7060",
      desc: "A focus-first productivity app built for deep work. Reduced cognitive load by 40%.",
    },
    {
      id: "03", title: "Oslo Journal", type: "Editorial & Art Direction",
      year: "2024", tags: ["Editorial", "Art Direction", "Web"],
      color: "#eaebf0", accent: "#4a4f6b",
      desc: "Digital rebirth of a 30-year-old Scandinavian design publication. Serif-first layout.",
    },
    {
      id: "04", title: "Pale Architecture", type: "Website & 3D Visualisation",
      year: "2024", tags: ["Web", "3D", "Animation"],
      color: "#ede8e3", accent: "#7a5c48",
      desc: "Award-winning portfolio site for a Tokyo architecture studio. Whitespace as structure.",
    },
  ];

  const services = [
    { title: "Brand Identity", sub: "Strategy · Mark · System" },
    { title: "UI/UX Design", sub: "Research · Wireframe · Build" },
    { title: "Web Development", sub: "Next.js · Motion · Deploy" },
    { title: "Art Direction", sub: "Campaign · Editorial · Photo" },
    { title: "Design Systems", sub: "Tokens · Components · Docs" },
    { title: "Motion Design", sub: "Lottie · GSAP · Principles" },
  ];

  const stats = [
    { num: "12+", label: "Years of practice" },
    { num: "84", label: "Projects shipped" },
    { num: "3×", label: "Awwwards won" },
    { num: "100%", label: "Client retention" },
  ];

  const T = {
    sans: "'Helvetica Neue', 'Inter', Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
  };

  return (
    <div style={{ fontFamily: T.sans, background: "#fff", minHeight: "100vh", color: "#111", overflowX: "hidden" }}>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #ebebeb" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 40px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: T.serif, fontStyle: "italic", fontSize: "1.25rem", fontWeight: 400, color: "#0a0a0a", letterSpacing: "-0.01em" }}>Studio</span>
            <span style={{ fontFamily: T.sans, fontSize: "1.25rem", fontWeight: 300, color: "#0a0a0a" }}>.</span>
          </a>

          <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
            {["Work", "Process", "Studio", "Journal"].map(l => (
              <a key={l} href="#"
                onMouseEnter={() => setHoveredNav(l)}
                onMouseLeave={() => setHoveredNav(null)}
                style={{
                  textDecoration: "none", fontSize: "0.82rem", fontWeight: 400,
                  color: hoveredNav === l ? "#0a0a0a" : "#888",
                  letterSpacing: ".02em", position: "relative", paddingBottom: 2,
                  transition: "color 0.25s ease",
                }}>
                {l}
                <span style={{
                  position: "absolute", bottom: -1, left: 0, right: 0, height: 1,
                  background: "#0a0a0a",
                  transform: hoveredNav === l ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
                }} />
              </a>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <BackBtn light />
            <a href="#" style={{
              fontSize: "0.8rem", fontWeight: 500, color: "#0a0a0a",
              textDecoration: "none", padding: "8px 20px",
              border: "1px solid #0a0a0a",
              letterSpacing: ".04em", textTransform: "uppercase",
              transition: "all 0.25s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#0a0a0a"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0a0a0a"; }}>
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 40px 80px", maxWidth: 1160, margin: "0 auto", paddingTop: 120 }}>
        {/* Top micro-label */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", animation: "pulse-dot 2s ease-in-out infinite" }} />
            <span style={{ fontSize: "0.72rem", letterSpacing: ".12em", textTransform: "uppercase", color: "#999", fontWeight: 500 }}>Available for projects — 2025</span>
          </div>
          <span style={{ fontSize: "0.72rem", color: "#bbb", letterSpacing: ".08em" }}>Based in Berlin, DE</span>
        </div>

        {/* Main headline — mix of serif and sans */}
        <h1 style={{ fontSize: "clamp(3rem,7.5vw,8rem)", fontWeight: 300, lineHeight: 1.0, letterSpacing: "-0.04em", marginBottom: 48, color: "#0a0a0a", maxWidth: 1000 }}>
          <span style={{ fontFamily: T.sans, display: "block" }}>Design that</span>
          <span style={{ fontFamily: T.serif, fontStyle: "italic", fontWeight: 300, display: "block", color: "#555" }}>speaks</span>
          <span style={{ fontFamily: T.sans, display: "block" }}>before words.</span>
        </h1>

        {/* Bottom row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.75, maxWidth: 380, fontWeight: 300 }}>
            A design practice building minimal, purpose-driven digital products — where every element earns its place.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 16 }}>
            <a href="#work" style={{
              fontSize: "0.82rem", fontWeight: 500, color: "#0a0a0a", textDecoration: "none",
              display: "flex", alignItems: "center", gap: 8, letterSpacing: ".04em", textTransform: "uppercase",
            }}>
              Scroll to work
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, border: "1px solid #ccc", borderRadius: "50%" }}>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid #ebebeb", borderBottom: "1px solid #ebebeb", padding: "14px 0", overflow: "hidden", background: "#fafafa" }}>
        <div style={{ display: "flex", gap: 64, animation: "ticker 22s linear infinite", whiteSpace: "nowrap" }}>
          {Array(4).fill(["Awwwards SOTD", "CSS Design Awards", "FWA", "Behance Featured", "Dribbble Top Designer", "2× Red Dot", "D&AD Pencil", "Cannes Lions"]).flat().map((a, i) => (
            <span key={i} style={{ fontSize: "0.72rem", letterSpacing: ".12em", textTransform: "uppercase", color: "#aaa", fontWeight: 500, flexShrink: 0 }}>
              {a} <span style={{ color: "#ddd", marginLeft: 32 }}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "100px 40px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ borderLeft: i > 0 ? "1px solid #ebebeb" : "none", paddingLeft: i > 0 ? 40 : 0 }}>
            <div style={{ fontFamily: T.serif, fontStyle: "italic", fontSize: "clamp(2.5rem,4vw,4rem)", fontWeight: 300, color: "#0a0a0a", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.num}</div>
            <div style={{ fontSize: "0.78rem", color: "#999", marginTop: 10, letterSpacing: ".04em", textTransform: "uppercase", fontWeight: 400 }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* ── WORK ─────────────────────────────────────────────── */}
      <section id="work" style={{ maxWidth: 1160, margin: "0 auto", padding: "0 40px 120px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 48 }}>
          <h2 style={{ fontFamily: T.serif, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.8rem,3vw,2.8rem)", letterSpacing: "-0.03em", color: "#0a0a0a" }}>Selected Work</h2>
          <span style={{ fontSize: "0.72rem", color: "#bbb", letterSpacing: ".1em", textTransform: "uppercase" }}>2023–2025</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {projects.map((p, i) => (
            <div key={p.id}
              style={{ borderTop: "1px solid #ebebeb", padding: "32px 0", cursor: "pointer", transition: "background 0.3s ease" }}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}>
              <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr auto", gap: 24, alignItems: "center" }}>
                {/* Number */}
                <span style={{ fontFamily: T.serif, fontStyle: "italic", fontSize: "0.82rem", color: "#bbb" }}>{p.id}</span>

                {/* Title + sub */}
                <div>
                  <h3 style={{
                    fontSize: "clamp(1.1rem,2.2vw,1.6rem)", fontWeight: 400, letterSpacing: "-0.025em",
                    color: hoveredProject === i ? "#0a0a0a" : "#222",
                    transition: "color 0.25s ease", marginBottom: 4,
                  }}>{p.title}</h3>
                  <p style={{ fontSize: "0.78rem", color: "#aaa", fontWeight: 300 }}>{p.type}</p>
                </div>

                {/* Preview strip */}
                <div style={{
                  height: hoveredProject === i ? 100 : 0,
                  background: p.color,
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "height 0.5s cubic-bezier(.4,0,.2,1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative",
                }}>
                  <span style={{ fontSize: "0.72rem", color: p.accent, fontWeight: 500, opacity: hoveredProject === i ? 1 : 0, transition: "opacity 0.3s ease 0.2s", letterSpacing: ".08em", textTransform: "uppercase" }}>{p.desc.slice(0, 48)}…</span>
                </div>

                {/* Year + tags */}
                <div style={{ textAlign: "right", display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
                  <span style={{ fontSize: "0.78rem", color: "#bbb" }}>{p.year}</span>
                  <div style={{ display: "flex", gap: 6 }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontSize: "0.62rem", color: "#aaa", padding: "2px 8px", border: "1px solid #e8e8e8", letterSpacing: ".06em" }}>{t}</span>
                    ))}
                  </div>
                  <ArrowUpRight size={14} style={{ color: hoveredProject === i ? "#0a0a0a" : "#ddd", transition: "color 0.25s ease" }} />
                </div>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid #ebebeb" }} />
        </div>

        <div style={{ marginTop: 40, textAlign: "center" }}>
          <a href="#" style={{ fontSize: "0.8rem", letterSpacing: ".1em", textTransform: "uppercase", color: "#888", textDecoration: "none", borderBottom: "1px solid #e0e0e0", paddingBottom: 2, fontWeight: 400 }}>View all projects →</a>
        </div>
      </section>

      {/* ── PHILOSOPHY QUOTE ─────────────────────────────────── */}
      <section style={{ background: "#0a0a0a", padding: "120px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, alignItems: "center" }}>
          <div>
            <div style={{ width: 32, height: 1, background: "rgba(255,255,255,0.2)", marginBottom: 20 }} />
            <p style={{ fontSize: "0.7rem", letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontWeight: 500 }}>Our Approach</p>
          </div>
          <blockquote style={{ margin: 0 }}>
            <p style={{ fontFamily: T.serif, fontStyle: "italic", fontSize: "clamp(1.6rem,3.5vw,3rem)", fontWeight: 300, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.3, marginBottom: 24 }}>
              &ldquo;Remove what&apos;s unnecessary until only truth remains. Then remove a little more.&rdquo;
            </p>
            <cite style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", fontStyle: "normal", letterSpacing: ".08em", textTransform: "uppercase" }}>— Studio Design Manifesto, 2019</cite>
          </blockquote>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "120px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
          <div>
            <span style={{ fontSize: "0.7rem", letterSpacing: ".14em", textTransform: "uppercase", color: "#aaa", display: "block", marginBottom: 16 }}>What we do</span>
            <h2 style={{ fontFamily: T.serif, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.8rem,3vw,2.8rem)", letterSpacing: "-0.03em", color: "#0a0a0a", lineHeight: 1.15 }}>
              Our Services
            </h2>
          </div>
          <div>
            {services.map((s, i) => (
              <div key={i}
                style={{ borderTop: "1px solid #ebebeb", padding: "22px 0", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", transition: "padding 0.3s ease" }}
                onMouseEnter={() => setHoveredService(i)}
                onMouseLeave={() => setHoveredService(null)}>
                <div>
                  <span style={{
                    fontSize: "1.05rem", fontWeight: 400, color: hoveredService === i ? "#0a0a0a" : "#333",
                    transition: "color 0.25s ease", display: "block", marginBottom: 3,
                    letterSpacing: "-0.01em",
                  }}>{s.title}</span>
                  <span style={{ fontSize: "0.75rem", color: "#bbb", transition: "color 0.25s ease", fontWeight: 300 }}>{s.sub}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: "0.62rem", color: "#ccc", fontWeight: 500 }}>0{i + 1}</span>
                  <ArrowUpRight size={15} style={{ color: hoveredService === i ? "#0a0a0a" : "#e0e0e0", transition: "color 0.25s ease" }} />
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid #ebebeb" }} />
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────── */}
      <section style={{ background: "#fafafa", padding: "100px 40px", borderTop: "1px solid #ebebeb" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <span style={{ fontSize: "0.7rem", letterSpacing: ".14em", textTransform: "uppercase", color: "#aaa", display: "block", marginBottom: 10 }}>How we work</span>
            <h2 style={{ fontFamily: T.serif, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.8rem,3vw,2.8rem)", letterSpacing: "-0.03em", color: "#0a0a0a" }}>The Process</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 40 }}>
            {[
              { n: "01", title: "Discover", desc: "Deep-dive into your business, users, and competitive landscape to uncover what actually matters." },
              { n: "02", title: "Define", desc: "Clarify scope, voice, and principles. Remove ambiguity before a single pixel is placed." },
              { n: "03", title: "Design", desc: "Iterate rapidly from rough concepts to refined, pixel-perfect deliverables grounded in intent." },
              { n: "04", title: "Deliver", desc: "Ship to production with full handoff documentation, design tokens, and ongoing support." },
            ].map((step, i) => (
              <div key={i}>
                <div style={{ fontFamily: T.serif, fontStyle: "italic", fontSize: "2.5rem", fontWeight: 300, color: "#e0e0e0", letterSpacing: "-0.04em", marginBottom: 24, lineHeight: 1 }}>{step.n}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 500, color: "#0a0a0a", marginBottom: 12, letterSpacing: "-0.01em" }}>{step.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#888", lineHeight: 1.75, fontWeight: 300 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────────── */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "120px 40px", textAlign: "center" }}>
        <p style={{ fontSize: "0.72rem", letterSpacing: ".14em", textTransform: "uppercase", color: "#bbb", marginBottom: 28, fontWeight: 500 }}>Start a project</p>
        <h2 style={{ fontFamily: T.serif, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2rem,5vw,5rem)", letterSpacing: "-0.04em", color: "#0a0a0a", marginBottom: 36, lineHeight: 1.05 }}>
          Have something in mind?
        </h2>
        <a href="mailto:hello@studio.design" style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          fontSize: "clamp(1rem,2vw,1.4rem)", fontWeight: 300, color: "#0a0a0a",
          textDecoration: "none", letterSpacing: "-0.02em",
          borderBottom: "1px solid #ccc", paddingBottom: 4,
        }}>
          hello@studio.design <ArrowUpRight size={18} />
        </a>
        <div style={{ marginTop: 60, display: "flex", gap: 32, justifyContent: "center" }}>
          {["Twitter / X", "Instagram", "Dribbble", "LinkedIn"].map(s => (
            <a key={s} href="#" style={{ fontSize: "0.75rem", letterSpacing: ".08em", textTransform: "uppercase", color: "#bbb", textDecoration: "none", fontWeight: 400, transition: "color 0.2s ease" }}
              onMouseEnter={e => e.currentTarget.style.color = "#0a0a0a"}
              onMouseLeave={e => e.currentTarget.style.color = "#bbb"}>
              {s}
            </a>
          ))}
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid #ebebeb", padding: "28px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: T.serif, fontStyle: "italic", fontSize: "0.95rem", color: "#aaa" }}>Studio.</span>
          <span style={{ fontSize: "0.72rem", color: "#ccc", letterSpacing: ".06em" }}>© 2025 — Crafted with intention</span>
          <BackBtn light />
        </div>
      </footer>

      <style>{`
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.3)} }
        @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>
    </div>
  );
}

/* ─── 2. MODERN SAAS ─────────────────────────────────────────── */
function SaaSPage() {
  const [activePlan, setActivePlan] = useState("pro");
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const C = {
    bg: "#0e0e0e", surface: "#161616", border: "#222",
    text: "#f0f0f0", muted: "#6b6b6b", faint: "#3a3a3a",
    accent: "#3b7ef5", accentDim: "#1d3a6e",
    green: "#22c55e", red: "#ef4444",
  };

  const features = [
    { icon: BarChart2, title: "Event Analytics", desc: "Track any event, property, or funnel. Retroactive analysis lets you answer questions you didn't know you'd ask." },
    { icon: Users, title: "User Segmentation", desc: "Build precise cohorts based on behaviour, attributes, or lifecycle stage. Update dynamically as users evolve." },
    { icon: TrendingUp, title: "Retention Curves", desc: "See exactly where users drop off. Visualise day-1, day-7, and day-30 retention by any segment or feature." },
    { icon: FileText, title: "Custom Reports", desc: "Drag-and-drop report builder. Export to CSV, schedule email digests, or embed in Notion and Confluence." },
    { icon: Shield, title: "SOC 2 Certified", desc: "End-to-end encryption, role-based access, SSO via SAML, and a private cloud option for regulated industries." },
    { icon: Zap, title: "Sub-50ms Queries", desc: "Built on ClickHouse. Query billions of rows in under 50ms — no pre-aggregation, no sampling, no waiting." },
  ];

  const testimonials = [
    { quote: "Metrica replaced three separate tools for us. The retention analysis alone saved us 15 hours a week.", name: "Sarah Chen", role: "Head of Product, Loom", avatar: "SC" },
    { quote: "The query speed is genuinely shocking. We went from 40-second reports to sub-second. No hyperbole.", name: "James Okafor", role: "Data Lead, Monzo", avatar: "JO" },
  ];

  const plans = [
    {
      key: "starter", name: "Starter", price: "49", per: "mo",
      desc: "For early-stage teams getting a grip on their data.",
      items: ["Up to 5 seats", "10M events/month", "90-day data retention", "Core reports & funnels", "Email support"],
      cta: "Get started",
    },
    {
      key: "pro", name: "Pro", price: "199", per: "mo",
      desc: "For growth teams who need depth, speed, and control.",
      items: ["Unlimited seats", "500M events/month", "Unlimited retention", "All reports + custom SQL", "Slack + priority support", "SSO & audit logs"],
      cta: "Start free trial",
    },
  ];

  const bars = [48, 62, 55, 80, 71, 88, 76, 92, 84, 97, 89, 100];

  return (
    <div style={{ fontFamily: "system-ui,-apple-system,'Segoe UI',sans-serif", background: C.bg, minHeight: "100vh", color: C.text, overflowX: "hidden" }}>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, borderBottom: `1px solid ${C.border}`, background: "rgba(14,14,14,0.9)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 32px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 26, height: 26, background: C.accent, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <BarChart2 size={14} color="#fff" />
              </div>
              <span style={{ fontWeight: 600, fontSize: "0.95rem", letterSpacing: "-0.02em" }}>Metrica</span>
            </div>
            <div style={{ width: 1, height: 18, background: C.border }} />
            <div style={{ display: "flex", gap: 24 }}>
              {["Product", "Pricing", "Docs", "Blog", "Changelog"].map(l => (
                <a key={l} href="#" style={{ fontSize: "0.82rem", color: C.muted, textDecoration: "none", fontWeight: 400, letterSpacing: ".01em" }}
                  onMouseEnter={e => e.currentTarget.style.color = C.text}
                  onMouseLeave={e => e.currentTarget.style.color = C.muted}>{l}</a>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <BackBtn />
            <a href="#" style={{ fontSize: "0.8rem", color: C.muted, textDecoration: "none", fontWeight: 500, padding: "7px 14px" }}>Log in</a>
            <a href="#" style={{ fontSize: "0.8rem", color: "#fff", background: C.accent, textDecoration: "none", fontWeight: 600, padding: "7px 16px", borderRadius: 7 }}>Get started</a>
          </div>
        </div>
      </nav>

      {/* ── ANNOUNCEMENT BAR ─────────────────────────────── */}
      <div style={{ background: C.accentDim, borderBottom: `1px solid ${C.border}`, padding: "9px 32px", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.accent }} />
        <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.7)", fontWeight: 400 }}>
          Metrica v3.0 — Custom SQL explorer, SOC 2 Type II, and 3× faster queries.
        </span>
        <a href="#" style={{ fontSize: "0.78rem", color: C.accent, textDecoration: "none", fontWeight: 600 }}>What's new →</a>
      </div>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "96px 32px 64px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 6, background: C.surface, border: `1px solid ${C.border}`, fontSize: "0.72rem", fontWeight: 500, color: C.muted, marginBottom: 32, letterSpacing: ".04em" }}>
          <span style={{ color: C.green, fontWeight: 700 }}>●</span> 12,400+ teams tracking with Metrica
        </div>
        <h1 style={{ fontSize: "clamp(2.6rem,6vw,5.2rem)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.06, marginBottom: 24, color: C.text }}>
          Product analytics that<br />your team will actually use.
        </h1>
        <p style={{ fontSize: "1.05rem", color: C.muted, maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.75, fontWeight: 400 }}>
          Track events, build funnels, understand retention, and ship better features — without a data team or a PhD in SQL.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 20 }}>
          <a href="#" style={{ fontSize: "0.88rem", fontWeight: 600, color: "#fff", background: C.accent, padding: "11px 24px", borderRadius: 8, textDecoration: "none" }}>Start free — no card needed</a>
          <a href="#" style={{ fontSize: "0.88rem", fontWeight: 500, color: C.text, background: C.surface, border: `1px solid ${C.border}`, padding: "11px 24px", borderRadius: 8, textDecoration: "none" }}>Book a 20-min demo</a>
        </div>
        <p style={{ fontSize: "0.72rem", color: C.faint }}>14-day free trial · Migrate from Mixpanel in 10 minutes · Cancel anytime</p>
      </section>

      {/* ── PRODUCT MOCKUP ──────────────────────────────────── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 80px" }}>
        <div style={{ border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden", background: C.surface, boxShadow: "0 32px 64px rgba(0,0,0,0.5)" }}>
          {/* Window chrome */}
          <div style={{ borderBottom: `1px solid ${C.border}`, padding: "12px 16px", display: "flex", alignItems: "center", gap: 8, background: "#111" }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
            <div style={{ flex: 1, marginLeft: 8, height: 24, background: C.border, borderRadius: 5, maxWidth: 280, display: "flex", alignItems: "center", paddingLeft: 10 }}>
              <span style={{ fontSize: "0.68rem", color: C.muted }}>app.metrica.io/dashboard</span>
            </div>
          </div>
          {/* Dashboard interior */}
          <div style={{ display: "flex", height: 420 }}>
            {/* Sidebar */}
            <div style={{ width: 180, borderRight: `1px solid ${C.border}`, padding: "20px 0", flexShrink: 0 }}>
              <div style={{ padding: "0 16px 16px", borderBottom: `1px solid ${C.border}`, marginBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 8px", borderRadius: 6, background: `${C.accent}22`, border: `1px solid ${C.accentDim}` }}>
                  <div style={{ width: 18, height: 18, borderRadius: 4, background: C.accent }} />
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: C.text }}>Acme Corp</span>
                </div>
              </div>
              {[["Overview", true], ["Events", false], ["Funnels", false], ["Retention", false], ["Cohorts", false], ["Reports", false], ["Settings", false]].map(([l, a]) => (
                <div key={l} style={{ padding: "7px 20px", fontSize: "0.78rem", color: a ? C.text : C.muted, fontWeight: a ? 600 : 400, background: a ? C.border : "transparent", cursor: "pointer" }}>{l}</div>
              ))}
            </div>
            {/* Main content */}
            <div style={{ flex: 1, padding: "20px 24px", overflow: "hidden" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div>
                  <p style={{ fontSize: "0.68rem", color: C.muted, marginBottom: 2 }}>Dashboard / Overview</p>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: C.text }}>Product Overview</h3>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <div style={{ fontSize: "0.7rem", color: C.muted, border: `1px solid ${C.border}`, borderRadius: 5, padding: "4px 10px" }}>Last 30 days ▾</div>
                  <div style={{ fontSize: "0.7rem", color: "#fff", background: C.accent, borderRadius: 5, padding: "4px 10px", fontWeight: 600 }}>Export</div>
                </div>
              </div>
              {/* KPIs */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 18 }}>
                {[["MAU", "48,291", "+12.4%", C.green], ["Avg Session", "4m 32s", "+8.1%", C.green], ["Churn Rate", "2.3%", "-0.4%", C.green], ["NPS Score", "62", "+7pts", C.green]].map(([label, val, chg, color]) => (
                  <div key={label} style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 8, padding: "12px 14px" }}>
                    <p style={{ fontSize: "0.62rem", color: C.muted, marginBottom: 6, textTransform: "uppercase", letterSpacing: ".06em" }}>{label}</p>
                    <p style={{ fontSize: "1.2rem", fontWeight: 700, color: C.text, letterSpacing: "-0.03em", marginBottom: 2 }}>{val}</p>
                    <span style={{ fontSize: "0.62rem", fontWeight: 600, color }}>{chg}</span>
                  </div>
                ))}
              </div>
              {/* Chart */}
              <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 8, padding: "14px 16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 600, color: C.text }}>Active Users — 12 months</span>
                  <span style={{ fontSize: "0.68rem", color: C.green, fontWeight: 600 }}>↑ 34% YoY</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 90 }}>
                  {bars.map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, background: i === bars.length - 1 ? C.accent : C.faint, borderRadius: "2px 2px 0 0", minHeight: 3 }} />
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => (
                    <span key={m} style={{ fontSize: "0.55rem", color: C.faint }}>{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGOS ────────────────────────────────────────────── */}
      <div style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "24px 32px", textAlign: "center" }}>
        <p style={{ fontSize: "0.7rem", color: C.faint, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 20 }}>Trusted by product teams at</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 52, flexWrap: "wrap" }}>
          {["Loom", "Monzo", "Linear", "Retool", "Brex", "Vercel"].map(co => (
            <span key={co} style={{ fontSize: "0.9rem", fontWeight: 700, color: C.faint, letterSpacing: "-0.02em" }}>{co}</span>
          ))}
        </div>
      </div>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "80px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
          {[["12.4k", "Product teams"], ["500B+", "Events tracked"], ["<50ms", "Query latency"], ["4.8 / 5", "G2 score"]].map(([num, label], i) => (
            <div key={i} style={{ borderLeft: i > 0 ? `1px solid ${C.border}` : "none", paddingLeft: i > 0 ? 40 : 0 }}>
              <div style={{ fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 700, letterSpacing: "-0.04em", color: C.text, lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: "0.78rem", color: C.muted, marginTop: 8 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────── */}
      <section style={{ borderTop: `1px solid ${C.border}`, padding: "80px 32px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontSize: "0.7rem", color: C.muted, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>Platform</p>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 700, letterSpacing: "-0.035em", color: C.text }}>
              Everything your team needs.<br /><span style={{ color: C.muted, fontWeight: 400 }}>Nothing it doesn&apos;t.</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, border: `1px solid ${C.border}`, borderRadius: 10, overflow: "hidden" }}>
            {features.map(({ icon: Icon, title, desc }, i) => (
              <div key={i}
                style={{ padding: "28px 26px", background: hoveredFeature === i ? "#1a1a1a" : C.surface, borderRight: i % 3 < 2 ? `1px solid ${C.border}` : "none", borderBottom: i < 3 ? `1px solid ${C.border}` : "none", transition: "background 0.2s", cursor: "default" }}
                onMouseEnter={() => setHoveredFeature(i)}
                onMouseLeave={() => setHoveredFeature(null)}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: C.bg, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <Icon size={16} color={hoveredFeature === i ? C.accent : C.muted} style={{ transition: "color 0.2s" }} />
                </div>
                <h3 style={{ fontSize: "0.9rem", fontWeight: 600, color: C.text, marginBottom: 10, letterSpacing: "-0.01em" }}>{title}</h3>
                <p style={{ fontSize: "0.82rem", color: C.muted, lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section style={{ borderTop: `1px solid ${C.border}`, padding: "80px 32px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <p style={{ fontSize: "0.7rem", color: C.muted, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 48, textAlign: "center" }}>What teams say</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: "32px 28px" }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 20 }}>
                  {Array(5).fill(0).map((_, j) => <span key={j} style={{ color: "#f59e0b", fontSize: "0.85rem" }}>★</span>)}
                </div>
                <p style={{ fontSize: "0.95rem", color: C.text, lineHeight: 1.7, marginBottom: 24, fontWeight: 300 }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: C.accentDim, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 700, color: C.accent }}>{t.avatar}</div>
                  <div>
                    <p style={{ fontSize: "0.82rem", fontWeight: 600, color: C.text }}>{t.name}</p>
                    <p style={{ fontSize: "0.72rem", color: C.muted }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section id="pricing" style={{ borderTop: `1px solid ${C.border}`, padding: "80px 32px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: "0.7rem", color: C.muted, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>Pricing</p>
            <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700, letterSpacing: "-0.035em", color: C.text }}>Simple, honest pricing.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14 }}>
            {plans.map(plan => {
              const active = activePlan === plan.key;
              return (
                <div key={plan.key}
                  onClick={() => setActivePlan(plan.key)}
                  style={{ background: active ? C.surface : "transparent", border: `1px solid ${active ? C.accent : C.border}`, borderRadius: 10, padding: "32px 28px", cursor: "pointer", transition: "all 0.2s" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 600, color: C.text }}>{plan.name}</h3>
                    {active && <span style={{ fontSize: "0.62rem", fontWeight: 700, color: C.accent, background: C.accentDim, padding: "2px 8px", borderRadius: 4, textTransform: "uppercase", letterSpacing: ".06em" }}>Popular</span>}
                  </div>
                  <p style={{ fontSize: "0.8rem", color: C.muted, marginBottom: 24, lineHeight: 1.6 }}>{plan.desc}</p>
                  <div style={{ marginBottom: 28 }}>
                    <span style={{ fontSize: "2.4rem", fontWeight: 700, color: C.text, letterSpacing: "-0.04em" }}>${plan.price}</span>
                    <span style={{ fontSize: "0.82rem", color: C.muted }}> / {plan.per}</span>
                  </div>
                  <a href="#" style={{ display: "block", textAlign: "center", fontSize: "0.85rem", fontWeight: 600, padding: "10px", borderRadius: 7, background: active ? C.accent : "transparent", color: active ? "#fff" : C.muted, border: `1px solid ${active ? C.accent : C.border}`, textDecoration: "none", marginBottom: 24 }}>{plan.cta}</a>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {plan.items.map(item => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.82rem", color: C.text }}>
                        <Check size={13} color={C.green} strokeWidth={2.5} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <p style={{ textAlign: "center", fontSize: "0.75rem", color: C.faint, marginTop: 20 }}>Enterprise plans with custom limits, dedicated infra, and SLAs available. <a href="#" style={{ color: C.muted, textDecoration: "none" }}>Contact us →</a></p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section style={{ borderTop: `1px solid ${C.border}`, background: C.surface, padding: "80px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 700, letterSpacing: "-0.04em", color: C.text, marginBottom: 16 }}>
            Stop guessing. Start knowing.
          </h2>
          <p style={{ fontSize: "0.95rem", color: C.muted, lineHeight: 1.7, marginBottom: 36 }}>
            Join 12,400 product teams who replaced guesswork with data. Set up in 10 minutes.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
            <a href="#" style={{ fontSize: "0.88rem", fontWeight: 600, color: "#fff", background: C.accent, padding: "12px 28px", borderRadius: 8, textDecoration: "none" }}>Start free trial</a>
            <a href="#" style={{ fontSize: "0.88rem", fontWeight: 500, color: C.muted, border: `1px solid ${C.border}`, padding: "12px 20px", borderRadius: 8, textDecoration: "none" }}>Read the docs</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer style={{ borderTop: `1px solid ${C.border}`, padding: "28px 32px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 20, height: 20, background: C.accent, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <BarChart2 size={11} color="#fff" />
            </div>
            <span style={{ fontSize: "0.82rem", fontWeight: 600, color: C.muted }}>Metrica</span>
          </div>
          <span style={{ fontSize: "0.72rem", color: C.faint }}>© 2025 Metrica, Inc.</span>
          <BackBtn />
        </div>
      </footer>
    </div>
  );
}

/* ─── 3. GLASSMORPHISM ───────────────────────────────────────── */
function GlassPage() {
  const tracks = [
    { title: "Neon Nights", artist: "Synthwave", dur: "3:42", color: "#f59e0b" },
    { title: "Ethereal Drift", artist: "Ambient", dur: "5:18", color: "#6366f1" },
    { title: "Crystal Echo", artist: "Chillwave", dur: "4:01", color: "#10b981" },
    { title: "Violet Dreams", artist: "Lo-fi", dur: "3:55", color: "#ec4899" },
  ];
  const glass = {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 20,
  };
  return (
    <div style={{ fontFamily: "system-ui,-apple-system,sans-serif", background: "linear-gradient(135deg,#1a0533 0%,#0d1b4b 45%,#0a2038 100%)", minHeight: "100vh", color: "#fff", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "fixed", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(139,92,246,0.28),transparent 65%)", top: -200, left: -150, pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,0.22),transparent 65%)", bottom: -120, right: -100, pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle,rgba(236,72,153,0.18),transparent 65%)", top: "40%", right: "18%", pointerEvents: "none", zIndex: 0 }} />

      <nav style={{ ...glass, borderRadius: 0, borderLeft: "none", borderRight: "none", borderTop: "none", padding: "18px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#ec4899,#8b5cf6,#6366f1)" }} />
          <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>Aura</span>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: "0.85rem", color: "rgba(255,255,255,0.55)" }}>
          {["Discover", "Albums", "Artists", "Playlists"].map(l => <a key={l} href="#" style={{ textDecoration: "none", color: "inherit" }}>{l}</a>)}
        </div>
        <BackBtn />
      </nav>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "70px 32px 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", position: "relative", zIndex: 5 }}>
        <div>
          <div style={{ display: "inline-flex", padding: "5px 14px", ...glass, borderRadius: 9999, fontSize: "0.72rem", fontWeight: 600, color: "rgba(255,255,255,0.65)", marginBottom: 24 }}>
            ✦ Music for every moment
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem,5vw,4.2rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 20 }}>
            Sound that<br /><span style={{ background: "linear-gradient(90deg,#ec4899,#8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>transcends</span> the noise.
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 36, maxWidth: 400 }}>
            Discover, stream, and feel music like never before. Immersive audio experiences powered by AI.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="#" style={{ background: "linear-gradient(135deg,#ec4899,#8b5cf6)", color: "#fff", padding: "12px 28px", borderRadius: 12, fontSize: "0.88rem", fontWeight: 700, textDecoration: "none" }}>Start Listening</a>
            <a href="#" style={{ ...glass, color: "rgba(255,255,255,0.65)", padding: "12px 22px", borderRadius: 12, fontSize: "0.88rem", fontWeight: 600, textDecoration: "none" }}>Explore →</a>
          </div>
          <div style={{ display: "flex", gap: 20, marginTop: 40 }}>
            {[["40M+", "Songs"], ["5★", "Rating"], ["150+", "Countries"]].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontSize: "1.4rem", fontWeight: 800, letterSpacing: "-0.03em" }}>{v}</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ ...glass, padding: "24px", maxWidth: 360, marginLeft: "auto", width: "100%" }}>
          <div style={{ width: "100%", aspectRatio: "1", borderRadius: 16, background: "linear-gradient(135deg,#ec4899,#8b5cf6,#6366f1)", marginBottom: 18, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", width: 120, height: 120, borderRadius: "50%", background: "rgba(0,0,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(255,255,255,0.85)" }} />
            </div>
          </div>
          <p style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 2 }}>Violet Dreams</p>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", marginBottom: 14 }}>Lo-fi Collective · 2025</p>
          <div style={{ height: 3, background: "rgba(255,255,255,0.1)", borderRadius: 9999, marginBottom: 18 }}>
            <div style={{ width: "42%", height: "100%", background: "linear-gradient(90deg,#ec4899,#8b5cf6)", borderRadius: 9999 }} />
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 20, alignItems: "center", marginBottom: 20 }}>
            {["⏮", "⏸", "⏭"].map((c, i) => (
              <button key={i} style={{ background: i === 1 ? "rgba(236,72,153,0.25)" : "transparent", border: "none", color: "#fff", fontSize: i === 1 ? "1.3rem" : "1rem", width: i === 1 ? 48 : 36, height: i === 1 ? 48 : 36, borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>{c}</button>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
            {tracks.map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: `${t.color}33`, border: `1px solid ${t.color}55`, flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: "0.78rem", fontWeight: 600, color: i === 3 ? "#ec4899" : "rgba(255,255,255,0.8)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{t.title}</p>
                  <p style={{ fontSize: "0.66rem", color: "rgba(255,255,255,0.35)" }}>{t.artist}</p>
                </div>
                <span style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.3)" }}>{t.dur}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 32px 80px", display: "flex", gap: 12, flexWrap: "wrap", position: "relative", zIndex: 5 }}>
        {["Lossless Audio", "AI Recommendations", "Offline Mode", "No Ads", "Social Listening", "Concert Alerts", "Lyrics Sync"].map((f) => (
          <div key={f} style={{ ...glass, borderRadius: 9999, padding: "10px 20px", fontSize: "0.82rem", color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>{f}</div>
        ))}
      </section>
    </div>
  );
}

/* ─── 4. NEUMORPHISM ─────────────────────────────────────────── */
function NeumorphismPage() {
  const BG = "#e0e5ec";
  const sh = "8px 8px 16px #b8bec7,-8px -8px 16px #ffffff";
  const shIn = "inset 5px 5px 10px #b8bec7,inset -5px -5px 10px #ffffff";
  const neu = (ex = {}) => ({ background: BG, boxShadow: sh, borderRadius: 16, ...ex });
  const neuIn = (ex = {}) => ({ background: BG, boxShadow: shIn, borderRadius: 12, ...ex });
  return (
    <div style={{ fontFamily: "system-ui,-apple-system,sans-serif", background: BG, minHeight: "100vh", color: "#5a6270", padding: "32px 16px" }}>
      <div style={{ maxWidth: 460, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <div>
            <p style={{ fontSize: "0.7rem", letterSpacing: ".1em", textTransform: "uppercase", color: "#9aa5b4", marginBottom: 3 }}>Good morning</p>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#3d4856", letterSpacing: "-0.02em" }}>Alex Johnson</h1>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <BackBtn light />
            <div style={{ ...neu(), width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 14, flexShrink: 0 }}>
              <Bell size={18} color="#7b8ea0" />
            </div>
          </div>
        </div>

        <div style={{ ...neu({ borderRadius: 24 }), padding: "32px 28px", marginBottom: 24 }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: ".1em", textTransform: "uppercase", color: "#9aa5b4", marginBottom: 8 }}>Total Balance</p>
          <div style={{ fontSize: "2.8rem", fontWeight: 700, color: "#3d4856", letterSpacing: "-0.04em", marginBottom: 4 }}>$24,560<span style={{ fontSize: "1.2rem", color: "#9aa5b4" }}>.00</span></div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 24 }}>
            <TrendingUp size={14} color="#5ba090" />
            <span style={{ fontSize: "0.78rem", color: "#5ba090", fontWeight: 600 }}>+12.4% this month</span>
          </div>
          <div style={{ ...neuIn(), height: 8, overflow: "hidden", padding: 0 }}>
            <div style={{ width: "65%", height: "100%", background: "linear-gradient(90deg,#6b9fca,#8bb8d4)", borderRadius: 8 }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: "0.68rem", color: "#9aa5b4" }}>
            <span>Spent: $15,940</span><span>Budget: $24,560</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 24 }}>
          {[["↑", "Send"], ["↓", "Receive"], ["⇌", "Transfer"], ["$", "Pay"]].map(([icon, label], i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <div style={{ ...neu({ width: 52, height: 52, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center" }) }}>
                <span style={{ fontSize: "1.2rem", color: "#6b9fca" }}>{icon}</span>
              </div>
              <span style={{ fontSize: "0.66rem", color: "#9aa5b4", fontWeight: 600 }}>{label}</span>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 24 }}>
          {[["Income", "$8,240", "+8.2%", "#5ba090"], ["Expenses", "$3,680", "-2.1%", "#c17a7a"]].map(([label, val, chg, color], i) => (
            <div key={i} style={{ ...neu({ borderRadius: 20 }), padding: "20px 18px" }}>
              <p style={{ fontSize: "0.68rem", color: "#9aa5b4", marginBottom: 8, textTransform: "uppercase", letterSpacing: ".08em" }}>{label}</p>
              <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "#3d4856", letterSpacing: "-0.03em", marginBottom: 4 }}>{val}</p>
              <span style={{ fontSize: "0.72rem", color, fontWeight: 600 }}>{chg}</span>
            </div>
          ))}
        </div>

        <div style={{ ...neu({ borderRadius: 24 }), padding: "22px 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <span style={{ fontWeight: 700, color: "#3d4856", fontSize: "0.9rem" }}>Recent Transactions</span>
            <span style={{ fontSize: "0.7rem", color: "#6b9fca" }}>See all</span>
          </div>
          {[["Netflix", "Subscription", "-$15.99", "#e85d5d"], ["Salary", "Income", "+$4,200", "#5ba090"], ["Amazon", "Shopping", "-$89.50", "#e85d5d"], ["Freelance", "Income", "+$750", "#5ba090"]].map(([name, type, amount, color], i, arr) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 0", borderBottom: i < arr.length - 1 ? "1px solid rgba(0,0,0,0.04)" : "none" }}>
              <div style={{ ...neuIn({ width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }) }}>
                <span style={{ fontSize: "0.78rem", color: "#7b8ea0", fontWeight: 700 }}>{name[0]}</span>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 600, fontSize: "0.85rem", color: "#3d4856" }}>{name}</p>
                <p style={{ fontSize: "0.7rem", color: "#9aa5b4" }}>{type}</p>
              </div>
              <span style={{ fontWeight: 700, fontSize: "0.88rem", color }}>{amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── 5. BRUTALISM ────────────────────────────────────────────── */
function BrutalismPage() {
  const border = "3px solid #000";
  const projects = [
    { id: "001", name: "REVOLT STUDIO", cat: "Brand Identity", year: "2025", color: "#FFE000" },
    { id: "002", name: "NAKED TRUTH", cat: "Editorial Design", year: "2025", color: "#fff" },
    { id: "003", name: "IRON GRID", cat: "Web Design", year: "2024", color: "#FF3B3B" },
    { id: "004", name: "MANIFEST", cat: "Motion & Video", year: "2024", color: "#00FF87" },
    { id: "005", name: "CONCRETE TYPE", cat: "Typography", year: "2023", color: "#FFE000" },
  ];
  return (
    <div style={{ fontFamily: "'Courier New',Courier,monospace", background: "#fff", minHeight: "100vh", color: "#000" }}>
      <header style={{ borderBottom: border, padding: "0 32px", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "stretch" }}>
        <div style={{ padding: "20px 0", borderRight: border }}>
          <h1 style={{ fontSize: "clamp(1.5rem,4vw,2.5rem)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1, textTransform: "uppercase" }}>
            BRUTAL<span style={{ background: "#FFE000", padding: "0 6px" }}>FORM</span>
          </h1>
          <p style={{ fontSize: "0.68rem", letterSpacing: ".1em", marginTop: 5, color: "#555" }}>CREATIVE STUDIO — EST. 2019</p>
        </div>
        <div style={{ padding: "20px 24px", display: "flex", alignItems: "center" }}>
          <BackBtn light />
        </div>
      </header>

      <section style={{ borderBottom: border, padding: "52px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
        <div>
          <div style={{ border: border, background: "#FFE000", display: "inline-block", padding: "4px 10px", fontSize: "0.68rem", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 18 }}>AVAILABLE FOR WORK</div>
          <h2 style={{ fontSize: "clamp(2.5rem,6vw,5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.92, textTransform: "uppercase", marginBottom: 22 }}>
            WE MAKE UGLY<br />BEAUTIFUL.
          </h2>
          <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "#333", borderLeft: "4px solid #FFE000", paddingLeft: 14, maxWidth: 400, marginBottom: 28 }}>
            We reject templates, safe choices, and beige design. Every pixel is intentional — loud and unapologetic.
          </p>
          <div style={{ display: "flex" }}>
            <a href="#" style={{ border, background: "#000", color: "#fff", padding: "14px 28px", fontFamily: "inherit", fontWeight: 900, fontSize: "0.88rem", textDecoration: "none", textTransform: "uppercase", letterSpacing: ".06em" }}>HIRE US</a>
            <a href="#" style={{ border, borderLeft: "none", background: "#FFE000", color: "#000", padding: "14px 28px", fontFamily: "inherit", fontWeight: 900, fontSize: "0.88rem", textDecoration: "none", textTransform: "uppercase", letterSpacing: ".06em" }}>OUR WORK ↗</a>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border }}>
          {["🔥", "💀", "⚡", "🎯"].map((em, i) => (
            <div key={i} style={{ paddingTop: "100%", position: "relative", borderRight: i % 2 === 0 ? border : "none", borderBottom: i < 2 ? border : "none", background: i === 1 ? "#FFE000" : "#fff" }}>
              <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: "2.5rem" }}>{em}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 32px" }}>
        <div style={{ borderBottom: border, padding: "14px 0", display: "grid", gridTemplateColumns: "80px 1fr 1fr 80px", gap: 16 }}>
          {["NO.", "PROJECT", "CATEGORY", "YEAR"].map(h => <span key={h} style={{ fontSize: "0.62rem", letterSpacing: ".12em", fontWeight: 900, color: "#999" }}>{h}</span>)}
        </div>
        {projects.map((p, i) => (
          <div key={i} style={{ borderBottom: border, padding: "20px 0", display: "grid", gridTemplateColumns: "80px 1fr 1fr 80px", gap: 16, alignItems: "center", cursor: "pointer", transition: "background .15s" }}
            onMouseEnter={e => e.currentTarget.style.background = p.color}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
            <span style={{ fontSize: "0.72rem", fontWeight: 900, color: "#aaa" }}>{p.id}</span>
            <span style={{ fontSize: "1.05rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em" }}>{p.name}</span>
            <span style={{ fontSize: "0.8rem", color: "#555" }}>{p.cat}</span>
            <span style={{ fontSize: "0.8rem", color: "#555" }}>{p.year}</span>
          </div>
        ))}
      </section>

      <div style={{ background: "#000", padding: "14px 0", overflow: "hidden", borderTop: border }}>
        <div style={{ display: "flex", gap: 48, animation: "marquee 18s linear infinite", whiteSpace: "nowrap" }}>
          {Array(8).fill("BRUTALISM · RAW DESIGN · NO FILTERS · BOLD CHOICES ·").map((t, i) => (
            <span key={i} style={{ fontSize: "0.8rem", color: "#FFE000", fontWeight: 900, letterSpacing: ".1em" }}>{t}</span>
          ))}
        </div>
      </div>

      <footer style={{ padding: "28px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: border }}>
        <span style={{ fontWeight: 900, fontSize: "1.1rem", textTransform: "uppercase" }}>BRUTALFORM ©2025</span>
        <span style={{ fontSize: "0.7rem", letterSpacing: ".1em", textTransform: "uppercase", color: "#555" }}>Made with rage &amp; precision</span>
      </footer>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

/* ─── 6. MATERIAL DESIGN ─────────────────────────────────────── */
function MaterialPage() {
  const PRIMARY = "#6200EA";
  const tasks = [
    { title: "Design system audit", done: true, priority: "High" },
    { title: "User research interviews", done: false, priority: "High" },
    { title: "Prototype v2 screens", done: false, priority: "Medium" },
    { title: "Stakeholder presentation", done: true, priority: "Low" },
    { title: "Usability testing session", done: false, priority: "High" },
    { title: "Accessibility review", done: false, priority: "Medium" },
  ];
  const elev = n => ({ boxShadow: n === 1 ? "0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24)" : n === 2 ? "0 3px 6px rgba(0,0,0,0.15),0 2px 4px rgba(0,0,0,0.12)" : "0 10px 20px rgba(0,0,0,0.15),0 3px 6px rgba(0,0,0,0.1)" });
  return (
    <div style={{ fontFamily: "Roboto,system-ui,-apple-system,sans-serif", background: "#F5F5F5", minHeight: "100vh", color: "#212121" }}>
      <header style={{ background: PRIMARY, ...elev(3), padding: "0 20px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, cursor: "pointer" }}>
            {[0, 1, 2].map(i => <div key={i} style={{ height: 2, background: "#fff", borderRadius: 1, width: i === 1 ? 16 : 22 }} />)}
          </div>
          <span style={{ color: "#fff", fontSize: "1.25rem", fontWeight: 500, letterSpacing: ".0125em" }}>TaskFlow</span>
        </div>
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <BackBtn />
          {[Search, Bell].map((Icon, i) => (
            <button key={i} style={{ width: 40, height: 40, borderRadius: "50%", background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Icon size={20} color="rgba(255,255,255,0.87)" />
            </button>
          ))}
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", color: "#fff", fontWeight: 600 }}>A</div>
        </div>
      </header>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>
        <div style={{ display: "flex", gap: 0, marginBottom: 24, background: "#fff", ...elev(1), borderRadius: 4, overflow: "hidden" }}>
          {["All Tasks", "Today", "Upcoming", "Completed"].map((t, i) => (
            <button key={t} style={{ flex: 1, padding: "14px 8px", border: "none", background: "transparent", fontFamily: "inherit", fontSize: "0.8rem", fontWeight: i === 0 ? 600 : 400, color: i === 0 ? PRIMARY : "rgba(0,0,0,0.55)", borderBottom: i === 0 ? `2px solid ${PRIMARY}` : "2px solid transparent", cursor: "pointer", letterSpacing: ".06em", textTransform: "uppercase" }}>{t}</button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 24 }}>
          {[["12", "Total Tasks", "#6200EA"], ["7", "In Progress", "#0091EA"], ["5", "Completed", "#00C853"]].map(([num, label, color], i) => (
            <div key={i} style={{ background: "#fff", ...elev(1), borderRadius: 8, padding: "20px 20px 16px", borderTop: `4px solid ${color}` }}>
              <div style={{ fontSize: "2rem", fontWeight: 700, color, marginBottom: 2 }}>{num}</div>
              <div style={{ fontSize: "0.78rem", color: "rgba(0,0,0,0.54)", letterSpacing: ".03em" }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{ background: "#fff", ...elev(1), borderRadius: 8, overflow: "hidden", marginBottom: 80 }}>
          <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 style={{ fontSize: "1rem", fontWeight: 500, color: "rgba(0,0,0,0.87)", letterSpacing: ".0125em" }}>My Tasks</h2>
          </div>
          {tasks.map((task, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 20px", borderBottom: i < tasks.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", border: task.done ? "none" : "2px solid rgba(0,0,0,0.35)", background: task.done ? PRIMARY : "transparent", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {task.done && <Check size={11} color="#fff" strokeWidth={3} />}
              </div>
              <span style={{ flex: 1, fontSize: "0.92rem", color: task.done ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.87)", textDecoration: task.done ? "line-through" : "none" }}>{task.title}</span>
              <span style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: ".05em", padding: "2px 8px", borderRadius: 12, background: task.priority === "High" ? "#FFEBEE" : task.priority === "Medium" ? "#FFF8E1" : "#E8F5E9", color: task.priority === "High" ? "#C62828" : task.priority === "Medium" ? "#F57F17" : "#2E7D32" }}>{task.priority}</span>
            </div>
          ))}
        </div>
      </div>

      <button style={{ position: "fixed", bottom: 28, right: 28, width: 56, height: 56, borderRadius: 16, background: PRIMARY, border: "none", ...elev(3), display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 200 }}>
        <Plus size={24} color="#fff" />
      </button>
    </div>
  );
}

/* ─── 7. DASHBOARD / ADMIN ────────────────────────────────────── */
function DashboardPage() {
  const navLocal = [
    { icon: Home, label: "Overview", active: true },
    { icon: BarChart2, label: "Analytics" },
    { icon: Users, label: "Customers" },
    { icon: FileText, label: "Reports" },
    { icon: Settings, label: "Settings" },
  ];
  const kpis = [
    { label: "Total Revenue", value: "$48,294", change: "+14.2%", up: true, icon: DollarSign, color: "#3b82f6" },
    { label: "Active Users", value: "12,847", change: "+8.1%", up: true, icon: Users, color: "#10b981" },
    { label: "Bounce Rate", value: "24.3%", change: "-3.2%", up: false, icon: Activity, color: "#f59e0b" },
    { label: "Page Views", value: "284,291", change: "+22.5%", up: true, icon: Eye, color: "#8b5cf6" },
  ];
  const bars = [65, 48, 82, 55, 90, 72, 60, 88, 45, 77, 92, 58];
  const tableRows = [
    ["Acme Corp", "Enterprise", "$12,400", "Active"],
    ["Globex Inc", "Pro", "$4,200", "Active"],
    ["Initech", "Starter", "$890", "Trial"],
    ["Umbrella LLC", "Enterprise", "$18,200", "Active"],
    ["Hooli", "Pro", "$3,600", "Inactive"],
  ];
  return (
    <div style={{ fontFamily: "system-ui,-apple-system,sans-serif", background: "#0d1117", minHeight: "100vh", color: "#c9d1d9", display: "flex" }}>
      <aside style={{ width: 220, background: "#161b22", borderRight: "1px solid #30363d", display: "flex", flexDirection: "column", padding: "20px 0", flexShrink: 0, position: "fixed", height: "100vh", zIndex: 50 }}>
        <div style={{ padding: "0 16px 20px", borderBottom: "1px solid #30363d" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 7, background: "linear-gradient(135deg,#3b82f6,#8b5cf6)" }} />
            <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "#e6edf3" }}>DataFlow</span>
          </div>
        </div>
        <nav style={{ padding: "12px 8px", flex: 1 }}>
          {navLocal.map(({ icon: Icon, label, active }, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 10px", borderRadius: 8, marginBottom: 2, background: active ? "rgba(59,130,246,0.1)" : "transparent", color: active ? "#3b82f6" : "#8b949e", cursor: "pointer" }}>
              <Icon size={16} />
              <span style={{ fontSize: "0.85rem", fontWeight: active ? 600 : 400 }}>{label}</span>
            </div>
          ))}
        </nav>
        <div style={{ padding: "12px 14px", borderTop: "1px solid #30363d" }}>
          <BackBtn />
        </div>
      </aside>

      <main style={{ marginLeft: 220, flex: 1, padding: "24px 28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
          <div>
            <p style={{ fontSize: "0.72rem", color: "#8b949e", marginBottom: 2 }}>Dashboard / Overview</p>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#e6edf3", letterSpacing: "-0.02em" }}>Analytics Overview</h1>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <select style={{ background: "#21262d", border: "1px solid #30363d", color: "#c9d1d9", padding: "8px 14px", borderRadius: 8, fontSize: "0.82rem", cursor: "pointer" }}>
              <option>Last 30 days</option>
            </select>
            <button style={{ background: "#3b82f6", border: "none", color: "#fff", padding: "8px 16px", borderRadius: 8, fontSize: "0.82rem", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
              <Download size={14} /> Export
            </button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 22 }}>
          {kpis.map(({ label, value, change, up, icon: Icon, color }, i) => (
            <div key={i} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "18px 18px 14px", borderTop: `2px solid ${color}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <span style={{ fontSize: "0.72rem", color: "#8b949e" }}>{label}</span>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={14} color={color} />
                </div>
              </div>
              <div style={{ fontSize: "1.55rem", fontWeight: 700, color: "#e6edf3", letterSpacing: "-0.03em", marginBottom: 4 }}>{value}</div>
              <span style={{ fontSize: "0.7rem", fontWeight: 600, color: up ? "#10b981" : "#ef4444" }}>{change} vs last period</span>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 22 }}>
          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h3 style={{ fontSize: "0.88rem", fontWeight: 600, color: "#e6edf3" }}>Revenue (12 months)</h3>
              <span style={{ fontSize: "0.72rem", color: "#3b82f6", fontWeight: 600 }}>+22.4% YoY</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 120 }}>
              {bars.map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, background: `rgba(59,130,246,${0.3 + i * 0.04})`, borderRadius: "3px 3px 0 0", minHeight: 4 }} />
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: "0.6rem", color: "#8b949e" }}>
              {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"].map((m, i) => <span key={i}>{m}</span>)}
            </div>
          </div>
          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "20px" }}>
            <h3 style={{ fontSize: "0.88rem", fontWeight: 600, color: "#e6edf3", marginBottom: 20 }}>Traffic Sources</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[["Organic Search", "48%", "#3b82f6"], ["Direct", "24%", "#10b981"], ["Social Media", "18%", "#f59e0b"], ["Referral", "10%", "#8b5cf6"]].map(([src, pct, color]) => (
                <div key={src}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: "0.78rem", color: "#c9d1d9" }}>{src}</span>
                    <span style={{ fontSize: "0.78rem", fontWeight: 600, color }}>{pct}</span>
                  </div>
                  <div style={{ height: 4, background: "rgba(255,255,255,0.05)", borderRadius: 2 }}>
                    <div style={{ width: pct, height: "100%", background: color, borderRadius: 2 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ padding: "16px 20px", borderBottom: "1px solid #30363d", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3 style={{ fontSize: "0.88rem", fontWeight: 600, color: "#e6edf3" }}>Top Clients</h3>
            <span style={{ fontSize: "0.72rem", color: "#3b82f6" }}>View all →</span>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #30363d" }}>
                {["Company", "Plan", "Revenue", "Status"].map(h => (
                  <th key={h} style={{ textAlign: "left", padding: "10px 20px", fontSize: "0.68rem", fontWeight: 600, color: "#8b949e", letterSpacing: ".06em", textTransform: "uppercase" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr key={i} style={{ borderBottom: i < tableRows.length - 1 ? "1px solid rgba(48,54,61,0.6)" : "none" }}>
                  <td style={{ padding: "12px 20px", color: "#e6edf3", fontWeight: 500 }}>{row[0]}</td>
                  <td style={{ padding: "12px 20px", color: "#8b949e" }}>{row[1]}</td>
                  <td style={{ padding: "12px 20px", color: "#e6edf3", fontWeight: 600 }}>{row[2]}</td>
                  <td style={{ padding: "12px 20px" }}>
                    <span style={{ fontSize: "0.68rem", fontWeight: 600, padding: "3px 10px", borderRadius: 9999, background: row[3] === "Active" ? "rgba(16,185,129,0.1)" : row[3] === "Trial" ? "rgba(245,158,11,0.1)" : "rgba(239,68,68,0.1)", color: row[3] === "Active" ? "#10b981" : row[3] === "Trial" ? "#f59e0b" : "#ef4444" }}>{row[3]}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

/* ─── 8. AI ASSISTANT ─────────────────────────────────────────── */
function AIAssistantPage() {
  const convos = [
    { title: "React performance tips", active: true },
    { title: "Python async patterns" },
    { title: "SQL query optimisation" },
    { title: "System design interview" },
    { title: "Docker networking guide" },
  ];
  const messages = [
    { role: "ai", text: "Hello! I'm Nexus AI. I can help you with code, analysis, writing, and complex problem-solving. What would you like to explore today?" },
    { role: "user", text: "Can you explain the difference between useCallback and useMemo in React?" },
    { role: "ai", text: "Great question! Both are React hooks that memoize values to prevent unnecessary re-computations:\n\n• useCallback memoizes a function — returns the same reference between renders unless dependencies change. Best for passing stable callbacks to child components.\n\n• useMemo memoizes a computed value — runs a function and caches the result. Use it for expensive calculations.\n\nKey insight: useCallback(fn, deps) ≡ useMemo(() => fn, deps)." },
    { role: "user", text: "When should I actually use them vs just writing normal functions?" },
  ];
  return (
    <div style={{ fontFamily: "system-ui,-apple-system,sans-serif", background: "#0a0a0a", minHeight: "100vh", color: "#e5e7eb", display: "flex" }}>
      <aside style={{ width: 260, background: "#111", borderRight: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column", flexShrink: 0, position: "fixed", height: "100vh" }}>
        <div style={{ padding: "16px 14px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 10, padding: "10px 12px", cursor: "pointer" }}>
            <div style={{ width: 24, height: 24, borderRadius: 6, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "0.6rem", color: "#fff", fontWeight: 700 }}>N</span>
            </div>
            <span style={{ flex: 1, fontSize: "0.85rem", fontWeight: 600 }}>Nexus AI Pro</span>
            <ChevronRight size={14} color="rgba(255,255,255,0.35)" />
          </div>
        </div>
        <div style={{ padding: "12px 14px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <button style={{ width: "100%", background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.22)", color: "#a5b4fc", padding: "9px 14px", borderRadius: 9, fontSize: "0.82rem", fontWeight: 600, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <Plus size={14} /> New conversation
          </button>
        </div>
        <div style={{ flex: 1, overflow: "auto", padding: "10px 8px" }}>
          <p style={{ fontSize: "0.62rem", letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", padding: "6px 8px", marginBottom: 4 }}>Recent</p>
          {convos.map((c, i) => (
            <div key={i} style={{ padding: "9px 10px", borderRadius: 8, marginBottom: 2, background: c.active ? "rgba(99,102,241,0.1)" : "transparent", color: c.active ? "#a5b4fc" : "rgba(255,255,255,0.45)", cursor: "pointer", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: 8 }}>
              <MessageSquare size={13} />
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.title}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: "12px 14px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <BackBtn />
        </div>
      </aside>

      <main style={{ marginLeft: 260, flex: 1, display: "flex", flexDirection: "column", height: "100vh" }}>
        <div style={{ padding: "14px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }} />
            <div>
              <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#e5e7eb" }}>React performance tips</p>
              <p style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.3)" }}>4 messages</p>
            </div>
          </div>
          <button style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.45)", padding: "6px 12px", borderRadius: 7, fontSize: "0.75rem", cursor: "pointer", fontFamily: "inherit" }}>Share</button>
        </div>

        <div style={{ flex: 1, overflow: "auto", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 22 }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ display: "flex", gap: 12, flexDirection: msg.role === "user" ? "row-reverse" : "row", alignItems: "flex-start" }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: msg.role === "ai" ? "linear-gradient(135deg,#6366f1,#8b5cf6)" : "rgba(255,255,255,0.1)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", fontWeight: 700 }}>
                {msg.role === "ai" ? "N" : "You"}
              </div>
              <div style={{ maxWidth: "70%", background: msg.role === "ai" ? "rgba(255,255,255,0.04)" : "rgba(99,102,241,0.14)", border: msg.role === "ai" ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(99,102,241,0.22)", borderRadius: msg.role === "ai" ? "4px 16px 16px 16px" : "16px 4px 16px 16px", padding: "12px 16px", fontSize: "0.87rem", lineHeight: 1.65, color: "rgba(255,255,255,0.82)", whiteSpace: "pre-line" }}>
                {msg.text}
              </div>
            </div>
          ))}
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "#fff", fontWeight: 700 }}>N</div>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px 16px 16px 16px", padding: "16px 18px", display: "flex", gap: 5, alignItems: "center" }}>
              {[0, 1, 2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.4)", animation: `aiBounce 1.4s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }} />)}
            </div>
          </div>
        </div>

        <div style={{ padding: "16px 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 14, padding: "12px 16px", display: "flex", alignItems: "flex-end", gap: 10 }}>
            <textarea placeholder="Ask Nexus anything..." style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", resize: "none", fontFamily: "inherit", lineHeight: 1.6, minHeight: 24, maxHeight: 120 }} rows={1} />
            <button style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
              <Send size={15} color="#fff" />
            </button>
          </div>
          <p style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.18)", textAlign: "center", marginTop: 8 }}>Nexus can make mistakes. Verify important information.</p>
        </div>
      </main>
      <style>{`@keyframes aiBounce{0%,100%{opacity:.3;transform:translateY(0)}50%{opacity:1;transform:translateY(-3px)}}`}</style>
    </div>
  );
}

/* ─── 9. E-COMMERCE ──────────────────────────────────────────── */
function EcommercePage() {
  const products = [
    { name: "Arc Flow Sneaker", price: 149, original: 199, color: "#e8f4ff", accent: "#2563eb", badge: "New" },
    { name: "Shadow Hoodie Pro", price: 89, original: null, color: "#1a1a1a", accent: "#fff", badge: null },
    { name: "Minimal Tote Bag", price: 59, original: 89, color: "#faf0e6", accent: "#92400e", badge: "Sale" },
    { name: "Focus Watch S4", price: 299, original: 399, color: "#f0fdf4", accent: "#166534", badge: "Sale" },
    { name: "Titanium Wallet", price: 79, original: null, color: "#f8f8f8", accent: "#374151", badge: null },
    { name: "Urban Backpack 32L", price: 129, original: 179, color: "#fdf4ff", accent: "#7e22ce", badge: "Popular" },
  ];
  return (
    <div style={{ fontFamily: "system-ui,-apple-system,sans-serif", background: "#fff", minHeight: "100vh", color: "#111" }}>
      <nav style={{ borderBottom: "1px solid #e5e7eb", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center", height: 64, position: "sticky", top: 0, background: "#fff", zIndex: 100 }}>
        <span style={{ fontWeight: 800, fontSize: "1.3rem", letterSpacing: "-0.04em" }}>FORMA</span>
        <div style={{ display: "flex", gap: 28, fontSize: "0.85rem", color: "#555" }}>
          {["New In", "Clothing", "Footwear", "Accessories", "Sale"].map(l => <a key={l} href="#" style={{ textDecoration: "none", color: "inherit" }}>{l}</a>)}
        </div>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <BackBtn light />
          <button style={{ background: "none", border: "none", cursor: "pointer", position: "relative" }}>
            <ShoppingCart size={22} color="#111" />
            <span style={{ position: "absolute", top: -7, right: -7, width: 16, height: 16, borderRadius: "50%", background: "#111", color: "#fff", fontSize: "0.5rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>3</span>
          </button>
        </div>
      </nav>

      <div style={{ background: "#111", color: "#fff", textAlign: "center", padding: "11px", fontSize: "0.75rem", letterSpacing: ".06em" }}>
        FREE SHIPPING ON ORDERS OVER $100 — USE CODE <strong>FORMA25</strong>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px" }}>
        <div style={{ background: "linear-gradient(135deg,#111,#2a2a2a)", borderRadius: 18, padding: "52px 52px", marginBottom: 48, display: "flex", justifyContent: "space-between", alignItems: "center", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.04)", right: -80, top: -80 }} />
          <div>
            <p style={{ fontSize: "0.68rem", letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 10 }}>Summer Collection 2025</p>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 22 }}>Designed for<br />the everyday.</h2>
            <a href="#" style={{ background: "#fff", color: "#111", padding: "13px 28px", borderRadius: 8, fontSize: "0.88rem", fontWeight: 700, textDecoration: "none", display: "inline-block" }}>Shop Collection</a>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {["#e8f4ff", "#fdf4ff", "#f0fdf4"].map((c, i) => (
              <div key={i} style={{ width: 80, height: 110, borderRadius: 14, background: c, transform: `rotate(${[-4, 0, 4][i]}deg)` }} />
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap", alignItems: "center" }}>
          {["All", "New In", "Under $100", "Sale", "Popular"].map((f, i) => (
            <button key={f} style={{ border: `1px solid ${i === 0 ? "#111" : "#e5e7eb"}`, background: i === 0 ? "#111" : "transparent", color: i === 0 ? "#fff" : "#555", padding: "7px 18px", borderRadius: 9999, fontSize: "0.8rem", fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>{f}</button>
          ))}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8, background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 8, padding: "7px 14px" }}>
            <Search size={14} color="#999" />
            <span style={{ fontSize: "0.8rem", color: "#999" }}>Search products...</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {products.map((p, i) => (
            <div key={i} style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #f0f0f0", cursor: "pointer", transition: "transform .2s,box-shadow .2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{ background: p.color, height: 210, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 80, height: 80, borderRadius: 16, background: `${p.accent}22`, border: `2px solid ${p.accent}44` }} />
                {p.badge && <div style={{ position: "absolute", top: 12, left: 12, background: p.badge === "Sale" ? "#ef4444" : p.badge === "New" ? "#111" : "#f59e0b", color: p.badge === "Popular" ? "#111" : "#fff", fontSize: "0.6rem", fontWeight: 700, padding: "3px 9px", borderRadius: 9999 }}>{p.badge}</div>}
                <button style={{ position: "absolute", top: 12, right: 12, width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.9)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Heart size={14} color="#111" />
                </button>
              </div>
              <div style={{ padding: "14px 16px 16px" }}>
                <p style={{ fontSize: "0.9rem", fontWeight: 600, marginBottom: 8, color: "#111" }}>{p.name}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ fontWeight: 700, fontSize: "1rem" }}>${p.price}</span>
                    {p.original && <span style={{ fontSize: "0.82rem", color: "#aaa", textDecoration: "line-through" }}>${p.original}</span>}
                  </div>
                  <button style={{ background: "#111", color: "#fff", border: "none", padding: "7px 14px", borderRadius: 7, fontSize: "0.75rem", fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── 10. LANDING PAGE ────────────────────────────────────────── */
function LandingPage() {
  const features = [
    { icon: Zap, title: "10x Faster Deployment", desc: "Ship features in minutes, not days. Our CI/CD pipeline handles the complexity so you don't have to." },
    { icon: Shield, title: "Enterprise-Grade Security", desc: "SOC 2, ISO 27001, GDPR compliant. Your data never leaves your region." },
    { icon: Users, title: "Built for Teams", desc: "Real-time collaboration, role-based access, and full audit trails out of the box." },
    { icon: BarChart2, title: "Deep Analytics", desc: "Understand every user interaction with our powerful built-in analytics suite." },
    { icon: Activity, title: "99.99% Uptime", desc: "Global CDN with automatic failover. Built to handle any traffic spike, any time." },
    { icon: Star, title: "5★ Support", desc: "24/7 expert support with an average first response under 4 minutes." },
  ];
  return (
    <div style={{ fontFamily: "system-ui,-apple-system,sans-serif", background: "#050510", minHeight: "100vh", color: "#fff", overflow: "hidden" }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)", backgroundSize: "50px 50px", pointerEvents: "none", zIndex: 0 }} />

      <nav style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }} />
          <span style={{ fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.03em" }}>Launchpad</span>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: "0.85rem", color: "rgba(255,255,255,0.45)" }}>
          {["Features", "Pricing", "Docs", "Blog"].map(l => <a key={l} href="#" style={{ textDecoration: "none", color: "inherit" }}>{l}</a>)}
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <BackBtn />
          <a href="#" style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff", padding: "9px 22px", borderRadius: 9, fontSize: "0.82rem", fontWeight: 700, textDecoration: "none" }}>Get started →</a>
        </div>
      </nav>

      <section style={{ maxWidth: 860, margin: "0 auto", padding: "100px 32px 70px", textAlign: "center", position: "relative", zIndex: 5 }}>
        <div style={{ position: "absolute", width: 700, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,0.18),transparent 65%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 16px", borderRadius: 9999, border: "1px solid rgba(99,102,241,0.35)", background: "rgba(99,102,241,0.07)", fontSize: "0.72rem", fontWeight: 600, color: "#a5b4fc", marginBottom: 28, letterSpacing: ".04em", position: "relative" }}>
          <Star size={12} fill="#a5b4fc" color="#a5b4fc" /> Rated #1 on Product Hunt this month
        </div>
        <h1 style={{ fontSize: "clamp(2.8rem,7vw,6rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 1.0, marginBottom: 24, position: "relative" }}>
          Launch faster.<br />
          <span style={{ background: "linear-gradient(90deg,#6366f1,#8b5cf6,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Scale further.</span>
        </h1>
        <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.45)", maxWidth: 540, margin: "0 auto 44px", lineHeight: 1.7, position: "relative" }}>
          The all-in-one platform for modern startups. From idea to production in a single afternoon — no DevOps PhD required.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 24, flexWrap: "wrap", position: "relative" }}>
          <a href="#" style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff", padding: "15px 36px", borderRadius: 12, fontSize: "1rem", fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            Start for free <ChevronRight size={16} />
          </a>
          <a href="#" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.65)", padding: "15px 28px", borderRadius: 12, fontSize: "1rem", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)" }}>
            Watch demo ▶
          </a>
        </div>
        <p style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.28)", position: "relative" }}>No credit card required · Free forever plan · Cancel anytime</p>
      </section>

      <section style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "24px 32px", textAlign: "center", marginBottom: 80, position: "relative", zIndex: 5 }}>
        <p style={{ fontSize: "0.72rem", letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: 20 }}>Trusted by teams at</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
          {["Stripe", "Vercel", "Linear", "Notion", "Figma", "GitHub"].map(co => (
            <span key={co} style={{ fontSize: "0.95rem", fontWeight: 700, color: "rgba(255,255,255,0.16)", letterSpacing: "-0.02em" }}>{co}</span>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px 100px", position: "relative", zIndex: 5 }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{ fontSize: "0.7rem", letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: 12 }}>Everything you need</p>
          <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.04em" }}>Built for builders who ship.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "28px 22px", transition: "border-color .2s,transform .2s", cursor: "default" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.28)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "none"; }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.18)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <Icon size={20} color="#8b5cf6" />
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, letterSpacing: "-0.01em" }}>{title}</h3>
              <p style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.42)", lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ margin: "0 32px 80px", background: "linear-gradient(135deg,rgba(99,102,241,0.12),rgba(139,92,246,0.08))", border: "1px solid rgba(99,102,241,0.18)", borderRadius: 24, padding: "72px 32px", textAlign: "center", position: "relative", zIndex: 5, overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,0.12),transparent 65%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
        <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 14, position: "relative" }}>Ready to launch?</h2>
        <p style={{ color: "rgba(255,255,255,0.45)", marginBottom: 32, fontSize: "1.05rem", position: "relative" }}>Join 40,000+ teams already building on Launchpad.</p>
        <a href="#" style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff", padding: "15px 40px", borderRadius: 12, fontSize: "1rem", fontWeight: 700, textDecoration: "none", position: "relative", display: "inline-block" }}>Get started for free →</a>
      </section>
    </div>
  );
}

/* ─── ROUTER ──────────────────────────────────────────────────── */
const PAGES = {
  minimalist:   { Component: MinimalistPage },
  saas:         { Component: SaaSPage },
  glassmorphism:{ Component: GlassPage },
  neumorphism:  { Component: NeumorphismPage },
  brutalism:    { Component: BrutalismPage },
  material:     { Component: MaterialPage },
  dashboard:    { Component: DashboardPage },
  "ai-assistant":{ Component: AIAssistantPage },
  ecommerce:    { Component: EcommercePage },
  "landing-page":{ Component: LandingPage },
};

export default function UIStylePage({ params }) {
  const { slug } = use(params);
  const page = PAGES[slug];
  if (!page) notFound();
  const { Component } = page;
  return <Component />;
}
