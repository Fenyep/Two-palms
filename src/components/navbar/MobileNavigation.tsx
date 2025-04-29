"use client";

import { useMenuContext } from "@/hooks/guards/useMenuContext";
import LogoSvg from "../LogoSvg";
import Link from "next/link";
import Image from "next/image";

const navLinks: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/location", label: "Location" },
  { href: "/about", label: "About" },
];

export default function MobileNavigation() {
  const { isOpened, setIsOpened } = useMenuContext();
  return (
    <div className={`relative`}>
      {/* Animated Menu */}
      {isOpened && (
        <div
          key="menu"
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
                {navLinks.map((link, index) => (
                  <li
                    key={link.href + index}
                    onClick={() => setIsOpened(false)} // Close menu on click
                  >
                    <Link
                      href={link.href}
                      className="text-white text-[32px] leading-[26px]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="">
                <Link
                  href={"/contact"}
                  onClick={() => setIsOpened(false)} // Close menu on click
                  className="underline text-white text-[32px] leading-[26px]">
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
        </div>
      )}
    </div>
  );
}

// import { useMenuContext } from "@/hooks/guards/useMenuContext";
// import { motion, AnimatePresence } from "framer-motion";
// import { XCircleIcon } from "lucide-react";
// import { firstTextVariant, secondTextVariant } from "../animations/constants";

// // Menu animations
// const menuVariants = {
//   hidden: {
//     opacity: 0,
//     x: "100%",
//     borderTopLeftRadius: "50%",
//     borderBottomLeftRadius: "50%",
//   }, // Off-screen to the right
//   visible: {
//     opacity: 1,
//     x: 0,
//     borderTopLeftRadius: 0,
//     borderBottomLeftRadius: 0,
//     transition: { duration: 0.7, ease: "easeInOut" },
//   },
//   exit: {
//     opacity: 0,
//     x: "100%",
//     borderTopLeftRadius: "50%",
//     borderBottomLeftRadius: "50%",
//     transition: { duration: 0.7, ease: "easeInOut" },
//   },
// };

// const MobileNavigation = () => {
//   const { isOpened, setIsOpened, navlinks } = useMenuContext();
//   return (
//     <div className={`relative`}>
//       {/* Animated Menu */}
//       <AnimatePresence>
//         {isOpened && (
//           <motion.div
//             key="menu"
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={menuVariants}
//             transition={{ type: "spring", stiffness: 100, damping: 15 }}
//             className="fixed inset-0 z-50 flex flex-col gap-24 px-6 sm:px-12 py-8 bg-[#111204] text-white"
//           >
//             {/* Navigation Links */}

//             <div className="flex justify-end">
//               <div tabIndex={0} role="button" onClick={() => setIsOpened(!isOpened)}>
//                 <span className="sr-only">close Menu</span>
//                 <XCircleIcon className="size-12 text-[#B9FD50]" />
//               </div>
//             </div>
//             <nav className="flex-1 place-content-center">
//               <ul className="space-y-6">
//                 {navlinks.map((link, index) => (
//                   <motion.li
//                     key={link.href + index}
//                     variants={{
//                       hidden: { opacity: 0, y: 50 },
//                       visible: {
//                         opacity: 1,
//                         y: 0,
//                         transition: { duration: 0.4, delay: index * 0.3 },
//                       },
//                     }}
//                     onClick={() => setIsOpened(false)} // Close menu on click
//                     whileHover={"hover"}
//                     className="font-plusJakartaSans font-bold"
//                   >
//                     <div className="relative overflow-hidden text-5xl sm:text-6xl md:text-8xl">
//                       <motion.a
//                         href={link.href}
//                         variants={firstTextVariant}
//                         className="text-white block"
//                       >
//                         {link.label}
//                       </motion.a>
//                       <motion.a
//                         href={link.href}
//                         variants={secondTextVariant}
//                         aria-hidden
//                         className="absolute bottom-0 -left-0 text-[#B9FD50]"
//                       >
//                         {link.label}
//                       </motion.a>
//                     </div>
//                   </motion.li>
//                 ))}
//               </ul>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MobileNavigation;
