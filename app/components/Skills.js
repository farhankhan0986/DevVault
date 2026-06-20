"use client";

import { useEffect, useRef, useState } from "react";
import TrustBadges from "./TrustBadges";
import { Code2, Layout, Server, Database, Wrench, Brain, Bot, Cpu, ExternalLink, Sparkles, Award } from "lucide-react";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

const categoryIcons = {
  Languages: Code2, Frontend: Layout, Backend: Server,
  "SQL Databases": Database, "NoSQL Databases": Database,
  "Tools & Platforms": Wrench, "Core Concepts": Brain,
  "AI & Automation": Bot, LLMs: Cpu,
};

const skillCategories = [
  { category: "Languages", skills: [{ name: "JavaScript", logo: "https://www.svgrepo.com/show/349419/javascript.svg" }, { name: "TypeScript", logo: "https://www.svgrepo.com/show/354478/typescript-icon.svg" }, { name: "Python", logo: "https://www.svgrepo.com/show/354238/python.svg" }] },
  { category: "Frontend", skills: [{ name: "React.js", logo: "https://www.svgrepo.com/show/354259/react.svg" }, { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/white" }, { name: "Tailwind CSS", logo: "https://www.svgrepo.com/show/374118/tailwind.svg" }] },
  { category: "Backend", skills: [{ name: "Node.js", logo: "https://www.svgrepo.com/show/354119/nodejs-icon.svg" }, { name: "Python", logo: "https://www.svgrepo.com/show/354238/python.svg" }, { name: "FastAPI", logo: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg" }] },
  { category: "SQL Databases", skills: [{ name: "PostgreSQL", logo: "https://www.svgrepo.com/show/354200/postgresql.svg" }, { name: "MySQL", logo: "https://www.svgrepo.com/show/373848/mysql.svg" }, { name: "Prisma", logo: "https://www.svgrepo.com/show/374002/prisma.svg" }] },
  { category: "NoSQL Databases", skills: [{ name: "MongoDB", logo: "https://www.svgrepo.com/show/331488/mongodb.svg" }, { name: "Mongoose", logo: "https://icon.icepanel.io/Technology/svg/MongoDB.svg" }, { name: "Redis", logo: "https://www.svgrepo.com/show/303460/redis-logo.svg" }] },
  { category: "Tools & Platforms", skills: [{ name: "Git/GitHub", logo: "https://www.svgrepo.com/show/475654/github-color.svg" }, { name: "Postman", logo: "https://www.svgrepo.com/show/354202/postman-icon.svg" }, { name: "Vercel", logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico" }] },
  { category: "Core Concepts", skills: [{ name: "System Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" }, { name: "API Security", logo: "https://cdn.simpleicons.org/cloudflare/purple" }, { name: "Authentication", logo: "https://cdn.simpleicons.org/auth0/grey" }] },
  { category: "AI & Automation", skills: [{ name: "n8n", logo: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/n8n-color.png" }, { name: "Antigravity", logo: "https://antigravity.google/assets/image/brand/antigravity-icon__full-color.png" }, { name: "Cursor", logo: "https://www.cursor.com/favicon.ico" }] },
  { category: "LLMs", skills: [{ name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" }, { name: "Anthropic", logo: "https://cdn.worldvectorlogo.com/logos/claude-logo.svg" }, { name: "Gemini", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Google_Gemini_icon_2025.svg/1280px-Google_Gemini_icon_2025.svg.png" }] },
];

const proficiencyData = [
  { skill: "Backend Development (Node.js / Python)", level: 90 },
  { skill: "Full-Stack (MERN / Next.js)", level: 85 },
  { skill: "Python & FastAPI", level: 82 },
  { skill: "Frontend (React / Next.js)", level: 80 },
  { skill: "Database Design & Optimisation", level: 85 },
  { skill: "API Security & System Design", level: 85 },
];

const certificatesData = [
  { id: 1, title: "Postman API Fundamentals Student Expert", issuer: "Postman", date: "2025", description: "Completed Postman's API Fundamentals program covering API testing, request building, collections, environments, and automated API workflows.", image: "https://fahadnahar.com/storage/app/public/blogs/k8fWgyHMLbmr4LHm8MBDJVZct3ny55yWT8P8uEUX.jpg", link: "https://badges.parchment.com/public/assertions/TE9PC957Rt6eZtxVuynu2A", tech: ["API Testing", "Postman", "REST APIs"] },
  { id: 2, title: "MongoDB Node.js Developer Path", issuer: "MongoDB University", date: "2025", description: "Learned to build scalable backend applications using MongoDB and Node.js, including CRUD operations, indexing, schema design, and aggregation pipelines.", image: "https://facialix.com/wp-content/uploads/2023/05/curso-gratis-mongoDB-facialix.jpg", link: "https://drive.google.com/file/d/1_R4HHSmT9e3nPGqvNl5T5GAwxI9TCltf/view", tech: ["MongoDB", "Node.js", "Database Design"] },
  { id: 3, title: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", date: "2025", description: "Gained foundational knowledge of cloud computing, AWS core services, security, pricing models, and global infrastructure used in modern cloud applications.", image: "https://zoomgroup.com/public/storage/images/courses/Amazon-Web-Services-slider.webp", link: "https://drive.google.com/file/d/16bJUSWOaC8qkYnQVxjtJRBLOc8N0LK5k/view", tech: ["AWS", "Cloud Computing", "IAM", "EC2"] },
  { id: 4, title: "Python Essentials", issuer: "Cisco Networking Academy", date: "2025", description: "Learned Python programming fundamentals including data structures, control flow, functions, and problem-solving techniques.", image: "https://storage.ghost.io/c/ab/2a/ab2aa77e-39bd-44e8-9ccb-d55a2093edde/content/images/2023/10/Logo_-Cisco.png", link: "https://drive.google.com/file/d/1ldHmMQZLodXTq90n09JgkKIedy0rrfBp/view", tech: ["Python", "Programming Fundamentals", "Data Structures"] },
];

function ProficiencyBar({ item, index, inView }) {
  return (
    <div className="sk-prof-row" style={{ animationDelay: `${index * 0.08}s` }}>
      <div className="sk-prof-header">
        <span className="sk-prof-name">{item.skill}</span>
        <span className="sk-prof-pct">{item.level}%</span>
      </div>
      <div className="sk-prof-track">
        <div
          className="sk-prof-fill"
          style={{ width: inView ? `${item.level}%` : "0%", transitionDelay: `${0.1 + index * 0.1}s` }}
        />
        <div className="sk-prof-glow" style={{ left: inView ? `${item.level}%` : "0%" }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [gridRef, gridInView] = useInView(0.1);
  const [profRef, profInView] = useInView(0.2);
  const [certRef, certInView] = useInView(0.1);

  return (
    <section id="skills" className="relative select-none py-32 bg-background text-foreground overflow-hidden">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(ellipse, #ffffff, transparent 70%)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="sk-eyebrow"><Sparkles className="w-3 h-3" />Skills & Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-2">
            My <span className="sk-dim-text">Tech</span> Stack
          </h2>
          <p className="text-muted text-lg max-w-xl mt-3">A focused overview of my technical strengths across full-stack, Python/FastAPI, mobile, and AI  the right tool for every project.</p>
          <div className="section-line mt-5" />
        </div>

        {/* ── Skill Category Grid ── */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map(({ category, skills }, idx) => {
            const Icon = categoryIcons[category] || Code2;
            return (
              <div
                key={category}
                className={`sk-card ${gridInView ? "sk-card-visible" : ""}`}
                style={{ animationDelay: `${idx * 0.07}s` }}
              >
                <span className="sk-card-num">0{idx + 1}</span>
                <div className="sk-card-header">
                  <div className="sk-card-icon-wrap">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{category}</h3>
                </div>
                <ul className="space-y-2.5 mt-1">
                  {skills.map((skill) => (
                    <li key={skill.name} className="sk-skill-row">
                      <div className="sk-skill-logo-wrap">
                        <img src={skill.logo} alt={skill.name} className="w-4 h-4 object-contain" loading="lazy" />
                      </div>
                      <span className="text-sm font-medium text-muted sk-skill-name">{skill.name}</span>
                    </li>
                  ))}
                </ul>
                <div className="sk-card-shine" />
              </div>
            );
          })}
        </div>

        {/* ── Core Tech Stack (TrustBadges) ── */}
        <div className="mt-24 pt-16 border-t text-center" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <TrustBadges />
        </div>

        {/* ── Proficiency Bars ── */}
        <div ref={profRef} className="mt-24 pt-16 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="sk-eyebrow mb-4 inline-flex"><Sparkles className="w-3 h-3" />Proficiency</span>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
                Skill <span className="sk-dim-text">Depth</span>
              </h3>
              <p className="text-muted leading-relaxed">Focused expertise with a backend-first mindset  these reflect real project experience, not just familiarity.</p>
              <div className="section-line mt-5" />
            </div>
            <div className="space-y-5">
              {proficiencyData.map((item, i) => (
                <ProficiencyBar key={item.skill} item={item} index={i} inView={profInView} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Certifications ── */}
        <div ref={certRef} className="mt-24 pt-16 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="mb-14">
            <span className="sk-eyebrow mb-4 inline-flex"><Award className="w-3 h-3" />Credentials</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
              Licenses & <span className="sk-dim-text">Certifications</span>
            </h2>
            <p className="text-muted text-lg max-w-xl">Professional credentials showcasing continuous learning and verified expertise.</p>
            <div className="section-line mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificatesData.map((cert, i) => (
              <div
                key={cert.id}
                className={`sk-cert-card ${certInView ? "sk-cert-visible" : ""}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="sk-cert-img-wrap">
                  <img src={cert.image} alt={cert.title} className="sk-cert-img" loading="lazy" />
                  <div className="sk-cert-img-overlay" />
                  <span className="sk-cert-badge">{cert.issuer} · {cert.date}</span>
                </div>
                <div className="sk-cert-body">
                  <h3 className="text-lg font-bold text-foreground leading-snug mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">{cert.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cert.tech.map((t) => (
                      <span key={t} className="sk-tech-tag">{t}</span>
                    ))}
                  </div>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="sk-verify-btn">
                    <ExternalLink className="w-3.5 h-3.5" /> Verify Credential
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .sk-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 12px; border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(255,255,255,0.55);
        }
        .sk-dim-text { color: rgba(255,255,255,0.35); }

        /* ── Skill Cards ── */
        .sk-card {
          position: relative; overflow: hidden;
          border-radius: 16px; padding: 24px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(17,17,17,0.75);
          backdrop-filter: blur(14px);
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.55s cubic-bezier(.22,.68,0,1.1), transform 0.55s cubic-bezier(.22,.68,0,1.1), border-color 0.25s, box-shadow 0.25s;
          cursor: default;
        }
        .sk-card.sk-card-visible { opacity: 1; transform: translateY(0); }
        .sk-card:hover { border-color: rgba(255,255,255,0.14); box-shadow: 0 20px 50px rgba(0,0,0,0.45); transform: translateY(-4px); }
        .sk-card-num {
          position: absolute; top: 16px; right: 18px;
          font-size: 0.65rem; font-weight: 800;
          color: rgba(255,255,255,0.1); letter-spacing: 0.05em;
        }
        .sk-card-header { display: flex; align-items: center; gap: 10px; margin-bottom: 18px; }
        .sk-card-icon-wrap {
          padding: 9px; border-radius: 10px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.8);
          transition: background 0.25s, transform 0.25s;
        }
        .sk-card:hover .sk-card-icon-wrap { background: rgba(255,255,255,0.1); transform: scale(1.08); }
        .sk-skill-row {
          display: flex; align-items: center; gap: 10px;
          padding: 6px 8px; border-radius: 8px;
          transition: background 0.2s, padding-left 0.2s;
        }
        .sk-skill-row:hover { background: rgba(255,255,255,0.04); padding-left: 12px; }
        .sk-skill-logo-wrap {
          width: 28px; height: 28px; border-radius: 7px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.07);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: transform 0.2s;
        }
        .sk-skill-row:hover .sk-skill-logo-wrap { transform: scale(1.12); }
        .sk-skill-name { transition: color 0.2s; }
        .sk-skill-row:hover .sk-skill-name { color: rgba(255,255,255,0.9); }
        .sk-card-shine {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(circle at 50% -20%, rgba(255,255,255,0.04), transparent 60%);
        }

        /* ── Proficiency Bars ── */
        .sk-prof-row { opacity: 1; }
        .sk-prof-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
        .sk-prof-name { font-size: 0.875rem; font-weight: 600; color: rgba(255,255,255,0.85); }
        .sk-prof-pct { font-size: 0.75rem; font-weight: 700; color: rgba(255,255,255,0.35); font-variant-numeric: tabular-nums; }
        .sk-prof-track {
          position: relative; height: 5px; border-radius: 9999px;
          background: rgba(255,255,255,0.07); overflow: visible;
        }
        .sk-prof-fill {
          position: absolute; top: 0; left: 0; height: 100%;
          border-radius: 9999px;
          background: linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0.9));
          transition: width 1.1s cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow: 0 0 8px rgba(255,255,255,0.3);
        }
        .sk-prof-glow {
          position: absolute; top: 50%; transform: translate(-50%, -50%);
          width: 10px; height: 10px; border-radius: 50%;
          background: white; opacity: 0.7;
          box-shadow: 0 0 12px 4px rgba(255,255,255,0.4);
          transition: left 1.1s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* ── Cert Cards ── */
        .sk-cert-card {
          border-radius: 18px; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(17,17,17,0.7);
          backdrop-filter: blur(14px);
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.6s cubic-bezier(.22,.68,0,1.1), transform 0.6s cubic-bezier(.22,.68,0,1.1), border-color 0.25s, box-shadow 0.25s;
        }
        .sk-cert-card.sk-cert-visible { opacity: 1; transform: translateY(0); }
        .sk-cert-card:hover { border-color: rgba(255,255,255,0.15); box-shadow: 0 24px 50px rgba(0,0,0,0.5); }
        .sk-cert-img-wrap { position: relative; overflow: hidden; }
        .sk-cert-img { width: 100%; aspect-ratio: 16/7; object-fit: cover; transition: transform 0.5s ease; display: block; }
        .sk-cert-card:hover .sk-cert-img { transform: scale(1.04); }
        .sk-cert-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.85));
        }
        .sk-cert-badge {
          position: absolute; bottom: 12px; left: 14px;
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.07em;
          text-transform: uppercase; color: rgba(255,255,255,0.5);
          padding: 4px 10px; border-radius: 9999px;
          background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
        }
        .sk-cert-body { padding: 22px 24px 24px; }
        .sk-tech-tag {
          font-size: 0.65rem; font-weight: 600;
          padding: 3px 10px; border-radius: 9999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          color: rgba(255,255,255,0.45); letter-spacing: 0.04em;
        }
        .sk-verify-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 9px 20px; border-radius: 10px;
          font-size: 0.8rem; font-weight: 700;
          background: rgb(var(--foreground)); color: rgb(var(--background));
          transition: opacity 0.2s, transform 0.2s;
          text-decoration: none;
        }
        .sk-verify-btn:hover { opacity: 0.88; transform: translateY(-1px); }
        .sk-verify-btn:active { transform: scale(0.96); }
      `}</style>
    </section>
  );
}
