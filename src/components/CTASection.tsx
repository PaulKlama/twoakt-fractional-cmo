import { ArrowRight } from "lucide-react";
interface CTASectionProps {
  onContactClick: () => void;
}

const CAL_URL = "https://cal.com/paul-baratte-twoakt/30min";

const CTASection = ({
  onContactClick
}: CTASectionProps) => {
  const handleClick = () => {
    if (CAL_URL) {
      window.open(CAL_URL, "_blank");
    } else {
      onContactClick();
    }
  };
  return <section className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-headline font-display text-foreground mb-6">
            Ready to move forward<span className="text-primary">?</span>
          </h2>
          
          <button onClick={handleClick} className="group font-sans font-semibold px-10 py-4 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all text-base inline-flex items-center gap-2">
            Let's act
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>;
};
export default CTASection;