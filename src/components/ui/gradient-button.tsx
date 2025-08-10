import { CornerDecoration } from "./corner-decoration";
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const GradientButton = ({ children, className, onClick }: GradientButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative px-4 py-2.5 bg-gradient-to-b from-white/3 to-white/6 border border-white/20",
        "text-white text-sm font-semibold leading-tight",
        "hover:from-white/5 hover:to-white/8 transition-all duration-200",
        "overflow-hidden group",
        className
      )}
    >
      {/* Glow effect */}
      <div className="absolute inset-x-4 bottom-0 h-2 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Corner decorations on all four corners */}
      <CornerDecoration position="top-left" />
      <CornerDecoration position="top-right" />
      <CornerDecoration position="bottom-left" />
      <CornerDecoration position="bottom-right" />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </button>
  );
};