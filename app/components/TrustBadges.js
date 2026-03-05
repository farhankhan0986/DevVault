"use client";

const TrustBadges = () => {
  const techStack = [
    {
      name: "C++",
      focus: "DSA & performance",
      logo: "https://www.svgrepo.com/show/303480/c-logo.svg",
    },
    {
      name: "MongoDB",
      focus: "Schema design & aggregation",
      logo: "https://www.svgrepo.com/show/331488/mongodb.svg",
    },
    {
      name: "Express.js",
      focus: "REST APIs & middleware",
      logo: "https://www.manektech.com/storage/technology/image/1646733600.webp",
    },
    {
      name: "React",
      focus: "Hooks & state management",
      logo: "https://www.svgrepo.com/show/354259/react.svg",
    },
    {
      name: "Next.js",
      focus: "App Router & SSR",
      logo: "https://cdn.brandfetch.io/id2alue-rx/w/800/h/800/theme/dark/symbol.webp",
    },
    {
      name: "Node.js",
      focus: "APIs & async workflows",
      logo: "https://www.svgrepo.com/show/354119/nodejs-icon.svg",
    },
  ];

  return (
    <div>
      <p className="text-sm font-mono text-accent mb-6">Core Stack</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {techStack.map((item) => (
          <div
            key={item.name}
            className="group rounded-xl border border-border bg-card p-4 text-center transition-all duration-300 hover:border-border-hover hover:bg-card-hover"
          >
            <div className="flex justify-center mb-3">
              <img
                src={item.logo}
                alt={`${item.name} logo`}
                className="h-8 object-contain"
                crossOrigin="anonymous"
              />
            </div>
            <p className="text-sm font-medium text-foreground">{item.name}</p>
            <p className="text-xs text-muted mt-1">{item.focus}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges;
