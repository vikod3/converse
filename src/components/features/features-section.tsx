import { Badge } from "@/components/ui/badge";

export const FeaturesSection = () => {
  return (
    <section className="relative min-h-screen bg-background py-16 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Main content */}
          <div className="flex flex-col gap-6">
            <Badge variant="outline" className="w-fit px-4 py-2 text-sm border-white/20 text-white/70 bg-transparent">
              OUR FEATURES
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-foreground">
              Everything You Need to Build an AI Chat App
            </h2>
          </div>
          
          {/* Right side - Description */}
          <div className="flex items-start pt-8 lg:pt-16">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
              Maestro is a modern AI chatbot UI kit crafted to deliver intuitive, seamless, and futuristic chatbot experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};