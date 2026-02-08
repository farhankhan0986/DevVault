export default function Education() {
  return (
    <section className="relative isolate bg-background text-foreground pt-28">
      {/* background glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 "
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-white/10 pt-16">
          <h2 className="text-2xl font-extrabold tracking-tight mb-10">
            Education{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
              Background
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_0_28px_rgba(99,102,241,0.25)]">
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-indigo-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <div className="relative space-y-2">
                <h3 className="text-lg font-semibold text-white">
                  B.Tech — Computer Science
                </h3>
                <p className="text-sm text-white/70">
                  XYZ University
                </p>
                <p className="text-sm text-indigo-300">
                  2022 – 2026
                </p>
              </div>
            </div>

            <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_0_28px_rgba(99,102,241,0.25)]">
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-indigo-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <div className="relative space-y-2">
                <h3 className="text-lg font-semibold text-white">
                  Self-Learning & Practice
                </h3>
                <p className="text-sm text-white/70">
                  Full-Stack Development & System Design
                </p>
                <p className="text-sm text-indigo-300">
                  Ongoing
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
        aria-hidden
        className="absolute inset-0 -z-10 "
      />
      </div>
      
    </section>
  );
}
