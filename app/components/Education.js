"use client";

import { useState } from "react";
import { GraduationCap, BookOpen, MapPin, Calendar, Award, TrendingUp, Star, Cpu, ChevronRight } from "lucide-react";

const V = {
  cardBg: "rgba(17,17,17,0.8)",
  border: "rgba(255,255,255,0.08)",
  borderHover: "rgba(255,255,255,0.18)",
  tagBg: "rgba(255,255,255,0.05)",
  tagBorder: "rgba(255,255,255,0.09)",
};

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
  },
];

function FeaturedEducation({ edu }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = edu.icon;
  return (
    <div
      className="group relative rounded-3xl overflow-hidden mb-10 transition-all duration-300"
      style={{
        border: `1px solid ${V.border}`,
        boxShadow: "0 0 80px rgba(0,0,0,0.8), 0 24px 60px rgba(0,0,0,0.5)",
        background: V.cardBg,
        backdropFilter: "blur(20px)",
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = V.borderHover; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = V.border; }}
    >
      {/* Top highlight */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }} />
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="relative p-6 md:p-12">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Left */}
          <div className="flex-1">
            <div 
              className={`flex items-start gap-4 md:gap-5 cursor-pointer md:cursor-auto ${expanded ? "mb-6" : "mb-0"} md:mb-6`}
              onClick={() => setExpanded(!expanded)}
            >
              {/* Icon blob */}
              <div
                className="relative shrink-0 flex items-center justify-center rounded-2xl w-16 h-16"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <Icon className="h-8 w-8 text-foreground" />
                <span
                  className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full"
                  style={{ background: "#22c55e", border: "2px solid #000" }}
                >
                  <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-70" />
                </span>
              </div>

              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold mb-2 tracking-wide"
                  style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", color: "#4ade80" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  Currently Enrolled
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground leading-tight">
                  {edu.title}
                </h3>
              </div>
              {/* Mobile Chevron */}
              <div className="md:hidden shrink-0 mt-2 ml-auto cursor-pointer" onClick={() => setExpanded(!expanded)}>
                <ChevronRight
                  className="h-6 w-6 text-muted transition-transform duration-300"
                  style={{ transform: expanded ? "rotate(90deg)" : "rotate(0)" }}
                />
              </div>
            </div>

            <div className={expanded ? "block mt-6 md:mt-0" : "hidden md:block"}>
            {/* Meta */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold"
                style={{ background: V.tagBg, border: `1px solid ${V.tagBorder}`, color: "rgb(var(--muted))" }}
              >
                <GraduationCap className="h-4 w-4" />
                {edu.institution}
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-muted opacity-70">
                <MapPin className="h-4 w-4" />
                {edu.location}
              </span>
              <span
                className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-sm font-medium"
                style={{ background: V.tagBg, border: `1px solid ${V.tagBorder}`, color: "rgb(var(--muted))" }}
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
                    style={{ background: V.tagBg, border: `1px solid ${V.tagBorder}`, color: "rgb(var(--muted))" }}
                  >
                    <HIcon className="h-3.5 w-3.5" />
                    {h.label}
                  </span>
                );
              })}
            </div>
            </div>
          </div>

          {/* Score card */}
          <div
            className={`lg:w-52 rounded-2xl p-6 flex-col items-center justify-center text-center shrink-0 ${expanded ? "flex" : "hidden md:flex"}`}
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <Award className="h-10 w-10 mb-3 text-muted" />
            <div className="text-5xl font-black tracking-tight mb-1 text-foreground">
              {edu.score}
            </div>
            <div className="text-xs font-semibold text-muted uppercase tracking-widest mb-1">
              {edu.scoreLabel}
            </div>
            {edu.scoreNote && (
              <div
                className="text-xs rounded-full px-3 py-1 mt-2 font-medium"
                style={{ background: V.tagBg, border: `1px solid ${V.tagBorder}`, color: "rgb(var(--muted))" }}
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

function PastEducationCard({ edu }) {
  const Icon = edu.icon;
  return (
    <div className="relative md:pl-14">
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-0 top-8 z-10 items-center justify-center">
        <span
          className="inline-flex h-4 w-4 rounded-full border-2 items-center justify-center"
          style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgb(var(--background))" }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
        </span>
      </div>

      <div
        className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
        style={{ border: `1px solid ${V.border}`, background: V.cardBg, backdropFilter: "blur(12px)" }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = V.borderHover; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.5)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = V.border; e.currentTarget.style.boxShadow = "none"; }}
      >
        <div className="relative p-6 flex flex-col sm:flex-row sm:items-center gap-5">
          {/* Icon */}
          <div
            className="shrink-0 flex items-center justify-center rounded-xl w-12 h-12"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <Icon className="h-6 w-6 text-muted" />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-1 text-foreground">{edu.title}</h3>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-muted">{edu.institution}</span>
              <span className="text-muted opacity-60 flex items-center gap-1 text-sm">
                <MapPin className="h-3 w-3" />
                {edu.location}
              </span>
              <span
                className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium"
                style={{ background: V.tagBg, border: `1px solid ${V.tagBorder}`, color: "rgb(var(--muted))" }}
              >
                <Calendar className="h-3 w-3" />
                {edu.date}
              </span>
            </div>
          </div>

          {/* Score badge */}
          <div
            className="shrink-0 flex flex-col items-center justify-center rounded-xl px-5 py-3"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <span className="text-2xl font-extrabold text-foreground">{edu.score}</span>
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
      {/* Ambient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ background: "radial-gradient(600px circle at 75% 30%, rgba(255,255,255,0.02), transparent 55%)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t pt-16" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          {/* Header */}
          <div className="mb-14">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4 tracking-widest uppercase"
              style={{ background: V.tagBg, border: `1px solid ${V.tagBorder}`, color: "rgb(var(--muted))" }}
            >
              <GraduationCap className="h-3.5 w-3.5" />
              Academics
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              Education{" "}
              <span className="text-foreground opacity-40">Background</span>
            </h2>
            <p className="max-w-2xl text-muted text-lg leading-relaxed">
              Academic foundation supporting my work in software engineering, data systems, and applied AI development.
            </p>
            <div className="section-line mt-4" />
          </div>

          <FeaturedEducation edu={current} />

          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">Earlier Education</span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
          </div>

          <div className="relative">
            <div
              className="hidden md:block absolute left-[7px] top-8 bottom-8 w-px"
              style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)" }}
            />
            <div className="space-y-5">
              {past.map((edu, i) => (
                <PastEducationCard key={i} edu={edu} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
