"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const HeadSlider = () => {
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
          <CarouselItem className="relative">
            <p className="text-sm">
              STITCHED ORDERS OF QPRINTS WILL BE DISPATCHED AFTER EID ACCORDING
              TO THE DELIVERY TIMELINE OF STITCHED PRODUCT
            </p>
          </CarouselItem>
          <CarouselItem className="relative">
            <p className="text-sm">
              Last date to place orders for Eid delivery (except made-to-order
              stitched items): International – 28th May | Local – 31st May
            </p>
          </CarouselItem>
          <CarouselItem className="relative">
            <p className="text-sm">
              STITCHED ORDERS OF QPRINTS WILL BE DISPATCHED AFTER EID ACCORDING
              TO THE DELIVERY TIMELINE OF STITCHED PRODUCT
            </p>
          </CarouselItem>
          <CarouselItem className="relative">
            <p className="text-sm">
              Last date to place orders for Eid delivery (except made-to-order
              stitched items): International – 28th May | Local – 31st May
            </p>
          </CarouselItem>
          <CarouselItem className="relative">
            <p className="text-sm">
              STITCHED ORDERS OF QPRINTS WILL BE DISPATCHED AFTER EID ACCORDING
              TO THE DELIVERY TIMELINE OF STITCHED PRODUCT
            </p>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeadSlider;
