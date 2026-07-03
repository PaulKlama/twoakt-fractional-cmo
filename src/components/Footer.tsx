import { Linkedin } from "lucide-react";
import logoTwoakt from "@/assets/logo-twoakt-new.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img 
            src={logoTwoakt} 
            alt="twoakt" 
            className="h-5 w-auto opacity-60" 
          />
          
          <div className="flex items-center gap-8">
            <a 
              href="mailto:hello@twoakt.com" 
              className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              hello@twoakt.com
            </a>
            <a 
              href="https://www.linkedin.com/in/paul-baratte/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
          
          <p className="font-sans text-sm text-muted-foreground">
            © 2026 twoakt
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
