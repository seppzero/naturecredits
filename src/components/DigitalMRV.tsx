import React from "react";
import { withPrefix } from "gatsby";

const DigitalMRV: React.FC = () => {
  return (
    <section
      className="section-padding relative overflow-hidden"
      aria-labelledby="digital-mrv-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={withPrefix("/design/digital-mrv-bg.png")}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="container-80 relative z-10">
        <div className="section-content mx-auto text-left">
          {/* Label */}
          <div className="section-badge bg-[#BE7D5E] text-white">
            DIGITAL MRV PLATFORM
          </div>

          <h2
            id="digital-mrv-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 leading-tight"
          >
            <span className="text-[#8A9D6E]">NatureCreditsIQ</span> Tracks Nature
            Recovery with AI and Satellites: Verifiable and Transparent
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-stone-700 leading-relaxed">
            <p>
              NatureCreditsIQ is our digital system that shows how nature
              recovers over time, using satellite imagery, local biodiversity
              data and causal AI.
            </p>
            <p>
              By combining on-the-ground observations with data from space, we
              provide a clear, continuous picture of how ecosystems are healing.
            </p>
            <p>
              This means that every nature credit is based on real, measurable
              improvement in ecosystem condition. No guesswork, no
              double-counting.
            </p>
            <p>
              For landowners, partners and investors, our data-driven approach
              builds trust and helps us grow faster. So we can restore more
              nature, in more places, with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMRV;
