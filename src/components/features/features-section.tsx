import { Badge } from "@/components/ui/badge";
import { FeatureCard } from "./feature-card";
import { Bot, MessageSquare, Zap } from "lucide-react";
export const FeaturesSection = () => {
  return <section className="relative min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 lg:items-end mb-16">
          {/* Left side - Main content */}
          <div className="flex flex-col gap-6">
            <Badge variant="outline" className="w-fit px-4 py-2 text-sm border-white/20 text-white/70 bg-transparent">
              OUR FEATURES
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-foreground">
              Everything You Need to Build an AI Chat App
            </h2>
          </div>
          
          {/* Right side - Description aligned at bottom */}
          <div className="lg:flex lg:items-end lg:justify-end">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md lg:text-right">
              Maestro is a modern AI chatbot UI kit crafted to deliver intuitive, seamless, and futuristic chatbot experiences.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <FeatureCard span2={true} title="Seamless AI Management. Anywhere, Anytime." description="Get full control over your AI agents with our powerful cloud dashboard. Monitor performance, deploy updates, and refine workflows, all in real-time, from any browser." buttonText="Get started Now" icon={<Bot size={24} />} image="/lovable-uploads/b8716932-c9b4-4e3c-9c71-39e7215a804b.png" />
          
          <FeatureCard title="Tailor-Made Conversations. Just for You." description="Craft unique responses and behaviors for your chatbot using our flexible logic editor. Match your brand's tone, style, and intelligence to create the perfect conversational experience." buttonText="Go to Features" icon={<MessageSquare size={24} />} />
        </div>
      </div>
    </section>;
};