"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../components/theme-toggle";

export default function Header() {
  const pathname = usePathname();
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

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#experience", label: "Experience" },
              { href: "#projects", label: "Projects" },
              { href: "#skills", label: "Skills" },
              { href: "#education", label: "Education" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative inline-block text-muted transition-colors duration-300"
                >
                  {/* Text */}
                  <span className="group-hover:text-[rgb(var(--primary))] transition-colors duration-300">
                    {item.label}
                  </span>

                  {/* Animated underline */}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[rgb(var(--primary))] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <ThemeToggle />
            </div>
            <Link
              href="#contact"
              className="rounded-xl px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
