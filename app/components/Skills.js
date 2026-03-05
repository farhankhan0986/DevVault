"use client";

/**
 * Skills Section Component
 * Design: Glass-morphism cards, gradient progress bars, icon-driven categories
 */

import TrustBadges from "./TrustBadges";
import { Code2, Layout, Server, Database, Wrench, Brain } from "lucide-react";

const categoryIcons = {
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  "Tools & Platforms": Wrench,
  "Core Concepts": Brain,
};

const skillCategories = [
  { category: "Languages", skills: ["JavaScript", "TypeScript", "C++"] },
  { category: "Frontend", skills: ["React.js", "Next.js", "Tailwind CSS"] },
  { category: "Backend", skills: ["Node.js", "Express.js", "REST APIs"] },
  { category: "Database", skills: ["MongoDB", "Mongoose", "MySQL"] },
  {
    category: "Tools & Platforms",
    skills: ["Git/GitHub", "Postman", "Vercel"],
  },
  {
    category: "Core Concepts",
    skills: ["System Design", "API Security", "Authentication"],
  },
];

const proficiencyData = [
  { skill: "Backend Development", level: 90 },
  { skill: "Full-Stack MERN", level: 85 },
  { skill: "System Design", level: 80 },
  { skill: "API Security", level: 85 },
  { skill: "Frontend (React / Next.js)", level: 80 },
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
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
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
                className="group relative rounded-2xl border border-border/60 bg-white/[0.03] backdrop-blur-md p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_0_32px_rgba(99,102,241,0.15)] hover:border-indigo-500/40"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20 transition-colors duration-300 group-hover:bg-indigo-500/20 group-hover:text-indigo-300">
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
                      key={skill}
                      className="flex items-center gap-3 text-[15px] text-foreground/80 transition-colors duration-200 hover:text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/70 shrink-0" />
                      {skill}
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

        {/* ── Proficiency Bars ── */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-2 mb-14">
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Proficiency{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  Level
                </span>
              </h3>
              <p className="text-sm sm:text-base text-muted">
                Focused expertise with a backend-first mindset.
              </p>
              <div className="section-line mx-auto mt-4" />
            </div>

            <div className="space-y-5" role="list">
              {proficiencyData.map((item) => (
                <div
                  key={item.skill}
                  role="listitem"
                  className="group rounded-2xl border border-border/60 bg-white/[0.03] backdrop-blur-md px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(99,102,241,0.18)] hover:border-indigo-500/30"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-foreground">
                      {item.skill}
                    </span>
                    <span className="text-sm font-bold tabular-nums bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                      {item.level}%
                    </span>
                  </div>

                  {/* Progress track */}
                  <div className="relative h-2.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 shadow-[0_0_12px_rgba(99,102,241,0.45)] transition-all duration-700 ease-out"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
