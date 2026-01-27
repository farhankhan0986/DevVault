import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-screen flex items-center isolate bg-background text-foreground pt-28"
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_30%_10%,rgba(99,102,241,0.18),transparent_45%)]"
      />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]"
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                id="hero-title"
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
              >
                <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                  Farhan Abid
                </span>
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted">
                Full-Stack Web Developer
              </p>

              <p className="text-sm sm:text-base font-mono text-muted">
                MERN • Next.js • Backend-Focused
              </p>
            </div>

            <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed">
              I build scalable backend systems, secure APIs, and production-ready
              web applications. Currently a B.Tech student and Web Developer
              Intern at Tripify, passionate about system design and engineering
              excellence.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 active:bg-indigo-700 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                View My Work
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://drive.google.com/file/d/1MH9BeHwiQXw7O1fHc_llI6yXNychTvHQ/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                Download Resume
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-4 pt-2">
              {[
                { href: "https://github.com/farhankhan0986", label: "GitHub", Icon: Github },
                { href: "https://www.linkedin.com/in/farhan-abid-38967a259/", label: "LinkedIn", Icon: Linkedin },
                { href: "mailto:farhankhan080304@gmail.com", label: "Email", Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-indigo-500 hover:bg-white/10 hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            {/* Mobile initials */}
            <div className="flex md:hidden lg:hidden items-center justify-center w-full">
              <div className="h-20 w-20 rounded-full bg-indigo-500/20 flex items-center justify-center text-3xl font-bold text-indigo-400" style={{
    position: "relative",
    top: "-460px",
    right: "-140px"}}>
                FA
              </div>
            </div>

            {/* Desktop image */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-2xl">
                <img
                  src="/images/farhan.jpg"
                  alt="Farhan Abid"
                  className="w-full h-full object-cover opacity-90 relative z-10 shadow-2xl -top-12 left-16"
                  loading="lazy"
                />
                <div className="absolute -top-12 left-30 inset-0 bg-indigo-500/50 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-muted-foreground">Scroll to explore</p>
          <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}