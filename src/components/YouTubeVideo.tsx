import React from "react";
import { withPrefix } from "gatsby";

const YoutubeVideo: React.FC = () => {
  return (
    <section className="section-padding relative overflow-hidden" aria-labelledby="youtube-video-heading">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={withPrefix("/design/youtube-video-bg.png")}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="container-80 relative z-10">
        <div className="section-content mx-auto text-center">
          {/* Badge */}
          <div className="section-badge bg-[#4A6157] text-white" id="youtube-video-heading">
            THE FUTURE OF BIODIVERSITY 
          </div>

          <iframe
            src="https://www.youtube.com/embed/n8OM5peI_jg?si=t2lLFTte0rgJLNtn"
            className="w-full aspect-video rounded-lg shadow-lg"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default YoutubeVideo;
