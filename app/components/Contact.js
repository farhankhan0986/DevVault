"use client";

import { Mail, Github, Linkedin, Briefcase, Target, Clock } from "lucide-react";

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

  return (
    <section className="relative py-28 bg-background text-foreground overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_50%_20%,rgba(99,102,241,0.18),transparent_45%)]"
      />

      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Let’s{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full mx-auto" />
        </div>

        {/* Main CTA */}
        <div className="mb-16">
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto mb-8">
            I’m always interested in discussing new projects, backend
            challenges, and engineering opportunities. Whether you have a
            question or just want to say hi — my inbox is always open.
          </p>

          <a
            href="mailto:farhankhan080304@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <Mail className="w-5 h-5" />
            Send me an Email
          </a>
        </div>

        {/* Social links */}
        <div className="mb-20">
          <p className="text-muted mb-6">
            Or connect with me on social platforms
          </p>

          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 hover:-translate-y-1 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 text-indigo-500"
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10 mb-20" />

        <div className="space-y-6">
          {[
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
          ].map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(99,102,241,0.22)]"
            >
              {/* ambient glow */}
              <span className="pointer-events-none absolute inset-0 bg-indigo-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <div className="relative flex flex-col items-center justify-center gap-4 pl-4">
                {/* icon */}
                <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-500 lg:text-white group-hover:text-indigo-500 duration-300 transition-all group-hover:bg-indigo-500/25">
                  <item.Icon className="h-6 w-6 group-hover:w-7 group-hover:h-7 duration-700 group-hover:-translate-y-1 transition-transform group-hover:transition-transform group-hover:duration-700 " />
                </div>

                {/* content */}
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 my-10 mt-20" />
      </div>
    </section>
  );
}
