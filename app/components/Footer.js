"use client";

import { Github, Linkedin, Mail, ArrowUp, Instagram, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative bg-background text-foreground overflow-hidden"
      style={{
        "--footer-accent": "99, 102, 241",
        "--footer-accent-secondary": "139, 92, 246",
        "--footer-accent-tertiary": "124, 58, 237",
      }}
    >
      {/* Gradient top border */}
      <div
        aria-hidden
        className="h-[2px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500"
      />

      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_50%_100%,rgba(var(--footer-accent),0.08),transparent_60%)]"
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-500 text-white font-bold text-sm tracking-tight shadow-lg shadow-indigo-500/20">
                FA
              </span>
              <h3 className="text-lg font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Farhan
                </span>{" "}
                Abid
              </h3>
            </div>
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
                    className="group relative inline-block text-sm text-muted transition-colors duration-300"
                  >
                    <span className="group-hover:text-indigo-400 transition-colors duration-300">
                      {link.label}
                    </span>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500 transition-all duration-300 ease-out group-hover:w-full" />
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
                {
                  href: "https://github.com/farhankhan0986",
                  label: "GitHub",
                  Icon: Github,
                  target: "_blank",
                },
                {
                  href: "https://www.linkedin.com/in/farhan-abid-38967a259/",
                  label: "LinkedIn",
                  Icon: Linkedin,
                  target: "_blank",
                },
                {
                  href: "mailto:farhankhan080304@gmail.com",
                  label: "Email",
                  Icon: Mail,
                  target: "_blank",
                },
                {
                  href: "https://www.instagram.com/_._farhan__/",
                  label: "Instagram",
                  Icon: Instagram,
                  target: "_blank",
                },
                {
                  href: "tel:+916392515612",
                  label: "Phone",
                  Icon: Phone,
                  target: "_self",
                },
              ].map(({ href, label, Icon, target }) => (
                <a
                  key={label}
                  href={href}
                  target={target}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group p-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md
                    hover:scale-110 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(var(--footer-accent),0.25)]
                    transition-all duration-300 ease-out
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <Icon className="w-5 h-5 text-foreground transition-colors duration-300 group-hover:text-indigo-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {currentYear} Farhan Abid. All rights reserved.
          </p>

          <p className="text-xs text-muted/50 hidden md:block">
            Built with React &amp; Next.js
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group p-3 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-500 text-white shadow-lg shadow-indigo-500/25
              hover:-translate-y-1 hover:shadow-indigo-500/40
              transition-all duration-300 ease-out
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
