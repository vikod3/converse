import { Button } from "@/components/ui/button";

export const HeroContent = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 text-center max-w-4xl mx-auto">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight text-foreground">
          Empower Conversations with Smarter AI
        </h1>
        <p className="text-sm sm:text-base max-w-sm lg:max-w-md text-muted-foreground leading-relaxed">
          Maesttro is a modern AI chatbot UI kit crafted to deliver intuitive, seamless, and futuristic chatbot experiences.
        </p>
      </div>
      <Button variant="default" className="mt-2">
        Get Started
      </Button>
    </div>
  );
};