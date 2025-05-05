"use client";

import Reveal from "@/components/animations/Reveal";
import ImageCard from "@/components/card/ImageCard";
import InfiniteCarousel from "@/components/carousel/InfiniteCarousel";
// import InfiniteVerticalCarousel from "@/components/carousel/InfiniteVerticalCarousel";
import HomeHero from "@/components/home/HomeHero";
import { images1, images2, images3 } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:min-h-screen w-screen bg-white">
      <section className="left-section w-full md:w-1/2 max-h-screen grid grid-cols-2 px-6 sm:px-0 sm:grid-cols-3 gap-4 sm:gap-x-8 md:gap-x-2 lg:gap-x-4 xl:gap-x-8 gap-y-6 overflow-hidden">
        <InfiniteCarousel fastDuration={45} direction="topToBottom">
          {images1.map((item, index) => (
            <ImageCard
              className="min-h-52 md:min-h-80 xl:min-h-96 2xl:min-h-[526px] 3xl:min-h-[726px]"
              image={item}
              key={index}
            />
          ))}
        </InfiniteCarousel>

        <InfiniteCarousel
          fastDuration={45}
          direction="bottomToTop"
          hoverBehavior="slow">
          {images2.map((item, index) => (
            <ImageCard
              className="min-h-52 md:min-h-80 xl:min-h-96 2xl:min-h-[526px] 3xl:min-h-[726px]"
              image={item}
              key={index}
            />
          ))}
        </InfiniteCarousel>
        <InfiniteCarousel
          fastDuration={45}
          direction="topToBottom"
          hoverBehavior="pause">
          {images3.map((item, index) => (
            <ImageCard
              className="min-h-52 md:min-h-80 xl:min-h-96 2xl:min-h-[526px] 3xl:min-h-[726px]"
              image={item}
              key={index}
            />
          ))}
        </InfiniteCarousel>
      </section>

      <Reveal
        delay={0.5}
        className="right-section w-full md:w-1/2 mt-32 md:mt-0 md:h-screen flex items-center justify-center">
        <HomeHero />
      </Reveal>
    </div>
  );
}
