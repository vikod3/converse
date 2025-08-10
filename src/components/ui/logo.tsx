import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      {/* Simplified logo using text - replace with actual logo/image */}
      <div className="text-xl font-bold text-foreground">
        LOGO
      </div>
    </div>
  );
};