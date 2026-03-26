import { ArrowLeft, Github, CheckCircle2, Layers, Lightbulb, Target, Zap } from "lucide-react";

export default async function ProjectDetail({ params }) {
  const { slug } = await params;

  const projects = {
    hiresight: {
      title: "HireSight-AI",
      role: "Full-Stack AI Software Engineer",
      description:
        "HireSight-AI is an AI-powered recruitment intelligence platform designed to automate the early stages of the hiring pipeline. The system leverages Large Language Models (LLMs) through the Groq API to parse unstructured PDF resumes, extract structured candidate data such as technical skills, frameworks, years of experience, and education, and compute objective match scores against job requirements. The platform provides recruiters with an AI-ranked candidate pipeline while offering candidates a streamlined application experience. By combining AI-powered resume analysis with a modern applicant tracking interface, HireSight significantly reduces manual resume screening time and improves hiring efficiency.",
      problem:
        "Modern hiring pipelines often require recruiters to manually review hundreds of resumes for a single role. Most resumes are unstructured PDFs with inconsistent formatting, making it difficult to quickly extract relevant information such as skills, technologies, and experience. This manual process introduces bias, delays hiring cycles, and increases the risk of overlooking highly qualified candidates.",
      solution:
        "Developed a full-stack recruitment platform using Next.js 15 and Groq's Llama-3 models to automate resume analysis and candidate ranking. The system parses uploaded resumes, extracts structured candidate information, and evaluates each applicant against job-specific requirements using an AI-driven scoring pipeline. Recruiters access a dedicated dashboard where candidates are automatically ranked by relevance, while candidates can browse open roles and submit applications through a simple and intuitive interface.",
      tech: [
        "Next.js 15 (App Router)",
        "React 19",
        "Tailwind CSS",
        "Node.js",
        "MongoDB Atlas",
        "Mongoose ODM",
        "Groq AI (Llama-3)",
        "PDF Parsing & Text Extraction",
        "JWT Authentication / NextAuth",
        "RESTful API Architecture"
      ],
      architecture: [
        "Serverless API routes and Server Actions for scalable backend logic",
        "AI-powered resume parsing pipeline using Groq LLM for structured candidate data extraction",
        "Resume processing workflow for skill extraction, normalization, and match scoring",
        "Dual-sided Role-Based Access Control (RBAC) for recruiters and candidates",
        "Scalable MongoDB schema for job postings, applications, and candidate profiles",
        "Secure authentication and protected dashboard routes using JWT/NextAuth",
        "Component-driven UI architecture using React and Tailwind CSS",
        "Optimized Next.js server components for improved performance and reduced client-side JavaScript"
      ],
      learnings: [
        "Designing AI-powered pipelines for structured data extraction from unstructured documents",
        "Prompt engineering techniques to reliably extract JSON-formatted candidate information using LLMs",
        "Handling file uploads, storage, and PDF parsing in Node.js environments",
        "Building scalable full-stack applications using Next.js App Router architecture",
        "Designing recruiter-focused dashboards and candidate workflows for real-world hiring use cases",
        "Implementing role-based access control and secure authentication flows",
        "Optimizing server components and asynchronous data fetching in Next.js 15",
        "Structuring MongoDB schemas for scalable applicant tracking systems"
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

    promptforge: {
      title: "PromptForge",
      role: "Full Stack Developer",
      description:
        "PromptForge is a full-stack AI-powered prompt generator and manager that transforms rough ideas into production-grade AI prompts. It allows users to craft, refine, save, and organize prompts through an elegant editorial-style dashboard.",
      problem:
        "Writing effective AI prompts is a skill that many users struggle with vague or poorly structured prompts lead to inconsistent and low quality AI outputs. Additionally, there's no centralized way to save, organize, and analyze prompt libraries for reuse and improvement.",
      solution:
        "Built a full-stack application that leverages the Groq API (LLaMA 3.3 70B) to automatically transform rough ideas into meticulously crafted prompts with role assignments, structured instructions, constraints, and output formatting. Paired with a personal prompt library featuring categorization, tagging, full-text search, and an analytics dashboard for usage insights.",
      tech: [
        "React 19",
        "Vite 7",
        "Tailwind CSS 3",
        "Node.js",
        "Express 5",
        "PostgreSQL",
        "JWT Authentication",
        "Groq API (LLaMA 3.3 70B)",
        "Recharts",
        "Axios",
      ],
      architecture: [
        "Decoupled frontend (React/Vite) and backend (Express) architecture",
        "PostgreSQL relational database for persistent prompt storage",
        "JWT-based authentication with bcrypt password hashing",
        "Groq API integration for AI-powered prompt generation",
        "RESTful API design for prompt CRUD and user management",
        "Client-side routing with React Router 7",
        "Responsive editorial-style UI with Tailwind CSS",
        "Frontend deployed on Vercel with separate backend hosting",
      ],
      features: [
        "AI prompt generation — transform rough ideas into production-grade prompts using LLaMA 3.3 70B via Groq",
        "Save and organize prompts with custom titles, categories, and comma-separated tags",
        "Full-text search across titles, categories, tags, and prompt content",
        "Analytics dashboard with bar charts for category distribution, top tags breakdown, and recent prompts",
        "Secure user registration and login with bcrypt hashing and JWT tokens",
        "Account management — change password, delete all prompts, or delete account",
        "One-click copy to clipboard for generated prompts",
        "Responsive design that works seamlessly on desktop and mobile",
      ],
      learnings: [
        "Integrating third-party AI APIs (Groq) for real-time content generation",
        "Designing and managing relational data models in PostgreSQL for prompts, categories, and tags",
        "Building secure authentication flows with JWT and bcrypt",
        "Creating data visualization dashboards with Recharts",
        "Implementing full-text search across multiple database fields",
        "Structuring a decoupled full-stack application for independent deployment",
        "Crafting editorial-style, responsive UI with Tailwind CSS",
      ],
      github: "https://github.com/farhankhan0986/promptforge",
    },
    "sentinel-guard": {
      title: "Sentinel Guard",
      role: "Full-Stack Developer & Security Engineer",
      description:
        "Sentinel Guard is a website security monitoring platform that helps users track and protect incoming API traffic for their websites. It combines request inspection, rate limiting, threat tracking, and a clean analytics dashboard to make suspicious traffic easier to detect and understand.",
      problem:
        "Web applications and APIs are often exposed to repeated requests, suspicious traffic, brute-force style behavior, and poor visibility into what is actually reaching the backend.",
      solution:
        "Built a middleware-based security layer that checks incoming requests before they reach protected endpoints, validates website-level API keys, applies firewall and rate-limiting rules, tracks suspicious behavior, and stores request activity for dashboard-based monitoring.",
      tech: [
        "Next.js (App Router)",
        "React",
        "Node.js",
        "MongoDB",
        "Mongoose",
        "JWT Authentication",
        "Tailwind CSS",
        "Recharts",
        "REST API",
        "Middleware Architecture",
      ],
      architecture: [
        "Request interception using Next.js middleware",
        "Website-level API key identification for protected traffic",
        "Rule engine for blocking paths, methods, and IPs",
        "Rate limiting based on request volume per source",
        "Threat scoring pipeline for suspicious request behavior",
        "Centralized request logging and analytics dashboard",
      ],
      features: [
        "User signup with website registration",
        "Unique API key generation for each website",
        "Firewall rules for blocking methods, paths, and IPs",
        "Rate limiting with blocked request handling",
        "Threat tracking and suspicious activity detection",
        "Recent request logs and traffic analytics dashboard",
        "Built-in demo traffic simulator for testing and presentation",
        "JWT-based user authentication",
      ],
      learnings: [
        "Designing middleware-first security systems",
        "Implementing request logging and analytics pipelines",
        "Building secure authentication flows with JWT",
        "Applying rate limiting and threat detection concepts",
        "Connecting backend protection logic with frontend dashboards",
        "Designing a security-focused full-stack project that is simple to explain",
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
    aiExpenseTracker: {
      title: "AI Expense Tracker",
      role: "Full Stack Developer",
      description:
        "AI Expense Tracker is a full-stack personal finance management application that helps users monitor their spending, automatically categorize transactions using AI, and gain meaningful financial insights through interactive analytics dashboards.",
      problem:
        "Managing personal finances manually is time-consuming and error-prone. Many users struggle to categorize transactions, identify spending patterns, and maintain a consistent budget. Without clear analytics and insights, it becomes difficult to understand financial behavior and make informed decisions.",
      solution:
        "Developed a full-stack application that leverages the Groq API for AI-powered expense categorization and financial insights. The platform allows users to record transactions, analyze spending trends, manage budgets, and receive intelligent suggestions for improving saving habits. The system combines a responsive frontend dashboard with a secure REST API backend and persistent cloud database.",
      tech: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB Atlas",
        "JWT Authentication",
        "Groq API",
        "Recharts",
        "Axios"
      ],
      architecture: [
        "Decoupled frontend (React/Vite) and backend (Express) architecture",
        "MongoDB Atlas for scalable cloud-based data storage",
        "JWT-based authentication with secure token validation",
        "Groq API integration for AI-powered transaction categorization",
        "RESTful API design for expense, analytics, and budget management",
        "Client-side routing with React Router",
        "Interactive data visualization using Recharts",
        "Frontend deployed on Vercel and backend hosted on Render",
      ],
      features: [
        "AI-powered automatic expense categorization using Groq",
        "Expense tracking with category tagging and transaction history",
        "Monthly and daily spending analytics with interactive charts",
        "Budget management with category-based spending limits",
        "Smart financial insights and suggestions based on spending behavior",
        "Secure user authentication with JWT-based login and registration",
        "Upload financial statements for automated transaction processing",
        "Responsive dashboard optimized for desktop and mobile devices",
      ],
      learnings: [
        "Integrating Groq AI APIs for real-time financial data classification",
        "Designing RESTful APIs with Express for scalable backend services",
        "Managing NoSQL data structures in MongoDB for expense records",
        "Implementing secure authentication with JWT tokens",
        "Building interactive financial dashboards with Recharts",
        "Handling file uploads and parsing transaction data",
        "Deploying full-stack applications using Vercel and Render",
        "Designing responsive fintech-style dashboards with Tailwind CSS",
      ],
      github: "https://github.com/farhankhan0986/AI-Expense-Tracker-",
    },
    culinaria: {
      title: "Culinaria",
      role: "Full Stack Developer (AI Product Build)",
      description:
        "Culinaria is an AI-powered culinary platform designed to help users discover, create, and interact with recipes through a modern full-stack application. The platform combines a curated recipe database with an AI Sous-Chef assistant that helps users generate recipes, answer cooking questions, and explore ingredients. Built using a MERN-style architecture with a Vite + React frontend and an Express + MongoDB backend, the project focuses on building a real-world AI-integrated consumer product with authentication, personalized favorites, recipe ratings, and an editorial-style UI.",

      problem:
        "Most recipe websites are static content libraries with limited interactivity and no intelligent assistance. Users cannot easily generate new recipes, ask contextual cooking questions, or personalize their cooking experience with saved favorites and ratings.",

      solution:
        "Built a full-stack recipe platform that integrates AI-assisted recipe generation and conversational cooking support through a custom AI Sous-Chef. The system enables users to browse recipes, create their own dishes, save favorites, rate recipes, and interact with an AI assistant that provides cooking guidance and generates new recipes dynamically.",

      tech: [
        "React",
        "Vite",
        "Node.js",
        "Express",
        "MongoDB Atlas",
        "Mongoose",
        "JWT Authentication",
        "Groq AI (LLM)",
        "REST APIs",
        "Tailwind CSS",
        "Framer Motion"
      ],

      architecture: [
        "Full-stack MERN-style architecture with a React frontend and Express backend",
        "RESTful API design for recipes, authentication, ratings, favorites, and AI features",
        "MongoDB Atlas database storing users, recipes, ratings, and favorites",
        "JWT-based authentication with secure token storage",
        "AI integration via Groq API for recipe generation and conversational AI assistance",
        "Component-driven frontend architecture with reusable UI and modal components",
        "Client-side state management for recipes, favorites, chat messages, and filters",
      ],

      features: [
        "User authentication with signup and login",
        "Browse recipes with category and cuisine filters",
        "Search recipes by ingredients, cuisine, or category",
        "Create and publish custom recipes",
        "Save favorite recipes for personalized cooking lists",
        "Recipe rating system with comments",
        "AI recipe generator that creates new dishes from prompts",
        "AI Sous-Chef chat assistant for cooking help and ingredient suggestions",
        "Shopping list builder from recipe ingredients",
        "Cooking mode with step-by-step recipe guidance",
      ],

      learnings: [
        "Integrating LLM APIs into full-stack applications",
        "Designing scalable REST APIs for multi-feature platforms",
        "Managing complex React state across modals, chat, and user interactions",
        "Handling deployment for full-stack apps using Vercel (frontend) and Render (backend)",
        "Implementing user-centric features like favorites, ratings, and shopping lists",
        "Building AI-assisted consumer applications with conversational interfaces",
      ],

      github: "https://github.com/farhankhan0986/Culinaria",
    },
    flightstack: {
      title: "FlightStack",
      role: "Full Stack Developer",
      description:
        "FlightStack is a modern full-stack flight management platform for airlines, travel agencies, and administrators to oversee flights, bookings, and real-time analytics. The system combines a streamlined frontend dashboard with a secure and extensible backend, supporting seamless user experiences and robust API integrations.",
      problem:
        "Managing flight operations, schedules, and bookings is complex and demands real-time updates, reliability, and an easy-to-use interface. Legacy software often lacks intuitive dashboards and integrated analytics, leading to inefficiencies for both administrators and end-users.",
      solution:
        "Developed a comprehensive full-stack application using React and Redux for a dynamic frontend, paired with Node.js, Express, and MongoDB to create secure, RESTful APIs and real-time data management. Features include interactive dashboards, booking workflows, analytics modules, and robust authentication with JWT.",
      tech: [
        "React",
        "Redux",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT Authentication",
        "REST API",
        "CSS",
        "HTML"
      ],
      architecture: [
        "Decoupled frontend (React/Redux) and backend (Node.js/Express) architecture",
        "RESTful API design for data exchange and booking operations",
        "MongoDB for persistent, scalable data storage",
        "JWT-based authentication for secure user logins",
        "Reusable components and client-side routing for flexible UI",
        "Role-based access controls for administrators and users"
      ],
      features: [
        "Intuitive dashboard for flight management and analytics",
        "Booking and reservation system with user roles",
        "Real-time updates on flights and booking status",
        "Secure login and session management with JWT",
        "Comprehensive analytics (flight stats, booking trends, etc.)",
        "Responsive design for desktop and mobile experiences"
      ],
      learnings: [
        "Architecting decoupled full-stack applications for scalability",
        "Designing intuitive UIs for complex workflows",
        "Implementing JWT-based secure authentication and authorization",
        "Managing relational data and booking logic in MongoDB",
        "Building real-time dashboard components with React",
        "Deploying full-stack services and maintaining API integrations"
      ],
      github: [
        "https://github.com/farhankhan0986/flightstack-frontend"
      ],
    },
    viblytics: {
  title: "Viblytics",
  role: "Product Engineer & AI Developer",
  description:
    "Viblytics is an AI-powered YouTube competitor intelligence SaaS that empowers marketers and creators to analyze any public channel’s video performance, engagement rates, and trends with just a link. It combines live YouTube metrics, instant AI analysis, advanced data visualizations, and a polished SaaS experience.",
  problem:
    "Decoding competitor strategies on YouTube is slow, manual, and often limited to raw metrics. Most tools require clumsy spreadsheet exports, lack smart insights, and offer little in the way of actionable, enterprise-ready analytics.",
  solution:
    "Built a modern web app leveraging Groq’s LLaMA 3.3 70B for instant AI-powered video/channel insights. The platform delivers performance analytics, engagement benchmarking, trend detection, and actionable recommendations with a clean, responsive UI. Added shareable URLs, advanced charting, and resilience for demos/failover.",
  tech: [
    "Next.js 15",
    "React 19",
    "Tailwind CSS 4",
    "Groq AI (LLaMA 3.3 70B)",
    "Node.js",
    "TypeScript",
    "Recharts",
    "YouTube Data API v3",
    "CSV Export",
    "Vercel"
  ],
  architecture: [
    "Full-stack application using decoupled React UI and Next.js server routes",
    "YouTube Data API integration wraps live and mock data for loading/failover resilience",
    "Groq-powered Backend-for-Frontend (BFF) for all AI analysis and recommendations",
    "Dynamic routing with shareable ?channel= URLs for reproducible analysis views",
    "Custom hooks and useMemo for real-time filtering and insights computation",
    "Responsive, SaaS-grade UI with consistent branding and dark mode",
    "Microinteractions, tooltips, and skeleton loading for premium UX feel"
  ],
  features: [
    "Paste any public YouTube channel URL for analysis (supports @handle, channel ID, /c/ and /user/)",
    "AI-powered channel analysis via Groq (LLaMA 3.3 70B): auto-generated summaries, key insights, content patterns, and recommendations",
    "Rule-based instant channel insights card for engagement leader, cadence, trending, and performance momentum",
    "Sortable, filterable video table with views, likes, comments, publish date, engagement rate (color-coded) & trending badges",
    "Dual charting: top 5 bar chart and views vs. engagement scatter plot, toggle with one click",
    "Shareable analysis URLs — ?channel= link auto-load and one-click example channels for demo/UX",
    "CSV export including calculated engagement data for offline reporting",
    "Polished, branded design with dark/light mode, animations, skeleton loaders, and custom SVG logo"
  ],
  learnings: [
    "Integrating Groq's LLaMA API for low-latency AI analytics (summaries, pattern detection, recommendations)",
    "Designing instant-fallback architecture for reliable SaaS demos (mock/live data and error handling)",
    "Building advanced interactive charts with Recharts and dynamic highlighting",
    "Implementing rule-based and LLM-based insights in tandem (for speed/robustness)",
    "Engineering for shareability with dynamic URL state and zero-auth access",
    "Enhancing enterprise UX: responsive design, microinteractions, tooltips, and data export"
  ],
  github: "https://github.com/farhankhan0986/Viblytics",
  href: "https://viblytics.vercel.app",
  status: "COMPLETED",
  highlight: "AI-Powered Channel Intelligence, Engagement Benchmarking, & Shareable Competitor Reports",
  slug: "viblytics",
}
  };

  const project = projects[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-xl text-muted font-medium">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Back Button */}
        <a
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </a>

        {/* Header Section */}
        <header className="space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border border-border">
              <Zap className="w-4 h-4 text-primary" />
              {project.role}
            </span>
          </div>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </header>

        {/* Problem & Solution Cards */}
        {(project.problem || project.solution) && (
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {project.problem && (
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-2">
                  <Target className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">The Challenge</h3>
                <p className="text-muted leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}
            {project.solution && (
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
                  <Lightbulb className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">The Solution</h3>
                <p className="text-muted leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Tech Stack */}
        {project.tech && project.tech.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-card text-foreground text-sm font-medium rounded-lg border border-border shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Architecture (if applies) */}
          {project.architecture && project.architecture.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" />
                Architecture
              </h2>
              <ul className="space-y-4">
                {project.architecture.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Learnings (if applies) */}
          {project.learnings && project.learnings.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-accent" />
                Key Learnings
              </h2>
              <ul className="space-y-4">
                {project.learnings.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 shrink-0 mt-2.5" />
                    <span className="text-muted leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Call to Action */}
        {project.github && (
          <div className="pt-8 border-t border-border flex justify-center md:justify-start">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-background text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg border border-border hover:shadow-none hover:bg-slate-900/50"
            >
              <Github className="w-4 h-4" />
              View Source Code
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
