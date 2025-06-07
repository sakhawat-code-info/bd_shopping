"use client";

import Card from "./components/Card";
import CarouselComponents from "./components/CarouselComponents";
import SectionHeading from "./components/SectionHeading";
import VideoBanner from "./components/VideoBanner";
import ViewAllButton from "./components/ViewAllButton";

export default function Home() {
  const cards = [
    {
      image:
        "https://www.qalamkar.com.pk/cdn/shop/files/IMG_8065_4793dcda-3928-4ff8-b745-8638ba009bb3_720x.jpg?v=1747912104",
      hoverImage:
        "https://www.qalamkar.com.pk/cdn/shop/files/IMG_8131_a7084803-a5e3-4b65-87ec-0ec2db1fd5c8_720x.jpg?v=1747912112",
      name: "EM-10 (B) ADELE",
      price: "from Rs.6,590",
    },
    {
      image:
        "https://www.qalamkar.com.pk/cdn/shop/files/IMG_9764_copy_720x.jpg?v=1747912291",
      hoverImage:
        "https://www.qalamkar.com.pk/cdn/shop/files/IMG_9782_copy_720x.jpg?v=1747912291",
      name: "EM-09 (B) PAIGE",
      price: "from Rs.6,590",
    },
    {
      image:
        "https://www.qalamkar.com.pk/cdn/shop/files/IMG_8323_cf749d71-23c0-463f-8697-97fd975daa83_720x.jpg?v=1747912181",
      hoverImage:
        "https://www.qalamkar.com.pk/cdn/shop/files/IMG_8359_720x.jpg?v=1747912181",
      name: "EM-10 (A) RILEY",
      price: "from Rs.6,590",
    },
    // repeat cards if you want
  ];

  return (
    <div className="w-full">
      <CarouselComponents />

      <main className="px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl">
        {/* main section  */}
        <SectionHeading title="QALAMKAR LAWN 2025" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cards.concat(cards).map((card, index) => (
            <Card
              id="1"
              key={index}
              image={card.image}
              hoverImage={card.hoverImage}
              name={card.name}
              price={card.price}
            />
          ))}
        </div>
        <div className="flex justify-center my-10">
          <div className="w-[150px]">
            <ViewAllButton
              displayText="See All"
              bgColor="bg-black"
              textColor="text-white"
              borderColor="border border-black"
            />
          </div>
        </div>

        {/* NEW ARRIVALS */}
        <div className="mt-32">
          <SectionHeading title="NEW ARRIVALS" />
        </div>
        <div className="flex justify-center mb-12">
          <div className="w-[150px]">
            <ViewAllButton
              displayText="View All"
              bgColor="bg-white"
              textColor="text-black"
              borderColor="border border-black"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {cards
            .concat(cards)
            .slice(0, 4)
            .map((card, index) => (
              <Card
                id="1"
                key={index}
                image={card.image}
                hoverImage={card.hoverImage}
                name={card.name}
                price={card.price}
              />
            ))}
        </div>
      </main>
      {/* video section  */}
      <div className="my-28">
        <VideoBanner videoSrc="/videos/videoBanner.mp4" />
      </div>
    </div>
  );
}
