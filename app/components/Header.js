"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../components/theme-toggle";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change or hash navigation
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  if (pathname.startsWith("/projects/")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 -mt-[75px]">
      <nav
        aria-label="Primary navigation"
        className="bg-background/80 backdrop-blur border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent"
          >
            FA
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative inline-block text-muted transition-colors duration-300"
                >
                  <span className="group-hover:text-[rgb(var(--primary))] transition-colors duration-300">
                    {item.label}
                  </span>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[rgb(var(--primary))] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA + Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="#contact"
              className="rounded-xl px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="p-2 rounded-lg border border-border text-foreground hover:bg-white/10 transition"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Mobile Slide-In Menu ─── */}

      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-background border-l border-border shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button inside panel */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <span className="text-lg font-extrabold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
            FA
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-lg border border-border text-foreground hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <ul className="flex flex-col px-6 py-6 gap-1">
          {navItems.map((item, i) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-muted hover:text-foreground hover:bg-white/5 transition-all duration-200"
                style={{
                  animationDelay: `${i * 50}ms`,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA in mobile menu */}
        <div className="px-6 pt-4 border-t border-border">
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center rounded-xl px-5 py-3 bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}