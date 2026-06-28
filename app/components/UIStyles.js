"use client";

import { useEffect, useRef, useState } from "react";
import { Palette, ArrowUpRight, Layers } from "lucide-react";
import Link from "next/link";

// ── Mini preview mockups ─────────────────────────────────────────────────────

function MinimalistPreview() {
  return (
    <div style={{ background: "#f9f9f7", width: "100%", height: "100%", padding: "14px 14px 10px", display: "flex", flexDirection: "column", gap: 8, fontFamily: "sans-serif" }}>
      {/* Nav */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ width: 20, height: 2, background: "#111" }} />
        <div style={{ display: "flex", gap: 8 }}>
          {[32, 22, 26].map((w, i) => <div key={i} style={{ width: w, height: 2, background: "#ccc" }} />)}
        </div>
        <div style={{ width: 36, height: 14, borderRadius: 2, border: "1px solid #111", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 18, height: 2, background: "#111" }} />
        </div>
      </div>
      {/* Hero text */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 5 }}>
        <div style={{ fontSize: 5, letterSpacing: "0.12em", textTransform: "uppercase", color: "#999" }}>Creative Studio — 2025</div>
        <div style={{ width: "88%", height: 7, background: "#111", borderRadius: 1 }} />
        <div style={{ width: "65%", height: 7, background: "#111", borderRadius: 1 }} />
        <div style={{ width: "50%", height: 4, background: "#ccc", borderRadius: 1, marginTop: 2 }} />
        <div style={{ marginTop: 6, display: "flex", gap: 5 }}>
          <div style={{ width: 44, height: 16, border: "1px solid #111", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 20, height: 2, background: "#111" }} />
          </div>
          <div style={{ width: 32, height: 16, border: "none", background: "none", display: "flex", alignItems: "center", gap: 2 }}>
            <div style={{ width: 16, height: 2, background: "#999" }} />
            <div style={{ fontSize: 7, color: "#999" }}>↗</div>
          </div>
        </div>
      </div>
      {/* Divider + stat row */}
      <div style={{ borderTop: "1px solid #e8e8e8", paddingTop: 6, display: "flex", gap: 10 }}>
        {[["84", "Projects"], ["12+", "Years"]].map(([n, l], i) => (
          <div key={i} style={{ flex: 1 }}>
            <div style={{ fontSize: 8, fontWeight: 700, color: "#111" }}>{n}</div>
            <div style={{ fontSize: 5, color: "#aaa", letterSpacing: "0.06em", textTransform: "uppercase" }}>{l}</div>
          </div>
        ))}
        <div style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontSize: 9, color: "#555" }}>↓</div>
        </div>
      </div>
    </div>
  );
}

function SaaSPreview() {
  const bars = [45, 62, 55, 80, 70, 88, 78, 92, 82, 96, 88, 100];
  return (
    <div style={{ background: "linear-gradient(155deg,#07080f,#0d0f1c)", width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
      {/* Sidebar */}
      <div style={{ width: 36, background: "rgba(255,255,255,0.025)", borderRight: "1px solid rgba(255,255,255,0.05)", padding: "10px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <div style={{ width: 16, height: 16, borderRadius: 4, background: "rgba(99,102,241,0.7)" }} />
        {[0,1,2,3].map(i => <div key={i} style={{ width: 14, height: 14, borderRadius: 3, background: i===0?"rgba(99,102,241,0.25)":"rgba(255,255,255,0.04)", border: i===0?"1px solid rgba(99,102,241,0.4)":"1px solid transparent" }} />)}
      </div>
      {/* Content */}
      <div style={{ flex: 1, padding: "10px 10px", display: "flex", flexDirection: "column", gap: 7 }}>
        {/* KPI row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4 }}>
          {[["#6366f1","14.2k","MAU"],["#10b981","98.1%","Uptime"],["#f59e0b","4.8★","NPS"]].map(([c,v,l],i) => (
            <div key={i} style={{ background: `${c}11`, border: `1px solid ${c}30`, borderRadius: 5, padding: "4px 5px" }}>
              <div style={{ fontSize: 7, color: c, fontWeight: 700 }}>{v}</div>
              <div style={{ fontSize: 5, color: "rgba(255,255,255,0.3)", letterSpacing: "0.04em", textTransform: "uppercase" }}>{l}</div>
            </div>
          ))}
        </div>
        {/* Chart area */}
        <div style={{ flex: 1, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 6, padding: "6px 8px", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
            <span style={{ fontSize: 6, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>Active Users</span>
            <span style={{ fontSize: 6, color: "#10b981", fontWeight: 600 }}>↑ 34%</span>
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: 2 }}>
            {bars.map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "1.5px 1.5px 0 0", background: i === bars.length-1 ? "rgba(99,102,241,0.85)" : i > bars.length-4 ? "rgba(99,102,241,0.35)" : "rgba(99,102,241,0.15)", minHeight: 2 }} />
            ))}
          </div>
        </div>
        {/* Table row */}
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 5, padding: "5px 7px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ height: 3, width: 50, background: "rgba(255,255,255,0.1)", borderRadius: 1 }} />
          <div style={{ height: 11, width: 30, borderRadius: 3, background: "rgba(99,102,241,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 12, height: 2, background: "#fff", borderRadius: 1 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function GlassPreview() {
  return (
    <div style={{ background: "#0c111e", width: "100%", height: "100%", padding: 12, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: 8 }}>
      {/* Subtle depth circles */}
      <div style={{ position: "absolute", width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.025)", top: -30, right: -20, pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 70, height: 70, borderRadius: "50%", background: "rgba(255,255,255,0.018)", bottom: -10, left: -10, pointerEvents: "none" }} />
      {/* Dot grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "12px 12px", pointerEvents: "none", opacity: 0.5 }} />
      {/* Nav pill */}
      <div style={{ position: "relative", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "5px 8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div style={{ width: 10, height: 10, borderRadius: 3, border: "1px solid rgba(255,255,255,0.3)" }} />
          <div style={{ width: 22, height: 3, background: "rgba(255,255,255,0.55)", borderRadius: 2 }} />
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {[0,1,2].map(i => <div key={i} style={{ width: 14, height: 3, background: "rgba(255,255,255,0.18)", borderRadius: 2 }} />)}
        </div>
      </div>
      {/* Main glass hero card */}
      <div style={{ position: "relative", flex: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "9px 10px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 3, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 9999, padding: "2px 6px", marginBottom: 5 }}>
            <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#4ade80" }} />
            <div style={{ width: 24, height: 2, background: "rgba(255,255,255,0.3)", borderRadius: 1 }} />
          </div>
          <div style={{ height: 5, width: "65%", background: "rgba(255,255,255,0.7)", borderRadius: 3, marginBottom: 4 }} />
          <div style={{ height: 3, width: "45%", background: "rgba(255,255,255,0.25)", borderRadius: 2 }} />
        </div>
        <div>
          <div style={{ height: 2, background: "rgba(255,255,255,0.08)", borderRadius: 9999, marginBottom: 6 }}>
            <div style={{ width: "33%", height: "100%", background: "rgba(255,255,255,0.55)", borderRadius: 9999 }} />
          </div>
          {[80, 90, 65].map((w, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: i < 2 ? 4 : 0 }}>
              <div style={{ width: 10, height: 2, background: "rgba(255,255,255,0.2)", borderRadius: 1 }} />
              <div style={{ width: 1, height: 8, background: "rgba(255,255,255,0.08)" }} />
              <div style={{ flex: 1, height: 2, background: `rgba(255,255,255,${0.35 - i * 0.08})`, borderRadius: 1, maxWidth: `${w}%` }} />
            </div>
          ))}
        </div>
      </div>
      {/* Bottom row: two mini cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, position: "relative" }}>
        <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 8, padding: "7px 8px" }}>
          <div style={{ height: 2, width: "40%", background: "rgba(255,255,255,0.2)", borderRadius: 1, marginBottom: 5 }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ height: 4, width: 16, background: "rgba(255,255,255,0.6)", borderRadius: 2 }} />
            <div style={{ height: 1, flex: 1, background: "rgba(255,255,255,0.12)", margin: "0 4px" }} />
            <div style={{ height: 4, width: 16, background: "rgba(255,255,255,0.6)", borderRadius: 2 }} />
          </div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 8, padding: "7px 8px" }}>
          <div style={{ height: 2, width: "50%", background: "rgba(255,255,255,0.2)", borderRadius: 1, marginBottom: 5 }} />
          <div style={{ height: 4, width: "70%", background: "rgba(255,255,255,0.6)", borderRadius: 2, marginBottom: 4 }} />
          <div style={{ height: 2, background: "rgba(255,255,255,0.07)", borderRadius: 9999 }}>
            <div style={{ width: "56%", height: "100%", background: "rgba(255,255,255,0.45)", borderRadius: 9999 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function NeumorphismPreview() {
  const BG  = "#e8e3db";
  const ACT = "#8b6f5e";
  const sh  = "5px 5px 12px #c5bfb6, -5px -5px 12px #ffffff";
  const shIn = "inset 4px 4px 10px #c5bfb6, inset -4px -4px 10px #ffffff";
  return (
    <div style={{ background: BG, width: "100%", height: "100%", padding: 12, display: "flex", flexDirection: "column", gap: 10 }}>
      {/* Album art card */}
      <div style={{ background: BG, borderRadius: 14, boxShadow: sh, padding: 10, display: "flex", gap: 10, alignItems: "center" }}>
        {/* Art square with inset */}
        <div style={{ width: 46, height: 46, borderRadius: 10, background: BG, boxShadow: shIn, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, background: "#d9d3cb" }} />
            <div style={{ position: "absolute", top: 0, left: 0, width: "50%", height: "100%", background: "#cec7be" }} />
            <div style={{ position: "absolute", inset: "25%", borderRadius: "50%", background: "#bfb8ae" }} />
            <div style={{ position: "absolute", top: "38%", left: "38%", width: "24%", height: "24%", borderRadius: "50%", background: BG }} />
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ height: 5, width: "70%", background: "rgba(0,0,0,0.18)", borderRadius: 3, marginBottom: 4 }} />
          <div style={{ height: 3, width: "50%", background: "rgba(0,0,0,0.08)", borderRadius: 2 }} />
        </div>
        {/* Heart button */}
        <div style={{ width: 28, height: 28, borderRadius: 8, background: BG, boxShadow: shIn, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 10, color: ACT }}>♥</span>
        </div>
      </div>

      {/* Progress inset */}
      <div style={{ background: BG, borderRadius: 9999, height: 6, boxShadow: shIn, overflow: "hidden" }}>
        <div style={{ width: "42%", height: "100%", background: ACT, opacity: 0.7, borderRadius: 9999 }} />
      </div>

      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        {[["⏮",30,9], ["⏸",42,12], ["⏭",30,9]].map(([icon, size, r], i) => (
          <div key={i} style={{ width: size, height: size, borderRadius: r, background: BG, boxShadow: i === 1 ? shIn : sh, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: i === 1 ? 12 : 9, color: i === 1 ? ACT : "rgba(0,0,0,0.35)" }}>{icon}</span>
          </div>
        ))}
      </div>

      {/* Volume track */}
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ fontSize: 8, color: "rgba(0,0,0,0.3)" }}>🔈</span>
        <div style={{ flex: 1, height: 4, borderRadius: 9999, background: BG, boxShadow: shIn, position: "relative", overflow: "hidden" }}>
          <div style={{ width: "68%", height: "100%", background: ACT, opacity: 0.6, borderRadius: 9999 }} />
        </div>
        <span style={{ fontSize: 8, color: "rgba(0,0,0,0.3)" }}>🔊</span>
      </div>

      {/* EQ bars */}
      <div style={{ display: "flex", gap: 3, alignItems: "flex-end", height: 22 }}>
        {[55,72,88,64,78,90,70,58,44,62].map((h, i) => (
          <div key={i} style={{ flex: 1, height: "100%", borderRadius: 3, background: BG, boxShadow: "inset 2px 2px 5px #c5bfb6, inset -2px -2px 5px #ffffff", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", bottom: 0, width: "100%", height: `${h}%`, background: ACT, opacity: 0.4, borderRadius: 2 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function BrutalismPreview() {
  const B = "2px solid #000";
  return (
    <div style={{ background: "#fff", width: "100%", height: "100%", display: "flex", flexDirection: "column", overflow: "hidden", fontFamily: "Arial Black, Arial, sans-serif" }}>
      {/* Header */}
      <div style={{ borderBottom: B, display: "flex", alignItems: "center", height: 22 }}>
        <div style={{ padding: "0 8px", borderRight: B, height: "100%", display: "flex", alignItems: "center", gap: 3 }}>
          <span style={{ fontSize: 6.5, fontWeight: 900, letterSpacing: "0.04em" }}>BRUTAL</span>
          <span style={{ fontSize: 6.5, fontWeight: 900, background: "#FFE000", padding: "0 2px" }}>FORM</span>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", padding: "0 8px", gap: 5 }}>
          {["Work","Services","About"].map(l => <span key={l} style={{ fontSize: 5, color: "#555", fontWeight: 700, letterSpacing: "0.06em" }}>{l}</span>)}
        </div>
      </div>

      {/* Hero: text left + manifesto right */}
      <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", flex: 1, borderBottom: B }}>
        <div style={{ borderRight: B, padding: "8px 8px" }}>
          <div style={{ border: B, background: "#FFE000", display: "inline-block", padding: "1px 4px", fontSize: 4.5, fontWeight: 900, marginBottom: 5, letterSpacing: ".06em" }}>● AVAILABLE</div>
          <div style={{ fontSize: 11, fontWeight: 900, lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: 5, textTransform: "uppercase" }}>WE MAKE<br />UGLY<br /><span style={{ background: "#000", color: "#fff", padding: "0 2px" }}>BEAUTIFUL</span></div>
          <div style={{ height: 2.5, background: "#000", marginBottom: 4, width: "90%" }} />
          <div style={{ display: "flex" }}>
            <div style={{ border: B, background: "#000", padding: "3px 7px" }}>
              <span style={{ fontSize: 5.5, fontWeight: 900, color: "#fff", letterSpacing: ".06em" }}>HIRE US ↗</span>
            </div>
            <div style={{ border: B, borderLeft: "none", background: "#FFE000", padding: "3px 6px" }}>
              <span style={{ fontSize: 5.5, fontWeight: 900, letterSpacing: ".04em" }}>WORK</span>
            </div>
          </div>
        </div>
        <div style={{ background: "#000", padding: "7px 7px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ fontSize: 4, color: "#FFE000", letterSpacing: ".12em", marginBottom: 4, fontWeight: 700 }}>MANIFESTO / 001</div>
          <div style={{ fontSize: 6.5, fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em", textTransform: "uppercase" }}>
            &ldquo;DESIGN<br />IS NOT<br />ART.&rdquo;
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 4, display: "flex", gap: 8 }}>
            {[["7+","YRS"],["48","CLI"],["120","PRJ"]].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontSize: 7, fontWeight: 900, color: "#FFE000", letterSpacing: "-0.04em" }}>{n}</div>
                <div style={{ fontSize: 3.5, color: "rgba(255,255,255,0.4)", letterSpacing: ".08em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project table rows */}
      {[["001","REVOLT STUDIO","Brand"],["002","NAKED TRUTH","Editorial"],["003","IRON GRID","Web"]].map(([id, name, cat], i) => (
        <div key={i} style={{ display: "flex", gap: 6, padding: "3.5px 8px", borderBottom: i < 2 ? "1px solid #000" : "none", alignItems: "center" }}>
          <span style={{ fontSize: 4, color: "#bbb", fontWeight: 900, width: 16 }}>{id}</span>
          <span style={{ fontSize: 5.5, fontWeight: 900, flex: 1, letterSpacing: "-0.01em", textTransform: "uppercase" }}>{name}</span>
          <span style={{ fontSize: 4.5, color: "#555" }}>{cat}</span>
          <span style={{ fontSize: 6 }}>→</span>
        </div>
      ))}

      {/* Marquee strip */}
      <div style={{ background: "#000", padding: "2.5px 8px", overflow: "hidden", marginTop: "auto" }}>
        <span style={{ fontSize: 4.5, color: "#FFE000", fontWeight: 900, letterSpacing: ".1em", whiteSpace: "nowrap" }}>BRUTALISM · RAW DESIGN · NO FILTERS · BOLD CHOICES · BRUTALISM · RAW DESIGN ·</span>
      </div>
    </div>
  );
}

function MaterialPreview() {
  const P = "#37474F"; // Blue Grey 700 — warm, sophisticated
  return (
    <div style={{ background: "#F5F5F5", width: "100%", height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* App bar */}
      <div style={{ background: P, padding: "9px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {[0,1,2].map(i => <div key={i} style={{ height: 1.5, background: "#fff", borderRadius: 1, width: i===1?10:14 }} />)}
          </div>
          <div style={{ height: 5, background: "rgba(255,255,255,0.9)", borderRadius: 2, width: 28 }} />
        </div>
        <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 7, color: "#fff", fontWeight: 700 }}>R</span>
        </div>
      </div>
      {/* Tabs */}
      <div style={{ background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.12)", display: "flex", borderBottom: "1px solid #e0e0e0" }}>
        {["Reading","Finished","Discover"].map((t, i) => (
          <div key={t} style={{ flex: 1, padding: "6px 4px", textAlign: "center", borderBottom: i===0?`2px solid ${P}`:"2px solid transparent" }}>
            <span style={{ fontSize: 5, fontWeight: i===0?700:400, color: i===0?P:"rgba(0,0,0,0.5)", letterSpacing: ".04em", textTransform: "uppercase" }}>{t}</span>
          </div>
        ))}
      </div>
      {/* Stats row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 5, padding: "7px 8px" }}>
        {[[P,"3","Reading"],["#2E7D32","18","Finished"],["#1565C0","21","Wishlist"],["#6D4C41","47h","Month"]].map(([c,v,l]) => (
          <div key={l} style={{ background: "#fff", borderRadius: 5, padding: "5px 5px", borderTop: `2px solid ${c}`, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: 7, fontWeight: 700, color: c, letterSpacing: "-0.02em" }}>{v}</div>
            <div style={{ fontSize: 4, color: "rgba(0,0,0,0.45)", marginTop: 1 }}>{l}</div>
          </div>
        ))}
      </div>
      {/* Book list card */}
      <div style={{ background: "#fff", margin: "0 8px", borderRadius: 5, boxShadow: "0 1px 3px rgba(0,0,0,0.1)", overflow: "hidden", flex: 1 }}>
        <div style={{ padding: "5px 8px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <span style={{ fontSize: 5.5, fontWeight: 500 }}>Currently Reading</span>
        </div>
        {[["#EFEBE9",68],["#E8EAF6",23],["#E0F2F1",91]].map(([c, pct], i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 8px", borderBottom: i<2?"1px solid rgba(0,0,0,0.04)":"none" }}>
            <div style={{ width: 16, height: 22, borderRadius: 2, background: c, boxShadow: "0px 1px 2px rgba(0,0,0,0.15)", flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ height: 3.5, background: "#212121", borderRadius: 1.5, width: "70%", marginBottom: 2 }} />
              <div style={{ height: 2.5, background: "rgba(0,0,0,0.35)", borderRadius: 1, width: "50%", marginBottom: 4 }} />
              <div style={{ height: 2.5, background: "#ECEFF1", borderRadius: 9999, overflow: "hidden" }}>
                <div style={{ width: `${pct}%`, height: "100%", background: P, borderRadius: 9999 }} />
              </div>
            </div>
            <span style={{ fontSize: 5, fontWeight: 700, color: P }}>{pct}%</span>
          </div>
        ))}
      </div>
      {/* FAB */}
      <div style={{ position: "absolute", bottom: 14, right: 14, width: 22, height: 22, borderRadius: 7, background: P, boxShadow: "0 3px 8px rgba(0,0,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: 10, color: "#fff", fontWeight: 700, lineHeight: 1 }}>+</span>
      </div>
    </div>
  );
}

function DashboardPreview() {
  const bars = [44, 52, 47, 60, 57, 72, 66, 79, 75, 88, 83, 100];
  const growthPts = [28,34,31,40,38,46,44,53,57,64,60,72,78,88];
  const W = 200, H = 44;
  const linePoints = growthPts.map((v, i) => {
    const x = (i / (growthPts.length - 1)) * W;
    const y = H - (v / 100) * (H - 4);
    return `${x},${y}`;
  }).join(" ");
  const areaPoints = `${linePoints} ${W},${H} 0,${H}`;
  return (
    <div style={{ background: "#f4efe7", width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
      {/* Sidebar */}
      <div style={{ width: 30, background: "#1c1812", padding: "9px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 7 }}>
        <div style={{ width: 14, height: 14, borderRadius: 4, background: "#d97706", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 3 }}>
          <div style={{ width: 7, height: 7, borderRadius: 1, background: "rgba(255,255,255,0.8)" }} />
        </div>
        {[true, false, false, false].map((active, i) => (
          <div key={i} style={{ width: 18, height: 18, borderRadius: 4, background: active ? "rgba(245,240,232,0.1)" : "transparent", borderLeft: active ? "2px solid #d97706" : "2px solid transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 7, height: 7, borderRadius: 1, background: active ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.15)" }} />
          </div>
        ))}
      </div>
      {/* Main */}
      <div style={{ flex: 1, padding: "8px 8px", display: "flex", flexDirection: "column", gap: 5 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ height: 4, width: 52, background: "#1a1714", borderRadius: 1, opacity: 0.7 }} />
          <div style={{ height: 12, width: 24, borderRadius: 3, background: "#1c1812", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 10, height: 2, background: "#f4efe7", borderRadius: 1 }} />
          </div>
        </div>
        {/* KPI row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 3 }}>
          {[["$124k","Revenue"],["3,847","Accounts"],["94.2%","Renewal"]].map(([v,l],i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #e6dfd4", borderTop: i===0?"2px solid #d97706":"2px solid #e8dfd2", borderRadius: 5, padding: "4px 5px" }}>
              <div style={{ fontSize: 5.5, color: "#7d7263", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 1 }}>{l}</div>
              <div style={{ fontSize: 7.5, fontWeight: 700, color: "#1a1714" }}>{v}</div>
            </div>
          ))}
        </div>
        {/* Bar chart */}
        <div style={{ background: "#fff", border: "1px solid #e6dfd4", borderRadius: 5, padding: "5px 6px" }}>
          <div style={{ fontSize: 5.5, color: "#7d7263", marginBottom: 3 }}>Monthly Revenue</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 1.5, height: 28 }}>
            {bars.map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "1px 1px 0 0", background: i === bars.length-1 ? "#d97706" : "#e8c07a", minHeight: 1.5 }} />
            ))}
          </div>
        </div>
        {/* Area chart */}
        <div style={{ background: "#fff", border: "1px solid #e6dfd4", borderRadius: 5, padding: "5px 6px", flex: 1 }}>
          <div style={{ fontSize: 5.5, color: "#7d7263", marginBottom: 2 }}>Account Growth</div>
          <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "100%", overflow: "visible" }} preserveAspectRatio="none">
            <defs>
              <linearGradient id="pGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d97706" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.01" />
              </linearGradient>
            </defs>
            <polygon points={areaPoints} fill="url(#pGrad)" />
            <polyline points={linePoints} fill="none" stroke="#d97706" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AIAssistantPreview() {
  const SIDE = "#1b2431";
  const ACC  = "#1d4ed8";
  return (
    <div style={{ background: "#f8f9fa", width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
      {/* Sidebar */}
      <div style={{ width: 38, background: SIDE, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "8px 6px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ width: 18, height: 18, borderRadius: 4, background: ACC, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 6, color: "#fff", fontWeight: 700 }}>S</span>
          </div>
        </div>
        <div style={{ padding: "6px 5px", flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
          {[true, false, false, false].map((active, i) => (
            <div key={i} style={{ padding: "3px 5px", borderRadius: 4, background: active ? "rgba(255,255,255,0.09)" : "transparent" }}>
              <div style={{ height: 2.5, background: active ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.22)", borderRadius: 1, width: active ? "90%" : `${[80,65,55][i-1] ?? 80}%` }} />
            </div>
          ))}
        </div>
        <div style={{ padding: "6px 5px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 5, color: "#fff", fontWeight: 700 }}>SK</span>
          </div>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Thread header */}
        <div style={{ padding: "6px 10px", borderBottom: "1px solid #e2e6ea", background: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ height: 4, width: 70, background: "#1a1a2e", borderRadius: 2, marginBottom: 2 }} />
            <div style={{ height: 2.5, width: 45, background: "#8492a6", borderRadius: 1 }} />
          </div>
          <div style={{ width: 22, height: 10, borderRadius: 3, background: ACC, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 5, color: "#fff", fontWeight: 600 }}>Share</span>
          </div>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, padding: "8px 10px", display: "flex", flexDirection: "column", gap: 7 }}>
          {/* AI message */}
          <div style={{ display: "flex", gap: 5, alignItems: "flex-start" }}>
            <div style={{ width: 14, height: 14, borderRadius: 4, background: SIDE, flexShrink: 0 }} />
            <div style={{ background: "#fff", border: "1px solid #e2e6ea", borderRadius: "2px 8px 8px 8px", padding: "5px 7px", maxWidth: "78%", boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}>
              <div style={{ height: 3, background: "#2d3748", borderRadius: 1.5, width: 75, marginBottom: 2.5 }} />
              <div style={{ height: 2.5, background: "#a0aec0", borderRadius: 1.5, width: 55, marginBottom: 2.5 }} />
              <div style={{ height: 2.5, background: "#a0aec0", borderRadius: 1.5, width: 40 }} />
            </div>
          </div>
          {/* User message */}
          <div style={{ display: "flex", gap: 5, alignItems: "flex-start", flexDirection: "row-reverse" }}>
            <div style={{ width: 14, height: 14, borderRadius: 4, background: "#dde1e7", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 4, color: "#6b7c93", fontWeight: 700 }}>SK</span>
            </div>
            <div style={{ background: SIDE, borderRadius: "8px 2px 8px 8px", padding: "5px 7px" }}>
              <div style={{ height: 3, background: "rgba(255,255,255,0.8)", borderRadius: 1.5, width: 55 }} />
            </div>
          </div>
          {/* AI typing */}
          <div style={{ display: "flex", gap: 5, alignItems: "flex-start" }}>
            <div style={{ width: 14, height: 14, borderRadius: 4, background: SIDE, flexShrink: 0 }} />
            <div style={{ background: "#fff", border: "1px solid #e2e6ea", borderRadius: "2px 8px 8px 8px", padding: "6px 9px", display: "flex", gap: 3, alignItems: "center" }}>
              {[0,1,2].map(i => <div key={i} style={{ width: 3.5, height: 3.5, borderRadius: "50%", background: "#bcc5d0" }} />)}
            </div>
          </div>
        </div>

        {/* Input */}
        <div style={{ padding: "6px 10px", borderTop: "1px solid #e2e6ea", background: "#fff" }}>
          <div style={{ background: "#f4f6f9", border: "1px solid #dde1e7", borderRadius: 7, height: 20, display: "flex", alignItems: "center", padding: "0 6px", gap: 5 }}>
            <div style={{ flex: 1, height: 2, background: "#dde1e7", borderRadius: 1 }} />
            <div style={{ width: 12, height: 12, borderRadius: 4, background: ACC, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 7, color: "#fff" }}>↑</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EcommercePreview() {
  const INK   = "#1A1A1A";
  const MUTED = "#8A8680";
  const STONE = "#E8E4DE";
  const BRASS = "#B8954A";
  const SURF  = "#FFFFFF";
  const BG    = "#FAFAF8";
  return (
    <div style={{ background: BG, width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
      {/* Sidebar */}
      <div style={{ width: 44, background: SURF, borderRight: `1px solid ${STONE}`, padding: "8px 7px", display: "flex", flexDirection: "column", gap: 0, flexShrink: 0 }}>
        <div style={{ fontSize: 4.5, fontWeight: 700, color: MUTED, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 }}>Category</div>
        {["All", "Furniture", "Textiles", "Kitchen", "Lighting"].map((l, i) => (
          <div key={l} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "3px 0", marginBottom: 1 }}>
            <span style={{ fontSize: 5.5, color: i === 0 ? INK : MUTED, fontWeight: i === 0 ? 700 : 400 }}>{l}</span>
            {i === 0 && <div style={{ width: 6, height: 6, background: INK, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 3, height: 0.8, background: SURF, borderRadius: 1 }} />
            </div>}
          </div>
        ))}
        <div style={{ height: 1, background: STONE, margin: "8px 0" }} />
        <div style={{ fontSize: 4.5, fontWeight: 700, color: MUTED, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 6 }}>Price</div>
        {["Under $50", "$50–$150", "$150+"].map(l => (
          <div key={l} style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }}>
            <div style={{ width: 6, height: 6, border: `1px solid ${STONE}`, background: SURF, flexShrink: 0 }} />
            <span style={{ fontSize: 5, color: MUTED }}>{l}</span>
          </div>
        ))}
        <div style={{ height: 1, background: STONE, margin: "8px 0" }} />
        <div style={{ fontSize: 4.5, fontWeight: 700, color: MUTED, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 6 }}>Colour</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {["#EDE8E1","#3D3D3A","#C8A87A","#D8D4CE"].map((c, i) => (
            <div key={i} style={{ width: 9, height: 9, borderRadius: "50%", background: c, border: `1px solid ${i === 1 ? INK : STONE}` }} />
          ))}
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Nav */}
        <div style={{ background: SURF, borderBottom: `1px solid ${STONE}`, padding: "6px 10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 7, fontWeight: 800, letterSpacing: ".16em", textTransform: "uppercase" }}>HAUS</span>
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <div style={{ width: 10, height: 10, borderRadius: 1, background: "#f0eeea", border: `1px solid ${STONE}` }} />
            <div style={{ position: "relative" }}>
              <div style={{ width: 10, height: 10, background: "#f0eeea", border: `1px solid ${STONE}` }} />
              <div style={{ position: "absolute", top: -3, right: -3, width: 6, height: 6, borderRadius: "50%", background: INK, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 3, color: SURF, fontWeight: 700 }}>2</span>
              </div>
            </div>
          </div>
        </div>

        {/* Header row */}
        <div style={{ padding: "8px 10px 5px", borderBottom: `1px solid ${STONE}` }}>
          <div style={{ height: 3, background: MUTED, borderRadius: 1, width: 55, marginBottom: 3 }} />
          <div style={{ height: 7, background: INK, borderRadius: 1, width: 80, marginBottom: 3 }} />
          <div style={{ height: 2.5, background: MUTED, borderRadius: 1, width: 40 }} />
        </div>

        {/* 3-col product grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 7, padding: "9px 9px", flex: 1 }}>
          {[
            { bg: "#EDE8E1", dark: false, badge: null,   price: "$89" },
            { bg: "#C8A87A", dark: false, badge: "Sale", price: "$349" },
            { bg: "#F0EEEA", dark: false, badge: "New",  price: "$64" },
            { bg: "#3D3D3A", dark: true,  badge: null,   price: "$129" },
            { bg: "#C8A87A", dark: false, badge: "Sale", price: "$199" },
            { bg: "#D8D4CE", dark: false, badge: null,   price: "$48" },
          ].map((p, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <div style={{ background: p.bg, aspectRatio: "4/5", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "40%", height: "52%", background: p.dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)" }} />
                {p.badge && (
                  <div style={{ position: "absolute", top: 3, left: 3, background: p.badge === "Sale" ? BRASS : SURF, padding: "1.5px 4px" }}>
                    <span style={{ fontSize: 3.5, fontWeight: 700, color: p.badge === "Sale" ? SURF : INK, letterSpacing: ".05em", textTransform: "uppercase" }}>{p.badge}</span>
                  </div>
                )}
              </div>
              <div style={{ height: 3, background: INK, borderRadius: 1, width: "75%" }} />
              <div style={{ height: 2.5, background: STONE, borderRadius: 1, width: "55%" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 1 }}>
                <span style={{ fontSize: 6, fontWeight: 700, color: INK }}>{p.price}</span>
                <div style={{ background: INK, padding: "2px 5px" }}>
                  <span style={{ fontSize: 3.5, color: SURF, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase" }}>Add</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LandingPagePreview() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", overflow: "hidden", background: "#f5f0e8" }}>
      {/* Hero — simulated nature video with dark overlay */}
      <div style={{ flex: "0 0 68%", position: "relative", background: "linear-gradient(170deg,#2a3d28 0%,#1a2e1a 45%,#0f1f10 100%)", overflow: "hidden" }}>
        {/* Simulated foliage texture */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.35 }}>
          {[[12,20,18],[40,8,12],[60,30,16],[80,12,10],[24,40,14],[55,50,12]].map(([x,y,r],i) => (
            <div key={i} style={{ position:"absolute", left:`${x}%`, top:`${y}%`, width: r*2, height: r*2, borderRadius:"50%", background:"rgba(80,110,60,0.6)" }} />
          ))}
        </div>
        {/* Bottom gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(8,8,5,0.82) 0%,rgba(8,8,5,0.2) 55%,transparent 100%)" }} />
        {/* Nav */}
        <div style={{ position: "relative", padding: "8px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 7, fontStyle: "italic", color: "rgba(255,255,255,0.85)", fontFamily: "Georgia, serif", letterSpacing: "0.02em" }}>Terrain</div>
          <div style={{ display: "flex", gap: 6 }}>
            {[22,18,20].map((w,i) => <div key={i} style={{ height: 2, width: w, background: "rgba(255,255,255,0.3)", borderRadius: 1 }} />)}
          </div>
          <div style={{ height: 12, width: 28, border: "1px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ height: 2, width: 14, background: "rgba(255,255,255,0.7)", borderRadius: 1 }} />
          </div>
        </div>
        {/* Hero text */}
        <div style={{ position: "absolute", bottom: 10, left: 12, right: 12 }}>
          <div style={{ height: 2, width: 28, background: "rgba(255,255,255,0.3)", borderRadius: 1, marginBottom: 5 }} />
          <div style={{ height: 7, background: "rgba(255,255,255,0.88)", borderRadius: 1, width: "78%", marginBottom: 3 }} />
          <div style={{ height: 7, background: "rgba(255,255,255,0.88)", borderRadius: 1, width: "58%", marginBottom: 7 }} />
          <div style={{ display: "flex", gap: 5 }}>
            <div style={{ height: 14, width: 46, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ height: 2, width: 22, background: "#1a1814", borderRadius: 1 }} />
            </div>
            <div style={{ height: 14, width: 34, border: "1px solid rgba(255,255,255,0.35)", display: "flex", alignItems: "center", justifyContent: "center", gap: 3 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ fontSize: 4, color: "rgba(255,255,255,0.7)" }}>▶</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Below hero — earthy card strip */}
      <div style={{ flex: 1, padding: "8px 10px", display: "flex", gap: 4 }}>
        {["#d4cbbf","#c5d4c8","#c3cdd6"].map((bg, i) => (
          <div key={i} style={{ flex: 1, background: bg, padding: "6px 7px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <div style={{ height: 3.5, background: "rgba(26,24,20,0.5)", borderRadius: 1, width: "75%", marginBottom: 2 }} />
            <div style={{ height: 2.5, background: "rgba(26,24,20,0.2)", borderRadius: 1, width: "55%" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Style definitions ────────────────────────────────────────────────────────

const UI_STYLES = [
  {
    slug: "landing-page",
    name: "Landing Page UI",
    tagline: "Hero-first. Built to convert.",
    desc: "Hero-first, persuasive layouts designed to convert visitors into leads or customers.",
    useCases: ["Startups", "Products", "Campaigns"],
    Preview: LandingPagePreview,
    accent: "#6366f1",
    theme: "dark",
  },
  {
    slug: "minimalist",
    name: "Minimalist UI",
    tagline: "Less is more.",
    desc: "Clean, spacious, content-first design with generous whitespace and no visual noise.",
    useCases: ["Portfolios", "Blogs", "Docs"],
    Preview: MinimalistPreview,
    accent: "#a3a3a3",
    theme: "light",
  },
  {
    slug: "saas",
    name: "Modern SaaS UI",
    tagline: "Data-rich, dark, powerful.",
    desc: "Dark-themed, analytics-dense interfaces with accent colors, metric cards, and smooth interactions.",
    useCases: ["SaaS Apps", "Analytics", "Dashboards"],
    Preview: SaaSPreview,
    accent: "#6366f1",
    theme: "dark",
  },
  {
    slug: "dashboard",
    name: "Dashboard / Admin",
    tagline: "Dense, clear, actionable.",
    desc: "Data-heavy interfaces with charts, tables, KPI cards, and maximum information density.",
    useCases: ["Admin Panels", "Analytics", "CRMs"],
    Preview: DashboardPreview,
    accent: "#3b82f6",
    theme: "dark",
  },
  {
    slug: "glassmorphism",
    name: "Glassmorphism",
    tagline: "Frosted glass premium.",
    desc: "Frosted glass panels with blur, translucency, and subtle glow — visually rich and premium.",
    useCases: ["Landing Pages", "Music Apps", "Portfolios"],
    Preview: GlassPreview,
    accent: "#a855f7",
    theme: "dark",
  },
  {
    slug: "neumorphism",
    name: "Neumorphism",
    tagline: "Soft, tactile, calm.",
    desc: "Soft extruded UI with light and shadow — tactile, calm, and uniquely modern.",
    useCases: ["Health", "Finance", "Dashboards"],
    Preview: NeumorphismPreview,
    accent: "#6b9fca",
    theme: "light",
  },
  {
    slug: "brutalism",
    name: "Brutalism",
    tagline: "Bold. Raw. Unapologetic.",
    desc: "Raw, high-contrast, unapologetically bold — aesthetics that demand attention and break every rule.",
    useCases: ["Agencies", "Art", "Media"],
    Preview: BrutalismPreview,
    accent: "#ffe000",
    theme: "light",
  },
  {
    slug: "material",
    name: "Material Design",
    tagline: "Structured, elevated, clear.",
    desc: "Google's design system — elevation shadows, expressive colour, and structured, accessible layouts.",
    useCases: ["Mobile Apps", "Enterprise", "Web Apps"],
    Preview: MaterialPreview,
    accent: "#7c3aed",
    theme: "light",
  },
  {
    slug: "ai-assistant",
    name: "AI Assistant UI",
    tagline: "Conversational, focused.",
    desc: "Conversational chat interfaces inspired by ChatGPT and Perplexity — minimal, focused, fast.",
    useCases: ["Chatbots", "AI Tools", "Assistants"],
    Preview: AIAssistantPreview,
    accent: "#8b5cf6",
    theme: "dark",
  },
  {
    slug: "ecommerce",
    name: "E-commerce UI",
    tagline: "Product-first, conversion-ready.",
    desc: "Product-first layouts with clear CTAs, clean cards, and conversion-optimised checkout flows.",
    useCases: ["Stores", "Marketplaces", "Shops"],
    Preview: EcommercePreview,
    accent: "#f97316",
    theme: "light",
  },
];

// ── Card component ───────────────────────────────────────────────────────────

function StyleCard({ style, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const { slug, name, tagline, desc, useCases, Preview, accent, theme } = style;
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/ui-styles/${slug}`}
      className="uis-card"
      style={{
        "--accent": accent,
        transitionDelay: inView ? `${index * 0.055}s` : "0s",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        textDecoration: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`View ${name} demo`}
    >
      {/* Preview area */}
      <div className="uis-preview-wrap">
        <div className="uis-preview-inner">
          <Preview />
        </div>

        {/* Number badge */}
        <span className="uis-num-badge">{num}</span>

        {/* Hover overlay */}
        <div className={`uis-overlay ${hovered ? "uis-overlay-show" : ""}`}>
          <div className="uis-cta-btn">
            View Demo <ArrowUpRight size={13} strokeWidth={2.5} />
          </div>
        </div>

        {/* Bottom gradient fade into card */}
        <div className="uis-preview-fade" />
      </div>

      {/* Card body */}
      <div className="uis-body">
        <div className="uis-accent-dot" style={{ background: accent }} />
        <div className="uis-name-row">
          <h3 className="uis-name">{name}</h3>
          <div className={`uis-arrow ${hovered ? "uis-arrow-active" : ""}`}>
            <ArrowUpRight size={14} strokeWidth={2} />
          </div>
        </div>
        <p className="uis-tagline" style={{ color: accent }}>{tagline}</p>
        <p className="uis-desc">{desc}</p>
        <div className="uis-tags">
          {useCases.map(u => (
            <span key={u} className="uis-tag" style={{ "--t-accent": accent }}>{u}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────

export default function UIStyles() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ui-styles"
      className="relative select-none py-32 bg-background text-foreground overflow-hidden"
    >
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[500px] rounded-full opacity-[0.055]"
          style={{ background: "radial-gradient(ellipse, #6366f1, transparent 70%)" }} />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(ellipse, #8b5cf6, transparent 70%)" }} />
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.018) 1px, transparent 1px)", backgroundSize: "42px 42px" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className={`mb-20 uis-fade ${inView ? "uis-visible" : ""}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="uis-eyebrow">
              <Palette className="w-3 h-3" /> UI/UX Design
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-5">
            Design{" "}
            <span style={{ color: "rgba(255,255,255,0.22)" }}>Styles</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-xl leading-relaxed">
            Every project gets the design direction that fits its audience. Pick one or blend them — I build all of these.
          </p>
          <div className="section-line mt-6" />
        </div>

        {/* Count strip */}
        <div className={`flex items-center gap-4 mb-10 uis-fade ${inView ? "uis-visible" : ""}`} style={{ animationDelay: "0.08s" }}>
          <span className="uis-count-badge">
            <Layers className="w-3 h-3" /> {UI_STYLES.length} styles
          </span>
          <div style={{ height: 1, flex: 1, background: "rgba(255,255,255,0.06)" }} />
          <span className="text-xs text-muted">Click any card to see a live demo</span>
        </div>

        {/* Grid */}
        <div className={`uis-grid uis-fade ${inView ? "uis-visible" : ""}`} style={{ animationDelay: "0.1s" }}>
          {UI_STYLES.map((style, i) => (
            <StyleCard key={style.slug} style={style} index={i} inView={inView} />
          ))}
        </div>

        {/* Footer note */}
        <p className={`text-center text-sm text-muted mt-16 uis-fade ${inView ? "uis-visible" : ""}`}
          style={{ animationDelay: "0.35s" }}>
          Don&apos;t see your style? I replicate any reference or create a fully custom design direction.
        </p>
      </div>

      <style>{`
        .uis-fade { opacity:0; transform:translateY(28px); transition:opacity .7s cubic-bezier(.22,.68,0,1.1),transform .7s cubic-bezier(.22,.68,0,1.1); }
        .uis-visible { opacity:1; transform:translateY(0); }

        .uis-eyebrow { display:inline-flex; align-items:center; gap:6px; padding:5px 14px; border-radius:9999px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.04); font-size:.68rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:rgba(255,255,255,0.5); }

        .uis-count-badge { display:inline-flex; align-items:center; gap:5px; font-size:.68rem; font-weight:700; color:rgba(255,255,255,0.35); letter-spacing:.08em; text-transform:uppercase; }

        /* Grid */
        .uis-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:14px; }
        @media(min-width:640px)  { .uis-grid { grid-template-columns:repeat(3,1fr); gap:16px; } }
        @media(min-width:1024px) { .uis-grid { grid-template-columns:repeat(4,1fr); gap:18px; } }
        @media(min-width:1400px) { .uis-grid { grid-template-columns:repeat(5,1fr); gap:18px; } }

        /* Card */
        .uis-card {
          border-radius:16px; overflow:hidden;
          border:1px solid rgba(255,255,255,0.07);
          background:rgba(10,10,15,0.9);
          backdrop-filter:blur(16px);
          display:flex; flex-direction:column;
          position:relative; cursor:pointer;
          transition:
            border-color .3s ease,
            box-shadow .35s ease,
            transform .35s cubic-bezier(.22,.68,0,1.2),
            opacity .55s ease;
          outline:none;
        }
        .uis-card::after {
          content:''; position:absolute; inset:0;
          border-radius:16px;
          background:radial-gradient(ellipse at top, color-mix(in srgb, var(--accent) 8%, transparent), transparent 65%);
          opacity:0; transition:opacity .35s ease;
          pointer-events:none; z-index:0;
        }
        .uis-card:hover { border-color:color-mix(in srgb,var(--accent) 45%,rgba(255,255,255,0.07)); box-shadow:0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), 0 0 0 8px color-mix(in srgb,var(--accent) 5%,transparent); transform:translateY(-7px); }
        .uis-card:hover::after { opacity:1; }

        /* Preview */
        .uis-preview-wrap { position:relative; height:168px; flex-shrink:0; overflow:hidden; border-bottom:1px solid rgba(255,255,255,0.05); }
        .uis-preview-inner { width:100%; height:100%; }
        .uis-preview-fade { position:absolute; bottom:0; left:0; right:0; height:32px; background:linear-gradient(to top,rgba(10,10,15,0.9),transparent); z-index:1; pointer-events:none; }

        /* Number badge */
        .uis-num-badge {
          position:absolute; top:8px; left:9px;
          font-size:.6rem; font-weight:900; letter-spacing:.06em;
          color:rgba(255,255,255,0.35);
          background:rgba(0,0,0,0.55); backdrop-filter:blur(6px);
          padding:2px 7px; border-radius:9999px;
          border:1px solid rgba(255,255,255,0.1);
          z-index:3;
        }

        /* Overlay */
        .uis-overlay {
          position:absolute; inset:0; z-index:4;
          display:flex; align-items:center; justify-content:center;
          background:rgba(0,0,0,0);
          transition:background .25s ease;
          pointer-events:none;
        }
        .uis-overlay-show { background:rgba(0,0,0,0.56); pointer-events:auto; }

        .uis-cta-btn {
          display:inline-flex; align-items:center; gap:6px;
          background:#fff; color:#000;
          padding:8px 16px; border-radius:9px;
          font-size:.73rem; font-weight:800; letter-spacing:.02em;
          box-shadow:0 4px 18px rgba(0,0,0,0.35);
          opacity:0; transform:translateY(10px) scale(0.92);
          transition:opacity .22s ease, transform .22s ease;
        }
        .uis-overlay-show .uis-cta-btn { opacity:1; transform:translateY(0) scale(1); }

        /* Body */
        .uis-body { padding:14px 15px 16px; display:flex; flex-direction:column; gap:5px; flex:1; position:relative; z-index:1; }

        .uis-accent-dot { width:6px; height:6px; border-radius:50%; flex-shrink:0; margin-bottom:1px; transition:transform .25s; }
        .uis-card:hover .uis-accent-dot { transform:scale(1.4); }

        .uis-name-row { display:flex; align-items:center; justify-content:space-between; }
        .uis-name { font-size:.84rem; font-weight:800; color:rgba(255,255,255,0.92); letter-spacing:-.015em; line-height:1.25; }

        .uis-arrow { color:rgba(255,255,255,0.18); display:flex; align-items:center; padding:3px; border-radius:6px; transition:color .2s, transform .2s, background .2s; }
        .uis-arrow-active { color:rgba(255,255,255,0.75); background:rgba(255,255,255,0.07); transform:translate(2px,-2px); }

        .uis-tagline { font-size:.67rem; font-weight:700; letter-spacing:.04em; text-transform:uppercase; opacity:.9; line-height:1; }
        .uis-desc { font-size:.72rem; color:rgba(255,255,255,0.35); line-height:1.6; flex:1; }

        .uis-tags { display:flex; flex-wrap:wrap; gap:4px; margin-top:3px; }
        .uis-tag {
          font-size:.58rem; font-weight:700; letter-spacing:.05em;
          text-transform:uppercase;
          padding:2.5px 7px; border-radius:9999px;
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.08);
          color:rgba(255,255,255,0.35);
          transition:background .25s, border-color .25s, color .25s;
        }
        .uis-card:hover .uis-tag {
          background:color-mix(in srgb,var(--t-accent) 10%,transparent);
          border-color:color-mix(in srgb,var(--t-accent) 30%,transparent);
          color:color-mix(in srgb,var(--t-accent) 85%,rgba(255,255,255,0.5));
        }
      `}</style>
    </section>
  );
}
