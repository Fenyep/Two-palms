// import ImageCard from "@/components/card/ImageCard";
// import InfiniteCarousel from "@/components/carousel/InfiniteCarousel";
import VerticalCarousel from "@/components/carousel/VerticalCarousel";
import HomeHero from "@/components/home/HomeHero";
import { getPageWithCarousels } from "@/lib/contentful";

export default async function Home() {
  const response = await getPageWithCarousels("Home");

  return (
    <div className="flex flex-col-reverse md:flex-row md:min-h-screen w-screen bg-white">
      <section className="left-section w-full md:w-1/2 max-h-screen grid grid-cols-2 px-6 sm:px-0 sm:grid-cols-3 gap-4 sm:gap-x-8 md:gap-x-2 lg:gap-x-4 xl:gap-x-8 gap-y-6 overflow-hidden">
        {response ? (
          <>
            <VerticalCarousel
              className="md:min-h-screen"
              images={response.page.fields.carousels[0].fields.images.map(
                (item) => `https:${item.fields.file.url}`
              )}
              duration={30}
              pauseOnHover={true}
            />

            <VerticalCarousel
              className="md:min-h-screen"
              images={response.page.fields.carousels[1].fields.images.map(
                (item) => `https:${item.fields.file.url}`
              )}
              duration={30}
              pauseOnHover={true}
              direction="topToBottom"
            />
            <VerticalCarousel
              className="md:min-h-screen"
              images={response.page.fields.carousels[2].fields.images.map(
                (item) => `https:${item.fields.file.url}`
              )}
              duration={30}
              pauseOnHover={true}
              direction="topToBottom"
            />
          </>
        ) : null}

        {/* <InfiniteCarousel
          className="md:min-h-screen"
          fastDuration={45}
          direction="topToBottom">
          {response?.page.fields.carousels[0].fields.images.map(
            (item, index) => (
              <ImageCard
                alt={item.fields.file.title}
                image={`https:${item.fields.file.url}`}
                key={index}
              />
            )
          )}
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
                key={index}
              />
            )
          )}
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
                key={index}
              />
            ))}
        </InfiniteCarousel> */}
      </section>

      <section className="right-section w-full md:w-1/2 mt-32 md:mt-0 md:h-screen flex items-center justify-center">
        <HomeHero />
      </section>
    </div>
  );
}
