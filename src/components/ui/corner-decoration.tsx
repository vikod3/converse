interface CornerDecorationProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

export const CornerDecoration = ({ position, className = "" }: CornerDecorationProps) => {
  const getPositionClasses = () => {
    switch (position) {
      case "top-left":
        return "top-2 left-2";
      case "top-right":
        return "top-2 right-2 rotate-90";
      case "bottom-left":
        return "bottom-2 left-2 -rotate-90";
      case "bottom-right":
        return "bottom-2 right-2 rotate-180";
      default:
        return "";
    }
  };

  return (
    <div className={`absolute ${getPositionClasses()} ${className}`}>
      <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 0.5H8M0.5 0.5V6" stroke="white" strokeOpacity="0.3" />
      </svg>
    </div>
  );
};