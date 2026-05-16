import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-screen -top-8 md:top-0 lg:top-0 flex items-center isolate bg-background text-foreground pt-28"
    >
      {/* Subtle noise grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Very subtle top glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(900px circle at 30% 10%, rgba(255,255,255,0.03), transparent 50%)",
        }}
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
                <span className="text-foreground opacity-90">
                  Abid
                </span>
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted">
                Full-Stack Web Developer
              </p>

              <p className="text-sm sm:text-base font-mono text-muted opacity-60">
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
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all focus-visible:outline-none"
                style={{
                  background: "rgb(var(--foreground))",
                  color: "rgb(var(--background))",
                }}
              >
                View My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://drive.google.com/file/d/1LktN70GtKD1NiPYmovxbazutCELFE4aW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border transition focus-visible:outline-none hover:bg-white/5"
                style={{ borderColor: "rgb(var(--border))", color: "rgb(var(--foreground))" }}
              >
                Download Resume
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-3 pt-1 lg:justify-start justify-center">
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
                  className="flex h-11 w-11 items-center justify-center rounded-xl border text-muted backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:text-foreground focus-visible:outline-none"
                  style={{ borderColor: "rgb(var(--border))", background: "rgba(var(--card),0.6)" }}
                >
                  <Icon className="h-[22px] w-[22px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <div className="flex flex-col lg:flex-row justify-center relative lg:-top-13 lg:left-15 mt-10">
              <div
                className="absolute h-full w-full rounded-full border-dashed lg:animate-[spin_12s_linear_infinite] animate-spin"
                style={{
                  borderColor: "transparent",
                  border: "1.5px dashed rgba(255,255,255,0.28)",
                }}
              />
              <div className="relative w-full max-w-md aspect-square">
                {/* Glow behind photo */}
                <div
                  className="absolute inset-0 blur-3xl rounded-full scale-110 -z-10"
                  style={{ background: "radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.18) 45%, transparent 72%)" }}
                />
                <div
                  className="absolute inset-0 blur-xl rounded-full scale-75 -z-10"
                  style={{ background: "radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.3) 40%, transparent 70%)" }}
                />

                <img
                  src="/images/farhan.jpg"
                  alt="Farhan Abid"
                  className="relative brightness-[0.85] transition-all duration-700 z-10 lg:w-full lg:h-full w-72 h-72 object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                />

                {/* Floating tech markers — coloured */}
                {[
                  {
                    text: "React",
                    pos: "-top-4 left-1/2 -translate-x-1/2",
                    delay: "0s",
                    duration: "6s",
                    color: "#7CB8D6",
                    glow: "rgba(124,184,214,0.22)"
                  },
                  {
                    text: "Node.js",
                    pos: "top-1/4 -right-6",
                    delay: "1s",
                    duration: "7s",
                    color: "#7A9B6E",
                    glow: "rgba(122,155,110,0.22)"
                  },
                  {
                    text: "PostgreSQL",
                    pos: "bottom-1/4 -left-6",
                    delay: "2s",
                    duration: "8s",
                    color: "#5C748A",
                    glow: "rgba(92,116,138,0.24)"
                  },
                  {
                    text: "MongoDB",
                    pos: "-bottom-8 left-1/2 -translate-x-1/2",
                    delay: "3s",
                    duration: "6s",
                    color: "#6F9A63",
                    glow: "rgba(111,154,99,0.22)"
                  },
                  {
                    text: "Next.js",
                    pos: "top-[12%] -left-4",
                    delay: "0.5s",
                    duration: "9s",
                    color: "#D6D6D6",
                    glow: "rgba(214,214,214,0.12)"
                  },
                  {
                    text: "C++",
                    pos: "bottom-[15%] right-1",
                    delay: "2.5s",
                    duration: "7s",
                    color: "#4E6E8C",
                    glow: "rgba(78,110,140,0.26)"
                  }
                ].map(({ text, pos, delay, duration, color, glow }) => (
                  <div
                    key={text}
                    className={[
                      "absolute z-20",
                      pos,
                      "rounded-lg",
                      "px-3 py-1.5 text-xs font-bold",
                      "backdrop-blur-sm",
                    ].join(" ")}
                    style={{
                      border: `1px solid ${color}44`,
                      background: "rgba(10,10,10,0.88)",
                      color: color,
                      boxShadow: `0 0 12px ${glow}, 0 2px 8px rgba(0,0,0,0.4)`,
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
          className="flex flex-col items-center gap-1.5 text-muted transition-colors hover:text-foreground"
        >
          <span className="text-xs tracking-wider">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
