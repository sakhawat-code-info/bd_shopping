"use client";

import React from "react";

interface VideoBannerProps {
  videoSrc: string;
}

const VideoBanner: React.FC<VideoBannerProps> = ({ videoSrc }) => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh] overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Optional Text on Banner */}
      {/* <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold z-10">
        Welcome to Our Store
      </h1> */}
    </div>
  );
};

export default VideoBanner;
