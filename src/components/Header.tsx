import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoTwoakt from "@/assets/logo-twoakt-new.png";

interface HeaderProps {
  onContactClick: () => void;
}

const navLinks = [
  { href: "#where-i-focus", label: "Where I focus" },
  { href: "#ways-to-work", label: "Ways to work together" },
  { href: "#my-approach", label: "My approach" },
  { href: "#about", label: "About" },
];

const Header = ({ onContactClick }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center">
          <img src={logoTwoakt} alt="twoakt" className="h-9 md:h-11 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://cal.com/paul-baratte-twoakt/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm font-semibold px-5 py-2.5 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
          >
            Book a call
          </a>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
