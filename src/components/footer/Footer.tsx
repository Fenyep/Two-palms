import LogoSvg from "../LogoSvg";
import Image from "next/image";
import { useMenuContext } from "@/hooks/guards/useMenuContext";
import Link from "next/link";
// import TransitionLink from "../navbar/TransitionLink";

export default function Footer() {
  const { navlinks } = useMenuContext();
  return (
    <footer className="bg-black flex flex-col overflow-hidden items-stretch pt-[72px] md:pt-[55px] pb-[22px]">
      <section className="max-w-full ml-[19px] md:ml-[59px]">
        <div className="flex flex-col md:gap-y-0 md:flex-row">
          <div className="text-2xl md:w-[64%] lg:w-[50%] text-white uppercase tracking-[-0.8px] mt-2.5 max-md:max-w-full max-md:mt-10">
            <div className="font-normal md:font-bold leading-none">
              Just drop an &quot;oiii&quot;
            </div>
            <a
              target="_blank"
              href="mailto:hello@twopalmsproductions.com"
              className="inline-block font-normal mt-[5px] max-md:max-w-full text-white/80 text-[18px] md:text-2xl">
              hello@twopalmsproductions.com
            </a>
          </div>

          <div className="text-white md:gap-x-8 lg:gap-x-[66px] mt-[130px] md:mt-0 space-y-[13px] md:space-y-0 md:inline-flex text-[22px] font-normal leading-5">
            <ul className="flex flex-col gap-y-[13px]">
              {navlinks.map((elmt, index) => (
                <li
                  key={elmt.label + index}
                  className="relative z-10 whitespace-nowrap cursor-pointer p-1">
                  <div className="overflow-hidden relative">
                    <Link href={elmt.href}>
                      <span className="z-20 hover:underline text-white">
                        {elmt.label}
                      </span>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-y-[14px] sm:gap-2 text-2xl ml-1 sm:ml-0">
              <a
                target="_blank"
                href="https://www.instagram.com/twopalmsproductions/?hl=en-gb"
                className="hover:underline hover:underline-offset-2">
                Instagram
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/twopalmsproductions/about/"
                className="hover:underline hover:underline-offset-2">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center md:justify-start max-md:px-5 p-[50px] py-5 mt-[117px]">
        <div className="w-fit gap-[40px_19px] flex items-center text-[91px] text-white font-normal max-md:text-[40px] ">
          <div className="w-[62px] h-[67]">
            <LogoSvg fillColor="white" width="62" height="67" />
          </div>
          <div>
            <p className="text-4xl md:text-[91px] leading-10 md:leading-24 tracking-tight">
              Two Palms Productions
            </p>
          </div>
        </div>
      </section>
      <div className="flex w-full max-w-full items-center px-14 text-white leading-[1.2] justify-center md:justify-between flex-wrap mt-[31px] max-md:max-w-full">
        <div className="self-stretch hidden md:flex text-xs items-center min-w-60 gap-1.5 font-normal my-auto ">
          <LogoSvg fillColor="white" width="22" height="24" />
          <p>COPYRIGHT © Two Palm Productions. All Rights Reserved.</p>
        </div>
        <div className="self-stretch flex items-center gap-1.5 font-bold my-auto">
          <Image src={"/Brazil.svg"} alt="Lucia" width={26} height={20} />
          <div className="my-auto font-bold text-xl leading-3.5 md:text-xs">
            Based in Brazil
          </div>
        </div>
      </div>
    </footer>
  );
}
