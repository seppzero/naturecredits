import React from 'react'
import { Link, withPrefix } from 'gatsby'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white">
      <div className="container-max section-padding">
        <div className="max-w-2xl">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 group">
              <img 
                src={withPrefix("/Logos/NC-logo-green.svg")}
                alt="Nature Credits"
                className="h-10 sm:h-12 w-auto group-hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-stone-400 text-xs sm:text-sm mb-3 sm:mb-0">
              © 2025 Nature Credits. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 lg:gap-8">
              <Link to="/imprint" className="text-stone-400 hover:text-emerald-400 text-xs sm:text-sm transition-colors">
                Legal Disclosure / Impressum
              </Link>
              <Link to="/privacy" className="text-stone-400 hover:text-emerald-400 text-xs sm:text-sm transition-colors">
                Privacy Policy / Datenschutzerklärung
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

