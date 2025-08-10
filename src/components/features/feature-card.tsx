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
      "relative p-6 bg-white/[0.04] border-white/20 backdrop-blur-sm rounded-3xl",
      "hover:bg-white/[0.06] transition-all duration-300",
      span2 && "lg:col-span-2",
      className
    )}>
      <div className="flex flex-col md:flex-row h-full gap-6">
        {/* Left side - Content */}
        <div className="flex flex-col justify-center flex-1 gap-6">
          {/* Icon */}
          <div>
            <GradientIcon size="lg">
              {icon}
            </GradientIcon>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-xl lg:text-2xl font-semibold text-white leading-tight">
              {title}
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Button */}
          <div>
            <GradientButton>
              {buttonText}
            </GradientButton>
          </div>
        </div>

        {/* Right side - Image if provided */}
        {image && (
          <div className="flex-shrink-0 md:w-48 lg:w-56">
            <div className="rounded-lg overflow-hidden h-48 md:h-full">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};