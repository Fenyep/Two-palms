"use client";

import Reveal from "@/components/animations/Reveal";
import ImageCard from "@/components/card/ImageCard";
import InfiniteVerticalCarousel from "@/components/carousel/InfiniteVerticalCarousel";
import HomeHero from "@/components/home/HomeHero";
import { images1, images2, images3 } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:min-h-screen w-screen bg-white">
      <section className="left-section w-full md:w-1/2 h-auto md:h-screen grid grid-cols-2 px-6 sm:px-0 sm:grid-cols-3 gap-4 sm:gap-x-8 md:gap-x-2 lg:gap-x-8 gap-y-6 max-h-[900px] overflow-hidden">
        <InfiniteVerticalCarousel
          fastDuration={45}
          images={images1}
          direction="topToBottom"
          render={(item, index) => <ImageCard image={item} key={index} />}
        />
        <InfiniteVerticalCarousel
          fastDuration={45}
          images={images2}
          direction="bottomToTop"
          withSlow
          render={(item, index) => <ImageCard image={item} key={index} />}
        />
        <InfiniteVerticalCarousel
          fastDuration={45}
          images={images3}
          direction="topToBottom"
          render={(item, index) => <ImageCard image={item} key={index} />}
        />
      </section>

      <Reveal
        delay={0.5}
        className="right-section w-full md:w-1/2 mt-32 md:mt-0 md:h-screen flex items-center justify-center">
        <HomeHero />
      </Reveal>
    </div>
  );
}
