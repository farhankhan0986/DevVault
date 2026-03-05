"use client";

import { Github, Linkedin, Mail, ArrowUp, Instagram, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-3">
              Farhan Abid
            </h3>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Full-Stack Developer focused on backend architecture, API design,
              and building scalable systems.
            </p>
          </div>

          {/* Links */}
          <nav>
            <h4 className="text-sm font-mono text-accent mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Skills", href: "#skills" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <h4 className="text-sm font-mono text-accent mb-4">Connect</h4>
            <div className="flex gap-2">
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
                  className="p-2.5 rounded-lg text-muted hover:text-foreground transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted">
              {currentYear} Farhan Abid. Built with Next.js and Tailwind CSS.
            </p>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-lg text-muted hover:text-foreground transition-colors duration-200"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
