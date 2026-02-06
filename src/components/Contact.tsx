import React from 'react'
import { withPrefix } from 'gatsby'

const Contact: React.FC = () => {
  return (
    <section 
      id="contact" 
      className="section-padding bg-[#4A6157] relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background logo watermark - positioned 50% outside the right edge */}
      <div className="absolute top-1/2 -translate-y-1/2 opacity-10 pointer-events-none" style={{ right: '-25%' }}>
        <img 
          src={withPrefix("/Logos/naturecredits_symbol.svg")} 
          alt=""
          className="w-[500px] h-[500px] md:w-[800px] md:h-[800px] object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="container-80 relative z-10">
        <div className="section-content mx-auto text-center">
          {/* Badge */}
          <div className="section-badge bg-[#C17A4A] text-white">
            CONNECT WITH US
          </div>

          <h2 
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 leading-tight text-white"
          >
            Let's Grow Nature Credits Together
          </h2>
          
          <div className="space-y-6 text-lg sm:text-xl text-white/90 leading-relaxed mb-2">
            <p>
              Want to explore how your forest can generate nature credits and new revenue streams? 
              Interested in developing high-integrity biodiversity projects, exploring investment 
              opportunities, or collaborating with us?
            </p>
            <p className="text-[#C8D96F] font-semibold text-2xl sm:text-3xl">
              Let's talk.
            </p>
          </div>

          {/* Email Display */}
          <div className="inline-flex items-center justify-center">
            <a 
              href="mailto:grow@naturecredits.earth"
              className="font-semibold text-2xl sm:text-3xl text-white hover:text-[#C8D96F] transition-colors duration-300"
            >
              grow@naturecredits.earth
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact