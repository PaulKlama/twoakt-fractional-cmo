const steps = [
  {
    number: "01",
    title: "Audit",
    description: "Assess your marketing setup, positioning, channels and team.",
  },
  {
    number: "02",
    title: "Clarity & restitution",
    description: "Clear diagnosis, priorities and key recommendations.",
  },
  {
    number: "03",
    title: "Roadmap",
    description: "A focused, actionable roadmap aligned with your growth stage.",
  },
  {
    number: "04",
    title: "Execution & leadership",
    description: "I lead or support execution and bring senior marketing leadership when it matters.",
  },
  {
    number: "05",
    title: "Enablement & mentoring",
    description: "I help your marketing leaders and teams become autonomous and impactful.",
  },
  {
    number: "06",
    title: "Measurement & iteration",
    description: "We track results, adjust and keep moving forward.",
  },
];

const HowIWork = () => {
  return (
    <section id="how-i-work" className="py-24 md:py-32 bg-secondary scroll-mt-20">
      <div className="container">
        <div className="text-center mb-16">
          <p className="font-sans text-sm font-medium tracking-wide uppercase text-muted-foreground mb-6">
            How I work
          </p>
          <h2 className="text-headline font-display text-foreground mb-4">
            From clarity to action<span className="text-accent-brand">.</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-xl mx-auto">
            My approach is pragmatic and action-oriented.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="bg-background p-6 md:p-8 rounded-xl border border-border hover:border-foreground/20 transition-all duration-300"
            >
              <span className="font-display text-2xl text-accent-brand block mb-4">
                {step.number}
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
