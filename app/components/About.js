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
    <section className="py-24 bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section label */}
        <p className="text-sm font-mono text-accent mb-4">About</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-balance">
          A developer focused on building things that work at scale
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Bio - 3 cols */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-muted leading-relaxed">
              {"I'm a final-year B.Tech student and Full-Stack Web Developer with a strong focus on backend systems, API design, and security. Currently working as an AI Agent Developer Intern at "}
              <span className="text-foreground font-medium">Tripify India</span>
              {", building production travel booking infrastructure with Supabase Edge Functions and PostgreSQL."}
            </p>

            <p className="text-muted leading-relaxed">
              I enjoy designing systems that handle real-world complexity -- from
              rate limiting and retry logic to role-based access control and
              multi-tenant architectures. My goal is to grow into a
              backend-heavy full-stack engineer building high-impact products.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { value: "5+", label: "Projects" },
                { value: "50k+", label: "Lines Written" },
                { value: "6+", label: "Months at Tripify" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights - 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-border-hover hover:bg-card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-accent-muted">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-sm font-mono text-accent mb-6">Core Competencies</p>
          <div className="flex flex-wrap gap-3">
            {[
              "Backend Architecture",
              "System Design",
              "API Security",
              "Database Design",
              "RESTful APIs",
              "Full-Stack MERN",
              "Next.js",
              "Authentication & RBAC",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-lg text-sm border border-border bg-card text-muted hover:text-foreground hover:border-border-hover transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
