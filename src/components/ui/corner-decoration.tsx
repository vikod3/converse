interface CornerDecorationProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

export const CornerDecoration = ({ position, className = "" }: CornerDecorationProps) => {
  const getPositionClasses = () => {
    switch (position) {
      case "top-left":
        return "top-0 left-0";
      case "top-right":
        return "top-0 right-0 rotate-90";
      case "bottom-left":
        return "bottom-0 left-0 -rotate-90";
      case "bottom-right":
        return "bottom-0 right-0 rotate-180";
      default:
        return "";
    }
  };

  return (
    <div 
      className={`absolute w-2 h-2 z-50 ${getPositionClasses()} ${className}`}
      style={{
        borderTop: '1px solid white',
        borderLeft: '1px solid white',
      }}
    />
  );
};