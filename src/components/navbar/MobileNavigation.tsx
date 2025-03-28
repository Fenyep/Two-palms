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
          className="fixed inset-0 z-50 flex flex-col px-6 pt-[43px] pb-[25px] h-screen bg-[#121111] text-white">
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
                <div
                  tabIndex={0}
                  role="button"
                  onClick={() => setIsOpened(!isOpened)}>
                  <span className="sr-only">close Menu</span>
                  <span className="text-white">Close</span>
                  {/* <XCircleIcon className="size-12 text-[#B9FD50]" /> */}
                </div>
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
