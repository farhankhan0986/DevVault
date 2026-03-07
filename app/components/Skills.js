"use client";

/**
 * Skills Section Component
 * Design: Glass-morphism cards, gradient progress bars, icon-driven categories
 */

import TrustBadges from "./TrustBadges";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Brain,
  Bot,
  Sparkles,
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
  LLMs: Sparkles,
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
        name: "Firebase",
        logo: "https://www.svgrepo.com/show/373595/firebase.svg",
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
      { name: "Cursor", logo: "https://www.cursor.com/favicon.ico" },
      {
        name: "Vercel v0",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAAhUlEQVR4Ae3PIRKCQBhH8f9JvIXVC1gMJuKmnbFvJO+MgbbFc2wjE79AJNPtlKfqAAN4BH71pafdVmrNrHH6q+ar0sRDkK7YnSgpApqVUEyxgp6LZg84nn8xgc+LqMxQfGJIcFO9jDIGLNKB1yaqh/YEOEl5HfWkG09KrR3MS6F5M6fR7gVNhV89Kw1F/QAAAABJRU5ErkJggg==",
      },
      {
        name: "VS Code / Copilot",
        logo: "https://www.svgrepo.com/show/374171/vscode.svg",
      },
    ],
  },
  {
    category: "LLMs",
    skills: [
      {
        name: "ChatGPT",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
      },
      {
        name: "Claude",
        logo: "https://cdn.worldvectorlogo.com/logos/claude-logo.svg",
      },
      {
        name: "Gemini / Groq",
        logo: "https://www.svgrepo.com/show/475656/google-color.svg",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ category, skills }) => {
            const Icon = categoryIcons[category];

            return (
              <div
                key={category}
                className="group relative rounded-2xl border border-indigo-500/20 bg-white/[0.03] backdrop-blur-md p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_0_32px_rgba(99,102,241,0.15)] hover:border-indigo-500/40"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/10 text-muted/10 ring-1 ring-indigo-500/20 transition-colors duration-300 group-hover:bg-indigo-500/20 group-hover:text-indigo-500">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <h3 className="text-lg font-bold text-foreground tracking-tight">
                    {category}
                  </h3>
                </div>

                {/* Skills list */}
                <ul className="space-y-3">
                  {skills.map((skill) => (
                    <li
                      key={skill.name}
                      className=" flex items-center gap-3 text-[15px] text-foreground/80 transition-colors duration-200 hover:text-foreground"
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-5 h-5 group shrink-0 object-contain hover:scale-110 transition-transform duration-300 "
                        loading="lazy"
                      />
                      {skill.name}
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
                      "hover:-translate-y-2 hover:border-indigo-500/40",
                      "hover:shadow-[0_0_40px_rgba(99,102,241,0.15),0_0_80px_rgba(99,102,241,0.05)]",
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
                    <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.08),transparent_70%)]" />

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
                        <div className="absolute inset-0 rounded-full border-2 border-indigo-500/0 group-hover:border-indigo-500/20 group-hover:scale-110 transition-all duration-700 ease-out" />
                      </div>

                      {/* Skill name */}
                      <h4 className="text-lg font-bold text-foreground tracking-tight mb-2 group-hover:text-indigo-300 transition-colors duration-300">
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
      </div>
    </section>
  );
}
