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
    <section className="relative py-28 bg-background text-foreground overflow-hidden">
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
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
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
              I'm a final-year B.Tech student and Full-Stack Web Developer with a
              strong passion for backend systems, API design, and
              security-focused architectures. Currently working as a Web
              Developer Intern at{" "}
              <span className="text-indigo-400 font-semibold">
                Tripify Pvt Ltd
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
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { value: "5+", label: "Projects Built" },
                { value: "1+", label: "Years Experience" },
                { value: "100%", label: "Dedication" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 text-center hover:bg-white/10 transition"
                >
                  <p className="text-3xl font-bold text-indigo-400">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted mt-2">{stat.label}</p>
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
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-indigo-500/20">
                      <Icon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted">
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
        <div className="mt-20 pt-16 border-t border-white/10">
          <h3 className="text-2xl font-bold mb-8">Core Competencies</h3>
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
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur px-6 py-4 hover:bg-white/10 hover:-translate-y-0.5 transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
