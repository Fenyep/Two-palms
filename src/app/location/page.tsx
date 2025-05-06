"use client";

import ImageCard from "@/components/card/ImageCard";
import InfiniteCarousel from "@/components/carousel/InfiniteCarousel";
import { images1, images2, images3 } from "@/lib/data";

export default function Location() {
  return (
    <div className="w-screen max-h-[125rem] overflow-hidden bg-white pt-24 grid grid-cols-2 px-6 md:px-0 md:grid-cols-4 gap-y-3.5 gap-x-4 md:gap-x-6 lg:gap-x-8 md:gap-y-8 lg:gap-[42px]">
      <InfiniteCarousel
        direction="bottomToTop"
        hoverBehavior="pause"
        fastDuration={75}>
        {images1.map((item, index) => (
          <ImageCard
            className="min-h-52 md:min-h-80 xl:min-h-96 2xl:min-h-[426px] 3xl:min-h-[626px]"
            image={item}
            key={index}
          />
        ))}
      </InfiniteCarousel>
      <InfiniteCarousel
        direction="topToBottom"
        hoverBehavior="pause"
        fastDuration={75}>
        {images2.map((item, index) => (
          <ImageCard
            className="min-h-52 md:min-h-80 xl:min-h-96 2xl:min-h-[426px] 3xl:min-h-[626px]"
            image={item}
            key={index}
          />
        ))}
      </InfiniteCarousel>
      <InfiniteCarousel
        direction="bottomToTop"
        hoverBehavior="pause"
        fastDuration={75}>
        {images3.map((item, index) => (
          <ImageCard
            className="min-h-52 md:min-h-80 xl:min-h-96 2xl:min-h-[426px] 3xl:min-h-[626px]"
            image={item}
            key={index}
          />
        ))}
      </InfiniteCarousel>

      <InfiniteCarousel
        direction="topToBottom"
        hoverBehavior="pause"
        fastDuration={75}>
        {images2.map((item, index) => (
          <ImageCard
            className="min-h-52 md:min-h-80 xl:min-h-96 2xl:min-h-[426px] 3xl:min-h-[626px]"
            image={item}
            key={index}
          />
        ))}
      </InfiniteCarousel>

      {/* {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="h-72 w-full bg-blue-300"></div>
      ))} */}
    </div>
  );
}
