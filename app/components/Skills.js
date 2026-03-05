"use client";

import TrustBadges from "./TrustBadges";

export default function Skills() {
  const skillCategories = [
    { category: "Languages", skills: ["JavaScript", "TypeScript", "C++"] },
    { category: "Frontend", skills: ["React.js", "Next.js", "Tailwind CSS"] },
    { category: "Backend", skills: ["Node.js", "Express.js", "REST APIs"] },
    { category: "Database", skills: ["MongoDB", "Mongoose", "MySQL"] },
    { category: "Tools", skills: ["Git/GitHub", "Postman", "Vercel"] },
    { category: "Concepts", skills: ["System Design", "API Security", "Auth"] },
  ];

  const proficiencyData = [
    { skill: "Backend Development", level: 90 },
    { skill: "Full-Stack MERN", level: 85 },
    { skill: "System Design", level: 80 },
    { skill: "API Security", level: 85 },
    { skill: "Frontend (React / Next.js)", level: 80 },
  ];

  return (
    <section className="py-24 bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <p className="text-sm font-mono text-accent mb-4">Skills</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-balance">
          Technical expertise
        </h2>
        <p className="text-muted max-w-2xl mb-14">
          A focused overview of my technical strengths, tools, and engineering
          fundamentals.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-border-hover hover:bg-card-hover"
            >
              <h3 className="text-sm font-mono text-accent mb-4">
                {category.category}
              </h3>
              <ul className="space-y-2.5">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-20 pt-12 border-t border-border">
          <TrustBadges />
        </div>

        {/* Proficiency */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-sm font-mono text-accent mb-6">Proficiency</p>
          <div className="space-y-4 max-w-3xl">
            {proficiencyData.map((item) => (
              <div key={item.skill} className="group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{item.skill}</span>
                  <span className="text-sm font-mono text-muted">{item.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-border overflow-hidden">
                  <div
                    className="h-full rounded-full bg-accent transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
