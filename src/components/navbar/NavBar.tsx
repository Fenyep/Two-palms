"use client";
import LogoSvg from "../LogoSvg";
import { useMenuContext } from "@/hooks/guards/useMenuContext";
// import {
//   firstTextVariant,
//   secondTextVariant,
// } from "@/constants/animation.constants";
// import { motion } from "framer-motion";
import TransitionLink from "./TransitionLink";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { setIsOpened, navlinks } = useMenuContext();
  const pathname = usePathname();

  return (
    <header className="flex w-full px-7 py-4 fixed top-0 z-30 bg-white">
      <div className="w-1/2 sm:w-1/3 lg:w-1/2">
        <TransitionLink href="/" className="flex items-center gap-2.5 w-fit">
          <div className="w-[38px] h-[41px]">
            <LogoSvg fillColor="black" />
          </div>
          <p className="text-black text-left w-[110px] sm:text-[16px] sm:font-normal leading-[18.284px] tracking-[-0.16px] font-bold">
            Two Palms Productions
          </p>
        </TransitionLink>
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
              fill="#000"
            />
          </svg>
        </button>
        <nav className="flex-1 hidden items-center justify-between sm:flex sm:gap-4 z-30 bg-transparent">
          <ul className="space-x-3 md:space-x-6 md:ml-16 text-black flex">
            {navlinks.map((elmt, index) => (
              <div
                key={elmt.label + index}
                className="group relative inline-block text-black">
                <li
                  // initial="initial"
                  // whileHover={"hover"}
                  // animate="animate"
                  className="relative z-10 whitespace-nowrap cursor-pointer p-1">
                  <div className="overflow-hidden relative">
                    <TransitionLink href={elmt.href}>
                      <span
                        // variants={firstTextVariant}
                        // href={elmt.href}
                        className={`z-20 block ${
                          (elmt.href === "/" && pathname === elmt.href) ||
                          (elmt.href !== "/" && pathname.includes(elmt.href))
                            ? "underline underline-offset-4"
                            : "hover:underline hover:underline-offset-4"
                        }`}>
                        {elmt.label}
                      </span>
                      {/* <motion.span
                        variants={secondTextVariant}
                        aria-hidden
                        // href={elmt.href}
                        className="absolute top-0 left-0 z-20">
                        {elmt.label}
                      </motion.span> */}
                    </TransitionLink>
                  </div>
                </li>

                {/* Static underline holder */}
                {/* <div className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-white group-hover:block hidden" /> */}
              </div>
            ))}
          </ul>
          <div className="group relative inline-block text-black font-bold">
            <div
              // initial="initial"
              // whileHover={"hover"}
              // animate="animate"
              className="relative text-black font-bold">
              <div className="overflow-hidden relative">
                <TransitionLink href={"/contact"}>
                  <span
                    // variants={firstTextVariant}
                    className={`z-20 block ${
                      pathname === "/contact"
                        ? "underline underline-offset-4"
                        : "hover:underline hover:underline-offset-4"
                    }`}>
                    Contact
                  </span>
                  {/* <span
                    variants={secondTextVariant}
                    aria-hidden
                    className="absolute top-0 left-0 z-20">
                    Contact
                  </span> */}
                </TransitionLink>
              </div>
            </div>

            {/* Static underline holder */}
            {/* <div className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-white group-hover:block hidden" /> */}
          </div>
        </nav>
      </div>
    </header>
  );
}

//   variants={backgroundVariant}
// onMouseEnter={() => handleHoverButton(index)}
// onMouseLeave={() => {
//   handleHoverButton(null);
// }}

{
  /* <AnimatePresence>
      {elementFocused === index && (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="-z-10 absolute top-0 right-0 bottom-0 left-0 rounded-full bg-[#B9FD50] dark:bg-neutral-800"
          exit={{ opacity: 0, scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.95 }}
          layout={true}
          layoutId="focused-element"
          transition={{ duration: 0.2 }}
        />
      )}
    </AnimatePresence> */
}
