"use client";

import ViewAllButton from "@/app/components/ViewAllButton";
import Image from "next/image";
import { BsTruck } from "react-icons/bs";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ViewDetails: React.FC = () => {
  const thumbnails = [
    "https://www.qalamkar.com.pk/cdn/shop/files/IMG_8929_copy_1800x1800.jpg?v=1747912506",
    "https://www.qalamkar.com.pk/cdn/shop/files/IMG_8887copy_1800x1800.jpg?v=1747912506",
    "https://www.qalamkar.com.pk/cdn/shop/files/IMG_8847copy_1800x1800.jpg?v=1747912506",
    "https://www.qalamkar.com.pk/cdn/shop/files/IMG_8918copy_1800x1800.jpg?v=1747912506",
    "https://www.qalamkar.com.pk/cdn/shop/files/IMG_9130copy_09b12b93-f8e7-460a-be22-aaba00485ced_1800x1800.jpg?v=1747912506",
    "https://www.qalamkar.com.pk/cdn/shop/files/IMG_8932copy_1800x1800.jpg?v=1747912506",
  ];

  const [mainImage, setMainImage] = useState(thumbnails[0]);

  return (
    <div className="mt-24">
      <div className="flex items-start justify-center mb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1200px] w-full gap-4 mt-10">
          {/* Left side (Thumbnail + Main Image) */}
          <div className="col-span-1 flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-2 h-[800px] justify-between">
              {thumbnails.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(src)}
                  className={`border-2 rounded-md overflow-hidden focus:outline-none ${
                    mainImage === src ? "border-black" : "border-transparent"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Thumbnail ${idx + 1}`}
                    width={80}
                    height={250}
                    className="w-20 h-[250px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 overflow-hidden">
              <Image
                src={mainImage}
                alt="Main Product"
                width={500}
                height={800}
                className="w-full h-[800px] object-cover object-top shadow-lg"
              />
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="py-6 px-8 max-lg:max-w-2xl">
            {/* Product Info */}
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                EM-10 (B) ADELE
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Pay in 3 Installments of Rs. 6,590
              </p>
            </div>

            {/* Star Rating */}
            <div className="flex items-center space-x-1 mt-6">
              {[1, 2, 3, 4].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-slate-800"
                  viewBox="0 0 14 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              ))}
              <svg
                className="w-4 h-4 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>

              <button
                type="button"
                className="px-2.5 py-1.5 bg-slate-100 text-xs text-slate-900 rounded-md flex items-center cursor-pointer !ml-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 mr-1"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="..." />
                </svg>
                87 Reviews
              </button>
            </div>

            {/* Price */}
            <div className="mt-8">
              <div className="flex items-center flex-wrap gap-4">
                <p className="text-slate-900 text-4xl font-semibold">
                  Rs. 6,590
                </p>
                <p className="text-slate-400 text-sm mt-2">
                  $42 <span className="ml-1">Tax included</span>
                </p>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-slate-900">
                Choose a Size
              </h3>
              <div className="flex flex-wrap gap-4 mt-4">
                {["UNSTITCHED", "SM", "MD", "LG", "XL", "CUSTOM SIZE"].map(
                  (size) => (
                    <button
                      key={size}
                      type="button"
                      className={`min-w-[90px] h-10 px-2 cursor-pointer border ${
                        size === "MD" ? "border-slate-800" : "border-gray-300"
                      } hover:border-slate-800 font-semibold text-slate-900 text-sm rounded-md flex items-center justify-center shrink-0`}
                    >
                      {size}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 space-y-4 w-full">
              <ViewAllButton
                displayText="Add To Cart"
                bgColor="bg-white"
                textColor="text-black"
                borderColor="border border-black"
              />
              <ViewAllButton
                displayText="Buy it now"
                bgColor="bg-black"
                textColor="text-white"
                borderColor="border border-black"
              />
            </div>

            <div className="mt-8">
              <p className="flex items-start  gap-2 text-sm text-slate-500 mt-4">
                <BsTruck /> Free Nationwide shipping
              </p>
            </div>

            {/* Description */}
            <div className="mt-8">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <h3 className="text-xl text-slate-900">
                      Product Description
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p className="text-sm text-slate-500 mt-4">
                      Elevate your casual style with our premium men t-shirt.
                      Crafted for comfort and designed with a modern fit, this
                      versatile shirt is an essential addition to your wardrobe.
                    </p>

                    <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-slate-500">
                      <li>
                        A t-shirt is a wardrobe essential because it is so
                        versatile.
                      </li>
                      <li>
                        Available in a wide range of sizes, from extra small to
                        extra large, and even in tall and petite sizes.
                      </li>
                      <li>
                        This is easy to care for. They can usually be
                        machine-washed and dried on low heat.
                      </li>
                      <li>
                        You can add your own designs, paintings, or embroidery
                        to make it your own.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <h3 className="text-xl text-slate-900">Shipping Details</h3>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance items-center justify-center">
                    <ul>
                      <li className="flex gap-12">
                        <span>Pakistan delivery time period</span>
                        <span>2-4 Days for unstitched pret</span>
                      </li>
                      <li className="flex gap-12">
                        <span> Pakistan delivery time period</span>
                        <span>30 Days&nbsp;for stitched</span>
                      </li>

                      <li className="flex gap-12">
                        Couture and Hand Luxe orders will take 8-10 weeks
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <h3 className="text-xl text-slate-900">Return Policy </h3>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Product color may slightly vary due to photographic
                      lighting sources or your monitor settings.
                    </p>
                    <p>
                      Stitched orders cannot be processed through Cash on
                      Delivery.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
