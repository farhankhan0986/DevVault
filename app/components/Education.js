import { CiLocationOn } from "react-icons/ci";
export default function Education() {
  return (
    <section className="relative isolate bg-background text-foreground pt-28 mb-10">
      <div aria-hidden className="absolute inset-0 -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-white/10 pt-16">
          <h2 className="text-5xl font-extrabold tracking-tight mb-10">
            Education{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
              Background
            </span>
          </h2>

          <div className="space-y-6 mt-1">
            {/* College */}
            <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(99,102,241,0.25)]">
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-indigo-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <div className="relative space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                    B.Tech – Artificial Intelligence & Data Science (2022-2026)
                  </h3>
                  <span className="text-sm text-indigo-300">CGPA: 7.8 (6th semester)</span>
                </div>

                <div className="flex items-center gap-20">
                  <p className="text-sm text-white/90">
                    GL Bajaj Institute of Technology and Management
                  </p>
                </div>
                <p className="text-sm text-white/80">
                  <CiLocationOn className="inline mr-1 relative -top-0.5" />{" "}
                  Greater Noida
                </p>
              </div>
            </div>

            {/* Class 12 */}
            <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(99,102,241,0.25)]">
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-indigo-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <div className="relative space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                    Class XII – PCM (2021-2022)
                  </h3>
                  <span className="text-sm text-indigo-300">85%</span>
                </div>

                <div className="flex items-center gap-20">
                  <p className="text-sm text-white/90">Lucknow Public School</p>
                </div>
                <p className="text-sm text-white/80">
                  <CiLocationOn className="inline mr-1 relative -top-0.5" />{" "}
                  Lucknow
                </p>
              </div>
            </div>

            {/* Class 10 */}
            <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(99,102,241,0.25)]">
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-indigo-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <div className="relative space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                    Class X – Science (2019-2020)
                  </h3>
                  <span className="text-sm text-indigo-300">83%</span>
                </div>

                <div className="flex items-center gap-20">
                  <p className="text-sm text-white/90">Lucknow Public School</p>
                </div>
                <p className="text-sm text-white/80">
                  <CiLocationOn className="inline mr-1 relative -top-0.5" />{" "}
                  Lucknow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
