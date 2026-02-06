import React, { useState, useEffect } from 'react'
import { Link, withPrefix } from 'gatsby'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-stone-50/85 backdrop-blur-md border-b border-stone-200' 
          : 'bg-transparent'
      }`}
      role="banner"
      style={{ display: 'none' }}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-5 lg:py-6">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 sm:space-x-3 group"
            aria-label="Nature Credits - Go to homepage"
          >
            <img 
              src={withPrefix("/Logos/NC-logo-green.svg")}
              alt="Nature Credits"
              className="h-8 sm:h-10 lg:h-12 w-auto transition-opacity group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:hidden items-center space-x-8 xl:space-x-10"
            role="navigation"
            aria-label="Main navigation"
            style={{ display: 'none' }}
          >
            <Link 
              to="/" 
              className={`font-medium text-sm xl:text-base transition-colors ${
                isScrolled 
                  ? 'text-stone-700 hover:text-emerald-600' 
                  : '!text-white hover:!text-emerald-400'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/measurement" 
              className={`font-medium text-sm xl:text-base transition-colors ${
                isScrolled 
                  ? 'text-stone-700 hover:text-emerald-600' 
                  : '!text-white hover:!text-emerald-400'
              }`}
            >
              How It Works
            </Link>
            <Link 
              to="/compliance" 
              className={`font-medium text-sm xl:text-base transition-colors ${
                isScrolled 
                  ? 'text-stone-700 hover:text-emerald-600' 
                  : '!text-white hover:!text-emerald-400'
              }`}
            >
              Trust & Safety
            </Link>
            <Link 
              to="/development" 
              className={`font-medium text-sm xl:text-base transition-colors ${
                isScrolled 
                  ? 'text-stone-700 hover:text-emerald-600' 
                  : '!text-white hover:!text-emerald-400'
              }`}
            >
              Get Started
            </Link>
            <Link 
              to="/enterprise" 
              className={`font-medium text-sm xl:text-base transition-colors ${
                isScrolled 
                  ? 'text-stone-700 hover:text-emerald-600' 
                  : '!text-white hover:!text-emerald-400'
              }`}
            >
              For Large Landowners
            </Link>
            <a 
              href="#contact" 
              className={`font-medium text-sm xl:text-base cursor-pointer transition-colors ${
                isScrolled 
                  ? 'text-stone-700 hover:text-emerald-600' 
                  : '!text-white hover:!text-emerald-400'
              }`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              aria-label="Scroll to contact section"
            >
              Contact
            </a>
          </nav>


          {/* Mobile menu button */}
          <button
            className={`lg:hidden hidden p-4 rounded-xl transition-colors duration-200 ${
              isScrolled 
                ? 'text-stone-700 hover:text-stone-900' 
                : '!text-white hover:!text-emerald-400'
            }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            style={{ display: 'none' }}
          >
            <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
            <div className="w-7 h-7 flex flex-col justify-center items-center">
              {isMenuOpen ? (
                <div className="w-6 h-0.5 bg-current transform rotate-45 relative">
                  <div className="w-6 h-0.5 bg-current transform -rotate-90 absolute top-0 left-0"></div>
                </div>
              ) : (
                <div className="space-y-1.5">
                  <div className="w-6 h-0.5 bg-current"></div>
                  <div className="w-6 h-0.5 bg-current"></div>
                  <div className="w-6 h-0.5 bg-current"></div>
                </div>
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav 
          id="mobile-navigation"
          className={`lg:hidden hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 py-4 sm:py-6 lg:py-7' 
              : 'max-h-0 opacity-0 py-0'
          }`}
          aria-label="Mobile navigation"
          style={{ display: 'none' }}
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <nav className={`flex flex-col space-y-4 sm:space-y-6 transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'translate-y-0' : '-translate-y-4'
            }`}>
              <Link 
                to="/" 
                className={`font-medium text-base sm:text-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-stone-700 hover:text-emerald-600' 
                    : '!text-white hover:!text-emerald-400'
                } ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: isMenuOpen ? '0.1s' : '0s' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/measurement" 
                className={`font-medium text-base sm:text-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-stone-700 hover:text-emerald-600' 
                    : '!text-white hover:!text-emerald-400'
                } ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: isMenuOpen ? '0.15s' : '0s' }}
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to="/compliance" 
                className={`font-medium text-base sm:text-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-stone-700 hover:text-emerald-600' 
                    : '!text-white hover:!text-emerald-400'
                } ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: isMenuOpen ? '0.2s' : '0s' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Trust & Safety
              </Link>
              <Link 
                to="/development" 
                className={`font-medium text-base sm:text-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-stone-700 hover:text-emerald-600' 
                    : '!text-white hover:!text-emerald-400'
                } ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: isMenuOpen ? '0.25s' : '0s' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
              <Link 
                to="/enterprise" 
                className={`font-medium text-base sm:text-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-stone-700 hover:text-emerald-600' 
                    : '!text-white hover:!text-emerald-400'
                } ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: isMenuOpen ? '0.3s' : '0s' }}
                onClick={() => setIsMenuOpen(false)}
              >
                For Large Landowners
              </Link>
              <a 
                href="#contact" 
                className={`font-medium text-base sm:text-lg cursor-pointer transition-all duration-300 ${
                  isScrolled 
                    ? 'text-stone-700 hover:text-emerald-600' 
                    : '!text-white hover:!text-emerald-400'
                } ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: isMenuOpen ? '0.35s' : '0s' }}
                onClick={(e) => {
                  e.preventDefault()
                  setIsMenuOpen(false)
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Contact
              </a>
            </nav>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

