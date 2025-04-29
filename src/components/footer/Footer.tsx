// import Image from "next/image";

import Link from "next/link";
import LogoSvg from "../LogoSvg";
import Image from "next/image";
import Reveal from "../animations/Reveal";
import { useMenuContext } from "@/hooks/guards/useMenuContext";
import { motion } from "framer-motion";
import {
  firstTextVariant,
  secondTextVariant,
} from "@/constants/animation.constants";

export default function Footer() {
  const { navlinks } = useMenuContext();
  return (
    <footer className="bg-black flex flex-col overflow-hidden items-stretch pt-[72px] md:pt-[55px] pb-[22px]">
      <Reveal className="max-w-full ml-[19px] md:ml-[59px]">
        <div className="flex flex-col md:gap-y-0 md:flex-row">
          <div className="text-2xl md:w-[64%] lg:w-[50%] text-white uppercase tracking-[-0.8px] mt-2.5 max-md:max-w-full max-md:mt-10">
            <div className="font-normal md:font-bold leading-none">
              Just drop an &quot;oiii&quot;
            </div>
            <div className="font-normal mt-[5px] max-md:max-w-full text-white/80 text-[18px] md:text-2xl">
              hello@twopalmsproductions.com
            </div>
          </div>

          <div className="text-white md:gap-x-8 lg:gap-x-[66px] mt-[130px] md:mt-0 space-y-[13px] md:space-y-0 md:inline-flex text-[22px] font-normal leading-5">
            <ul className="flex flex-col gap-y-[13px]">
              {navlinks.map((elmt, index) => (
                <motion.li
                  key={elmt.label + index}
                  initial="initial"
                  whileHover={"hover"}
                  animate="animate"
                  className="relative z-10 whitespace-nowrap cursor-pointer uppercase mix-blend-difference p-1">
                  <div className="overflow-hidden relative text-white">
                    <motion.a
                      variants={firstTextVariant}
                      href={elmt.href}
                      className="z-20 block pb-0.5">
                      {elmt.label}
                    </motion.a>
                    <motion.a
                      variants={secondTextVariant}
                      aria-hidden
                      href={elmt.href}
                      className="absolute top-0 left-0 z-20 underline underline-offset-2">
                      {elmt.label}
                    </motion.a>
                  </div>
                </motion.li>
              ))}
              {/* <Link
                href="#"
                className="hover:underline hover:underline-offset-2">
                Home
              </Link>
              <Link
                href="#"
                className="hover:underline hover:underline-offset-2">
                Portfolio
              </Link>
              <Link
                href="#"
                className="hover:underline hover:underline-offset-2">
                Location
              </Link>
              <Link
                href="#"
                className="hover:underline hover:underline-offset-2">
                About
              </Link> */}
            </ul>
            <div className="flex flex-col gap-y-[13px]">
              <Link
                href="#"
                className="hover:underline hover:underline-offset-2">
                Instagram
              </Link>
              <Link
                href="#"
                className="hover:underline hover:underline-offset-2">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="w-full flex justify-center md:justify-start max-md:px-5 p-[50px] py-5 border-[rgba(31,31,31,1)] border-t border-b mt-[117px]">
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
      </Reveal>
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

// const FooterNav = () => {
//   const { navlinks } = useMenuContext();

//   return (
//     <ul className="flex flex-wrap items-center gap-8">
//       {navlinks.map((elmt, index) => (
//         <motion.li
//           key={index + elmt.label}
//           className="relative overflow-hidden"
//           initial="initial"
//           animate="animate"
//           whileHover="hover"
//         >
//           {/* First Text */}
//           <motion.a variants={firstTextVariant} href={elmt.href} className="block">
//             {elmt.label}
//           </motion.a>

//           {/* Second Text */}
//           <motion.a
//             variants={secondTextVariant}
//             aria-hidden
//             href={elmt.href}
//             className="absolute top-0 left-0 text-[#B9FD50]"
//           >
//             {elmt.label}
//           </motion.a>
//         </motion.li>
//       ))}
//     </ul>
//   );
// };
