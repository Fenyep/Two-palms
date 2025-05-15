// "use client";

import ImageCard from "@/components/card/ImageCard";
import { getProjectsPageFromName } from "@/lib/contentful";
// import InfiniteCarousel from "@/components/carousel/InfiniteCarousel";

export default async function Portfolio() {
  const response = await getProjectsPageFromName("Portfolio");

  console.log(response?.page.fields.projects.length);

  return (
    <div className="w-screen bg-white pt-24 pb-8 sm:pb-16 columns-2 px-6 md:px-0 md:columns-3 gap-y-3.5 gap-x-4 md:gap-x-6 lg:gap-x-8 md:gap-y-8 lg:gap-[42px]">
      {response?.page ? (
        <>
          {response.page.fields.projects.map((item, index) => (
            <ImageCard
              height={
                item.fields.thumbnailImage.fields.file.details.image.height
              }
              className={`${index !== 0 ? "mt-4" : ""}`}
              image={`https:${item.fields.thumbnailImage.fields.file.url}`}
              key={index}
              clientName={item.fields.clientName}
              clientSlug={item.fields.slug}
              withOverlay
            />
          ))}
        </>
      ) : null}
    </div>
  );
}
