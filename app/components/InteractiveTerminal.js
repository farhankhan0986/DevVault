"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Terminal, ChevronRight } from "lucide-react";

const PROMPT = "visitor@farhan.dev:~$";

const COMMANDS = {
  help: {
    output: [
      { t: "comment", v: "# Available commands  type one and press Enter" },
      { t: "gap" },
      { t: "cmd-row", cmd: "hi",              desc: "Say hi to Farhan!" },
      { t: "cmd-row", cmd: "whoami",          desc: "Learn about Farhan" },
      { t: "cmd-row", cmd: "skills",          desc: "View tech stack" },
      { t: "cmd-row", cmd: "projects",        desc: "See featured projects" },
      { t: "cmd-row", cmd: "experience",      desc: "Work experience" },
      { t: "cmd-row", cmd: "contact",         desc: "Get in touch" },
      { t: "cmd-row", cmd: "sudo hire farhan",desc: "Make a smart decision" },
      { t: "cmd-row", cmd: "clear",           desc: "Clear the terminal" },
    ],
  },
  hi: {
    output: [
      { t: "text", v: "Hello! I'm Farhan. It's nice to meet you." },
    ],
  },
  whoami: {
    output: [ 
      { t: "comment", v: "# Farhan Abid  Software Engineer" },
      { t: "gap" },
      { t: "kv", k: "Name",       v: "Farhan Abid" },
      { t: "kv", k: "Role",       v: "Software Engineer · Backend-Focused" },
      { t: "kv", k: "Status",     v: "Open to Full-time & Internship Roles" },
      { t: "kv", k: "Internship", v: "AI Agent Developer Intern @ Tripify India" },
      { t: "kv", k: "Education",  v: "B.Tech Computer Science (Final Year)" },
      { t: "kv", k: "Location",   v: "India · Remote-Ready" },
      { t: "gap" },
      { t: "text", v: "I engineer scalable backends, harden APIs, and ship full-stack" },
      { t: "text", v: "products that work in production  not just in demos." },
    ],
  },
  skills: {
    output: [
      { t: "comment", v: "# Tech Stack" },
      { t: "gap" },
      { t: "kv", k: "Languages",  v: "JavaScript · TypeScript · C++" },
      { t: "kv", k: "Frontend",   v: "React.js · Next.js · Tailwind CSS" },
      { t: "kv", k: "Backend",    v: "Node.js · Express.js · REST APIs" },
      { t: "kv", k: "Databases",  v: "MongoDB · PostgreSQL · MySQL · Redis" },
      { t: "kv", k: "Tools",      v: "Git · Postman · Vercel · Prisma · Docker" },
      { t: "kv", k: "AI / LLMs",  v: "OpenAI · Anthropic Claude · Gemini · n8n" },
      { t: "kv", k: "Concepts",   v: "System Design · API Security · Auth · Caching" },
      { t: "gap" },
      { t: "bar", label: "Backend Dev",   level: 90 },
      { t: "bar", label: "Full-Stack",    level: 85 },
      { t: "bar", label: "DB Design",     level: 85 },
      { t: "bar", label: "API Security",  level: 85 },
      { t: "bar", label: "System Design", level: 80 },
    ],
  },
  projects: {
    output: [
      { t: "comment", v: "# Featured Projects" },
      { t: "gap" },
      { t: "proj", name: "DevVault",          tech: "Next.js · MongoDB · Tailwind",  desc: "Personal portfolio with blog, projects & AI tools" },
      { t: "proj", name: "Tripify Dashboard",  tech: "React · Node · PostgreSQL",     desc: "Production internship  booking & analytics platform" },
      { t: "proj", name: "Sentinel Guard",     tech: "Next.js · Redis · Rate-Limiting",desc: "Security middleware: threat engine + IP blocking" },
      { t: "proj", name: "Fact_Check_Agent",   tech: "Next.js · Groq · Tavily",       desc: "AI fact-checker for text, URLs & PDFs" },
      { t: "gap" },
      { t: "text", v: "→  Scroll to #projects for live demos + case studies" },
    ],
  },
  experience: {
    output: [
      { t: "comment", v: "# Work Experience" },
      { t: "gap" },
      { t: "kv", k: "Role",    v: "Web Developer Intern" },
      { t: "kv", k: "Company", v: "Tripify India" },
      { t: "kv", k: "Period",  v: "2025 – Present" },
      { t: "kv", k: "Stack",   v: "React · Node.js · PostgreSQL · REST APIs" },
      { t: "gap" },
      { t: "text", v: "• Building production-grade booking & analytics features" },
      { t: "text", v: "• Designing scalable backend APIs with auth & rate-limiting" },
      { t: "text", v: "• Optimising DB queries and reducing response times by 40%" },
    ],
  },
  contact: {
    output: [
      { t: "comment", v: "# Let's Connect" },
      { t: "gap" },
      { t: "kv", k: "Email",    v: "farhankhan080304@gmail.com" },
      { t: "kv", k: "GitHub",   v: "github.com/farhankhan0986" },
      { t: "kv", k: "LinkedIn", v: "linkedin.com/in/farhan-abid-38967a259" },
      { t: "gap" },
      { t: "text", v: "I reply within 24 hours. Scroll to #contact to send a message." },
    ],
  },
  "sudo hire farhan": {
    output: [
      { t: "comment", v: "# sudo: elevating privilege level to: SMART DECISION" },
      { t: "gap" },
      { t: "text", v: "✅  Candidate: Farhan Abid" },
      { t: "text", v: "✅  Skills: Backend · Full-Stack · System Design · API Security" },
      { t: "text", v: "✅  Work ethic: Production-first, ships fast, codes clean" },
      { t: "text", v: "✅  Availability: Open to full-time & internship roles" },
      { t: "gap" },
      { t: "success", v: "[SUCCESS] Hiring decision executed. Your team just levelled up." },
      { t: "gap" },
      { t: "text", v: "→  Drop a message at #contact or email directly." },
    ],
  },
};

const SUGGESTIONS = Object.keys(COMMANDS);

const WELCOME = [
  { t: "comment", v: "# Welcome to Farhan's Interactive Terminal" },
  { t: "text",    v: "Type  help  to see available commands." },
  { t: "gap" },
];

function renderLine(line, i) {
  switch (line.t) {
    case "comment": return <div key={i} className="trm-comment">{line.v}</div>;
    case "gap":     return <div key={i} className="h-2" />;
    case "text":    return <div key={i} className="trm-text">{line.v}</div>;
    case "success": return <div key={i} className="trm-success">{line.v}</div>;
    case "kv":      return (
      <div key={i} className="trm-kv">
        <span className="trm-key">{line.k}</span>
        <span className="trm-val">{line.v}</span>
      </div>
    );
    case "cmd-row": return (
      <div key={i} className="trm-cmd-row">
        <span className="trm-cmd-name">{line.cmd}</span>
        <span className="trm-cmd-sep"></span>
        <span className="trm-cmd-desc">{line.desc}</span>
      </div>
    );
    case "proj": return (
      <div key={i} className="trm-proj">
        <span className="trm-proj-name">{line.name}</span>
        <span className="trm-proj-tech">{line.tech}</span>
        <span className="trm-proj-desc">{line.desc}</span>
      </div>
    );
    case "bar": return (
      <div key={i} className="trm-bar-row">
        <span className="trm-bar-label">{line.label}</span>
        <div className="trm-bar-track">
          <div className="trm-bar-fill" style={{ width: `${line.level}%` }} />
        </div>
        <span className="trm-bar-pct">{line.level}%</span>
      </div>
    );
    default: return null;
  }
}

function HistoryBlock({ entry }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="trm-prompt">{PROMPT}</span>
        <span className="trm-entered-cmd">{entry.cmd}</span>
      </div>
      <div className="pl-2 border-l border-white/10 ml-1 space-y-0.5">
        {entry.output.map((line, i) => renderLine(line, i))}
      </div>
    </div>
  );
}

export default function InteractiveTerminal() {
  const [input, setInput]         = useState("");
  const [history, setHistory]     = useState([]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [suggestion, setSuggestion] = useState("");
  const inputRef  = useRef(null);
  const bodyRef   = useRef(null);
  const sectionRef= useRef(null);
  const [inView, setInView]       = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const scrollBottom = () => {
    setTimeout(() => { bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" }); }, 30);
  };

  const runCommand = useCallback((raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") { setHistory([]); return; }
    const result = COMMANDS[cmd];
    const output = result
      ? result.output
      : [{ t: "text", v: `bash: ${raw.trim()}: command not found  (try  help )` }];
    setHistory(h => [...h, { cmd: raw.trim(), output }]);
    setCmdHistory(h => [raw.trim(), ...h]);
    setHistoryIdx(-1);
    scrollBottom();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
      setSuggestion("");
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (suggestion) { setInput(suggestion); setSuggestion(""); }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(historyIdx + 1, cmdHistory.length - 1);
      setHistoryIdx(next);
      setInput(cmdHistory[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = historyIdx - 1;
      if (next < 0) { setHistoryIdx(-1); setInput(""); }
      else { setHistoryIdx(next); setInput(cmdHistory[next]); }
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setInput(val);
    setHistoryIdx(-1);
    if (val) {
      const match = SUGGESTIONS.find(s => s.startsWith(val.toLowerCase()) && s !== val.toLowerCase());
      setSuggestion(match ?? "");
    } else {
      setSuggestion("");
    }
  };

  const quickRun = (cmd) => { runCommand(cmd); inputRef.current?.focus(); };

  return (
    <section ref={sectionRef} id="terminal"
      className="relative py-24 bg-background text-foreground overflow-hidden select-none">

      {/* Ambient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]"
          style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.04), transparent 70%)" }} />
      </div>

      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className={`mb-10 trm-section-fade ${inView ? "trm-section-visible" : ""}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="trm-eyebrow"><Terminal className="w-3 h-3" />Interactive Terminal</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Explore <span style={{ color: "rgba(255,255,255,0.3)" }}>My Profile</span>
          </h2>
          <p className="text-muted mt-3 text-base max-w-lg">
            Type commands below to learn about my skills, projects, and experience  like a real dev would.
          </p>
          <div className="section-line mt-5" />
        </div>

        {/* Quick command pills */}
        <div className={`flex flex-wrap gap-2 mb-5 trm-section-fade ${inView ? "trm-section-visible" : ""}`}
          style={{ animationDelay: "0.1s" }}>
          {["help","whoami","skills","projects","sudo hire farhan"].map(cmd => (
            <button key={cmd} onClick={() => quickRun(cmd)} className="trm-quick-pill">
              <ChevronRight className="w-3 h-3 opacity-50" />{cmd}
            </button>
          ))}
        </div>

        {/* Terminal window */}
        <div className={`trm-window trm-section-fade ${inView ? "trm-section-visible" : ""}`}
          style={{ animationDelay: "0.18s" }}>

          {/* Title bar */}
          <div className="trm-titlebar">
            <div className="flex gap-1.5">
              <span className="trm-dot" style={{ background: "#ff5f57" }} />
              <span className="trm-dot" style={{ background: "#febc2e" }} />
              <span className="trm-dot" style={{ background: "#28c840" }} />
            </div>
            <span className="trm-title-text">
              <Terminal className="w-3 h-3" /> farhan@devvault  interactive profile
            </span>
            <span />
          </div>

          {/* Body */}
          <div ref={bodyRef} className="trm-body" onClick={() => inputRef.current?.focus()}>

            {/* Welcome block */}
            <div className="mb-5">
              {WELCOME.map((line, i) => renderLine(line, i))}
            </div>

            {/* Command history */}
            {history.map((entry, i) => <HistoryBlock key={i} entry={entry} />)}

            {/* Input line */}
            <div className="flex items-center gap-2 mt-1">
              <span className="trm-prompt">{PROMPT}</span>
              <div className="relative flex-1 flex items-center">
                {/* Ghost suggestion */}
                {suggestion && input && (
                  <span className="trm-ghost" aria-hidden>
                    {input}<span>{suggestion.slice(input.length)}</span>
                  </span>
                )}
                <input
                  ref={inputRef}
                  value={input}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  className="trm-input"
                  placeholder=""
                  autoComplete="off"
                  spellCheck={false}
                  aria-label="Terminal input"
                />
              </div>
              <span className="trm-blink-cursor" />
            </div>

            {/* Tab hint */}
            {suggestion && (
              <div className="trm-tab-hint">
                Press <kbd>Tab</kbd> to complete: <span className="text-white/70">{suggestion}</span>
              </div>
            )}
          </div>
        </div>

        {/* Keyboard hint */}
        <p className={`text-xs text-muted mt-4 text-center trm-section-fade ${inView ? "trm-section-visible" : ""}`}
          style={{ animationDelay: "0.25s" }}>
          Use <kbd className="trm-kbd">↑</kbd> / <kbd className="trm-kbd">↓</kbd> to navigate history &nbsp;·&nbsp;
          <kbd className="trm-kbd">Tab</kbd> to autocomplete &nbsp;·&nbsp; <kbd className="trm-kbd">Enter</kbd> to run
        </p>
      </div>

      <style>{`
        /* Section fade */
        .trm-section-fade { opacity:0; transform:translateY(20px); transition: opacity .65s cubic-bezier(.22,.68,0,1.1), transform .65s cubic-bezier(.22,.68,0,1.1); }
        .trm-section-visible { opacity:1; transform:translateY(0); }

        /* Eyebrow */
        .trm-eyebrow { display:inline-flex; align-items:center; gap:6px; padding:4px 12px; border-radius:9999px; border:1px solid rgba(255,255,255,0.12); background:rgba(255,255,255,0.05); font-size:.7rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:rgba(255,255,255,0.55); }

        /* Quick pills */
        .trm-quick-pill { display:inline-flex; align-items:center; gap:5px; padding:5px 13px; border-radius:8px; border:1px solid rgba(255,255,255,0.08); background:rgba(255,255,255,0.03); font-size:.72rem; font-weight:600; font-family:'JetBrains Mono','Fira Code',monospace; color:rgba(255,255,255,0.5); transition:border-color .2s, background .2s, color .2s, transform .2s; cursor:pointer; }
        .trm-quick-pill:hover { border-color:rgba(255,255,255,0.18); background:rgba(255,255,255,0.07); color:rgba(255,255,255,0.9); transform:translateY(-2px); }

        /* Window */
        .trm-window { border-radius:16px; overflow:hidden; border:1px solid rgba(255,255,255,0.1); background:rgba(8,8,8,0.92); backdrop-filter:blur(20px); box-shadow:0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04); }

        /* Title bar */
        .trm-titlebar { display:flex; align-items:center; justify-content:space-between; padding:12px 16px; border-bottom:1px solid rgba(255,255,255,0.07); background:rgba(255,255,255,0.02); }
        .trm-dot { width:12px; height:12px; border-radius:50%; }
        .trm-title-text { display:flex; align-items:center; gap:6px; font-size:.7rem; color:rgba(255,255,255,0.28); letter-spacing:.04em; font-family:'JetBrains Mono',monospace; }

        /* Body */
        .trm-body { padding:22px 24px; min-height:280px; max-height:420px; overflow-y:auto; font-family:'JetBrains Mono','Fira Code','Courier New',monospace; font-size:.8rem; line-height:1.7; cursor:text; }
        .trm-body::-webkit-scrollbar { width:4px; }
        .trm-body::-webkit-scrollbar-track { background:transparent; }
        .trm-body::-webkit-scrollbar-thumb { background:rgba(255,255,255,0.1); border-radius:2px; }

        /* Output line types */
        .trm-comment { color:rgba(255,255,255,0.28); }
        .trm-text    { color:rgba(255,255,255,0.55); }
        .trm-success { color:#4ade80; font-weight:700; }
        .trm-kv      { display:flex; gap:12px; }
        .trm-key     { color:rgba(255,255,255,0.35); min-width:100px; flex-shrink:0; }
        .trm-val     { color:rgba(255,255,255,0.75); }
        .trm-cmd-row { display:flex; align-items:baseline; gap:10px; }
        .trm-cmd-name{ color:#7CB8D6; font-weight:700; min-width:160px; flex-shrink:0; }
        .trm-cmd-sep { color:rgba(255,255,255,0.2); }
        .trm-cmd-desc{ color:rgba(255,255,255,0.45); }
        .trm-proj    { display:flex; flex-wrap:wrap; gap:8px; align-items:baseline; margin-bottom:2px; }
        .trm-proj-name{ color:#a3e635; font-weight:700; }
        .trm-proj-tech{ font-size:.72rem; color:rgba(255,255,255,0.3); }
        .trm-proj-desc{ color:rgba(255,255,255,0.5); font-size:.75rem; width:100%; padding-left:4px; }

        /* Bars */
        .trm-bar-row   { display:flex; align-items:center; gap:10px; }
        .trm-bar-label { min-width:110px; color:rgba(255,255,255,0.5); font-size:.75rem; flex-shrink:0; }
        .trm-bar-track { flex:1; height:4px; border-radius:9999px; background:rgba(255,255,255,0.07); overflow:hidden; }
        .trm-bar-fill  { height:100%; border-radius:9999px; background:linear-gradient(90deg,rgba(255,255,255,0.4),rgba(255,255,255,0.85)); transition:width 1s ease; }
        .trm-bar-pct   { font-size:.7rem; color:rgba(255,255,255,0.35); min-width:30px; text-align:right; }

        /* Prompt */
        .trm-prompt { color:#4ade80; font-size:.78rem; font-weight:700; white-space:nowrap; flex-shrink:0; }

        /* Input */
        .trm-input { flex:1; background:transparent; border:none; outline:none; color:rgba(255,255,255,0.88); font-family:inherit; font-size:.8rem; caret-color:transparent; width:100%; position:relative; z-index:1; }
        .trm-entered-cmd { color:rgba(255,255,255,0.88); font-size:.8rem; }

        /* Ghost suggestion */
        .trm-ghost { position:absolute; left:0; top:0; bottom:0; color:transparent; font-size:.8rem; font-family:inherit; pointer-events:none; white-space:pre; }
        .trm-ghost span { color:rgba(255,255,255,0.2); }

        /* Blinking cursor */
        .trm-blink-cursor { display:inline-block; width:8px; height:15px; background:rgba(255,255,255,0.7); border-radius:1px; animation:trmBlink 1.1s step-end infinite; margin-left:1px; }
        @keyframes trmBlink { 0%,100%{opacity:1} 50%{opacity:0} }

        /* Tab hint */
        .trm-tab-hint { font-size:.7rem; color:rgba(255,255,255,0.28); margin-top:6px; margin-left:2px; }
        .trm-tab-hint kbd { background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.1); border-radius:4px; padding:1px 5px; font-family:inherit; color:rgba(255,255,255,0.5); }

        /* KBD */
        .trm-kbd { background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.12); border-radius:4px; padding:1px 6px; font-size:.7rem; color:rgba(255,255,255,0.5); }
      `}</style>
    </section>
  );
}
