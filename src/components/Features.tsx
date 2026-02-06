import React from 'react'
import { withPrefix } from 'gatsby'

const Features: React.FC = () => {
  return (
    <section 
      className="section-padding bg-white relative overflow-hidden"
      aria-labelledby="features-heading"
    >
      {/* Background image - misty forest in corners */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={withPrefix("/design/02-Description_bg.jpg")} 
          alt=""
          className="w-full h-full object-cover opacity-100"
          aria-hidden="true"
        />
      </div>

      <div className="container-80 relative z-10">
        <div className="section-content mx-auto">
          {/* Super header */}
          <div className="section-badge bg-stone-300 text-stone-700">
            INVEST IN NATURE
          </div>

          <h2 
            id="features-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-8 sm:mb-12 leading-tight"
          >
            Delivering a <span className="text-[#A8C95F]">Nature-Positive</span> Future
          </h2>
          
          <div className="space-y-6 text-lg sm:text-xl text-stone-700 leading-relaxed">
            <p>
              We partner with forest owners to design, implement, and certify local-for-local nature credits. 
              Our biodiversity projects strengthen ecosystems, reward landowners, and unlock new revenue streams.
            </p>
            <p>
              Leveraging AI and remote sensing, our NatureCreditsIQ MRV platform ensures every credit is 
              transparent, scientifically robust, and aligned with EU and global standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

