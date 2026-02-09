"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  if (pathname.startsWith("/projects/")) {
    return null;
  }
  return (
    <header className="sticky top-0 z-50 -mt-[75px]">
      <nav
        aria-label="Primary navigation"
        className="bg-background/80 backdrop-blur border-b border-white/10"
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
              { href: "#education", label: "Education" },
              { href: "#projects", label: "Projects" },
              { href: "#skills", label: "Skills" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative text-gray-400 hover:text-indigo-500 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="#contact"
            className="rounded-xl px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition"
          >
            Get in Touch
          </Link>
        </div>
      </nav>
    </header>
  );
}
