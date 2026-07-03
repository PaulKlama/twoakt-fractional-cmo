const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 scroll-mt-20 border-t border-border">
      <div className="container max-w-4xl">
        <div className="space-y-12">
          <div>
            <p className="font-sans text-sm font-medium tracking-wide uppercase text-muted-foreground mb-4">
              About
            </p>
            <h2 className="text-headline font-display text-foreground mb-8">
              Strategy and execution, under one roof<span className="text-accent-brand">.</span>
            </h2>

            <div className="space-y-5">
              <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                I&apos;ve spent over a decade building and scaling marketing for growing tech companies, from early-stage startups to global leaders, post-acquisition environments and private equity-backed groups.
              </p>
              <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                That range taught me one thing. The leaders who move fastest aren&apos;t the ones who delegate everything, or the ones stuck in the weeds. They set the strategy and rebuild the campaign. They write the roadmap and ship the asset.
              </p>
              <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                That&apos;s the gap I fill: a fractional CMO who handles both, AI-first, from day one.
              </p>
              <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
                I have a particular interest in product-led growth, B2B influence and employee advocacy. When a company has the right conditions for it, these are some of the highest-leverage levers I know.
              </p>
            </div>
          </div>

          <div className="bg-secondary p-8 md:p-12 rounded-2xl border border-border">
            <p className="font-sans text-sm font-medium tracking-wide uppercase text-muted-foreground mb-6">
              Act Two
            </p>
            <div className="space-y-4">
              <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed">
                Act One was about learning how growing companies actually win.
              </p>
              <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed">
                Act Two is about acting: turning insight into structure, momentum, and results.
              </p>
              <p className="font-display text-xl md:text-2xl text-foreground font-semibold leading-relaxed pt-2">
                twoakt is where experience meets action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
