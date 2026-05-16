"use client";

import {
  MapPin,
  Briefcase,
  Building2,
  Calendar,
  Zap,
  Globe,
  Code2,
  Database,
  Bot,
  Shield,
  Layers,
  ChevronRight,
  Star,
  TrendingUp,
  Server,
  Cpu,
  GitBranch,
} from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    role: "AI Agent Developer Intern",
    company: "Tripify Pvt. Ltd.",
    date: "Jan 2025 – Present",
    location: "Remote · Greater Noida",
    current: true,
    type: "Full-Stack + AI",
    icon: Bot,
    accentFrom: "from-emerald-400",
    accentTo: "to-cyan-500",
    glowColor: "rgba(16,185,129,0.25)",
    borderColor: "rgba(16,185,129,0.35)",
    tags: [
      { label: "Supabase", icon: Database },
      { label: "PostgreSQL", icon: Database },
      { label: "AI Agents", icon: Bot },
      { label: "Amadeus API", icon: Globe },
      { label: "Google Ads AI", icon: TrendingUp },
      { label: "Edge Functions", icon: Zap },
    ],
    bullets: [
      {
        icon: Server,
        text: "Built and maintained backend logic for a production travel booking platform using Supabase Edge Functions and PostgreSQL.",
      },
      {
        icon: Globe,
        text: "Integrated third-party travel APIs (including Amadeus) with real-time data handling, rate limiting, retries, and environment-based switching.",
      },
      {
        icon: Bot,
        text: "Developed AI-assisted tools to automate and optimize Google Ads marketing workflows using performance data.",
      },
      {
        icon: Shield,
        text: "Debugged and resolved live production issues using logs and API tracing, improving reliability of flight search and booking flows.",
      },
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Codec Technologies",
    date: "Dec 2025 · 4 Weeks",
    location: "Online",
    current: false,
    type: "Full-Stack",
    icon: Layers,
    accentFrom: "from-indigo-400",
    accentTo: "to-violet-500",
    glowColor: "rgba(99,102,241,0.2)",
    borderColor: "rgba(99,102,241,0.3)",
    tags: [
      { label: "MongoDB", icon: Database },
      { label: "Express.js", icon: Server },
      { label: "React", icon: Code2 },
      { label: "Node.js", icon: Cpu },
      { label: "JWT Auth", icon: Shield },
      { label: "REST APIs", icon: GitBranch },
    ],
    bullets: [
      {
        icon: Layers,
        text: "Built full-stack features using the MERN stack (MongoDB, Express.js, React, Node.js).",
      },
      {
        icon: Code2,
        text: "Developed responsive React components using hooks, routing, and reusable UI patterns.",
      },
      {
        icon: Server,
        text: "Implemented RESTful APIs with Express.js and Node.js, including middleware and JWT-based authentication.",
      },
      {
        icon: Database,
        text: "Worked with MongoDB and Mongoose for CRUD operations and backend data modeling.",
      },
    ],
  },
];

function FeaturedCard({ exp }) {
  const Icon = exp.icon;
  return (
    <div
      className="relative rounded-2xl overflow-hidden mb-8"
      style={{
        border: `1px solid ${exp.borderColor}`,
        boxShadow: `0 0 60px ${exp.glowColor}, 0 20px 60px rgba(0,0,0,0.3)`,
      }}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          background: `radial-gradient(ellipse at top left, rgba(16,185,129,0.5) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgba(6,182,212,0.4) 0%, transparent 60%)`,
        }}
      />
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative p-8 md:p-10">
        {/* Top bar */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
          <div className="flex items-start gap-5">
            {/* Icon blob */}
            <div
              className="relative shrink-0 flex items-center justify-center rounded-2xl w-16 h-16"
              style={{
                background: `linear-gradient(135deg, rgba(16,185,129,0.2), rgba(6,182,212,0.2))`,
                border: `1px solid rgba(16,185,129,0.3)`,
                boxShadow: `0 0 24px rgba(16,185,129,0.3)`,
              }}
            >
              <Icon className="h-8 w-8 text-emerald-400" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-500 border-2 border-background">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
              </span>
            </div>

            <div>
              <div className="flex items-center gap-3 flex-wrap mb-1">
                <h3
                  className="text-2xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, #34d399, #22d3ee)`,
                  }}
                >
                  {exp.role}
                </h3>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold tracking-wide"
                  style={{
                    background: "rgba(16,185,129,0.15)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    color: "#34d399",
                  }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  CURRENT
                </span>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="inline-flex items-center gap-2 text-base font-semibold text-emerald-400/80">
                  <Building2 className="h-4 w-4" />
                  {exp.company}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                  <MapPin className="h-3.5 w-3.5 text-emerald-500/60" />
                  {exp.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right meta */}
          <div className="flex flex-col gap-2 lg:items-end shrink-0">
            <span
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium"
              style={{
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.2)",
                color: "#6ee7b7",
              }}
            >
              <Calendar className="h-4 w-4" />
              {exp.date}
            </span>
            <span
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium"
              style={{
                background: "rgba(6,182,212,0.08)",
                border: "1px solid rgba(6,182,212,0.2)",
                color: "#67e8f9",
              }}
            >
              <Star className="h-4 w-4" />
              {exp.type}
            </span>
          </div>
        </div>

        {/* Tags row */}
        <div className="flex flex-wrap gap-2 mb-8">
          {exp.tags.map((tag, i) => {
            const TagIcon = tag.icon;
            return (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(16,185,129,0.08)",
                  border: "1px solid rgba(16,185,129,0.15)",
                  color: "#a7f3d0",
                }}
              >
                <TagIcon className="h-3 w-3 text-emerald-400" />
                {tag.label}
              </span>
            );
          })}
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-6"
          style={{
            background:
              "linear-gradient(90deg, rgba(16,185,129,0.4), rgba(6,182,212,0.2), transparent)",
          }}
        />

        {/* Bullets */}
        <ul className="grid md:grid-cols-2 gap-4">
          {exp.bullets.map((b, j) => {
            const BIcon = b.icon;
            return (
              <li
                key={j}
                className="flex gap-3 items-start group/bullet p-3 rounded-xl transition-all duration-200"
                style={{
                  background: "rgba(16,185,129,0.04)",
                  border: "1px solid rgba(16,185,129,0.08)",
                }}
              >
                <span
                  className="mt-0.5 shrink-0 flex items-center justify-center w-7 h-7 rounded-lg"
                  style={{
                    background: "rgba(16,185,129,0.15)",
                    border: "1px solid rgba(16,185,129,0.2)",
                  }}
                >
                  <BIcon className="h-3.5 w-3.5 text-emerald-400" />
                </span>
                <span className="text-sm leading-relaxed text-muted group-hover/bullet:text-foreground transition-colors duration-200">
                  {b.text}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function RegularCard({ exp }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = exp.icon;

  return (
    <div
      className="relative md:pl-14"
      onClick={() => setExpanded(!expanded)}
      style={{ cursor: "pointer" }}
    >
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-0 top-8 z-10 items-center justify-center">
        <span
          className="inline-flex h-4 w-4 rounded-full border-2 items-center justify-center"
          style={{
            borderColor: exp.borderColor,
            background: "rgb(var(--background))",
            boxShadow: `0 0 12px ${exp.glowColor}`,
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "#818cf8" }}
          />
        </span>
      </div>

      <div
        className="group relative rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          border: `1px solid ${exp.borderColor}`,
          boxShadow: expanded ? `0 8px 40px ${exp.glowColor}` : "none",
        }}
      >
        {/* Subtle background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            background: `radial-gradient(ellipse at top left, rgba(99,102,241,0.6) 0%, transparent 70%)`,
          }}
        />

        <div className="relative p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div
                className="shrink-0 flex items-center justify-center rounded-xl w-12 h-12"
                style={{
                  background: `rgba(99,102,241,0.12)`,
                  border: `1px solid rgba(99,102,241,0.2)`,
                }}
              >
                <Icon className="h-6 w-6 text-indigo-400" />
              </div>

              <div>
                <h3
                  className="text-xl font-bold mb-1 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, #a5b4fc, #c4b5fd)`,
                  }}
                >
                  {exp.role}
                </h3>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400">
                    <Building2 className="h-3.5 w-3.5" />
                    {exp.company}
                  </span>
                  <span className="text-muted text-xs flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap sm:flex-col sm:items-end shrink-0">
              <span
                className="inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium"
                style={{
                  background: "rgba(99,102,241,0.1)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  color: "#a5b4fc",
                }}
              >
                <Calendar className="h-3 w-3" />
                {exp.date}
              </span>
              <ChevronRight
                className="h-4 w-4 text-indigo-400 transition-transform duration-300"
                style={{ transform: expanded ? "rotate(90deg)" : "rotate(0)" }}
              />
            </div>
          </div>

          {/* Tags — always visible */}
          <div className="flex flex-wrap gap-2 mt-4">
            {exp.tags.map((tag, i) => {
              const TagIcon = tag.icon;
              return (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium"
                  style={{
                    background: "rgba(99,102,241,0.08)",
                    border: "1px solid rgba(99,102,241,0.15)",
                    color: "#c7d2fe",
                  }}
                >
                  <TagIcon className="h-3 w-3 text-indigo-400" />
                  {tag.label}
                </span>
              );
            })}
          </div>

          {/* Expandable bullets */}
          {expanded && (
            <>
              <div
                className="w-full h-px my-5"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(99,102,241,0.4), transparent)",
                }}
              />
              <ul className="space-y-3">
                {exp.bullets.map((b, j) => {
                  const BIcon = b.icon;
                  return (
                    <li key={j} className="flex gap-3 items-start">
                      <span
                        className="mt-0.5 shrink-0 flex items-center justify-center w-6 h-6 rounded-md"
                        style={{
                          background: "rgba(99,102,241,0.12)",
                          border: "1px solid rgba(99,102,241,0.2)",
                        }}
                      >
                        <BIcon className="h-3 w-3 text-indigo-400" />
                      </span>
                      <span className="text-sm leading-relaxed text-muted">
                        {b.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const current = experiences.filter((e) => e.current);
  const past = experiences.filter((e) => !e.current);

  return (
    <section className="relative select-none isolate bg-background text-foreground pt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-border pt-16">

          {/* Section header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4 tracking-widest uppercase"
              style={{
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.2)",
                color: "#a5b4fc",
              }}
            >
              <Briefcase className="h-3.5 w-3.5" />
              Work History
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              My{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)",
                }}
              >
                Experience
              </span>
            </h2>
            <p className="max-w-2xl text-muted text-lg leading-relaxed">
              Real-world experience building, maintaining, and scaling backend
              systems and production applications.
            </p>
            <div className="section-line mt-4" />
          </div>

          {/* Featured current role */}
          {current.map((exp, i) => (
            <FeaturedCard key={i} exp={exp} />
          ))}

          {/* Past roles with timeline */}
          {past.length > 0 && (
            <>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                  Previous Roles
                </span>
                <div className="flex-1 h-px" style={{ background: "rgba(99,102,241,0.15)" }} />
              </div>

              <div className="relative">
                {/* Vertical line */}
                <div
                  className="hidden md:block absolute left-[7px] top-8 bottom-8 w-px"
                  style={{
                    background: "linear-gradient(to bottom, rgba(99,102,241,0.5), transparent)",
                  }}
                />
                <div className="space-y-6">
                  {past.map((exp, i) => (
                    <RegularCard key={i} exp={exp} />
                  ))}
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </section>
  );
}
