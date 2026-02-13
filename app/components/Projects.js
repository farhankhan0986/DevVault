"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
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
    {
      id: 4,
      title: "Chai Culture",
      description:
        "A premium 'Coming Soon' landing page for Chai Culture, designed to reflect royal Indian heritage through a calm, elegant, and modern digital experience.",
      image: "/images/chai.png",
      tech: ["Next.js", "React", "Tailwind CSS", "UI/UX Design"],
      github: "https://github.com/farhankhan0986/ChaiCulture",
      status: "COMPLETED",
      highlight: "Luxury Brand UI & Product Thinking",
      href: "https://chai-culture-dun.vercel.app/",
      slug: "chai-culture",
    },
    {
      id: 5,
      title: "Planixa",
      description:
        "A full-stack task management webapp built as part of the Anything.ai Full Stack Intern assignment, featuring secure authentication, profile management, and a modern tasks UI with search and filter.",
      image: "/images/planixa.png",
      tech: [
        "Next.js 16",
        "React",
        "Tailwind CSS",
        "MongoDB",
        "JWT Authentication",
        "Framer Motion",
      ],
      github: "https://github.com/farhankhan0986/Planixa",
      status: "COMPLETED",
      highlight: "Full-Stack Dashboard & Auth Flow",
      href: "https://planixa.vercel.app/",
      slug: "planixa",
    },
  ];

  return (
    <section className="relative select-none py-28 bg-background text-foreground">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(99,102,241,0.12),transparent_45%)]"
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="max-w-2xl text-muted text-lg">
            A selection of projects showcasing backend architecture, API design,
            and full-stack development.
          </p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full" />
        </div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div
                className={`group relative rounded-2xl duration-500 active:-translate-z-2 active:scale-105 active:duration-500 active:transition-transform overflow-hidden border border-border bg-card ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                <span
                  className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full ${
                    project.status === "ONGOING"
                      ? "bg-cyan-400 text-black"
                      : "bg-emerald-400 text-black"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <span className="inline-block text-xs bg-white/5 border border-indigo-600 px-3 py-1 rounded-full text-indigo-500 font-medium">
                  {project.highlight}
                </span>

                <h3 className="text-3xl font-bold">{project.title}</h3>

                <p className="text-muted leading-relaxed">
                  {project.description}
                </p>

                {/* Tech */}
                <div>
                  <p className="text-sm font-semibold mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-indigo-500 px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:bg-[rgb(var(--border))] transition"
                  >
                    View Details
                  </Link>

                  
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm hover:bg-[rgb(var(--border))] transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 pt-16 border-t border-white/10 text-center">
          <p className="text-muted mb-6 text-lg">
            Want to see more? Explore my GitHub for additional projects and
            experiments.
          </p>

          <a
            href="https://github.com/farhankhan0986"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition"
          >
            <Github className="w-4 h-4" />
            Explore on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
