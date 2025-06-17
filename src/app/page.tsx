import ImageCard from "@/components/card/ImageCard";
import InfiniteCarousel from "@/components/carousel/InfiniteCarousel";
// import VerticalCarousel from "@/components/carousel/VerticalCarousel";
import HomeHero from "@/components/home/HomeHero";
import { getPageWithCarousels } from "@/lib/contentful";
// import getRemoteBase64ImagesWithBlur from "@/lib/getLocalBase64";

export default async function Home() {
  const response = await getPageWithCarousels("Home");

  // const firstCarouselImages = await getRemoteBase64ImagesWithBlur(
  //   response!.page.fields.carousels[0].fields.images.map(
  //     (item) => item.fields.file
  //   )
  // );

  // const secondCarouselImages = await getRemoteBase64ImagesWithBlur(
  //   response!.page.fields.carousels[1].fields.images.map(
  //     (item) => item.fields.file
  //   )
  // );

  // const thirdCarouselImages = await getRemoteBase64ImagesWithBlur(
  //   response!.page.fields.carousels[2].fields.images.map(
  //     (item) => item.fields.file
  //   )
  // );

  // console.log("firstCarouselImages", firstCarouselImages);

  return (
    <div className="flex flex-col-reverse md:flex-row md:min-h-screen w-screen bg-white">
      <section className="left-section w-full md:w-1/2 max-h-screen grid grid-cols-2 px-6 sm:px-0 sm:grid-cols-3 gap-4 sm:gap-x-8 md:gap-x-2 lg:gap-x-4 xl:gap-x-8 gap-y-6 overflow-hidden">
        <InfiniteCarousel
          className="md:min-h-screen"
          fastDuration={45}
          direction="topToBottom">
          {response?.page.fields.carousels[0].fields.images.map(
            (item, index) => (
              <ImageCard
                alt={item.fields.file.title}
                image={`https:${item.fields.file.url}`}
                width={item.fields.file.details.image.width}
                height={item.fields.file.details.image.height}
                key={index}
                priority={true}
              />
            )
          )}
          {/* {firstCarouselImages.map((item, index) => (
            <ImageCard
              alt={item.title}
              image={`https:${item.url}`}
              blurDataUrl={item.blurredDataUrl}
              placeholder="blur"
              width={item.plaiceholder?.metadata.width}
              height={item.plaiceholder?.metadata.height}
              key={index}
              priority={true}
            />
          ))} */}
        </InfiniteCarousel>

        <InfiniteCarousel
          className="md:min-h-screen"
          fastDuration={45}
          direction="bottomToTop">
          {response?.page.fields.carousels[1].fields.images.map(
            (item, index) => (
              <ImageCard
                alt={item.fields.file.title}
                image={`https:${item.fields.file.url}`}
                width={item.fields.file.details.image.width}
                height={item.fields.file.details.image.height}
                key={index}
                priority={true}
              />
            )
          )}

          {/* {secondCarouselImages.map((item, index) => (
            <ImageCard
              alt={item.title}
              image={`https:${item.url}`}
              blurDataUrl={item.blurredDataUrl}
              placeholder="blur"
              width={item.plaiceholder?.metadata.width}
              height={item.plaiceholder?.metadata.height}
              key={index}
              priority={true}
            />
          ))} */}
        </InfiniteCarousel>
        <InfiniteCarousel
          className="md:min-h-screen"
          fastDuration={45}
          direction="topToBottom">
          {response?.page.fields.carousels[2].fields.images
            .reverse()
            .map((item, index) => (
              <ImageCard
                alt={item.fields.file.title}
                image={`https:${item.fields.file.url}`}
                width={item.fields.file.details.image.width}
                height={item.fields.file.details.image.height}
                key={index}
                priority={true}
              />
            ))}

          {/* {thirdCarouselImages.map((item, index) => (
            <ImageCard
              alt={item.title}
              image={`https:${item.url}`}
              blurDataUrl={item.blurredDataUrl}
              placeholder="blur"
              width={item.plaiceholder?.metadata.width}
              height={item.plaiceholder?.metadata.height}
              key={index}
              priority={true}
            />
          ))} */}
        </InfiniteCarousel>
      </section>

      <section className="right-section w-full md:w-1/2 mt-32 md:mt-0 md:h-screen flex items-center justify-center">
        <HomeHero />
      </section>
    </div>
  );
}
