"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Activity, GitCommit, Flame, Code2 } from "lucide-react";

// Deterministic LCG — consistent heatmap every render
function seededRand(seed) {
  let s = seed >>> 0;
  return () => {
    s = Math.imul(s, 1664525) + 1013904223 >>> 0;
    return s / 0xffffffff;
  };
}

function generateHeatmap() {
  const rand = seededRand(0xF4AB0803); // fixed seed
  const weeks = 53;
  const data = [];
  for (let w = 0; w < weeks; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      if (w === 52 && d > 1) { week.push(-1); continue; } // future
      const isWeekend = d === 0 || d === 6;
      const isRecent  = w >= 48;
      const chance    = (isWeekend ? 0.40 : 0.73) + (isRecent ? 0.10 : 0);
      if (rand() < chance) {
        const r = rand();
        week.push(r < 0.44 ? 1 : r < 0.72 ? 2 : r < 0.89 ? 3 : 4);
      } else {
        week.push(0);
      }
    }
    data.push(week);
  }
  return data;
}

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const HEATMAP = generateHeatmap();

const CELL_SIZE = 11; // px
const CELL_GAP  = 3;  // px
const CELL_STEP = CELL_SIZE + CELL_GAP; // 14px per week column
const DAY_COL_W = 30; // width of "Mon / Wed / Fri" labels column

function cellBg(level) {
  switch (level) {
    case 0: return "rgba(255,255,255,0.05)";
    case 1: return "rgba(124,184,214,0.30)";
    case 2: return "rgba(124,184,214,0.55)";
    case 3: return "rgba(124,184,214,0.80)";
    case 4: return "rgba(124,184,214,1.00)";
    default: return "transparent";
  }
}

const STATS = [
  { Icon: GitCommit, label: "Contributions",  value: "1000+", sub: "this year"   },
  { Icon: Flame,     label: "Longest Streak", value: "100+",   sub: "days"        },
  { Icon: Activity,  label: "Current Streak", value: "70+",   sub: "days active" },
  { Icon: Code2,     label: "Top Language",   value: "Python",   sub: "& Next.js"},
];

export default function DevActivity() {
  const sectionRef = useRef(null);
  const [inView,    setInView]    = useState(false);
  const [revealed,  setRevealed]  = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.12 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Sweep left-to-right animation
  useEffect(() => {
    if (!inView) return;
    let w = 0;
    const id = setInterval(() => {
      w++;
      setRevealed(w);
      if (w >= HEATMAP.length) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [inView]);

  // Month labels: first week each month appears
  const monthLabels = useMemo(() => {
    const labels = [];
    let last = -1;
    const start = new Date();
    start.setDate(start.getDate() - 53 * 7);
    for (let w = 0; w < 53; w++) {
      const d = new Date(start);
      d.setDate(d.getDate() + w * 7);
      const m = d.getMonth();
      if (m !== last) { labels.push({ w, label: MONTHS[m] }); last = m; }
    }
    return labels;
  }, []);

  return (
    <section
      ref={sectionRef}
      id="activity"
      className="relative py-24 bg-background text-foreground overflow-hidden select-none"
    >
      {/* Ambient dot grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundImage:"radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize:"40px 40px" }} />

      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className={`mb-10 act-fade ${inView ? "act-visible" : ""}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="act-eyebrow">
              <Activity className="w-3 h-3" />Dev Activity
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Coding <span style={{ color:"rgba(255,255,255,0.3)" }}>Footprint</span>
          </h2>
          <p className="mt-3 text-base max-w-lg" style={{ color:"rgba(255,255,255,0.45)" }}>
            A year of consistent commits — every square is a day of building something.
          </p>
          <div className="act-line mt-5" />
        </div>

        {/* Stat cards */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 act-fade ${inView ? "act-visible" : ""}`}
          style={{ animationDelay:"0.10s" }}>
          {STATS.map(({ Icon, label, value, sub }) => (
            <div key={label} className="act-stat">
              <Icon className="w-4 h-4 mb-1" style={{ color:"rgba(124,184,214,0.7)" }} />
              <div className="act-stat-value">{value}</div>
              <div className="act-stat-label">{label}</div>
              <div className="act-stat-sub">{sub}</div>
            </div>
          ))}
        </div>

        {/* Heatmap card */}
        <div className={`act-card act-fade ${inView ? "act-visible" : ""}`}
          style={{ animationDelay:"0.18s" }}>

          {/* Month labels row */}
          <div className="relative h-5 mb-1" style={{ marginLeft: DAY_COL_W }}>
            {monthLabels.map(({ w, label }) => (
              <span
                key={w}
                className="absolute text-xs"
                style={{ left: w * CELL_STEP, color:"rgba(255,255,255,0.3)", fontSize:".62rem" }}
              >
                {label}
              </span>
            ))}
          </div>

          {/* Grid + day labels */}
          <div className="flex gap-0 overflow-x-auto act-scroll">
            {/* Day labels */}
            <div
              className="flex flex-col justify-between shrink-0"
              style={{ width: DAY_COL_W, paddingTop:2, gap: CELL_GAP }}
            >
              {["","Mon","","Wed","","Fri",""].map((d, i) => (
                <div key={i} style={{ height: CELL_SIZE, fontSize:".6rem", color:"rgba(255,255,255,0.25)", lineHeight:`${CELL_SIZE}px` }}>
                  {d}
                </div>
              ))}
            </div>

            {/* Week columns */}
            <div
              className="flex shrink-0"
              style={{ gap: CELL_GAP }}
            >
              {HEATMAP.map((week, w) => (
                <div key={w} className="flex flex-col" style={{ gap: CELL_GAP }}>
                  {week.map((level, d) => (
                    <div
                      key={d}
                      title={level > 0 ? `${level * 3} contributions` : level === 0 ? "No contributions" : undefined}
                      style={{
                        width:  CELL_SIZE,
                        height: CELL_SIZE,
                        borderRadius: 2,
                        background: w < revealed ? cellBg(level) : "transparent",
                        transition: `background 0.25s ease ${d * 0.025}s`,
                        flexShrink: 0,
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-2 mt-4 justify-end">
            <span style={{ fontSize:".62rem", color:"rgba(255,255,255,0.3)" }}>Less</span>
            {[0,1,2,3,4].map(l => (
              <div key={l} style={{ width:11, height:11, borderRadius:2, background:cellBg(l), flexShrink:0 }} />
            ))}
            <span style={{ fontSize:".62rem", color:"rgba(255,255,255,0.3)" }}>More</span>
          </div>
        </div>

      </div>

      <style>{`
        .act-fade    { opacity:0; transform:translateY(20px); transition:opacity .65s cubic-bezier(.22,.68,0,1.1), transform .65s cubic-bezier(.22,.68,0,1.1); }
        .act-visible { opacity:1; transform:translateY(0); }

        .act-eyebrow { display:inline-flex; align-items:center; gap:6px; padding:4px 12px; border-radius:9999px;
          border:1px solid rgba(255,255,255,0.12); background:rgba(255,255,255,0.05);
          font-size:.7rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:rgba(255,255,255,0.55); }

        .act-line { height:1px; background:linear-gradient(90deg,rgba(255,255,255,0.15),transparent); }

        .act-stat { display:flex; flex-direction:column; gap:2px; padding:16px 18px;
          border-radius:12px; border:1px solid rgba(255,255,255,0.08); background:rgba(255,255,255,0.03); }
        .act-stat-value { font-size:1.55rem; font-weight:900; letter-spacing:-.02em; color:rgba(255,255,255,0.92); line-height:1; margin-top:4px; }
        .act-stat-label { font-size:.68rem; font-weight:700; color:rgba(255,255,255,0.45); text-transform:uppercase; letter-spacing:.08em; margin-top:6px; }
        .act-stat-sub   { font-size:.65rem; color:rgba(255,255,255,0.25); }

        .act-card { padding:22px 24px; border-radius:16px;
          border:1px solid rgba(255,255,255,0.1); background:rgba(8,8,8,0.88);
          backdrop-filter:blur(20px); box-shadow:0 24px 64px rgba(0,0,0,0.5); }

        .act-scroll { scrollbar-width:none; }
        .act-scroll::-webkit-scrollbar { display:none; }
      `}</style>
    </section>
  );
}
