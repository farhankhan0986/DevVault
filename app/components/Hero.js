import { ArrowRight, Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-screen flex items-center bg-background text-foreground pt-20"
    >
      {/* Subtle gradient accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-full"
      />

      <div className="relative max-w-5xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="flex items-center gap-2 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <span className="text-sm font-mono text-muted">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            id="hero-title"
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] text-balance"
          >
            {"I build backend systems "}
            <span className="text-accent">{"& scalable APIs"}</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl leading-relaxed">
            Full-Stack Developer specializing in backend architecture,
            authentication systems, and production-ready web applications.
            Currently building at{" "}
            <span className="text-foreground font-medium">Tripify</span>.
          </p>

          {/* Tech line */}
          <p className="mt-4 text-sm font-mono text-muted/70">
            {"Node.js / Express / MongoDB / Next.js / React / PostgreSQL"}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-background font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="https://drive.google.com/file/d/1AjzPsE0kdR_iMpJd5WuSoxyJ9TskEfvH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:border-border-hover hover:bg-card transition-all duration-200"
            >
              Resume
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-3 mt-10">
            {[
              {
                href: "https://github.com/farhankhan0986",
                label: "GitHub",
                Icon: Github,
              },
              {
                href: "https://www.linkedin.com/in/farhan-abid-38967a259/",
                label: "LinkedIn",
                Icon: Linkedin,
              },
              {
                href: "mailto:farhankhan080304@gmail.com",
                label: "Email",
                Icon: Mail,
              },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-lg text-muted hover:text-foreground transition-colors duration-200"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" aria-label="Scroll to about section" className="flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors">
          <span className="text-xs font-mono">scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
