import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { TerminalSection } from "@/components/sections/TerminalSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TerminalSection />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
