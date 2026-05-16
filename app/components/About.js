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
      {/* Ambient background glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-[20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(var(--primary),0.10),transparent_70%)]" />
        <div className="absolute bottom-0 left-[10%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(var(--accent),0.08),transparent_70%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            About{" "}
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-600"
              // style={{
              //   backgroundImage:
              //     "linear-gradient(135deg, rgb(var(--primary)), rgb(var(--accent)))",
              // }}
            >
              Me
            </span>
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
              <span
                className="font-medium"
                style={{ color: "rgb(var(--primary))" }}
              >
                backend systems
              </span>
              , API design, and security-focused architectures. Currently
              working as a Web Developer Intern at{" "}
              <span
                className="font-semibold"
                style={{ color: "rgb(var(--primary))" }}
              >
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
                    className="group relative rounded-2xl border border-border p-6 text-center transition-all duration-500 hover:shadow-[0_0_30px_rgba(var(--primary),0.2)]"
                    style={{
                      background: "rgba(var(--card), 0.5)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                    }}
                  >
                    <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-active:opacity-100 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary),0.12),transparent_70%)]" />

                    <div className="relative flex flex-col items-center gap-3">
                      <StatIcon
                        className="w-5 h-5 transition-all duration-300 text-indigo-500 group-active:scale-110 group-hover:scale-110"
                      />
                      <p
                        className="text-3xl font-extrabold tracking-tight bg-clip-text text-indigo-500 transition-transform duration-500 group-active:-translate-y-1 group-hover:-translate-y-1"
                        style={{
                          backgroundImage:
                            "linear-gradient(135deg, rgb(var(--primary)), rgb(var(--accent)))",
                        }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted transition-colors duration-300 group-active:text-foreground group-active:bg-clip-text group-active:bg-gradient-to-r group-active:from-indigo-500 group-active:to-indigo-600 group-hover:text-foreground group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-indigo-600">
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
                  className="group relative overflow-hidden rounded-2xl border border-border p-6 transition-all duration-500 hover:-translate-y-1 active:-translate-y-1 hover:shadow-[0_0_30px_rgba(var(--primary),0.15)]"
                  style={{
                    background: "rgba(var(--card), 0.5)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                >
                  {/* Left accent border */}
                  <span
                    className="absolute left-0 top-0 h-full w-[3px] rounded-full transition-colors duration-500 bg-indigo-500  group-active:bg-indigo-600  group-hover:bg-indigo-600 group-active:shadow-[0_0_12px_rgba(var(--primary),0.6)] group-hover:shadow-[0_0_12px_rgba(var(--primary),0.6)]"
                    
                  />

                  <div className="relative flex items-start gap-4">
                    <div
                      className="shrink-0 p-3 rounded-xl transition-all duration-300 ease-out group-hover:shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(var(--primary), 0.15), rgba(var(--accent), 0.15))",
                      }}
                    >
                      <Icon
                        className="w-6 h-6 transition-all duration-400 ease-out group-active:-translate-y-2 group-hover:-translate-y-2 text-indigo-500 group-active:scale-110 group-hover:scale-110"
                       
                      />
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
        <div className="mt-24 pt-16 border-t border-border">
          <h2 className="text-2xl font-extrabold tracking-tight mb-3">
            Core{" "}
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-600"
              // style={{
              //   backgroundImage:
              //     "linear-gradient(135deg, rgb(var(--primary)), rgb(var(--accent)))",
              // }}
            >
              Competencies
            </span>
          </h2>

          <div className="section-line mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {competencies.map((item) => {
              const CompIcon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-border px-5 py-4 transition-all duration-300
          hover:-translate-y-1 active:-translate-y-1
          hover:bg-card hover:shadow-[0_0_30px_rgba(var(--primary),0.25)]"
                  style={{
                    background: "rgba(var(--card),0.6)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  {/* Glow overlay */}
                  <span
                    className="pointer-events-none absolute inset-0 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "rgba(var(--primary),0.1)" }}
                  />

                  {/* Left accent line */}
                  <span
                    className="absolute left-0 top-0 h-full w-1 transition-all duration-300 bg-indigo-500 group-active:bg-indigo-600 group-hover:bg-indigo-600 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.6)]"
                    
                  />

                  <CompIcon
                    className="relative shrink-0 w-4 h-4 transition-transform duration-300 text-indigo-500  group-active:-translate-z-1 group-active:scale-110 group-hover:-translate-z-1 group-hover:scale-110"
                  />

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
