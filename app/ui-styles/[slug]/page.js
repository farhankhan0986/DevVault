"use client";
import { use, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, BarChart2, Users, Shield, Zap, Star, Check, ChevronRight,
  Send, Search, ShoppingCart, ShoppingBag, Bell, Settings, TrendingUp, DollarSign,
  Activity, Eye, MessageSquare, Home, FileText, PieChart, Download,
  Plus, Heart, ArrowUpRight, SlidersHorizontal, ChevronDown, User, Truck, Package,
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
      desc: "Complete rebrand for a Copenhagen-based architecture firm  from mark to material.",
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
            <span style={{ fontSize: "0.72rem", letterSpacing: ".12em", textTransform: "uppercase", color: "#999", fontWeight: 500 }}>Available for projects  2025</span>
          </div>
          <span style={{ fontSize: "0.72rem", color: "#bbb", letterSpacing: ".08em" }}>Based in Berlin, DE</span>
        </div>

        {/* Main headline  mix of serif and sans */}
        <h1 style={{ fontSize: "clamp(3rem,7.5vw,8rem)", fontWeight: 300, lineHeight: 1.0, letterSpacing: "-0.04em", marginBottom: 48, color: "#0a0a0a", maxWidth: 1000 }}>
          <span style={{ fontFamily: T.sans, display: "block" }}>Design that</span>
          <span style={{ fontFamily: T.serif, fontStyle: "italic", fontWeight: 300, display: "block", color: "#555" }}>speaks</span>
          <span style={{ fontFamily: T.sans, display: "block" }}>before words.</span>
        </h1>

        {/* Bottom row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.75, maxWidth: 380, fontWeight: 300 }}>
            A design practice building minimal, purpose-driven digital products  where every element earns its place.
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
            <cite style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", fontStyle: "normal", letterSpacing: ".08em", textTransform: "uppercase" }}> Studio Design Manifesto, 2019</cite>
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
          <span style={{ fontSize: "0.72rem", color: "#ccc", letterSpacing: ".06em" }}>© 2025  Crafted with intention</span>
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
    { icon: Zap, title: "Sub-50ms Queries", desc: "Built on ClickHouse. Query billions of rows in under 50ms  no pre-aggregation, no sampling, no waiting." },
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
          Metrica v3.0  Custom SQL explorer, SOC 2 Type II, and 3× faster queries.
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
          Track events, build funnels, understand retention, and ship better features  without a data team or a PhD in SQL.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 20 }}>
          <a href="#" style={{ fontSize: "0.88rem", fontWeight: 600, color: "#fff", background: C.accent, padding: "11px 24px", borderRadius: 8, textDecoration: "none" }}>Start free  no card needed</a>
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
                  <span style={{ fontSize: "0.72rem", fontWeight: 600, color: C.text }}>Active Users  12 months</span>
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
  const [activeTab, setActiveTab] = useState("Overview");

  // Deep muted background — not a neon gradient, just rich dark slate
  const BG = "#0c111e";

  // Glass mixin
  const G = (extra = {}) => ({
    background: "rgba(255,255,255,0.07)",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
    border: "1px solid rgba(255,255,255,0.11)",
    ...extra,
  });

  const trips = [
    { city: "Kyoto",    country: "Japan",   days: "12",  icon: "⛩",  bg: "rgba(255,255,255,0.04)" },
    { city: "Lisbon",   country: "Portugal",days: "7",   icon: "🌊",  bg: "rgba(255,255,255,0.03)" },
    { city: "Reykjavik",country: "Iceland", days: "5",   icon: "🌋",  bg: "rgba(255,255,255,0.03)" },
  ];

  const itinerary = [
    { time: "09:00", activity: "Arashiyama Bamboo Grove",  type: "Sightseeing" },
    { time: "12:30", activity: "Lunch at Kichisen",        type: "Dining"      },
    { time: "15:00", activity: "Fushimi Inari Shrine",     type: "Sightseeing" },
    { time: "19:30", activity: "Gion district walk",       type: "Leisure"     },
  ];

  return (
    <div style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", background: BG, minHeight: "100vh", color: "#fff", position: "relative", overflow: "hidden" }}>

      {/* ── Background depth elements (no neon — just white at very low opacity) ── */}
      <div aria-hidden style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        {/* Subtle large circles for glass blur depth */}
        <div style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "rgba(255,255,255,0.025)", top: -200, left: -180, filter: "blur(1px)" }} />
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "rgba(255,255,255,0.018)", bottom: -100, right: -80 }} />
        <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.014)", top: "35%", right: "22%" }} />
        {/* Fine dot grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "38px 38px", opacity: 0.4 }} />
      </div>

      {/* ── NAV ── */}
      <nav style={{ ...G({ borderRadius: 0, borderLeft: "none", borderRight: "none", borderTop: "none" }), padding: "16px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, border: "1.5px solid rgba(255,255,255,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "0.9rem" }}>✦</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.01em" }}>Venture</span>
        </div>
        <div style={{ display: "flex", gap: 2 }}>
          {["Overview", "Trips", "Discover", "Profile"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{ background: activeTab === tab ? "rgba(255,255,255,0.1)" : "transparent", border: activeTab === tab ? "1px solid rgba(255,255,255,0.15)" : "1px solid transparent", color: activeTab === tab ? "#fff" : "rgba(255,255,255,0.45)", padding: "7px 16px", borderRadius: 9, fontSize: "0.8rem", fontWeight: 500, cursor: "pointer", fontFamily: "inherit", transition: "all .2s" }}>
              {tab}
            </button>
          ))}
        </div>
        <BackBtn />
      </nav>

      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "40px 32px 60px", position: "relative", zIndex: 5 }}>

        {/* ── Page header ── */}
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 8 }}>Thursday, 26 June 2025</p>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 4 }}>
            Good morning, <span style={{ fontWeight: 700 }}>Sarah.</span>
          </h1>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>You have 3 upcoming trips and 1 flight this week.</p>
        </div>

        {/* ── Main grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 340px", gap: 16, alignItems: "start", marginBottom: 16 }}>

          {/* Active trip card */}
          <div style={{ ...G({ borderRadius: 20 }), padding: "28px 28px", gridColumn: "1 / 3" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, ...G({ borderRadius: 9999, padding: "4px 12px" }), fontSize: "0.68rem", fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 12, letterSpacing: ".06em", textTransform: "uppercase" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", flexShrink: 0 }} /> Active Trip
                </div>
                <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 4 }}>Kyoto, Japan</h2>
                <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>Day 4 of 12 · Returns 8 July 2025</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.3)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 4 }}>Weather</div>
                <div style={{ fontSize: "2.8rem", fontWeight: 200, letterSpacing: "-0.04em", lineHeight: 1 }}>18°</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>Partly Cloudy</div>
              </div>
            </div>

            {/* Progress */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: "0.72rem", color: "rgba(255,255,255,0.4)" }}>
                <span>Trip progress</span><span>4 / 12 days</span>
              </div>
              <div style={{ height: 3, background: "rgba(255,255,255,0.08)", borderRadius: 9999 }}>
                <div style={{ width: "33%", height: "100%", background: "rgba(255,255,255,0.6)", borderRadius: 9999 }} />
              </div>
            </div>

            {/* Today's itinerary */}
            <div>
              <p style={{ fontSize: "0.7rem", letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 14 }}>Today&apos;s itinerary</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {itinerary.map(({ time, activity, type }, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "11px 0", borderBottom: i < itinerary.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                    <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", width: 38, flexShrink: 0, fontVariantNumeric: "tabular-nums" }}>{time}</span>
                    <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.1)" }} />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: "0.85rem", fontWeight: 500, color: "rgba(255,255,255,0.85)", marginBottom: 2 }}>{activity}</p>
                      <p style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.3)" }}>{type}</p>
                    </div>
                    <div style={{ ...G({ borderRadius: 6, padding: "3px 9px" }), fontSize: "0.62rem", color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>
                      {i === 0 ? "Next" : ""}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Flight card */}
            <div style={{ ...G({ borderRadius: 18 }), padding: "22px 22px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
                <p style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.4)", letterSpacing: ".08em", textTransform: "uppercase" }}>Return Flight</p>
                <span style={{ ...G({ borderRadius: 9999, padding: "2px 9px" }), fontSize: "0.62rem", color: "rgba(255,255,255,0.55)" }}>Jul 8</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <div>
                  <p style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em" }}>KIX</p>
                  <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)" }}>Osaka</p>
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <div style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.25)", letterSpacing: ".06em" }}>11h 40m</div>
                  <div style={{ width: "80%", height: 1, background: "rgba(255,255,255,0.15)", position: "relative" }}>
                    <div style={{ position: "absolute", right: -3, top: "50%", transform: "translateY(-50%)", fontSize: "0.6rem", color: "rgba(255,255,255,0.4)" }}>✈</div>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em" }}>LHR</p>
                  <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)" }}>London</p>
                </div>
              </div>
              <div style={{ ...G({ borderRadius: 10, padding: "9px 12px" }), display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)" }}>British Airways · BA005</span>
                <span style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.35)" }}>Seat 14A</span>
              </div>
            </div>

            {/* Spend card */}
            <div style={{ ...G({ borderRadius: 18 }), padding: "22px 22px" }}>
              <p style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.4)", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 14 }}>Trip Spend</p>
              <p style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 4 }}>¥ 84,200</p>
              <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", marginBottom: 14 }}>of ¥ 150,000 budget</p>
              <div style={{ height: 3, background: "rgba(255,255,255,0.07)", borderRadius: 9999, marginBottom: 12 }}>
                <div style={{ width: "56%", height: "100%", background: "rgba(255,255,255,0.55)", borderRadius: 9999 }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {[["Accommodation", "¥ 38,000"],["Food & Dining", "¥ 22,400"],["Transport", "¥ 13,800"]].map(([cat, amt]) => (
                  <div key={cat} style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>{cat}</span>
                    <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>{amt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Upcoming trips row ── */}
        <div>
          <p style={{ fontSize: "0.7rem", letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 14 }}>Upcoming trips</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
            {trips.map(({ city, country, days, icon }) => (
              <div key={city} style={{ ...G({ borderRadius: 16, padding: "20px 22px" }), cursor: "pointer", transition: "border-color .2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.11)"}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <span style={{ fontSize: "1.8rem" }}>{icon}</span>
                  <span style={{ ...G({ borderRadius: 9999, padding: "3px 10px" }), fontSize: "0.62rem", color: "rgba(255,255,255,0.45)" }}>{days} days</span>
                </div>
                <p style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 2, letterSpacing: "-0.01em" }}>{city}</p>
                <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)" }}>{country}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 4. NEUMORPHISM ─────────────────────────────────────────── */
function NeumorphismPage() {
  const [playing, setPlaying] = useState(true);
  const [liked, setLiked] = useState(false);
  const [volume, setVolume] = useState(68);
  const [activeTab, setActiveTab] = useState("For You");

  // Warm linen palette — neumorphism shines on warm neutrals, not cold grays
  const BG   = "#e8e3db";
  const INK  = "#3d3530";
  const MID  = "#7a7068";
  const DIM  = "#a09890";
  const ACT  = "#8b6f5e"; // warm brown accent for active states

  // Shadow helpers
  const raised = (r = 16, extra = {}) => ({
    background: BG,
    boxShadow: `7px 7px 18px #c5bfb6, -7px -7px 18px #ffffff`,
    borderRadius: r,
    ...extra,
  });
  const pressed = (r = 16, extra = {}) => ({
    background: BG,
    boxShadow: `inset 5px 5px 12px #c5bfb6, inset -5px -5px 12px #ffffff`,
    borderRadius: r,
    ...extra,
  });
  const raisedSm = (r = 12, extra = {}) => ({
    background: BG,
    boxShadow: `4px 4px 10px #c5bfb6, -4px -4px 10px #ffffff`,
    borderRadius: r,
    ...extra,
  });

  const queue = [
    { title: "Still Waters",   artist: "Nils Frahm",      dur: "5:12", active: false },
    { title: "Says",           artist: "Nils Frahm",      dur: "9:38", active: true  },
    { title: "All Melody",     artist: "Nils Frahm",      dur: "6:04", active: false },
    { title: "Them",           artist: "Nils Frahm",      dur: "4:51", active: false },
  ];

  const tabs = ["For You", "Albums", "Artists", "Library"];

  return (
    <div style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", background: BG, minHeight: "100vh", color: INK }}>

      {/* ── NAV ── */}
      <nav style={{ maxWidth: 900, margin: "0 auto", padding: "24px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ fontWeight: 800, fontSize: "1.15rem", letterSpacing: "-0.02em", color: INK }}>Forma</span>
          <span style={{ fontSize: "0.65rem", color: DIM, marginLeft: 8, letterSpacing: ".08em", textTransform: "uppercase" }}>Audio</span>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{
              ...activeTab === t ? pressed(9999) : raisedSm(9999),
              border: "none", cursor: "pointer", fontFamily: "inherit",
              padding: "8px 18px", fontSize: "0.78rem", fontWeight: 600,
              color: activeTab === t ? ACT : MID, transition: "all .15s",
            }}>{t}</button>
          ))}
        </div>
        <BackBtn />
      </nav>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>

        {/* ── LEFT: Player ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

          {/* Album art */}
          <div style={{ ...raised(28), padding: 18, display: "flex", justifyContent: "center" }}>
            <div style={{ ...pressed(20), width: "100%", aspectRatio: "1", maxWidth: 320, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              {/* Abstract album art — warm geometric blocks */}
              <svg width="100%" height="100%" viewBox="0 0 280 280" style={{ display: "block" }}>
                <rect width="280" height="280" fill="#d9d3cb" />
                <rect x="0" y="0" width="140" height="280" fill="#cec7be" />
                <rect x="70" y="70" width="140" height="140" fill="#bfb8ae" />
                <circle cx="140" cy="140" r="42" fill="#a8a098" />
                <circle cx="140" cy="140" r="18" fill="#e8e3db" />
                {/* Subtle warm shapes */}
                <rect x="20" y="20" width="50" height="4" fill="#b5afa5" opacity="0.6" />
                <rect x="20" y="30" width="30" height="4" fill="#b5afa5" opacity="0.4" />
              </svg>
            </div>
          </div>

          {/* Track info */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "1.25rem", fontWeight: 700, color: INK, letterSpacing: "-0.02em", marginBottom: 4 }}>Says</p>
              <p style={{ fontSize: "0.82rem", color: MID }}>Nils Frahm · <em>Spaces</em></p>
            </div>
            <button onClick={() => setLiked(!liked)} style={{
              ...liked ? pressed(14) : raisedSm(14),
              width: 44, height: 44, border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: liked ? ACT : DIM, fontSize: "1.1rem", transition: "all .15s",
            }}>♥</button>
          </div>

          {/* Progress */}
          <div>
            <div style={{ ...pressed(9999, { padding: 0 }), height: 8, overflow: "hidden", marginBottom: 8 }}>
              <div style={{ width: "42%", height: "100%", background: ACT, borderRadius: 9999, opacity: 0.75 }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: DIM }}>
              <span>3:56</span><span>9:38</span>
            </div>
          </div>

          {/* Playback controls */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
            {/* Shuffle */}
            <button style={{ ...raisedSm(10), width: 38, height: 38, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: DIM, fontSize: "0.85rem" }}>⇌</button>
            {/* Previous */}
            <button style={{ ...raised(14), width: 48, height: 48, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: MID, fontSize: "1rem" }}>⏮</button>
            {/* Play/pause — larger raised button */}
            <button onClick={() => setPlaying(!playing)} style={{
              ...playing ? pressed(22) : raised(22),
              width: 68, height: 68, border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: ACT, fontSize: "1.5rem", transition: "all .15s",
            }}>{playing ? "⏸" : "▶"}</button>
            {/* Next */}
            <button style={{ ...raised(14), width: 48, height: 48, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: MID, fontSize: "1rem" }}>⏭</button>
            {/* Repeat */}
            <button style={{ ...raisedSm(10), width: 38, height: 38, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: DIM, fontSize: "0.85rem" }}>↺</button>
          </div>

          {/* Volume */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: "0.78rem", color: DIM }}>🔈</span>
            <div style={{ flex: 1, ...pressed(9999, { padding: 0 }), height: 6, position: "relative", cursor: "pointer" }}
              onClick={e => { const r = e.currentTarget.getBoundingClientRect(); setVolume(Math.round(((e.clientX - r.left) / r.width) * 100)); }}>
              <div style={{ width: `${volume}%`, height: "100%", background: ACT, borderRadius: 9999, opacity: 0.7 }} />
              <div style={{ position: "absolute", left: `${volume}%`, top: "50%", transform: "translate(-50%,-50%)", width: 14, height: 14, ...raisedSm(9999), flexShrink: 0 }} />
            </div>
            <span style={{ fontSize: "0.78rem", color: DIM }}>🔊</span>
          </div>
        </div>

        {/* ── RIGHT: Queue + Info ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

          {/* Now playing label */}
          <div style={{ ...raised(20), padding: "20px 22px" }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
              <div style={{ ...pressed(8), flex: 1, height: 28, display: "flex", alignItems: "center", paddingLeft: 10 }}>
                <span style={{ fontSize: "0.72rem", color: MID }}>🔍  Search music…</span>
              </div>
              <button style={{ ...raisedSm(8), width: 28, height: 28, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: DIM, fontSize: "0.75rem" }}>≡</button>
            </div>
            <p style={{ fontSize: "0.65rem", letterSpacing: ".1em", textTransform: "uppercase", color: DIM, marginBottom: 12 }}>Up next</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {queue.map(({ title, artist, dur, active }, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 0", borderBottom: i < queue.length - 1 ? `1px solid rgba(0,0,0,0.06)` : "none" }}>
                  <div style={{ ...active ? pressed(9) : raisedSm(9), width: 36, height: 36, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: "none" }}>
                    <span style={{ fontSize: "0.7rem", color: active ? ACT : DIM }}>{active ? "▶" : String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "0.85rem", fontWeight: active ? 700 : 500, color: active ? INK : MID, marginBottom: 2 }}>{title}</p>
                    <p style={{ fontSize: "0.7rem", color: DIM }}>{artist}</p>
                  </div>
                  <span style={{ fontSize: "0.7rem", color: DIM }}>{dur}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[["128", "Songs saved"], ["12", "Playlists"]].map(([n, label], i) => (
              <div key={i} style={{ ...raised(18), padding: "18px 20px" }}>
                <p style={{ fontSize: "1.8rem", fontWeight: 800, color: INK, letterSpacing: "-0.04em", marginBottom: 2 }}>{n}</p>
                <p style={{ fontSize: "0.72rem", color: DIM }}>{label}</p>
              </div>
            ))}
          </div>

          {/* EQ bands — decorative neumorphic bars */}
          <div style={{ ...raised(20), padding: "20px 22px" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: ".1em", textTransform: "uppercase", color: DIM, marginBottom: 14 }}>Equalizer</p>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-end", height: 60 }}>
              {[55, 72, 88, 64, 78, 90, 70, 58, 44, 62].map((h, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, height: "100%" }}>
                  <div style={{ flex: 1, width: "100%", ...pressed(4, { padding: 0 }), position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", bottom: 0, width: "100%", height: `${h}%`, background: ACT, opacity: 0.45, borderRadius: 3 }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
              {["32","64","125","250","500","1k","2k","4k","8k","16k"].map(f => (
                <span key={f} style={{ fontSize: "0.5rem", color: DIM, textAlign: "center", flex: 1 }}>{f}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 5. BRUTALISM ────────────────────────────────────────────── */
function BrutalismPage() {
  const [hovered, setHovered] = useState(null);
  const border = "3px solid #000";

  const projects = [
    { id: "001", name: "REVOLT STUDIO",  cat: "Brand Identity",   year: "2025", hover: "#FFE000", dark: false },
    { id: "002", name: "NAKED TRUTH",    cat: "Editorial Design", year: "2025", hover: "#FF0000", dark: false },
    { id: "003", name: "IRON GRID",      cat: "Web Design",       year: "2024", hover: "#000",    dark: true  },
    { id: "004", name: "MANIFEST",       cat: "Motion & Video",   year: "2024", hover: "#00FF00", dark: false },
    { id: "005", name: "CONCRETE TYPE",  cat: "Typography",       year: "2023", hover: "#0000FF", dark: false },
  ];

  return (
    <div style={{ fontFamily: "'Arial Black','Helvetica Neue',Arial,sans-serif", background: "#fff", minHeight: "100vh", color: "#000" }}>

      {/* ── HEADER ── */}
      <header style={{ borderBottom: border, display: "grid", gridTemplateColumns: "1fr auto auto", alignItems: "stretch", height: 68 }}>
        <div style={{ padding: "0 32px", display: "flex", alignItems: "center", borderRight: border }}>
          <span style={{ fontWeight: 900, fontSize: "1.3rem", letterSpacing: "-0.02em", textTransform: "uppercase" }}>BRUTAL</span>
          <span style={{ fontWeight: 900, fontSize: "1.3rem", letterSpacing: "-0.02em", background: "#FFE000", padding: "0 6px" }}>FORM</span>
        </div>
        <nav style={{ display: "flex", alignItems: "center", borderRight: border }}>
          {["Work", "Services", "About", "Contact"].map((item, i, arr) => (
            <a key={item} href="#" style={{ padding: "0 20px", height: "100%", display: "flex", alignItems: "center", fontSize: "0.7rem", fontWeight: 700, letterSpacing: ".08em", textDecoration: "none", color: "#000", borderRight: i < arr.length - 1 ? "1px solid rgba(0,0,0,0.1)" : "none", textTransform: "uppercase" }}>{item}</a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", padding: "0 24px" }}>
          <BackBtn light />
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{ borderBottom: border, padding: "48px 32px", display: "grid", gridTemplateColumns: "3fr 2fr", gap: 0, alignItems: "stretch" }}>
        <div style={{ paddingRight: 40, borderRight: border }}>
          <div style={{ border, background: "#FFE000", display: "inline-block", padding: "4px 12px", fontSize: "0.62rem", letterSpacing: ".15em", textTransform: "uppercase", fontWeight: 900, marginBottom: 22 }}>● AVAILABLE FOR WORK</div>
          <h1 style={{ fontSize: "clamp(3rem,7vw,6rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, textTransform: "uppercase", marginBottom: 24 }}>
            WE MAKE<br />
            UGLY<br />
            <span style={{ display: "inline-block", background: "#000", color: "#fff", padding: "2px 10px", lineHeight: 1.1 }}>BEAUTIFUL.</span>
          </h1>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#333", maxWidth: 400, marginBottom: 32, borderLeft: "4px solid #FFE000", paddingLeft: 14, fontFamily: "'Helvetica Neue',Arial,sans-serif", fontWeight: 400 }}>
            We reject templates, safe choices, and beige design. Every pixel is intentional — loud and unapologetic.
          </p>
          <div style={{ display: "flex" }}>
            <a href="#" style={{ border, background: "#000", color: "#fff", padding: "14px 32px", fontFamily: "inherit", fontWeight: 900, fontSize: "0.82rem", textDecoration: "none", textTransform: "uppercase", letterSpacing: ".1em" }}>HIRE US ↗</a>
            <a href="#" style={{ border, borderLeft: "none", background: "#FFE000", color: "#000", padding: "14px 28px", fontFamily: "inherit", fontWeight: 900, fontSize: "0.82rem", textDecoration: "none", textTransform: "uppercase", letterSpacing: ".1em" }}>VIEW WORK</a>
          </div>
        </div>

        {/* Right: manifesto block — no emojis, pure typographic */}
        <div style={{ paddingLeft: 40, display: "flex", flexDirection: "column", gap: 0 }}>
          <div style={{ background: "#000", padding: "28px 26px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: "0.55rem", letterSpacing: ".2em", color: "#FFE000", textTransform: "uppercase", marginBottom: 16, fontWeight: 700 }}>MANIFESTO / 001</div>
              <p style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em", textTransform: "uppercase" }}>
                &ldquo;DESIGN IS<br />
                NOT ART—<br />
                IT IS<br />
                COMMUNICATION.&rdquo;
              </p>
            </div>
            <div style={{ paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.12)", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
              {[["7+", "YEARS"], ["48", "CLIENTS"], ["120+", "PROJECTS"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#FFE000", letterSpacing: "-0.04em", lineHeight: 1.1 }}>{n}</div>
                  <div style={{ fontSize: "0.5rem", color: "rgba(255,255,255,0.4)", letterSpacing: ".1em", textTransform: "uppercase", marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECT TABLE ── */}
      <section style={{ padding: "0 32px" }}>
        <div style={{ borderBottom: border, padding: "12px 0", display: "grid", gridTemplateColumns: "72px 1fr 1fr 80px 28px", gap: 16, alignItems: "center" }}>
          {["NO.", "PROJECT", "CATEGORY", "YEAR", ""].map((h, i) => (
            <span key={i} style={{ fontSize: "0.58rem", letterSpacing: ".14em", fontWeight: 900, color: "#bbb", textTransform: "uppercase" }}>{h}</span>
          ))}
        </div>
        {projects.map((p, i) => (
          <div key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ borderBottom: border, padding: "18px 0", display: "grid", gridTemplateColumns: "72px 1fr 1fr 80px 28px", gap: 16, alignItems: "center", cursor: "pointer", transition: "background .1s", background: hovered === i ? p.hover : "transparent", color: hovered === i && p.dark ? "#fff" : "#000" }}>
            <span style={{ fontSize: "0.65rem", fontWeight: 900, color: hovered === i && p.dark ? "#FFE000" : "#bbb" }}>{p.id}</span>
            <span style={{ fontSize: "clamp(0.9rem,2vw,1.15rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em" }}>{p.name}</span>
            <span style={{ fontSize: "0.82rem", fontFamily: "'Helvetica Neue',Arial,sans-serif", fontWeight: 400, color: hovered === i && p.dark ? "rgba(255,255,255,0.65)" : "#555" }}>{p.cat}</span>
            <span style={{ fontSize: "0.82rem", fontFamily: "'Helvetica Neue',Arial,sans-serif", fontWeight: 400, color: hovered === i && p.dark ? "rgba(255,255,255,0.65)" : "#555" }}>{p.year}</span>
            <span style={{ fontSize: "1rem", fontWeight: 900 }}>→</span>
          </div>
        ))}
      </section>

      {/* ── SERVICES ── */}
      <section style={{ borderTop: border, padding: "40px 32px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
        {[
          ["01", "Brand Identity",  "Logos, systems, and the visual language of a company."],
          ["02", "Web Design",      "Interfaces that don't apologize for being different."],
          ["03", "Editorial",       "Layouts that demand to be read, not scanned."],
          ["04", "Motion",          "Animation as punctuation, not decoration."],
        ].map(([num, title, desc], i) => (
          <div key={num} style={{ padding: "0 24px", paddingLeft: i === 0 ? 0 : 24, borderRight: i < 3 ? border : "none" }}>
            <div style={{ fontSize: "0.55rem", letterSpacing: ".12em", color: "#bbb", fontWeight: 900, marginBottom: 8 }}>{num}</div>
            <h3 style={{ fontSize: "0.9rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: 8 }}>{title}</h3>
            <p style={{ fontSize: "0.76rem", color: "#555", lineHeight: 1.65, fontFamily: "'Helvetica Neue',Arial,sans-serif", fontWeight: 400 }}>{desc}</p>
          </div>
        ))}
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ background: "#000", padding: "13px 0", overflow: "hidden", borderTop: border, borderBottom: border }}>
        <div style={{ display: "flex", gap: 48, animation: "marquee 20s linear infinite", whiteSpace: "nowrap" }}>
          {Array(8).fill("BRUTALISM · RAW DESIGN · NO FILTERS · BOLD CHOICES ·").map((t, i) => (
            <span key={i} style={{ fontSize: "0.75rem", color: "#FFE000", fontWeight: 900, letterSpacing: ".12em" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "22px 32px", display: "grid", gridTemplateColumns: "1fr auto auto", gap: 16, alignItems: "center" }}>
        <span style={{ fontWeight: 900, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "-0.01em" }}>BRUTALFORM © 2025</span>
        <span style={{ fontSize: "0.65rem", letterSpacing: ".1em", textTransform: "uppercase", color: "#888", fontFamily: "'Helvetica Neue',Arial,sans-serif" }}>Made with rage & precision</span>
        <a href="#" style={{ border, padding: "9px 18px", fontSize: "0.68rem", fontWeight: 900, textDecoration: "none", color: "#000", textTransform: "uppercase", letterSpacing: ".06em" }}>GET IN TOUCH ↗</a>
      </footer>

      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

/* ─── 6. MATERIAL DESIGN ─────────────────────────────────────── */
function MaterialPage() {
  const [activeTab, setActiveTab] = useState(0);

  // Deep warm slate — not neon, grounded and sophisticated
  const PRIMARY = "#37474F";
  const elev = n => ({ boxShadow: n === 1 ? "0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24)" : n === 2 ? "0 3px 6px rgba(0,0,0,0.15),0 2px 4px rgba(0,0,0,0.12)" : "0 10px 20px rgba(0,0,0,0.15),0 3px 6px rgba(0,0,0,0.1)" });

  const tabs = ["Reading", "Finished", "Discover", "Wishlist"];

  const activeBooks = [
    { title: "Thinking, Fast and Slow",          author: "Daniel Kahneman",    pct: 68, color: "#EFEBE9" },
    { title: "A Pattern Language",               author: "Christopher Alexander", pct: 23, color: "#E8EAF6" },
    { title: "The Design of Everyday Things",    author: "Don Norman",          pct: 91, color: "#E0F2F1" },
  ];

  const finished = [
    { title: "Atomic Habits",          author: "James Clear",         rating: 5, color: "#FFF8E1" },
    { title: "Man's Search for Meaning", author: "Viktor Frankl",     rating: 5, color: "#E8F5E9" },
    { title: "Deep Work",              author: "Cal Newport",          rating: 4, color: "#EDE7F6" },
    { title: "Sapiens",                author: "Yuval Noah Harari",   rating: 4, color: "#E3F2FD" },
  ];

  return (
    <div style={{ fontFamily: "Roboto,'Helvetica Neue',Arial,sans-serif", background: "#F5F5F5", minHeight: "100vh", color: "#212121" }}>

      {/* ── TOP APP BAR ── */}
      <header style={{ background: PRIMARY, ...elev(2), padding: "0 20px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, cursor: "pointer" }}>
            {[0, 1, 2].map(i => <div key={i} style={{ height: 2, background: "#fff", borderRadius: 1, width: i === 1 ? 16 : 22 }} />)}
          </div>
          <div>
            <span style={{ color: "#fff", fontSize: "1.2rem", fontWeight: 500, letterSpacing: ".02em" }}>Shelf</span>
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.7rem", marginLeft: 10 }}>42 books</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <BackBtn />
          <button style={{ width: 40, height: 40, borderRadius: "50%", background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <Search size={20} color="rgba(255,255,255,0.87)" />
          </button>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", color: "#fff", fontWeight: 600 }}>R</div>
        </div>
      </header>

      {/* ── TABS ── */}
      <div style={{ background: "#fff", ...elev(1), display: "flex", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
        {tabs.map((t, i) => (
          <button key={t} onClick={() => setActiveTab(i)} style={{ flex: 1, padding: "14px 8px", border: "none", background: "transparent", fontFamily: "inherit", fontSize: "0.78rem", fontWeight: i === activeTab ? 700 : 400, color: i === activeTab ? PRIMARY : "rgba(0,0,0,0.5)", borderBottom: i === activeTab ? `3px solid ${PRIMARY}` : "3px solid transparent", cursor: "pointer", letterSpacing: ".06em", textTransform: "uppercase", transition: "all .15s" }}>{t}</button>
        ))}
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "20px 16px 80px" }}>

        {/* ── STATS ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 20 }}>
          {[["3", "Reading", PRIMARY], ["18", "Finished", "#2E7D32"], ["21", "Wishlist", "#1565C0"], ["47h", "This month", "#6D4C41"]].map(([v, l, c]) => (
            <div key={l} style={{ background: "#fff", ...elev(1), borderRadius: 8, padding: "16px 18px", borderTop: `3px solid ${c}` }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 700, color: c, letterSpacing: "-0.03em", lineHeight: 1.1 }}>{v}</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(0,0,0,0.5)", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* ── CURRENTLY READING ── */}
        <div style={{ background: "#fff", ...elev(1), borderRadius: 8, overflow: "hidden", marginBottom: 20 }}>
          <div style={{ padding: "14px 20px", borderBottom: "1px solid rgba(0,0,0,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ fontSize: "0.95rem", fontWeight: 500, letterSpacing: ".01em" }}>Currently Reading</h2>
            <span style={{ fontSize: "0.72rem", color: PRIMARY, fontWeight: 700, letterSpacing: ".04em", cursor: "pointer" }}>SEE ALL</span>
          </div>
          {activeBooks.map((book, i) => (
            <div key={i} style={{ padding: "16px 20px", borderBottom: i < activeBooks.length - 1 ? "1px solid rgba(0,0,0,0.04)" : "none", display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ width: 40, height: 56, borderRadius: 3, background: book.color, flexShrink: 0, boxShadow: "1px 1px 4px rgba(0,0,0,0.18), inset -2px 0 4px rgba(0,0,0,0.07)" }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: "0.9rem", fontWeight: 500, color: "#212121", marginBottom: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{book.title}</p>
                <p style={{ fontSize: "0.73rem", color: "rgba(0,0,0,0.45)", marginBottom: 8 }}>{book.author}</p>
                <div style={{ height: 4, background: "#ECEFF1", borderRadius: 9999, overflow: "hidden" }}>
                  <div style={{ width: `${book.pct}%`, height: "100%", background: PRIMARY, borderRadius: 9999 }} />
                </div>
              </div>
              <span style={{ fontSize: "0.8rem", fontWeight: 700, color: PRIMARY, flexShrink: 0 }}>{book.pct}%</span>
            </div>
          ))}
        </div>

        {/* ── RECENTLY FINISHED ── */}
        <div style={{ background: "#fff", ...elev(1), borderRadius: 8, overflow: "hidden" }}>
          <div style={{ padding: "14px 20px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
            <h2 style={{ fontSize: "0.95rem", fontWeight: 500, letterSpacing: ".01em" }}>Recently Finished</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {finished.map((book, i) => (
              <div key={i} style={{ padding: "14px 20px", borderBottom: i < 2 ? "1px solid rgba(0,0,0,0.04)" : "none", borderRight: i % 2 === 0 ? "1px solid rgba(0,0,0,0.04)" : "none", display: "flex", gap: 12, alignItems: "center", cursor: "pointer" }}>
                <div style={{ width: 36, height: 50, borderRadius: 3, background: book.color, flexShrink: 0, boxShadow: "1px 1px 4px rgba(0,0,0,0.15)" }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: "0.82rem", fontWeight: 500, color: "#212121", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginBottom: 2 }}>{book.title}</p>
                  <p style={{ fontSize: "0.68rem", color: "rgba(0,0,0,0.44)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginBottom: 5 }}>{book.author}</p>
                  <div style={{ display: "flex", gap: 2 }}>
                    {Array.from({ length: 5 }, (_, j) => (
                      <span key={j} style={{ fontSize: "0.62rem", color: j < book.rating ? "#F57F17" : "rgba(0,0,0,0.15)" }}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAB ── */}
      <button style={{ position: "fixed", bottom: 28, right: 28, width: 56, height: 56, borderRadius: 16, background: PRIMARY, border: "none", ...elev(3), display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 200 }}>
        <Plus size={24} color="#fff" />
      </button>
    </div>
  );
}

/* ─── 7. DASHBOARD / ADMIN ────────────────────────────────────── */
function DashboardPage() {
  const [activeNav, setActiveNav] = useState("Overview");
  const [hoveredBar, setHoveredBar] = useState(null);

  const C = {
    bg:           "#f4efe7",
    sidebar:      "#1c1812",
    sidebarBorder:"rgba(255,255,255,0.06)",
    card:         "#ffffff",
    border:       "#e6dfd4",
    text:         "#1a1714",
    muted:        "#7d7263",
    faint:        "#b5a898",
    amber:        "#b87318",
    amberBg:      "#fef3c7",
    amberMid:     "#d97706",
    green:        "#166534",
    greenBg:      "#dcfce7",
    red:          "#991b1b",
    redBg:        "#fee2e2",
    sand:         "#e8dfd2",
  };

  const navItems = [
    { icon: Home,     label: "Overview",  active: true  },
    { icon: BarChart2,label: "Revenue"              },
    { icon: Users,    label: "Customers"             },
    { icon: PieChart, label: "Reports"               },
    { icon: FileText, label: "Invoices"              },
    { icon: Settings, label: "Settings"              },
  ];

  const kpis = [
    { label: "Total Revenue",    value: "$124,820", change: "+18.4%", up: true,  sub: "vs last quarter"  },
    { label: "Active Accounts",  value: "3,847",    change: "+11.2%", up: true,  sub: "vs last month"    },
    { label: "Avg. Order Value", value: "$284",      change: "-2.1%",  up: false, sub: "vs last month"    },
    { label: "Renewal Rate",     value: "94.2%",    change: "+1.8pp", up: true,  sub: "this quarter"     },
  ];

  // 12-month revenue bar data (0–100 scale)
  const revenueData = [44, 52, 47, 60, 57, 72, 66, 79, 75, 88, 83, 100];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  // Area chart: user growth over 14 weeks
  const growthPts = [28,34,31,40,38,46,44,53,57,64,60,72,78,88];
  const W = 480, H = 110;
  const areaPoints = growthPts.map((v, i) => {
    const x = (i / (growthPts.length - 1)) * W;
    const y = H - (v / 100) * (H - 8);
    return `${x},${y}`;
  }).join(" ");
  const areaFill = `${areaPoints} ${W},${H} 0,${H}`;

  const sources = [
    { label: "Organic Search", pct: 44 },
    { label: "Direct",         pct: 27 },
    { label: "Social Media",   pct: 18 },
    { label: "Referral",       pct: 11 },
  ];

  const tableRows = [
    { co: "Oakridge Capital",  plan: "Enterprise", arr: "$48,000", status: "Active",   growth: "+22%" },
    { co: "Vantage Partners",  plan: "Enterprise", arr: "$36,000", status: "Active",   growth: "+14%" },
    { co: "Summit Finance",    plan: "Pro",         arr: "$18,400", status: "Active",   growth: "+8%"  },
    { co: "Hallmark Group",    plan: "Pro",         arr: "$12,800", status: "Active",   growth: "+3%"  },
    { co: "Corvin Ltd",        plan: "Starter",     arr: "$4,200",  status: "Trial",    growth: "—"    },
  ];

  const statusStyle = (s) => ({
    fontSize: "0.68rem", fontWeight: 600, padding: "3px 10px", borderRadius: 9999,
    background: s === "Active" ? C.greenBg : s === "Trial" ? C.amberBg : "#f1f5f9",
    color:      s === "Active" ? C.green   : s === "Trial" ? C.amber   : C.muted,
  });

  return (
    <div style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", background: C.bg, minHeight: "100vh", color: C.text, display: "flex" }}>

      {/* ── SIDEBAR ── */}
      <aside style={{ width: 240, background: C.sidebar, display: "flex", flexDirection: "column", flexShrink: 0, position: "fixed", height: "100vh", zIndex: 50 }}>
        {/* Logo */}
        <div style={{ padding: "24px 20px 20px", borderBottom: `1px solid ${C.sidebarBorder}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: C.amberMid, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <TrendingUp size={16} color="#fff" strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "#f5f0e8", letterSpacing: "-0.01em" }}>Meridian</span>
              <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", display: "block", letterSpacing: ".05em", textTransform: "uppercase" }}>Analytics</span>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ padding: "14px 10px", flex: 1 }}>
          <p style={{ fontSize: "0.58rem", letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", padding: "0 10px", marginBottom: 8 }}>Main menu</p>
          {navItems.map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              onClick={() => setActiveNav(label)}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "9px 12px", borderRadius: 8, marginBottom: 2,
                background: (activeNav === label || active && activeNav === "Overview")
                  ? "rgba(245,240,232,0.1)"
                  : "transparent",
                borderLeft: (activeNav === label || active && activeNav === "Overview")
                  ? `2px solid ${C.amberMid}`
                  : "2px solid transparent",
                color: (activeNav === label || active && activeNav === "Overview")
                  ? "#f5f0e8"
                  : "rgba(255,255,255,0.38)",
                cursor: "pointer",
                transition: "all .18s",
              }}
            >
              <Icon size={15} strokeWidth={1.8} />
              <span style={{ fontSize: "0.83rem", fontWeight: (activeNav === label) ? 600 : 400 }}>{label}</span>
            </div>
          ))}
        </nav>

        {/* User + back */}
        <div style={{ borderTop: `1px solid ${C.sidebarBorder}`, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#4a3728", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "0.75rem", color: "#e8c99a", fontWeight: 700 }}>AM</span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "#f5f0e8" }}>Anya Mehta</p>
              <p style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.28)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Head of Finance</p>
            </div>
          </div>
          <BackBtn />
        </div>
      </aside>

      {/* ── MAIN ── */}
      <main style={{ marginLeft: 240, flex: 1, padding: "28px 32px", minHeight: "100vh" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
          <div>
            <p style={{ fontSize: "0.68rem", color: C.faint, letterSpacing: ".05em", marginBottom: 4 }}>Dashboard · Overview</p>
            <h1 style={{ fontSize: "1.6rem", fontWeight: 700, color: C.text, letterSpacing: "-0.025em", lineHeight: 1 }}>Business Overview</h1>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ border: `1px solid ${C.border}`, background: C.card, borderRadius: 8, padding: "7px 14px", fontSize: "0.78rem", color: C.muted, cursor: "pointer" }}>
              Q4 2024 ▾
            </div>
            <button style={{ background: C.text, border: "none", color: "#f5f0e8", padding: "8px 18px", borderRadius: 8, fontSize: "0.78rem", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: "inherit" }}>
              <Download size={13} /> Export
            </button>
          </div>
        </div>

        {/* KPI cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 20 }}>
          {kpis.map(({ label, value, change, up, sub }, i) => (
            <div key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "18px 18px 14px", borderTop: `3px solid ${i === 0 ? C.amberMid : C.sand}` }}>
              <p style={{ fontSize: "0.68rem", color: C.muted, marginBottom: 10, fontWeight: 500, letterSpacing: ".02em" }}>{label}</p>
              <p style={{ fontSize: "1.5rem", fontWeight: 700, color: C.text, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 6 }}>{value}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: up ? C.green : C.red, background: up ? C.greenBg : C.redBg, padding: "1px 6px", borderRadius: 4 }}>{change}</span>
                <span style={{ fontSize: "0.67rem", color: C.faint }}>{sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 14, marginBottom: 20 }}>

          {/* Bar chart — Revenue */}
          <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "22px 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div>
                <h3 style={{ fontSize: "0.88rem", fontWeight: 700, color: C.text, marginBottom: 2 }}>Monthly Revenue</h3>
                <p style={{ fontSize: "0.7rem", color: C.muted }}>Jan – Dec 2024</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "1.2rem", fontWeight: 700, color: C.text, letterSpacing: "-0.02em" }}>$124,820</p>
                <span style={{ fontSize: "0.68rem", fontWeight: 700, color: C.green, background: C.greenBg, padding: "1px 6px", borderRadius: 4 }}>+18.4% YoY</span>
              </div>
            </div>

            {/* SVG bar chart */}
            <svg viewBox="0 0 480 130" style={{ width: "100%", height: 130, overflow: "visible" }}>
              {/* Grid lines */}
              {[0, 25, 50, 75, 100].map(pct => {
                const y = 115 - (pct / 100) * 105;
                return (
                  <g key={pct}>
                    <line x1="0" y1={y} x2="480" y2={y} stroke={C.border} strokeWidth="0.75" strokeDasharray={pct > 0 ? "3,3" : "0"} />
                    {pct > 0 && <text x="-4" y={y + 3} fontSize="7" fill={C.faint} textAnchor="end">{pct}%</text>}
                  </g>
                );
              })}
              {/* Bars */}
              {revenueData.map((v, i) => {
                const bw = 28, gap = 12;
                const x = i * (bw + gap) + 10;
                const barH = (v / 100) * 105;
                const y = 115 - barH;
                const isLast = i === revenueData.length - 1;
                const isHovered = hoveredBar === i;
                return (
                  <g key={i}
                    onMouseEnter={() => setHoveredBar(i)}
                    onMouseLeave={() => setHoveredBar(null)}
                    style={{ cursor: "default" }}>
                    <rect
                      x={x} y={y} width={bw} height={barH}
                      rx="3"
                      fill={isLast ? C.amberMid : isHovered ? "#c47f1a" : "#e8c07a"}
                    />
                    {isHovered && (
                      <text x={x + bw / 2} y={y - 4} fontSize="7.5" fill={C.text} textAnchor="middle" fontWeight="600">
                        {["$44k","$52k","$47k","$60k","$57k","$72k","$66k","$79k","$75k","$88k","$83k","$100k"][i]}
                      </text>
                    )}
                    <text x={x + bw / 2} y={128} fontSize="7" fill={C.faint} textAnchor="middle">{months[i].slice(0,1)}</text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Right panel — sources + mini area chart */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Traffic sources */}
            <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "18px 20px", flex: 1 }}>
              <h3 style={{ fontSize: "0.88rem", fontWeight: 700, color: C.text, marginBottom: 16 }}>Revenue Sources</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {sources.map(({ label, pct }, i) => {
                  const shades = [C.amberMid, "#92400e", "#c47f1a", C.sand];
                  const color = shades[i];
                  return (
                    <div key={label}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                        <span style={{ fontSize: "0.78rem", color: C.text, fontWeight: 500 }}>{label}</span>
                        <span style={{ fontSize: "0.78rem", fontWeight: 700, color: C.text }}>{pct}%</span>
                      </div>
                      <div style={{ height: 5, background: C.sand, borderRadius: 9999 }}>
                        <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 9999, transition: "width .6s ease" }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Renewal rate donut-style */}
            <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "18px 20px" }}>
              <h3 style={{ fontSize: "0.88rem", fontWeight: 700, color: C.text, marginBottom: 12 }}>Renewal Rate</h3>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <svg viewBox="0 0 64 64" style={{ width: 60, height: 60, flexShrink: 0 }}>
                  <circle cx="32" cy="32" r="26" fill="none" stroke={C.sand} strokeWidth="9" />
                  <circle cx="32" cy="32" r="26" fill="none" stroke={C.amberMid} strokeWidth="9"
                    strokeDasharray={`${2 * Math.PI * 26 * 0.942} ${2 * Math.PI * 26}`}
                    strokeLinecap="round"
                    transform="rotate(-90 32 32)" />
                  <text x="32" y="36" textAnchor="middle" fontSize="11" fontWeight="700" fill={C.text}>94%</text>
                </svg>
                <div>
                  <p style={{ fontSize: "1.1rem", fontWeight: 700, color: C.text, letterSpacing: "-0.02em", marginBottom: 2 }}>94.2%</p>
                  <p style={{ fontSize: "0.7rem", color: C.muted, lineHeight: 1.4 }}>Renewals this quarter</p>
                  <span style={{ fontSize: "0.67rem", fontWeight: 700, color: C.green, background: C.greenBg, padding: "1px 6px", borderRadius: 4, display: "inline-block", marginTop: 4 }}>+1.8pp</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User growth area chart */}
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "22px 24px", marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
            <div>
              <h3 style={{ fontSize: "0.88rem", fontWeight: 700, color: C.text, marginBottom: 2 }}>Account Growth</h3>
              <p style={{ fontSize: "0.7rem", color: C.muted }}>Weekly new accounts — last 14 weeks</p>
            </div>
            <span style={{ fontSize: "0.68rem", fontWeight: 700, color: C.green, background: C.greenBg, padding: "2px 8px", borderRadius: 4 }}>+11.2% this month</span>
          </div>
          <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: H, overflow: "visible" }}>
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={C.amberMid} stopOpacity="0.18" />
                <stop offset="100%" stopColor={C.amberMid} stopOpacity="0.01" />
              </linearGradient>
            </defs>
            {/* Grid */}
            {[0, 50, 100].map(pct => {
              const y = H - (pct / 100) * (H - 8);
              return <line key={pct} x1="0" y1={y} x2={W} y2={y} stroke={C.border} strokeWidth="0.75" strokeDasharray={pct > 0 ? "4,4" : "0"} />;
            })}
            {/* Area fill */}
            <polygon points={areaFill} fill="url(#areaGrad)" />
            {/* Line */}
            <polyline points={areaPoints} fill="none" stroke={C.amberMid} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
            {/* Last point dot */}
            {(() => {
              const last = growthPts.length - 1;
              const x = (last / (growthPts.length - 1)) * W;
              const y = H - (growthPts[last] / 100) * (H - 8);
              return (
                <g>
                  <circle cx={x} cy={y} r="4" fill={C.amberMid} />
                  <circle cx={x} cy={y} r="7" fill={C.amberMid} fillOpacity="0.18" />
                </g>
              );
            })()}
          </svg>
        </div>

        {/* Table */}
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
          <div style={{ padding: "16px 22px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3 style={{ fontSize: "0.88rem", fontWeight: 700, color: C.text }}>Top Accounts</h3>
            <span style={{ fontSize: "0.72rem", color: C.amber, fontWeight: 600, cursor: "pointer" }}>View all →</span>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
            <thead>
              <tr style={{ background: C.bg }}>
                {["Company", "Plan", "ARR", "Growth", "Status"].map(h => (
                  <th key={h} style={{ textAlign: "left", padding: "9px 22px", fontSize: "0.63rem", fontWeight: 700, color: C.faint, letterSpacing: ".08em", textTransform: "uppercase" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map(({ co, plan, arr, status, growth }, i) => (
                <tr key={i} style={{ borderTop: `1px solid ${C.border}` }}
                  onMouseEnter={e => e.currentTarget.style.background = C.bg}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                  <td style={{ padding: "11px 22px", fontWeight: 600, color: C.text }}>{co}</td>
                  <td style={{ padding: "11px 22px", color: C.muted }}>{plan}</td>
                  <td style={{ padding: "11px 22px", fontWeight: 700, color: C.text, letterSpacing: "-0.01em" }}>{arr}</td>
                  <td style={{ padding: "11px 22px", fontWeight: 600, color: growth.startsWith("+") ? C.green : C.muted }}>{growth}</td>
                  <td style={{ padding: "11px 22px" }}>
                    <span style={statusStyle(status)}>{status}</span>
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
  const SIDEBAR = "#1b2431";
  const ACCENT  = "#1d4ed8";
  const FONT    = "'Helvetica Neue', Arial, sans-serif";

  const initMessages = [
    { id: 1, role: "ai",   text: "I've reviewed your Q3 data. Here's what stands out:\n\n**Revenue**: Up 18.4% YoY, ahead of the 14% target. Enterprise segment led at +31%.\n\n**Churn risk**: 3 accounts flagged — Corvin Ltd ($4.2k ARR), Bridgemont ($6.8k), and NordTech ($12.1k). All three haven't logged in for 21+ days.\n\nWant me to draft a re-engagement sequence for these accounts?", sources: ["Q3 Revenue Report", "CRM Export 2025"], time: "2:14 PM" },
    { id: 2, role: "user", text: "Yes — draft the re-engagement email for Corvin. Keep it under 4 sentences.", time: "2:15 PM" },
    { id: 3, role: "ai",   text: "**Subject**: Checking in — anything we can help with?\n\nHi [Name], it's been a few weeks since you've used Scout and we wanted to reach out. Has anything changed on your end, or is there something blocking you from getting full value? We just launched Workspace Reports that teams in your space have found useful — happy to show you in 15 min.\n\nReply here or book time: [calendar link]", sources: ["CRM Export 2025", "Email Templates"], time: "2:15 PM" },
  ];

  const [messages, setMessages]       = useState(initMessages);
  const [input, setInput]             = useState("");
  const [isTyping, setIsTyping]       = useState(false);
  const [liked, setLiked]             = useState({});
  const [copied, setCopied]           = useState(null);
  const [activeConvo, setActiveConvo] = useState(0);
  const [hoveredMsg, setHoveredMsg]   = useState(null);
  const bottomRef   = useRef(null);
  const textareaRef = useRef(null);

  const convos = [
    { title: "Q3 competitive analysis", date: "Today" },
    { title: "Draft investor update",   date: "Today" },
    { title: "Summarize earnings call", date: "Yesterday" },
    { title: "Research: OLED vs AMOLED", date: "Mon" },
    { title: "React 19 release notes",  date: "Mon" },
  ];

  const suggestions = [
    "Summarize this week's highlights",
    "Flag accounts at risk",
    "Draft a follow-up email",
    "Compare Q3 vs Q2",
  ];

  const groups = [
    { label: "Today",     items: convos.map((c, i) => ({ ...c, idx: i })).filter(c => c.date === "Today") },
    { label: "Yesterday", items: convos.map((c, i) => ({ ...c, idx: i })).filter(c => c.date === "Yesterday") },
    { label: "This week", items: convos.map((c, i) => ({ ...c, idx: i })).filter(c => c.date === "Mon") },
  ];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const getAIResponse = (text) => {
    const t = text.toLowerCase();
    if (t.includes("email") || t.includes("draft") || t.includes("follow") || t.includes("re-engage")) {
      return {
        text: "**Subject**: Following up — we'd love to help\n\nHi [Name], it's been a while since we've seen you in Scout, and I wanted to check in personally. Is there something specific blocking you, or has your team's focus shifted? We've shipped Workspace Reports and AI Summaries since your last visit — happy to walk you through them in 15 min.\n\nBook time: [calendar link]",
        sources: ["CRM Export 2025", "Email Templates"],
      };
    }
    if (t.includes("summar") || t.includes("highlight") || t.includes("week")) {
      return {
        text: "**This week at a glance**:\n\n• **Revenue**: $184k (+12% WoW) — on track for $720k month\n• **New signups**: 47 accounts (23 organic, 24 paid)\n• **Churn**: 2 cancellations, $3.2k ARR\n• **Top feature**: Workspace Reports — 68% of active users engaged\n• **Avg. support response**: 3.1h across 12 open tickets\n\nWant this formatted as a team update email?",
        sources: ["Weekly Analytics", "Stripe Dashboard", "Intercom"],
      };
    }
    if (t.includes("risk") || t.includes("churn") || t.includes("flag")) {
      return {
        text: "**Accounts at risk** — ranked by ARR:\n\n1. **NordTech** — $12.1k ARR · 24 days inactive · last active: weekly export\n2. **Bridgemont** — $6.8k ARR · 22 days inactive · last active: dashboard view\n3. **Corvin Ltd** — $4.2k ARR · 21 days inactive · last active: onboarding\n\nTotal ARR at risk: **$23.1k**. Recommended: personal outreach for NordTech + Bridgemont, automated sequence for Corvin.\n\nShould I draft the outreach messages?",
        sources: ["CRM Export 2025", "Product Analytics"],
      };
    }
    if (t.includes("q2") || t.includes("compar") || t.includes("quarter") || t.includes("q3")) {
      return {
        text: "**Q3 vs Q2 comparison**:\n\nRevenue: $1.84M vs $1.55M — **+18.7%**\nNew accounts: 167 vs 128 — **+30.5%**\nChurn rate: 2.8% vs 3.2% — **improved -0.4pp**\nNPS: 51 vs 42 — **+9 points**\n\nEnterprise drove the bulk of growth at +31% vs +12% for SMB. The NPS jump tracks with the Workspace Reports launch in mid-Q3.\n\nWant me to build a board summary or slide outline from this?",
        sources: ["Q2 Revenue Report", "Q3 Revenue Report", "NPS Survey Data"],
      };
    }
    return {
      text: "I've looked into this based on your connected data. Here's what I found:\n\n**Key pattern**: This appears across 3 consecutive periods, which suggests a structural trend rather than a one-off event.\n\n**Recommended next steps**:\n1. Cross-reference with the segment breakdown from the last export\n2. Flag for the Monday standup — it warrants team visibility\n3. I can monitor this weekly and alert you when it changes\n\nWant me to set up a recurring check, or dig deeper into any of these points?",
      sources: ["Workspace Data"],
    };
  };

  const sendMessage = () => {
    const text = input.trim();
    if (!text || isTyping) return;
    const now = () => new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
    setMessages(prev => [...prev, { id: Date.now(), role: "user", text, time: now() }]);
    setInput("");
    if (textareaRef.current) { textareaRef.current.style.height = "auto"; }
    setIsTyping(true);
    setTimeout(() => {
      const resp = getAIResponse(text);
      setMessages(prev => [...prev, { id: Date.now() + 1, role: "ai", ...resp, time: now() }]);
      setIsTyping(false);
    }, 1200 + Math.random() * 700);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, 140) + "px";
  };

  const copyText = (id, text) => {
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(id);
    setTimeout(() => setCopied(null), 1600);
  };

  const exportChat = () => {
    const text = messages.map(m => `[${m.role === "ai" ? "Scout" : "You"} · ${m.time}]\n${m.text}`).join("\n\n---\n\n");
    const blob = new Blob([text], { type: "text/plain" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url; a.download = "scout-chat.txt"; a.click();
    URL.revokeObjectURL(url);
  };

  const renderText = (text) =>
    text.split("\n").map((line, li, arr) => {
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      return (
        <span key={li}>
          {parts.map((p, pi) =>
            p.startsWith("**") && p.endsWith("**")
              ? <strong key={pi} style={{ fontWeight: 700 }}>{p.slice(2, -2)}</strong>
              : p
          )}
          {li < arr.length - 1 && <br />}
        </span>
      );
    });

  const canSend = input.trim().length > 0 && !isTyping;

  return (
    <div style={{ fontFamily: FONT, background: "#f8f9fa", minHeight: "100vh", color: "#1a1a2e", display: "flex" }}>

      {/* ── Sidebar ── */}
      <aside style={{ width: 264, background: SIDEBAR, display: "flex", flexDirection: "column", flexShrink: 0, position: "fixed", height: "100vh", zIndex: 50 }}>

        {/* Brand + new chat */}
        <div style={{ padding: "18px 16px 14px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Search size={13} color="#fff" strokeWidth={2.5} />
            </div>
            <div>
              <span style={{ fontWeight: 700, fontSize: "0.92rem", color: "#fff", letterSpacing: "-0.01em" }}>Scout</span>
              <span style={{ fontSize: "0.57rem", color: "rgba(255,255,255,0.28)", display: "block", letterSpacing: ".06em", textTransform: "uppercase" }}>Research Assistant</span>
            </div>
          </div>
          <button
            onClick={() => { setMessages([]); setActiveConvo(-1); }}
            style={{ width: "100%", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.78)", padding: "8px 14px", borderRadius: 7, fontSize: "0.79rem", fontWeight: 500, cursor: "pointer", fontFamily: FONT, display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
            <Plus size={13} strokeWidth={2.5} /> New chat
          </button>
        </div>

        {/* Search bar */}
        <div style={{ padding: "9px 12px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, padding: "6px 10px", display: "flex", alignItems: "center", gap: 7 }}>
            <Search size={11} color="rgba(255,255,255,0.28)" strokeWidth={2} />
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.24)" }}>Search conversations…</span>
            <span style={{ marginLeft: "auto", fontSize: "0.57rem", color: "rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.06)", padding: "1px 5px", borderRadius: 3 }}>⌘K</span>
          </div>
        </div>

        {/* Conversation list */}
        <div style={{ flex: 1, overflowY: "auto", padding: "8px 8px" }}>
          {groups.map(({ label, items }) => items.length === 0 ? null : (
            <div key={label} style={{ marginBottom: 16 }}>
              <p style={{ fontSize: "0.56rem", letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", padding: "2px 8px", marginBottom: 3 }}>{label}</p>
              {items.map(c => {
                const active = activeConvo === c.idx;
                return (
                  <div key={c.idx} onClick={() => { setActiveConvo(c.idx); setMessages(initMessages); }}
                    style={{ padding: "7px 10px", borderRadius: 6, marginBottom: 1, background: active ? "rgba(255,255,255,0.1)" : "transparent", color: active ? "#fff" : "rgba(255,255,255,0.42)", cursor: "pointer", fontSize: "0.79rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", borderLeft: `2px solid ${active ? ACCENT : "transparent"}`, transition: "all 0.15s" }}>
                    {c.title}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* User footer */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "12px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.62rem", color: "#fff", fontWeight: 700 }}>SK</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "#fff" }}>Sarah Kim</p>
              <p style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.28)" }}>Pro · 2,847 tokens left</p>
            </div>
            <Settings size={13} color="rgba(255,255,255,0.28)" strokeWidth={1.75} style={{ cursor: "pointer" }} />
          </div>
          <BackBtn />
        </div>
      </aside>

      {/* ── Main ── */}
      <main style={{ marginLeft: 264, flex: 1, display: "flex", flexDirection: "column", height: "100vh" }}>

        {/* Thread header */}
        <div style={{ padding: "13px 28px", borderBottom: "1px solid #e2e6ea", background: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
          <div>
            <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "#1a1a2e", marginBottom: 2 }}>
              {activeConvo >= 0 && activeConvo < convos.length ? convos[activeConvo].title : "New Chat"}
            </p>
            <p style={{ fontSize: "0.67rem", color: "#8492a6" }}>
              {messages.length} messages · Scout 2.1 · Research mode
            </p>
          </div>
          <div style={{ display: "flex", gap: 7 }}>
            <button onClick={exportChat}
              style={{ background: "transparent", border: "1px solid #dde1e7", color: "#6b7c93", padding: "6px 14px", borderRadius: 6, fontSize: "0.72rem", fontWeight: 500, cursor: "pointer", fontFamily: FONT, display: "flex", alignItems: "center", gap: 6 }}>
              <Download size={12} strokeWidth={2} /> Export
            </button>
            <button style={{ background: ACCENT, border: "none", color: "#fff", padding: "6px 14px", borderRadius: 6, fontSize: "0.72rem", fontWeight: 600, cursor: "pointer", fontFamily: FONT, display: "flex", alignItems: "center", gap: 6 }}>
              <ArrowUpRight size={12} strokeWidth={2.5} /> Share
            </button>
          </div>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: "auto", padding: "28px 40px", display: "flex", flexDirection: "column", gap: 22, background: "#f8f9fa" }}>

          {/* Empty state */}
          {messages.length === 0 && (
            <div style={{ margin: "auto", textAlign: "center", maxWidth: 400 }}>
              <div style={{ width: 48, height: 48, borderRadius: 13, background: SIDEBAR, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
                <Search size={20} color="#fff" strokeWidth={2} />
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#1a1a2e", marginBottom: 8 }}>Start a research thread</h3>
              <p style={{ fontSize: "0.82rem", color: "#8492a6", lineHeight: 1.65, marginBottom: 24 }}>Ask Scout to analyze data, summarize reports, draft emails, or research any topic — all grounded in your connected workspace.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {suggestions.map(s => (
                  <button key={s} onClick={() => { setInput(s); textareaRef.current?.focus(); }}
                    style={{ background: "#fff", border: "1px solid #dde1e7", color: "#4a5568", padding: "10px 12px", borderRadius: 8, fontSize: "0.78rem", fontWeight: 500, cursor: "pointer", fontFamily: FONT, textAlign: "left", lineHeight: 1.4 }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Message list */}
          {messages.map((msg) => (
            <div key={msg.id}
              style={{ display: "flex", gap: 12, alignItems: "flex-start", maxWidth: "78%", alignSelf: msg.role === "user" ? "flex-end" : "flex-start", flexDirection: msg.role === "user" ? "row-reverse" : "row" }}
              onMouseEnter={() => setHoveredMsg(msg.id)}
              onMouseLeave={() => setHoveredMsg(null)}>

              {/* Avatar */}
              {msg.role === "ai"
                ? <div style={{ width: 28, height: 28, borderRadius: 7, background: SIDEBAR, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}><Search size={11} color="#fff" strokeWidth={2.5} /></div>
                : <div style={{ width: 28, height: 28, borderRadius: 7, background: "#dde1e7", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.57rem", color: "#6b7c93", fontWeight: 700, marginTop: 1 }}>SK</div>
              }

              <div style={{ minWidth: 0 }}>
                {/* Bubble */}
                <div style={{ background: msg.role === "ai" ? "#fff" : SIDEBAR, border: msg.role === "ai" ? "1px solid #e2e6ea" : "none", borderRadius: msg.role === "ai" ? "3px 13px 13px 13px" : "13px 3px 13px 13px", padding: "13px 17px", fontSize: "0.87rem", lineHeight: 1.74, color: msg.role === "ai" ? "#2d3748" : "#fff", boxShadow: msg.role === "ai" ? "0 1px 3px rgba(0,0,0,0.06)" : "none", whiteSpace: "pre-line", wordBreak: "break-word" }}>
                  {renderText(msg.text)}
                </div>

                {/* Source chips */}
                {msg.role === "ai" && msg.sources?.length > 0 && (
                  <div style={{ display: "flex", gap: 5, marginTop: 7, flexWrap: "wrap" }}>
                    {msg.sources.map(src => (
                      <span key={src} style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: "0.64rem", color: "#6b7c93", background: "#fff", border: "1px solid #dde1e7", padding: "2px 8px", borderRadius: 4, fontWeight: 500 }}>
                        <FileText size={9} strokeWidth={2} /> {src}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action bar — AI messages only, fades in on hover */}
                {msg.role === "ai" && (
                  <div style={{ display: "flex", gap: 4, marginTop: 7, opacity: hoveredMsg === msg.id ? 1 : 0, transition: "opacity 0.15s", pointerEvents: hoveredMsg === msg.id ? "auto" : "none" }}>
                    <button onClick={() => copyText(msg.id, msg.text)}
                      style={{ display: "inline-flex", alignItems: "center", gap: 5, background: copied === msg.id ? "#EEF2FF" : "#fff", border: `1px solid ${copied === msg.id ? "#C7D2FE" : "#e2e6ea"}`, borderRadius: 5, padding: "3px 9px", fontSize: "0.67rem", color: copied === msg.id ? ACCENT : "#8492a6", cursor: "pointer", fontFamily: FONT, fontWeight: 500, transition: "all 0.15s" }}>
                      {copied === msg.id ? <Check size={10} strokeWidth={2.5} /> : <Download size={10} strokeWidth={2} />}
                      {copied === msg.id ? "Copied" : "Copy"}
                    </button>
                    <button onClick={() => setLiked(p => ({ ...p, [msg.id]: !p[msg.id] }))}
                      style={{ display: "inline-flex", alignItems: "center", gap: 5, background: liked[msg.id] ? "#EEF2FF" : "#fff", border: `1px solid ${liked[msg.id] ? "#C7D2FE" : "#e2e6ea"}`, borderRadius: 5, padding: "3px 9px", fontSize: "0.67rem", color: liked[msg.id] ? ACCENT : "#8492a6", cursor: "pointer", fontFamily: FONT, fontWeight: 500, transition: "all 0.15s" }}>
                      <Star size={10} strokeWidth={2} fill={liked[msg.id] ? ACCENT : "none"} /> Helpful
                    </button>
                    <button onClick={() => {
                        if (isTyping) return;
                        setIsTyping(true);
                        setTimeout(() => {
                          const prev = messages.slice(0, messages.indexOf(msg));
                          const lastUser = [...prev].reverse().find(m => m.role === "user");
                          const resp = lastUser ? getAIResponse(lastUser.text) : getAIResponse("");
                          setMessages(p => {
                            const idx = p.findIndex(m => m.id === msg.id);
                            const next = [...p];
                            next[idx] = { ...next[idx], ...resp, id: Date.now() };
                            return next;
                          });
                          setIsTyping(false);
                        }, 1000 + Math.random() * 500);
                      }}
                      style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#fff", border: "1px solid #e2e6ea", borderRadius: 5, padding: "3px 9px", fontSize: "0.67rem", color: "#8492a6", cursor: "pointer", fontFamily: FONT, fontWeight: 500 }}>
                      <Activity size={10} strokeWidth={2} /> Regenerate
                    </button>
                  </div>
                )}

                <p style={{ fontSize: "0.59rem", color: "#c0cad4", marginTop: 6, textAlign: msg.role === "user" ? "right" : "left" }}>{msg.time}</p>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ width: 28, height: 28, borderRadius: 7, background: SIDEBAR, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Search size={11} color="#fff" strokeWidth={2.5} />
              </div>
              <div>
                <div style={{ background: "#fff", border: "1px solid #e2e6ea", borderRadius: "3px 13px 13px 13px", padding: "13px 17px", display: "flex", gap: 5, alignItems: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
                  {[0, 1, 2].map(j => <div key={j} style={{ width: 6, height: 6, borderRadius: "50%", background: "#bcc5d0", animation: "aiBounce 1.4s ease-in-out infinite", animationDelay: `${j * 0.2}s` }} />)}
                </div>
                <p style={{ fontSize: "0.59rem", color: "#c0cad4", marginTop: 5 }}>Scout is thinking…</p>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* ── Input area ── */}
        <div style={{ padding: "12px 28px 18px", borderTop: "1px solid #e2e6ea", background: "#fff", flexShrink: 0 }}>
          {/* Suggested prompts — shown when few messages and input is empty */}
          {messages.length <= 3 && !input && !isTyping && (
            <div style={{ display: "flex", gap: 7, marginBottom: 11, flexWrap: "wrap" }}>
              {suggestions.map(s => (
                <button key={s} onClick={() => { setInput(s); textareaRef.current?.focus(); }}
                  style={{ background: "#f4f6f9", border: "1px solid #dde1e7", color: "#4a5568", padding: "5px 11px", borderRadius: 6, fontSize: "0.73rem", fontWeight: 500, cursor: "pointer", fontFamily: FONT, transition: "border-color 0.15s" }}>
                  {s}
                </button>
              ))}
            </div>
          )}
          <div style={{ background: "#f4f6f9", border: `1px solid ${canSend ? "#b8c4d0" : "#dde1e7"}`, borderRadius: 12, padding: "11px 14px", display: "flex", alignItems: "flex-end", gap: 10, transition: "border-color 0.2s" }}>
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="Ask Scout anything… (Enter to send, Shift+Enter for new line)"
              disabled={isTyping}
              style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#2d3748", fontSize: "0.88rem", resize: "none", fontFamily: FONT, lineHeight: 1.6, minHeight: 24, maxHeight: 140, overflowY: "auto" }}
              rows={1}
            />
            <button onClick={sendMessage} disabled={!canSend}
              style={{ width: 34, height: 34, borderRadius: 8, background: canSend ? ACCENT : "#dde1e7", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: canSend ? "pointer" : "not-allowed", flexShrink: 0, transition: "background 0.2s" }}>
              <Send size={14} color="#fff" strokeWidth={2} />
            </button>
          </div>
          <p style={{ fontSize: "0.59rem", color: "#c0cad4", textAlign: "center", marginTop: 8 }}>Scout may make errors. Verify critical information before acting on it.</p>
        </div>
      </main>

      <style>{`
        @keyframes aiBounce { 0%,100%{opacity:.3;transform:translateY(0)} 50%{opacity:.9;transform:translateY(-3px)} }
        aside::-webkit-scrollbar { width: 3px; }
        aside::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
      `}</style>
    </div>
  );
}

/* ─── 9. E-COMMERCE ──────────────────────────────────────────── */
function EcommercePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [wishlisted, setWishlisted]         = useState(new Set());
  const [cartCount, setCartCount]           = useState(2);
  const [addedToCart, setAddedToCart]       = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const FONT  = "'Helvetica Neue', Arial, sans-serif";
  const BG    = "#FAFAF8";
  const SURF  = "#FFFFFF";
  const INK   = "#1A1A1A";
  const MUTED = "#8A8680";
  const STONE = "#E8E4DE";
  const BRASS = "#B8954A";
  const GREEN = "#3D7A5E";

  const categories = ["All", "Furniture", "Textiles", "Kitchen", "Lighting", "Accessories"];
  const priceRanges = ["Under $50", "$50–$150", "$150–$300", "$300+"];
  const materials   = ["Oak", "Linen", "Ceramic", "Brass", "Marble", "Wool"];
  const swatches    = ["#EDE8E1", "#3D3D3A", "#C8A87A", "#B8954A", "#D8D4CE", "#F0EEEA"];

  const products = [
    { name: "Linen Throw Blanket",   sub: "100% Belgian Linen",             price: 89,  orig: null, imgURL:"https://m.media-amazon.com/images/I/71EUmwZhM6L._AC_UF894,1000_QL80_.jpg", imgBg: "#EDE8E1", imgDark: false, badge: null,   cat: "Textiles",     inStock: true  },
    { name: "Solid Oak Side Table",  sub: "FSC-Certified White Oak",         price: 349, orig: 449, imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTqoldexOP7MkWdiNzXXsDF2RTVhRw3xUGRFiKXKLuoeJ1vZJ7L7TQ7OME&s=10",  imgBg: "#C8A87A", imgDark: false, badge: "Sale", cat: "Furniture",    inStock: true  },
    { name: "Ceramic Pour-Over Set", sub: "Hand-Thrown Stoneware",           price: 64,  orig: null, imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ugN_UeTsSTEoRbw7dWa37oaCVaUSXs9NK-SGPoy1eXruwte1h6HmfmI&s=10", imgBg: "#F0EEEA", imgDark: false, badge: "New",  cat: "Kitchen",      inStock: true  },
    { name: "Wool Floor Cushion",    sub: "Merino Wool, Kapok Fill",         price: 129, orig: null, imgURL:"https://eyesofgypsy.com/cdn/shop/files/21_a5aec4f9-dced-49b5-928d-b1feacb9ec54.jpg?v=1764852471&width=1946", imgBg: "#3D3D3A", imgDark: true,  badge: null,   cat: "Textiles",     inStock: false },
    { name: "Brass Task Lamp",       sub: "Solid Brass, Linen Shade",        price: 199, orig: 269, imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Po-yoctNh_V_TRKZFyALiALDcfukl6WfB8VdqmghUyBSa187G-nqmuYK&s=10", imgBg: "#C8A87A", imgDark: false, badge: "Sale", cat: "Lighting",     inStock: true  },
    { name: "Marble Coaster Set",    sub: "Honed Carrara Marble, Set of 4",  price: 48,  orig: null, imgURL:"https://theheritageartifacts.com/cdn/shop/products/DSC_4370_2000x2667.jpg?v=1679222912", imgBg: "#D8D4CE", imgDark: false, badge: null,   cat: "Accessories",  inStock: true  },
  ];

  const filtered = activeCategory === "All" ? products : products.filter(p => p.cat === activeCategory);

  const toggleWishlist = (i) => {
    setWishlisted(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const addToCart = (i) => {
    setCartCount(c => c + 1);
    setAddedToCart(i);
    setTimeout(() => setAddedToCart(null), 1500);
  };

  const Divider = () => <div style={{ height: 1, background: STONE, margin: "20px 0" }} />;

  return (
    <div style={{ fontFamily: FONT, background: BG, minHeight: "100vh", color: INK }}>

      {/* ── Navigation ── */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: SURF, borderBottom: `1px solid ${STONE}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 36px", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>HAUS</span>
          <div style={{ display: "flex", gap: 30, fontSize: "0.77rem", letterSpacing: "0.07em", textTransform: "uppercase", fontWeight: 500 }}>
            {[["New Arrivals", INK], ["Furniture", MUTED], ["Textiles", MUTED], ["Kitchen", MUTED], ["Lighting", MUTED], ["Sale", BRASS]].map(([l, c]) => (
              <a key={l} href="#" style={{ textDecoration: "none", color: c }}>{l}</a>
            ))}
          </div>
          <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
            <BackBtn light />
            {[<Search size={17} strokeWidth={1.6} />, <User size={17} strokeWidth={1.6} />].map((icon, i) => (
              <button key={i} style={{ background: "none", border: "none", cursor: "pointer", padding: "10px 9px", display: "flex", color: INK }}>{icon}</button>
            ))}
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: "10px 9px", display: "flex", position: "relative", color: INK }}>
              <ShoppingBag size={17} strokeWidth={1.6} />
              <span style={{ position: "absolute", top: 5, right: 4, width: 14, height: 14, borderRadius: "50%", background: INK, color: SURF, fontSize: "0.46rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{cartCount}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Announcement ── */}
      <div style={{ background: INK, color: SURF, textAlign: "center", padding: "9px", fontSize: "0.69rem", letterSpacing: ".1em", textTransform: "uppercase" }}>
        Complimentary shipping on orders above $200 &nbsp;·&nbsp; Use <strong>HAUS25</strong> for 10% off
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 36px 80px" }}>

        {/* ── Page header ── */}
        <div style={{ padding: "38px 0 26px", borderBottom: `1px solid ${STONE}`, display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontSize: "0.7rem", color: MUTED, letterSpacing: ".07em", textTransform: "uppercase", marginBottom: 9 }}>Home / New Arrivals</p>
            <h1 style={{ fontSize: "2.1rem", fontWeight: 700, letterSpacing: "-0.04em", margin: 0, lineHeight: 1.05 }}>New Arrivals</h1>
            <p style={{ fontSize: "0.79rem", color: MUTED, marginTop: 7 }}>{filtered.length} products</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, border: `1px solid ${STONE}`, padding: "8px 14px", background: SURF, cursor: "pointer", fontSize: "0.79rem", color: INK }}>
            <span>Sort: Newest</span>
            <ChevronDown size={13} color={MUTED} strokeWidth={2} />
          </div>
        </div>

        {/* ── Body ── */}
        <div style={{ display: "grid", gridTemplateColumns: "210px 1fr", gap: 44, paddingTop: 36 }}>

          {/* ── Sidebar ── */}
          <aside style={{ paddingTop: 2 }}>
            {/* Category */}
            <div style={{ marginBottom: 6 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" }}>Category</span>
                <SlidersHorizontal size={12} color={MUTED} strokeWidth={1.75} />
              </div>
              {categories.map(c => (
                <button key={c} onClick={() => setActiveCategory(c)}
                  style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "5.5px 0", fontFamily: FONT, fontSize: "0.84rem", color: activeCategory === c ? INK : MUTED, fontWeight: activeCategory === c ? 600 : 400, textAlign: "left" }}>
                  <span>{c}</span>
                  {activeCategory === c && <Check size={12} color={INK} strokeWidth={2.5} />}
                </button>
              ))}
            </div>

            <Divider />

            {/* Price */}
            <div style={{ marginBottom: 6 }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", display: "block", marginBottom: 14 }}>Price</span>
              {priceRanges.map(label => (
                <label key={label} style={{ display: "flex", alignItems: "center", gap: 9, cursor: "pointer", fontSize: "0.82rem", color: MUTED, marginBottom: 9 }}>
                  <div style={{ width: 14, height: 14, border: `1.5px solid ${STONE}`, background: SURF, flexShrink: 0 }} />
                  {label}
                </label>
              ))}
            </div>

            <Divider />

            {/* Material */}
            <div style={{ marginBottom: 6 }}>
              <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", display: "block", marginBottom: 14 }}>Material</span>
              {materials.map(m => (
                <label key={m} style={{ display: "flex", alignItems: "center", gap: 9, cursor: "pointer", fontSize: "0.82rem", color: MUTED, marginBottom: 9 }}>
                  <div style={{ width: 14, height: 14, border: `1.5px solid ${STONE}`, background: SURF, flexShrink: 0 }} />
                  {m}
                </label>
              ))}
            </div>

            <Divider />

            {/* Color */}
            <div>
              <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", display: "block", marginBottom: 14 }}>Colour</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {swatches.map((c, i) => (
                  <button key={i} title={c} style={{ width: 22, height: 22, borderRadius: "50%", background: c, border: `1.5px solid ${i === 1 ? INK : STONE}`, cursor: "pointer", padding: 0, outline: i === 1 ? `2px solid ${STONE}` : "none", outlineOffset: 2 }} />
                ))}
              </div>
            </div>
          </aside>

          {/* ── Products ── */}
          <div>
            {/* Active filter chip */}
            <div style={{ display: "flex", gap: 7, marginBottom: 22 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: INK, color: SURF, padding: "5px 11px", fontSize: "0.72rem", fontWeight: 500, letterSpacing: ".04em" }}>
                {activeCategory}
                <button onClick={() => setActiveCategory("All")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, color: "rgba(255,255,255,0.65)", display: "flex", lineHeight: 1, fontSize: 14 }}>×</button>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, border: `1px solid ${STONE}`, padding: "5px 11px", fontSize: "0.72rem", color: MUTED }}>
                In Stock
                <span style={{ color: "inherit", opacity: 0.5, fontSize: 14, lineHeight: 1 }}>×</span>
              </div>
            </div>

            {/* Product grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
              {filtered.map((p, i) => {
                const isW     = wishlisted.has(i);
                const isAdded = addedToCart === i;
                const hovered = hoveredProduct === i;
                return (
                  <div key={i} style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHoveredProduct(i)}
                    onMouseLeave={() => setHoveredProduct(null)}>
                    {/* Image area */}
                    <div style={{ background: p.imgBg, aspectRatio: "4/5", position: "relative", overflow: "hidden", marginBottom: 13 }}>
                      {/* Product image */}
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", transform: hovered ? "scale(1.04)" : "scale(1)", transition: "transform 0.5s ease" }}>
                        {p.imgURL ? (
                          <img
                            src={p.imgURL}
                            alt={p.name}
                            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                          />
                        ) : (
                          <div style={{ width: "44%", height: "58%", background: p.imgDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)", borderRadius: 3 }} />
                        )}
                      </div>
                      {/* Badge */}
                      {p.badge && (
                        <div style={{ position: "absolute", top: 12, left: 12, background: p.badge === "Sale" ? BRASS : SURF, color: p.badge === "Sale" ? SURF : INK, fontSize: "0.6rem", fontWeight: 700, padding: "3px 9px", letterSpacing: ".07em", textTransform: "uppercase" }}>
                          {p.badge}
                        </div>
                      )}
                      {/* Wishlist */}
                      <button onClick={e => { e.stopPropagation(); toggleWishlist(i); }}
                        style={{ position: "absolute", top: 10, right: 10, width: 32, height: 32, background: SURF, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.1)", transition: "opacity 0.2s", opacity: hovered || isW ? 1 : 0 }}>
                        <Heart size={14} color={isW ? BRASS : INK} fill={isW ? BRASS : "none"} strokeWidth={1.5} />
                      </button>
                      {/* Out of stock overlay */}
                      {!p.inStock && (
                        <div style={{ position: "absolute", inset: 0, background: "rgba(250,250,248,0.72)", display: "flex", alignItems: "flex-end", padding: "12px 14px" }}>
                          <span style={{ fontSize: "0.7rem", letterSpacing: ".07em", textTransform: "uppercase", color: MUTED, fontWeight: 600 }}>Out of Stock</span>
                        </div>
                      )}
                    </div>
                    {/* Info */}
                    <div>
                      <p style={{ fontSize: "0.87rem", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.3, marginBottom: 3 }}>{p.name}</p>
                      <p style={{ fontSize: "0.75rem", color: MUTED, marginBottom: 11, lineHeight: 1.4 }}>{p.sub}</p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", gap: 7, alignItems: "baseline" }}>
                          <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>${p.price}</span>
                          {p.orig && <span style={{ fontSize: "0.78rem", color: MUTED, textDecoration: "line-through" }}>${p.orig}</span>}
                        </div>
                        {p.inStock ? (
                          <button onClick={() => addToCart(i)}
                            style={{ background: isAdded ? GREEN : INK, color: SURF, border: "none", padding: "7px 14px", fontSize: "0.7rem", fontWeight: 600, cursor: "pointer", letterSpacing: ".05em", textTransform: "uppercase", fontFamily: FONT, display: "flex", alignItems: "center", gap: 5, transition: "background 0.25s" }}>
                            {isAdded ? <><Check size={11} strokeWidth={2.5} /> Added</> : "Add to Bag"}
                          </button>
                        ) : (
                          <button style={{ background: "none", border: `1px solid ${STONE}`, color: MUTED, padding: "7px 12px", fontSize: "0.7rem", fontWeight: 500, cursor: "pointer", letterSpacing: ".04em", fontFamily: FONT }}>Notify Me</button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── Editorial banner ── */}
            <div style={{ marginTop: 60, display: "grid", gridTemplateColumns: "1fr 1fr", background: INK, overflow: "hidden" }}>
              <div style={{ padding: "52px 48px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 260 }}>
                <div>
                  <p style={{ fontSize: "0.66rem", letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)", marginBottom: 16 }}>The HAUS Standard</p>
                  <h3 style={{ fontSize: "1.85rem", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.08, color: SURF, margin: "0 0 18px" }}>Objects made to last<br />a lifetime.</h3>
                  <p style={{ fontSize: "0.81rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 340 }}>Every piece is sourced from independent makers and certified workshops that share our commitment to slow manufacturing and honest materials.</p>
                </div>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 7, color: SURF, textDecoration: "none", fontSize: "0.77rem", fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", marginTop: 24 }}>
                  Our Story <ArrowUpRight size={13} strokeWidth={2} />
                </a>
              </div>
              <div style={{ background: "#252520", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, padding: 3 }}>
                {["#EDE8E1", "#C8A87A", "#3D3D3A", "#D8D4CE"].map((c, i) => (
                  <div key={i} style={{ background: c, aspectRatio: "1" }} />
                ))}
              </div>
            </div>

            {/* ── Trust signals ── */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
              {[
                [<Truck size={17} strokeWidth={1.5} />,   "Free Shipping",   "On all orders over $200"],
                [<Package size={17} strokeWidth={1.5} />, "30-Day Returns",  "No questions asked"],
                [<Shield size={17} strokeWidth={1.5} />,  "2-Year Warranty", "On all furniture items"],
              ].map(([icon, title, sub], i) => (
                <div key={i} style={{ padding: "26px 22px", display: "flex", alignItems: "flex-start", gap: 13, borderTop: `1px solid ${STONE}`, borderRight: i < 2 ? `1px solid ${STONE}` : "none" }}>
                  <div style={{ color: MUTED, flexShrink: 0, marginTop: 2 }}>{icon}</div>
                  <div>
                    <p style={{ fontSize: "0.81rem", fontWeight: 600, marginBottom: 3 }}>{title}</p>
                    <p style={{ fontSize: "0.74rem", color: MUTED }}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 10. LANDING PAGE ────────────────────────────────────────── */
function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const T = {
    serif: "Georgia, 'Times New Roman', 'Palatino Linotype', serif",
    sans:  "'Helvetica Neue', 'Inter', Arial, sans-serif",
  };

  const C = {
    cream:  "#f5f0e8",
    ink:    "#1a1814",
    muted:  "#7a7060",
    stone:  "#c8bfaf",
    green:  "#3d5a38",
    tan:    "#8c7a5e",
  };

  const experiences = [
    {
      label: "The Highlands",
      title: "Ancient peaks,\nunbroken silence.",
      desc: "Three weeks traversing Scotland's most remote glens. No signal, no schedule — just stone and sky.",
      tag: "12-day expedition",
      bg: "#d4cbbf",
    },
    {
      label: "Patagonia",
      title: "Wind-carved\nand wild.",
      desc: "At the end of the world, the mountains don't ask for much — only your full attention.",
      tag: "18-day circuit",
      bg: "#c5d4c8",
    },
    {
      label: "Norwegian Fjords",
      title: "Water, light,\nand stillness.",
      desc: "Kayaking the Nærøyfjord at dawn. The kind of quiet that reorganises your priorities.",
      tag: "10-day voyage",
      bg: "#c3cdd6",
    },
  ];

  const stats = [
    { num: "14",   label: "Countries" },
    { num: "3,200", label: "Guests guided" },
    { num: "8",    label: "Years operating" },
    { num: "100%", label: "Carbon neutral" },
  ];

  return (
    <div style={{ fontFamily: T.serif, background: C.cream, minHeight: "100vh", color: C.ink, overflowX: "hidden" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 48px",
        height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(245,240,232,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.stone}55` : "1px solid transparent",
        transition: "all 0.45s ease",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 3 }}>
          <span style={{ fontFamily: T.serif, fontStyle: "italic", fontWeight: 400, fontSize: "1.35rem", color: scrolled ? C.ink : "#fff", letterSpacing: "-0.01em", transition: "color .45s" }}>Terrain</span>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: C.green, marginLeft: 3, marginBottom: 3 }} />
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 36, fontFamily: T.sans, fontSize: "0.78rem", letterSpacing: ".04em", textTransform: "uppercase", fontWeight: 500 }}>
          {["Journeys", "Philosophy", "Journal", "About"].map(l => (
            <a key={l} href="#" style={{ textDecoration: "none", color: scrolled ? C.muted : "rgba(255,255,255,0.65)", transition: "color .45s" }}
              onMouseEnter={e => e.currentTarget.style.color = scrolled ? C.ink : "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = scrolled ? C.muted : "rgba(255,255,255,0.65)"}>
              {l}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <BackBtn light={scrolled} />
          <a href="#" style={{
            fontFamily: T.sans, fontSize: "0.75rem", fontWeight: 600, letterSpacing: ".06em",
            textTransform: "uppercase", textDecoration: "none",
            padding: "9px 22px", border: `1px solid ${scrolled ? C.ink : "rgba(255,255,255,0.55)"}`,
            color: scrolled ? C.ink : "#fff",
            transition: "all .45s ease",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = scrolled ? C.ink : "rgba(255,255,255,0.15)"; e.currentTarget.style.color = scrolled ? C.cream : "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = scrolled ? C.ink : "#fff"; }}>
            Plan a journey
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: "relative", height: "100vh", minHeight: 640, overflow: "hidden", display: "flex", alignItems: "flex-end" }}>

        {/* Video */}
        <video
          autoPlay muted loop playsInline
          onCanPlay={() => setVideoLoaded(true)}
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center",
            transition: "opacity 1.2s ease",
            opacity: videoLoaded ? 1 : 0,
          }}
          src="/hero.mp4"
        />

        {/* Fallback bg in case video fails */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(170deg,#2a3d28 0%,#1a2e1a 40%,#0f1f10 100%)",
          zIndex: videoLoaded ? -1 : 0,
        }} />

        {/* Dark overlay — bottom-weighted so text reads cleanly */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(8,8,5,0.85) 0%, rgba(8,8,5,0.35) 50%, rgba(8,8,5,0.18) 100%)",
          zIndex: 1,
        }} />

        {/* Thin top vignette */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 25%)",
          zIndex: 1,
        }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: 1160, margin: "0 auto", padding: "0 48px 72px" }}>

          {/* Eyebrow */}
          <div style={{ fontFamily: T.sans, fontSize: "0.7rem", letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ display: "inline-block", width: 24, height: 1, background: "rgba(255,255,255,0.3)" }} />
            Small-group wilderness journeys · Since 2016
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: T.serif, fontWeight: 400, fontStyle: "italic",
            fontSize: "clamp(3.2rem,8vw,7rem)",
            lineHeight: 1.05, letterSpacing: "-0.02em",
            color: "#fff",
            marginBottom: 28,
            maxWidth: 860,
          }}>
            Where the wild<br />
            <span style={{ fontStyle: "normal", fontWeight: 700 }}>things breathe.</span>
          </h1>

          {/* Sub */}
          <p style={{
            fontFamily: T.sans, fontSize: "1rem", fontWeight: 300,
            color: "rgba(255,255,255,0.58)", lineHeight: 1.75,
            maxWidth: 440, marginBottom: 40,
          }}>
            We take small groups into the world&apos;s most extraordinary landscapes. No crowds. No shortcuts. Just the land and the people who love it.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
            <a href="#" style={{
              fontFamily: T.sans, fontSize: "0.8rem", fontWeight: 600, letterSpacing: ".06em",
              textTransform: "uppercase", textDecoration: "none",
              padding: "14px 36px",
              background: "#fff", color: C.ink,
              transition: "background .25s, color .25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = C.cream; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#fff"; }}>
              Browse journeys
            </a>
            <a href="#" style={{
              fontFamily: T.sans, fontSize: "0.8rem", fontWeight: 500, letterSpacing: ".04em",
              textDecoration: "none", color: "rgba(255,255,255,0.7)",
              display: "flex", alignItems: "center", gap: 8,
              transition: "color .25s",
            }}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}>
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, border: "1px solid rgba(255,255,255,0.3)", borderRadius: "50%", fontSize: "0.9rem" }}>▶</span>
              Watch our story
            </a>
          </div>

          {/* Scroll indicator */}
          <div style={{ position: "absolute", right: 48, bottom: 72, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div style={{ fontFamily: T.sans, fontSize: "0.6rem", letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>Scroll</div>
            <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,0.3))" }} />
          </div>
        </div>
      </section>

      {/* ── INTRO PULL QUOTE ── */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "120px 48px" }}>
        <div style={{ fontFamily: T.sans, fontSize: "0.68rem", letterSpacing: ".14em", textTransform: "uppercase", color: C.muted, marginBottom: 28, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "inline-block", width: 20, height: 1, background: C.stone }} />
          Our philosophy
        </div>
        <p style={{
          fontFamily: T.serif, fontStyle: "italic", fontWeight: 400,
          fontSize: "clamp(1.5rem,3.5vw,2.6rem)",
          lineHeight: 1.45, letterSpacing: "-0.01em",
          color: C.ink,
          marginBottom: 36,
        }}>
          "The world's great places don't yield their secrets to those in a hurry. We build slow journeys for people who want to actually arrive."
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: C.stone, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "1.1rem" }}>🌿</span>
          </div>
          <div>
            <p style={{ fontFamily: T.sans, fontSize: "0.8rem", fontWeight: 600, color: C.ink, marginBottom: 2 }}>Elspeth Morrow</p>
            <p style={{ fontFamily: T.sans, fontSize: "0.72rem", color: C.muted }}>Founder · Terrain</p>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCES ── */}
      <section style={{ padding: "0 0 120px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}>
            <h2 style={{ fontFamily: T.serif, fontWeight: 400, fontSize: "clamp(1.8rem,4vw,3rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Current<br /><em>journeys.</em>
            </h2>
            <a href="#" style={{ fontFamily: T.sans, fontSize: "0.72rem", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", textDecoration: "none", color: C.muted, display: "flex", alignItems: "center", gap: 6, borderBottom: `1px solid ${C.stone}`, paddingBottom: 2 }}
              onMouseEnter={e => e.currentTarget.style.color = C.ink}
              onMouseLeave={e => e.currentTarget.style.color = C.muted}>
              All journeys →
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
            {experiences.map(({ label, title, desc, tag, bg }, i) => (
              <div
                key={i}
                style={{ position: "relative", background: bg, padding: "52px 32px 36px", cursor: "pointer", overflow: "hidden", transition: "transform .35s ease" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                {/* Card number */}
                <span style={{ position: "absolute", top: 22, right: 24, fontFamily: T.sans, fontSize: "0.6rem", fontWeight: 700, letterSpacing: ".12em", color: "rgba(0,0,0,0.22)" }}>0{i + 1}</span>
                {/* Tag */}
                <span style={{ display: "inline-block", fontFamily: T.sans, fontSize: "0.6rem", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(0,0,0,0.38)", marginBottom: 20 }}>{label}</span>
                {/* Title */}
                <h3 style={{ fontFamily: T.serif, fontWeight: 400, fontStyle: "italic", fontSize: "1.7rem", lineHeight: 1.2, letterSpacing: "-0.01em", color: C.ink, marginBottom: 16, whiteSpace: "pre-line" }}>{title}</h3>
                {/* Desc */}
                <p style={{ fontFamily: T.sans, fontSize: "0.82rem", lineHeight: 1.7, color: "rgba(26,24,20,0.55)", marginBottom: 32 }}>{desc}</p>
                {/* Duration tag */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, borderTop: "1px solid rgba(0,0,0,0.14)", paddingTop: 14 }}>
                  <span style={{ fontFamily: T.sans, fontSize: "0.65rem", fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(0,0,0,0.38)" }}>{tag}</span>
                  <span style={{ fontSize: "0.7rem", color: "rgba(0,0,0,0.28)" }}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ borderTop: `1px solid ${C.stone}55`, borderBottom: `1px solid ${C.stone}55` }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          {stats.map(({ num, label }, i) => (
            <div key={i} style={{ padding: "52px 0", borderLeft: i > 0 ? `1px solid ${C.stone}55` : "none", paddingLeft: i > 0 ? 40 : 0 }}>
              <p style={{ fontFamily: T.serif, fontStyle: "italic", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, letterSpacing: "-0.03em", color: C.ink, lineHeight: 1, marginBottom: 8 }}>{num}</p>
              <p style={{ fontFamily: T.sans, fontSize: "0.72rem", letterSpacing: ".08em", textTransform: "uppercase", color: C.muted }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "120px 48px", textAlign: "center" }}>
        <div style={{ fontSize: "2rem", color: C.stone, marginBottom: 28, lineHeight: 1 }}>"</div>
        <p style={{ fontFamily: T.serif, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.15rem,2.5vw,1.55rem)", lineHeight: 1.65, color: C.ink, marginBottom: 40 }}>
          I&apos;ve done guided trips before, but nothing like this. Terrain gave us 12 days in the Highlands with no agenda beyond the trail. I came back a different person.
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <p style={{ fontFamily: T.sans, fontSize: "0.82rem", fontWeight: 600, color: C.ink }}>Miriam van der Berg</p>
          <p style={{ fontFamily: T.sans, fontSize: "0.72rem", color: C.muted }}>Amsterdam · Highlands Journey 2024</p>
          <div style={{ display: "flex", gap: 3, marginTop: 6 }}>
            {[0,1,2,3,4].map(i => <span key={i} style={{ fontSize: "0.7rem", color: C.tan }}>★</span>)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: C.ink, padding: "100px 48px", textAlign: "center" }}>
        <div style={{ fontFamily: T.sans, fontSize: "0.68rem", letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 28, display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <span style={{ display: "inline-block", width: 24, height: 1, background: "rgba(255,255,255,0.2)" }} />
          Open for 2025
          <span style={{ display: "inline-block", width: 24, height: 1, background: "rgba(255,255,255,0.2)" }} />
        </div>
        <h2 style={{ fontFamily: T.serif, fontWeight: 400, fontStyle: "italic", fontSize: "clamp(2rem,5vw,4rem)", lineHeight: 1.1, color: "#fff", marginBottom: 18, letterSpacing: "-0.02em" }}>
          Ready to go<br /><strong style={{ fontStyle: "normal" }}>somewhere real?</strong>
        </h2>
        <p style={{ fontFamily: T.sans, fontSize: "0.95rem", color: "rgba(255,255,255,0.42)", maxWidth: 420, margin: "0 auto 44px", lineHeight: 1.75, fontWeight: 300 }}>
          Spaces on every journey are limited to 8 guests. We&apos;re already taking enquiries for 2025.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#" style={{
            fontFamily: T.sans, fontSize: "0.8rem", fontWeight: 600, letterSpacing: ".07em",
            textTransform: "uppercase", textDecoration: "none",
            padding: "16px 44px", background: C.cream, color: C.ink,
            transition: "opacity .25s",
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
            Start an enquiry
          </a>
          <a href="#" style={{
            fontFamily: T.sans, fontSize: "0.8rem", fontWeight: 500, letterSpacing: ".04em",
            textTransform: "uppercase", textDecoration: "none",
            padding: "16px 32px", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)",
            transition: "border-color .25s, color .25s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}>
            See all journeys
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: `1px solid ${C.stone}33`, padding: "32px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontFamily: T.serif, fontStyle: "italic", fontSize: "1.05rem", color: C.ink }}>Terrain<span style={{ color: C.green }}>.</span></span>
        <p style={{ fontFamily: T.sans, fontSize: "0.7rem", color: C.muted }}>© 2025 Terrain Expeditions · Edinburgh, Scotland</p>
        <div style={{ display: "flex", gap: 24, fontFamily: T.sans, fontSize: "0.7rem", color: C.muted }}>
          {["Privacy", "Terms", "Instagram"].map(l => <a key={l} href="#" style={{ textDecoration: "none", color: "inherit" }}>{l}</a>)}
        </div>
      </footer>
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
