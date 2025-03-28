import LogoSvg from "@/components/LogoSvg";
import Image from "next/image";

const AboutServicesWide: AboutServiceProps[] = [
  {
    title: "Production & Creative Support",
    content: [
      "Full-service production for film, stills & branded content",
      "Estimating & cost planning",
      "Art buying & visual research",
      "Casting, celebrity & testimonial booking",
      "Photographer & director screening",
      "Connecting with AI creatives",
      "Sustainable production planning, eco-conscious workflows",
      "Carbon footprint reduction strategies",
    ],
  },
  {
    title: "AI Production",
    content: [
      "AI-generated backgrounds for seamless integration with real models",
      "Studio-to-scene integration for models and products",
    ],
  },
  {
    title: "Locations & Logistics",
    content: [
      "Location scouting & permitting",
      "Travel plannings & accommodations",
      "On-set management & coordination",
      "Crew assembly & talent negotiation",
      "Equipment rental & technical support",
      "Catering, safety & insurance handling",
    ],
  },
  {
    title: "Post-Production & Delivery",
    content: [
      "Post-production coordination",
      "Behind-the-scenes & fashion content production",
      "Fashion film & branded content creationn",
      "Delivery optimised for print, digital & social media",
    ],
  },

  {
    title: "Legal & Financial Management",
    content: [
      "Rights clearance & legal support",
      "Contract negotiation for talent & locations",
      "Safety advice & insurance certificates",
      "Billing & financial transparency",
    ],
  },
];

const AboutServicesSmall: AboutServiceProps[] = [
  {
    title: "Planning & Organization",
    content: [
      "Budgeting & cost estimates",
      "Full pre-production services",
      "Travel & accommodation arrangements",
    ],
  },
  {
    title: "Locations & Logistics",
    content: [
      "Finding the perfect locations & getting permits",
      "Managing everything on set",
      "Equipment rental & technical support",
      "Catering & hospitality services",
      "Safety & insurance",
    ],
  },
  {
    title: "Talent & Casting",
    content: ["Finding and hiring models & actors", "Negotiating contracts"],
  },

  {
    title: "Creative & Media",
    content: ["Behind-the-scenes videos", "Fashion films & branded content"],
  },
];

export default function About() {
  return (
    <div className="space-y-6 mt-36">
      <section className="px-[25px] md:ml-[59px] space-y-[42px] md:space-y-8 mb-[90px] md:mb-[116px]">
        <div className="md:max-w-[734px] self-stretch pr-32 md:pr-24 lg:pr-0">
          <h1 className="font-bold text-[50px] md:text-[68px] leading-[52px] md:leading-[77px] tracking-[-0.7px] text-[#0F0E0E]">
            We are a BRAZILIAN Full-Service Production Company
          </h1>
        </div>

        <button
          className="flex justify-center cursor-pointer items-center gap-3.5 text-white py-[12.367px] px-[18.55px] bg-black"
          type="button">
          <span className="text-[18px] font-normal tracking-[-0.346px] uppercase">
            Begin project
          </span>
        </button>
      </section>
      <section className="flex gap-6 mb-[101px]">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-[702px] w-full bg-blue-300"></div>
        ))}
      </section>

      <section className="flex flex-col-reverse md:flex-col">
        <div className="flex flex-col lg:flex-row justify-between w-full mx-auto px-[25px] max-w-[1440px] gap-[48px] mb-[88px] md:mb-[193px]">
          <section className="left-section max-w-[246px]">
            <h2 className="font-semibold text-black text-xl md:text-[25px] leading-7 md:leading-9">
              Bringing brands to life through Brazil
            </h2>
          </section>

          <section className="right-section md:hidden space-y-[42px] text-[28px] leading-9 tracking-[-0.341px]">
            <p>
              We’re a passionate team of creatives who bring bold ideas to life.
            </p>
            <p>
              We celebrate the spirit of Brazil while transforming ideas into
              campaigns.
            </p>
          </section>
          <section className="right-section max-w-[783px] hidden md:block space-y-6 text-[30px] leading-10 tracking-[-0.12px]">
            <p>
              Two Palms is a full-service still & commercial production company
              specialising in advertising, lifestyle and fashion shoots.
            </p>
            <p>
              With offices in Rio de Janeiro and São Paulo, we work with global
              clients, handling everything from pre-production to execution on
              time and within budget.
            </p>
            <p>
              With an agile core team and an extensive network of freelance
              producers, directors, photographers, glam team and creatives,
              we’re here for the biggest projects or the smallest tasks.
            </p>
          </section>
        </div>
        <section className="flex gap-6 mb-[67px] md:mb-[193px]">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-[581px] md:h-[702px] w-full bg-blue-300"></div>
          ))}
        </section>

        <div className="flex flex-col md:flex-row justify-between w-full mb-[285.64px] md:mb-[193px] mx-auto max-w-[1440px] gap-[55px] md:gap-4 px-[25px] md:px-0">
          <section className="left-section max-w-[246px] space-y-[18px]">
            <h2 className="font-semibold text-black text-[25px] leading-9">
              / About Lucia
            </h2>

            <Image
              src={"/images/lucia.png"}
              alt="Lucia"
              width={218.5}
              height={146}
            />
          </section>
          <section className="right-section md:max-w-[783px] space-y-12 text-[22px] md:text-[30px] leading-[35px] md:leading-[41px] tracking-[-0.12px]">
            <p>
              Born in Brazil with German roots, Lucia founded Two Palms in 2007
              with a bold vision: to bring world-class advertising production to
              international clients
            </p>
            <p>
              Today, that vision is a reality. Working between Brazil and Europe
              she brings together international standards with Brazil’s unique
              energy, delivering production experience that’s as smooth as it is
              creative.
            </p>
          </section>
        </div>
      </section>

      <div className="bg-[#F6F6F6] pt-[56px] md:pt-[82px] pb-[54px] md:pb-24 pl-[25px] md:pl-[59px] pr-[27px] md:pr-[278px] flex flex-col md:flex-row md:justify-between gap-[62px] md:gap-8">
        <section className="left-section">
          <h2 className="font-semibold hidden md:block text-black text-[25px] leading-9">
            Full Service list
          </h2>
          <h2 className="font-semibold md:hidden text-black text-[25px] leading-9">
            What We Do
          </h2>
        </section>
        <section className="right-section max-w-[635px]">
          <div className="space-y-12 md:hidden">
            {AboutServicesSmall.map((service, index) => (
              <AboutService key={`service-${index}`} {...service} />
            ))}
          </div>
          <div className="hidden md:block space-y-[74px]">
            {AboutServicesWide.map((service, index) => (
              <AboutService key={`service-${index}`} {...service} />
            ))}
          </div>
        </section>
      </div>

      <section className="w-full pt-[68px] pb-[81px] md:pt-[102px] md:pb-[107px] px-[26px] md:pl-[59px] md:pr-[348px] flex md:justify-between md:gap-8 bg-[#001A92]">
        <div className="left-section hidden size-4 md:block" />

        <div className="max-w-[556px] space-y-[44px]">
          <p className="text-white text-[26px] leading-[39px] md:text-[34px] font-bold md:leading-[48.333px] tracking-[-0.141px]">
            “Always ensure a smooth, on-time, and budget-friendly production
            experience”
          </p>
          <div className="flex gap-3">
            <div className="w-[38px] height-[41px]">
              <LogoSvg fillColor="white" />
            </div>
            <div className="text-white text-[18px] leading-[22px] tracking-[-0.225px] md:text-[16px] md:leading-[19px] md:tracking-[-0.191px]">
              <p className="font-bold">Elaine Payne</p>
              <p>Strava</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

interface AboutServiceProps {
  title: string;
  content: string[];
}

function AboutService({ content, title }: AboutServiceProps) {
  return (
    <div className="space-y-7 md:space-y-8">
      <h3 className="self-stretch font-semibold text-[24px] leading-6 md:text-[25px] md:leading-[38px]">
        {title}
      </h3>
      <div className="md:ml-8">
        <ul className="md:list-disc space-y-[15px] text-[22px] leading-[26px] md:text-[25px] md:leading-[38px]">
          {content.map((item, index) => (
            <li key={`service-${index}-${item}`} className="self-stretch">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
