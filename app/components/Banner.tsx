import Image from "next/image";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface BannerProps {
  image: string | StaticImport;
}

const Banner: React.FC<BannerProps> = ({ image }) => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[60vh] md:h-[60vh] lg:h-[70vh]">
      <Image
        src={image}
        alt="Banner Image"
        fill
        className="object-fill"
        priority
      />
      {/* Optional Text on Banner */}
      {/* <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
        MY Picture
      </h1> */}
    </div>
  );
};

export default Banner;
