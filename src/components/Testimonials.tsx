const testimonials = [
  { company: "MyTraffic" },
  { company: "Bloomays" },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <p className="font-sans text-sm font-medium tracking-wide uppercase text-muted-foreground mb-6">
            Testimonials
          </p>
          <h2 className="text-headline font-display text-foreground">
            What it&apos;s like to work together<span className="text-accent-brand">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.company}
              className="bg-background/60 p-8 md:p-10 rounded-2xl border-2 border-dashed border-border"
            >
              <p className="font-sans text-xs font-medium tracking-wide uppercase text-muted-foreground/70 mb-4">
                Placeholder
              </p>
              <p className="font-display text-lg md:text-xl text-muted-foreground/80 italic leading-relaxed mb-8">
                &ldquo;[Quote to be added]&rdquo;
              </p>
              <div className="space-y-1">
                <p className="font-sans text-sm font-semibold text-foreground/70">
                  [Name]
                </p>
                <p className="font-sans text-sm text-muted-foreground/70">
                  [Role], {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
