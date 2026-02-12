export default async function ProjectDetail({ params }) {
  const { slug } = await params;

  const projects = {
    hiresight: {
      title: "HireSight",
      role: "Backend-focused Full-Stack Developer",
      description:
        "HireSight is an intelligent hiring support platform designed to streamline structured candidate evaluation and screening workflows.",
      problem:
        "Hiring pipelines often lack consistency and scalable evaluation mechanisms.",
      solution:
        "Designed a backend-first system with modular APIs, role-based access, and clean data flow.",
      tech: [
        "Node.js",
        "Express",
        "MongoDB",
        "REST APIs",
        "JWT Authentication",
      ],
      architecture: [
        "Modular backend architecture",
        "RBAC-based authorization",
        "Secure REST endpoints",
        "Scalable MongoDB schemas",
      ],
      learnings: [
        "Backend system scalability",
        "Secure API design",
        "Production-grade data modeling",
      ],
      github: "https://github.com/farhankhan0986/HireSight-AI",
    },
    idvault: {
      title: "IDVault",
      role: "Backend & Security Engineer",
      description:
        "IDVault is a secure identity and data management system focused on controlled access, validation, and backend-first security principles.",
      problem:
        "Sensitive user data often lacks proper access control and validation layers.",
      solution:
        "Built a security-centric backend with authentication, authorization, and strict data validation.",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "API Security"],
      architecture: [
        "Authentication & authorization middleware",
        "Secure data access layers",
        "Input validation & sanitization",
        "Role-based permissions",
      ],
      learnings: [
        "Designing security-first systems",
        "Handling sensitive data safely",
        "Building robust auth flows",
      ],
      github: "https://github.com/farhankhan0986/IDVault",
    },
    "chai-culture": {
      title: "Chai Culture",
      role: "Frontend Engineer & UI Designer",
      description:
        "Chai Culture is a premium tea brand inspired by the royal traditions of Indian chai, reimagined for a modern global audience.",
      problem:
        "Early-stage heritage brands often struggle to create a strong digital first impression that feels premium, authentic, and culturally grounded.",
      solution:
        "Designed and built a calm, minimal 'Coming Soon' landing page that balances Indian heritage with modern luxury, focusing on clarity, restraint, and user trust.",
      tech: [
        "Next.js (App Router)",
        "React",
        "Tailwind CSS",
        "Responsive Design",
        "UI/UX Design",
      ],
      architecture: [
        "Single-page landing architecture",
        "Component-based UI structure",
        "Client-side email validation & submission flow",
        "API route abstraction for waitlist handling",
      ],
      learnings: [
        "Designing for luxury and heritage brands",
        "Balancing visual restraint with brand identity",
        "Building production-ready landing pages",
        "Thinking from a founder and product perspective",
      ],
      github: "https://github.com/farhankhan0986/ChaiCulture",
    },

    "sentinel-guard": {
      title: "Sentinel Guard",
      role: "Backend & Security Engineer",
      description:
        "Sentinel Guard is a multi-tenant API firewall and security platform that protects backend services by intercepting requests at the middleware layer and enforcing security policies in real time.",
      problem:
        "Modern APIs are exposed to abuse such as brute-force attacks, excessive traffic, unauthorized access, and lack of visibility into request behavior.",
      solution:
        "Built a middleware-first security layer that sits in front of APIs, evaluates each request using firewall rules, rate limits traffic, detects malicious behavior, and logs all activity for analysis through an admin dashboard.",
      tech: [
        "Next.js (App Router)",
        "Node.js",
        "MongoDB",
        "JWT Authentication",
        "Middleware Architecture",
        "Security Patterns",
      ],
      architecture: [
        "Global request interception using Next.js middleware",
        "Per-site API key identification (multi-tenant design)",
        "Rule engine for blocking methods, routes, and IPs",
        "Rate limiting and automated threat scoring",
        "Centralized request logging and analytics pipeline",
        "Admin dashboard for monitoring traffic and threats",
      ],
      features: [
        "Multi-site onboarding with API keys",
        "Firewall rules (block methods, paths, IPs)",
        "Rate limiting per IP and per site",
        "Attack detection with auto-blocking",
        "Detailed request logs and security analytics",
        "JWT-based admin authentication",
      ],
      learnings: [
        "Designing middleware-based security systems",
        "API gateway and firewall design principles",
        "Multi-tenant SaaS architecture",
        "Security-focused backend engineering",
        "Building observable systems with logs and analytics",
      ],
      github: "https://github.com/farhankhan0986/Sentinel-Guard",
    },
    planixa: {
      title: "Planixa",
      role: "Full Stack Developer Intern (Full-Stack Assignment)",
      description:
        "Planixa is a full-stack task management application built as part of the Anything.ai Full Stack Intern assignment, focusing on clean UI, secure authentication, and seamless frontend–backend integration.",
      problem:
        "Many early-stage applications struggle with fragmented authentication flows, unprotected routes, and poor task management UX, leading to security risks and low usability.",
      solution:
        "Designed and built a modern dashboard-driven application using Next.js App Router, implementing JWT-based authentication, protected routes, profile management, and full CRUD task functionality with search and filter support.",
      tech: [
        "Next.js 16 (App Router)",
        "React",
        "Tailwind CSS",
        "MongoDB",
        "Mongoose",
        "JWT Authentication",
        "Framer Motion",
      ],
      architecture: [
        "Single monorepo containing frontend and backend",
        "JWT authentication using HTTP-only cookies",
        "Protected routes for dashboard, tasks, and profile",
        "REST-style APIs with versioning (/api/v1)",
        "Client-side search and filter for fast task discovery",
        "Component-driven frontend with reusable UI patterns",
      ],
      features: [
        "User signup, login, and logout",
        "Profile fetch and update (GET / PUT)",
        "Task CRUD (create, list, read, update, delete)",
        "Dedicated Tasks page with search and filter UI",
        "Inline task editing and deletion",
        "Animated transitions using Framer Motion",
      ],
      learnings: [
        "Implementing secure authentication with JWT cookies",
        "Building scalable frontend–backend integrations",
        "Designing clean and intuitive task dashboards",
        "Managing state and side effects in React",
        "Structuring production-ready Next.js applications",
      ],
      github: "https://github.com/farhankhan0986/Planixa",
    },
  };

  const project = projects[slug];

  if (!project) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-xl text-muted">Project not found</p>
    </div>
  );
}

return (
  <div className="min-h-screen bg-background text-foreground">
    {/* Hero Section */}
    <div className="max-w-6xl mx-auto px-6 py-12 lg:px-10 lg:py-20">
      <div className="space-y-5 mb-12">
        <div className="flex justify-between items-start">
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-border bg-card hover:border-primary/30 hover:bg-foreground/5 text-sm text-foreground font-semibold transition-all"
          >
            <span className="text-base">←</span>
            Back
          </a>
        </div>
        <p className="text-lg lg:text-2xl text-muted font-light">
          {project.role}
        </p>
        <p className="text-base lg:text-lg text-foreground/80 max-w-3xl leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Problem & Solution Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="bg-red-500/10 dark:bg-red-900/20 border-2 border-red-500/30 dark:border-red-800/40 rounded-xl p-6 hover:border-red-500/50 transition-colors">
          <h2 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-3">
            The Problem
          </h2>
          <p className="text-base text-foreground/80 leading-relaxed">
            {project.problem}
          </p>
        </div>
        <div className="bg-green-500/10 dark:bg-green-900/20 border-2 border-green-500/30 dark:border-green-800/40 rounded-xl p-6 hover:border-green-500/50 transition-colors">
          <h2 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-3">
            The Solution
          </h2>
          <p className="text-base text-foreground/80 leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <Block title="Technology Stack">
        <div className="flex flex-wrap gap-3">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-card border-2 border-border rounded-full text-sm font-semibold text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all"
            >
              {t}
            </span>
          ))}
        </div>
      </Block>

      {/* Architecture */}
      <Block title="Architecture & Design">
        <div className="grid md:grid-cols-2 gap-4">
          {project.architecture.map((item, i) => (
            <div
              key={i}
              className="bg-card border-2 border-border rounded-lg p-5 hover:border-primary/50 hover:bg-foreground/5 transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="text-xl text-primary font-bold">▸</span>
                <p className="text-sm lg:text-base text-foreground/80 leading-relaxed">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Block>

      {/* Key Learnings */}
      <Block title="Key Learnings">
        <div className="space-y-4">
          {project.learnings.map((item, i) => (
            <div
              key={i}
              className="bg-card border-2 border-border rounded-lg p-5 hover:border-accent/50 hover:bg-foreground/5 transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="text-lg text-accent">✦</span>
                <p className="text-sm lg:text-base text-foreground/80 leading-relaxed">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Block>

      {/* CTA Button */}
      <div className="mt-12 flex justify-center">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-border bg-card text-sm font-semibold text-foreground hover:border-primary/50 hover:bg-primary/10 hover:text-primary backdrop-blur-sm transition-all shadow-lg"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>View Code on GitHub</span>
          <span className="text-base">→</span>
        </a>
      </div>
    </div>
  </div>
);
}

function Block({ title, children }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {title}
      </h2>
      {children}
    </div>
  );
}