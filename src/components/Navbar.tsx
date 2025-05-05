
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold gradient-text">
            VibeResume
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link
            to="/"
            className={`px-4 py-2 rounded-lg transition-all ${
              isActive("/") 
                ? "text-resume-primary font-medium" 
                : "hover:text-resume-primary"
            }`}
          >
            Home
          </Link>
          <Link
            to="/builder"
            className={`px-4 py-2 rounded-lg transition-all ${
              isActive("/builder") 
                ? "text-resume-primary font-medium" 
                : "hover:text-resume-primary"
            }`}
          >
            Resume Builder
          </Link>
          <Link
            to="/about"
            className={`px-4 py-2 rounded-lg transition-all ${
              isActive("/about") 
                ? "text-resume-primary font-medium" 
                : "hover:text-resume-primary"
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`px-4 py-2 rounded-lg transition-all ${
              isActive("/contact") 
                ? "text-resume-primary font-medium" 
                : "hover:text-resume-primary"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/builder">
            <Button className="primary-button">
              Create Resume
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`bg-foreground h-0.5 w-full rounded-full transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`bg-foreground h-0.5 w-full rounded-full transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-foreground h-0.5 w-full rounded-full transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden md:hidden ${
          mobileMenuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="container py-4 flex flex-col space-y-3">
          <Link
            to="/"
            className={`px-4 py-2 ${
              isActive("/") ? "text-resume-primary font-medium" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/builder"
            className={`px-4 py-2 ${
              isActive("/builder") ? "text-resume-primary font-medium" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Resume Builder
          </Link>
          <Link
            to="/about"
            className={`px-4 py-2 ${
              isActive("/about") ? "text-resume-primary font-medium" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`px-4 py-2 ${
              isActive("/contact") ? "text-resume-primary font-medium" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link to="/builder" onClick={() => setMobileMenuOpen(false)}>
            <Button className="primary-button w-full">
              Create Resume
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
