"use client";

import Link from "next/link";
import { ExternalLink, Github, Folder, ArrowUpRight, Code2, Globe, Star } from "lucide-react";

const V = {
  cardBg: "rgba(17,17,17,0.8)",
  border: "rgba(255,255,255,0.08)",
  borderHover: "rgba(255,255,255,0.18)",
  tagBg: "rgba(255,255,255,0.05)",
  tagBorder: "rgba(255,255,255,0.09)",
};

const projects = [
  {
    id: 1,
    title: "HireSight-AI",
    description:
      "AI-powered recruitment platform that parses PDF resumes using Groq LLMs, extracts candidate skills & experience, and generates match scores against job postings to automate early-stage candidate screening.",
    image: "/images/hire.png",
    tech: ["Next.js 15", "Groq AI (Llama)", "MongoDB", "Node.js", "Tailwind CSS", "PDF Parsing", "JWT Auth"],
    github: "https://github.com/farhankhan0986/HireSight-AI",
    status: "COMPLETED",
    highlight: "AI Resume Parsing & Candidate Ranking Engine",
    href: "https://hire-sight-ai-sigma.vercel.app",
    slug: "hiresight",
    featured: true,
  },
  {
    id: 2,
    title: "Entry",
    description:
      "A full-stack editorial platform for writers, thinkers, and creators. Entry blends a premium minimalist blog CMS, journal features, and a suite of productivity toolsincluding a personality quiz, AI prompt optimizer, Pomodoro timer, salary benchmarking tool, and text converterfor a focused, beautiful writing and reading experience.",
    image: "images/entry.png",
    tech: [
      "Next.js 16 (App Router)",
      "React 19 & Compiler",
      "Tailwind CSS v4",
      "MongoDB Atlas + Mongoose",
      "Framer Motion 12",
      "NextAuth v5 (OAuth)",
      "Cloudinary",
      "Groq LLM SDK",
      "Resend",
      "Vercel"
    ],
    github: "https://github.com/farhankhan0986/Entry",
    status: "COMPLETED",
    highlight: "A calm, modern space for writing & ideas",
    href: "https://entry-azure.vercel.app",
    slug: "entry",
    featured: true
  },
  {
    id: 17,
    title: "Fact_Check_Agent",
    description:
      "Fact_Check_Agent is a tool for automated fact verification and information accuracy checking. It assists users in distinguishing factual content from misinformation or unsupported claims, likely using web APIs or LLMs in the backend.",
    image: "images/fact.png",
    tech: [
      "Next.js 16 (App Router)",
      "JavaScript (ES Modules)",
      "Tailwind CSS v4",
      "Groq API (LLaMA 3.3 70B Versatile)",
      "Tavily Search API",
      "unpdf (pdfjs-dist)",
      "Recharts",
      "Vercel Analytics",
      "Vercel"
    ],
    github: "https://github.com/farhankhan0986/Fact_Check_Agent",
    status: "COMPLETED",
    highlight: "Automated Fact Verification Assistant",
    href: "https://fact-check-agent.vercel.app/",
    slug: "fact_check_agent",
  },
  {
    id: 9,
    title: "RAG AI Chatbot",
    description:
      "Production-grade retrieval-augmented chatbot ask questions about your own data using semantic search, chunked embeddings, and verifiable Groq-powered AI answers with citations for every response.",
    image: "/images/rag.png",
    tech: ["Next.js 14+", "Groq AI (Llama 3 70B)", "Supabase pgvector", "OpenAI Embeddings", "Tailwind CSS"],
    github: "https://github.com/farhankhan0986/rag-ai-chatbot",
    status: "COMPLETED",
    highlight: "RAG · Cited Context · Semantic Search",
    href: "https://rag-ai-chatbot-piae.vercel.app/",
    slug: "ragAiChatbot",
  },

];

function FeaturedProject({ project }) {
  return (
    <div
      className="relative rounded-3xl overflow-hidden mb-16 transition-all duration-300"
      style={{
        border: `1px solid ${V.border}`,
        boxShadow: "0 0 80px rgba(0,0,0,0.8), 0 24px 80px rgba(0,0,0,0.5)",
        background: V.cardBg,
        backdropFilter: "blur(20px)",
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = V.borderHover; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = V.border; }}
    >
      {/* Top highlight line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }} />

      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative overflow-hidden" style={{ minHeight: "360px" }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-700"
            style={{ minHeight: "360px" }}
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, transparent 55%, rgba(17,17,17,0.95) 100%), linear-gradient(0deg, rgba(0,0,0,0.5) 0%, transparent 50%)",
            }}
          />
          <span
            className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold"
            style={{ background: "rgba(34,197,94,0.9)", color: "#000" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" />
            {project.status}
          </span>
          <div
            className="absolute bottom-5 left-5 text-7xl font-black opacity-[0.06] select-none text-white"
          >
            01
          </div>
        </div>

        {/* Content */}
        <div className="relative p-8 md:p-10 flex flex-col justify-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4 tracking-wide w-fit"
            style={{ background: V.tagBg, border: `1px solid ${V.tagBorder}`, color: "rgb(var(--muted))" }}
          >
            <Star className="h-3 w-3" />
            {project.highlight}
          </span>

          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-foreground">
            {project.title}
          </h3>

          <p className="text-muted leading-relaxed mb-6 text-base">{project.description}</p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold"
                style={{ background: V.tagBg, border: `1px solid ${V.tagBorder}`, color: "rgb(var(--muted))" }}
              >
                <Code2 className="h-3 w-3" />
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
              style={{ background: "rgb(var(--foreground))", color: "rgb(var(--background))" }}
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={{ border: `1px solid ${V.borderHover}`, color: "rgb(var(--foreground))", background: "rgba(255,255,255,0.04)" }}
            >
              <Globe className="w-4 h-4" />
              Live Demo
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={{ border: `1px solid ${V.border}`, color: "rgb(var(--muted))" }}
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const num = String(index + 2).padStart(2, "0");
  return (
    <div
      className="group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{ border: `1px solid ${V.border}`, background: V.cardBg, backdropFilter: "blur(12px)" }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = V.borderHover; e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.6)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = V.border; e.currentTarget.style.boxShadow = "none"; }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "220px" }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
        <div className="absolute bottom-3 right-4 text-5xl font-black opacity-[0.08] select-none text-white">
          {num}
        </div>
        <span
          className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold"
          style={{ background: "rgba(34,197,94,0.85)", color: "#000" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" />
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div className="relative flex flex-col flex-1 p-6">
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold mb-3 w-fit"
          style={{ background: V.tagBg, border: `1px solid ${V.tagBorder}`, color: "rgb(var(--muted))" }}
        >
          <Star className="h-3 w-3" />
          {project.highlight}
        </span>

        <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>

        <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-4 flex-1">{project.description}</p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="rounded-md px-2 py-0.5 text-xs font-medium"
              style={{ background: V.tagBg, border: `1px solid ${V.tagBorder}`, color: "rgb(var(--muted))" }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="rounded-md px-2 py-0.5 text-xs font-medium" style={{ background: V.tagBg, color: "rgb(var(--muted))" }}>
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            style={{ background: "rgb(var(--foreground))", color: "rgb(var(--background))" }}
          >
            <Github className="w-3.5 h-3.5" />
            Code
          </a>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{ border: `1px solid ${V.borderHover}`, color: "rgb(var(--foreground))", background: "rgba(255,255,255,0.04)" }}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Demo
          </a>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{ border: `1px solid ${V.border}`, color: "rgb(var(--muted))" }}
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section className="relative select-none py-28 bg-background text-foreground">
      {/* Ambient top glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ background: "radial-gradient(800px circle at 50% 0%, rgba(255,255,255,0.025), transparent 55%)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4 tracking-widest uppercase"
            style={{ background: V.tagBg, border: `1px solid ${V.tagBorder}`, color: "rgb(var(--muted))" }}
          >
            <Folder className="h-3.5 w-3.5" />
            Portfolio
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Featured{" "}
            <span className="text-foreground opacity-40">Projects</span>
          </h2>
          <p className="max-w-2xl text-muted text-lg leading-relaxed">
            A selection of projects showcasing AI integration, backend architecture, API design, and full-stack development.
          </p>
          <div className="section-line mt-4" />
        </div>

        <FeaturedProject project={featured} />

        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted">More Projects</span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div
          className="relative rounded-2xl overflow-hidden p-10 text-center"
          style={{ border: `1px solid ${V.border}`, background: "rgba(255,255,255,0.02)" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = V.borderHover; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = V.border; }}
        >
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.8), transparent 60%)" }} />
          <div className="relative">
            <p className="text-lg font-semibold mb-2">Want to see more?</p>
            <p className="text-muted mb-8 max-w-md mx-auto">
              Explore my GitHub profile or browse all my projects and experiments.
            </p>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              <a
                href="https://github.com/farhankhan0986"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
                style={{ background: "rgb(var(--foreground))", color: "rgb(var(--background))" }}
              >
                <Github className="w-4 h-4" />
                Explore GitHub
              </a>
              <a
                href="/projects/allprojects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
                style={{ border: `1px solid ${V.borderHover}`, color: "rgb(var(--foreground))", background: "rgba(255,255,255,0.04)" }}
              >
                <Folder className="w-4 h-4" />
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
