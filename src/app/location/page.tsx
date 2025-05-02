"use client";

import ImageCard from "@/components/card/ImageCard";
import InfiniteVerticalCarousel from "@/components/carousel/InfiniteVerticalCarousel";
import { images1, images2, images3 } from "@/lib/data";

export default function Location() {
  return (
    <div className="w-screen max-h-screen overflow-hidden bg-white pt-24 grid grid-cols-2 px-6 md:px-0 md:grid-cols-4 gap-y-3.5 gap-x-4 md:gap-x-8 md:gap-y-8 lg:gap-[42px]">
      <InfiniteVerticalCarousel
        render={(item, index) => (
          <ImageCard className="h-80" image={item} key={index} />
        )}
        direction="bottomToTop"
        images={images1}
        fastDuration={55}
      />
      <InfiniteVerticalCarousel
        render={(item, index) => (
          <ImageCard className="h-80" image={item} key={index} />
        )}
        direction="topToBottom"
        images={images2}
        fastDuration={55}
      />
      <InfiniteVerticalCarousel
        render={(item, index) => (
          <ImageCard className="h-80" image={item} key={index} />
        )}
        direction="bottomToTop"
        images={images3}
        fastDuration={55}
      />

      <InfiniteVerticalCarousel
        render={(item, index) => (
          <ImageCard className="h-72" image={item} key={index} />
        )}
        direction="topToBottom"
        images={images2}
        fastDuration={55}
      />

      {/* {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="h-72 w-full bg-blue-300"></div>
      ))} */}
    </div>
  );
}
