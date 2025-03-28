"use client";
import Link from "next/link";
import LogoSvg from "../LogoSvg";
import { useMenuContext } from "@/hooks/guards/useMenuContext";

export default function Navbar() {
  const { setIsOpened } = useMenuContext();
  return (
    <div className="flex w-full px-7 mt-4 py-2 fixed top-0 z-30 backdrop-blur-sm">
      <div className="w-1/2 sm:w-1/3 lg:w-1/2">
        <Link href="/" className="flex items-center gap-2.5 w-fit">
          <div className="w-[38px] h-[41px]">
            <LogoSvg fillColor="black" />
          </div>
          <p className="text-black w-[110px] sm:text-[16px] sm:font-normal leading-[18.284px] tracking-[-0.16px] font-bold">
            Two Palms Productions<sup>TM</sup>
          </p>
        </Link>
      </div>

      <div className=" w-1/2 sm:w-2/3 lg:w-1/2 flex justify-end">
        <button
          type="button"
          onClick={() => setIsOpened(true)}
          className="block sm:hidden">
          <svg
            width="35"
            height="36"
            viewBox="0 0 35 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.83325 11.0109C5.83325 10.2055 6.48617 9.55261 7.29159 9.55261H27.7083C28.5137 9.55261 29.1666 10.2055 29.1666 11.0109C29.1666 11.8164 28.5137 12.4693 27.7083 12.4693H7.29159C6.48617 12.4693 5.83325 11.8164 5.83325 11.0109ZM5.83325 18.3026C5.83325 17.4972 6.48617 16.8443 7.29159 16.8443H27.7083C28.5137 16.8443 29.1666 17.4972 29.1666 18.3026C29.1666 19.108 28.5137 19.7609 27.7083 19.7609H7.29159C6.48617 19.7609 5.83325 19.108 5.83325 18.3026ZM5.83325 25.5943C5.83325 24.7889 6.48617 24.1359 7.29159 24.1359H27.7083C28.5137 24.1359 29.1666 24.7889 29.1666 25.5943C29.1666 26.3997 28.5137 27.0526 27.7083 27.0526H7.29159C6.48617 27.0526 5.83325 26.3997 5.83325 25.5943Z"
              fill="#0D0D0D"
            />
          </svg>
        </button>
        <div className="flex-1 hidden items-center justify-between sm:flex sm:gap-4">
          <div className="space-x-6 md:ml-16">
            <Link className="hover:underline hover:underline-offset-2" href="/">
              Home
            </Link>
            <Link
              className="hover:underline hover:underline-offset-2"
              href="/portfolio">
              Portfolio
            </Link>
            <Link
              className="hover:underline hover:underline-offset-2"
              href="/location">
              Location
            </Link>
            <Link
              className="hover:underline hover:underline-offset-2"
              href="/about">
              About
            </Link>
          </div>
          <Link
            href="/contact"
            className="font-bold text-black leading-4 hover:underline hover:underline-offset-2">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
