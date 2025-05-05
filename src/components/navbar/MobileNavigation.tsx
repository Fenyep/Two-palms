"use client";

import { useMenuContext } from "@/hooks/guards/useMenuContext";
import LogoSvg from "../LogoSvg";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { menuVariants } from "@/constants/animation.constants";

export default function MobileNavigation() {
  const { isOpened, setIsOpened, navlinks } = useMenuContext();
  return (
    <div className={`relative`}>
      {/* Animated Menu */}
      <AnimatePresence>
        {isOpened && (
          <motion.div
            key="menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed inset-0 z-50 flex flex-col px-6 pt-[43px] pb-[25px] h-dvh bg-[#121111] text-white">
            {/* Navigation Links */}

            <div className="flex-1">
              <div className="flex items-center justify-between gap-4 mb-[35px]">
                <div className="w-fit gap-x-[19px] flex items-center text-white font-normal">
                  <div className="w-[62px] h-[67]">
                    <LogoSvg fillColor="white" width="68" height="72" />
                  </div>
                  <div>
                    <p className="text-[28px] w-[194px] leading-[33px] tracking-[-0.287px]">
                      Two Palms Productions
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button type="button" onClick={() => setIsOpened(!isOpened)}>
                    <span className="sr-only">close Menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      className="bi bi-x"
                      viewBox="0 0 16 16">
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </button>
                </div>
              </div>

              <p className="font-bold text-xl leading-[23px] mb-[84px]">
                hello@twopalmsproductions.com
              </p>

              <nav className="space-y-[42px]">
                <ul className="space-y-[22px] text-white">
                  {navlinks.map((link, index) => (
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.4,
                            delay: index * 0.2 + 0.5,
                          },
                        },
                      }}
                      key={link.href + index}
                      onClick={() => setIsOpened(false)} // Close menu on click
                    >
                      <Link
                        href={link.href}
                        className="text-white text-[32px] leading-[26px]">
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="">
                  <Link
                    href={"/contact"}
                    onClick={() => setIsOpened(false)} // Close menu on click
                    className="underline underline-offset-4 text-white text-[32px] leading-[26px]">
                    Contact
                  </Link>
                </div>
              </nav>
            </div>

            <div className="self-stretch flex items-center gap-1.5 font-bold my-auto">
              <Image src={"/Brazil.svg"} alt="Lucia" width={26} height={20} />
              <div className="my-auto font-bold text-xl leading-3.5 md:text-xs">
                Based in Brazil
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
