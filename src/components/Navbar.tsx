
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4",
        isScrolled ? "backdrop-blur-md border-b border-border/50" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/logo.png" 
            alt="BlissBerg Logo" 
            className="w-10 h-10 object-contain"
          />
           <span className="text-xl font-bold text-white font-cinzel">BLISSBERG</span>

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="text-white/70 hover:text-white transition-colors">About</Link>
          <Link to="/products" className="text-white/70 hover:text-white transition-colors">Products</Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white/70 hover:text-white transition-colors bg-transparent">
                  Courses
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <Link to="/courses/ai" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">AI Courses</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Explore artificial intelligence and machine learning courses</p>
                    </Link>
                    <Link to="/courses/semiconductor" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Semiconductor Courses</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Learn about semiconductor technology and manufacturing</p>
                    </Link>
                    <Link to="/courses/other" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Other Courses</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Browse programming, DevOps, and other technology courses</p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link to="/industries" className="text-white/70 hover:text-white transition-colors">Industries</Link>
          <Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link>
          <Button className="bg-gradient-to-r from-blissberg-primary to-blissberg-accent hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 top-16 backdrop-blur-md transition-transform duration-300 ease-in-out z-40",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center pt-10 space-y-6">
          <Link 
            to="/about" 
            className="text-white/70 hover:text-white text-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/products" 
            className="text-white/70 hover:text-white text-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </Link>
          <div className="flex flex-col items-center space-y-4">
            <span className="text-white/70 text-lg">Courses</span>
            <Link 
              to="/courses/ai"
              className="text-white/70 hover:text-white text-base transition-colors pl-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Courses
            </Link>
            <Link 
              to="/courses/semiconductor"
              className="text-white/70 hover:text-white text-base transition-colors pl-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Semiconductor Courses
            </Link>
            <Link 
              to="/courses/other"
              className="text-white/70 hover:text-white text-base transition-colors pl-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Other Courses
            </Link>
          </div>
          <Link 
            to="/industries" 
            className="text-white/70 hover:text-white text-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Industries
          </Link>
          <Link 
            to="/contact" 
            className="text-white/70 hover:text-white text-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Button className="mt-4 bg-gradient-to-r from-blissberg-primary to-blissberg-accent hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
