"use client";

import ImageCard from "@/components/card/ImageCard";
import InfiniteCarousel from "@/components/carousel/InfiniteCarousel";
import HomeHero from "@/components/home/HomeHero";
import { landingImages1, landingImages2, landingImages3 } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:min-h-screen w-screen bg-white">
      <section className="left-section w-full md:w-1/2 max-h-screen grid grid-cols-2 px-6 sm:px-0 sm:grid-cols-3 gap-4 sm:gap-x-8 md:gap-x-2 lg:gap-x-4 xl:gap-x-8 gap-y-6 overflow-hidden">
        <InfiniteCarousel fastDuration={45} direction="topToBottom">
          {landingImages1.map((item, index) => (
            <ImageCard className="" image={item} key={index} />
          ))}
        </InfiniteCarousel>

        <InfiniteCarousel fastDuration={45} direction="bottomToTop">
          {landingImages2.map((item, index) => (
            <ImageCard className="" image={item} key={index} />
          ))}
        </InfiniteCarousel>
        <InfiniteCarousel fastDuration={45} direction="topToBottom">
          {landingImages3.reverse().map((item, index) => (
            <ImageCard className="" image={item} key={index} />
          ))}
        </InfiniteCarousel>
      </section>

      <section className="right-section w-full md:w-1/2 mt-32 md:mt-0 md:h-screen flex items-center justify-center">
        <HomeHero />
      </section>
    </div>
  );
}
