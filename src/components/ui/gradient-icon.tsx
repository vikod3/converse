import { CornerDecoration } from "./corner-decoration";
import { cn } from "@/lib/utils";

interface GradientIconProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const GradientIcon = ({ children, className, size = "md" }: GradientIconProps) => {
  const sizeClasses = {
    sm: "w-8 h-8 p-1.5",
    md: "w-12 h-12 p-3",
    lg: "w-16 h-16 p-2"
  };

  return (
    <div
      className={cn(
        "relative bg-gradient-to-b from-white/3 to-white/6 border border-white/20",
        "flex items-center justify-center text-white",
        "hover:from-white/5 hover:to-white/8 transition-all duration-200",
        "overflow-hidden group",
        sizeClasses[size],
        className
      )}
    >
      {/* Glow effect */}
      <div className="absolute inset-2 bg-white/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Corner decorations on all four corners */}
      <CornerDecoration position="top-left" />
      <CornerDecoration position="top-right" />
      <CornerDecoration position="bottom-left" />
      <CornerDecoration position="bottom-right" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};