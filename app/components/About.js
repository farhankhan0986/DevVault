import {
  Code2,
  Zap,
  Shield,
  Cpu,
  Network,
  Database,
  Flame,
  Server,
  Lock,
  Globe,
  Layers,
  Monitor,
} from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Network,
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

  const stats = [
    { value: "15+", label: "Projects Built", icon: Cpu },
    { value: "50k+", label: "Lines of Code", icon: Code2 },
    { value: "100%", label: "Dedication", icon: Flame },
  ];

  const competencies = [
    { label: "Backend Architecture & System Design", icon: Server },
    { label: "API Security & Authentication", icon: Lock },
    { label: "Database Design & Optimization", icon: Database },
    { label: "RESTful API Development", icon: Globe },
    { label: "Full-Stack MERN Development", icon: Layers },
    { label: "Next.js & Modern Frontend", icon: Monitor },
  ];

  return (
    <section className="relative select-none py-28 bg-background text-foreground overflow-hidden">
      {/* Very subtle ambient gradient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-[20%] h-[500px] w-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.025), transparent 70%)" }} />
        <div className="absolute bottom-0 left-[10%] h-[400px] w-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.015), transparent 70%)" }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            About{" "}
            <span className="text-foreground opacity-50">Me</span>
          </h2>
          <div className="section-line" />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-start">
          {/* Bio */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg leading-relaxed text-muted">
              I&apos;m a final-year B.Tech student and{" "}
              <span className="font-semibold text-foreground">
                Full-Stack Web Developer
              </span>{" "}
              with a strong passion for{" "}
              <span className="font-medium text-foreground">
                backend systems
              </span>
              , API design, and security-focused architectures. Currently
              working as a Web Developer Intern at{" "}
              <span className="font-semibold text-foreground">
                Tripify India
              </span>
              , where I build real-world web solutions with production intent.
            </p>

            <p className="text-lg leading-relaxed text-muted">
              I enjoy designing{" "}
              <span className="font-medium text-foreground">
                scalable systems
              </span>
              , working with modern JavaScript frameworks, and building products
              that combine solid business logic with{" "}
              <span className="font-medium text-foreground">
                clean engineering principles
              </span>
              . My goal is to grow into a backend-heavy full-stack engineer
              working on high-impact, large-scale applications.
            </p>

            <p className="text-lg leading-relaxed text-muted">
              Beyond coding, I&apos;m passionate about{" "}
              <span className="font-medium text-foreground">
                system design fundamentals
              </span>
              , learning new technologies, and sharing knowledge with the
              developer community. I believe in writing code that is not just
              functional, but also maintainable, secure, and performant.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-10">
              {stats.map((stat) => {
                const StatIcon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="group relative rounded-2xl border p-6 text-center transition-all duration-300 hover:-translate-y-1"
                    style={{
                      borderColor: "rgba(255,255,255,0.08)",
                      background: "rgba(var(--card), 0.6)",
                      backdropFilter: "blur(12px)",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                  >
                    <div className="relative flex flex-col items-center gap-3">
                      <StatIcon className="w-5 h-5 text-muted transition-all duration-300 group-hover:text-foreground group-hover:scale-110" />
                      <p className="text-3xl font-extrabold tracking-tight text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 active:-translate-y-1"
                  style={{
                    borderColor: "rgba(255,255,255,0.08)",
                    background: "rgba(var(--card), 0.5)",
                    backdropFilter: "blur(12px)",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                >
                  {/* Left accent border */}
                  <span
                    className="absolute left-0 top-0 h-full w-[2px] rounded-full"
                    style={{ background: "rgba(255,255,255,0.2)" }}
                  />

                  <div className="relative flex items-start gap-4">
                    <div
                      className="shrink-0 p-3 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <Icon className="w-6 h-6 text-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mt-24 pt-16 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <h2 className="text-2xl font-extrabold tracking-tight mb-3">
            Core{" "}
            <span className="text-foreground opacity-50">Competencies</span>
          </h2>

          <div className="section-line mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {competencies.map((item) => {
              const CompIcon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group relative flex items-center gap-3 overflow-hidden rounded-xl border px-5 py-4 transition-all duration-300 hover:-translate-y-1 active:-translate-y-1"
                  style={{
                    borderColor: "rgba(255,255,255,0.08)",
                    background: "rgba(var(--card),0.5)",
                    backdropFilter: "blur(8px)",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                >
                  {/* Left accent line */}
                  <span
                    className="absolute left-0 top-0 h-full w-1 transition-all duration-300"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                  />

                  <CompIcon className="relative shrink-0 w-4 h-4 text-muted group-hover:text-foreground group-hover:scale-110 transition-all duration-300" />

                  <span className="relative text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
