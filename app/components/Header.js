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
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position for shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section with IntersectionObserver
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        // Activate when section is roughly centered in the viewport
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  // Close mobile menu on route change
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
        className={`bg-[rgba(var(--background),0.8)] backdrop-blur-xl transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-black/[0.08]" : "shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="relative text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-indigo-500 to-violet-500 bg-clip-text text-transparent"
          >
            FA
            <span className="absolute -top-0.5 -right-2 h-1.5 w-1.5 rounded-full bg-violet-400" aria-hidden="true" />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
            {navItems.map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative px-3 py-2 rounded-lg transition-colors duration-300 ${
                      isActive
                        ? "text-[rgb(var(--foreground))]"
                        : "text-muted hover:text-[rgb(var(--foreground))]"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-1 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-300 ${
                        isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA + Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="#contact"
              className="rounded-xl px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold hover:from-indigo-500 hover:to-violet-500 shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
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
              className="p-2 rounded-lg border border-[rgb(var(--border))] text-[rgb(var(--foreground))] hover:bg-[rgba(var(--foreground),0.05)] transition-colors duration-200"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Gradient bottom border */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgb(var(--border))] to-transparent" />
      </nav>

      {/* ─── Mobile Slide-In Menu ─── */}

      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-in-out md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-[rgb(var(--background))] border-l border-[rgb(var(--border))] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgb(var(--border))]">
          <span className="relative text-lg font-extrabold bg-gradient-to-r from-indigo-400 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
            FA
            <span className="absolute -top-0.5 -right-2 h-1.5 w-1.5 rounded-full bg-violet-400" aria-hidden="true" />
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-lg border border-[rgb(var(--border))] text-[rgb(var(--foreground))] hover:bg-[rgba(var(--foreground),0.05)] transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <ul className="flex flex-col px-4 py-6 gap-1">
          {navItems.map((item, i) => {
            const sectionId = item.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <li
                key={item.href}
                className={`transition-all duration-500 ease-out ${
                  mobileOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: mobileOpen ? `${i * 60 + 100}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[rgb(var(--foreground))] bg-[rgba(var(--primary),0.08)]"
                      : "text-muted hover:text-[rgb(var(--foreground))] hover:bg-[rgba(var(--foreground),0.04)]"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-500 to-violet-500 scale-125"
                        : "bg-[rgb(var(--border))]"
                    }`}
                  />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA in mobile menu */}
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="pt-4 border-t border-[rgb(var(--border))]">
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center rounded-xl px-5 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold hover:from-indigo-500 hover:to-violet-500 shadow-md shadow-indigo-500/25 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}