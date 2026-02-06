import React from "react";
import { withPrefix } from "gatsby";

const NatureCreditsExplained: React.FC = () => {
  return (
    <section
      className="section-padding bg-stone-200 relative overflow-hidden"
      aria-labelledby="nature-credits-explained-heading"
    >
      {/* Full background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={withPrefix("/design/nature-credits-explained-bg.png")}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="container-80 relative z-10">
        <div className="flex justify-center lg:justify-end">
          <div className="section-content text-left">
            {/* Label */}
            <div className="section-badge bg-[#C17A4A] text-white">
              NATURE CREDITS EXPLAINED
            </div>

            <h2
              id="nature-credits-explained-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 sm:mb-10 leading-tight"
            >
              <span className="text-stone-400">A </span>
              <span className="text-stone-600 font-semibold">New Currency </span>
              <span className="text-stone-400">for</span>
              <br />
              <span className="text-stone-400">Rebuilding Nature</span>
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-stone-700 leading-relaxed">
              <p>
                Nature is disappearing fast and ecosystems are under pressure
                everywhere. But recovery is possible, if we fund it.
              </p>
              <p>
                Nature credits are verified, tradeable units that represent real
                gains for biodiversity by restoring forests, protecting endangered
                species or regenerating ecosystems.
              </p>
              <p>
                Each credit stands for measurable biodiversity uplift and funds
                projects that bring ecosystems back to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NatureCreditsExplained;
