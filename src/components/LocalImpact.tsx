import React from "react";
import { withPrefix } from "gatsby";

const LocalImpact: React.FC = () => {
  return (
    <section
      className="section-padding relative overflow-hidden"
      aria-labelledby="local-impact-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={withPrefix("/design/local-impact-bg.png")}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="container-80 relative z-10">
        <div className="section-content mx-auto text-left">
          {/* Label */}
          <div className="section-badge bg-[#D4E95B] text-stone-900">
            LOCAL-FOR-LOCAL IMPACT
          </div>

          <h2
            id="local-impact-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 leading-tight text-stone-800"
          >
            We Restore{" "}
            <span className="text-[#D4E95B]">Nature</span> Where the Damage
            Happens: Together with Landowners
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-stone-600 leading-relaxed">
            <p>
              At NatureCredits, we believe restoration should begin where nature
              has been lost. That is why our biodiversity projects take place in
              European forests, bringing ecosystems back to life in the very
              regions where damage has occurred. The results are local, visible
              and trusted.
            </p>
            <p>
              We work side-by-side with forest owners and communities across
              Europe through every step of the journey - from project design and
              ecological monitoring to certification and credit issuance.
            </p>
            <p>
              Our approach respects how land is used today. Each project is built
              to complement, not disrupt, forest operations. This way, our
              projects restore biodiversity and create an additional source of
              income for landowners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalImpact;
