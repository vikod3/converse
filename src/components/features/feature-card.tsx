import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { GradientIcon } from "@/components/ui/gradient-icon";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  buttonText: string;
  icon: React.ReactNode;
  image?: string;
  className?: string;
  span2?: boolean;
}

export const FeatureCard = ({ 
  title, 
  description, 
  buttonText, 
  icon, 
  image, 
  className,
  span2 = false 
}: FeatureCardProps) => {
  return (
    <Card className={cn(
      "relative p-6 bg-gradient-to-b from-white/5 to-white/10 border-white/10 backdrop-blur-sm",
      "hover:from-white/8 hover:to-white/15 transition-all duration-300",
      span2 && "lg:col-span-2",
      className
    )}>
      <div className="flex flex-col h-full">
        {/* Icon */}
        <div className="mb-6">
          <GradientIcon size="lg">
            {icon}
          </GradientIcon>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4">
          <h3 className="text-xl lg:text-2xl font-semibold text-white leading-tight">
            {title}
          </h3>
          <p className="text-sm text-white/70 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Image if provided */}
        {image && (
          <div className="my-6 rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Button */}
        <div className="mt-6">
          <GradientButton>
            {buttonText}
          </GradientButton>
        </div>
      </div>
    </Card>
  );
};