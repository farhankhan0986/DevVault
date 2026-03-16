import { GraduationCap, BookOpen, MapPin, Calendar } from "lucide-react";

const education = [
  {
    title: "B.Tech – Artificial Intelligence & Data Science",
    institution: "GL Bajaj Institute of Technology and Management",
    date: "2022–2026",
    location: "Greater Noida",
    score: "CGPA: 7.8",
    scoreNote: "6th semester",
    icon: GraduationCap,
    current: true,
  },
  {
    title: "Class XII – PCM",
    institution: "Lucknow Public School",
    date: "2021–2022",
    location: "Lucknow",
    score: "85%",
    icon: BookOpen,
    done: true,
  },
  {
    title: "Class X – Science",
    institution: "Lucknow Public School",
    date: "2019–2020",
    location: "Lucknow",
    score: "83%",
    icon: BookOpen,
    done: true,
  },
];

export default function Education() {
  return (
    <section className="relative isolate bg-background text-foreground pt-10 mb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-border pt-16">
          {/* Section header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Education{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
                Background
              </span>
            </h2>
            <p className="max-w-2xl text-muted text-lg">
              Academic foundation supporting my work in software engineering,
              data systems, and applied development.
            </p>
            <div className="section-line mt-3" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="hidden md:block absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-indigo-500/40 to-transparent" />

            <div className="space-y-10">
              {education.map((edu, i) => {
                const Icon = edu.icon;
                return (
                  <div key={i} className="relative md:pl-12">
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-0 top-6 z-10 items-center justify-center">
                      {edu.current && (
                        <>
                         <span className="timeline-dot-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-[14px] w-[14px] rounded-full bg-emerald-500 border-2 border-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                        </>
                      )}
                      {edu.done && (
                        <span className="inline-flex h-3 w-3 rounded-full border-2 border-indigo-400 bg-[rgb(var(--background))]" />
                      )}
                    </div>

                    {/* Card */}
                    <div className="group relative rounded-2xl border border-indigo-500/40 bg-[rgba(var(--card),0.6)] backdrop-blur-xl p-6 transition-all duration-300 active:-translate-y-1 active:shadow-[0_8px_32px_rgba(99,102,241,0.15)] active:border-indigo-500/30 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(99,102,241,0.15)] hover:border-indigo-500/30">
                      {/* Hover glow */}
                      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-indigo-500/5 blur-2xl opacity-0 transition-opacity duration-500 group-active:opacity-100 group-hover:opacity-100" />

                      <div className="relative space-y-4">
                        {/* Top row: title + score badge */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Icon className="h-4 w-4 text-indigo-400 shrink-0" />
                            <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
                              {edu.title}
                            </h3>
                          </div>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-400 whitespace-nowrap">
                            {edu.score}
                            {edu.scoreNote && (
                              <span className="text-indigo-400/70">
                                ({edu.scoreNote})
                              </span>
                            )}
                          </span>
                        </div>

                        {/* Institution + location + date */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                          <span className="inline-flex items-center gap-1.5 rounded-md bg-[rgba(var(--primary),0.08)] px-3 py-1 text-sm font-medium text-foreground">
                            {edu.institution}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                            <MapPin className="h-3.5 w-3.5 text-indigo-500" />
                            {edu.location}
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-400 whitespace-nowrap">
                            <Calendar className="h-3 w-3" />
                            {edu.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
