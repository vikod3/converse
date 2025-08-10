import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/nav-link";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  navigationItems: { label: string; href: string }[];
}

export const MobileMenu = ({ navigationItems }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="text-foreground hover:bg-accent/10"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
          <div className="container flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between py-4">
              <div className="text-xl font-bold text-foreground">LOGO</div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMenu}
                className="text-foreground hover:bg-accent/10"
              >
                <X size={24} />
              </Button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-4 py-8">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-lg py-4 text-center"
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="mt-auto pb-8">
              <Button 
                className="w-full" 
                onClick={closeMenu}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};