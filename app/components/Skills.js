"use client";

import TrustBadges from "./TrustBadges";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Brain,
  Bot,
  Cpu,
  ExternalLink,
} from "lucide-react";

const categoryIcons = {
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  "SQL Databases": Database,
  "NoSQL Databases": Database,
  "Tools & Platforms": Wrench,
  "Core Concepts": Brain,
  "AI & Automation": Bot,
  LLMs: Cpu,
};

const skillCategories = [
  {
    category: "Languages",
    skills: [
      {
        name: "JavaScript",
        logo: "https://www.svgrepo.com/show/349419/javascript.svg",
      },
      {
        name: "TypeScript",
        logo: "https://www.svgrepo.com/show/354478/typescript-icon.svg",
      },
      { name: "C++", logo: "https://www.svgrepo.com/show/373528/cpp3.svg" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      {
        name: "React.js",
        logo: "https://www.svgrepo.com/show/354259/react.svg",
      },
      { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/white" },
      {
        name: "Tailwind CSS",
        logo: "https://www.svgrepo.com/show/374118/tailwind.svg",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        logo: "https://www.svgrepo.com/show/354119/nodejs-icon.svg",
      },
      {
        name: "Express.js",
        logo: "https://img.icons8.com/?size=512w&id=9Gfx4Dfxl0JK&format=png",
      },
      {
        name: "REST APIs",
        logo: "https://img.icons8.com/?size=512w&id=21895&format=png",
      },
    ],
  },
  {
    category: "SQL Databases",
    skills: [
      {
        name: "PostgreSQL",
        logo: "https://www.svgrepo.com/show/354200/postgresql.svg",
      },
      { name: "MySQL", logo: "https://www.svgrepo.com/show/373848/mysql.svg" },
      {
        name: "Prisma",
        logo: "https://www.svgrepo.com/show/374002/prisma.svg",
      },
    ],
  },
  {
    category: "NoSQL Databases",
    skills: [
      {
        name: "MongoDB",
        logo: "https://www.svgrepo.com/show/331488/mongodb.svg",
      },
      {
        name: "Mongoose",
        logo: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
      },
      {
        name: "Redis",
        logo: "https://www.svgrepo.com/show/303460/redis-logo.svg",
      },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      {
        name: "Git/GitHub",
        logo: "https://www.svgrepo.com/show/475654/github-color.svg",
      },
      {
        name: "Postman",
        logo: "https://www.svgrepo.com/show/354202/postman-icon.svg",
      },
      {
        name: "Vercel",
        logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico",
      },
    ],
  },
  {
    category: "Core Concepts",
    skills: [
      {
        name: "System Design",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
      {
        name: "API Security",
        logo: "https://cdn.simpleicons.org/cloudflare/purple",
      },
      {
        name: "Authentication",
        logo: "https://cdn.simpleicons.org/auth0/grey",
      },
    ],
  },
  {
    category: "AI & Automation",
    skills: [
      {
        name: "n8n",
        logo: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/n8n-color.png",
      },
      {
        name: "Antigravity",
        logo: "https://antigravity.google/assets/image/brand/antigravity-icon__full-color.png",
      },
      { name: "Cursor", logo: "https://www.cursor.com/favicon.ico" },
    ],
  },
  {
    category: "LLMs",
    skills: [
      {
        name: "OpenAI",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
      },
      {
        name: "Anthropic",
        logo: "https://cdn.worldvectorlogo.com/logos/claude-logo.svg",
      },
      {
        name: "Gemini",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Google_Gemini_icon_2025.svg/1280px-Google_Gemini_icon_2025.svg.png?_=20250728014952",
      },
    ],
  },
];

const proficiencyData = [
  { skill: "Backend Development", level: 90 },
  { skill: "Full-Stack MERN", level: 85 },
  { skill: "Frontend (React / Next.js)", level: 80 },
  { skill: "Database Design & Optimization", level: 85 },
  { skill: "System Design", level: 80 },
  { skill: "API Security", level: 85 },
];

const certificatesData = [
  {
    id: 1,
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "2025",
    description: "Completed Postman’s API Fundamentals program covering API testing, request building, collections, environments, and automated API workflows using Postman.",
    image: "https://fahadnahar.com/storage/app/public/blogs/k8fWgyHMLbmr4LHm8MBDJVZct3ny55yWT8P8uEUX.jpg",
    link: "https://badges.parchment.com/public/assertions/TE9PC957Rt6eZtxVuynu2A",
    tech: ["API Testing", "Postman", "REST APIs"],
  },
  {
    id: 2,
    title: "MongoDB Node.js Developer Path",
    issuer: "MongoDB University",
    date: "2025",
    description: "Learned how to build scalable backend applications using MongoDB and Node.js, including CRUD operations, indexing, schema design, and aggregation pipelines.",
    image: "https://facialix.com/wp-content/uploads/2023/05/curso-gratis-mongoDB-facialix.jpg",
    link: "https://drive.google.com/file/d/1_R4HHSmT9e3nPGqvNl5T5GAwxI9TCltf/view",
    tech: ["MongoDB", "Node.js", "Database Design"],
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    date: "2025",
    description: "Gained foundational knowledge of cloud computing, AWS core services, security, pricing models, and global infrastructure used in modern cloud applications.",
    image: "https://zoomgroup.com/public/storage/images/courses/Amazon-Web-Services-slider.webp",
    link: "https://drive.google.com/file/d/16bJUSWOaC8qkYnQVxjtJRBLOc8N0LK5k/view",
    tech: ["AWS", "Cloud Computing", "IAM", "EC2"],
  },
  {
    id: 4,
    title: "Python Essentials",
    issuer: "Cisco Networking Academy",
    date: "2025",
    description: "Learned Python programming fundamentals including data structures, control flow, functions, and problem-solving using Python.",
    image: "https://storage.ghost.io/c/ab/2a/ab2aa77e-39bd-44e8-9ccb-d55a2093edde/content/images/2023/10/Logo_-Cisco.png",
    link: "https://drive.google.com/file/d/1ldHmMQZLodXTq90n09JgkKIedy0rrfBp/view",
    tech: ["Python", "Programming Fundamentals", "Data Structures"],
  },
];

export default function Skills() {
  return (
    <section className="relative select-none py-28 bg-background text-foreground overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(700px circle at 50% 0%, rgba(255,255,255,0.025), transparent 55%)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* ── Section Header ── */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Skills &{" "}
            <span className="text-foreground opacity-50">
              Expertise
            </span>
          </h2>
          <p className="text-muted max-w-2xl text-lg">
            A focused overview of my technical strengths, tools, and engineering
            fundamentals.
          </p>
          <div className="section-line mt-4" />
        </div>

        {/* ── Skills Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {skillCategories.map(({ category, skills }, idx) => {
            const Icon = categoryIcons[category] || DefaultIcon;
            const categoryColors = [
              "rgba(255,255,255,0.9)",
              "rgba(220,220,220,0.85)",
              "rgba(200,200,200,0.8)",
              "rgba(180,180,180,0.75)",
              "rgba(160,160,160,0.7)",
              "rgba(140,140,140,0.65)",
            ];
            const color = categoryColors[idx % categoryColors.length];

            return (
              <div
                key={category}
                className="group relative rounded-2xl p-7 pt-8 backdrop-blur-lg transition-all duration-500 ease-out overflow-visible hover:-translate-y-2 active:-translate-y-1"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(var(--card), 0.7)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Underglow */}
                <div
                  className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-4 w-3/4 h-6 rounded-full blur-2xl opacity-0 group-hover:opacity-20 group-active:opacity-20 transition-opacity duration-700 z-0"
                  style={{ background: "rgba(255,255,255,0.4)" }}
                />
                {/* Header */}
                <div className="relative z-10 flex items-center gap-3 mb-6">
                  <span
                    className="flex items-center justify-center w-11 h-11 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "rgb(var(--foreground))" }}
                  >
                    <span className="transition-transform duration-700 group-hover:-translate-y-1 group-active:-translate-y-1 group-hover:scale-110 group-active:scale-105">
                      <Icon size={24} strokeWidth={1.8} />
                    </span>
                  </span>
                  <h3 className="text-lg font-extrabold tracking-tight text-foreground">
                    {category}
                  </h3>
                </div>
                {/* Skills */}
                <ul className="space-y-2">
                  {skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-3 text-[15px] group/skill transition-all duration-500 active:pl-2 hover:pl-2 rounded-lg px-1 py-1"
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-5 h-5 shrink-0 object-contain transition-all duration-500 group-active/skill:scale-125 group-hover/skill:scale-125 group-active/skill:drop-shadow-[0_2px_18px_rgba(99,102,241,0.18)] group-hover/skill:drop-shadow-[0_2px_18px_rgba(99,102,241,0.18)]"
                        loading="lazy"
                      />
                      <span className="font-medium transition-all duration-300 group-hover/skill:text-foreground text-muted">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* ── TrustBadges ── */}
        <div className="mt-24 pt-16 border-t text-center" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <TrustBadges />
        </div>

        {/* ── Proficiency Radar ── */}
        <div className="mt-24 pt-16 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-2 mb-14">
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Proficiency{" "}
                <span className="text-foreground opacity-50">
                  Radar
                </span>
              </h3>
              <p className="text-sm sm:text-base text-muted">
                Focused expertise with a backend-first mindset.
              </p>
              <div className="section-line mx-auto mt-4" />
            </div>

            {/* Hexagonal bento grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-5">
              {proficiencyData.map((item, index) => {
                const circumference = 2 * Math.PI * 54;
                const offset =
                  circumference - (item.level / 100) * circumference;

                return (
                  <div
                    key={item.skill}
                    className={[
                      "group relative rounded-2xl sm:rounded-3xl backdrop-blur-xl p-3 sm:p-8 flex flex-col items-center",
                      "transition-all duration-500 ease-out text-center",
                      "hover:-translate-y-1 sm:hover:-translate-y-2 active:-translate-y-1 sm:active:-translate-y-2",
                      index === proficiencyData.length - 1 &&
                        proficiencyData.length % 3 === 1
                        ? "col-span-3 sm:col-span-2 lg:col-span-1 lg:col-start-2"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(var(--card),0.6)" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.5)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    {/* Ambient glow on hover */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04), transparent 70%)" }} />

                    <div className="relative flex flex-col items-center text-center">
                      {/* Circular progress ring */}
                      <div className="relative w-16 h-16 sm:w-32 sm:h-32 mb-4 sm:mb-6">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                          <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                          <circle
                            cx="60" cy="60" r="54" fill="none" strokeWidth="8" strokeLinecap="round"
                            className="transition-all duration-1000 ease-out"
                            style={{ stroke: "url(#progressGradient)", strokeDasharray: circumference, strokeDashoffset: offset, filter: "drop-shadow(0 0 6px rgba(255,255,255,0.25))" }}
                          />
                          <defs>
                            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                              <stop offset="100%" stopColor="rgba(200,200,200,0.7)" />
                            </linearGradient>
                          </defs>
                        </svg>

                        {/* Percentage in center */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[12px] sm:text-2xl font-black tabular-nums text-foreground">
                             {item.level}
                             <span className="text-[8px] sm:text-sm text-muted">%</span>
                           </span>
                        </div>

                        {/* Pulse ring on hover */}
                        <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-white/15 group-active:border-white/15 group-hover:scale-110 group-active:scale-110 transition-all duration-700 ease-out" />
                      </div>

                      {/* Skill name */}
                      <h4 className="text-xs sm:text-lg font-bold text-foreground tracking-tight sm:mb-2 transition-colors duration-300">
                        {item.skill}
                      </h4>

                      {/* Mini bar underneath */}
                      <div className="w-8 sm:w-16 h-[2px] rounded-full bg-white/[0.06] overflow-hidden hidden sm:block">
                        <div
                          className="h-full rounded-full transition-all duration-700 ease-out"
                          style={{ width: `${item.level}%`, background: "rgba(255,255,255,0.4)" }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Certificates ── */}
        <div className="mt-24 pt-16 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
               Licenses &{" "}
               <span className="text-foreground opacity-50">
                  Certifications
                </span>
            </h2>
            <p className="max-w-2xl text-muted text-lg">
              Professional credentials and achievements showcasing continuous learning and expertise.
            </p>
            <div className="section-line mt-4" />
          </div>

          <div className="space-y-24">
            {certificatesData.map((cert, index) => (
              <div
                key={cert.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image */}
                <div
                  className={`group relative rounded-2xl duration-500 active:scale-105 active:duration-500 active:transition-transform overflow-hidden ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                  style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full aspect-video object-cover transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>

                {/* Content */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-block text-xs px-3 py-1 rounded-full font-medium" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgb(var(--muted))" }}>
                      {cert.issuer} • {cert.date}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-foreground">{cert.title}</h3>

                  <p className="text-muted leading-relaxed text-base">
                    {cert.description}
                  </p>

                  {/* Tech/Skills */}
                  <div>
                    <div className="flex flex-wrap gap-2">
                        {cert.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full"
                          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgb(var(--muted))" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="pt-4">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition active:scale-95 active:duration-300 active:transition-transform hover:opacity-90"
                      style={{ background: "rgb(var(--foreground))", color: "rgb(var(--background))" }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Verify Credential
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
