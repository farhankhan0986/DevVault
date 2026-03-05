"use client";

import Link from "next/link";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 6,
      title: "PromptForge",
      description:
        "A full-stack AI-powered prompt generator and manager that transforms rough ideas into production-grade AI prompts, with a personal library featuring categorization, tagging, search, and an analytics dashboard.",
      image: "/images/promptforge.png",
      tech: [
        "React 19",
        "Vite 7",
        "Tailwind CSS 3",
        "Node.js",
        "Express 5",
        "PostgreSQL",
        "JWT Authentication",
        "Groq API (LLaMA 3.3)",
      ],
      github: "https://github.com/farhankhan0986/promptforge",
      status: "COMPLETED",
      highlight: "AI Prompt Engineering & Analytics Dashboard",
      href: "https://promptforge-blush.vercel.app",
      slug: "promptforge",
    },
    {
      id: 1,
      title: "HireSight-AI",
      description:
        "An intelligent hiring support platform focused on structured candidate evaluation and screening workflows. Designed to streamline hiring decisions with a scalable backend architecture and clean data flow.",
      image: "/images/hire.png",
      tech: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
      github: "https://github.com/farhankhan0986/HireSight-AI",
      status: "ONGOING",
      highlight: "Scalable Backend Architecture",
      href: "https://hire-sight-ai-sigma.vercel.app",
      slug: "hiresight",
    },
    {
      id: 2,
      title: "IDVault",
      description:
        "A secure identity and data management system focused on controlled access, validation, and backend-first security principles.",
      image: "/images/idvault.png",
      tech: ["Node.js", "Express", "Next.js", "MongoDB", "Auth"],
      github: "https://github.com/farhankhan0986/IDVault",
      status: "COMPLETED",
      highlight: "Security-First Design",
      href: "https://id-vault.vercel.app/",
      slug: "idvault",
    },
    {
      id: 3,
      title: "Sentinel Guard",
      description:
        "A multi-tenant API firewall and security platform built with Next.js middleware. Provides request interception, rate limiting, attack detection, logging, and an admin dashboard for real-time security insights.",
      image: "/images/sentinal.png",
      tech: [
        "Next.js",
        "Node.js",
        "Middleware",
        "MongoDB",
        "JWT",
        "Security Engineering",
      ],
      github: "https://github.com/farhankhan0986/Sentinel-Guard",
      status: "COMPLETED",
      highlight: "Real-world API Firewall & Security Platform",
      href: "https://sentinel-guard-eb9e.vercel.app/",
      slug: "sentinel-guard",
    },
    // {
    //   id: 4,
    //   title: "Chai Culture",
    //   description:
    //     "A premium 'Coming Soon' landing page for Chai Culture, designed to reflect royal Indian heritage through a calm, elegant, and modern digital experience.",
    //   image: "/images/chai.png",
    //   tech: ["Next.js", "React", "Tailwind CSS", "UI/UX Design"],
    //   github: "https://github.com/farhankhan0986/ChaiCulture",
    //   status: "COMPLETED",
    //   highlight: "Luxury Brand UI & Product Thinking",
    //   href: "https://chai-culture-dun.vercel.app/",
    //   slug: "chai-culture",
    // },
    // {
    //   id: 5,
    //   title: "Planixa",
    //   description:
    //     "A full-stack task management webapp built as part of the Anything.ai Full Stack Intern assignment, featuring secure authentication, profile management, and a modern tasks UI with search and filter.",
    //   image: "/images/planixa.png",
    //   tech: [
    //     "Next.js 16",
    //     "React",
    //     "Tailwind CSS",
    //     "MongoDB",
    //     "JWT Authentication",
    //     "Framer Motion",
    //   ],
    //   github: "https://github.com/farhankhan0986/Planixa",
    //   status: "COMPLETED",
    //   highlight: "Full-Stack Dashboard & Auth Flow",
    //   href: "https://planixa.vercel.app/",
    //   slug: "planixa",
    // },
  ];

  return (
    <section className="relative select-none py-28 bg-background text-foreground">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(99,102,241,0.12),transparent_45%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(400px_circle_at_80%_70%,rgba(139,92,246,0.08),transparent_50%)]"
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted text-lg">
            A selection of projects showcasing backend architecture, API design,
            and full-stack development.
          </p>
          <div className="section-line mx-auto mt-4" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative flex flex-col rounded-2xl border border-[rgba(var(--border),0.5)] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(99,102,241,0.15)] hover:border-indigo-500/40"
              style={{
                background: "rgba(var(--card), 0.6)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              {/* Featured Ribbon — first project only */}
              {index === 0 && (
                <div className="absolute top-5 -left-8 z-20 rotate-[-45deg] bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] px-10 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                  Featured
                </div>
              )}

              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Hover overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--background))] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Status Badge */}
                <span
                  className={`absolute top-4 right-4 z-10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md ${
                    project.status === "ONGOING"
                      ? "bg-amber-400/90 text-amber-950"
                      : "bg-emerald-400/90 text-emerald-950"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6 gap-4">
                {/* Highlight Badge */}
                <span className="inline-flex self-start text-[11px] font-medium px-3 py-1 rounded-full border border-[rgb(var(--primary))]/30 text-[rgb(var(--primary))] bg-[rgb(var(--primary))]/5">
                  {project.highlight}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold tracking-tight leading-tight">
                  {project.title}
                </h3>

                {/* Description — clamped to 3 lines */}
                <p className="text-muted text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-0.5 rounded-full border border-[rgba(var(--border),0.6)] text-muted bg-[rgba(var(--card),0.5)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[rgba(var(--border),0.4)]">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[rgb(var(--primary))]/10 text-[rgb(var(--primary))] text-xs font-semibold border border-[rgb(var(--primary))]/20 hover:bg-[rgb(var(--primary))]/20 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    View Code
                  </a>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border border-[rgba(var(--border),0.6)] hover:bg-[rgba(var(--border),0.3)] transition-colors"
                  >
                    Details
                  </Link>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold ml-auto bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-white shadow-sm hover:brightness-110 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--primary))]/50 transition-all"
                  >
                    Live Demo
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 pt-16 border-t border-[rgba(var(--border),0.3)] text-center">
          <p className="text-muted mb-8 text-lg max-w-lg mx-auto">
            Want to see more? Explore my GitHub for additional projects and
            experiments.
          </p>

          <a
            href="https://github.com/farhankhan0986"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-white font-semibold text-base shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            Explore on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
