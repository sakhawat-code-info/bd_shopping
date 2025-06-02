import Image from "next/image";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface BannerProps {
  image: string | StaticImport;
}

const Banner: React.FC<BannerProps> = ({ image }) => {
  return (
    <div className="relative h-screen w-full">
      {/* Banner Image */}
      <Image src={image} alt="Banner Image" fill className="object-fill" />
      {/* <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
        MY picture
      </h1> */}
    </div>
  );
};

export default Banner;
