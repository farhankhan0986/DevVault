"use client";

import { useEffect, useRef, useState } from "react";
import { Palette, ArrowUpRight } from "lucide-react";
import Link from "next/link";

// ── CSS art mini-mockups for each UI style ───────────────────────────────────

function MinimalistPreview() {
  return (
    <div style={{ background:"#f8f8f8", padding:"18px 16px", height:"100%", display:"flex", flexDirection:"column", gap:10 }}>
      <div style={{ width:28, height:2, background:"#111" }} />
      <div style={{ height:6, background:"#e5e5e5", borderRadius:3, width:"90%" }} />
      <div style={{ height:6, background:"#e5e5e5", borderRadius:3, width:"75%" }} />
      <div style={{ height:6, background:"#e5e5e5", borderRadius:3, width:"55%" }} />
      <div style={{ marginTop:8, display:"flex", gap:6 }}>
        <div style={{ height:5, background:"#111", borderRadius:3, width:48 }} />
        <div style={{ height:5, background:"#e5e5e5", borderRadius:3, width:32 }} />
      </div>
    </div>
  );
}

function SaaSPreview() {
  return (
    <div style={{ background:"linear-gradient(145deg,#0f0f1a,#1a1a2e)", padding:"14px", height:"100%", display:"flex", flexDirection:"column", gap:8 }}>
      <div style={{ display:"flex", gap:5, marginBottom:4 }}>
        {["#6366f1","#8b5cf6","#06b6d4"].map((c,i) => (
          <div key={i} style={{ flex:1, background:`${c}22`, border:`1px solid ${c}44`, borderRadius:6, padding:"5px 6px", textAlign:"center" }}>
            <div style={{ fontSize:9, color:c, fontWeight:700 }}>{["14.2k","98%","4.8★"][i]}</div>
          </div>
        ))}
      </div>
      <div style={{ background:"rgba(99,102,241,0.08)", border:"1px solid rgba(99,102,241,0.2)", borderRadius:6, height:30 }} />
      <div style={{ display:"flex", gap:4 }}>
        <div style={{ flex:2, background:"rgba(255,255,255,0.04)", borderRadius:4, height:18 }} />
        <div style={{ flex:1, background:"rgba(99,102,241,0.3)", borderRadius:4, height:18 }} />
      </div>
    </div>
  );
}

function GlassPreview() {
  return (
    <div style={{ background:"linear-gradient(135deg,#667eea,#764ba2)", padding:"14px", height:"100%", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", width:70, height:70, borderRadius:"50%", background:"rgba(255,255,255,0.15)", top:-20, right:-20 }} />
      <div style={{ position:"relative", background:"rgba(255,255,255,0.12)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.25)", borderRadius:10, padding:"10px 12px", display:"flex", flexDirection:"column", gap:6 }}>
        <div style={{ height:5, background:"rgba(255,255,255,0.7)", borderRadius:3, width:"60%" }} />
        <div style={{ height:4, background:"rgba(255,255,255,0.35)", borderRadius:3, width:"85%" }} />
        <div style={{ height:4, background:"rgba(255,255,255,0.25)", borderRadius:3, width:"70%" }} />
        <div style={{ marginTop:4, background:"rgba(255,255,255,0.2)", borderRadius:6, height:20, border:"1px solid rgba(255,255,255,0.3)", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <div style={{ height:3, width:30, background:"rgba(255,255,255,0.7)", borderRadius:2 }} />
        </div>
      </div>
    </div>
  );
}

function NeumorphismPreview() {
  return (
    <div style={{ background:"#e0e5ec", padding:"16px", height:"100%", display:"flex", flexDirection:"column", gap:10, alignItems:"center", justifyContent:"center" }}>
      <div style={{ background:"#e0e5ec", borderRadius:12, boxShadow:"6px 6px 12px #b8bec7, -6px -6px 12px #ffffff", padding:"12px 20px", width:"80%" }}>
        <div style={{ height:5, background:"#c8cfd8", borderRadius:3, width:"70%", margin:"0 auto" }} />
      </div>
      <div style={{ display:"flex", gap:8 }}>
        {[0,1].map(i => (
          <div key={i} style={{ background:"#e0e5ec", borderRadius:10, boxShadow: i===0 ? "inset 4px 4px 8px #b8bec7,inset -4px -4px 8px #ffffff" : "4px 4px 8px #b8bec7,-4px -4px 8px #ffffff", width:36, height:36 }} />
        ))}
      </div>
    </div>
  );
}

function BrutalismPreview() {
  return (
    <div style={{ background:"#fff", padding:"12px", height:"100%", display:"flex", flexDirection:"column", gap:8 }}>
      <div style={{ border:"3px solid #000", background:"#ff0", padding:"6px 10px", display:"inline-block" }}>
        <div style={{ fontSize:10, fontWeight:900, color:"#000", fontFamily:"monospace" }}>BRUTAL.CSS</div>
      </div>
      <div style={{ height:4, background:"#000" }} />
      <div style={{ border:"2px solid #000", padding:"6px", display:"flex", gap:4 }}>
        <div style={{ flex:1, height:14, background:"#000" }} />
        <div style={{ flex:1, height:14, background:"#ff0", border:"2px solid #000" }} />
      </div>
      <div style={{ height:2, background:"#000" }} />
    </div>
  );
}

function MaterialPreview() {
  return (
    <div style={{ background:"#fafafa", padding:"12px", height:"100%", display:"flex", flexDirection:"column", gap:8 }}>
      <div style={{ background:"#6200ea", borderRadius:4, padding:"8px 12px", boxShadow:"0 3px 6px rgba(98,0,234,0.35)" }}>
        <div style={{ height:5, background:"rgba(255,255,255,0.9)", borderRadius:2, width:"50%" }} />
      </div>
      <div style={{ background:"#fff", borderRadius:6, boxShadow:"0 2px 8px rgba(0,0,0,0.12)", padding:"8px 10px", display:"flex", flexDirection:"column", gap:5 }}>
        <div style={{ height:4, background:"#e0e0e0", borderRadius:2, width:"80%" }} />
        <div style={{ height:4, background:"#e0e0e0", borderRadius:2, width:"65%" }} />
      </div>
      <div style={{ display:"flex", gap:6, marginTop:2 }}>
        <div style={{ flex:1, background:"#6200ea", borderRadius:4, height:22, boxShadow:"0 2px 6px rgba(98,0,234,0.4)", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <div style={{ height:3, width:24, background:"#fff", borderRadius:2 }} />
        </div>
        <div style={{ flex:1, background:"transparent", border:"1px solid #6200ea", borderRadius:4, height:22 }} />
      </div>
    </div>
  );
}

function DashboardPreview() {
  const bars = [55, 80, 40, 90, 65, 75];
  return (
    <div style={{ background:"#0d1117", padding:"12px", height:"100%", display:"flex", flexDirection:"column", gap:8 }}>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:5 }}>
        {[["#3b82f6","12.4k"],["#10b981","98.2%"]].map(([c,v],i) => (
          <div key={i} style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:6, padding:"5px 7px" }}>
            <div style={{ fontSize:9, color:c, fontWeight:700 }}>{v}</div>
            <div style={{ height:2, background:`${c}33`, borderRadius:1, marginTop:3 }}><div style={{ width:"65%", height:"100%", background:c, borderRadius:1 }} /></div>
          </div>
        ))}
      </div>
      <div style={{ display:"flex", alignItems:"flex-end", gap:3, flex:1 }}>
        {bars.map((h,i) => (
          <div key={i} style={{ flex:1, height:`${h}%`, background:`rgba(59,130,246,${0.4+i*0.08})`, borderRadius:"2px 2px 0 0", minHeight:4 }} />
        ))}
      </div>
    </div>
  );
}

function AIAssistantPreview() {
  return (
    <div style={{ background:"#0a0a0a", padding:"12px", height:"100%", display:"flex", flexDirection:"column", gap:6, justifyContent:"flex-end" }}>
      <div style={{ display:"flex", gap:6, alignItems:"flex-end" }}>
        <div style={{ width:18, height:18, borderRadius:"50%", background:"linear-gradient(135deg,#6366f1,#8b5cf6)", flexShrink:0 }} />
        <div style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.09)", borderRadius:"10px 10px 10px 2px", padding:"6px 9px", maxWidth:"75%" }}>
          <div style={{ height:4, background:"rgba(255,255,255,0.4)", borderRadius:2, width:80, marginBottom:3 }} />
          <div style={{ height:4, background:"rgba(255,255,255,0.25)", borderRadius:2, width:55 }} />
        </div>
      </div>
      <div style={{ display:"flex", gap:6, alignItems:"flex-end", flexDirection:"row-reverse" }}>
        <div style={{ width:18, height:18, borderRadius:"50%", background:"rgba(255,255,255,0.15)", flexShrink:0 }} />
        <div style={{ background:"rgba(99,102,241,0.2)", border:"1px solid rgba(99,102,241,0.3)", borderRadius:"10px 10px 2px 10px", padding:"6px 9px" }}>
          <div style={{ height:4, background:"rgba(165,180,252,0.6)", borderRadius:2, width:60 }} />
        </div>
      </div>
      <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.09)", borderRadius:8, height:22, marginTop:4 }} />
    </div>
  );
}

function EcommercePreview() {
  return (
    <div style={{ background:"#fff", padding:"12px", height:"100%", display:"flex", flexDirection:"column", gap:8 }}>
      <div style={{ background:"#f5f5f5", borderRadius:6, height:52, display:"flex", alignItems:"center", justifyContent:"center" }}>
        <div style={{ width:32, height:32, borderRadius:6, background:"linear-gradient(135deg,#e5e7eb,#d1d5db)" }} />
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
        <div style={{ height:5, background:"#1a1a1a", borderRadius:2, width:"70%" }} />
        <div style={{ display:"flex", gap:4, alignItems:"center" }}>
          <div style={{ fontSize:11, fontWeight:900, color:"#111" }}>$49.99</div>
          <div style={{ fontSize:9, color:"#999", textDecoration:"line-through" }}>$79</div>
        </div>
      </div>
      <div style={{ background:"#111", borderRadius:5, height:22, display:"flex", alignItems:"center", justifyContent:"center" }}>
        <div style={{ height:3, width:36, background:"#fff", borderRadius:2 }} />
      </div>
    </div>
  );
}

function LandingPagePreview() {
  return (
    <div style={{ background:"linear-gradient(180deg,#0a0a0a,#111)", padding:"12px", height:"100%", display:"flex", flexDirection:"column", gap:8, alignItems:"center", justifyContent:"center" }}>
      <div style={{ height:4, background:"rgba(255,255,255,0.15)", borderRadius:2, width:"40%", marginBottom:2 }} />
      <div style={{ height:8, background:"rgba(255,255,255,0.9)", borderRadius:3, width:"75%" }} />
      <div style={{ height:8, background:"rgba(255,255,255,0.9)", borderRadius:3, width:"55%" }} />
      <div style={{ height:5, background:"rgba(255,255,255,0.3)", borderRadius:2, width:"65%" }} />
      <div style={{ display:"flex", gap:6, marginTop:4 }}>
        <div style={{ background:"#fff", borderRadius:5, height:22, width:52, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <div style={{ height:3, width:28, background:"#000", borderRadius:2 }} />
        </div>
        <div style={{ border:"1px solid rgba(255,255,255,0.3)", borderRadius:5, height:22, width:42 }} />
      </div>
    </div>
  );
}

const UI_STYLES = [
  { slug: "minimalist",    name: "Minimalist UI",       desc: "Clean, spacious, content-first design with generous whitespace and no visual noise.",                  useCases: ["Portfolios", "Blogs", "Docs"],           Preview: MinimalistPreview, accent: "#888" },
  { slug: "saas",          name: "Modern SaaS UI",      desc: "Dark-themed, data-rich interfaces with accent colors, metric cards, and smooth interactions.",         useCases: ["SaaS Apps", "Analytics", "Dashboards"],  Preview: SaaSPreview, accent: "#6366f1" },
  { slug: "glassmorphism", name: "Glassmorphism",       desc: "Frosted glass panels with blur, translucency, and subtle glow  visually rich and premium.",           useCases: ["Landing Pages", "Apps", "Music"],        Preview: GlassPreview, accent: "#764ba2" },
  { slug: "neumorphism",   name: "Neumorphism",         desc: "Soft extruded UI with light and shadow  tactile, calm, and uniquely modern.",                        useCases: ["Dashboards", "Health", "Finance"],       Preview: NeumorphismPreview, accent: "#6b9fca" },
  { slug: "brutalism",     name: "Brutalism",           desc: "Raw, high-contrast, unapologetically bold  aesthetics that demand attention.",                        useCases: ["Agencies", "Art", "Media"],              Preview: BrutalismPreview, accent: "#FFE000" },
  { slug: "material",      name: "Material Design",     desc: "Google's design system  elevation shadows, bold colour, and structured layouts.",                     useCases: ["Mobile Apps", "Enterprise", "Web Apps"], Preview: MaterialPreview, accent: "#6200ea" },
  { slug: "dashboard",     name: "Dashboard / Admin UI",desc: "Data-heavy interfaces with charts, tables, KPI cards, and efficient information density.",             useCases: ["Admin Panels", "Analytics", "CRMs"],     Preview: DashboardPreview, accent: "#3b82f6" },
  { slug: "ai-assistant",  name: "AI Assistant UI",     desc: "Conversational chat interfaces inspired by ChatGPT and Perplexity  minimal and focused.",            useCases: ["Chatbots", "AI Tools", "Assistants"],    Preview: AIAssistantPreview, accent: "#8b5cf6" },
  { slug: "ecommerce",     name: "E-commerce UI",       desc: "Product-first layouts with clear CTAs, clean cards, and conversion-optimised flows.",                  useCases: ["Online Stores", "Marketplaces", "Shops"], Preview: EcommercePreview, accent: "#e5e7eb" },
  { slug: "landing-page",  name: "Landing Page UI",     desc: "Hero-first, persuasive layouts designed to convert visitors into leads or customers.",                  useCases: ["Startups", "Products", "Campaigns"],     Preview: LandingPagePreview, accent: "#6366f1" },
];


export default function UIStyles() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.06 }
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
      {/* Ambient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(ellipse, #6366f1, transparent 70%)" }} />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(ellipse, #8b5cf6, transparent 70%)" }} />
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.018) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className={`mb-20 uis-fade ${inView ? "uis-visible" : ""}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="uis-eyebrow"><Palette className="w-3 h-3" />UI/UX Design</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-4">
            Design <span style={{ color: "rgba(255,255,255,0.25)" }}>Styles</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            Every project gets the design direction that fits its audience. Here are the styles I can build  pick one or blend them to match your brand.
          </p>
          <div className="section-line mt-6" />
        </div>

        {/* Cards grid */}
        <div className={`uis-grid uis-fade ${inView ? "uis-visible" : ""}`}
          style={{ animationDelay: "0.1s" }}>
          {UI_STYLES.map(({ slug, name, desc, useCases, Preview, accent }, i) => (
            <div
              key={slug}
              className="uis-card"
              style={{ transitionDelay: inView ? `${i * 0.06}s` : "0s", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(28px)" }}
            >
              {/* Accent stripe */}
              <div className="uis-accent-stripe" style={{ background: accent }} />

              {/* Mini preview */}
              <Link href={`/ui-styles/${slug}`} className="uis-preview-link" aria-label={`View ${name} demo`}>
                <div className="uis-preview">
                  <Preview />
                </div>
                <div className="uis-preview-overlay">
                  <span className="uis-preview-cta">View Demo <ArrowUpRight size={14} /></span>
                </div>
              </Link>

              {/* Info */}
              <div className="uis-info">
                <div className="uis-name-row">
                  <h3 className="uis-name">{name}</h3>
                  <Link href={`/ui-styles/${slug}`} className="uis-icon-link" aria-label={`Open ${name}`}>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
                <p className="uis-desc">{desc}</p>
                <div className="uis-uses">
                  {useCases.map((u) => (
                    <span key={u} className="uis-use-tag" style={{ "--tag-accent": accent }}>{u}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className={`text-center text-sm text-muted mt-16 uis-fade ${inView ? "uis-visible" : ""}`}
          style={{ animationDelay: "0.3s" }}>
          Don&apos;t see your style? I can replicate any reference or create a fully custom design direction for your project.
        </p>
      </div>

      <style>{`
        .uis-fade { opacity:0; transform:translateY(28px); transition:opacity .7s cubic-bezier(.22,.68,0,1.1), transform .7s cubic-bezier(.22,.68,0,1.1); }
        .uis-visible { opacity:1; transform:translateY(0); }

        .uis-eyebrow { display:inline-flex; align-items:center; gap:6px; padding:5px 14px; border-radius:9999px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.04); font-size:.7rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:rgba(255,255,255,0.5); }

        .uis-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; }
        @media(min-width:768px){.uis-grid{grid-template-columns:repeat(3,1fr);gap:20px;}}
        @media(min-width:1280px){.uis-grid{grid-template-columns:repeat(5,1fr);gap:20px;}}

        .uis-card {
          border-radius:18px;
          overflow:hidden;
          border:1px solid rgba(255,255,255,0.07);
          background:rgba(12,12,16,0.85);
          backdrop-filter:blur(16px);
          transition:border-color .3s, box-shadow .3s, transform .35s, opacity .5s;
          display:flex;
          flex-direction:column;
          position:relative;
        }
        .uis-card::before {
          content:'';
          position:absolute;
          inset:0;
          border-radius:18px;
          background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 60%);
          pointer-events:none;
          z-index:0;
        }
        .uis-card:hover {
          border-color:rgba(255,255,255,0.16);
          box-shadow:0 24px 56px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05);
          transform:translateY(-6px) !important;
        }

        .uis-accent-stripe { height:3px; width:100%; flex-shrink:0; transition:height .3s; opacity:0.85; }
        .uis-card:hover .uis-accent-stripe { height:4px; opacity:1; }

        .uis-preview-link { display:block; position:relative; text-decoration:none; border-bottom:1px solid rgba(255,255,255,0.05); z-index:1; }
        .uis-preview { height:162px; overflow:hidden; }
        .uis-preview-overlay { position:absolute; inset:0; background:rgba(0,0,0,0); display:flex; align-items:center; justify-content:center; transition:background .25s; }
        .uis-preview-link:hover .uis-preview-overlay { background:rgba(0,0,0,0.62); }
        .uis-preview-cta { display:inline-flex; align-items:center; gap:6px; background:rgba(255,255,255,0.96); color:#000; padding:9px 18px; border-radius:10px; font-size:.76rem; font-weight:800; letter-spacing:.02em; opacity:0; transform:translateY(8px) scale(0.94); transition:opacity .22s,transform .22s; box-shadow:0 4px 16px rgba(0,0,0,0.25); }
        .uis-preview-link:hover .uis-preview-cta { opacity:1; transform:translateY(0) scale(1); }

        .uis-info { padding:17px 17px 19px; display:flex; flex-direction:column; gap:9px; flex:1; position:relative; z-index:1; }
        .uis-name-row { display:flex; align-items:center; justify-content:space-between; }
        .uis-name { font-size:.86rem; font-weight:800; color:rgba(255,255,255,0.93); letter-spacing:-.015em; line-height:1.2; }
        .uis-icon-link { color:rgba(255,255,255,0.2); text-decoration:none; display:flex; align-items:center; transition:color .2s, transform .2s; padding:4px; border-radius:7px; flex-shrink:0; }
        .uis-icon-link:hover { color:rgba(255,255,255,0.9); transform:translate(1px,-1px); }
        .uis-desc { font-size:.72rem; color:rgba(255,255,255,0.37); line-height:1.62; flex:1; }

        .uis-uses { display:flex; flex-wrap:wrap; gap:5px; margin-top:2px; }
        .uis-use-tag {
          font-size:.6rem;
          font-weight:700;
          padding:3px 9px;
          border-radius:9999px;
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.08);
          color:rgba(255,255,255,0.38);
          transition:background .25s, border-color .25s, color .25s;
          letter-spacing:.04em;
          text-transform:uppercase;
        }
        .uis-card:hover .uis-use-tag {
          background:color-mix(in srgb, var(--tag-accent, #6366f1) 10%, transparent);
          border-color:color-mix(in srgb, var(--tag-accent, #6366f1) 30%, transparent);
          color:color-mix(in srgb, var(--tag-accent, #6366f1) 90%, rgba(255,255,255,0.5));
        }
      `}</style>
    </section>
  );
}
