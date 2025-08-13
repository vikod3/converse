import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <img 
        src="/lovable-uploads/d5a8a1c6-12cf-4724-82c8-a0250070d999.png" 
        alt="Maesttro Logo" 
        className="h-8 w-auto"
      />
    </div>
  );
};