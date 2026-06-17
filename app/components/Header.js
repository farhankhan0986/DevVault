"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const navItems = [
  { href: "#home",       label: "Home" },
  { href: "#about",      label: "About" },
  { href: "#services",   label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#projects",   label: "Projects" },
  { href: "#skills",     label: "Skills" },
  { href: "#education",  label: "Education" },
  { href: "#contact",    label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted]        = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const ids = navItems.map(i => i.href.slice(1));
    const observers = [];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [mounted, pathname]);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const esc = (e) => { if (e.key === "Escape") setMobileOpen(false); };
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, []);

  if (pathname.startsWith("/projects/") || pathname.startsWith("/ui-styles/")) return null;

  return (
    <>
      <header className={`sticky top-0 z-50 -mt-[75px] transition-all duration-300`}>
        <nav
          aria-label="Primary navigation"
          className="transition-all duration-300"
          style={{
            background: scrolled ? "rgba(0,0,0,0.82)" : "rgba(0,0,0,0.5)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: scrolled
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid rgba(255,255,255,0.04)",
            boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.4)" : "none",
          }}
        >
          <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between gap-6">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <Logo size={36} />
              </div>
              <span className="hdr-logo-text">
                Farhan<span className="hdr-logo-dim">.dev</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-0.5 text-sm font-medium">
              {navItems.map(({ href, label }) => {
                const id = href.slice(1);
                const active = activeSection === id;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`relative px-3.5 py-2 rounded-lg transition-colors duration-200 ${
                        active ? "text-foreground" : "text-muted hover:text-foreground"
                      }`}
                    >
                      {label}
                      {active && (
                        <span
                          className="absolute inset-x-2 -bottom-[1px] h-[2px] rounded-full"
                          style={{ background: "rgba(255,255,255,0.8)", boxShadow: "0 0 8px rgba(255,255,255,0.6)" }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <Link href="#contact" className="hdr-cta">
                Get in Touch <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="flex md:hidden items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200"
              style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)" }}
              onClick={() => setMobileOpen(p => !p)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen
                ? <X className="w-5 h-5 text-foreground" />
                : <Menu className="w-5 h-5 text-foreground" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden
      />

      {/* Mobile slide-in panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] flex flex-col md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "rgba(8,8,8,0.97)",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(24px)",
        }}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-muted">
            Navigation
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-lg transition-colors hover:bg-white/8"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <X className="w-4 h-4 text-foreground" />
          </button>
        </div>

        {/* Nav links */}
        <ul className="flex flex-col px-4 py-5 gap-1 flex-1">
          {navItems.map(({ href, label }, i) => {
            const id = href.slice(1);
            const active = activeSection === id;
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active
                      ? "text-foreground bg-white/6"
                      : "text-muted hover:text-foreground hover:bg-white/4"
                  }`}
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: active ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.2)" }}
                  />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="px-5 py-6" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all hover:opacity-90 active:scale-95"
            style={{ background: "rgb(var(--foreground))", color: "rgb(var(--background))" }}
          >
            Get in Touch <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <style>{`
        .hdr-logo-text {
          font-size: 0.95rem; font-weight: 800; letter-spacing: -0.02em;
          color: rgb(var(--foreground));
        }
        .hdr-logo-dim { color: rgba(255,255,255,0.3); }
        .hdr-cta {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 18px; border-radius: 10px;
          font-size: 0.82rem; font-weight: 700;
          background: rgb(var(--foreground)); color: rgb(var(--background));
          text-decoration: none;
          transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .hdr-cta:hover {
          opacity: 0.9; transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(255,255,255,0.15);
        }
      `}</style>
    </>
  );
}
