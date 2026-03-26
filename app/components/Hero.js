import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-screen -top-8 md:top-0 lg:top-0 flex items-center isolate bg-background text-foreground pt-28"
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_30%_10%,rgba(99,102,241,0.18),transparent_45%)]"
      />
      
      
      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.06] bg-[linear-gradient(to_right,rgba(0,0,0,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.12)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:40px_40px]"
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8 lg:text-left text-center">
            <div className="space-y-4">
              <h1
                id="hero-title"
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
              >
                Farhan{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
                  Abid
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
              I build scalable backend systems, secure APIs, and
              production-ready web applications. Currently a B.Tech student and
              Web Developer Intern at Tripify, passionate about system design
              and engineering excellence.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-2 lg:justify-start justify-center">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 active:bg-indigo-700 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                View My Work
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://drive.google.com/file/d/13tq18GTGeGZ_zoRhuh30OFjQsegtgEFf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:bg-[rgb(var(--border))] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                Download Resume
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-3 pt-1 lg:justify-start justify-center">
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
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/60 text-muted backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:border-indigo-500/50 hover:text-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <Icon className="h-[22px] w-[22px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            {/* Mobile initials */}
            {/* <div className="flex md:hidden items-center justify-center w-full">
              <div
                className="relative flex items-center justify-center"
                style={{
                  position: "relative",
                  top: "-460px",
                  right: "-140px",
                }}
              >
                Glow behind avatar
                <div className="absolute h-32 w-32 bg-indigo-500/30 blur-2xl rounded-full" />

                Spinning ring
                <div className="absolute h-28 w-28 rounded-full border-2 border-dashed border-indigo-400/40 animate-[spin_6s_linear_infinite]" />

                Avatar image
                <div className="relative h-20 w-20 rounded-full overflow-hidden ring-2 ring-indigo-500/30 shadow-lg shadow-indigo-500/20 hover:ring-indigo-400/60 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <img
                    src="/images/farhan.jpg"
                    alt="Farhan Abid"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                Floating tech markers
                {[
                  {
                    text: "React",
                    pos: "-top-5 left-1/2 -translate-x-1/2",
                    border: "border-indigo-500/30",
                    fg: "text-indigo-400",
                    delay: "0s",
                    duration: "6s",
                  },
                  {
                    text: "Node.js",
                    pos: "top-1/2 -translate-y-1/2 -right-10",
                    border: "border-purple-500/30",
                    fg: "text-purple-400",
                    delay: "1s",
                    duration: "7s",
                  },
                  {
                    text: "Next.js",
                    pos: "top-1/2 -translate-y-1/2 -left-16",
                    border: "border-emerald-500/30",
                    fg: "text-emerald-400",
                    delay: "0.5s",
                    duration: "9s",
                  },
                  {
                    text: "Express.js",
                    pos: "-bottom-5 left-1/2 -translate-x-1/2",
                    border: "border-pink-500/30",
                    fg: "text-pink-400",
                    delay: "2.5s",
                    duration: "7s",
                  },
                ].map(({ text, pos, border, fg, delay, duration }) => (
                  <div
                    key={text}
                    className={[
                      "absolute z-20",
                      pos,
                      "rounded-md border",
                      border,
                      "bg-background/80 px-2 py-1 text-[10px] font-semibold",
                      fg,
                      "shadow-md backdrop-blur-sm",
                    ].join(" ")}
                    style={{
                      animation: `float ${duration} ease-in-out ${delay} infinite`,
                    }}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div> */}

            {/* Desktop image */}
            <div className="flex flex-col lg:flex-row justify-center relative lg:-top-13 lg:left-15 mt-10">
              <div className="absolute h-full w-full rounded-full border-2 border-dashed border-indigo-400/40 lg:animate-[spin_3s_linear_infinite] animate-spin" />
              <div className="relative w-full max-w-md aspect-square">
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-indigo-500/30 blur-3xl rounded-full scale-75" />

                {/* Image — centered */}
                <img
                  src="/images/farhan.jpg"
                  alt="Farhan Abid"
                  className="relative z-10 lg:w-full lg:h-full w-72 h-72 object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                />

                {/* Inner gradient ring */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-violet-900/10 backdrop-blur-sm" />

                {/* Floating tech markers */}
                {[
                  {
                    text: "React",
                    pos: "-top-4 left-1/2 -translate-x-1/2",
                    border: "border-indigo-500/30",
                    fg: "text-indigo-400",
                    delay: "0s",
                    duration: "6s",
                  },
                  {
                    text: "Node.js",
                    pos: "top-1/4 -right-6",
                    border: "border-purple-500/30",
                    fg: "text-purple-400",
                    delay: "1s",
                    duration: "7s",
                  },
                  {
                    text: "PostgreSQL",
                    pos: "bottom-1/4 -left-6",
                    border: "border-violet-500/30",
                    fg: "text-violet-400",
                    delay: "2s",
                    duration: "8s",
                  },
                  {
                    text: "MongoDB",
                    pos: "-bottom-8 left-1/2 -translate-x-1/2",
                    border: "border-indigo-500/30",
                    fg: "text-indigo-400",
                    delay: "3s",
                    duration: "6s",
                  },
                  {
                    text: "Next.js",
                    pos: "top-[12%] -left-4",
                    border: "border-emerald-500/30",
                    fg: "text-emerald-400",
                    delay: "0.5s",
                    duration: "9s",
                  },
                  {
                    text: "C++",
                    pos: "bottom-[15%] right-1",
                    border: "border-pink-500/30",
                    fg: "text-pink-400",
                    delay: "2.5s",
                    duration: "7s",
                  },
                ].map(({ text, pos, border, fg, delay, duration }) => (
                  <div
                    key={text}
                    className={[
                      "absolute z-20",
                      pos,
                      "rounded-lg border",
                      border,
                      "bg-background/80 px-3 py-1.5 text-xs font-semibold",
                      fg,
                      "shadow-lg backdrop-blur-sm",
                    ].join(" ")}
                    style={{
                      animation: `float ${duration} ease-in-out ${delay} infinite`,
                    }}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
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
