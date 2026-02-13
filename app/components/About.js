import { Code2, Zap, Shield } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Backend Architecture",
      description: "Designing scalable systems with clean, maintainable code",
    },
    {
      icon: Shield,
      title: "API Security",
      description: "Building secure, authenticated, and authorized systems",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
  ];

  return (
    <section className="relative select-none py-28 bg-background text-foreground overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_80%_20%,rgba(99,102,241,0.12),transparent_40%)]"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full" />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-start">
          {/* Bio */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-muted leading-relaxed">
              I'm a final-year B.Tech student and Full-Stack Web Developer with
              a strong passion for backend systems, API design, and
              security-focused architectures. Currently working as a Web
              Developer Intern at{" "}
              <span className="text-indigo-500 font-semibold">
                Tripify India
              </span>
              , where I build real-world web solutions with production intent.
            </p>

            <p className="text-lg text-muted leading-relaxed">
              I enjoy designing scalable systems, working with modern JavaScript
              frameworks, and building products that combine solid business
              logic with clean engineering principles. My goal is to grow into a
              backend-heavy full-stack engineer working on high-impact,
              large-scale applications.
            </p>

            <p className="text-lg text-muted leading-relaxed">
              Beyond coding, I'm passionate about system design fundamentals,
              learning new technologies, and sharing knowledge with the
              developer community. I believe in writing code that is not just
              functional, but also maintainable, secure, and performant.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-10">
              {[
                { value: "5+", label: "Projects Built" },
                { value: "50k+", label: "Lines of Code" },
                { value: "100%", label: "Dedication" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="group relative rounded-xl border border-border bg-card/60 backdrop-blur p-5 text-center transition-all duration-700 group-active:duration-500 active:translate-z-2 active:scale-105  hover:bg-card active:bg-card hover:shadow-[0_0_28px_rgba(99,102,241,0.25)]"
                >
                  <span className="pointer-events-none absolute inset-0 rounded-xl bg-indigo-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                  <p className="relative text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 group-hover:-translate-y-2 group-hover:duration-500 group-hover:transition-transform group-active:transition-transform transition-transform group-active:-translate-y-2 group-active:duration-500 duration-700 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="relative text-sm text-muted mt-2 group-hover:text-indigo-200 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-xl border border-border bg-card/60 backdrop-blur p-6 transition-all duration-500 hover:-translate-y-1 active:-translate-y-1 hover:bg-card hover:shadow-[0_0_36px_rgba(99,102,241,0.28)]"
                >
                  <span className="pointer-events-none absolute inset-0 rounded-xl bg-indigo-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                  <div className="relative flex items-start gap-4">
                    <div className="relative p-3 rounded-lg bg-indigo-500/20 transition-all duration-700 group-hover:bg-indigo-500/30  ">
                      <Icon className="relative w-6 h-6 text-foreground lg:text-foreground group-active:-translate-y-1 group-active:text-indigo-500 group-active:duration-700 group-active:transition-transform transition-transform duration-700 group-hover:text-indigo-500 group-hover:-translate-y-1 group-hover:duration-700  group-hover:transition-transform  " />
                    </div>

                    <div>
                      <h3 className="font-semibold text-xl mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mt-24 pt-16 border-t border-border">
          <h2 className="text-2xl font-extrabold tracking-tight mb-10">
            Core{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 bg-clip-text text-transparent">
              Competencies
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Backend Architecture & System Design",
              "API Security & Authentication",
              "Database Design & Optimization",
              "RESTful API Development",
              "Full-Stack MERN Development",
              "Next.js & Modern Frontend",
            ].map((skill) => (
              <div
                key={skill}
                className="group relative overflow-hidden rounded-xl border border-border bg-card/60 px-6 py-5 transition-all duration-300 hover:-translate-y-1 active:-translate-y-1 hover:bg-card hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]"
              >
                <span className="pointer-events-none absolute inset-0 bg-indigo-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                <span className="absolute left-0 top-0 h-full w-1 bg-indigo-500/70 transition-all duration-300 group-hover:bg-indigo-600 group-active:bg-indigo-600 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]"></span>

                <span className="relative block pl-4 text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-foreground">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
