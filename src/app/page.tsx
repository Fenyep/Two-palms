import HomeHero from "@/components/home/HomeHero";

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:min-h-screen w-screen bg-white">
      <section className="left-section w-full md:w-1/2 h-auto md:h-screen grid grid-cols-2 px-6 sm:px-0 sm:grid-cols-3 gap-4 sm:gap-x-8 gap-y-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-32 w-full md:h-full bg-blue-300"></div>
        ))}
      </section>
      <section className="right-section w-full md:w-1/2 mt-32 md:mt-0 md:h-screen flex items-center justify-center">
        <HomeHero />
      </section>
    </div>
  );
}
