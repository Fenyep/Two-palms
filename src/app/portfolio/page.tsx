// "use client";

import ImageCard from "@/components/card/ImageCard";
import { getProjectsPageFromName } from "@/lib/contentful";
// import getRemoteBase64ImagesWithBlur from "@/lib/getLocalBase64";

export default async function Portfolio() {
  const response = await getProjectsPageFromName("Portfolio");

  // const images = await getRemoteBase64ImagesWithBlur(
  //   response!.page.fields.projects.map(
  //     (item) => item.fields.thumbnailImage.fields.file
  //   )
  // );

  return (
    <div className="w-screen bg-white pt-24 pb-8 sm:pb-16 columns-2 px-6 md:px-0 md:columns-3 gap-y-3.5 gap-x-4 md:gap-x-6 lg:gap-x-8 md:gap-y-8 lg:gap-[42px]">
      {response?.page ? (
        <>
          {response.page.fields.projects.map((item, index) => (
            <ImageCard
              height={
                item.fields.thumbnailImage.fields.file.details.image.height
              }
              width={item.fields.thumbnailImage.fields.file.details.image.width}
              priority={true}
              className={`${index !== 0 ? "mt-4" : ""}`}
              image={`https:${item.fields.thumbnailImage.fields.file.url}`}
              key={index}
              clientName={item.fields.clientName}
              clientSlug={item.fields.slug}
              withOverlay
            />
          ))}
          {/* {images.map((item, index) => (
            <ImageCard
              height={item.plaiceholder?.metadata.height}
              width={item.plaiceholder?.metadata.width}
              // priority={true}
              className={`${index !== 0 ? "mt-4" : ""}`}
              image={`https:${item.url}`}
              key={index}
              clientName={
                response.page.fields.projects[index].fields.clientName
              }
              clientSlug={response.page.fields.projects[index].fields.slug}
              withOverlay
            />
          ))} */}
        </>
      ) : null}
    </div>
  );
}
