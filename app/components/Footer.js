"use client";

import { Github, Linkedin, Mail, ArrowUp, Instagram, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#091229] text-foreground overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(500px_circle_at_50%_100%,rgba(99,102,241,0.18),transparent_45%)]"
      />

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Main */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-16">
          {/* About */}
          <div>
            <h3 className="text-lg font-extrabold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                Farhan
              </span>{" "}
              Abid
            </h3>
            <p className="text-sm text-muted leading-relaxed max-w-sm">
              Full-Stack Web Developer focused on backend architecture, API
              design, and building scalable, production-ready systems.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
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
                     className="relative text-gray-400 hover:text-indigo-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
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
                  className="p-3 rounded-xl borde border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {currentYear} Farhan Abid. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group p-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
          >
            <ArrowUp className="w-5 h-5 text-white transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
