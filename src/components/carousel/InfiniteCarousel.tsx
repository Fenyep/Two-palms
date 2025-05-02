"use client";

import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";
// import ImageCard from "../card/ImageCard";

interface InfiniteCarouselProps {
  images: string[];
  direction?: "leftToRight" | "rightToLeft";
  fastDuration?: number;
  slowDuration?: number;
  render: (image: string, index: number) => React.JSX.Element;
}

export default function InfiniteCarousel({
  fastDuration = 25,
  slowDuration = 75,
  images,
  render,
}: InfiniteCarouselProps) {
  const [duration, setDuration] = useState(fastDuration);

  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    let controls;
    const finalPosition = -width / 2 - 16;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setReRender(!reRender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        repeat: Infinity,
        repeatType: "loop",
        duration: duration,
        ease: "linear",
        repeatDelay: 0,
      });
    }

    return () => {
      controls.stop();
    };
  }, [xTranslation, width, duration, reRender, mustFinish]);

  return (
    <motion.div
      className="text-black flex gap-4"
      ref={ref}
      onHoverStart={() => {
        setMustFinish(true);
        setDuration(slowDuration);
      }}
      onHoverEnd={() => {
        setMustFinish(true);
        setDuration(fastDuration);
      }}
      style={{ x: xTranslation }}>
      {[...images, ...images].map((item, index) => {
        return render(item, index);
      })}
    </motion.div>
  );
}
