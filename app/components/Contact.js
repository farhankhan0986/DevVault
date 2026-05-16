"use client";

import { useState } from "react";
import {
  Mail, Github, Linkedin, Briefcase, Target, Clock,
  ArrowRight, Send, User, MessageSquare, CheckCircle2,
  AlertCircle, Loader2,
} from "lucide-react";

const B = "rgba(255,255,255,0.08)";
const BH = "rgba(255,255,255,0.16)";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

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
    { icon: Github,   label: "GitHub",   url: "https://github.com/farhankhan0986" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/farhan-abid-38967a259/" },
    { icon: Mail,     label: "Email",    url: "mailto:farhankhan080304@gmail.com" },
  ];

  const infoCards = [
    { title: "Current Role",  Icon: Briefcase, text: "Final-year B.Tech student and AI Agent Developer Intern at Tripify, working on real-world, production-focused and AI Agent Development." },
    { title: "Open To",       Icon: Target,    text: "Backend-heavy full-stack roles, software engineering positions, and internship opportunities focused on scalable systems." },
    { title: "Availability",  Icon: Clock,     text: "I usually respond within 24 hours and am happy to discuss opportunities, collaborations, or technical challenges." },
  ];

  return (
    <section className="relative select-none py-28 bg-background text-foreground overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(600px circle at 50% 0%, rgba(255,255,255,0.03), transparent 60%)" }} />

      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {"Let's"}{" "}
            <span className="text-foreground opacity-50">Connect</span>
          </h2>
          <div className="section-line mx-auto" />
        </div>

        {/* Form card — same shape/style as old CTA card */}
        <div
          className="relative rounded-2xl border mb-16 overflow-hidden"
          style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(var(--card),0.6)", backdropFilter: "blur(16px)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }} />
          <div aria-hidden className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-80 rounded-full blur-3xl"
            style={{ background: "rgba(255,255,255,0.04)" }} />

          {/* Card header */}
          <div className="relative px-8 pt-10 pb-6 text-center" style={{ borderBottom: `1px solid ${B}` }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">{"Let's work together"}</p>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Got a project or opportunity?</h3>
            <p className="text-muted text-sm leading-relaxed max-w-md mx-auto">
              Drop a message - I&apos;ll get back to you within 24 hours.
            </p>
          </div>

          {/* Form body */}
          <div className="relative p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.18)" }}>
                  <CheckCircle2 className="w-8 h-8" style={{ color: "#4ade80" }} />
                </div>
                <h4 className="text-lg font-bold text-foreground">Message sent!</h4>
                <p className="text-sm text-muted max-w-xs">Thanks for reaching out. I&apos;ll reply within 24 hours.</p>
                <button onClick={() => setStatus("idle")}
                  className="text-xs font-semibold text-muted hover:text-foreground transition-colors underline underline-offset-4 mt-1">
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="c-name" className="block text-[11px] font-bold text-muted mb-2 uppercase tracking-widest">Name</label>
                    <div className="group relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-foreground transition-colors duration-300 pointer-events-none">
                        <User className="w-4 h-4" />
                      </div>
                      <input id="c-name" name="name" type="text" value={form.name} onChange={handleChange}
                        placeholder="Your name" required disabled={status === "loading"}
                        className="w-full pl-11 pr-4 py-3 rounded-xl text-sm text-foreground disabled:opacity-50 transition-all duration-300 focus:outline-none placeholder:text-white/20"
                        style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${B}` }}
                        onFocus={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.boxShadow = "0 0 0 4px rgba(255,255,255,0.05)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                        onBlur={e => { e.currentTarget.style.borderColor = B; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }} />
                    </div>
                  </div>
                  {/* Email */}
                  <div>
                    <label htmlFor="c-email" className="block text-[11px] font-bold text-muted mb-2 uppercase tracking-widest">Email</label>
                    <div className="group relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-foreground transition-colors duration-300 pointer-events-none">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input id="c-email" name="email" type="email" value={form.email} onChange={handleChange}
                        placeholder="your@email.com" required disabled={status === "loading"}
                        className="w-full pl-11 pr-4 py-3 rounded-xl text-sm text-foreground disabled:opacity-50 transition-all duration-300 focus:outline-none placeholder:text-white/20"
                        style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${B}` }}
                        onFocus={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.boxShadow = "0 0 0 4px rgba(255,255,255,0.05)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                        onBlur={e => { e.currentTarget.style.borderColor = B; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }} />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="c-message" className="block text-[11px] font-bold text-muted mb-2 uppercase tracking-widest">Message</label>
                  <div className="group relative">
                    <div className="absolute left-4 top-4 text-muted group-focus-within:text-foreground transition-colors duration-300 pointer-events-none">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea id="c-message" name="message" value={form.message} onChange={handleChange}
                      placeholder="Tell me about your project, role, or idea..." rows={4} required
                      disabled={status === "loading"}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm text-foreground resize-none disabled:opacity-50 transition-all duration-300 focus:outline-none placeholder:text-white/20"
                      style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${B}` }}
                      onFocus={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.boxShadow = "0 0 0 4px rgba(255,255,255,0.05)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                      onBlur={e => { e.currentTarget.style.borderColor = B; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }} />
                  </div>
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm"
                    style={{ background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.18)", color: "#f87171" }}>
                    <AlertCircle className="w-4 h-4 shrink-0" />{errorMsg}
                  </div>
                )}

                <div className="flex items-center justify-between gap-4 flex-wrap pt-3 mt-2 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <span className="text-xs text-muted flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Reply within <span className="text-foreground font-semibold">24 hours</span>
                  </span>
                  <button type="submit" disabled={!canSubmit}
                    className="group inline-flex items-center gap-2.5 px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 disabled:opacity-35 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                    style={{ 
                      background: canSubmit ? "white" : "rgba(255,255,255,0.8)", 
                      color: "black",
                      boxShadow: canSubmit ? "0 0 20px rgba(255,255,255,0.3)" : "none"
                    }}>
                    {status === "loading"
                      ? <><Loader2 className="w-4 h-4 animate-spin" />Sending…</>
                      : <><Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />Send Message</>}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-20 text-center">
          <p className="text-muted mb-6 text-sm">Or connect with me on social platforms</p>
          <div className="flex justify-center gap-4 flex-wrap">
            {socialLinks.map(({ icon: Icon, label, url }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="group/social inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border text-muted hover:text-foreground hover:-translate-y-1 transition-all duration-300"
                style={{ borderColor: "rgba(255,255,255,0.1)", background: "rgba(var(--card),0.6)", backdropFilter: "blur(12px)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}>
                <Icon className="w-5 h-5 transition-transform duration-300 group-hover/social:scale-110" />
                <span className="text-sm font-medium">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {infoCards.map((item) => (
            <div key={item.title}
              className="group relative overflow-hidden rounded-2xl border p-7 text-center transition-all duration-500 hover:-translate-y-2"
              style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(var(--card),0.6)", backdropFilter: "blur(16px)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow = "none"; }}>
              <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <item.Icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
