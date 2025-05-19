"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import clsx from "clsx";
import { cn } from "@/lib/utils";

type VerticalCarouselProps = {
  images: string[];
  duration?: number; // scroll duration in seconds
  pauseOnHover?: boolean;
  className?: string;
  direction?: "bottomToTop" | "topToBottom";
};

export default function VerticalCarousel({
  images,
  duration = 20,
  pauseOnHover = true,
  className = "",
  direction = "bottomToTop",
}: VerticalCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container && container.children.length === images.length) {
      const clone = container.innerHTML;
      container.innerHTML += clone; // duplicate once for seamless loop
    }
  }, [images.length]);

  return (
    <div className={cn("group overflow-hidden relative w-full", className)}>
      <div
        ref={containerRef}
        style={{
          animation: `${
            direction === "bottomToTop"
              ? "vertical-scroll-to-top"
              : "vertical-scroll-to-bottom"
          } ${duration}s linear infinite`,
        }}
        className={clsx(
          "flex flex-col will-change-transform",
          pauseOnHover
            ? "hover:[animation-play-state:paused] animation-play-state:paused"
            : ""
        )}>
        {images.map((src, i) => (
          <div key={i} className="w-full mb-4">
            <div className="relative w-full">
              <Image
                src={src}
                alt={`Image ${i}`}
                width={800}
                height={600}
                className="w-full h-auto"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
