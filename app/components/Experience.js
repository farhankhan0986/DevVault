export default function Experience() {
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
            Work{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="space-y-6">
            <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(99,102,241,0.25)]">
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-indigo-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <div className="relative space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    Web Developer Intern
                  </h3>
                  <span className="text-sm text-indigo-300">
                    Jan 2026 – Present
                  </span>
                </div>

                <p className="text-sm text-white/70">
                  Tripify Pvt. Ltd.
                </p>

                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  <li>• Built and maintained MERN-based production features</li>
                  <li>• Designed secure REST APIs with JWT authentication</li>
                  <li>• Improved scalability and code organization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
