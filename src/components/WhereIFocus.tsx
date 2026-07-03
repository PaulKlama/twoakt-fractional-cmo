const pillars = [
  {
    title: "Strategy & positioning",
    description: "Defining where you play, how you win, and the priorities that follow.",
  },
  {
    title: "AI-first marketing systems",
    description:
      "Rebuilding how content, production and reporting actually get done, using AI to remove the bottlenecks that used to require a bigger team.",
  },
  {
    title: "Growth execution",
    description: "Turning strategy into paid and organic motions that move the number.",
  },
  {
    title: "Team & leadership",
    description: "Structuring the marketing function and growing the people who run it.",
  },
];

const WhereIFocus = () => {
  return (
    <section
      id="where-i-focus"
      className="py-24 md:py-32 scroll-mt-20 border-t border-border"
    >
      <div className="container">
        <div className="max-w-3xl mb-16">
          <p className="font-sans text-sm font-medium tracking-wide uppercase text-muted-foreground mb-6">
            Where I focus
          </p>
          <h2 className="text-headline font-display text-foreground mb-8">
            Four pillars, one operating model<span className="text-accent-brand">.</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            AI has changed what marketing leadership means. The CMOs who matter now are the ones who can set the strategy and rebuild how the work gets done. I do both, with AI at the center of how I operate.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="bg-card p-8 md:p-10 rounded-2xl border border-border hover:border-foreground/20 transition-all duration-300"
            >
              <span className="font-display text-sm font-semibold text-muted-foreground block mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                {p.title}
              </h3>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereIFocus;
