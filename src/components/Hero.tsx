import { ArrowRight } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[70vh] flex items-center justify-center pt-20 pb-12">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-sm md:text-base font-medium text-muted-foreground mb-8 animate-fade-in">
            Fractional CMO · Strategic &amp; Operational
          </p>

          <h1 className="text-display font-display text-foreground mb-8 animate-fade-in-up opacity-0 delay-100">
            Your next act in
            <br />
            marketing starts now<span className="text-accent-brand">.</span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up opacity-0 delay-200">
            Fractional CMO for B2B tech scale-ups. Strategy and execution, in one leader.
          </p>

          <div className="flex justify-center animate-fade-in-up opacity-0 delay-300">
            <a
              href="https://cal.com/paul-baratte-twoakt/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-sans font-semibold px-8 py-4 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all text-base flex items-center justify-center gap-2"
            >
              Book a call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
