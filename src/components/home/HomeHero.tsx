"use client";

import { useRouter } from "next/navigation";
import MotionIconButton from "../buttons/animated/MotionIconButton";

export default function HomeHero() {
  const router = useRouter();
  return (
    <div className="space-y-6 md:space-y-8 py-14">
      <div className="flex w-[352px] mx-auto text-center md:w-[461px] h-[250px] md:h-[321px] flex-col justify-center self-stretch">
        <p className="font-bold text-[45px] sm:text-[55px] uppercase leading-[50px] px-4 md:px-8 md:leading-16 text-[#0F0E0E]">
          We are a BRAZILIAN Full-Service Production Company
        </p>
      </div>

      <div className="w-[352px] sm:w-[400px] sm:!pt-8 md:!pt-0 md:w-[461px] mx-auto text-center mb-[42px] md:mb-[34px] md:px-10 lg:px-0">
        <p className="text-xl md:text-lg text-[#2D2D2D] leading-6 tracking-[-0.145px] md:tracking-[-0.18px] break-words">
          Specialising in advertising, lifestyle, and fashion shoots, with
          offices in Rio and São Paulo, delivering top-tier productions across
          Brazil.
        </p>
      </div>

      <div className="w-full">
        <button
          onClick={() => router.push("/portfolio")}
          className="flex sm:hidden mx-auto justify-center cursor-pointer items-center gap-3.5 text-white py-[12.367px] px-[18.55px] bg-black"
          type="button">
          <span className="text-[18px] font-normal tracking-[-0.346px] uppercase">
            Our Portfolio
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
          onClick={() => router.push("/portfolio")}
          className="hidden sm:flex mx-auto justify-center cursor-pointer items-center gap-3.5 text-white py-[12.367px] w-52 bg-black relative overflow-hidden"
          type="button">
          <span className="text-[18px] font-normal tracking-[-0.346px] uppercase w-full">
            Our Portfolio
          </span>
        </MotionIconButton>
      </div>
    </div>
  );
}
