import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RealitySection from "@/components/RealitySection";
import HowIHelp from "@/components/HowIHelp";
import HowIWork from "@/components/HowIWork";
import About from "@/components/About";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const handleContactClick = () => {
    setContactOpen(true);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header onContactClick={handleContactClick} />
      <Hero onContactClick={handleContactClick} />
      <RealitySection />
      <HowIHelp onContactClick={handleContactClick} />
      <HowIWork />
      <About />
      <CTASection onContactClick={handleContactClick} />
      <Footer />
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </main>
  );
};

export default Index;
