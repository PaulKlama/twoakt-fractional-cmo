import { ArrowRight } from "lucide-react";
interface HeroProps {
  onContactClick: () => void;
}
const Hero = ({
  onContactClick
}: HeroProps) => {
  return <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-sm md:text-base font-medium text-muted-foreground mb-8 animate-fade-in">
            Fractional CMO · HR Tech
          </p>
          
          <h1 className="text-display font-display text-foreground mb-8 animate-fade-in-up opacity-0 delay-100">
            Your next act in
            <br />
            marketing starts now<span className="text-accent-brand">.</span>
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up opacity-0 delay-200">
            Fractional CMO for HR Tech companies at key stages of growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 delay-300">
            <a href="https://cal.com/paul-baratte-twoakt/30min" target="_blank" rel="noopener noreferrer" className="group font-sans font-semibold px-8 py-4 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all text-base flex items-center justify-center gap-2">
              Book a call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#how-i-help" className="font-sans font-medium px-8 py-4 border border-border text-foreground rounded-full hover:bg-secondary transition-all text-base text-center">
              Explore how I help
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;