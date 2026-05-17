"use client";

import { Github, Linkedin, Mail, ArrowUp, Instagram } from "lucide-react";
import Logo from "./Logo";

const footerLinks = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Education",  href: "#education" },
  { label: "Contact",    href: "#contact" },
];

const socials = [
  { href: "https://github.com/farhankhan0986",                       label: "GitHub",    Icon: Github,    target: "_blank" },
  { href: "https://www.linkedin.com/in/farhan-abid-38967a259/",      label: "LinkedIn",  Icon: Linkedin,  target: "_blank" },
  { href: "mailto:farhankhan080304@gmail.com",                        label: "Email",     Icon: Mail,      target: "_blank" },
  { href: "https://www.instagram.com/_._farhan__/",                   label: "Instagram", Icon: Instagram, target: "_blank" },
];

export default function Footer() {
  return (
    <footer className="relative bg-background text-foreground overflow-hidden">
      {/* Top glow line */}
      <div aria-hidden className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }} />

      {/* Ambient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(600px circle at 50% 100%, rgba(255,255,255,0.025), transparent 60%)" }} />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* Brand column */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <Logo size={32} />
              <span className="text-base font-extrabold tracking-tight">
                Farhan<span style={{ color: "rgba(255,255,255,0.3)" }}>.dev</span>
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-[220px]">
              Full-Stack Developer focused on backend architecture, secure APIs, and scalable production systems.
            </p>
            {/* Availability badge */}
            <div className="ftr-avail">
              <span className="ftr-avail-dot" />
              Open to Opportunities
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <p className="ftr-col-heading">Navigation</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="ftr-link">{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <p className="ftr-col-heading">Connect</p>
            <div className="grid grid-cols-2 gap-3">
              {socials.map(({ href, label, Icon, target }) => (
                <a key={label} href={href} target={target} rel="noopener noreferrer"
                  aria-label={label} className="ftr-social-card">
                  <Icon className="w-4 h-4 text-muted transition-colors duration-200 group-hover:text-foreground" />
                  <span className="text-sm font-medium text-muted">{label}</span>
                </a>
              ))}
            </div>
            {/* Email direct */}
            <a href="mailto:farhankhan080304@gmail.com"
              className="mt-4 flex items-center gap-2 text-xs text-muted hover:text-foreground transition-colors duration-200">
              <Mail className="w-3.5 h-3.5" />
              farhankhan080304@gmail.com
            </a>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px w-full mb-6"
          style={{ background: "rgba(255,255,255,0.06)" }} />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted" suppressHydrationWarning>
            © {new Date().getFullYear()} Farhan Abid — Built with Next.js &amp; ☕
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted">Designed &amp; developed by me</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="ftr-top-btn"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .ftr-avail {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 12px; border-radius: 9999px;
          border: 1px solid rgba(74,222,128,0.2);
          background: rgba(74,222,128,0.05);
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: rgba(134,239,172,0.85);
        }
        .ftr-avail-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #4ade80; flex-shrink: 0;
          box-shadow: 0 0 6px #4ade80;
          animation: ftrPulse 2s ease-in-out infinite;
        }
        @keyframes ftrPulse {
          0%,100%{opacity:1;transform:scale(1)}
          50%{opacity:0.5;transform:scale(1.4)}
        }

        .ftr-col-heading {
          font-size: 0.65rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: rgba(255,255,255,0.35); margin-bottom: 16px;
        }

        .ftr-link {
          font-size: 0.85rem; color: rgba(255,255,255,0.45);
          text-decoration: none; transition: color 0.2s;
          position: relative; display: inline-block;
        }
        .ftr-link:hover { color: rgba(255,255,255,0.85); }

        .ftr-social-card {
          display: flex; align-items: center; gap: 8px;
          padding: 9px 12px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03); backdrop-filter: blur(8px);
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }
        .ftr-social-card:hover {
          border-color: rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.07);
          transform: translateY(-2px);
        }
        .ftr-social-card:hover svg { color: rgba(255,255,255,0.85) !important; }

        .ftr-top-btn {
          display: flex; align-items: center; justify-content: center;
          width: 34px; height: 34px; border-radius: 9px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.5);
          transition: border-color 0.2s, color 0.2s, transform 0.2s, background 0.2s;
          cursor: pointer;
        }
        .ftr-top-btn:hover {
          border-color: rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.9);
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
}