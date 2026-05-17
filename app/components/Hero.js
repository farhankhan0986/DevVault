"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown, Download, Sparkles, MapPin, Circle } from "lucide-react";

const ROLES = [
  "Full-Stack Developer",
  "Backend Engineer",
  "API Architect",
  "MERN Specialist",
  "Next.js Developer",
];

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

const STATS = [
  { value: "15+", label: "Projects" },
  { value: "1+", label: "Yr Experience" },
  { value: "50k+", label: "Lines of Code" },
];

const TECH_TAGS = [
  { text: "React", color: "#7CB8D6", glow: "rgba(124,184,214,0.3)", pos: "-top-5 left-1/2 -translate-x-1/2", delay: "0s", dur: "6s" },
  { text: "Node.js", color: "#7DC472", glow: "rgba(125,196,114,0.28)", pos: "top-1/4 -right-8", delay: "1s", dur: "7s" },
  { text: "PostgreSQL", color: "#6B9FBF", glow: "rgba(107,159,191,0.28)", pos: "bottom-1/4 -left-8", delay: "2s", dur: "8s" },
  { text: "MongoDB", color: "#70A463", glow: "rgba(112,164,99,0.28)", pos: "-bottom-5 left-1/2 -translate-x-1/2", delay: "3s", dur: "6s" },
  { text: "Next.js", color: "#D6D6D6", glow: "rgba(214,214,214,0.18)", pos: "top-[10%] -left-6", delay: "0.5s", dur: "9s" },
  { text: "TypeScript", color: "#5B8DD9", glow: "rgba(91,141,217,0.28)", pos: "bottom-[12%] -right-5", delay: "2.5s", dur: "7s" },
];

export default function Hero() {
  const role = useTypewriter(ROLES);
  const [mounted, setMounted] = useState(false);
  const photoRef = useRef(null);

  useEffect(() => {
    // Stagger entrance
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Subtle parallax tilt on photo
  useEffect(() => {
    const el = photoRef.current;
    if (!el) return;
    const handle = (e) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 10;
      const y = ((e.clientY - top) / height - 0.5) * -10;
      el.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg) scale(1.02)`;
    };
    const reset = () => { el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)"; };
    el.addEventListener("mousemove", handle);
    el.addEventListener("mouseleave", reset);
    return () => { el.removeEventListener("mousemove", handle); el.removeEventListener("mouseleave", reset); };
  }, []);

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative h-screen max-h-screen flex items-center isolate bg-background text-foreground overflow-hidden"
      style={{ paddingTop: "72px" }}
    >
      {/* ── Layered background ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Large radial top-left */}
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.055) 0%, transparent 65%)" }} />
        {/* Large radial bottom-right */}
        <div className="absolute -bottom-60 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 65%)" }} />
        {/* Dot grid */}
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        {/* Horizontal separator glow */}
        <div className="absolute bottom-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* ── LEFT: Content ── */}
          <div className={`space-y-4 text-center lg:text-left hero-enter ${mounted ? "hero-visible" : ""}`}>

            {/* Availability badge */}
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <span className="hero-badge">
                <span className="hero-badge-dot" />
                Open to Opportunities
              </span>
              <span className="hero-location">
                <MapPin className="w-3 h-3" /> India
              </span>
            </div>

            {/* Name + Role */}
            <div className="space-y-2">
              <h1 id="hero-title" className="hero-name">
                Farhan <span className="hero-name-accent">Abid</span>
              </h1>

              {/* Typewriter role */}
              <div className="flex items-center gap-2 justify-center lg:justify-start h-8">
                <span className="hero-role-prefix">I build as a</span>
                <span className="hero-role-text">
                  {role}
                  <span className="hero-cursor">|</span>
                </span>
              </div>

              {/* Stack tags */}
              <p className="hero-stack-line">
                {["MERN", "Next.js", "PostgreSQL", "Redis", "API Security"].map((t, i) => (
                  <span key={t}>
                    <span className="hero-stack-tag">{t}</span>
                    {i < 4 && <span className="hero-stack-sep">·</span>}
                  </span>
                ))}
              </p>
            </div>

            {/* Bio */}
            <p className="hero-bio">
              I engineer <strong>scalable backend systems</strong>, harden APIs, and ship
              production-ready apps — interning at{" "}
              <span className="hero-highlight">Tripify India</span> while finishing B.Tech.
              Focused on system design, clean code, and things that actually scale.
            </p>

            {/* Stats strip */}
            <div className="flex gap-3 justify-center lg:justify-start flex-wrap">
              {STATS.map((s) => (
                <div key={s.label} className="hero-stat">
                  <span className="hero-stat-val">{s.value}</span>
                  <span className="hero-stat-lbl">{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href="#projects" className="hero-cta-primary">
                View My Work <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://drive.google.com/file/d/1LktN70GtKD1NiPYmovxbazutCELFE4aW/view?usp=sharing"
                target="_blank" rel="noopener noreferrer"
                className="hero-cta-secondary"
              >
                <Download className="w-4 h-4" /> Resume
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-2 justify-center lg:justify-start">
              {[
                { href: "https://github.com/farhankhan0986", label: "GitHub", Icon: Github },
                { href: "https://www.linkedin.com/in/farhan-abid-38967a259/", label: "LinkedIn", Icon: Linkedin },
                { href: "mailto:farhankhan080304@gmail.com", label: "Email", Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label} className="hero-social">
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Photo ── */}
          <div className={`flex justify-center hero-enter hero-enter-right ${mounted ? "hero-visible" : ""}`}
            style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full max-w-[300px] lg:max-w-[380px]" ref={photoRef}
              style={{ transition: "transform 0.18s ease-out", aspectRatio: "1" }}>

              {/* Spinning orbit ring */}
              <div className="hero-orbit" />
              {/* Second slower ring */}
              <div className="hero-orbit hero-orbit-2" />

              {/* Glow — large outer bloom */}
              <div className="absolute -z-10 hero-glow-outer" />
              {/* Glow — mid ring */}
              <div className="absolute -z-10 hero-glow-mid" />
              {/* Glow — tight core under photo */}
              <div className="absolute -z-10 hero-glow-core" />

              {/* Photo with faded edges */}
              <img
                src="/images/farhan.jpg"
                alt="Farhan Abid — Full-Stack Developer"
                className="hero-photo"
                loading="eager"
              />

              {/* Corner glow accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-full -z-10"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%)", filter: "blur(16px)" }} />

              {/* Floating tech badges */}
              {TECH_TAGS.map(({ text, color, glow, pos, delay, dur }) => (
                <div key={text}
                  className={`absolute z-20 ${pos} hero-tech-tag`}
                  style={{
                    border: `1px solid ${color}50`,
                    background: "rgba(8,8,8,0.88)",
                    color,
                    boxShadow: `0 0 14px ${glow}, 0 2px 8px rgba(0,0,0,0.5)`,
                    animation: `heroFloat ${dur} ease-in-out ${delay} infinite`,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {text}
                </div>
              ))}

              {/* Status card — bottom-left */}
            </div>
              <div className="hero-status-card relative left-[150px]">
                <span className="hero-status-dot" />
                <span>Currently building</span>
                <span className="hero-status-project">@ Tripify</span>
              </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" aria-label="Scroll down"
          className="flex flex-col items-center gap-1 text-muted hover:text-foreground transition-colors">
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>

      <style>{`
        /* ── Entrance animations ── */
        .hero-enter {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.85s cubic-bezier(.22,.68,0,1), transform 0.85s cubic-bezier(.22,.68,0,1);
        }
        .hero-enter-right {
          transform: translateX(24px) translateY(0px);
        }
        .hero-enter.hero-visible {
          opacity: 1;
          transform: translateY(0) translateX(0);
        }

        /* ── Badge & location ── */
        .hero-badge {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 13px; border-radius: 9999px;
          border: 1px solid rgba(74,222,128,0.25);
          background: rgba(74,222,128,0.06);
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(134,239,172,0.9);
        }
        .hero-badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 8px #4ade80, 0 0 16px rgba(74,222,128,0.5);
          animation: heroPulse 2s ease-in-out infinite;
        }
        @keyframes heroPulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(1.4); }
        }
        .hero-location {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 0.7rem; color: rgba(255,255,255,0.3);
          letter-spacing: 0.05em;
        }

        /* ── Name ── */
        .hero-name {
          font-size: clamp(2rem, 5vw, 3.4rem);
          font-weight: 900;
          letter-spacing: -0.035em;
          line-height: 1.05;
          color: rgb(var(--foreground));
        }
        .hero-name-accent {
          background: linear-gradient(135deg, #ffffff 20%, rgba(255,255,255,0.35) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Typewriter ── */
        .hero-role-prefix {
          font-size: 1rem; color: rgba(255,255,255,0.35); font-weight: 500; white-space: nowrap;
        }
        .hero-role-text {
          font-size: 1rem; font-weight: 700;
          color: rgb(var(--foreground));
          white-space: nowrap;
        }
        .hero-cursor {
          display: inline-block;
          animation: heroBlink 1s step-end infinite;
          color: rgba(255,255,255,0.7);
          margin-left: 1px;
        }
        @keyframes heroBlink { 0%,100%{opacity:1} 50%{opacity:0} }

        /* ── Stack tags ── */
        .hero-stack-line { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; justify-content: center; }
        @media(min-width:1024px) { .hero-stack-line { justify-content: flex-start; } }
        .hero-stack-tag {
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.06em;
          padding: 3px 9px; border-radius: 9999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.5);
        }
        .hero-stack-sep { color: rgba(255,255,255,0.2); font-size: 0.8rem; }

        /* ── Bio ── */
        .hero-bio {
          font-size: 0.93rem; line-height: 1.72;
          color: rgba(255,255,255,0.5); max-width: 500px;
        }
        .hero-bio strong { color: rgba(255,255,255,0.85); font-weight: 600; }
        .hero-highlight {
          color: rgba(255,255,255,0.85); font-weight: 600;
          border-bottom: 1px solid rgba(255,255,255,0.25);
        }

        /* ── Stats ── */
        .hero-stat {
          display: flex; flex-direction: column; align-items: center;
          padding: 9px 16px; border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(17,17,17,0.7); backdrop-filter: blur(10px);
          transition: border-color 0.2s, transform 0.2s;
        }
        .hero-stat:hover { border-color: rgba(255,255,255,0.16); transform: translateY(-2px); }
        .hero-stat-val { font-size: 1.2rem; font-weight: 900; letter-spacing: -0.03em; color: rgb(var(--foreground)); line-height: 1; }
        .hero-stat-lbl { font-size: 0.6rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-top: 3px; }

        /* ── CTAs ── */
        .hero-cta-primary {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 10px 20px; border-radius: 10px;
          font-size: 0.85rem; font-weight: 700;
          background: rgb(var(--foreground)); color: rgb(var(--background));
          transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
        }
        .hero-cta-primary:hover {
          opacity: 0.9; transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(255,255,255,0.16);
        }
        .hero-cta-primary:active { transform: scale(0.97); }
        .hero-cta-secondary {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 10px 18px; border-radius: 10px;
          font-size: 0.85rem; font-weight: 600;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.7);
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
          text-decoration: none; backdrop-filter: blur(8px);
        }
        .hero-cta-secondary:hover {
          border-color: rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.08);
          transform: translateY(-2px);
        }

        /* ── Socials ── */
        .hero-social {
          display: flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 9px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.45);
          transition: border-color 0.2s, color 0.2s, transform 0.2s, background 0.2s;
          text-decoration: none; backdrop-filter: blur(8px);
        }
        .hero-social:hover {
          border-color: rgba(255,255,255,0.2);
          color: rgb(var(--foreground));
          background: rgba(255,255,255,0.08);
          transform: translateY(-2px);
        }

        /* ── Photo ── */
        .hero-photo {
          position: relative; z-index: 10;
          width: 100%; height: 100%;
          object-fit: cover;
          border-radius: 0;
          filter: brightness(0.9) contrast(1.04);
          /* Fade all four edges — eliminates the hard rectangular boundary */
          -webkit-mask-image: radial-gradient(ellipse 82% 82% at 50% 50%, black 40%, transparent 100%);
          mask-image: radial-gradient(ellipse 82% 82% at 50% 50%, black 40%, transparent 100%);
        }

        /* ── Glow layers ── */
        .hero-glow-outer {
          inset: -40%; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 45%, transparent 70%);
          filter: blur(48px);
          animation: heroGlowPulse 4s ease-in-out infinite;
        }
        .hero-glow-mid {
          inset: -18%; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.1) 50%, transparent 70%);
          filter: blur(28px);
          animation: heroGlowPulse 4s ease-in-out 1s infinite;
        }
        .hero-glow-core {
          inset: 5%; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 65%);
          filter: blur(18px);
          animation: heroGlowPulse 3s ease-in-out 0.5s infinite;
        }
        @keyframes heroGlowPulse {
          0%,100% { opacity: 0.75; transform: scale(1); }
          50%      { opacity: 1;    transform: scale(1.06); }
        }

        /* ── Orbit rings ── */
        .hero-orbit {
          position: absolute; inset: -14px;
          border-radius: 50%;
          border: 1.5px dashed rgba(255,255,255,0.12);
          animation: heroSpin 18s linear infinite;
          pointer-events: none;
        }
        .hero-orbit-2 {
          inset: -28px;
          border-color: rgba(255,255,255,0.06);
          animation-duration: 28s;
          animation-direction: reverse;
        }
        @keyframes heroSpin { to { transform: rotate(360deg); } }

        /* ── Floating tech tags ── */
        .hero-tech-tag {
          padding: 5px 11px; border-radius: 9px;
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.03em; white-space: nowrap;
        }
        @keyframes heroFloat {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }

        /* ── Status card ── */
        .hero-status-card {
          position: absolute; bottom: -18px; left: -16px; z-index: 30;
          display: flex; align-items: center; gap: 7px;
          padding: 9px 14px; border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(10,10,10,0.88); backdrop-filter: blur(14px);
          font-size: 0.72rem; color: rgba(255,255,255,0.55);
          box-shadow: 0 8px 32px rgba(0,0,0,0.5);
          white-space: nowrap;
        }
        .hero-status-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 8px #4ade80;
          flex-shrink: 0;
          animation: heroPulse 2s ease-in-out infinite;
        }
        .hero-status-project { color: rgba(255,255,255,0.8); font-weight: 700; }
      `}</style>
    </section>
  );
}
