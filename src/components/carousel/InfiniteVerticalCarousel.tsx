"use client";

import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function InfiniteVerticalCarousel({
  direction = "topToBottom",
  images,
  fastDuration = 25,
  slowDuration = 75,
  withSlow = false,
  render,
}: {
  direction?: "topToBottom" | "bottomToTop";
  images: string[];
  fastDuration?: number;
  slowDuration?: number;
  withSlow?: boolean;
  render: (image: string, index: number) => React.JSX.Element;
}) {
  const [duration, setDuration] = useState(fastDuration);

  const [ref, { height }] = useMeasure();

  const yTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    let controls;
    const finalPosition = -height / 2 - 8;
    console.log(direction, "height", height, "finalPosition", finalPosition);

    if (mustFinish) {
      console.log(
        direction,
        duration,
        yTranslation.get(),
        finalPosition
        // duration * (1 - yTranslation.get() / -finalPosition)
      );

      controls = animate(
        yTranslation,
        direction === "bottomToTop"
          ? [yTranslation.get(), finalPosition]
          : [yTranslation.get(), -finalPosition],
        {
          ease: "linear",
          duration:
            direction === "bottomToTop"
              ? duration * (1 - yTranslation.get() / finalPosition)
              : duration * (1 - yTranslation.get() / -finalPosition / 2),
          onComplete: () => {
            setMustFinish(false);
            setReRender(!reRender);
          },
        }
      );
    } else {
      controls = animate(
        yTranslation,
        direction === "bottomToTop"
          ? [0, finalPosition]
          : [finalPosition * 1.5, 0],
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
        if (withSlow) {
          setMustFinish(true);
          setDuration(slowDuration);
        }
      }}
      onHoverEnd={() => {
        if (withSlow) {
          setMustFinish(true);
          setDuration(fastDuration);
        }
      }}
      style={{ y: yTranslation }}>
      {[...images, ...images].map((item, index) => {
        return render(item, index);
      })}
    </motion.div>
  );
}
