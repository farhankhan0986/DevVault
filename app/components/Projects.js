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
      tech: ["React 19", "Vite", "Tailwind CSS", "Node.js", "Express 5", "PostgreSQL", "JWT", "Groq API"],
      github: "https://github.com/farhankhan0986/promptforge",
      status: "COMPLETED",
      highlight: "AI Prompt Engineering",
      href: "https://promptforge-blush.vercel.app",
      slug: "promptforge",
    },
    {
      id: 1,
      title: "HireSight-AI",
      description:
        "An intelligent hiring support platform focused on structured candidate evaluation and screening workflows with a scalable backend architecture.",
      image: "/images/hire.png",
      tech: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
      github: "https://github.com/farhankhan0986/HireSight-AI",
      status: "ONGOING",
      highlight: "Scalable Backend",
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
      highlight: "Security-First",
      href: "https://id-vault.vercel.app/",
      slug: "idvault",
    },
    {
      id: 3,
      title: "Sentinel Guard",
      description:
        "A multi-tenant API firewall and security platform with request interception, rate limiting, attack detection, logging, and an admin dashboard.",
      image: "/images/sentinal.png",
      tech: ["Next.js", "Node.js", "Middleware", "MongoDB", "JWT", "Security"],
      github: "https://github.com/farhankhan0986/Sentinel-Guard",
      status: "COMPLETED",
      highlight: "API Firewall",
      href: "https://sentinel-guard-eb9e.vercel.app/",
      slug: "sentinel-guard",
    },
  ];

  return (
    <section className="py-24 bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <p className="text-sm font-mono text-accent mb-4">Projects</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-balance">
          Selected work
        </h2>
        <p className="text-muted max-w-2xl mb-14">
          A collection of projects showcasing backend architecture, API design,
          and full-stack development.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-border-hover hover:bg-card-hover"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <span
                    className={`px-2.5 py-1 text-xs font-medium rounded-md ${
                      project.status === "ONGOING"
                        ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                        : "bg-accent-muted text-accent border border-accent/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-mono text-accent">{project.highlight}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-1">{project.title}</h3>
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-accent-muted transition-all"
                    aria-label={`Visit ${project.title} live`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-surface text-muted border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
                  >
                    Details
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/farhankhan0986"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-sm font-medium text-muted hover:text-foreground hover:border-border-hover transition-all"
          >
            <Github className="w-4 h-4" />
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
