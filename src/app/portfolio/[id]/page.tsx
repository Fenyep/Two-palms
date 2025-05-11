import ImageCard from "@/components/card/ImageCard";
import RichTextRenderer from "@/components/RichTextRenderer";
import { getProjectDetailsPageFromSlug } from "@/lib/contentful";
import { images2 } from "@/lib/data";

export default async function PortfolioDetails() {
  const response = await getProjectDetailsPageFromSlug();

  console.log(response);

  return (
    <div className="flex bg-white pt-4 md:pt-24 flex-col md:flex-row min-h-screen w-screen">
      <section className="left-section relative w-full md:w-2/5 md:mt-24 mb-[77px] md:mb-0 pl-[25px] md:pl-10">
        <div className="max-w-[310px] sticky top-0 pt-24">
          {response.fields.authorDetails.content.map((item, index) => (
            <RichTextRenderer
              content={item}
              key={index + item.nodeType}
              paragraphClassName="text-black text-[16px] leading-6 !mb-2"
              heading1ClassName="text-black text-[24px] leading-6 font-semibold"
            />
          ))}
          {/* <div className="pt-24">
            <div className="text-black text-[18px] leading-6 space-y-2">
              <h1 className="font-semibold">MIRAMONO</h1>
              <p>Germany</p>
            </div>

            <div className="text-black text-[18px] leading-6 mt-6">
              <p>
                Sophisticated automotive photography highlighting the elegant
                design and premium features of BMW&apos;s latest model.
              </p>
            </div>
          </div>

          <div className="text-black text-[16px] leading-6 mt-[34px]">
            <p>Client: BMW Group</p>
            <p>Photography: James Wilson</p>
            <p>Art Direction: Lisa Mueller</p>
          </div> */}
        </div>
      </section>
      <section className="right-section w-full md:w-3/5 h-auto grid grid-cols-4 px-6 md:px-0 gap-4 md:gap-x-8 gap-y-6">
        {images2.map((item, index) => (
          <ImageCard
            className="max-h-[726px] col-span-2"
            image={item}
            key={index}
          />
        ))}
      </section>
    </div>
  );
}
