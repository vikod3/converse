import { Navbar } from "@/components/navigation/navbar";
import { HeroSection } from "@/components/hero/hero-section";
import { FeaturesSection } from "@/components/features/features-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default Index;
