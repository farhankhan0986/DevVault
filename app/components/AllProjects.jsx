"use client";

import Link from "next/link";
import { ExternalLink, Github, ArrowUpRight, Star, Folder, ArrowLeft } from "lucide-react";
import { useState } from "react";

const V = {
  cardBg: "rgba(17,17,17,0.85)",
  border: "rgba(255,255,255,0.08)",
  borderHover: "rgba(255,255,255,0.18)",
  tagBg: "rgba(255,255,255,0.05)",
  tagBorder: "rgba(255,255,255,0.09)",
};

const projects = [
  {
    id: 19,
    title: "Viblytics",
    description:
      "AI-powered YouTube competitor analytics SaaS — analyze any public channel's recent videos for top performance, engagement insights, and AI-driven summaries with shareable reports.",
    image: "/images/viblytics.png",
    tech: ["Next.js 15", "Groq AI (LLaMA 3.3)", "TypeScript", "Recharts", "YouTube Data API v3"],
    github: "https://github.com/farhankhan0986/Viblytics",
    status: "COMPLETED",
    highlight: "AI Insights & Engagement Analytics",
    href: "https://viblytics.vercel.app",
    slug: "viblytics",
  },
  {
    id: 3,
    title: "Sentinel Guard",
    description:
      "Full-stack website security monitoring platform — register your site, generate an API key, inspect request activity, apply rate limiting, detect suspicious traffic, and view real-time analytics.",
    image: "/images/sentinal.png",
    tech: ["Next.js", "MongoDB", "JWT Auth", "REST API", "Middleware", "Recharts"],
    github: "https://github.com/farhankhan0986/Sentinel-Guard",
    status: "COMPLETED",
    highlight: "Middleware-based traffic monitoring",
    href: "https://sentinel-guard-eb9e.vercel.app/",
    slug: "sentinel-guard",
  },
  {
    id: 8,
    title: "Culinaria",
    description:
      "An AI-powered recipe platform where users can discover, create, and manage recipes while collaborating with an intelligent AI Sous-Chef. Features AI recipe generation, favorites, ratings, shopping lists, and a full-stack MERN architecture.",
    image: "/images/culinaria.png",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB Atlas", "JWT Auth", "Groq AI"],
    github: "https://github.com/farhankhan0986/Culinaria",
    status: "COMPLETED",
    highlight: "AI-Powered Recipe Platform",
    href: "https://culinaria-wheat.vercel.app/",
    slug: "culinaria",
  },
  {
    id: 6,
    title: "PromptForge",
    description:
      "A full-stack AI-powered prompt generator and manager that transforms rough ideas into production-grade AI prompts, with a personal library featuring categorization, tagging, search, and an analytics dashboard.",
    image: "/images/promptforge.png",
    tech: ["React 19", "Vite 7", "Node.js", "Express 5", "PostgreSQL", "JWT Auth", "Groq API"],
    github: "https://github.com/farhankhan0986/promptforge",
    status: "COMPLETED",
    highlight: "AI Prompt Engineering & Analytics Dashboard",
    href: "https://promptforge-blush.vercel.app",
    slug: "promptforge",
  },
  {
    id: 2,
    title: "Planixa",
    description:
      "A full-stack task management webapp featuring secure authentication, profile management, and a modern tasks UI with search and filter.",
    image: "/images/planixa.png",
    tech: ["Next.js 16", "React", "MongoDB", "JWT Auth", "Framer Motion"],
    github: "https://github.com/farhankhan0986/Planixa",
    status: "COMPLETED",
    highlight: "Full-Stack Dashboard & Auth Flow",
    href: "https://planixa.vercel.app/",
    slug: "planixa",
  },
  {
    id: 7,
    title: "AI Expense Tracker",
    description:
      "A full-stack AI-powered expense management platform with automatic transaction categorization via Groq, spending analytics, and smart budgeting insights.",
    image: "/images/expense.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "Groq AI", "Recharts"],
    github: "https://github.com/farhankhan0986/AI-Expense-Tracker-",
    status: "COMPLETED",
    highlight: "AI-powered expense categorization & financial insights",
    href: "https://ai-expense-tracker-kappa-sooty.vercel.app/",
    slug: "aiExpenseTracker",
  },
  {
    id: 10,
    title: "IDVault",
    description:
      "A secure identity and data management system focused on controlled access, validation, and backend-first security principles.",
    image: "/images/idvault.png",
    tech: ["Node.js", "Express", "Next.js", "MongoDB", "JWT Auth"],
    github: "https://github.com/farhankhan0986/IDVault",
    status: "COMPLETED",
    highlight: "Security-First Design",
    href: "https://id-vault.vercel.app/",
    slug: "idvault",
  },
  {
    id: 1,
    title: "Chai Culture",
    description:
      "A premium 'Coming Soon' landing page for Chai Culture designed to reflect royal Indian heritage through a calm, elegant, and modern digital experience.",
    image: "/images/chai.png",
    tech: ["Next.js", "React", "Tailwind CSS", "UI/UX Design"],
    github: "https://github.com/farhankhan0986/ChaiCulture",
    status: "COMPLETED",
    highlight: "Luxury Brand UI & Product Thinking",
    href: "https://chai-culture-dun.vercel.app/",
    slug: "chai-culture",
  },
  {
    id: 9,
    title: "FlightStack",
    description:
      "A robust full-stack platform for managing flights, bookings, and real-time analytics. Features a modern frontend and scalable backend with secure APIs, authentication, and real-time data.",
    image: "/images/flightstack.png",
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "JWT Auth", "REST API"],
    github: "https://github.com/farhankhan0986/flightstack-frontend",
    status: "COMPLETED",
    highlight: "Full-stack platform with real-time analytics",
    href: "https://flightstack-frontend.vercel.app/",
    slug: "flightstack",
  },
  {
    id: 4,
    title: "Notes Server MERN",
    description:
      "A RESTful notes management backend built with the MERN stack supporting authentication, CRUD operations, and secure data storage.",
    image: "/images/notes.png",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT Auth"],
    github: "https://github.com/farhankhan0986/Notes_Server_MERN",
    status: "COMPLETED",
    highlight: "Full-featured CRUD API with authentication",
    href: "https://github.com/farhankhan0986/Notes_Server_MERN",
    slug: "notes_server_mern",
  },
  {
    id: 5,
    title: "News Equator",
    description:
      "A news aggregation web application that fetches the latest headlines from multiple sources and allows users to filter news categories using React.",
    image: "/images/news.png",
    tech: ["React", "API Integration", "Bootstrap"],
    github: "https://github.com/farhankhan0986/News_Equator_React",
    status: "COMPLETED",
    highlight: "Live news filtering",
    href: "https://fluffy-heliotrope-addc19.netlify.app/",
    slug: "news_equator_react",
  },
  {
    id: 12,
    title: "ToDo List",
    description:
      "A minimalistic task management application that helps users organize daily tasks with priorities and completion tracking.",
    image: "/images/todo.png",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/farhankhan0986/ToDo-List",
    status: "COMPLETED",
    highlight: "Simple and clean task management UI",
    href: "https://endearing-tapioca-1dd038.netlify.app/",
    slug: "todo_list",
  },
  {
    id: 14,
    title: "Text Utils",
    description:
      "A text utility toolkit providing features like word counting, case conversion, and whitespace cleanup through an interactive React interface.",
    image: "/images/textutils.png",
    tech: ["React", "JavaScript", "Bootstrap"],
    github: "https://github.com/farhankhan0986/Text-Utils-react",
    status: "COMPLETED",
    highlight: "Comprehensive text manipulation tools",
    href: "https://musical-clafoutis-734d23.netlify.app/",
    slug: "text_utils_react",
  },
];

const statusStyles = {
  COMPLETED: { bg: "rgba(34,197,94,0.9)", color: "#000" },
  ACTIVE: { bg: "rgba(59,130,246,0.9)", color: "#fff" },
  ONGOING: { bg: "rgba(234,179,8,0.9)", color: "#000" },
};

export default function AllProjects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative select-none py-10 bg-background text-foreground">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ background: "radial-gradient(800px circle at 50% 0%, rgba(255,255,255,0.025), transparent 55%)" }}
      />
      {/* Grid background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </a>
        <div className="mb-20">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5 tracking-widest uppercase"
            style={{ background: V.tagBg, border: `1px solid ${V.tagBorder}`, color: "rgb(var(--muted))" }}
          >
            <Folder className="h-3.5 w-3.5" />
            Complete Portfolio
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-5">
            All{" "}
            <span className="text-foreground opacity-30">Projects</span>
          </h1>
          <p className="max-w-2xl text-muted text-lg leading-relaxed mb-2">
            A comprehensive showcase of my full-stack development work — from AI integrations and backend systems to frontend UI and product thinking.
          </p>
          <div className="section-line mt-5" />
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-6 mb-16">
          {[
            { label: "Total Projects", value: projects.length },
            { label: "Completed", value: projects.filter(p => p.status === "COMPLETED").length },
            { label: "Active", value: projects.filter(p => p.status === "ACTIVE").length },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 px-5 py-3 rounded-xl"
              style={{ border: `1px solid ${V.border}`, background: V.tagBg }}
            >
              <span className="text-2xl font-extrabold text-foreground">{stat.value}</span>
              <span className="text-sm text-muted">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Masonry-style bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const statusStyle = statusStyles[project.status] || statusStyles.COMPLETED;
            const isHovered = hovered === project.id;

            return (
              <div
                key={project.id}
                className="h-full"
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="rounded-2xl overflow-hidden flex flex-col h-full"
                  style={{
                    border: `1px solid ${isHovered ? V.borderHover : V.border}`,
                    background: V.cardBg,
                    backdropFilter: "blur(12px)",
                    boxShadow: isHovered ? "0 12px 48px rgba(0,0,0,0.7)" : "none",
                    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ height: "200px" }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-500"
                      style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
                      loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(0deg, rgba(17,17,17,0.7) 0%, transparent 55%)" }}
                    />
                    {/* Number watermark */}
                    <div className="absolute bottom-3 right-4 text-5xl font-black opacity-[0.07] select-none text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    {/* Status badge */}
                    <span
                      className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold"
                      style={{ background: statusStyle.bg, color: statusStyle.color }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full animate-pulse"
                        style={{ background: statusStyle.color }}
                      />
                      {project.status}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1 gap-3">
                    {/* Highlight chip */}
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold w-fit"
                      style={{ background: V.tagBg, border: `1px solid ${V.tagBorder}`, color: "rgb(var(--muted))" }}
                    >
                      <Star className="h-3 w-3" />
                      {project.highlight}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground leading-tight">{project.title}</h3>

                    {/* Description */}
                    <p className="text-sm text-muted leading-relaxed line-clamp-3">{project.description}</p>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="rounded-md px-2 py-0.5 text-xs font-medium"
                          style={{ background: V.tagBg, border: `1px solid ${V.tagBorder}`, color: "rgb(var(--muted))" }}
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span
                          className="rounded-md px-2 py-0.5 text-xs font-medium"
                          style={{ background: V.tagBg, color: "rgb(var(--muted))" }}
                        >
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Divider */}
                    <div className="h-px" style={{ background: "rgba(255,255,255,0.06)" }} />

                    {/* Action buttons */}
                    <div className="flex gap-2 pt-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 hover:opacity-90"
                        style={{ background: "rgb(var(--foreground))", color: "rgb(var(--background))" }}
                      >
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </a>
                      {project.href && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
                          style={{ border: `1px solid ${V.borderHover}`, color: "rgb(var(--foreground))", background: "rgba(255,255,255,0.04)" }}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Demo
                        </a>
                      )}
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center justify-center px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
                        style={{ border: `1px solid ${V.border}`, color: "rgb(var(--muted))" }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="relative mt-20 rounded-2xl overflow-hidden p-10 text-center"
          style={{ border: `1px solid ${V.border}`, background: "rgba(255,255,255,0.02)" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = V.borderHover; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = V.border; }}
        >
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.8), transparent 60%)" }}
          />
          <div className="relative">
            <p className="text-lg font-semibold mb-2">That's not all.</p>
            <p className="text-muted mb-8 max-w-md mx-auto">
              Explore my GitHub for more experiments, open-source contributions, and side projects.
            </p>
            <a
              href="https://github.com/farhankhan0986"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
              style={{ background: "rgb(var(--foreground))", color: "rgb(var(--background))" }}
            >
              <Github className="w-4 h-4" />
              Explore on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
