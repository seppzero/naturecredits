import React from 'react'
import { withPrefix } from 'gatsby'

const Hero: React.FC = () => {
  return (
    <section 
      className="relative bg-stone-900 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Video background */}
      <div className="absolute inset-0">
        <video 
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={withPrefix("/Videos/AdobeStock_415697290-V3Mbps.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/60 via-stone-800/50 to-stone-900/60" aria-hidden="true"></div>
      </div>

      <div className="container-max section-padding relative">
        <div className="flex items-center justify-center min-h-screen">
          {/* Content */}
          <div className="text-center max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
            {/* Logo */}
            <div className="flex justify-center mb-12 sm:mb-8">
              <img 
                src={withPrefix("/Logos/NC-logo-green.svg")} 
                alt="Nature Credits"
                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            
            <h1 
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 sm:mb-12 leading-tight"
            >
              From Local Forests<br />
              to High-Integrity<br />
              <span className="bg-gradient-to-r from-[#C8D96F] to-[#A8C95F] bg-clip-text text-transparent">
                Nature Credits
              </span>
            </h1>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero






