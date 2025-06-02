"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Banner from "./Banner";

const CarouselComponents = () => {
  return (
    <div className="">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem className="relative min-h-screen">
            {" "}
            <Banner
              image={
                "https://www.qalamkar.com.pk/cdn/shop/collections/qlinekari-without-text-1600x500.jpg?v=1747918338&width=1920"
              }
            />
            {/* <div className="absolute top-1/3 left-1/5 capitalize space-y-3 text-white text-center">
              <span className="text-3xl text-center">qalamkar</span> <br />{" "}
              <span className="text-9xl text-center">live</span> <br />{" "}
              <span className="text-3xl text-right">blog</span>
            </div> */}
          </CarouselItem>
          <CarouselItem>
            {" "}
            <Banner
              image={
                "https://www.qalamkar.com.pk/cdn/shop/collections/printed-coords-with-text-1600x500.jpg?v=1746353403&width=1920"
              }
            />
          </CarouselItem>
          <CarouselItem>
            {" "}
            <Banner
              image={
                "https://www.qalamkar.com.pk/cdn/shop/collections/qprints-25-with-logo-1600x500.jpg?v=1747913746&width=1920"
              }
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselComponents;
