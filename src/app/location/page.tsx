// "use client";

import ImageCard from "@/components/card/ImageCard";
import InfiniteCarousel from "@/components/carousel/InfiniteCarousel";
import { getPageWithCarousels } from "@/lib/contentful";
import { images1, images2, images3 } from "@/lib/data";

export default async function Location() {
  const response = await getPageWithCarousels("Locations");

  return (
    <div className="w-screen max-h-[150rem] sm:max-h-[175rem] xl:max-h-[225rem] overflow-hidden bg-white pt-24 grid grid-cols-2 px-6 md:px-0 md:grid-cols-4 gap-y-3.5 gap-x-4 md:gap-x-6 lg:gap-x-8 md:gap-y-8 lg:gap-[42px]">
      {response?.page ? (
        <>
          <InfiniteCarousel
            direction="bottomToTop"
            hoverBehavior="pause"
            fastDuration={75}>
            {response.page.fields.carousels[0].fields.images.map(
              (item, index) => (
                <ImageCard
                  // height={item.fields.file.details.image.height}
                  // className={`${index !== 0 ? "mt-2 sm:mt-4" : ""}`}
                  image={`https:${item.fields.file.url}`}
                  key={index}
                />
              )
            )}
          </InfiniteCarousel>
          <InfiniteCarousel
            direction="bottomToTop"
            hoverBehavior="none"
            fastDuration={75}>
            {response.page.fields.carousels[1].fields.images.map(
              (item, index) => (
                <ImageCard
                  // height={item.fields.file.details.image.height}
                  // className={`${index !== 0 ? "mt-2 sm:mt-4" : ""}`}
                  image={`https:${item.fields.file.url}`}
                  key={index}
                />
              )
            )}
          </InfiniteCarousel>
          <InfiniteCarousel
            direction="bottomToTop"
            hoverBehavior="pause"
            fastDuration={75}>
            {response.page.fields.carousels[2].fields.images.map(
              (item, index) => (
                <ImageCard
                  // height={item.fields.file.details.image.height}
                  // className={`${index !== 0 ? "mt-2 sm:mt-4" : ""}`}
                  image={`https:${item.fields.file.url}`}
                  key={index}
                />
              )
            )}
          </InfiniteCarousel>

          <InfiniteCarousel
            direction="bottomToTop"
            hoverBehavior="none"
            fastDuration={75}>
            {response.page.fields.carousels[3].fields.images.map(
              (item, index) => (
                <ImageCard
                  // height={item.fields.file.details.image.height}
                  // className={`${index !== 0 ? "mt-2 sm:mt-4" : ""}`}
                  image={`https:${item.fields.file.url}`}
                  key={index}
                />
              )
            )}
          </InfiniteCarousel>
        </>
      ) : (
        <>
          <InfiniteCarousel
            direction="bottomToTop"
            hoverBehavior="pause"
            fastDuration={75}>
            {images1.map((item, index) => (
              <ImageCard className="" image={item} key={index} />
            ))}
          </InfiniteCarousel>
          <InfiniteCarousel
            direction="topToBottom"
            hoverBehavior="none"
            fastDuration={75}>
            {images2.map((item, index) => (
              <ImageCard className="" image={item} key={index} />
            ))}
          </InfiniteCarousel>
          <InfiniteCarousel
            direction="bottomToTop"
            hoverBehavior="pause"
            fastDuration={75}>
            {images3.map((item, index) => (
              <ImageCard className="" image={item} key={index} />
            ))}
          </InfiniteCarousel>

          <InfiniteCarousel
            direction="topToBottom"
            hoverBehavior="none"
            fastDuration={75}>
            {images2.map((item, index) => (
              <ImageCard className="" image={item} key={index} />
            ))}
          </InfiniteCarousel>
        </>
      )}

      {/* {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="h-72 w-full bg-blue-300"></div>
      ))} */}
    </div>
  );
}
