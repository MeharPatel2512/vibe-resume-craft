
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, LogIn, User } from "lucide-react";

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

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Link to="/login">
            <Button variant="ghost" className="flex items-center gap-1">
              <LogIn className="w-4 h-4" />
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="primary-button">
              <User className="w-4 h-4" />
              Register
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
          mobileMenuOpen ? "max-h-80" : "max-h-0"
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
          <div className="border-t border-gray-100 pt-3 flex flex-col space-y-3">
            <Link
              to="/login"
              className="px-4 py-2 flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LogIn className="w-4 h-4" /> Login
            </Link>
            <Link
              to="/register"
              className="primary-button mx-4 flex items-center justify-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <User className="w-4 h-4" /> Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
