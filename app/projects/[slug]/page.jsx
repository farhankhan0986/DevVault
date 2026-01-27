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
    "sentinel-guard": {
      title: "Sentinel Guard",
      role: "System Design & Backend Engineer",
      description:
        "Sentinel Guard is a conceptual API firewall and security middleware designed to protect backend services.",
      problem:
        "APIs are vulnerable to abuse, attacks, and unregulated traffic without a security layer.",
      solution:
        "Designed a middleware-based security layer handling rate limiting, attack detection, and request logging.",
      tech: [
        "Node.js",
        "Express Middleware",
        "Security Patterns",
        "System Design",
      ],
      architecture: [
        "Request interception layer",
        "Rate limiting & abuse prevention",
        "Attack detection logic",
        "Centralized logging pipeline",
      ],
      learnings: [
        "API gateway design principles",
        "Security middleware patterns",
        "Thinking at system scale",
      ],
      github: "#",
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
              className="inline-flex items-center gap-2 px-4 py-1 rounded-2xl border border-white/10 bg-white/5 text-sm text-indigo-300 hover:text-indigo-500 hover:border-white/20 hover:bg-white/10 transition"
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
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-semibold shadow-lg hover:shadow-blue-500/40 transition-all"
          >
            <span>View Code on GitHub</span>
            <span className="text-lg group-hover:translate-x-0.5 transition-transform">
              →
            </span>
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
