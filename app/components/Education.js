"use client";

import { GraduationCap, BookOpen, MapPin, Calendar, Award, TrendingUp, Star, Cpu } from "lucide-react";

const education = [
  {
    title: "B.Tech – Artificial Intelligence & Data Science",
    institution: "GL Bajaj Institute of Technology and Management",
    date: "2022 – 2026",
    location: "Greater Noida",
    score: "7.8",
    scoreLabel: "CGPA",
    scoreNote: "6th Semester",
    icon: GraduationCap,
    current: true,
    description:
      "Pursuing a four-year engineering degree with a specialization in Artificial Intelligence & Data Science — covering machine learning, data systems, neural networks, and applied software engineering.",
    highlights: [
      { icon: Cpu, label: "AI & ML Focus" },
      { icon: TrendingUp, label: "Consistent Progress" },
      { icon: Star, label: "Active Builder" },
    ],
    accent: { from: "#6366f1", to: "#8b5cf6" },
    glow: "rgba(99,102,241,0.28)",
    border: "rgba(99,102,241,0.35)",
  },
  {
    title: "Class XII – PCM",
    institution: "Lucknow Public School",
    date: "2021 – 2022",
    location: "Lucknow",
    score: "85%",
    scoreLabel: "Score",
    icon: BookOpen,
    done: true,
    accent: { from: "#06b6d4", to: "#3b82f6" },
    border: "rgba(6,182,212,0.3)",
    glow: "rgba(6,182,212,0.15)",
  },
  {
    title: "Class X – Science",
    institution: "Lucknow Public School",
    date: "2019 – 2020",
    location: "Lucknow",
    score: "83%",
    scoreLabel: "Score",
    icon: BookOpen,
    done: true,
    accent: { from: "#10b981", to: "#06b6d4" },
    border: "rgba(16,185,129,0.3)",
    glow: "rgba(16,185,129,0.15)",
  },
];

function FeaturedEducation({ edu }) {
  const Icon = edu.icon;
  return (
    <div
      className="relative rounded-3xl overflow-hidden mb-10"
      style={{
        border: `1px solid ${edu.border}`,
        boxShadow: `0 0 80px ${edu.glow}, 0 24px 60px rgba(0,0,0,0.3)`,
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 10% 20%, ${edu.accent.from}90, transparent 55%), radial-gradient(ellipse at 85% 80%, ${edu.accent.to}70, transparent 55%)`,
        }}
      />
      {/* Grid dots overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative p-8 md:p-12">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left: icon + title */}
          <div className="flex-1">
            <div className="flex items-start gap-5 mb-6">
              {/* Icon blob */}
              <div
                className="relative shrink-0 flex items-center justify-center rounded-2xl w-16 h-16"
                style={{
                  background: `linear-gradient(135deg, ${edu.accent.from}25, ${edu.accent.to}20)`,
                  border: `1px solid ${edu.accent.from}35`,
                  boxShadow: `0 0 28px ${edu.glow}`,
                }}
              >
                <Icon className="h-8 w-8" style={{ color: edu.accent.from }} />
                {/* Live pulse ring */}
                <span
                  className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full"
                  style={{ background: "#10b981", border: "2px solid rgb(var(--background))" }}
                >
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-70" />
                </span>
              </div>

              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold mb-2 tracking-wide"
                  style={{
                    background: "rgba(16,185,129,0.12)",
                    border: "1px solid rgba(16,185,129,0.25)",
                    color: "#34d399",
                  }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Currently Enrolled
                </div>
                <h3
                  className="text-2xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent leading-tight"
                  style={{ backgroundImage: `linear-gradient(135deg, ${edu.accent.from}, ${edu.accent.to})` }}
                >
                  {edu.title}
                </h3>
              </div>
            </div>

            {/* Institution + meta */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold"
                style={{
                  background: `${edu.accent.from}12`,
                  border: `1px solid ${edu.accent.from}25`,
                  color: edu.accent.from,
                }}
              >
                <GraduationCap className="h-4 w-4" />
                {edu.institution}
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-muted">
                <MapPin className="h-4 w-4" style={{ color: `${edu.accent.from}80` }} />
                {edu.location}
              </span>
              <span
                className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-sm font-medium"
                style={{
                  background: `${edu.accent.from}10`,
                  border: `1px solid ${edu.accent.from}20`,
                  color: edu.accent.from,
                }}
              >
                <Calendar className="h-3.5 w-3.5" />
                {edu.date}
              </span>
            </div>

            {/* Description */}
            <p className="text-muted leading-relaxed text-base mb-6">{edu.description}</p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3">
              {edu.highlights.map((h, i) => {
                const HIcon = h.icon;
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold"
                    style={{
                      background: `${edu.accent.from}10`,
                      border: `1px solid ${edu.accent.from}20`,
                      color: edu.accent.from,
                    }}
                  >
                    <HIcon className="h-3.5 w-3.5" />
                    {h.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Right: Score card */}
          <div
            className="lg:w-56 rounded-2xl p-6 flex flex-col items-center justify-center text-center shrink-0"
            style={{
              background: `linear-gradient(135deg, ${edu.accent.from}15, ${edu.accent.to}10)`,
              border: `1px solid ${edu.accent.from}30`,
              boxShadow: `0 0 40px ${edu.glow}`,
            }}
          >
            <Award
              className="h-10 w-10 mb-3"
              style={{ color: edu.accent.from }}
            />
            <div
              className="text-5xl font-black tracking-tight mb-1 bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(135deg, ${edu.accent.from}, ${edu.accent.to})` }}
            >
              {edu.score}
            </div>
            <div className="text-xs font-semibold text-muted uppercase tracking-widest mb-1">
              {edu.scoreLabel}
            </div>
            {edu.scoreNote && (
              <div
                className="text-xs rounded-full px-3 py-1 mt-2 font-medium"
                style={{
                  background: `${edu.accent.from}15`,
                  border: `1px solid ${edu.accent.from}25`,
                  color: edu.accent.from,
                }}
              >
                {edu.scoreNote}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PastEducationCard({ edu, index }) {
  const Icon = edu.icon;
  return (
    <div className="relative md:pl-14">
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-0 top-8 z-10 items-center justify-center">
        <span
          className="inline-flex h-4 w-4 rounded-full border-2 items-center justify-center"
          style={{
            borderColor: edu.border,
            background: "rgb(var(--background))",
            boxShadow: `0 0 10px ${edu.glow}`,
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: edu.accent.from }} />
        </span>
      </div>

      <div
        className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
        style={{
          border: `1px solid ${edu.border}`,
          boxShadow: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 8px 32px ${edu.glow}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Subtle bg */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top left, ${edu.accent.from}80, transparent 65%)`,
          }}
        />

        <div className="relative p-6 flex flex-col sm:flex-row sm:items-center gap-5">
          {/* Icon */}
          <div
            className="shrink-0 flex items-center justify-center rounded-xl w-12 h-12"
            style={{
              background: `${edu.accent.from}15`,
              border: `1px solid ${edu.accent.from}25`,
            }}
          >
            <Icon className="h-6 w-6" style={{ color: edu.accent.from }} />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h3
              className="text-lg font-bold mb-1 bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(135deg, ${edu.accent.from}, ${edu.accent.to})` }}
            >
              {edu.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-foreground opacity-80">{edu.institution}</span>
              <span className="text-muted flex items-center gap-1 text-sm">
                <MapPin className="h-3 w-3" />
                {edu.location}
              </span>
              <span
                className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium"
                style={{
                  background: `${edu.accent.from}10`,
                  border: `1px solid ${edu.accent.from}20`,
                  color: edu.accent.from,
                }}
              >
                <Calendar className="h-3 w-3" />
                {edu.date}
              </span>
            </div>
          </div>

          {/* Score badge */}
          <div
            className="shrink-0 flex flex-col items-center justify-center rounded-xl px-5 py-3"
            style={{
              background: `linear-gradient(135deg, ${edu.accent.from}15, ${edu.accent.to}10)`,
              border: `1px solid ${edu.accent.from}25`,
            }}
          >
            <span
              className="text-2xl font-extrabold bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(135deg, ${edu.accent.from}, ${edu.accent.to})` }}
            >
              {edu.score}
            </span>
            <span className="text-xs text-muted uppercase tracking-wider mt-0.5">{edu.scoreLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  const [current, ...past] = education;

  return (
    <section className="relative isolate select-none bg-background text-foreground pt-10 mb-10">
      {/* Ambient background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at 75% 30%, rgba(99,102,241,0.08), transparent 55%)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-border pt-16">
          {/* Section header */}
          <div className="mb-14">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4 tracking-widest uppercase"
              style={{
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.2)",
                color: "#a5b4fc",
              }}
            >
              <GraduationCap className="h-3.5 w-3.5" />
              Academics
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              Education{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)" }}
              >
                Background
              </span>
            </h2>
            <p className="max-w-2xl text-muted text-lg leading-relaxed">
              Academic foundation supporting my work in software engineering, data systems, and applied AI development.
            </p>
            <div className="section-line mt-4" />
          </div>

          {/* Featured current education */}
          <FeaturedEducation edu={current} />

          {/* Past education with timeline */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">Earlier Education</span>
            <div className="flex-1 h-px" style={{ background: "rgba(99,102,241,0.15)" }} />
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div
              className="hidden md:block absolute left-[7px] top-8 bottom-8 w-px"
              style={{
                background: "linear-gradient(to bottom, rgba(6,182,212,0.5), rgba(16,185,129,0.3), transparent)",
              }}
            />
            <div className="space-y-5">
              {past.map((edu, i) => (
                <PastEducationCard key={i} edu={edu} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
