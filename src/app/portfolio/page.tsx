"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Portfolio() {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/portfolio/strava")}
      className="bg-white w-screen pt-24 grid grid-cols-2 px-6 md:px-0 md:grid-cols-3 gap-y-3.5 gap-x-4 md:gap-x-8 md:gap-y-8 lg:gap-x-11 lg:gap-y-11">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="group h-72 w-full bg-blue-300 relative">
          <div className="absolute size-full bg-black/80 top-0 left-0 hidden z-20 group-hover:flex items-center justify-center">
            <Link
              href="/portfolio/strava"
              className="flex mx-auto cursor-pointer justify-center items-center gap-2.5 text-black p-[10px_15px] bg-white">
              <span className="text-[14px] font-normal tracking-[-0.346px] uppercase">
                Strava
              </span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.88382 0.494987L6.69074 1.68806L12.319 7.31627H0.0942383V8.97621H12.319L6.69074 14.6044L7.88382 15.7975L14.9385 8.74278L15.5091 8.14624L14.9385 7.5497L7.88382 0.494987Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
