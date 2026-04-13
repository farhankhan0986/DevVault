"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from "lucide-react";

/* ─── lightweight canvas particle animation ─── */
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H;

    const PARTICLE_COUNT = 45;
    const particles = [];

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    function mkParticle() {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.45 + 0.1,
      };
    }

    function init() {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(mkParticle());
    }

    const CONNECTION_DIST = 120;

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const a = (1 - dist / CONNECTION_DIST) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${a})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${p.alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(() => {
      resize();
      init();
    });
    ro.observe(canvas);
    resize();
    init();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-screen -top-8 md:top-0 lg:top-0 flex items-center isolate bg-[#0D0D0D] text-white pt-28 overflow-hidden"
    >
      {/* ── Animated particle canvas ── */}
      <ParticleCanvas />

      {/* ── Drifting gradient backdrop ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            "radial-gradient(ellipse 70% 55% at 20% 15%, rgba(99,102,241,0.18) 0%, transparent 65%), " +
            "radial-gradient(ellipse 50% 40% at 80% 70%, rgba(139,92,246,0.10) 0%, transparent 60%)",
        }}
      />

      {/* ── Animated grid overlay ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), " +
            "linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          animation: "grid-pan 8s linear infinite alternate",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left column ── */}
          <div className="space-y-8 lg:text-left text-center">
            <div className="space-y-4">
              {/* Badge */}
              <div className="hero-enter-1 inline-flex items-center gap-2 px-3 py-1.5 border border-indigo-500/30 bg-indigo-500/8 text-xs font-semibold text-indigo-400 tracking-wider uppercase lg:mx-0 mx-auto">
                <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse inline-block" />
                Open to Opportunities
              </div>

              {/* Name — with glow highlight */}
              <h1
                id="hero-title"
                className="hero-enter-2 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
              >
                <span className="relative inline-block">
                  {/* Glow blob behind name */}
                  <span
                    aria-hidden
                    className="absolute -inset-2 blur-2xl pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at 40% 60%, rgba(99,102,241,0.35) 0%, transparent 70%)",
                      zIndex: -1,
                    }}
                  />
                  <span className="text-white">Farhan </span>
                </span>
                <span
                  className="animate-name-glow"
                  style={{
                    background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 50%, #818cf8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Abid
                </span>
              </h1>

              <p className="hero-enter-3 text-xl sm:text-2xl md:text-3xl font-semibold" style={{ color: "#B0B0B0" }}>
                Full-Stack Web Developer
              </p>

              <p className="hero-enter-3 text-sm sm:text-base font-mono" style={{ color: "#8A8F98" }}>
                MERN • Next.js • Backend-Focused
              </p>
            </div>

            <p className="hero-enter-4 text-base sm:text-lg max-w-xl leading-relaxed" style={{ color: "#B0B0B0" }}>
              I build scalable backend systems, secure APIs, and
              production-ready web applications. Currently a B.Tech student and
              Web Developer Intern at Tripify, passionate about system design
              and engineering excellence.
            </p>

            {/* CTA buttons */}
            <div className="hero-enter-5 flex flex-wrap gap-4 pt-2 lg:justify-start justify-center">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold text-sm transition-all duration-250 hover:bg-indigo-500 hover:shadow-[0_0_22px_rgba(99,102,241,0.45)] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://drive.google.com/file/d/1QfLFjq3H-eXuRo4fqzAxOBuNo0HK7IGn/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2A2F36] border border-white/10 text-white font-semibold text-sm transition-all duration-250 hover:bg-[#353b43] hover:shadow-[0_0_14px_rgba(255,255,255,0.08)] hover:-translate-y-1 focus-visible:outline-none"
              >
                Download Resume
              </a>
            </div>

            {/* Social icons */}
            <div className="hero-enter-5 flex gap-3 pt-1 lg:justify-start justify-center">
              {[
                {
                  href: "https://github.com/farhankhan0986",
                  label: "GitHub",
                  Icon: Github,
                },
                {
                  href: "https://www.linkedin.com/in/farhan-abid-38967a259/",
                  label: "LinkedIn",
                  Icon: Linkedin,
                },
                {
                  href: "mailto:farhankhan080304@gmail.com",
                  label: "Email",
                  Icon: Mail,
                },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center border border-white/10 bg-[#1A1A1A] text-[#8A8F98] transition-all duration-200 hover:scale-110 hover:border-indigo-500/50 hover:text-indigo-400 hover:shadow-[0_0_18px_rgba(99,102,241,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <Icon className="h-[22px] w-[22px]" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right column — photo ── */}
          <div className="hero-enter-img flex justify-center">
            <div className="flex flex-col lg:flex-row justify-center relative lg:-top-13 lg:left-15 mt-10">
              {/* Spinning border — 10s rotation on all breakpoints */}
              <div className="absolute h-full w-full border-2 border-dashed border-indigo-400/30 animate-[spin_10s_linear_infinite]" />
              <div className="relative w-full max-w-md aspect-square">
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-indigo-600/20 blur-3xl scale-75" />

                {/* Profile image */}
                <img
                  src="/images/farhan.jpg"
                  alt="Farhan Abid"
                  className="relative z-10 lg:w-full lg:h-full w-72 h-72 object-cover shadow-2xl"
                  loading="lazy"
                />

                {/* Inner gradient overlay */}
                <div className="absolute inset-8 bg-gradient-to-br from-indigo-500/8 via-purple-500/8 to-violet-900/8 backdrop-blur-sm" />

                {/* Floating tech markers */}
                {[
                  {
                    text: "React",
                    pos: "-top-4 left-1/2 -translate-x-1/2",
                    border: "border-indigo-500/30",
                    fg: "text-indigo-400",
                    delay: "0s",
                    duration: "6s",
                  },
                  {
                    text: "Node.js",
                    pos: "top-1/4 -right-6",
                    border: "border-purple-500/30",
                    fg: "text-purple-400",
                    delay: "1s",
                    duration: "7s",
                  },
                  {
                    text: "PostgreSQL",
                    pos: "bottom-1/4 -left-6",
                    border: "border-violet-500/30",
                    fg: "text-violet-400",
                    delay: "2s",
                    duration: "8s",
                  },
                  {
                    text: "MongoDB",
                    pos: "-bottom-8 left-1/2 -translate-x-1/2",
                    border: "border-indigo-500/30",
                    fg: "text-indigo-400",
                    delay: "3s",
                    duration: "6s",
                  },
                  {
                    text: "Next.js",
                    pos: "top-[12%] -left-4",
                    border: "border-emerald-500/30",
                    fg: "text-emerald-400",
                    delay: "0.5s",
                    duration: "9s",
                  },
                  {
                    text: "C++",
                    pos: "bottom-[15%] right-1",
                    border: "border-pink-500/30",
                    fg: "text-pink-400",
                    delay: "2.5s",
                    duration: "7s",
                  },
                ].map(({ text, pos, border, fg, delay, duration }) => (
                  <div
                    key={text}
                    className={[
                      "absolute z-20",
                      pos,
                      "border",
                      border,
                      "bg-[#0D0D0D]/90 px-3 py-1.5 text-xs font-semibold",
                      fg,
                      "shadow-lg backdrop-blur-sm",
                    ].join(" ")}
                    style={{
                      animation: `float ${duration} ease-in-out ${delay} infinite`,
                    }}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 sm:bottom-8">
        <a
          href="#projects"
          aria-label="Scroll to projects"
          className="flex flex-col items-center gap-1.5 transition-colors hover:text-indigo-400"
          style={{ color: "#8A8F98" }}
        >
          <span className="text-xs tracking-wider">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
