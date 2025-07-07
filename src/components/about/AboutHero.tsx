"use client";

import { useRouter } from "next/navigation";
import MotionIconButton from "../buttons/animated/MotionIconButton";
// import { animatePageOut } from "@/lib/animations";

export default function AboutHero() {
  const router = useRouter();
  return (
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
  );
}
