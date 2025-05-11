"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { ComponentProps } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { animatePageOut } from "@/lib/animations";
import { useRouter } from "next/navigation";

interface ImageCardProps {
  image: string;
  className?: ComponentProps<"div">["className"];
  withOverlay?: boolean;
}
const ImageCard: React.FC<ImageCardProps> = ({
  image,
  className,
  withOverlay,
}) => {
  const [showOverlay, setShowOverlay] = React.useState(false);
  const router = useRouter();
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden w-full flex justify-center items-start break-inside-avoid",
        className
      )}
      onHoverStart={() => {
        if (withOverlay) {
          setShowOverlay(true);
        }
      }}
      onHoverEnd={() => {
        if (withOverlay) {
          setShowOverlay(false);
        }
      }}>
      <AnimatePresence>
        {showOverlay && withOverlay && (
          <motion.div
            className="absolute inset-0 z-10 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="absolute size-full opacity-50 bg-black pointer-events-none" />
            <motion.button
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              onClick={() => router.push("/portfolio/strava")}
              className="flex mx-auto cursor-pointer z-10 justify-center items-center gap-2.5 text-black p-[10px_15px] bg-white">
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
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      <Image
        src={image}
        alt={image}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </motion.div>
  );
};

export default ImageCard;
