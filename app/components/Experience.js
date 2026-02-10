import { CiLocationOn } from "react-icons/ci";
export default function Experience() {
  return (
    <section className="relative select-none isolate bg-background text-foreground pt-28">
      {/* background glow */}
      <div aria-hidden className="absolute inset-0 -z-10 " />

      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-white/10 pt-16">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              My{"  "}
              <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
              Experience
              </span>
            </h2>
            <p className="max-w-2xl text-muted text-lg">
              Real-world experience building, maintaining, and scaling backend
              systems and production applications.
            </p>

            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full mt-3" />
          </div>

          <div className="space-y-6 duration-300 active:-translate-y-2 active:duration-300 active:transition-transform">
            <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(99,102,241,0.25)]">
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-indigo-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <div className="relative space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                    AI Agent Developer Intern
                  </h3>
                  <span className="text-sm text-indigo-300">
                    Jan 2025 – Present
                  </span>
                </div>
                <div className="flex items-center gap-20">
                  <p className="text-sm text-white/90">Tripify Pvt. Ltd.</p>
                  <p className="text-sm text-white/80">
                    <CiLocationOn className="inline mr-1 relative -top-0.5" />{" "}
                    Remote (Greater Noida)
                  </p>
                </div>
                <ul className="mt-3 space-y-1 text-sm text-white/80">
                  <li className="flex gap-1 items-center">
                    <p className="text-indigo-300 text-2xl">•</p> Built and
                    maintained backend logic for a production travel booking
                    platform using Supabase Edge Functions and PostgreSQL.
                  </li>
                  <li className="flex gap-1 items-center">
                    <p className="text-indigo-300 text-2xl">•</p> Integrated
                    third-party travel APIs (including Amadeus) with real-time
                    data handling, rate limiting, retries, and environment-based
                    switching.
                  </li>
                  <li className="flex gap-1 items-center">
                    <p className="text-indigo-300 text-2xl">•</p>Developed
                    AI-assisted tools to automate and optimize Google Ads
                    marketing workflows using performance data.
                  </li>
                  <li className="flex gap-1 items-center">
                    <p className="text-indigo-300 text-2xl">•</p> Debugged and
                    resolved live production issues using logs and API tracing,
                    improving reliability of flight search and booking flows.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-start pl-6 my-5">
            <div className="h-15 w-px bg-white/50" />
          </div>

          <div className="space-y-6 mt-1 duration-300 active:-translate-y-2 active:duration-300 active:transition-transform">
            <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(99,102,241,0.25)]">
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-indigo-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <div className="relative space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                    MERN Stack Developer Intern
                  </h3>
                  <span className="text-sm text-indigo-300">
                    Dec 2025 (4 Weeks)
                  </span>
                </div>

                <div className="flex items-center gap-20">
                  <p className="text-sm text-white/90">Codec Technologies</p>
                  <p className="text-sm text-white/80">
                    <CiLocationOn className="inline mr-1 relative -top-0.5" />{" "}
                    Online
                  </p>
                </div>

                <ul className="mt-3 space-y-1 text-sm text-white/80">
                  <li className="flex gap-1 items-center">
                    <p className="text-indigo-300 text-2xl">•</p> Built
                    full-stack features using the MERN stack (MongoDB,
                    Express.js, React, Node.js).
                  </li>
                  <li className="flex gap-1 items-center">
                    <p className="text-indigo-300 text-2xl">•</p> Developed
                    responsive React components using hooks, routing, and
                    reusable UI patterns.
                  </li>
                  <li className="flex gap-1 items-center">
                    <p className="text-indigo-300 text-2xl">•</p> Implemented
                    RESTful APIs with Express.js and Node.js, including
                    middleware and JWT-based authentication.
                  </li>
                  <li className="flex gap-1 items-center">
                    <p className="text-indigo-300 text-2xl">•</p> Worked with
                    MongoDB and Mongoose for CRUD operations and backend data
                    modeling.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
