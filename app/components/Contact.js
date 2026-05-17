"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mail, Github, Linkedin, Briefcase, Target, Clock,
  ArrowRight, Send, User, MessageSquare, CheckCircle2,
  AlertCircle, Loader2, MapPin, Sparkles, Phone,
} from "lucide-react";

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

const B = "rgba(255,255,255,0.08)";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [sectionRef, inView] = useInView();

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) { setErrorMsg(data.error || "Failed to send."); setStatus("error"); return; }
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const canSubmit = form.name.trim() && form.email.trim() && form.message.trim() && status !== "loading";

  const socialLinks = [
    { icon: Github,   label: "GitHub",   sub: "github.com/farhankhan0986",              url: "https://github.com/farhankhan0986" },
    { icon: Linkedin, label: "LinkedIn", sub: "linkedin.com/in/farhan-abid",            url: "https://www.linkedin.com/in/farhan-abid-38967a259/" },
    { icon: Mail,     label: "Email",    sub: "farhankhan080304@gmail.com",             url: "mailto:farhankhan080304@gmail.com" },
  ];

  const infoCards = [
    { title: "Current Role",  Icon: Briefcase, text: "Final-year B.Tech student & AI Agent Developer Intern at Tripify India - building production-grade systems." },
    { title: "Open To",       Icon: Target,    text: "Backend-heavy full-stack roles, SWE internships, and projects focused on scalable architecture." },
    { title: "Response Time", Icon: Clock,     text: "I reply within 24 hours. Let's talk about your project, role, or any technical challenge." },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative select-none py-32 bg-background text-foreground overflow-hidden"
    >
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(ellipse, #ffffff, transparent 70%)" }} />
        <div className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
        <div className="absolute bottom-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* ── Section header ── */}
        <div className={`mb-16 ct-fade ${inView ? "ct-visible" : ""}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="ct-eyebrow"><Sparkles className="w-3 h-3" />Contact</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
            Let&apos;s <span className="ct-dim">Connect</span>
          </h2>
          <p className="text-muted text-lg mt-3 max-w-lg">
            Have a project, opportunity, or just want to say hi? I&apos;m always open to a good conversation.
          </p>
          <div className="section-line mt-5" />
        </div>

        {/* ── Main two-column grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* LEFT — Info panel (2 cols) */}
          <div className={`lg:col-span-2 space-y-5 ct-fade ${inView ? "ct-visible" : ""}`}
            style={{ animationDelay: "0.1s" }}>

            {/* Availability chip */}
            <div className="ct-avail-chip">
              <span className="ct-avail-dot" />
              <span>Available for new opportunities</span>
            </div>

            {/* Info cards */}
            {infoCards.map((item, i) => {
              const Icon = item.Icon;
              return (
                <div key={item.title} className="ct-info-card"
                  style={{ animationDelay: `${0.15 + i * 0.1}s` }}>
                  <span className="ct-info-accent" />
                  <div className="flex items-start gap-4">
                    <div className="ct-info-icon-wrap"><Icon className="w-4 h-4 text-foreground" /></div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Social links */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-bold flex justify-center items-center text-muted uppercase tracking-widest">Find me on</p>
              {socialLinks.map(({ icon: Icon, label, sub, url }) => (
                <a key={label} href={url}
                  {...(url.startsWith('mailto:') ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  className="ct-social-row">
                  <div className="ct-social-icon-wrap"><Icon className="w-4 h-4 text-foreground" /></div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground leading-tight">{label}</p>
                    <p className="text-xs text-muted truncate">{sub}</p>
                  </div>
                  <ArrowRight className="ct-social-arrow" />
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="ct-location-card">
              <MapPin className="w-4 h-4 text-muted flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">India</p>
                <p className="text-xs text-muted">Open to remote &amp; relocation</p>
              </div>
            </div>
          </div>

          {/* RIGHT — Form card (3 cols) */}
          <div className={`lg:col-span-3 ct-fade ${inView ? "ct-visible" : ""}`}
            style={{ animationDelay: "0.2s" }}>
            <div className="ct-form-card">
              {/* Top shimmer line */}
              <div className="ct-form-shimmer" />

              {/* Card header */}
              <div className="ct-form-header">
                <div className="ct-form-header-icon">
                  <Send className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Send a Message</h3>
                  <p className="text-sm text-muted mt-0.5">I&apos;ll reply within 24 hours</p>
                </div>
                <div className="ml-auto ct-reply-badge">
                  <span className="ct-reply-dot" />
                  <span>24h reply</span>
                </div>
              </div>

              {/* Form body */}
              <div className="p-7 pt-6">
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                    <div className="ct-success-icon">
                      <CheckCircle2 className="w-8 h-8" style={{ color: "#4ade80" }} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Message sent! 🎉</h4>
                      <p className="text-sm text-muted">Thanks for reaching out — I&apos;ll be in touch shortly.</p>
                    </div>
                    <button onClick={() => setStatus("idle")}
                      className="text-xs font-semibold text-muted hover:text-foreground transition-colors mt-1 underline underline-offset-4">
                      Send another message →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="c-name" className="ct-label">Name</label>
                        <div className="relative">
                          <User className="ct-input-icon" />
                          <input id="c-name" name="name" type="text" value={form.name}
                            onChange={handleChange} placeholder="Your name"
                            required disabled={status === "loading"}
                            className="ct-input"
                            onFocus={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255,255,255,0.05)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                            onBlur={e => { e.currentTarget.style.borderColor = B; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }} />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="c-email" className="ct-label">Email</label>
                        <div className="relative">
                          <Mail className="ct-input-icon" />
                          <input id="c-email" name="email" type="email" value={form.email}
                            onChange={handleChange} placeholder="you@email.com"
                            required disabled={status === "loading"}
                            className="ct-input"
                            onFocus={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255,255,255,0.05)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                            onBlur={e => { e.currentTarget.style.borderColor = B; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }} />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="c-message" className="ct-label">Message</label>
                      <div className="relative">
                        <MessageSquare className="ct-input-icon" style={{ top: "14px", transform: "none" }} />
                        <textarea id="c-message" name="message" value={form.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project, role, or idea..."
                          rows={5} required disabled={status === "loading"}
                          className="ct-input ct-textarea"
                          onFocus={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255,255,255,0.05)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                          onBlur={e => { e.currentTarget.style.borderColor = B; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }} />
                      </div>
                    </div>

                    {/* Error */}
                    {status === "error" && (
                      <div className="ct-error-banner">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Submit row */}
                    <div className="flex items-center justify-between gap-4 pt-2 border-t"
                      style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                      <p className="text-xs text-muted">
                        Your message goes directly to my inbox.
                      </p>
                      <button type="submit" disabled={!canSubmit} className="ct-submit-btn"
                        style={{ opacity: canSubmit ? 1 : 0.35 }}>
                        {status === "loading"
                          ? <><Loader2 className="w-4 h-4 animate-spin" />Sending…</>
                          : <><Send className="w-3.5 h-3.5" />Send Message</>}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Fade in ── */
        .ct-fade {
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(.22,.68,0,1.1), transform 0.7s cubic-bezier(.22,.68,0,1.1);
        }
        .ct-fade.ct-visible { opacity: 1; transform: translateY(0); }

        /* ── Eyebrow ── */
        .ct-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 12px; border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(255,255,255,0.55);
        }
        .ct-dim { color: rgba(255,255,255,0.35); }

        /* ── Availability chip ── */
        .ct-avail-chip {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 14px; border-radius: 9999px;
          border: 1px solid rgba(74,222,128,0.22);
          background: rgba(74,222,128,0.06);
          font-size: 0.72rem; font-weight: 700;
          color: rgba(134,239,172,0.9);
          letter-spacing: 0.05em;
        }
        .ct-avail-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 8px #4ade80;
          animation: ctPulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes ctPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.5; transform:scale(1.4); }
        }

        /* ── Info card ── */
        .ct-info-card {
          position: relative; overflow: hidden;
          border-radius: 14px; padding: 18px 18px 18px 20px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(17,17,17,0.7); backdrop-filter: blur(12px);
          transition: border-color 0.25s, transform 0.25s;
        }
        .ct-info-card:hover { border-color: rgba(255,255,255,0.14); transform: translateY(-2px); }
        .ct-info-accent {
          position: absolute; left: 0; top: 0; height: 100%; width: 2px;
          background: linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.04));
          border-radius: 1px;
        }
        .ct-info-icon-wrap {
          flex-shrink: 0; padding: 8px; border-radius: 9px;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08);
          transition: background 0.2s;
        }
        .ct-info-card:hover .ct-info-icon-wrap { background: rgba(255,255,255,0.1); }

        /* ── Social rows ── */
        .ct-social-row {
          display: flex; align-items: center; gap: 12px;
          padding: 14px 16px; border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(17,17,17,0.6); backdrop-filter: blur(10px);
          text-decoration: none;
          transition: border-color 0.2s, transform 0.2s, background 0.2s;
          touch-action: manipulation; -webkit-tap-highlight-color: transparent;
          cursor: pointer; min-height: 60px;
        }
        .ct-social-row:hover, .ct-social-row:focus-visible {
          border-color: rgba(255,255,255,0.15);
          background: rgba(30,30,30,0.7);
          transform: translateY(-2px);
        }
        .ct-social-row:active {
          transform: scale(0.98);
          background: rgba(40,40,40,0.8);
        }
        .ct-social-icon-wrap {
          flex-shrink: 0; padding: 8px; border-radius: 9px;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08);
          transition: background 0.2s, transform 0.2s;
        }
        .ct-social-row:hover .ct-social-icon-wrap { background: rgba(255,255,255,0.1); transform: scale(1.08); }
        .ct-social-arrow {
          width: 14px; height: 14px; color: rgba(255,255,255,0.2);
          margin-left: auto; flex-shrink: 0;
          transition: color 0.2s, transform 0.2s;
        }
        .ct-social-row:hover .ct-social-arrow { color: rgba(255,255,255,0.5); transform: translateX(3px); }

        /* ── Location ── */
        .ct-location-card {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 16px; border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
        }

        /* ── Form card ── */
        .ct-form-card {
          border-radius: 20px; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(14,14,14,0.85); backdrop-filter: blur(20px);
          box-shadow: 0 32px 80px rgba(0,0,0,0.4);
        }
        .ct-form-shimmer {
          height: 1px; width: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
        }
        .ct-form-header {
          display: flex; align-items: center; gap: 14px;
          padding: 22px 28px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
        }
        .ct-form-header-icon {
          padding: 10px; border-radius: 12px;
          background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1);
          flex-shrink: 0;
        }
        .ct-reply-badge {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 10px; border-radius: 9999px;
          border: 1px solid rgba(74,222,128,0.2);
          background: rgba(74,222,128,0.05);
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.06em;
          color: rgba(134,239,172,0.8); white-space: nowrap;
        }
        .ct-reply-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #4ade80;
          animation: ctPulse 2s ease-in-out infinite;
        }

        /* ── Labels ── */
        .ct-label {
          display: block; font-size: 0.65rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.1em;
          color: rgba(255,255,255,0.4); margin-bottom: 6px;
        }

        /* ── Inputs ── */
        .ct-input-icon {
          position: absolute; left: 13px; top: 50%; transform: translateY(-50%);
          width: 15px; height: 15px; color: rgba(255,255,255,0.25);
          pointer-events: none; transition: color 0.2s;
        }
        .ct-input {
          width: 100%; padding: 11px 14px 11px 38px;
          border-radius: 10px; font-size: 0.875rem;
          color: rgb(var(--foreground));
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          outline: none;
        }
        .ct-input::placeholder { color: rgba(255,255,255,0.18); }
        .ct-input:disabled { opacity: 0.45; }
        .ct-textarea { resize: none; padding-left: 38px; padding-top: 12px; }

        /* ── Error ── */
        .ct-error-banner {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 14px; border-radius: 10px; font-size: 0.82rem;
          background: rgba(239,68,68,0.07); border: 1px solid rgba(239,68,68,0.18);
          color: #f87171;
        }

        /* ── Submit ── */
        .ct-submit-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 10px 22px; border-radius: 10px;
          font-size: 0.82rem; font-weight: 700;
          background: rgb(var(--foreground)); color: rgb(var(--background));
          transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
          white-space: nowrap; cursor: pointer; border: none;
        }
        .ct-submit-btn:not(:disabled):hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 28px rgba(255,255,255,0.2);
        }
        .ct-submit-btn:not(:disabled):active { transform: scale(0.97); }
        .ct-submit-btn:disabled { cursor: not-allowed; }

        /* ── Success icon ── */
        .ct-success-icon {
          width: 68px; height: 68px; border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(34,197,94,0.08); border: 1px solid rgba(34,197,94,0.18);
        }
      `}</style>
    </section>
  );
}
