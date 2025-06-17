"use client";

import MotionIconButton from "@/components/buttons/animated/MotionIconButton";
import ImageCard from "@/components/card/ImageCard";
import InfiniteCarousel from "@/components/carousel/InfiniteCarousel";
import LogoSvg from "@/components/LogoSvg";
// import { animatePageOut } from "@/lib/animations";
import {
  AboutServiceProps,
  AboutServicesSmall,
  AboutServicesWide,
  images1,
  images2,
} from "@/lib/data";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <div className="space-y-6 bg-white pt-36 text-black">
      <section className="pl-[25px] max-w-[308px] md:pr-[25px] sm:max-w-[560px] lg:max-w-max md:ml-[59px] space-y-[42px] md:space-y-8 mb-[90px] md:mb-[116px]">
        <div className="md:max-w-[734px] self-stretch sm:pr-20 md:pr-24 lg:pr-0">
          <h1 className="font-bold text-[50px] md:text-[68px] leading-[52px] md:leading-[77px] tracking-[-0.7px] text-[#0F0E0E]">
            We are a BRAZILIAN Full-Service Production Company
          </h1>
        </div>
        <div className="w-fit">
          <button
            onClick={() => router.push("/contact")}
            className="flex sm:hidden justify-center cursor-pointer items-center gap-3.5 text-white py-[12.367px] px-[18.55px] bg-black"
            type="button">
            <span className="text-[18px] font-normal tracking-[-0.346px] uppercase">
              Begin project
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.88382 0.494987L6.69074 1.68806L12.319 7.31627H0.0942383V8.97621H12.319L6.69074 14.6044L7.88382 15.7975L14.9385 8.74278L15.5091 8.14624L14.9385 7.5497L7.88382 0.494987Z"
                fill="white"
              />
            </svg>
          </button>

          <MotionIconButton
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.88382 0.494987L6.69074 1.68806L12.319 7.31627H0.0942383V8.97621H12.319L6.69074 14.6044L7.88382 15.7975L14.9385 8.74278L15.5091 8.14624L14.9385 7.5497L7.88382 0.494987Z"
                  fill="white"
                />
              </svg>
            }
            onClick={() => router.push("/contact")}
            className="hidden sm:flex justify-center cursor-pointer items-center gap-3.5 text-white py-[12.367px] w-52 bg-black relative overflow-hidden"
            type="button">
            <span className="text-[18px] font-normal tracking-[-0.346px] uppercase w-full">
              Begin project
            </span>
          </MotionIconButton>

          {/* <button
        onClick
          className="flex justify-center cursor-pointer items-center gap-3.5 text-white py-[12.367px] px-[18.55px] bg-black"
          type="button">
          <span className="text-[18px] font-normal tracking-[-0.346px] uppercase">
            Begin project
          </span>
        </button> */}
        </div>
      </section>
      <section className="mb-[101px] max-w-screen overflow-x-hidden">
        <InfiniteCarousel
          fastDuration={15}
          slowDuration={35}
          direction="rightToLeft">
          {images1.map((item, index) => (
            <ImageCard
              className="h-[250px] min-w-[250px] sm:h-[400px] sm:min-w-[300px]"
              image={item}
              key={index}
              priority={true}
            />
          ))}
        </InfiniteCarousel>
      </section>
      <section className="flex flex-col">
        <div className="flex flex-col lg:flex-row justify-between w-full mx-auto px-[25px] max-w-[1440px] gap-[48px] mb-[88px] md:mb-[193px]">
          <div className="left-section max-w-[246px]">
            <h2 className="font-semibold text-black text-xl md:text-[25px] leading-7 md:leading-9">
              Bringing brands to life through Brazil
            </h2>
          </div>

          <div className="right-section md:hidden space-y-[42px] text-[28px] leading-9 tracking-[-0.341px]">
            <p>
              We’re a passionate team of creatives who bring bold ideas to life.
            </p>
            <p>
              We celebrate the spirit of Brazil while transforming ideas into
              campaigns.
            </p>
          </div>
          <div className="right-section max-w-[783px] hidden md:block space-y-6 text-[30px] leading-10 tracking-[-0.12px] text-black">
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
          </div>
        </div>
        <div className="mb-[101px] max-w-screen overflow-x-hidden">
          <InfiniteCarousel
            fastDuration={15}
            slowDuration={35}
            direction="leftToRight">
            {images2.map((item, index) => (
              <ImageCard
                className="h-[250px] min-w-[250px] sm:h-[400px] sm:min-w-[300px]"
                image={item}
                key={index}
                priority={true}
              />
            ))}
          </InfiniteCarousel>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full mb-[285.64px] md:mb-[193px] mx-auto max-w-[1440px] gap-[55px] md:gap-4 px-[25px]">
          <div className="left-section max-w-[246px] space-y-[18px]">
            <h2 className="font-semibold text-black text-[25px] leading-9">
              About Lucia
            </h2>

            <Image
              src={"/images/lucia.png"}
              alt="Lucia"
              width={218.5}
              height={146}
            />
          </div>
          <div className="text-black right-section md:max-w-[783px] space-y-12 text-[22px] md:text-[30px] leading-[35px] md:leading-[41px] tracking-[-0.12px]">
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
          </div>
        </div>
      </section>
      <section className="bg-[#F6F6F6] pt-[56px] md:pt-[82px] pb-[54px] md:pb-24 pl-[25px] md:pl-20 pr-[27px] md:pr-[278px] flex flex-col md:flex-row md:justify-between gap-[62px] md:gap-8">
        <div className="left-section">
          <h2 className="font-semibold hidden md:block text-black text-[25px] leading-9">
            Full Service list
          </h2>
          <h2 className="font-semibold md:hidden text-black text-[25px] leading-9">
            What We Do
          </h2>
        </div>
        <div className="right-section max-w-[635px] text-black">
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
        </div>
      </section>
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
              <p className="font-bold">Brad Garrett</p>
              <p>Arktik</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
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
