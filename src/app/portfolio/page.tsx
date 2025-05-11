// "use client";

import ImageCard from "@/components/card/ImageCard";
import { getPageWithCarousels } from "@/lib/contentful";
// import InfiniteCarousel from "@/components/carousel/InfiniteCarousel";
import { images1, images2, images3 } from "@/lib/data";

export default async function Portfolio() {
  const response = await getPageWithCarousels("Portfolio");

  return (
    <div className="w-screen bg-white pt-24 columns-2 px-6 md:px-0 md:columns-3 gap-y-3.5 gap-x-4 md:gap-x-6 lg:gap-x-8 md:gap-y-8 lg:gap-[42px]">
      {response?.page ? (
        <>
          {response.page.fields.carousels[0].fields.images.map(
            (item, index) => (
              <ImageCard
                height={item.fields.file.details.image.height}
                className={`${index !== 0 ? "mt-4" : ""}`}
                image={`https:${item.fields.file.url}`}
                key={index}
                withOverlay
              />
            )
          )}

          {response.page.fields.carousels[1].fields.images.map(
            (item, index) => (
              <ImageCard
                height={item.fields.file.details.image.height}
                className={`${index !== 0 ? "mt-4" : "mt-4 md:mt-0"}`}
                image={`https:${item.fields.file.url}`}
                key={index}
                withOverlay
              />
            )
          )}

          {response.page.fields.carousels[2].fields.images.map(
            (item, index) => (
              <ImageCard
                height={item.fields.file.details.image.height}
                className={`${index !== 0 ? "mt-4" : "mt-4 md:mt-0"}`}
                image={`https:${item.fields.file.url}`}
                key={index}
                withOverlay
              />
            )
          )}
        </>
      ) : (
        <>
          {images1.map((item, index) => (
            <ImageCard className="" image={item} key={index} withOverlay />
          ))}

          {images2.map((item, index) => (
            <ImageCard className="" image={item} key={index} withOverlay />
          ))}

          {images3.map((item, index) => (
            <ImageCard className="" image={item} key={index} withOverlay />
          ))}
        </>
      )}
    </div>
  );
}
