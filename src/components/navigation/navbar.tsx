import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { NavLink } from "@/components/ui/nav-link";
import { MobileMenu } from "./mobile-menu";
import { ArrowUpRight } from "lucide-react";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Feature", href: "#features" },
  { label: "How it Work", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact Us", href: "#contact" },
];

export const Navbar = () => {
  return (
    <header className="w-full px-4 sm:px-8 lg:px-15 py-3 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <NavLink key={item.label} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button className="rounded-full px-4 py-2">
            Get Started
            <ArrowUpRight size={16} />
          </Button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu navigationItems={navigationItems} />
      </div>
    </header>
  );
};