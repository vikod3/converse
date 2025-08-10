import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { AnimatedText } from "@/components/ui/animated-text";

export const HeroContent = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 text-center max-w-4xl mx-auto">
      <div className="flex flex-col items-center gap-4">
        <AnimatedText 
          text="Empower Conversations with Smarter AI"
          as="h1"
          className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight text-foreground"
        />
        <AnimatedText 
          text="Maesttro is a modern AI chatbot UI kit crafted to deliver intuitive, seamless, and futuristic chatbot experiences."
          as="p"
          className="text-sm sm:text-base max-w-sm lg:max-w-md text-muted-foreground leading-relaxed"
          delay={0.3}
        />
      </div>
      <Button variant="default" className="mt-2 rounded-full">
        Get Started
        <ArrowUpRight size={16} />
      </Button>
    </div>
  );
};