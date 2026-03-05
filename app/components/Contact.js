"use client";

import { Mail, Github, Linkedin, Briefcase, Target, Clock } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/farhankhan0986" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/farhan-abid-38967a259/" },
    { icon: Mail, label: "Email", url: "mailto:farhankhan080304@gmail.com" },
  ];

  return (
    <section className="py-24 bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <p className="text-sm font-mono text-accent mb-4 text-center">Contact</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-center text-balance">
          {"Let's work together"}
        </h2>

        <p className="text-center text-muted leading-relaxed max-w-xl mx-auto mb-10">
          {"I'm always interested in discussing new projects, backend challenges, and engineering opportunities. My inbox is open."}
        </p>

        {/* CTA */}
        <div className="text-center mb-12">
          <a
            href="mailto:farhankhan080304@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-background font-medium hover:opacity-90 transition-opacity"
          >
            <Mail className="w-5 h-5" />
            Send me an Email
          </a>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-3 mb-16">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 rounded-lg border border-border bg-card text-muted hover:text-foreground hover:border-border-hover hover:bg-card-hover transition-all duration-200"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Info cards */}
        <div className="border-t border-border pt-12">
          <div className="space-y-4">
            {[
              {
                title: "Current Role",
                text: "Final-year B.Tech student and AI Agent Developer Intern at Tripify, building production travel booking infrastructure.",
                Icon: Briefcase,
              },
              {
                title: "Open To",
                text: "Backend-heavy full-stack roles, software engineering positions, and internship opportunities.",
                Icon: Target,
              },
              {
                title: "Availability",
                text: "Responds within 24 hours. Happy to discuss opportunities, collaborations, or technical challenges.",
                Icon: Clock,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-border-hover hover:bg-card-hover"
              >
                <div className="p-2.5 rounded-lg bg-accent-muted shrink-0">
                  <item.Icon className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
