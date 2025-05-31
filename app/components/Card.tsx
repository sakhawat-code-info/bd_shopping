"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface CardProps {
  image: string | StaticImport;
  hoverImage: string | StaticImport;
  name: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ image, hoverImage, name, price }) => {
  return (
    <div>
      <div className="bg-white flex flex-col rounded-sm overflow-hidden  relative group">
        <a href="#" className="block">
          <div className="w-full relative aspect-[15/24]">
            {/* Default Image */}
            <Image
              src={image}
              alt="Product"
              fill
              className="object-cover object-top transition-opacity duration-300 group-hover:opacity-0"
            />
            {/* Hover Image */}
            <Image
              src={hoverImage}
              alt="Product Hover"
              fill
              className="object-cover object-top absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />

            <div className="absolute bottom-5 w-full flex items-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <button
                type="button"
                className="cursor-pointer max-w-[88%] mx-auto text-sm px-2 py-2 font-medium w-full bg-black text-white tracking-wide outline-none border-none rounded-sm"
              >
                Add to cart
              </button>
            </div>
          </div>

          <div className="p-4 text-center">
            <h5 className="text-sm sm:text-base  text-slate-900 line-clamp-2">
              {name}
            </h5>
            <div className="mt-2 flex items-center justify-center gap-2">
              <h6 className="text-sm sm:text-base text-slate-900">{price}</h6>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
