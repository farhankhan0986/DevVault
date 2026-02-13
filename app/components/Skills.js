"use client";

/**
 * Skills Section Component
 * Design: Modern Engineering – Dark glass cards & clean hierarchy
 */

import TrustBadges from "./TrustBadges";

export default function Skills() {
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

  return (
    <section className="relative select-none py-28 bg-background text-foreground overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_50%_0%,rgba(99,102,241,0.12),transparent_45%)]"
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
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
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="group rounded-2xl border border-border bg-foreground/30  hover:bg-[rgb(var(--border))] active:bg-[rgb(var(--border))] backdrop-blur p-8 hover:-translate-z-2 hover:scale-105 active:duration-500 active:scale-105 active:-translate-y-1 transition-all duration-500 active:transition-transform"
            >
              <h3 className="text-xl font-bold mb-6 flex text-foreground items-center gap-3">
                <span className="w-1 h-6 rounded-full bg-indigo-500" />
                {category.category}
              </h3>

              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 group">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 group-hover:bg-indigo-600 transition" />
                    <span className="text-foreground hover:text-indigo-500 group-hover:text-foreground transition">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech Stack Visual */}
        <div className="mt-24 pt-16 border-t border-white/10 text-center">
          <TrustBadges />
        </div>

        {/* Proficiency */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-2 mb-12">
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Proficiency{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
                  Level
                </span>
              </h3>
              <p className="text-sm sm:text-base text-white/60">
                Focused expertise with a backend-first mindset.
              </p>
            </div>

            {/* Skill Bars */}
            <div className="space-y-6" role="list">
              {[
                { skill: "Backend Development", level: 90 },
                { skill: "Full-Stack MERN", level: 85 },
                { skill: "System Design", level: 80 },
                { skill: "API Security", level: 85 },
                { skill: "Frontend (React / Next.js)", level: 80 },
              ].map((item) => {
                const segments = 20;
                const filled = Math.floor((item.level / 100) * segments);

                return (
                  <div
                    key={item.skill}
                    role="listitem"
                    className="group rounded-xl border border-border bg-white/5 px-6 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 active:-translate-y-1 hover:bg-white/10 hover:shadow-[0_0_28px_rgba(99,102,241,0.25)]"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold text-foreground">
                        {item.skill}
                      </span>
                      <span className="text-sm font-semibold text-foreground tabular-nums">
                        {item.level}%
                      </span>
                    </div>

                    <div className="flex gap-1.5 ">
                      {Array.from({ length: segments }).map((_, i) => (
                        <span
                          key={i}
                          className={`h-2.5 flex-1 rounded-sm ${
                            i < filled
                              ? "bg-indigo-500 shadow-[0_0_6px_rgba(99,102,241,0.5)]"
                              : "bg-[rgb(var(--border))]"
                          }`}
                        />
                      ))}
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
