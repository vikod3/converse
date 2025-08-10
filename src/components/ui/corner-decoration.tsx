interface CornerDecorationProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

export const CornerDecoration = ({ position, className = "" }: CornerDecorationProps) => {
  const getPositionClasses = () => {
    switch (position) {
      case "top-left":
        return "top-0 left-0 rotate-180 origin-top-left";
      case "top-right":
        return "top-0 right-0 -rotate-90 origin-top-right";
      case "bottom-left":
        return "bottom-0 left-0 rotate-90 origin-bottom-left";
      case "bottom-right":
        return "bottom-0 right-0 origin-bottom-right";
      default:
        return "";
    }
  };

  return (
    <div 
      className={`absolute w-[8.5px] h-[7px] outline outline-1 outline-white outline-offset-[-0.5px] ${getPositionClasses()} ${className}`}
    />
  );
};