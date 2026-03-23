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
    image: "https://www.paubox.com/hubfs/What%20is%20AWS.jpg",
    link: "https://drive.google.com/file/d/16bJUSWOaC8qkYnQVxjtJRBLOc8N0LK5k/view",
    tech: ["AWS", "Cloud Computing", "IAM", "EC2"],
  },
  {
    id: 4,
    title: "Python Essentials",
    issuer: "Cisco Networking Academy",
    date: "2025",
    description: "Learned Python programming fundamentals including data structures, control flow, functions, and problem-solving using Python.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMpxduhWYu_UxowH1fc9KOYPvmT_Mk-EMalTnyLQZZg&s&ec=121585071",
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
        className="absolute inset-0 -z-10 bg-[radial-gradient(700px_circle_at_50%_0%,rgba(99,102,241,0.10),transparent_50%)]"
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* ── Section Header ── */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
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
              { bg: "from-[#32386B] to-[#2e1c64]", color: "#6366f1" },
              { bg: "from-[#2c244b] to-[#46213b]", color: "#e92b88" },
              { bg: "from-[#18343E] to-[#22574A]", color: "#13dfa2" },
              { bg: "from-[#3b3204] to-[#86620c]", color: "#ffaf36" },
              { bg: "from-[#221d3a] to-[#302366]", color: "#a259fa" },
              { bg: "from-[#113448] to-[#183E54]", color: "#2cb9f4" },
            ];
            const { bg, color } = categoryColors[idx % categoryColors.length];

            return (
              <div
                key={category}
                className={`
          group relative rounded-2xl border border-white/10
          bg-gradient-to-br bg-opacity-90
          p-7 pt-8 backdrop-blur-lg 
          transition-all duration-500 ease-out overflow-visible
          shadow-[0_8px_32px_rgba(30,25,79,0.22)]
          hover:-translate-y-2 active:-translate-y-1
          `}
                style={{
                  boxShadow: `0 2px 24px 0 ${color}33, 0 4px 24px rgba(0,0,0,0.24)`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = color;
                  e.currentTarget.style.boxShadow =
                    `0 0 40px 0 ${color}44, 0 10px 32px 0 rgba(0,0,0,0.25)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.boxShadow =
                    `0 2px 24px 0 ${color}33, 0 4px 24px rgba(0,0,0,0.24)`;
                }}
              >
                {/* Underglow */}
                <div
                  className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-4 w-3/4 h-8 rounded-full blur-2xl opacity-0 group-hover:opacity-40 group-active:opacity-40 transition-opacity duration-700 z-0"
                  style={{ background: color }}
                />
                {/* Header */}
                <div className="relative z-10 flex items-center gap-3 mb-6">
                  <span
                    className="flex items-center justify-center w-11 h-11 rounded-xl ring-2"
                    style={{ color, borderColor: color }}
                  >
                    <span className="transition-transform duration-700 group-hover:-translate-y-1 group-active:-translate-y-1 group-hover:scale-110 group-active:scale-105">
                      <Icon size={27} strokeWidth={1.8} />
                    </span>
                  </span>
                  <h3 className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-white/90 via-slate-200/80 to-white/70 bg-clip-text drop-shadow">
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
                      <span className="font-medium transition-all duration-300 group-hover/skill:text-indigo-300">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* ── TrustBadges ── */}
        <div className="mt-24 pt-16 border-t border-white/10 text-center">
          <TrustBadges />
        </div>

        {/* ── Proficiency Radar ── */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-2 mb-14">
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Proficiency{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
                  Radar
                </span>
              </h3>
              <p className="text-sm sm:text-base text-muted">
                Focused expertise with a backend-first mindset.
              </p>
              <div className="section-line mx-auto mt-4" />
            </div>

            {/* Hexagonal bento grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {proficiencyData.map((item, index) => {
                const circumference = 2 * Math.PI * 54;
                const offset =
                  circumference - (item.level / 100) * circumference;

                return (
                  <div
                    key={item.skill}
                    className={[
                      "group relative rounded-3xl border border-indigo-500/40 bg-white/[0.03] backdrop-blur-xl p-8",
                      "transition-all duration-500 ease-out",
                      "hover:-translate-y-2 active:-translate-y-2 hover:border-indigo-500/40 active:border-indigo-500/40",
                      "hover:shadow-[0_0_40px_rgba(99,102,241,0.15),0_0_80px_rgba(99,102,241,0.05)] active:shadow-[0_0_40px_rgba(99,102,241,0.15),0_0_80px_rgba(99,102,241,0.05)]",
                      index === proficiencyData.length - 1 &&
                        proficiencyData.length % 3 === 1
                        ? "sm:col-span-2 lg:col-span-1 lg:col-start-2"
                        : "",
                      index === proficiencyData.length - 2 &&
                        proficiencyData.length % 3 === 2
                        ? "lg:col-start-1"
                        : "",
                      index === proficiencyData.length - 1 &&
                        proficiencyData.length % 3 === 2
                        ? "lg:col-start-2"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {/* Ambient glow on hover */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.08),transparent_70%)]" />

                    <div className="relative flex flex-col items-center text-center">
                      {/* Circular progress ring */}
                      <div className="relative w-32 h-32 mb-6">
                        {/* Background ring */}
                        <svg
                          className="w-full h-full -rotate-90"
                          viewBox="0 0 120 120"
                        >
                          <circle
                            cx="60"
                            cy="60"
                            r="54"
                            fill="none"
                            stroke="rgba(255,255,255,0.06)"
                            strokeWidth="8"
                          />
                          {/* Progress ring */}
                          <circle
                            cx="60"
                            cy="60"
                            r="54"
                            fill="none"
                            strokeWidth="8"
                            strokeLinecap="round"
                            className="transition-all duration-1000 ease-out"
                            style={{
                              stroke: "url(#progressGradient)",
                              strokeDasharray: circumference,
                              strokeDashoffset: offset,
                              filter:
                                "drop-shadow(0 0 8px rgba(99,102,241,0.5))",
                            }}
                          />
                          <defs>
                            <linearGradient
                              id="progressGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#6366f1" />
                              <stop offset="100%" stopColor="#8b5cf6" />
                            </linearGradient>
                          </defs>
                        </svg>

                        {/* Percentage in center */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-black tabular-nums bg-gradient-to-br from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                            {item.level}
                            <span className="text-sm">%</span>
                          </span>
                        </div>

                        {/* Pulse ring on hover */}
                        <div className="absolute inset-0 rounded-full border-2 border-indigo-500/0 group-hover:border-indigo-500/20 group-active:border-indigo-500/20 group-hover:scale-110 group-active:scale-110 transition-all duration-700 ease-out" />
                      </div>

                      {/* Skill name */}
                      <h4 className="text-lg font-bold text-foreground tracking-tight mb-2 group-hover:text-indigo-300 group-active:text-indigo-300 transition-colors duration-300">
                        {item.skill}
                      </h4>

                      {/* Mini bar underneath */}
                      <div className="w-16 h-1 rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-700 ease-out"
                          style={{ width: `${item.level}%` }}
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
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Licenses &{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
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
                  className={`group relative rounded-2xl duration-500 active:-translate-z-2 active:scale-105 active:duration-500 active:transition-transform overflow-hidden border border-white/10 bg-white/5 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full aspect-video object-cover group-hover:scale-110 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>

                {/* Content */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-block text-xs bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full text-indigo-400 font-medium">
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
                          className="text-xs text-indigo-300 px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/20"
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition shadow-lg shadow-indigo-500/20"
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
