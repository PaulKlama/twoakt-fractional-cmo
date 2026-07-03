import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send the form data to a backend
    setSubmitted(true);
    setTimeout(() => {
      onOpenChange(false);
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-background border-border">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl font-medium">
            Discutons de votre projet
          </DialogTitle>
        </DialogHeader>
        
        {submitted ? (
          <div className="py-12 text-center">
            <p className="font-serif text-xl mb-2">Merci !</p>
            <p className="font-sans text-muted-foreground">
              Je reviens vers vous rapidement.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 mt-4">
            <div>
              <label className="font-sans text-sm font-medium text-foreground block mb-2">
                Nom
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-secondary/50 border border-border font-sans text-sm focus:outline-none focus:border-foreground transition-colors"
                placeholder="Votre nom"
              />
            </div>
            
            <div>
              <label className="font-sans text-sm font-medium text-foreground block mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-secondary/50 border border-border font-sans text-sm focus:outline-none focus:border-foreground transition-colors"
                placeholder="votre@email.com"
              />
            </div>
            
            <div>
              <label className="font-sans text-sm font-medium text-foreground block mb-2">
                Entreprise
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-secondary/50 border border-border font-sans text-sm focus:outline-none focus:border-foreground transition-colors"
                placeholder="Nom de votre entreprise"
              />
            </div>
            
            <div>
              <label className="font-sans text-sm font-medium text-foreground block mb-2">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-secondary/50 border border-border font-sans text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                placeholder="Parlez-moi de votre projet et de vos enjeux..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full font-sans font-semibold px-6 py-4 bg-primary text-primary-foreground hover:bg-ink-light transition-colors"
            >
              Envoyer
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
