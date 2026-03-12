"use client";

import {
  Mail,
  Github,
  Linkedin,
  Briefcase,
  Target,
  Clock,
  Send,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/farhankhan0986",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/farhan-abid-38967a259/",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:farhankhan080304@gmail.com",
    },
  ];

  const infoCards = [
    {
      title: "Current Role",
      text: "Final-year B.Tech student and Web Developer Intern at Tripify, working on real-world, production-focused web applications.",
      Icon: Briefcase,
    },
    {
      title: "Open To",
      text: "Backend-heavy full-stack roles, software engineering positions, and internship opportunities focused on scalable systems.",
      Icon: Target,
    },
    {
      title: "Availability",
      text: "I usually respond within 24 hours and am happy to discuss opportunities, collaborations, or technical challenges.",
      Icon: Clock,
    },
  ];

  return (
    <section className="relative select-none py-28 bg-background text-foreground overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(700px_circle_at_50%_15%,rgba(99,102,241,0.18),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(400px_circle_at_80%_60%,rgba(139,92,246,0.1),transparent_50%)]"
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {"Let's"}{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <div className="section-line mx-auto" />
        </div>

        {/* Main CTA Glass Card */}
        <div
          className="relative rounded-2xl border border-indigo-500/40 p-10 md:p-14 mb-16 text-center overflow-hidden"
          style={{
            background: "rgba(var(--card), 0.6)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          {/* Inner ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 group-active:-translate-y-1 group-hover:-translate-y-1 -translate-x-1/2 h-48 w-96 rounded-full bg-[rgb(var(--primary))]/10 blur-3xl"
          />

          <p className="relative text-sm font-semibold uppercase tracking-widest text-[rgb(var(--primary))] mb-3">
            {"Let's work together"}
          </p>
          <h3 className="relative text-2xl md:text-3xl font-bold text-foreground mb-4">
            Got a project or opportunity?
          </h3>
          <p className="relative text-muted leading-relaxed max-w-2xl mx-auto mb-8">
            {"I'm always interested in discussing new projects, backend challenges, and engineering opportunities. Whether you have a question or just want to say hi \u2014 my inbox is always open."}
          </p>

          <a
            href="mailto:farhankhan080304@gmail.com"
            className="group/btn relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold text-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:brightness-110 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--primary))] focus-visible:ring-offset-2"
          >
            <Mail className="w-5 h-5 transition-transform duration-300 group-hover/btn:-translate-y-0.5" />
            Send me an Email
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </a>
        </div>

        {/* Social Links */}
        <div className="mb-20 text-center">
          <p className="text-muted mb-6 text-sm">
            Or connect with me on social platforms
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group/social inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-indigo-500/40 text-[rgb(var(--primary))] hover:text-white hover:border-[rgb(var(--primary))]/60 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(99,102,241,0.25)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--primary))]"
                  style={{
                    background: "rgba(var(--card), 0.6)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                >
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover/social:scale-110" />
                  <span className="text-sm font-medium text-foreground group-hover/social:text-white transition-colors duration-300">
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {infoCards.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-indigo-500/40 p-7 text-center transition-all duration-500 active:-translate-y-2 active:shadow-[0_8px_40px_rgba(99,102,241,0.15)] active:border-[rgb(var(--primary))]/40 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(99,102,241,0.15)] hover:border-[rgb(var(--primary))]/40"
              style={{
                background: "rgba(var(--card), 0.6)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              {/* Hover ambient glow */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[rgb(var(--primary))]/5 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Icon in gradient circle */}
              <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[rgb(var(--primary))]/20 to-[rgb(var(--accent))]/20 text-[rgb(var(--primary))] ring-1 ring-[rgb(var(--primary))]/20 transition-all duration-500 active:ring-[rgb(var(--primary))]/40 active:shadow-[0_0_20px_rgba(99,102,241,0.25)] group-hover:ring-[rgb(var(--primary))]/40 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]">
                <item.Icon className="h-6 w-6 transition-transform duration-700 group-active:translate-y-1.5 group-hover:-translate-y-1.5" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
