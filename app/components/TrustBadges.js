"use client";

const TrustBadges = () => {
  const techStack = [
    {
      name: "C++",
      description: "High-performance compiled language",
      focus: "DSA, memory management",
      logo: "https://www.svgrepo.com/show/303480/c-logo.svg",
    },
    {
      name: "MongoDB",
      description: "NoSQL database for scalable data storage",
      focus: "Schema design, indexing, aggregation",
      logo: "https://www.svgrepo.com/show/331488/mongodb.svg",
    },
    {
      name: "Express.js",
      description: "Minimal and flexible Node.js framework",
      focus: "REST APIs, middleware, auth",
      logo: "https://www.manektech.com//storage/technology/image/1646733600.webp",
    },
    {
      name: "React",
      description: "Component-based frontend library",
      focus: "Hooks, state management, UI logic",
      logo: "https://www.svgrepo.com/show/354259/react.svg",
    },
    {
      name: "Next.js",
      description: "React framework for production apps",
      focus: "App Router, SSR, performance",
      logo: "https://cdn.brandfetch.io/id2alue-rx/w/800/h/800/theme/dark/symbol.webp?c=1bxid64Mup7aczewSAYMX&t=1762498501254",
    },
    {
      name: "Node.js",
      description: "JavaScript runtime for backend systems",
      focus: "APIs, async workflows, scalability",
      logo: "https://www.svgrepo.com/show/354119/nodejs-icon.svg",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-background ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Core{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h3>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Technologies I use to build scalable, secure, and production-ready
            full-stack applications with a focus on backend architecture and API
            design.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {techStack.map((item) => (
            <div key={item.name} className="relative group">
              {/* Base card */}
              <div className="rounded-xl bg-card border border-border/60 px-4 py-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex justify-center mb-3">
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className="h-8 object-contain"
                  />
                </div>

                <div className="text-sm font-semibold">{item.name}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {item.description}
                </div>
              </div>

              {/* Hover detail */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-72 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30">
                <div className="rounded-xl border border-border bg-card p-4 text-sm shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={item.logo}
                      alt=""
                      className="h-5 object-contain"
                    />
                    <span className="font-semibold">{item.name}</span>
                  </div>

                  <p className="text-muted-foreground mb-2">
                    {item.description}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Focus:</span>{" "}
                    {item.focus}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
