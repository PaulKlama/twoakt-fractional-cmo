const About = () => {
  return <section id="about" className="py-24 md:py-32 scroll-mt-20 border-t border-border">
      <div className="container max-w-4xl">
        <div className="space-y-12">
          {/* About - texte simple */}
          <div>
            <p className="font-sans text-sm font-medium tracking-wide uppercase text-muted-foreground mb-4">
              About
            </p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              Why I understand HR Tech?
            </h2>
            
            <div className="space-y-4">
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                I've spent over ten years building and scaling marketing in HR Tech.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                I've worked closely with HR teams, through podcasts, events and field conversations, to understand their constraints, priorities, and decision-making.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                From early-stage startups to global leaders, post-acquisition environments and private equity-backed groups, I've seen how marketing needs to adapt at every phase of growth.
              </p>
            </div>
          </div>
          
          {/* Why twōakt - bloc avec fond */}
          <div className="bg-secondary p-8 md:p-10 rounded-2xl border border-border">
            <p className="font-sans text-sm font-medium tracking-wide uppercase text-muted-foreground mb-4">
              Act Two
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">Why twoakt?</h3>
            
            <div className="space-y-4">
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                Act One was about listening, learning, and understanding HR.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                Act Two is about acting: turning insight into structure, momentum, and results.
              </p>
              <p className="font-sans text-lg text-foreground font-medium mt-4">twoakt is where experience meets action.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;