import { cn } from "@/lib/utils";

interface NavLinkProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export const NavLink = ({ children, href = "#", className, onClick }: NavLinkProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm font-normal text-muted-foreground hover:text-foreground transition-colors duration-200 py-2 px-3 rounded-full hover:bg-accent/10",
        className
      )}
    >
      {children}
    </a>
  );
};