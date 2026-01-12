import React, { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import Logo from "../assets/remy.png"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-orange-500 border-b-2 border-orange-500 pb-1"
      : "text-gray-700 hover:text-orange-500 transition-colors duration-150"

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="w-full shadow-md bg-white h-[100px]">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-full">
        <Link to="/" className="flex items-center gap-3 h-full">
          <img src={Logo} alt="Remy logo" className="h-[64px] w-auto object-contain" />
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium">
            <li>
              <NavLink to="/" end className={linkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="about" className={linkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="services" className={linkClass}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" className={linkClass}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-colors"
            aria-label="Login"
          >
            Login
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-500"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white shadow-md">
          <nav aria-label="Mobile navigation" className="px-6 py-4">
            <ul className="space-y-4">
              <li>
                <NavLink to="/" end className={linkClass} onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="about" className={linkClass} onClick={toggleMenu}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={linkClass} onClick={toggleMenu}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={linkClass} onClick={toggleMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header