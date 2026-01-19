"use client";

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import SolutionsMegaMenu from "./menus/SolutionsMegaMenu";
import IndustriesMegaMenu from "./menus/IndustriesMegaMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767 && isMenuOpen) {
        setIsMenuOpen(false);
        setMobileSubmenuOpen(null);
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    setMobileSubmenuOpen(null);
    document.body.style.overflow = newMenuState ? "hidden" : "";
  };

  const toggleMobileSubmenu = (name: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === name ? null : name);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMobileSubmenuOpen(null);
    document.body.style.overflow = "";
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 h-[var(--header-height)] z-[999] backdrop-blur-lg bg-transparent transition-all duration-300 ease-out",
        isScrolled && "left-1/2 right-auto -translate-x-1/2 w-[88%] rounded-2xl mt-5 bg-white/10 shadow-lg"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between px-20 py-3 max-w-[1440px] mx-auto transition-all duration-300",
          isScrolled && "px-20 py-2.5",
          "max-md:px-4"
        )}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/assets/sol9x.png" alt="SOL9X" className="h-5 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={cn(
            "flex items-center gap-6",
            "max-md:hidden"
          )}
        >
          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("solutions")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="font-jakarta text-sm font-medium text-foreground hover:text-primary transition-colors relative group flex items-center gap-1">
              Solutions
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
            {openDropdown === "solutions" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 animate-slide-down">
                <SolutionsMegaMenu />
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("industries")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="font-jakarta text-sm font-medium text-foreground hover:text-primary transition-colors relative group flex items-center gap-1">
              Industries
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
            {openDropdown === "industries" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 animate-slide-down">
                <IndustriesMegaMenu />
              </div>
            )}
          </div>

          <a
            href="https://blogs.sol9x.com/"
            className="font-jakarta text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
          >
            Blogs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>

          <Link
            to="/for-startups"
            className="font-jakarta text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
          >
            For Startups
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            to="/careers"
            className="font-jakarta text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
          >
            Careers
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            to="/about"
            className="font-jakarta text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
          >
            About us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link to="/contact-us" className="max-md:hidden">
          <button className="px-5 py-2.5 rounded-full border border-primary font-jakarta text-sm font-medium text-primary bg-transparent hover:bg-primary hover:text-white transition-all duration-200">
            Contact Us
          </button>
        </Link>

        {/* Hamburger Menu */}
        <button
          className={cn(
            "hidden max-md:flex flex-col items-center justify-center w-8 h-8 bg-transparent border-none cursor-pointer p-0",
          )}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "block w-6 h-0.5 bg-foreground my-1 transition-all duration-300",
              isMenuOpen && "rotate-45 translate-y-2.5"
            )}
          />
          <span
            className={cn(
              "block w-6 h-0.5 bg-foreground my-1 transition-all duration-300",
              isMenuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block w-6 h-0.5 bg-foreground my-1 transition-all duration-300",
              isMenuOpen && "-rotate-45 -translate-y-2.5"
            )}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[var(--header-height)] bg-white z-[998] overflow-y-auto md:hidden">
          <nav className="flex flex-col p-6 gap-4">
            {/* Solutions */}
            <div>
              <button
                onClick={() => toggleMobileSubmenu("solutions")}
                className="flex items-center justify-between w-full font-jakarta text-base font-medium text-foreground py-2"
              >
                Solutions
                <ChevronDown
                  className={cn(
                    "w-5 h-5 transition-transform",
                    mobileSubmenuOpen === "solutions" && "rotate-180"
                  )}
                />
              </button>
              {mobileSubmenuOpen === "solutions" && (
                <div className="pl-4 pt-2">
                  <SolutionsMegaMenu onClose={closeMenu} />
                </div>
              )}
            </div>

            {/* Industries */}
            <div>
              <button
                onClick={() => toggleMobileSubmenu("industries")}
                className="flex items-center justify-between w-full font-jakarta text-base font-medium text-foreground py-2"
              >
                Industries
                <ChevronDown
                  className={cn(
                    "w-5 h-5 transition-transform",
                    mobileSubmenuOpen === "industries" && "rotate-180"
                  )}
                />
              </button>
              {mobileSubmenuOpen === "industries" && (
                <div className="pl-4 pt-2">
                  <IndustriesMegaMenu onClose={closeMenu} />
                </div>
              )}
            </div>

            <a
              href="https://blogs.sol9x.com/"
              className="font-jakarta text-base font-medium text-foreground py-2"
              onClick={closeMenu}
            >
              Blogs
            </a>

            <Link
              to="/for-startups"
              className="font-jakarta text-base font-medium text-foreground py-2"
              onClick={closeMenu}
            >
              For Startups
            </Link>

            <Link
              to="/careers"
              className="font-jakarta text-base font-medium text-foreground py-2"
              onClick={closeMenu}
            >
              Careers
            </Link>

            <Link
              to="/about"
              className="font-jakarta text-base font-medium text-foreground py-2"
              onClick={closeMenu}
            >
              About us
            </Link>

            <Link
              to="/contact-us"
              className="mt-4"
              onClick={closeMenu}
            >
              <button className="w-full px-5 py-3 rounded-full border border-primary font-jakarta text-base font-medium text-primary bg-transparent hover:bg-primary hover:text-white transition-all duration-200">
                Contact Us
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
