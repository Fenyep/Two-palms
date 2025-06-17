import ImageCard from "@/components/card/ImageCard";
import RichTextRenderer from "@/components/RichTextRenderer";
import { getProjectFromSlug } from "@/lib/contentful";
// import getRemoteBase64ImagesWithBlur from "@/lib/getLocalBase64";

export default async function PortfolioDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const slug = (await params).id;

  const response = await getProjectFromSlug(slug);

  // const firstCarouselImages = await getRemoteBase64ImagesWithBlur(
  //   response!.fields.projectImages!.map((item) => item.fields.file)
  // );

  return (
    <div className="flex bg-white pt-4 md:pt-24 flex-col md:flex-row min-h-screen w-screen">
      <section className="left-section relative w-full md:w-2/5 md:mt-24 mb-[77px] md:mb-0 pl-[25px] md:pl-10">
        <div className="max-w-[310px] sticky top-0 pt-24">
          {response?.fields.authorDetails?.content.map((item, index) => (
            <RichTextRenderer
              content={item}
              key={index + item.nodeType}
              paragraphClassName="text-black text-[16px] leading-6 !mb-2"
              heading1ClassName="text-black text-[24px] leading-6 font-semibold"
            />
          ))}
        </div>
      </section>
      <section className="right-section w-full md:w-3/5 h-auto columns-2 pb-8 md:pb-12 px-6 md:px-0 gap-4 md:gap-x-8 gap-y-6">
        {response?.fields.projectImages?.map((item, index) => (
          <ImageCard
            className={`max-h-[726px] ${index !== 0 ? "mt-4" : ""}`}
            image={`https:${item.fields.file.url}`}
            key={`image-${index}`}
            width={item.fields.file.details.image.width}
            height={item.fields.file.details.image.height}
            priority={true}
          />
        ))}

        {/* {firstCarouselImages.map((item, index) => (
          <ImageCard
            className={`max-h-[726px] ${index !== 0 ? "mt-4" : ""}`}
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
      </section>
    </div>
  );
}
