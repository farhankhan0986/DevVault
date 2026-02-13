import { CiLocationOn } from "react-icons/ci";
export default function Education() {
  return (
    <section className="relative isolate bg-background text-foreground pt-10 mb-10">
      <div aria-hidden className="absolute inset-0 -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-white/10 pt-16">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Education{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
                Background
              </span>
            </h2>
            <p className="max-w-2xl text-muted text-lg">
              Academic foundation supporting my work in software engineering,
              data systems, and applied development.
            </p>

            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full mt-3" />
          </div>

          <div className="space-y-6 mt-1 ">
            {/* College */}
            <div className="group relative rounded-xl border border-border bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 active:-translate-y-1 active:duration-300 active:transition-transform hover:shadow-[0_0_32px_rgba(99,102,241,0.25)]">
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-indigo-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <div className="relative space-y-3 ">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
                    B.Tech – Artificial Intelligence & Data Science (2022-2026)
                  </h3>
                  <span className="text-sm relative top-2.5 flex flex-col items-center justify-center text-indigo-500">
                    <p>CGPA: 7.8 </p>
                   
                    <p>(6th semester)</p>
                  </span>
                </div>

                <div className="flex items-center gap-20">
                  <p className="text-sm text-foreground/90">
                    GL Bajaj Institute of Technology and Management
                  </p>
                </div>
                <p className="text-sm text-foreground/80">
                  <CiLocationOn className="inline mr-1 relative -top-0.5" />{" "}
                  Greater Noida
                </p>
              </div>
            </div>

            {/* Class 12 */}
            <div className="group relative rounded-xl border border-border bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 active:-translate-y-1 active:duration-300 active:transition-transform hover:shadow-[0_0_32px_rgba(99,102,241,0.25)]">
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-indigo-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <div className="relative space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
                    Class XII – PCM (2021-2022)
                  </h3>
                  <span className="text-sm text-indigo-500">85%</span>
                </div>

                <div className="flex items-center gap-20">
                  <p className="text-sm text-foreground/90">Lucknow Public School</p>
                </div>
                <p className="text-sm text-foreground/80">
                  <CiLocationOn className="inline mr-1 relative -top-0.5" />{" "}
                  Lucknow
                </p>
              </div>
            </div>

            {/* Class 10 */}
            <div className="group relative rounded-xl border border-border bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 active:-translate-y-1 active:duration-300 active:transition-transform hover:shadow-[0_0_32px_rgba(99,102,241,0.25)]">
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-indigo-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <div className="relative space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
                    Class X – Science (2019-2020)
                  </h3>
                  <span className="text-sm text-indigo-500">83%</span>
                </div>

                <div className="flex items-center gap-20">
                  <p className="text-sm text-foreground/90">Lucknow Public School</p>
                </div>
                <p className="text-sm text-foreground/80">
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
