import { MapPin, GraduationCap } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "B.Tech -- Artificial Intelligence & Data Science",
      period: "2022 -- 2026",
      institution: "GL Bajaj Institute of Technology and Management",
      location: "Greater Noida",
      score: "CGPA: 7.8 (6th sem)",
    },
    {
      degree: "Class XII -- PCM",
      period: "2021 -- 2022",
      institution: "Lucknow Public School",
      location: "Lucknow",
      score: "85%",
    },
    {
      degree: "Class X -- Science",
      period: "2019 -- 2020",
      institution: "Lucknow Public School",
      location: "Lucknow",
      score: "83%",
    },
  ];

  return (
    <section className="py-24 bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm font-mono text-accent mb-4">Education</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 text-balance">
          Academic background
        </h2>

        <div className="space-y-4">
          {education.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-border-hover hover:bg-card-hover"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-accent-muted shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.degree}</h3>
                    <p className="text-sm text-muted mt-1">{item.institution}</p>
                    <p className="flex items-center gap-1 text-xs text-muted mt-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 sm:pl-4">
                  <span className="text-sm font-mono text-muted">{item.period}</span>
                  <span className="text-sm font-medium text-accent">{item.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
