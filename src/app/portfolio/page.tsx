"use client";

import ImageCard from "@/components/card/ImageCard";
import InfiniteVerticalCarousel from "@/components/carousel/InfiniteVerticalCarousel";
import { images1, images2, images3 } from "@/lib/data";

export default function Portfolio() {
  return (
    // <div className="bg-white w-screen overflow-hidden max-h-screen pt-24 grid grid-cols-2 px-6 md:px-0 md:grid-cols-3 gap-y-3.5 gap-x-4 md:gap-x-8 md:gap-y-8 lg:gap-x-11 lg:gap-y-11">
    <div className="w-screen max-h-screen overflow-hidden bg-white pt-24 grid grid-cols-2 px-6 md:px-0 md:grid-cols-4 gap-y-3.5 gap-x-4 md:gap-x-8 md:gap-y-8 lg:gap-[42px]">
      <InfiniteVerticalCarousel
        hoverBehavior="pause"
        direction="bottomToTop"
        fastDuration={55}>
        {[...images1, ...images1].map((item, index) => (
          <ImageCard className="h-80" image={item} key={index} withOverlay />
        ))}
      </InfiniteVerticalCarousel>
      <InfiniteVerticalCarousel
        hoverBehavior="pause"
        direction="topToBottom"
        fastDuration={55}>
        {[...images2, ...images2].map((item, index) => (
          <ImageCard className="h-80" image={item} key={index} withOverlay />
        ))}
      </InfiniteVerticalCarousel>
      <InfiniteVerticalCarousel
        hoverBehavior="pause"
        direction="bottomToTop"
        fastDuration={55}>
        {[...images3, ...images3].map((item, index) => (
          <ImageCard className="h-80" image={item} key={index} withOverlay />
        ))}
      </InfiniteVerticalCarousel>
      <InfiniteVerticalCarousel
        hoverBehavior="pause"
        direction="topToBottom"
        fastDuration={55}>
        {[...images1, ...images1].map((item, index) => (
          <ImageCard className="h-80" image={item} key={index} withOverlay />
        ))}
      </InfiniteVerticalCarousel>
    </div>
  );
}
