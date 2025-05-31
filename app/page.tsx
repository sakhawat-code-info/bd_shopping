import Card from "./components/Card";
import CarouselComponents from "./components/CarouselComponents";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import ViewAllButton from "./components/ViewAllButton";
export default function Home() {
  return (
    <div className="w-full mx-auto ">
      <div className="">
        <Navbar />
        <CarouselComponents />

        <div className="p-4 mx-auto max-w-[1500px]">
          <div className="flex items-center justify-center my-12">
            <h1 className="text-3xl">QALAMKAR LAWN 2025</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card
              image="https://www.qalamkar.com.pk/cdn/shop/files/IMG_8065_4793dcda-3928-4ff8-b745-8638ba009bb3_720x.jpg?v=1747912104"
              hoverImage={
                "https://www.qalamkar.com.pk/cdn/shop/files/IMG_8131_a7084803-a5e3-4b65-87ec-0ec2db1fd5c8_720x.jpg?v=1747912112"
              }
              name="EM-10 (B) ADELE"
              price="from Rs.6,590"
            />
            <Card
              image="https://www.qalamkar.com.pk/cdn/shop/files/IMG_9764_copy_720x.jpg?v=1747912291"
              hoverImage={
                "https://www.qalamkar.com.pk/cdn/shop/files/IMG_9782_copy_720x.jpg?v=1747912291"
              }
              name="EM-09 (B) PAIGE"
              price="from Rs.6,590"
            />
            <Card
              image="https://www.qalamkar.com.pk/cdn/shop/files/IMG_8323_cf749d71-23c0-463f-8697-97fd975daa83_720x.jpg?v=1747912181"
              hoverImage={
                "https://www.qalamkar.com.pk/cdn/shop/files/IMG_8359_720x.jpg?v=1747912181"
              }
              name="EM-10 (A) RILEY"
              price="from Rs.6,590"
            />
            <Card
              image="https://www.qalamkar.com.pk/cdn/shop/files/IMG_8065_4793dcda-3928-4ff8-b745-8638ba009bb3_720x.jpg?v=1747912104"
              hoverImage={
                "https://www.qalamkar.com.pk/cdn/shop/files/IMG_8131_a7084803-a5e3-4b65-87ec-0ec2db1fd5c8_720x.jpg?v=1747912112"
              }
              name="EM-10 (B) ADELE"
              price="from Rs.6,590"
            />
            <Card
              image="https://www.qalamkar.com.pk/cdn/shop/files/IMG_9764_copy_720x.jpg?v=1747912291"
              hoverImage={
                "https://www.qalamkar.com.pk/cdn/shop/files/IMG_9782_copy_720x.jpg?v=1747912291"
              }
              name="EM-09 (B) PAIGE"
              price="from Rs.6,590"
            />
            <Card
              image="https://www.qalamkar.com.pk/cdn/shop/files/IMG_8323_cf749d71-23c0-463f-8697-97fd975daa83_720x.jpg?v=1747912181"
              hoverImage={
                "https://www.qalamkar.com.pk/cdn/shop/files/IMG_8359_720x.jpg?v=1747912181"
              }
              name="EM-10 (A) RILEY"
              price="from Rs.6,590"
            />
            {/* <Card
              image=""
              hoverImage={
                ""
              }
              name=""
              price=""
            /> */}
          </div>
          <div className="flex items-center justify-center my-12">
            <ViewAllButton />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
