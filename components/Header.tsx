"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import SolutionsMegaMenu from "./menus/SolutionsMegaMenu"
import IndustriesMegaMenu from "./menus/IndustriesMegaMenu"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".sol9x-hero")
      if (heroSection) {
        const heroHeight = heroSection.getBoundingClientRect().height
        const scrollPosition = window.scrollY
        setIsScrolled(scrollPosition > heroHeight)
      } else {
        setIsScrolled(window.scrollY > window.innerHeight)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Cleanup body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767 && isMenuOpen) {
        setIsMenuOpen(false)
        setMobileSubmenuOpen(null)
        document.body.style.overflow = ''
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen])

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen
    setIsMenuOpen(newMenuState)
    setMobileSubmenuOpen(null)

    // Prevent body scroll when menu is open on mobile
    if (newMenuState) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  const toggleMobileSubmenu = (name: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === name ? null : name)
  }

  return (
    <header className={`sol9x-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="sol9x-header-container">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/assets/sol9x.png" alt="SOL9X" width={129} height={20} className="sol9x-logo" />
        </Link>

        {/* Navigation */}
        <nav className={`sol9x-nav ${isMenuOpen ? "open" : ""}`}>
          {/* Solutions */}
          <div
            className="sol9x-nav-item-wrapper sol9x-dropdown-wrapper"
            onMouseEnter={() => setOpenDropdown("solutions")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href="#"
              className="sol9x-nav-link sol9x-nav-link-desktop"
            >
              Solutions
            </Link>
            <button
              className="sol9x-nav-link sol9x-nav-link-mobile"
              onClick={() => toggleMobileSubmenu("solutions")}
            >
              Solutions
              <svg
                className={`sol9x-submenu-arrow ${mobileSubmenuOpen === "solutions" ? "open" : ""}`}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileSubmenuOpen === "solutions" && (
              <div className="sol9x-mobile-submenu">
                <SolutionsMegaMenu />
              </div>
            )}
            {/* Desktop Mega Menu - Inside wrapper for proper hover */}
            {openDropdown === "solutions" && (
              <div className="sol9x-desktop-mega-menu-container">
                <SolutionsMegaMenu />
              </div>
            )}
          </div>

          {/* Industries */}
          <div
            className="sol9x-nav-item-wrapper sol9x-dropdown-wrapper"
            onMouseEnter={() => setOpenDropdown("industries")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href="#"
              className="sol9x-nav-link sol9x-nav-link-desktop"
            >
              Industries
            </Link>
            <button
              className="sol9x-nav-link sol9x-nav-link-mobile"
              onClick={() => toggleMobileSubmenu("industries")}
            >
              Industries
              <svg
                className={`sol9x-submenu-arrow ${mobileSubmenuOpen === "industries" ? "open" : ""}`}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileSubmenuOpen === "industries" && (
              <div className="sol9x-mobile-submenu">
                <IndustriesMegaMenu />
              </div>
            )}
            {/* Desktop Mega Menu - Inside wrapper for proper hover */}
            {openDropdown === "industries" && (
              <div className="sol9x-desktop-mega-menu-container">
                <IndustriesMegaMenu />
              </div>
            )}
          </div>

          <Link href="https://blogs.sol9x.com/" className="sol9x-nav-link" onClick={() => setIsMenuOpen(false)}>
            Blogs
          </Link>
          <Link href="/for-startups" className="sol9x-nav-link" onClick={() => setIsMenuOpen(false)}>
            For Startups
          </Link>
          <Link href="/careers" className="sol9x-nav-link" onClick={() => setIsMenuOpen(false)}>
            Careers
          </Link>
          <Link href="/about" className="sol9x-nav-link" onClick={() => setIsMenuOpen(false)}>
            About us
          </Link>
          <button className="sol9x-contact-btn sol9x-contact-btn-mobile" onClick={() => setIsMenuOpen(false)}>
            <Link href="/contact-us">Contact Us</Link>
          </button>
        </nav>

        {/* CTA Button */}
        <Link href="/contact-us">
          <button className="sol9x-contact-btn sol9x-contact-btn-desktop">Contact Us</button>
        </Link>

        {/* Hamburger Menu */}
        <button
          className={`sol9x-hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
