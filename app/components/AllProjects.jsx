"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

export default function AllProjects() {
  const projects = [
    // {
    //   id: 6,
    //   title: "PromptForge",
    //   description:
    //     "A full-stack AI-powered prompt generator and manager that transforms rough ideas into production-grade AI prompts, with a personal library featuring categorization, tagging, search, and an analytics dashboard.",
    //   image: "/images/promptforge.png",
    //   tech: [
    //     "React 19",
    //     "Vite 7",
    //     "Tailwind CSS 3",
    //     "Node.js",
    //     "Express 5",
    //     "PostgreSQL",
    //     "JWT Authentication",
    //     "Groq API (LLaMA 3.3)",
    //   ],
    //   github: "https://github.com/farhankhan0986/promptforge",
    //   status: "COMPLETED",
    //   highlight: "AI Prompt Engineering & Analytics Dashboard",
    //   href: "https://promptforge-blush.vercel.app",
    //   slug: "promptforge",
    // },
    // {
    //   id: 1,
    //   title: "HireSight-AI",
    //   description:
    //     "An intelligent hiring support platform focused on structured candidate evaluation and screening workflows. Designed to streamline hiring decisions with a scalable backend architecture and clean data flow.",
    //   image: "/images/hire.png",
    //   tech: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    //   github: "https://github.com/farhankhan0986/HireSight-AI",
    //   status: "ONGOING",
    //   highlight: "Scalable Backend Architecture",
    //   href: "https://hire-sight-ai-sigma.vercel.app",
    //   slug: "hiresight",
    // },
    // {
    //   id: 2,
    //   title: "IDVault",
    //   description:
    //     "A secure identity and data management system focused on controlled access, validation, and backend-first security principles.",
    //   image: "/images/idvault.png",
    //   tech: ["Node.js", "Express", "Next.js", "MongoDB", "Auth"],
    //   github: "https://github.com/farhankhan0986/IDVault",
    //   status: "COMPLETED",
    //   highlight: "Security-First Design",
    //   href: "https://id-vault.vercel.app/",
    //   slug: "idvault",
    // },
    // {
    //   id: 3,
    //   title: "Sentinel Guard",
    //   description:
    //     "A multi-tenant API firewall and security platform built with Next.js middleware. Provides request interception, rate limiting, attack detection, logging, and an admin dashboard for real-time security insights.",
    //   image: "/images/sentinal.png",
    //   tech: [
    //     "Next.js",
    //     "Node.js",
    //     "Middleware",
    //     "MongoDB",
    //     "JWT",
    //     "Security Engineering",
    //   ],
    //   github: "https://github.com/farhankhan0986/Sentinel-Guard",
    //   status: "COMPLETED",
    //   highlight: "Real-world API Firewall & Security Platform",
    //   href: "https://sentinel-guard-eb9e.vercel.app/",
    //   slug: "sentinel-guard",
    // },
    
    {
      id: 7,
      title: "AI Expense Tracker",
      description: "A full-stack AI-powered expense management platform that helps users track daily spending, automatically categorize transactions using Groq-powered AI, analyze spending patterns through interactive analytics dashboards, and receive smart budgeting insights to improve financial habits.",
      image: "/images/expense.png",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JavaScript",
        "Tailwind CSS",
        "Groq AI",
        "REST API",
        "JWT Authentication"
      ],
      github: "https://github.com/farhankhan0986/AI-Expense-Tracker-",
      status: "COMPLETED",
      highlight: "Groq AI-powered automatic expense categorization and financial insights",
      href: "https://ai-expense-tracker-kappa-sooty.vercel.app/",
      slug: "aiExpenseTracker",
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
      id: 1,
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
      id: 4,
      title: "Notes Server MERN",
      description:
        "A RESTful notes management backend built with the MERN stack, supporting authentication, CRUD operations, and secure storage.",
      image: "/images/notes.png",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT Auth"],
      github: "https://github.com/farhankhan0986/Notes_Server_MERN",
      status: "COMPLETED",
      highlight: "Full-featured CRUD API with auth",
      href: "",
      slug: "notes-server-mern",
    },
    {
      id: 5,
      title: "News Equator",
      description:
        "A news aggregation web app fetching latest headlines from multiple sources, categorized and filterable using React.",
      image: "/images/news.png",
      tech: ["React", "API Integration", "Bootstrap"],
      github: "https://github.com/farhankhan0986/News_Equator_React",
      status: "COMPLETED",
      highlight: "Live news filtering",
      href: "https://fluffy-heliotrope-addc19.netlify.app/",
      slug: "news-equator-react",
    },
    {
      id: 6,
      title: "ToDo-List",
      description:
        "A minimalistic and intuitive task management application to help users track daily activities with priorities and completion status.",
      image: "/images/todo.png",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/farhankhan0986/ToDo-List",
      status: "COMPLETED",
      highlight: "Simple and clean UI",
      href: "https://endearing-tapioca-1dd038.netlify.app/",
      slug: "todo-list",
    },
    {
      id: 8,
      title: "Text Utils",
      description:
        "A text utility toolkit providing features like word counting, case conversion, and whitespace cleanup in an interactive React UI.",
      image: "/images/textutils.png",
      tech: ["React", "JavaScript", "Bootstrap"],
      github: "https://github.com/farhankhan0986/Text-Utils-react",
      status: "COMPLETED",
      highlight: "Comprehensive text manipulation tools",
      href: "https://musical-clafoutis-734d23.netlify.app/",
      slug: "text-utils-react",
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
            All{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="max-w-2xl text-muted text-lg">
            A comprehensive showcase of my full-stack development projects,
            demonstrating a range of skills from backend architecture and API
            design to frontend UI/UX and product thinking.
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
                className={`group relative rounded-2xl duration-500 active:-translate-z-2 active:scale-105 active:duration-500 active:transition-transform overflow-hidden border border-border bg-card ${index % 2 === 1 ? "lg:order-" : ""
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
                  className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full ${project.status === "ONGOING"
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
        <div className="mt-24 pt-16 border-t  border-white/10 text-center">
          <p className="text-muted mb-6 text-lg">
            Want to see more? Explore my GitHub for additional projects and
            experiments.
          </p>
          <div className="flex justify-center items-center gap-2">
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
      </div>
    </section>
  );
}
