import ImageCard from "@/components/card/ImageCard";
import InfiniteCarousel from "@/components/carousel/InfiniteCarousel";
// import VerticalCarousel from "@/components/carousel/VerticalCarousel";
import { getPageWithCarousels } from "@/lib/contentful";

export default async function Location() {
  const response = await getPageWithCarousels("Locations");

  return (
    <div className="w-screen max-h-[150rem] sm:max-h-[175rem] xl:max-h-[225rem] overflow-hidden bg-white pt-24 grid grid-cols-2 px-6 md:px-0 md:grid-cols-4 gap-y-3.5 gap-x-4 md:gap-x-6 lg:gap-x-8 md:gap-y-8 lg:gap-[42px]">
      {/* {response ? (
        <>
          <VerticalCarousel
            className="max-h-[150rem] sm:max-h-[175rem] xl:max-h-[225rem]"
            images={response.page.fields.carousels[0].fields.images.map(
              (item) => `https:${item.fields.file.url}`
            )}
            duration={45}
            pauseOnHover={true}
          />

          <VerticalCarousel
            // className="md:min-h-screen"
            className="max-h-[150rem] sm:max-h-[175rem] xl:max-h-[225rem]"
            images={response.page.fields.carousels[1].fields.images.map(
              (item) => `https:${item.fields.file.url}`
            )}
            duration={45}
            pauseOnHover={true}
            direction="topToBottom"
          />
          <VerticalCarousel
            // className="md:min-h-screen"
            className="max-h-[150rem] sm:max-h-[175rem] xl:max-h-[225rem]"
            images={response.page.fields.carousels[2].fields.images.map(
              (item) => `https:${item.fields.file.url}`
            )}
            duration={45}
            pauseOnHover={true}
          />
          <VerticalCarousel
            // className="md:min-h-screen"
            className="max-h-[150rem] sm:max-h-[175rem] xl:max-h-[225rem]"
            images={response.page.fields.carousels[3].fields.images.map(
              (item) => `https:${item.fields.file.url}`
            )}
            duration={45}
            pauseOnHover={true}
            direction="topToBottom"
          />
        </>
      ) : null} */}

      <InfiniteCarousel
        direction="bottomToTop"
        hoverBehavior="pause"
        fastDuration={75}>
        {response?.page.fields.carousels[0].fields.images.map((item, index) => (
          <ImageCard
            // height={item.fields.file.details.image.height}
            // className={`${index !== 0 ? "mt-2 sm:mt-4" : ""}`}
            image={`https:${item.fields.file.url}`}
            key={index}
          />
        ))}
      </InfiniteCarousel>
      <InfiniteCarousel
        direction="bottomToTop"
        hoverBehavior="none"
        fastDuration={75}>
        {response?.page.fields.carousels[1].fields.images.map((item, index) => (
          <ImageCard
            // height={item.fields.file.details.image.height}
            // className={`${index !== 0 ? "mt-2 sm:mt-4" : ""}`}
            image={`https:${item.fields.file.url}`}
            key={index}
          />
        ))}
      </InfiniteCarousel>
      <InfiniteCarousel
        direction="bottomToTop"
        hoverBehavior="pause"
        fastDuration={75}>
        {response?.page.fields.carousels[2].fields.images.map((item, index) => (
          <ImageCard
            // height={item.fields.file.details.image.height}
            // className={`${index !== 0 ? "mt-2 sm:mt-4" : ""}`}
            image={`https:${item.fields.file.url}`}
            key={index}
          />
        ))}
      </InfiniteCarousel>

      <InfiniteCarousel
        direction="bottomToTop"
        hoverBehavior="none"
        fastDuration={75}>
        {response?.page.fields.carousels[3].fields.images.map((item, index) => (
          <ImageCard
            // height={item.fields.file.details.image.height}
            // className={`${index !== 0 ? "mt-2 sm:mt-4" : ""}`}
            image={`https:${item.fields.file.url}`}
            key={index}
          />
        ))}
      </InfiniteCarousel>
    </div>
  );
}
