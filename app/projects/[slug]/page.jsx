import { ArrowLeft } from "lucide-react";

export default async function ProjectDetail({ params }) {
  const { slug } = await params;

  const projects = {
    hiresight: {
      title: "HireSight",
      role: "Backend-focused Full-Stack Developer",
      description: "HireSight is an intelligent hiring support platform designed to streamline structured candidate evaluation and screening workflows.",
      problem: "Hiring pipelines often lack consistency and scalable evaluation mechanisms.",
      solution: "Designed a backend-first system with modular APIs, role-based access, and clean data flow.",
      tech: ["Node.js", "Express", "MongoDB", "REST APIs", "JWT Authentication"],
      architecture: ["Modular backend architecture", "RBAC-based authorization", "Secure REST endpoints", "Scalable MongoDB schemas"],
      learnings: ["Backend system scalability", "Secure API design", "Production-grade data modeling"],
      github: "https://github.com/farhankhan0986/HireSight-AI",
    },
    idvault: {
      title: "IDVault",
      role: "Backend & Security Engineer",
      description: "IDVault is a secure identity and data management system focused on controlled access, validation, and backend-first security principles.",
      problem: "Sensitive user data often lacks proper access control and validation layers.",
      solution: "Built a security-centric backend with authentication, authorization, and strict data validation.",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "API Security"],
      architecture: ["Authentication & authorization middleware", "Secure data access layers", "Input validation & sanitization", "Role-based permissions"],
      learnings: ["Designing security-first systems", "Handling sensitive data safely", "Building robust auth flows"],
      github: "https://github.com/farhankhan0986/IDVault",
    },
    "chai-culture": {
      title: "Chai Culture",
      role: "Frontend Engineer & UI Designer",
      description: "Chai Culture is a premium tea brand inspired by the royal traditions of Indian chai, reimagined for a modern global audience.",
      problem: "Early-stage heritage brands often struggle to create a strong digital first impression that feels premium and authentic.",
      solution: "Designed and built a calm, minimal Coming Soon landing page balancing Indian heritage with modern luxury.",
      tech: ["Next.js (App Router)", "React", "Tailwind CSS", "Responsive Design", "UI/UX Design"],
      architecture: ["Single-page landing architecture", "Component-based UI structure", "Client-side email validation", "API route abstraction"],
      learnings: ["Designing for luxury brands", "Balancing visual restraint with brand identity", "Building production-ready landing pages"],
      github: "https://github.com/farhankhan0986/ChaiCulture",
    },
    promptforge: {
      title: "PromptForge",
      role: "Full Stack Developer",
      description: "PromptForge is a full-stack AI-powered prompt generator and manager that transforms rough ideas into production-grade AI prompts.",
      problem: "Writing effective AI prompts is a skill many users struggle with, and there is no centralized way to save and organize prompt libraries.",
      solution: "Built a full-stack application leveraging the Groq API (LLaMA 3.3 70B) to transform rough ideas into meticulously crafted prompts with a personal library.",
      tech: ["React 19", "Vite 7", "Tailwind CSS 3", "Node.js", "Express 5", "PostgreSQL", "JWT Authentication", "Groq API"],
      architecture: ["Decoupled frontend and backend architecture", "PostgreSQL relational database", "JWT-based authentication with bcrypt", "RESTful API design", "Client-side routing with React Router 7"],
      learnings: ["Integrating third-party AI APIs for content generation", "Designing relational data models in PostgreSQL", "Building secure authentication with JWT and bcrypt", "Creating data visualization dashboards"],
      github: "https://github.com/farhankhan0986/promptforge",
    },
    "sentinel-guard": {
      title: "Sentinel Guard",
      role: "Backend & Security Engineer",
      description: "Sentinel Guard is a multi-tenant API firewall and security platform that protects backend services by intercepting requests at the middleware layer.",
      problem: "Modern APIs are exposed to abuse such as brute-force attacks, excessive traffic, and unauthorized access.",
      solution: "Built a middleware-first security layer that sits in front of APIs, evaluates each request using firewall rules, and logs all activity.",
      tech: ["Next.js (App Router)", "Node.js", "MongoDB", "JWT Authentication", "Middleware Architecture"],
      architecture: ["Global request interception using middleware", "Per-site API key identification (multi-tenant)", "Rule engine for blocking methods, routes, and IPs", "Rate limiting and automated threat scoring", "Admin dashboard for monitoring"],
      learnings: ["Designing middleware-based security systems", "API gateway and firewall design principles", "Multi-tenant SaaS architecture", "Building observable systems with analytics"],
      github: "https://github.com/farhankhan0986/Sentinel-Guard",
    },
    planixa: {
      title: "Planixa",
      role: "Full Stack Developer Intern",
      description: "Planixa is a full-stack task management application built as part of the Anything.ai Full Stack Intern assignment.",
      problem: "Many early-stage applications struggle with fragmented authentication flows and poor task management UX.",
      solution: "Designed and built a modern dashboard-driven application with JWT-based authentication, protected routes, and full CRUD task functionality.",
      tech: ["Next.js 16", "React", "Tailwind CSS", "MongoDB", "Mongoose", "JWT Authentication", "Framer Motion"],
      architecture: ["Single monorepo frontend and backend", "JWT authentication using HTTP-only cookies", "Protected routes for dashboard and tasks", "REST-style APIs with versioning"],
      learnings: ["Implementing secure authentication with JWT cookies", "Building scalable frontend-backend integrations", "Designing clean task dashboards"],
      github: "https://github.com/farhankhan0986/Planixa",
    },
  };

  const project = projects[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-lg text-muted">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back */}
        <a
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </a>

        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-3">
            {project.title}
          </h1>
          <p className="text-lg text-accent font-medium mb-4">{project.role}</p>
          <p className="text-muted leading-relaxed max-w-2xl">{project.description}</p>
        </div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-4 mb-14">
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-sm font-mono text-red-400 mb-3">The Problem</p>
            <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-sm font-mono text-accent mb-3">The Solution</p>
            <p className="text-sm text-muted leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-14">
          <p className="text-sm font-mono text-accent mb-4">Technology Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-sm rounded-lg border border-border bg-card text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <div className="mb-14">
          <p className="text-sm font-mono text-accent mb-4">Architecture & Design</p>
          <div className="grid md:grid-cols-2 gap-3">
            {project.architecture.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <span className="text-accent mt-0.5 shrink-0">--</span>
                <p className="text-sm text-muted leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learnings */}
        <div className="mb-14">
          <p className="text-sm font-mono text-accent mb-4">Key Learnings</p>
          <div className="space-y-3">
            {project.learnings.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <p className="text-sm text-muted leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-8 border-t border-border">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-border text-sm font-medium text-muted hover:text-foreground hover:border-border-hover transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View Code on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
