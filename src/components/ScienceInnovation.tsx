import React from "react";
import { withPrefix } from "gatsby";

const ScienceInnovation: React.FC = () => {
  return (
    <section
      className="section-padding relative overflow-hidden"
      aria-labelledby="science-innovation-heading"
    >
      {/* Background image - misty forest */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={withPrefix("/design/science-innovation-bg.png")}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="container-80 relative z-10">
        <div className="section-content mx-auto text-left">
          {/* Label */}
          <div className="section-badge bg-[#C17A4A] text-white">
            SCIENCE-BASED INNOVATION
          </div>

          <h2
            id="science-innovation-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 leading-tight"
          >
            <span className="text-stone-600">We Combine </span>
            <span className="text-[#C17A4A]">Deep Science</span>
            <span className="text-stone-600"> with </span>
            <span className="text-[#C17A4A]">Smart Technology</span>
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-stone-700 leading-relaxed">
            <p>
              Our leadership team combines deep conservation expertise with the
              latest nature technology, backed by over 50 patents and 60
              scientific publications in biodiversity, AI and geospatial
              monitoring.
            </p>
            <p>
              Every credit is based on real data, global standards and proven
              scientific methods. We design each project for its local
              environment while applying the same strong scientific principles
              across the board.
            </p>
            <p>
              This gives landowners, partners and investors the confidence that
              they are supporting projects that truly deliver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceInnovation;
