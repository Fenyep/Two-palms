"use client";

import useMeasure from "react-use-measure";
// import Card from "../card/Card";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";
// import ImageCard from "../card/ImageCard";

export default function InfiniteVerticalCarousel({
  direction = "topToBottom",
  images,
  fastDuration = 25,
  slowDuration = 75,
  render,
}: {
  direction?: "topToBottom" | "bottomToTop";
  images: string[];
  fastDuration?: number;
  slowDuration?: number;
  render: (image: string, index: number) => React.JSX.Element;
}) {
  const [duration, setDuration] = useState(fastDuration);

  const [ref, { height }] = useMeasure();

  const yTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    let controls;
    const finalPosition =
      direction === "bottomToTop" ? -height / 2 - 16 : -height / 2 - 16;

    if (mustFinish) {
      controls = animate(
        yTranslation,
        direction === "bottomToTop"
          ? [yTranslation.get(), finalPosition]
          : [finalPosition, yTranslation.get()],
        // [yTranslation.get(), finalPosition],
        {
          ease: "linear",
          duration: duration * (1 - yTranslation.get() / finalPosition),
          onComplete: () => {
            setMustFinish(false);
            setReRender(!reRender);
          },
        }
      );
    } else {
      controls = animate(
        yTranslation,
        direction === "bottomToTop" ? [0, finalPosition] : [finalPosition, 0],
        // [0, finalPosition],
        {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
          repeatDelay: 0,
        }
      );
    }

    return () => {
      controls.stop();
    };
  }, [yTranslation, height, direction, duration, reRender, mustFinish]);

  return (
    <motion.div
      className="text-black flex flex-col gap-4"
      ref={ref}
      onHoverStart={() => {
        setMustFinish(true);
        setDuration(slowDuration);
      }}
      onHoverEnd={() => {
        setMustFinish(true);
        setDuration(fastDuration);
      }}
      style={{ y: yTranslation }}>
      {[...images, ...images].map((item, index) => {
        return render(item, index);
      })}
    </motion.div>
  );
}
