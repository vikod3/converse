import { Badge } from "@/components/ui/badge";
import { FeatureCard } from "./feature-card";
import { Bot, MessageSquare, Zap } from "lucide-react";
import { AnimatedText } from "@/components/ui/animated-text";
export const FeaturesSection = () => {
  return <section className="relative min-h-screen bg-background py-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 lg:items-end mb-16">
          {/* Left side - Main content */}
          <div className="flex flex-col gap-6">
            <div className="relative w-fit px-4 py-2 bg-gradient-to-b from-white/3 to-white/6 border border-white/20 text-sm bg-transparent overflow-hidden group">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-2 h-2 z-50" style={{ borderTop: '1px solid white', borderLeft: '1px solid white' }} />
              <div className="absolute top-0 right-0 w-2 h-2 z-50 rotate-90" style={{ borderTop: '1px solid white', borderLeft: '1px solid white' }} />
              <div className="absolute bottom-0 left-0 w-2 h-2 z-50 -rotate-90" style={{ borderTop: '1px solid white', borderLeft: '1px solid white' }} />
              <div className="absolute bottom-0 right-0 w-2 h-2 z-50 rotate-180" style={{ borderTop: '1px solid white', borderLeft: '1px solid white' }} />
              
              {/* Content */}
              <span className="relative z-10 bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">OUR FEATURES</span>
            </div>
            
            <AnimatedText 
              text="Everything You Need to Build an AI Chat App"
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-foreground max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl"
              delay={0.2}
            />
          </div>
          
          {/* Right side - Description aligned at bottom */}
          <div className="lg:flex lg:items-end lg:justify-end">
            <AnimatedText 
              text="Maestro is a modern AI chatbot UI kit crafted to deliver intuitive, seamless, and futuristic chatbot experiences."
              as="p"
              className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xs sm:max-w-sm lg:text-right"
              delay={0.4}
            />
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <FeatureCard span2={true} title="Seamless AI Management. Anywhere, Anytime." description="Get full control over your AI agents with our powerful cloud dashboard. Monitor performance, deploy updates, and refine workflows, all in real-time, from any browser." buttonText="Get started Now" icon={<Bot size={24} />} image="/lovable-uploads/4fae5db9-e447-477d-ab07-7ae58f7bbdb9.png" />
          
          <FeatureCard title="Tailor-Made Conversations. Just for You." description="Craft unique responses and behaviors for your chatbot using our flexible logic editor. Match your brand's tone, style, and intelligence to create the perfect conversational experience." buttonText="Go to Features" icon={<MessageSquare size={24} />} />
        </div>
      </div>
    </section>;
};