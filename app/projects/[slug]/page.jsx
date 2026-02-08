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
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-400">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background from-gray-950 via-black to-gray-950 text-white ">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 lg:px-10 lg:py-20">
        <div className="space-y-5 mb-12">
          <div className="flex justify-between">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <a
              href="/#projects"
              className="inline-flex items-center gap-2 px-4 py-1 rounded-2xl border border-white/10 bg-white/5 text-sm text-white hover:text-indigo-500 hover:border-white/20 hover:bg-white/10 transition"
            >
              <span className="text-base">←</span>
              Back
            </a>
          </div>
          <p className="text-lg lg:text-2xl text-gray-400 font-light">
            {project.role}
          </p>
          <p className="text-base lg:text-lg text-gray-300 max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Problem & Solution Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-gradient-to-br from-red-900/15 to-red-950/10 border border-red-800/30 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-red-300 mb-3">
              The Problem
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-900/15 to-green-950/10 border border-green-800/30 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-green-300 mb-3">
              The Solution
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
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
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-gray-200 hover:border-blue-400/60 transition-colors"
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
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-blue-400/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl text-blue-400">▸</span>
                  <p className="text-sm lg:text-base text-gray-200 leading-relaxed">
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
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-purple-400/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg text-purple-300">✦</span>
                  <p className="text-sm lg:text-base text-gray-200 leading-relaxed">
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
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/10 bg-white/5  text-sm font-medium text-white/90 hover:text-indigo-500 backdrop-blur-sm  hover:border-white/20 hover:bg-white/10  transition"
          >
            <span>View Code</span>
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
      <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        {title}
      </h2>
      {children}
    </div>
  );
}
