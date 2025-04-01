import directusInstance from "@/lib/directus";
import { readItems } from "@directus/sdk";
import Image from "next/image";

type Portfolio = {
  id: string;
  files: {
    id: number;
    portfolio_id: string;
    directus_files_id: string;
  }[];
};

async function getPortfolio() {
  const response = await directusInstance.request(
    readItems("portfolio", {
      fields: ["id", "files.*"],
    })
  );

  return response as Portfolio[];
}

export default async function PortfolioDetails() {
  const portfolios = await getPortfolio();

  console.log(portfolios);

  return (
    <div className="flex bg-white pt-4 md:pt-24 flex-col md:flex-row min-h-screen w-screen">
      <section className="left-section w-full md:w-2/5 md:mt-32 mb-[77px] md:mb-0 pl-[25px] md:pl-10">
        <div className="max-w-[310px] mt-24">
          <div>
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
          </div>
        </div>
      </section>
      <section className="right-section w-full md:w-3/5 h-auto grid grid-cols-1 px-6 md:px-0 gap-4 md:gap-x-8 gap-y-6">
        {(portfolios as unknown as Portfolio).files.map((file, i) => (
          <div key={i + 100} className="h-72 w-full">
            <Image
              src={`http://localhost:8055/assets/${file.directus_files_id}`}
              alt="Image"
              width={"72"}
              height={"72"}
              loading="lazy"
            />
          </div>
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-72 w-full bg-blue-300"></div>
        ))}
      </section>
    </div>
  );
}
