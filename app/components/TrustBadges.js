"use client";

const scrollbarHideStyles = `
  .trust-scroll-hide::-webkit-scrollbar { display: none; }
  .trust-scroll-hide { -ms-overflow-style: none; scrollbar-width: none; }
`;

const TrustBadges = () => {
  const techStack = [
    {
      name: "C++",
      description: "High-performance & compiled language",
      focus: "DSA, memory management",
      logo: "https://www.svgrepo.com/show/373528/cpp3.svg",
      color: "#00599C",
    },
    {
      name: "MongoDB",
      description: "NoSQL database for scalable data storage",
      focus: "Schema design, indexing, aggregation",
      logo: "https://www.svgrepo.com/show/331488/mongodb.svg",
      color: "#47A248",
    },
    {
      name: "Express.js",
      description: "Minimal and flexible Node.js framework",
      focus: "REST APIs, middleware, auth",
      logo: "https://www.manektech.com/storage/technology/image/1646733600.webp",
      color: "#ffffff",
    },
    {
      name: "React",
      description: "Component-based UI frontend library",
      focus: "Hooks, state management, UI logic",
      logo: "https://www.svgrepo.com/show/354259/react.svg",
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      description: "React framework for production apps",
      focus: "App Router, SSR, performance",
      logo: "https://cdn.brandfetch.io/id2alue-rx/w/800/h/800/theme/dark/symbol.webp",
      color: "#ffffff",
    },
    {
      name: "Node.js",
      description: "JavaScript runtime for backend systems",
      focus: "APIs, async workflows, scalability",
      logo: "https://www.svgrepo.com/show/354119/nodejs-icon.svg",
      color: "#339933",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <style>{scrollbarHideStyles}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Core{" "}
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-600 "
              // style={{
              //   backgroundImage:
              //     "linear-gradient(135deg, var(--gradient-from, #6366f1), var(--gradient-via, #8b5cf6), var(--gradient-to, #a78bfa))",
              // }}
            >
              Tech Stack
            </span>
          </h3>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Technologies I use to build scalable, secure, and production-ready
            full-stack applications with a focus on backend architecture and API
            design.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {techStack.map((item) => (
            <div
              key={item.name}
              className="relative group"
              style={{ "--card-color": item.color }}
            >
              {/* Underglow */}
              <div
                className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 h-8 w-3/4 rounded-full blur-xl opacity-0 group-active:opacity-40 group-hover:opacity-40 transition-opacity duration-500"
                style={{ backgroundColor: item.color }}
              />

              {/* Card */}
              <div
                className="relative rounded-2xl px-4 py-6 text-center border border-white/10 bg-white/5 backdrop-blur-md shadow-sm transition-all duration-300 ease-out group-active:-translate-y-1.5 group-hover:-translate-y-1.5 group-active:shadow-lg group-hover:shadow-lg"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = item.color;
                  e.currentTarget.style.boxShadow = `0 0 24px ${item.color}44, 0 4px 24px rgba(0,0,0,0.2)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                {/* Logo */}
                <div className="flex justify-center mb-4">
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                    className="h-10 w-10 object-contain transition-transform duration-300 group-active:scale-110 group-hover:scale-110"
                  />
                </div>

                {/* Name */}
                <p className="text-sm font-semibold leading-tight">
                  {item.name}
                </p>

                {/* Description */}
                <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;