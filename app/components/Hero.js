import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronDown,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-screen flex items-center isolate bg-background text-foreground overflow-hidden"
    >
      {/* ── Animated background orbs ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-indigo-500/20 blur-[120px] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 right-0 h-[380px] w-[380px] rounded-full bg-purple-500/15 blur-[100px] animate-[float_10s_ease-in-out_2s_infinite]" />
        <div className="absolute -bottom-24 left-1/3 h-[320px] w-[320px] rounded-full bg-violet-500/15 blur-[100px] animate-[float_12s_ease-in-out_4s_infinite]" />
      </div>

      {/* ── Dot-grid pattern overlay ── */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative mx-auto w-full max-w-6xl px-6 py-28 sm:py-32 lg:py-0">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ─── Left column ─── */}
          <div className="flex flex-col gap-7">
            {/* Availability badge */}
            <div className="flex">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                ✦ Available for Opportunities
              </span>
            </div>

            {/* Heading block */}
            <div className="space-y-3">
              <h1
                id="hero-title"
                className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              >
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Farhan Abid
                </span>
              </h1>

              <p className="flex items-center gap-2 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                <Sparkles aria-hidden="true" className="h-5 w-5 text-violet-400 sm:h-6 sm:w-6" />
                Full Stack &amp; AI Developer
              </p>

              <p className="font-mono text-sm tracking-widest text-muted sm:text-base">
                MERN &bull; Next.js &bull; AI Systems &bull; Backend
                Architecture
              </p>
            </div>

            {/* Bio */}
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Engineering scalable systems and intelligent applications —
              from secure APIs to AI-powered products. B.Tech student &amp;
              Web Developer Intern at Tripify, driven by system design and
              craft.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-1">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:brightness-110 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://drive.google.com/file/d/1AjzPsE0kdR_iMpJd5WuSoxyJ9TskEfvH/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-border bg-background/50 px-7 py-3.5 font-semibold backdrop-blur-sm transition-all hover:border-indigo-500/50 hover:bg-indigo-500/5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Download className="h-4 w-4 text-indigo-400 transition-transform group-hover:-translate-y-0.5" />
                Download Resume
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-3 pt-1">
              {[
                {
                  href: "https://github.com/farhankhan0986",
                  label: "GitHub",
                  Icon: Github,
                },
                {
                  href: "https://www.linkedin.com/in/farhan-abid-38967a259/",
                  label: "LinkedIn",
                  Icon: Linkedin,
                },
                {
                  href: "mailto:farhankhan080304@gmail.com",
                  label: "Email",
                  Icon: Mail,
                },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60 text-muted backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:border-indigo-500/50 hover:text-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* ─── Right column — decorative element ─── */}
          <div className="flex items-center justify-center" aria-hidden>
            <div className="relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-violet-500/20 blur-2xl animate-[pulse-glow_4s_ease-in-out_infinite]" />

              {/* Spinning dashed orbit */}
              <div
                className="absolute inset-4 rounded-full border border-dashed border-indigo-500/20 animate-[spin_30s_linear_infinite]"
              />
              <div
                className="absolute inset-10 rounded-full border border-dashed border-purple-500/15 animate-[spin_24s_linear_infinite_reverse]"
              />

              {/* Gradient blob */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-violet-500/10 backdrop-blur-sm" />

              {/* Floating tech markers */}
              {[
                { text: "React", pos: "-top-2 left-1/2 -translate-x-1/2", border: "border-indigo-500/30", fg: "text-indigo-400", anim: "float_6s_ease-in-out_infinite" },
                { text: "Node.js", pos: "top-1/4 -right-2 sm:-right-4", border: "border-purple-500/30", fg: "text-purple-400", anim: "float_7s_ease-in-out_1s_infinite" },
                { text: "AI / ML", pos: "bottom-1/4 -left-2 sm:-left-4", border: "border-violet-500/30", fg: "text-violet-400", anim: "float_8s_ease-in-out_2s_infinite" },
                { text: "MongoDB", pos: "-bottom-2 left-1/2 -translate-x-1/2", border: "border-indigo-500/30", fg: "text-indigo-400", anim: "float_6s_ease-in-out_3s_infinite" },
                { text: "Next.js", pos: "top-[15%] left-[5%]", border: "border-emerald-500/30", fg: "text-emerald-400", anim: "float_9s_ease-in-out_0.5s_infinite" },
                { text: "APIs", pos: "bottom-[15%] right-[5%]", border: "border-pink-500/30", fg: "text-pink-400", anim: "float_7s_ease-in-out_2.5s_infinite" },
              ].map(({ text, pos, border, fg, anim }) => (
                <div
                  key={text}
                  className={`absolute ${pos} rounded-lg ${border} bg-background/80 px-3 py-1.5 text-xs font-semibold ${fg} shadow-lg backdrop-blur-sm animate-[${anim}]`}
                >
                  {text}
                </div>
              ))}

              {/* Initials */}
              <span className="relative z-10 bg-gradient-to-br from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-6xl font-black tracking-tighter text-transparent sm:text-7xl lg:text-8xl select-none">
                FA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 sm:bottom-8">
        <a
          href="#projects"
          aria-label="Scroll to projects"
          className="flex flex-col items-center gap-1.5 text-muted transition-colors hover:text-indigo-400"
        >
          <span className="text-xs tracking-wider">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
