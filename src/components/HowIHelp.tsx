import { ArrowRight } from "lucide-react";
interface HowIHelpProps {
  onContactClick: () => void;
}
const HowIHelp = ({
  onContactClick
}: HowIHelpProps) => {
  return <section id="how-i-help" className="py-24 md:py-32 scroll-mt-20 border-t border-border">
      <div className="container">
        <div className="text-center mb-16">
          <p className="font-sans text-sm font-medium tracking-wide uppercase text-muted-foreground mb-6">
            How I help
          </p>
          <h2 className="text-headline font-display text-foreground">
            Two ways to act<span className="text-accent-brand">.</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Fractional CMO */}
          <div className="group bg-card p-8 md:p-10 rounded-2xl border border-border hover:border-foreground/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-display text-sm font-semibold text-muted-foreground">01</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            
            <h3 className="font-display text-title text-foreground mb-4">
              Fractional CMO
            </h3>
            
            <p className="font-sans text-base text-muted-foreground mb-8 leading-relaxed">I step in as your senior marketing leader to bring clarity, structure, and momentum. From audit to roadmap, from execution to team leadership, I help you build marketing that supports your growth, at every stage.</p>
            
            <div className="space-y-3 mb-8">
              <p className="font-sans text-sm font-semibold text-foreground">Best for:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 font-sans text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-foreground" />
                  HR Tech companies scaling
                </li>
                <li className="flex items-center gap-3 font-sans text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-foreground" />
                  Teams needing senior marketing leadership
                </li>
                <li className="flex items-center gap-3 font-sans text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-foreground" />
                  Founders looking for impact, not noise
                </li>
              </ul>
            </div>
            
            <a href="https://cal.com/paul-baratte-twoakt/30min" target="_blank" rel="noopener noreferrer" className="group/btn font-sans text-sm font-semibold text-foreground flex items-center gap-2 hover:opacity-70 transition-opacity">
              Schedule a discovery call
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
          
          {/* Marketing Leadership Advisory */}
          <div className="group bg-secondary p-8 md:p-10 rounded-2xl border border-border hover:border-foreground/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-display text-sm font-semibold text-muted-foreground">02</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            
            <h3 className="font-display text-title text-foreground mb-4">
              Marketing Leadership Advisory
            </h3>
            
            <p className="font-sans text-base text-muted-foreground mb-8 leading-relaxed">
              I work alongside CEOs to strengthen their marketing leadership. I help develop autonomous, impact-driven marketing leaders and secure long-term marketing effectiveness.
            </p>
            
            <div className="space-y-3 mb-8">
              <p className="font-sans text-sm font-semibold text-foreground">Best for:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 font-sans text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-foreground" />
                  First Head of Marketing
                </li>
                <li className="flex items-center gap-3 font-sans text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-foreground" />
                  Growing marketing teams
                </li>
                <li className="flex items-center gap-3 font-sans text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-foreground" />
                  Strategic transitions
                </li>
              </ul>
            </div>
            
            <a href="https://cal.com/paul-baratte-twoakt/30min" target="_blank" rel="noopener noreferrer" className="group/btn font-sans text-sm font-semibold text-foreground flex items-center gap-2 hover:opacity-70 transition-opacity">
              Invest in your marketing leaders
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default HowIHelp;