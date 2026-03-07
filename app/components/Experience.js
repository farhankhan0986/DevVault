import { MapPin, Briefcase, Building2, Calendar } from "lucide-react";

const experiences = [
  {
    role: "AI Agent Developer Intern",
    company: "Tripify Pvt. Ltd.",
    date: "Jan 2025 – Present",
    location: "Remote (Greater Noida)",
    current: true,
    bullets: [
      "Built and maintained backend logic for a production travel booking platform using Supabase Edge Functions and PostgreSQL.",
      "Integrated third-party travel APIs (including Amadeus) with real-time data handling, rate limiting, retries, and environment-based switching.",
      "Developed AI-assisted tools to automate and optimize Google Ads marketing workflows using performance data.",
      "Debugged and resolved live production issues using logs and API tracing, improving reliability of flight search and booking flows.",
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Codec Technologies",
    date: "Dec 2025 (4 Weeks)",
    location: "Online",
    current: false,
    bullets: [
      "Built full-stack features using the MERN stack (MongoDB, Express.js, React, Node.js).",
      "Developed responsive React components using hooks, routing, and reusable UI patterns.",
      "Implemented RESTful APIs with Express.js and Node.js, including middleware and JWT-based authentication.",
      "Worked with MongoDB and Mongoose for CRUD operations and backend data modeling.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="relative select-none isolate bg-background text-foreground pt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-border pt-16">

          {/* Section header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              My{"  "}
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="max-w-2xl text-muted text-lg">
              Real-world experience building, maintaining, and scaling backend
              systems and production applications.
            </p>
            <div className="section-line mt-3" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="hidden md:block absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/40 to-transparent" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <div key={i} className="relative md:pl-12">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-0 top-6 z-10 items-center justify-center">
                    {exp.current ? (
                      <span className="relative flex h-[14px] w-[14px]">
                        <span className="timeline-dot-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-[14px] w-[14px] rounded-full bg-emerald-500 border-2 border-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                      </span>
                    ) : (
                      <span className="inline-flex h-3 w-3 rounded-full border-2 border-indigo-400 bg-[rgb(var(--background))]" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="group relative rounded-xl border border-indigo-500/40 bg-[rgba(var(--card),0.6)] backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(99,102,241,0.15)] hover:border-indigo-500/30">
                    {/* Hover glow */}
                    <span className="pointer-events-none absolute inset-0 rounded-xl bg-indigo-500/5 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative space-y-4">
                      {/* Top row: role + date badge */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Briefcase className="h-4 w-4 text-indigo-400 shrink-0" />
                          <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(var(--primary),0.1)] border border-[rgba(var(--primary),0.15)] px-3 py-1 text-xs font-medium text-[rgb(var(--primary))] whitespace-nowrap">
                          <Calendar className="h-3 w-3" />
                          {exp.date}
                        </span>
                      </div>

                      {/* Company + location row */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-md bg-[rgba(var(--primary),0.08)] px-3 py-1 text-sm font-medium text-foreground">
                          <Building2 className="h-3.5 w-3.5 text-indigo-400" />
                          {exp.company}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                          <MapPin className="h-3.5 w-3.5 text-indigo-400" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Bullet points */}
                      <ul className="mt-2 space-y-2 text-sm text-muted">
                        {exp.bullets.map((text, j) => (
                          <li key={j} className="flex gap-3 items-start">
                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
