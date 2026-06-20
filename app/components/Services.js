"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Check } from "lucide-react";

// ── Illustrations ──────────────────────────────────────────────────────────

function IllustFullStack() {
  const bars = [42,68,52,88,74,96,80,60];
  return (
    <svg viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      {/* Browser */}
      <rect x="8" y="8" width="222" height="244" rx="10" fill="rgba(8,10,18,0.98)" stroke="rgba(59,130,246,0.22)" strokeWidth="1"/>
      <rect x="8" y="8" width="222" height="26" rx="10" fill="rgba(59,130,246,0.1)"/>
      <circle cx="24" cy="21" r="4" fill="#ff5f57"/><circle cx="37" cy="21" r="4" fill="#febc2e"/><circle cx="50" cy="21" r="4" fill="#28c840"/>
      <rect x="64" y="14" width="140" height="14" rx="4" fill="rgba(255,255,255,0.05)"/>
      {/* Navbar */}
      <rect x="12" y="40" width="214" height="18" rx="3" fill="rgba(59,130,246,0.08)"/>
      <rect x="18" y="44" width="28" height="10" rx="2" fill="rgba(255,255,255,0.4)"/>
      <rect x="164" y="42" width="56" height="14" rx="4" fill="rgba(59,130,246,0.65)"/>
      {/* Hero */}
      <rect x="12" y="64" width="214" height="74" rx="4" fill="rgba(59,130,246,0.04)" stroke="rgba(59,130,246,0.08)" strokeWidth="1"/>
      <rect x="20" y="74" width="130" height="12" rx="3" fill="rgba(255,255,255,0.45)"/>
      <rect x="20" y="90" width="96" height="7" rx="2" fill="rgba(255,255,255,0.14)"/>
      <rect x="20" y="101" width="62" height="7" rx="2" fill="rgba(255,255,255,0.1)"/>
      <rect x="20" y="114" width="60" height="16" rx="4" fill="rgba(59,130,246,0.75)"/>
      <rect x="86" y="117" width="40" height="10" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      {/* Feature cards */}
      {[0,1,2].map(i=>(
        <g key={i}>
          <rect x={12+i*72} y="146" width="66" height="52" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
          <rect x={18+i*72} y="153" width="14" height="14" rx="3" fill={["rgba(59,130,246,0.2)","rgba(16,185,129,0.2)","rgba(139,92,246,0.2)"][i]} stroke={["rgba(59,130,246,0.45)","rgba(16,185,129,0.45)","rgba(139,92,246,0.45)"][i]} strokeWidth="1"/>
          <rect x={18+i*72} y="171" width="46" height="5" rx="2" fill="rgba(255,255,255,0.18)"/>
          <rect x={18+i*72} y="180" width="34" height="4" rx="1" fill="rgba(255,255,255,0.09)"/>
          <rect x={18+i*72} y="188" width="22" height="6" rx="2" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.09)" strokeWidth="1"/>
        </g>
      ))}
      {/* Chart */}
      <rect x="12" y="206" width="214" height="40" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      {bars.map((h,i)=>(
        <rect key={i} x={18+i*24} y={242-(h/100)*28} width="18" height={(h/100)*28} rx="2" fill={i===5?"rgba(59,130,246,0.7)":"rgba(59,130,246,0.22)"}/>
      ))}
      {/* Code panel */}
      <rect x="242" y="8" width="110" height="244" rx="8" fill="rgba(6,8,14,0.98)" stroke="rgba(59,130,246,0.12)" strokeWidth="1"/>
      <rect x="242" y="8" width="110" height="18" rx="8" fill="rgba(255,255,255,0.03)"/>
      {[
        {c:"rgba(59,130,246,0.75)",w:30},{c:"rgba(255,255,255,0.0)",w:0},
        {c:"rgba(139,92,246,0.65)",w:46},{c:"rgba(255,255,255,0.35)",w:38},
        {c:"rgba(255,255,255,0.22)",w:54},{c:"rgba(16,185,129,0.55)",w:40},
        {c:"rgba(59,130,246,0.45)",w:34},{c:"rgba(59,130,246,0.45)",w:38},
        {c:"rgba(59,130,246,0.45)",w:42},{c:"rgba(59,130,246,0.45)",w:30},
        {c:"rgba(59,130,246,0.45)",w:36},{c:"rgba(16,185,129,0.55)",w:44},
        {c:"rgba(255,255,255,0.22)",w:22},{c:"rgba(255,255,255,0.35)",w:10},
        {c:"rgba(255,255,255,0.0)",w:0},
        {c:"rgba(255,255,255,0.12)",w:62},{c:"rgba(255,255,255,0.12)",w:50},
        {c:"rgba(255,255,255,0.12)",w:56},
      ].map((l,i)=>l.w>0&&(
        <rect key={i} x="254" y={32+i*12} width={l.w} height="6" rx="2" fill={l.c}/>
      ))}
      <rect x="254" y="254" width="3" height="9" rx="1" fill="rgba(59,130,246,0.85)"/>
    </svg>
  );
}

function IllustSaaS() {
  return (
    <svg viewBox="0 0 280 148" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      {/* 3 pricing tiers */}
      {[
        {x:12, w:74, label:"Starter", price:"$0", c:"rgba(255,255,255,0.08)", border:"rgba(255,255,255,0.1)", accent:"rgba(255,255,255,0.3)"},
        {x:100, w:80, label:"Pro", price:"$49", c:"rgba(99,102,241,0.12)", border:"rgba(99,102,241,0.45)", accent:"rgba(99,102,241,0.9)", featured:true},
        {x:196, w:72, label:"Enterprise", price:"Custom", c:"rgba(255,255,255,0.06)", border:"rgba(255,255,255,0.1)", accent:"rgba(255,255,255,0.3)"},
      ].map((t,i)=>(
        <g key={i}>
          <rect x={t.x} y={t.featured?8:18} width={t.w} height={t.featured?132:112} rx="8" fill={t.c} stroke={t.border} strokeWidth={t.featured?1.5:1}/>
          {t.featured && <rect x={t.x} y={t.featured?8:18} width={t.w} height="18" rx="8" fill="rgba(99,102,241,0.3)"/>}
          {t.featured && <rect x={116} y="11.5" width="48" height="11" rx="3" fill="rgba(99,102,241,0.8)"/>}
          <rect x={t.x+8} y={t.featured?34:30} width={t.w-40} height="7" rx="2" fill={t.accent}/>
          <rect x={t.x+8} y={t.featured?46:42} width={t.w*0.45} height="12" rx="2" fill="rgba(255,255,255,0.5)"/>
          {[0,1,2,3].slice(0,t.featured?4:3).map((j)=>(
            <g key={j}>
              <circle cx={t.x+14} cy={t.featured?72+j*16:68+j*14} r="3.5" fill={t.featured?"rgba(99,102,241,0.5)":"rgba(255,255,255,0.12)"}/>
              <rect x={t.x+22} y={t.featured?68+j*16:64+j*14} width={t.w-30} height="5" rx="2" fill="rgba(255,255,255,0.18)"/>
            </g>
          ))}
          <rect x={t.x+8} y={t.featured?136:102} width={t.w-16} height={14} rx="4" fill={t.featured?"rgba(99,102,241,0.75)":"rgba(255,255,255,0.06)"} stroke={t.featured?"none":"rgba(255,255,255,0.1)"} strokeWidth="1"/>
        </g>
      ))}
    </svg>
  );
}

function IllustAI() {
  return (
    <svg viewBox="0 0 280 148" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      {/* AI bubble */}
      <rect x="14" y="14" width="180" height="38" rx="10" fill="rgba(139,92,246,0.12)" stroke="rgba(139,92,246,0.3)" strokeWidth="1"/>
      <circle cx="30" cy="33" r="11" fill="rgba(139,92,246,0.2)" stroke="rgba(139,92,246,0.4)" strokeWidth="1"/>
      <text x="26" y="37" fontSize="10" fill="rgba(139,92,246,0.9)">✦</text>
      <rect x="48" y="20" width="116" height="6" rx="2" fill="rgba(255,255,255,0.4)"/>
      <rect x="48" y="30" width="90" height="5" rx="2" fill="rgba(255,255,255,0.2)"/>
      <rect x="48" y="39" width="66" height="5" rx="2" fill="rgba(255,255,255,0.12)"/>
      {/* User bubble */}
      <rect x="86" y="62" width="180" height="26" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      <rect x="96" y="69" width="100" height="5" rx="2" fill="rgba(255,255,255,0.3)"/>
      <rect x="96" y="78" width="72" height="4" rx="2" fill="rgba(255,255,255,0.14)"/>
      <circle cx="252" cy="75" r="9" fill="rgba(255,255,255,0.08)"/>
      {/* AI response */}
      <rect x="14" y="98" width="200" height="38" rx="10" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.25)" strokeWidth="1"/>
      <circle cx="30" cy="117" r="11" fill="rgba(139,92,246,0.18)" stroke="rgba(139,92,246,0.35)" strokeWidth="1"/>
      <text x="26" y="121" fontSize="10" fill="rgba(139,92,246,0.8)">✦</text>
      {/* Typing animation bars */}
      {[0,1,2].map(i=>(
        <rect key={i} x={48+i*14} y="110" width="8" height="14" rx="3" fill="rgba(139,92,246,0.5)"/>
      ))}
      <rect x="48" y="128" width="130" height="4" rx="2" fill="rgba(255,255,255,0.15)"/>
      {/* Sparkles */}
      <text x="238" y="24" fontSize="11" fill="rgba(139,92,246,0.5)">✦</text>
      <text x="256" y="54" fontSize="7" fill="rgba(139,92,246,0.35)">✦</text>
      <text x="222" y="46" fontSize="8" fill="rgba(139,92,246,0.3)">✦</text>
    </svg>
  );
}

function IllustBackend() {
  const routes = [
    {method:"GET", path:"/api/users", status:"200", mc:"rgba(16,185,129,0.7)", sc:"rgba(16,185,129,0.5)"},
    {method:"POST", path:"/api/auth", status:"201", mc:"rgba(59,130,246,0.7)", sc:"rgba(59,130,246,0.5)"},
    {method:"PUT", path:"/api/items/:id", status:"200", mc:"rgba(245,158,11,0.7)", sc:"rgba(245,158,11,0.5)"},
    {method:"DEL", path:"/api/token", status:"204", mc:"rgba(239,68,68,0.7)", sc:"rgba(239,68,68,0.5)"},
    {method:"GET", path:"/api/analytics", status:"200", mc:"rgba(16,185,129,0.7)", sc:"rgba(16,185,129,0.5)"},
  ];
  return (
    <svg viewBox="0 0 280 148" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      <rect x="10" y="10" width="260" height="128" rx="8" fill="rgba(6,8,14,0.96)" stroke="rgba(16,185,129,0.15)" strokeWidth="1"/>
      <rect x="10" y="10" width="260" height="20" rx="8" fill="rgba(255,255,255,0.03)"/>
      {/* route list */}
      {routes.map((r,i)=>(
        <g key={i}>
          <rect x="16" y={34+i*22} width="248" height="18" rx="4" fill={i===1?"rgba(59,130,246,0.06)":"rgba(255,255,255,0.02)"} stroke={i===1?"rgba(59,130,246,0.15)":"rgba(255,255,255,0.05)"} strokeWidth="1"/>
          <rect x="22" y={38+i*22} width="30" height="10" rx="3" fill={r.mc} style={{opacity:0.25}}/>
          <rect x="22" y={38+i*22} width="30" height="10" rx="3" stroke={r.mc} strokeWidth="1" fill="none"/>
          {/* method text as colored bar */}
          <rect x="58" y={40+i*22} width="90" height="5" rx="2" fill="rgba(255,255,255,0.25)"/>
          <rect x="200" y={38+i*22} width="28" height="10" rx="3" fill={r.sc} style={{opacity:0.2}}/>
          <rect x="200" y={38+i*22} width="28" height="10" rx="3" stroke={r.sc} strokeWidth="1" fill="none"/>
        </g>
      ))}
      {/* shield icon bottom right */}
      <path d="M248 116 L264 122 L264 132 Q264 142 248 148 Q232 142 232 132 L232 122 Z" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.25)" strokeWidth="1"/>
      <path d="M241 132 L245 136 L256 125" stroke="rgba(16,185,129,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IllustMobile() {
  return (
    <svg viewBox="0 0 280 148" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      {/* Phone 1 */}
      <rect x="56" y="6" width="72" height="136" rx="14" fill="rgba(52,211,153,0.05)" stroke="rgba(52,211,153,0.3)" strokeWidth="1.5"/>
      <rect x="60" y="18" width="64" height="112" rx="6" fill="rgba(10,12,18,0.98)"/>
      <rect x="80" y="9" width="30" height="5" rx="3" fill="rgba(255,255,255,0.12)"/>
      {/* App content in phone 1 */}
      <rect x="62" y="20" width="64" height="16" rx="3" fill="rgba(52,211,153,0.15)"/>
      <rect x="66" y="25" width="28" height="6" rx="2" fill="rgba(255,255,255,0.45)"/>
      {[0,1,2].map(i=>(
        <g key={i}>
          <rect x="62" y={40+i*22} width="64" height="18" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
          <rect x="66" y={44+i*22} width="10" height="10" rx="2" fill={["rgba(52,211,153,0.25)","rgba(59,130,246,0.25)","rgba(245,158,11,0.25)"][i]}/>
          <rect x="80" y={46+i*22} width="28" height="4" rx="1" fill="rgba(255,255,255,0.22)"/>
          <rect x="80" y={53+i*22} width="20" height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
        </g>
      ))}
      <rect x="66" y="108" width="56" height="14" rx="4" fill="rgba(52,211,153,0.5)"/>
      <rect x="80" y="112" width="28" height="6" rx="2" fill="rgba(255,255,255,0.6)"/>
      {/* Home bar */}
      <rect x="76" y="126" width="32" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
      {/* Phone 2 - partially visible */}
      <rect x="152" y="16" width="72" height="120" rx="12" fill="rgba(52,211,153,0.03)" stroke="rgba(52,211,153,0.15)" strokeWidth="1"/>
      <rect x="156" y="26" width="64" height="100" rx="5" fill="rgba(8,10,16,0.98)"/>
      <rect x="158" y="28" width="64" height="14" rx="3" fill="rgba(255,255,255,0.05)"/>
      {[0,1,2,3].map(i=>(
        <rect key={i} x="158" y={46+i*18} width="60" height="14" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      ))}
    </svg>
  );
}

function IllustDashboard() {
  const kpis = [
    {v:"$84.2k",l:"Revenue",c:"rgba(16,185,129,0.7)"},
    {v:"12.4k",l:"Users",c:"rgba(59,130,246,0.7)"},
    {v:"98.6%",l:"Uptime",c:"rgba(245,158,11,0.7)"},
    {v:"3.2s",l:"Load Time",c:"rgba(139,92,246,0.7)"},
  ];
  const bars2 = [38,62,48,82,70,90,76,58,84,96];
  const lineY = [70,58,66,44,52,36,42,56,40,32];
  return (
    <svg viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      {/* Main panel */}
      <rect x="8" y="8" width="344" height="244" rx="10" fill="rgba(8,10,16,0.98)" stroke="rgba(6,182,212,0.2)" strokeWidth="1"/>
      {/* Sidebar */}
      <rect x="8" y="8" width="56" height="244" rx="10" fill="rgba(6,182,212,0.06)"/>
      {/* Sidebar nav dots */}
      {[0,1,2,3,4,5].map(i=>(
        <rect key={i} x="18" y={28+i*22} width="36" height="14" rx="4" fill={i===0?"rgba(6,182,212,0.25)":"rgba(255,255,255,0.04)"} stroke={i===0?"rgba(6,182,212,0.5)":"none"} strokeWidth="1"/>
      ))}
      {/* Top bar */}
      <rect x="64" y="12" width="284" height="26" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      <rect x="70" y="19" width="80" height="12" rx="3" fill="rgba(255,255,255,0.07)"/>
      <rect x="298" y="16" width="44" height="18" rx="5" fill="rgba(6,182,212,0.2)" stroke="rgba(6,182,212,0.4)" strokeWidth="1"/>
      {/* KPI cards */}
      {kpis.map((k,i)=>(
        <g key={i}>
          <rect x={64+i*72} y="44" width="66" height="44" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
          <rect x={70+i*72} y="50" width="36" height="6" rx="2" fill={k.c} style={{opacity:0.4}}/>
          <rect x={70+i*72} y="60" width="48" height="10" rx="2" fill="rgba(255,255,255,0.5)"/>
          <rect x={70+i*72} y="74" width="28" height="5" rx="2" fill="rgba(255,255,255,0.18)"/>
        </g>
      ))}
      {/* Bar chart */}
      <rect x="64" y="96" width="168" height="148" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <rect x="70" y="102" width="60" height="7" rx="2" fill="rgba(255,255,255,0.25)"/>
      {bars2.map((h,i)=>(
        <rect key={i} x={70+i*14} y={236-(h/100)*120} width="10" height={(h/100)*120} rx="2" fill={i===9?"rgba(6,182,212,0.75)":"rgba(6,182,212,0.22)"}/>
      ))}
      <line x1="68" y1="236" x2="228" y2="236" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      {/* Line chart */}
      <rect x="240" y="96" width="108" height="148" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <rect x="246" y="102" width="50" height="7" rx="2" fill="rgba(255,255,255,0.25)"/>
      {(() => {
        const xs = lineY.map((_,i) => 246 + i*10);
        const ys = lineY.map(v => 116 + v);
        const path = xs.map((x,i)=>`${i===0?"M":"L"}${x},${ys[i]}`).join(" ");
        const area = `${path} L${xs[xs.length-1]},244 L${xs[0]},244 Z`;
        return (
          <>
            <path d={area} fill="rgba(16,185,129,0.07)"/>
            <path d={path} stroke="rgba(16,185,129,0.65)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx={xs[xs.length-1]} cy={ys[ys.length-1]} r="3.5" fill="rgba(16,185,129,0.9)"/>
          </>
        );
      })()}
      {/* Table */}
      <rect x="64" y="195" width="168" height="7" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      <rect x="64" y="207" width="168" height="7" rx="2" fill="rgba(255,255,255,0.02)"/>
      <rect x="64" y="219" width="168" height="7" rx="2" fill="rgba(255,255,255,0.04)"/>
      <rect x="64" y="231" width="168" height="7" rx="2" fill="rgba(255,255,255,0.02)"/>
    </svg>
  );
}

function IllustCustom() {
  return (
    <svg viewBox="0 0 280 148" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      {/* CRM table */}
      <rect x="10" y="10" width="260" height="128" rx="8" fill="rgba(8,10,16,0.97)" stroke="rgba(245,158,11,0.15)" strokeWidth="1"/>
      {/* Header row */}
      <rect x="10" y="10" width="260" height="22" rx="8" fill="rgba(245,158,11,0.08)"/>
      {["Name","Status","Value","Date"].map((h,i)=>(
        <rect key={i} x={18+i*62} y="17" width={[40,36,28,30][i]} height="7" rx="2" fill="rgba(245,158,11,0.4)"/>
      ))}
      {/* Rows */}
      {[
        {s:"Active",sc:"rgba(16,185,129,0.6)"},
        {s:"Pending",sc:"rgba(245,158,11,0.6)"},
        {s:"Active",sc:"rgba(16,185,129,0.6)"},
        {s:"Closed",sc:"rgba(239,68,68,0.5)"},
        {s:"Active",sc:"rgba(16,185,129,0.6)"},
      ].map((row,i)=>(
        <g key={i}>
          <rect x="10" y={34+i*20} width="260" height="20" rx="0" fill={i%2===0?"rgba(255,255,255,0.02)":"transparent"} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
          {/* Avatar circle */}
          <circle cx="26" cy={44+i*20} r="7" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
          <rect x="38" y={41+i*20} width="32" height="6" rx="2" fill="rgba(255,255,255,0.25)"/>
          {/* Status pill */}
          <rect x="78" y={40+i*20} width="36" height="10" rx="5" fill={row.sc} style={{opacity:0.18}}/>
          <rect x="78" y={40+i*20} width="36" height="10" rx="5" stroke={row.sc} strokeWidth="1" fill="none"/>
          <rect x="142" y={41+i*20} width="28" height="6" rx="2" fill="rgba(255,255,255,0.2)"/>
          <rect x="202" y={41+i*20} width="40" height="6" rx="2" fill="rgba(255,255,255,0.14)"/>
        </g>
      ))}
    </svg>
  );
}

function IllustAutomation() {
  return (
    <svg viewBox="0 0 280 148" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      {/* boxes */}
      {[
        {x:10, label:"TRIGGER", c:"rgba(245,158,11,0.35)", bc:"rgba(245,158,11,0.5)"},
        {x:88, label:"PROCESS", c:"rgba(245,158,11,0.18)", bc:"rgba(245,158,11,0.35)"},
        {x:166, label:"ACTION", c:"rgba(245,158,11,0.18)", bc:"rgba(245,158,11,0.35)"},
        {x:208+36, label:"OUTPUT", c:"rgba(16,185,129,0.18)", bc:"rgba(16,185,129,0.4)"},
      ].map((b,i)=>(
        <g key={i}>
          <rect x={b.x} y="46" width="68" height="56" rx="8" fill={b.c} stroke={b.bc} strokeWidth="1.5"/>
          <rect x={b.x+8} y="54" width={40+i*2} height="6" rx="2" fill={b.bc}/>
          <rect x={b.x+8} y="64" width="48" height="4" rx="2" fill="rgba(255,255,255,0.15)"/>
          <rect x={b.x+8} y="72" width="38" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
          <rect x={b.x+8} y="80" width="44" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
          {i<3 && (
            <>
              <line x1={b.x+68} y1="74" x2={b.x+82} y2="74" stroke="rgba(245,158,11,0.45)" strokeWidth="1.5"/>
              <polygon points={`${b.x+82},70 ${b.x+88},74 ${b.x+82},78`} fill="rgba(245,158,11,0.45)"/>
            </>
          )}
        </g>
      ))}
      {/* Loop arc */}
      <path d="M 44 102 Q 44 130 140 132 Q 236 130 236 102" stroke="rgba(245,158,11,0.12)" strokeWidth="1" strokeDasharray="4 3" fill="none"/>
      {/* Sub labels */}
      {["Webhook / Cron","Node / Python","Email / Slack","✓ Done"].map((l,i)=>(
        <text key={i} x={14+i*78} y={112} fontSize="6.5" fill="rgba(255,255,255,0.22)" fontFamily="system-ui">{l}</text>
      ))}
    </svg>
  );
}

function IllustAgents() {
  const nodes = [
    {x:140,y:28,label:"PLAN",c:"rgba(124,58,237,0.6)"},
    {x:228,y:82,label:"ACT",c:"rgba(59,130,246,0.6)"},
    {x:186,y:118,label:"OBSERVE",c:"rgba(16,185,129,0.6)"},
    {x:52,y:118,label:"MEMORY",c:"rgba(245,158,11,0.6)"},
    {x:52,y:82,label:"THINK",c:"rgba(124,58,237,0.5)"},
  ];
  return (
    <svg viewBox="0 0 280 148" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      {/* center brain icon */}
      <circle cx="140" cy="82" r="28" fill="rgba(124,58,237,0.1)" stroke="rgba(124,58,237,0.3)" strokeWidth="1.5"/>
      <circle cx="140" cy="82" r="16" fill="rgba(124,58,237,0.15)" stroke="rgba(124,58,237,0.4)" strokeWidth="1"/>
      <text x="132" y="87" fontSize="12" fill="rgba(124,58,237,0.8)">✦</text>
      {/* nodes */}
      {nodes.map((n,i)=>(
        <g key={i}>
          <line x1="140" y1="82" x2={n.x+20} y2={n.y+12} stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="3 2"/>
          <rect x={n.x} y={n.y} width="40" height="22" rx="5" fill={n.c} style={{opacity:0.2}}/>
          <rect x={n.x} y={n.y} width="40" height="22" rx="5" stroke={n.c} strokeWidth="1" fill="none"/>
          <rect x={n.x+5} y={n.y+8} width={30} height="6" rx="2" fill={n.c} style={{opacity:0.6}}/>
        </g>
      ))}
      {/* tool badges */}
      {["search","code","email"].map((t,i)=>(
        <rect key={i} x={198+i*0} y={8+i*14} width={36} height="11" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      ))}
    </svg>
  );
}

function IllustPerformance() {
  const pts = [8,14,10,22,18,34,28,46,40,62,54,80,72,96];
  const W = 260, H = 90;
  const xs = pts.map((_,i)=>10+(i/(pts.length-1))*W);
  const ys = pts.map(v=>10+H-(v/100)*H);
  const path = xs.map((x,i)=>`${i===0?"M":"L"}${x},${ys[i]}`).join(" ");
  const area = `${path} L${xs[xs.length-1]},${10+H} L${xs[0]},${10+H} Z`;
  return (
    <svg viewBox="0 0 280 148" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      {/* Grid lines */}
      {[0,25,50,75,100].map(v=>(
        <line key={v} x1="10" y1={10+H-(v/100)*H} x2="270" y2={10+H-(v/100)*H} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
      ))}
      <path d={area} fill="rgba(239,68,68,0.07)"/>
      <path d={path} stroke="rgba(239,68,68,0.65)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx={xs[xs.length-1]} cy={ys[ys.length-1]} r="4" fill="rgba(239,68,68,0.9)"/>
      <circle cx={xs[xs.length-1]} cy={ys[ys.length-1]} r="8" fill="rgba(239,68,68,0.15)"/>
      <line x1="10" y1={10+H} x2="270" y2={10+H} stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      {/* Before/After */}
      <rect x="14" y="112" width="66" height="28" rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <rect x="20" y="118" width="30" height="5" rx="2" fill="rgba(255,255,255,0.2)"/>
      <rect x="20" y="127" width="44" height="8" rx="2" fill="rgba(239,68,68,0.4)"/>
      <text x="100" y="131" fontSize="14" fill="rgba(255,255,255,0.15)">→</text>
      <rect x="116" y="112" width="66" height="28" rx="5" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.2)" strokeWidth="1"/>
      <rect x="122" y="118" width="30" height="5" rx="2" fill="rgba(16,185,129,0.4)"/>
      <rect x="122" y="127" width="44" height="8" rx="2" fill="rgba(16,185,129,0.5)"/>
      <rect x="198" y="112" width="68" height="28" rx="5" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.2)" strokeWidth="1"/>
      <rect x="204" y="118" width="28" height="5" rx="2" fill="rgba(239,68,68,0.4)"/>
      <rect x="204" y="127" width="44" height="8" rx="2" fill="rgba(239,68,68,0.55)"/>
    </svg>
  );
}

// ── Service data ───────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: "fullstack",
    featured: true,
    eyebrow: "Full-Stack Engineering",
    title: "Web Applications",
    outcome: "Ship a product that works flawlessly across every device, scales under load, and reaches users on day one.",
    deliverables: [
      "Pixel-perfect React / Next.js frontend",
      "Scalable Node.js or Python / FastAPI backend",
      "Auth, payments & third-party integrations",
      "CI/CD pipeline & production deployment",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind"],
    color: "#3b82f6",
    Illust: IllustFullStack,
  },
  {
    id: "saas",
    featured: false,
    eyebrow: "Product Engineering",
    title: "SaaS Platforms",
    outcome: "Launch a recurring-revenue business with subscriptions, teams, and billing built in from day one.",
    deliverables: [
      "Multi-tenant architecture",
      "Stripe billing & subscription tiers",
      "Role-based access control",
      "Admin dashboard & usage analytics",
    ],
    tech: ["Next.js", "Stripe", "PostgreSQL", "RBAC"],
    color: "#6366f1",
    Illust: IllustSaaS,
  },
  {
    id: "ai",
    featured: false,
    eyebrow: "AI Integration",
    title: "AI-Powered Apps",
    outcome: "Add real intelligence to your product  chatbots, content pipelines, and automated decision-making.",
    deliverables: [
      "LLM integration (OpenAI / Anthropic / Groq)",
      "Streaming chat & RAG pipelines",
      "AI content generation workflows",
      "Prompt engineering & evaluation",
    ],
    tech: ["OpenAI", "LangChain", "Python", "Anthropic"],
    color: "#8b5cf6",
    Illust: IllustAI,
  },
  {
    id: "backend",
    featured: false,
    eyebrow: "Backend Systems",
    title: "APIs & Backend",
    outcome: "A rock-solid API that handles 10× your expected load with documented endpoints and 99.9% uptime.",
    deliverables: [
      "RESTful API design & OpenAPI docs",
      "JWT auth, OAuth & rate limiting",
      "Database integration & query optimisation",
      "Error handling, logging & monitoring",
    ],
    tech: ["FastAPI", "Express.js", "JWT", "Redis"],
    color: "#10b981",
    Illust: IllustBackend,
  },
  {
    id: "mobile",
    featured: false,
    eyebrow: "Mobile Engineering",
    title: "Mobile Apps",
    outcome: "One codebase. iOS and Android. Native-grade performance. Faster time to market, lower build cost.",
    deliverables: [
      "iOS & Android from a single codebase",
      "Push notifications & deep linking",
      "Offline support & local caching",
      "App Store & Play Store submission",
    ],
    tech: ["React Native", "Expo", "REST APIs"],
    color: "#34d399",
    Illust: IllustMobile,
  },
  {
    id: "dashboard",
    featured: true,
    eyebrow: "Data & Analytics",
    title: "Dashboards & Admin Panels",
    outcome: "See everything at a glance. Real-time data, beautiful charts, full control over your platform.",
    deliverables: [
      "Real-time charts, KPIs & data tables",
      "Role-based user & team management",
      "CSV / PDF export & scheduled reports",
      "Audit logs, permissions & access control",
    ],
    tech: ["React", "Recharts", "WebSockets", "REST"],
    color: "#06b6d4",
    Illust: IllustDashboard,
  },
  {
    id: "custom",
    featured: false,
    eyebrow: "Bespoke Software",
    title: "Custom Business Software",
    outcome: "Eliminate spreadsheets. Automate your core workflows. Built precisely around your process.",
    deliverables: [
      "Process analysis & workflow mapping",
      "Custom data models & business logic",
      "Integration with your existing tools",
      "Training, docs & long-term support",
    ],
    tech: ["Custom Stack", "REST APIs", "PostgreSQL"],
    color: "#f59e0b",
    Illust: IllustCustom,
  },
  {
    id: "automation",
    featured: false,
    eyebrow: "Process Automation",
    title: "Workflow Automation",
    outcome: "Cut repetitive work by 80%. Let software handle the tedious parts  reliably, 24/7.",
    deliverables: [
      "Webhook & cron-based trigger systems",
      "Multi-step processing pipelines",
      "Slack, email & webhook notifications",
      "Error recovery, retries & audit logs",
    ],
    tech: ["Python", "Node.js", "Webhooks", "Cron"],
    color: "#fb923c",
    Illust: IllustAutomation,
  },
  {
    id: "agents",
    featured: false,
    eyebrow: "LLM Engineering",
    title: "AI Agents",
    outcome: "Build AI that acts, not just answers. Autonomous agents that complete multi-step tasks end-to-end.",
    deliverables: [
      "Tool-calling & function-use agents",
      "Memory, context & state management",
      "Multi-step reasoning & planning chains",
      "Human-in-the-loop approval flows",
    ],
    tech: ["LangGraph", "OpenAI", "Python", "Anthropic"],
    color: "#7c3aed",
    Illust: IllustAgents,
  },
  {
    id: "performance",
    featured: false,
    eyebrow: "Optimisation",
    title: "Performance & Scaling",
    outcome: "From 4 seconds to under 400ms. 10× the traffic without 10× the cost.",
    deliverables: [
      "Bottleneck profiling & full audit",
      "Caching layer design (Redis / CDN)",
      "Database query & index tuning",
      "Load testing & capacity planning",
    ],
    tech: ["Redis", "CDN", "PostgreSQL", "k6"],
    color: "#ef4444",
    Illust: IllustPerformance,
  },
];

// ── Card components ────────────────────────────────────────────────────────

function FeaturedCard({ svc, inView, delay }) {
  const [hovered, setHovered] = useState(false);
  const { Illust } = svc;
  return (
    <div
      className={`svc-featured-card ${inView ? "svc-in" : ""}`}
      style={{ animationDelay: delay + "s", "--c": svc.color }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent bar */}
      <div className="svc-accent-bar" style={{ background: svc.color }} />

      <div className="svc-featured-inner">
        {/* Illustration */}
        <div className="svc-featured-illust" style={{ background: `color-mix(in srgb, ${svc.color} 5%, #07090f)`, borderRight: `1px solid color-mix(in srgb, ${svc.color} 15%, transparent)` }}>
          <Illust />
        </div>

        {/* Content */}
        <div className="svc-featured-content">
          <span className="svc-eyebrow" style={{ color: svc.color, borderColor: `color-mix(in srgb, ${svc.color} 30%, transparent)`, background: `color-mix(in srgb, ${svc.color} 8%, transparent)` }}>
            {svc.eyebrow}
          </span>
          <h3 className="svc-featured-title">{svc.title}</h3>
          <p className="svc-outcome">{svc.outcome}</p>

          <ul className="svc-deliverables">
            {svc.deliverables.map(d => (
              <li key={d} className="svc-deliverable-item">
                <Check style={{ width: 13, height: 13, color: svc.color, flexShrink: 0 }} />
                <span>{d}</span>
              </li>
            ))}
          </ul>

          <div className="svc-featured-footer">
            <div className="svc-tech-row">
              {svc.tech.map(t => (
                <span key={t} className="svc-tech-tag" style={{ color: svc.color, borderColor: `color-mix(in srgb, ${svc.color} 25%, transparent)`, background: `color-mix(in srgb, ${svc.color} 7%, transparent)` }}>
                  {t}
                </span>
              ))}
            </div>
            <a href="#contact" className="svc-cta-link" style={{ color: svc.color }}>
              Start a Project <ArrowRight style={{ width: 13, height: 13 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ svc, inView, delay }) {
  const [hovered, setHovered] = useState(false);
  const { Illust } = svc;
  return (
    <div
      className={`svc-card ${inView ? "svc-in" : ""}`}
      style={{ animationDelay: delay + "s", "--c": svc.color }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="svc-accent-bar" style={{ background: svc.color }} />

      {/* Illustration */}
      <div className="svc-illust" style={{ background: `color-mix(in srgb, ${svc.color} 5%, #07090f)`, borderBottom: `1px solid color-mix(in srgb, ${svc.color} 14%, transparent)` }}>
        <Illust />
        <div className="svc-illust-glow" style={{ background: `radial-gradient(ellipse at 50% 0%, color-mix(in srgb, ${svc.color} 10%, transparent), transparent 70%)` }} />
      </div>

      {/* Content */}
      <div className="svc-body">
        <span className="svc-eyebrow" style={{ color: svc.color, borderColor: `color-mix(in srgb, ${svc.color} 28%, transparent)`, background: `color-mix(in srgb, ${svc.color} 7%, transparent)` }}>
          {svc.eyebrow}
        </span>
        <h3 className="svc-title">{svc.title}</h3>
        <p className="svc-outcome">{svc.outcome}</p>

        <ul className="svc-deliverables">
          {svc.deliverables.map(d => (
            <li key={d} className="svc-deliverable-item">
              <Check style={{ width: 12, height: 12, color: svc.color, flexShrink: 0 }} />
              <span>{d}</span>
            </li>
          ))}
        </ul>

        <div className="svc-tech-row">
          {svc.tech.map(t => (
            <span key={t} className="svc-tech-tag" style={{ color: svc.color, borderColor: `color-mix(in srgb, ${svc.color} 22%, transparent)`, background: `color-mix(in srgb, ${svc.color} 6%, transparent)` }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────

export default function Services() {
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

  const featured = SERVICES.filter(s => s.featured);
  const row2 = SERVICES.slice(1, 5);   // saas, ai, backend, mobile
  const row3 = [SERVICES[6], SERVICES[7], SERVICES[8], SERVICES[9]]; // custom, auto, agents, perf

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative select-none py-32 bg-background text-foreground overflow-hidden"
    >
      {/* Ambient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-[700px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(ellipse, #6366f1, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(ellipse, #3b82f6, transparent 70%)" }} />
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className={`mb-20 svc-fade ${inView ? "svc-visible" : ""}`}>
          <div className="flex items-center gap-3 mb-5">
            <span className="svc-pill"><Sparkles className="w-3 h-3" />Services</span>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/8 bg-white/3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-white/40 font-medium">Available for new projects</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.02]">
                What I{" "}
                <span style={{ color: "rgba(255,255,255,0.28)" }}>Build</span>
              </h2>
              <p className="text-white/45 text-lg mt-4 max-w-xl leading-relaxed">
                End-to-end solutions  from zero to production. I deliver outcomes, not just code.
              </p>
            </div>
            {/* Stats strip */}
            <div className="flex gap-8 flex-shrink-0">
              {[["10+","Service types"],["5+","Tech stacks"],["100k+","Lines shipped"]].map(([v,l])=>(
                <div key={l} className="text-center">
                  <p className="text-2xl font-black text-white/90 leading-none">{v}</p>
                  <p className="text-xs text-white/35 mt-1 whitespace-nowrap">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="section-line mt-8" />
        </div>

        {/* ── Bento grid ── */}
        <div className="svc-bento">

          {/* Row 1: Featured fullstack (8) + SaaS (4) */}
          <FeaturedCard svc={SERVICES[0]} inView={inView} delay={0.08} />
          <ServiceCard  svc={SERVICES[1]} inView={inView} delay={0.14} />

          {/* Row 2: AI, Backend, Mobile, (3 × 4) */}
          {row2.slice(1).map((svc, i) => (
            <ServiceCard key={svc.id} svc={svc} inView={inView} delay={0.1 + i * 0.06} />
          ))}

          {/* Row 3: Featured dashboard (8) + Custom (4) */}
          <FeaturedCard svc={SERVICES[5]} inView={inView} delay={0.12} />
          <ServiceCard  svc={SERVICES[6]} inView={inView} delay={0.18} />

          {/* Row 4: Automation, AI Agents, Performance */}
          {row3.slice(1).map((svc, i) => (
            <ServiceCard key={svc.id} svc={svc} inView={inView} delay={0.1 + i * 0.06} />
          ))}
        </div>

        {/* CTA Strip */}
        <div className={`svc-cta-strip svc-fade ${inView ? "svc-visible" : ""}`} style={{ animationDelay: "0.3s" }}>
          <div>
            <p className="text-xl font-bold text-white/90 mb-1">Have a project in mind?</p>
            <p className="text-white/45 text-sm">Let&apos;s talk about your requirements and the best approach to build it.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a href="#projects" className="svc-ghost-btn">View Projects</a>
            <a href="#contact" className="svc-primary-btn">
              Start a Project <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      <style>{`
        /* ── Animations ── */
        .svc-fade { opacity:0; transform:translateY(28px); transition:opacity .7s cubic-bezier(.22,.68,0,1.1), transform .7s cubic-bezier(.22,.68,0,1.1); }
        .svc-visible { opacity:1; transform:translateY(0); }
        .svc-featured-card, .svc-card { opacity:0; transform:translateY(22px); transition:opacity .55s cubic-bezier(.22,.68,0,1.1), transform .55s cubic-bezier(.22,.68,0,1.1), border-color .3s, box-shadow .3s; }
        .svc-featured-card.svc-in, .svc-card.svc-in { opacity:1; transform:translateY(0); }

        /* ── Pill & eyebrow ── */
        .svc-pill { display:inline-flex; align-items:center; gap:6px; padding:5px 14px; border-radius:9999px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.04); font-size:.7rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:rgba(255,255,255,0.5); }
        .svc-eyebrow { display:inline-block; font-size:.65rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; padding:3px 10px; border-radius:9999px; border:1px solid; white-space:nowrap; }

        /* ── Bento grid ── */
        .svc-bento { display:grid; grid-template-columns:repeat(12,1fr); gap:16px; }
        .svc-featured-card { grid-column:span 8; }
        .svc-card { grid-column:span 4; }
        @media (max-width:1280px) {
          .svc-featured-card { grid-column:span 7; }
          .svc-card { grid-column:span 5; }
        }
        @media (max-width:1024px) {
          .svc-featured-card { grid-column:span 12; }
          .svc-card { grid-column:span 6; }
        }
        @media (max-width:640px) {
          .svc-card { grid-column:span 12; }
        }

        /* ── Featured card ── */
        .svc-featured-card {
          position:relative; overflow:hidden; border-radius:18px;
          border:1px solid rgba(255,255,255,0.08);
          background:rgba(10,12,18,0.92);
          backdrop-filter:blur(16px);
          cursor:default;
        }
        .svc-featured-card:hover { border-color:color-mix(in srgb, var(--c) 35%, rgba(255,255,255,0.08)); box-shadow:0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px color-mix(in srgb, var(--c) 15%, transparent); transform:translateY(-4px); }
        .svc-featured-inner { display:flex; height:100%; min-height:300px; }
        .svc-featured-illust { flex:0 0 42%; overflow:hidden; display:flex; align-items:center; justify-content:center; padding:12px; transition:transform .4s; }
        .svc-featured-card:hover .svc-featured-illust { transform:scale(1.02); }
        .svc-featured-content { flex:1; padding:32px 28px; display:flex; flex-direction:column; gap:16px; }
        .svc-featured-title { font-size:1.85rem; font-weight:900; color:rgba(255,255,255,0.92); letter-spacing:-0.03em; line-height:1.15; }
        .svc-featured-footer { display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap; margin-top:auto; padding-top:16px; border-top:1px solid rgba(255,255,255,0.06); }

        /* ── Regular card ── */
        .svc-card {
          position:relative; overflow:hidden; border-radius:18px;
          border:1px solid rgba(255,255,255,0.08);
          background:rgba(10,12,18,0.92);
          backdrop-filter:blur(14px);
          display:flex; flex-direction:column;
          cursor:default;
        }
        .svc-card:hover { border-color:color-mix(in srgb, var(--c) 32%, rgba(255,255,255,0.08)); box-shadow:0 20px 50px rgba(0,0,0,0.45), 0 0 0 1px color-mix(in srgb, var(--c) 12%, transparent); transform:translateY(-5px); }

        /* ── Accent bar ── */
        .svc-accent-bar { position:absolute; top:0; left:0; right:0; height:2px; z-index:1; opacity:0.7; transition:opacity .3s; }
        .svc-featured-card:hover .svc-accent-bar, .svc-card:hover .svc-accent-bar { opacity:1; }

        /* ── Illustration ── */
        .svc-illust { position:relative; height:160px; overflow:hidden; display:flex; align-items:center; justify-content:center; padding:8px; transition:transform .4s; }
        .svc-card:hover .svc-illust { transform:scale(1.03); }
        .svc-illust-glow { position:absolute; inset:0; pointer-events:none; opacity:0; transition:opacity .4s; }
        .svc-card:hover .svc-illust-glow { opacity:1; }

        /* ── Card body ── */
        .svc-body { padding:20px 22px 22px; display:flex; flex-direction:column; gap:12px; flex:1; }
        .svc-title { font-size:1.15rem; font-weight:800; color:rgba(255,255,255,0.9); letter-spacing:-0.02em; line-height:1.2; }
        .svc-outcome { font-size:.82rem; color:rgba(255,255,255,0.42); line-height:1.7; }

        /* ── Deliverables ── */
        .svc-deliverables { display:flex; flex-direction:column; gap:7px; list-style:none; padding:0; margin:0; }
        .svc-deliverable-item { display:flex; align-items:flex-start; gap:8px; font-size:.78rem; color:rgba(255,255,255,0.55); line-height:1.5; }

        /* ── Tech tags ── */
        .svc-tech-row { display:flex; flex-wrap:wrap; gap:5px; }
        .svc-tech-tag { font-size:.62rem; font-weight:600; letter-spacing:.05em; padding:3px 9px; border-radius:9999px; border:1px solid; white-space:nowrap; }

        /* ── CTA link (featured) ── */
        .svc-cta-link { display:inline-flex; align-items:center; gap:5px; font-size:.8rem; font-weight:700; text-decoration:none; transition:gap .2s; white-space:nowrap; }
        .svc-cta-link:hover { gap:8px; }

        /* ── CTA strip ── */
        .svc-cta-strip { display:flex; align-items:center; justify-content:space-between; gap:16px; margin-top:20px; padding:28px 32px; border-radius:18px; border:1px solid rgba(255,255,255,0.08); background:rgba(12,14,20,0.85); flex-wrap:wrap; }
        .svc-primary-btn { display:inline-flex; align-items:center; gap:7px; padding:12px 24px; border-radius:10px; font-size:.875rem; font-weight:700; background:rgb(var(--foreground)); color:rgb(var(--background)); text-decoration:none; transition:opacity .2s, transform .2s, box-shadow .2s; white-space:nowrap; }
        .svc-primary-btn:hover { opacity:.9; transform:translateY(-2px); box-shadow:0 8px 28px rgba(255,255,255,0.14); }
        .svc-ghost-btn { display:inline-flex; align-items:center; gap:6px; padding:11px 20px; border-radius:10px; font-size:.875rem; font-weight:600; border:1px solid rgba(255,255,255,0.12); color:rgba(255,255,255,0.65); text-decoration:none; transition:border-color .2s, color .2s, background .2s; white-space:nowrap; }
        .svc-ghost-btn:hover { border-color:rgba(255,255,255,0.22); color:rgba(255,255,255,0.9); background:rgba(255,255,255,0.04); }
      `}</style>
    </section>
  );
}
