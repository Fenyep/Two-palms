"use client";

import useMeasure from "react-use-measure";
import Card from "../card/Card";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function InfiniteCarousel() {
  const images = [
    "/images/image_1.png",
    "/images/image_2.png",
    "/images/image_3.png",
    "/images/image_4.png",
    "/images/image_5.png",
    "/images/image_6.png",
    "/images/image_7.png",
    "/images/image_8.png",
  ];

  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);

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
        setDuration(SLOW_DURATION);
      }}
      onHoverEnd={() => {
        setMustFinish(true);
        setDuration(FAST_DURATION);
      }}
      style={{ x: xTranslation }}>
      {[...images, ...images].map((item, index) => (
        <Card image={item} key={index} />
      ))}
    </motion.div>
  );
}
