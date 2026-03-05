import { MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "AI Agent Developer Intern",
      company: "Tripify Pvt. Ltd.",
      location: "Remote (Greater Noida)",
      period: "Jan 2025 -- Present",
      current: true,
      bullets: [
        "Built and maintained backend logic for a production travel booking platform using Supabase Edge Functions and PostgreSQL.",
        "Integrated third-party travel APIs (including Amadeus) with real-time data handling, rate limiting, retries, and environment-based switching.",
        "Developed AI-assisted tools to automate and optimize Google Ads marketing workflows using performance data.",
        "Debugged and resolved live production issues using logs and API tracing, improving reliability of flight search and booking flows.",
      ],
    },
    {
      title: "MERN Stack Developer Intern",
      company: "Codec Technologies",
      location: "Online",
      period: "Dec 2025 (4 Weeks)",
      current: false,
      bullets: [
        "Built full-stack features using the MERN stack (MongoDB, Express.js, React, Node.js).",
        "Developed responsive React components using hooks, routing, and reusable UI patterns.",
        "Implemented RESTful APIs with Express.js and Node.js, including middleware and JWT-based authentication.",
        "Worked with MongoDB and Mongoose for CRUD operations and backend data modeling.",
      ],
    },
  ];

  return (
    <section className="py-24 bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm font-mono text-accent mb-4">Experience</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 text-balance">
          Where I have worked
        </h2>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[7px] top-3 bottom-0 w-px bg-border" />
              )}

              {/* Timeline dot */}
              <div className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 ${
                exp.current
                  ? "border-accent bg-accent/20"
                  : "border-border bg-card"
              }`}>
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
                )}
              </div>

              {/* Content */}
              <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-border-hover hover:bg-card-hover">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-accent font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1">
                    <span className="text-sm text-muted font-mono">{exp.period}</span>
                    <span className="flex items-center gap-1 text-xs text-muted">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
                      <span className="text-accent mt-1.5 shrink-0">{"--"}</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
