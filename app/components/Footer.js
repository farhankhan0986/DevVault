"use client";

import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Instagram,
  Phone,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background text-foreground overflow-hidden">
      {/* Top border — very subtle white */}
      <div
        aria-hidden
        className="h-px w-full"
        style={{ background: "rgba(255,255,255,0.08)" }}
      />

      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(700px circle at 50% 100%, rgba(255,255,255,0.02), transparent 60%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-extrabold tracking-tight">
              Farhan{" "}
              <span className="text-muted">Abid</span>
            </h3>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Full-Stack Web Developer focused on backend architecture, API
              design, and building scalable production-ready systems.
            </p>
          </div>

          {/* Quick Links */}
          <nav>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Skills", href: "#skills" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group relative inline-block text-sm text-muted transition-colors duration-300 hover:text-foreground"
                  >
                    <span>{link.label}</span>
                    <span
                      className="absolute left-0 -bottom-1 h-[1px] w-0 transition-all duration-300 ease-out group-hover:w-full"
                      style={{ background: "rgba(255,255,255,0.3)" }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted mb-5">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "https://github.com/farhankhan0986", label: "GitHub", Icon: Github, target: "_blank" },
                { href: "https://www.linkedin.com/in/farhan-abid-38967a259/", label: "LinkedIn", Icon: Linkedin, target: "_blank" },
                { href: "mailto:farhankhan080304@gmail.com", label: "Email", Icon: Mail, target: "_blank" },
                { href: "https://www.instagram.com/_._farhan__/", label: "Instagram", Icon: Instagram, target: "_blank" },
                { href: "tel:+916392515612", label: "Phone", Icon: Phone, target: "_self" },
              ].map(({ href, label, Icon, target }) => (
                <a
                  key={label}
                  href={href}
                  target={target}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group p-3 rounded-xl border transition-all duration-300 ease-out hover:scale-110 focus-visible:outline-none"
                  style={{
                    borderColor: "rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(8px)",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                >
                  <Icon className="w-5 h-5 text-muted transition-colors duration-300 group-hover:text-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-6"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted" suppressHydrationWarning>
            © {new Date().getFullYear()} Farhan Abid. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group p-3 rounded-lg border text-foreground transition-all duration-300 ease-out hover:-translate-y-1 focus-visible:outline-none"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}