"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Banner from "./Banner";

const CarouselComponents = () => {
  return (
    <div className="w-full overflow-hidden">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          <CarouselItem className="relative h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-screen">
            <Banner image="https://www.qalamkar.com.pk/cdn/shop/collections/qlinekari-without-text-1600x500.jpg?v=1747918338&width=1920" />
          </CarouselItem>
          <CarouselItem className="relative h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-screen">
            <Banner image="https://www.qalamkar.com.pk/cdn/shop/collections/printed-coords-with-text-1600x500.jpg?v=1746353403&width=1920" />
          </CarouselItem>
          <CarouselItem className="relative h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-screen">
            <Banner image="https://www.qalamkar.com.pk/cdn/shop/collections/qprints-25-with-logo-1600x500.jpg?v=1747913746&width=1920" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselComponents;
