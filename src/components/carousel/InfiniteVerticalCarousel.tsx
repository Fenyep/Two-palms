"use client";

import useMeasure from "react-use-measure";
import {
  animate,
  useMotionValue,
  motion,
  AnimationPlaybackControlsWithThen,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function InfiniteVerticalCarousel({
  direction = "topToBottom",
  fastDuration = 25,
  slowDuration = 75,
  hoverBehavior = "none",
  children,
}: {
  direction?: "topToBottom" | "bottomToTop";
  fastDuration?: number;
  slowDuration?: number;
  hoverBehavior?: "pause" | "slow" | "none";
  children: React.ReactNode;
}) {
  // const [duration, setDuration] = useState(fastDuration);
  const [ref, { height }] = useMeasure();
  const yTranslation = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const [reRender, setReRender] = useState(false);

  // Keep track of animation progress
  const animationControls = useRef<AnimationPlaybackControlsWithThen>(null);
  const finalPositionRef = useRef(0);
  const currentDurationRef = useRef(fastDuration);

  // Set initial duration ref
  useEffect(() => {
    currentDurationRef.current = fastDuration;
  }, [fastDuration]);

  useEffect(() => {
    if (!height) return;

    // Calculate final position - this is the full height of one set of images
    const finalPosition = -height / 2;
    finalPositionRef.current = finalPosition;

    // Only animate if not currently hovering with pause behavior
    if (!(isHovering && hoverBehavior === "pause")) {
      // Always stop any existing animation before starting a new one
      if (animationControls.current) {
        animationControls.current.stop();
      }

      let startPosition = yTranslation.get();
      let endPosition;

      // Handle direction properly
      if (direction === "bottomToTop") {
        // For bottomToTop, we animate from 0 to -height/2 (moving upward)
        endPosition = finalPosition;

        // If we're at the end or beginning of a cycle, reset properly
        if (startPosition === finalPosition || startPosition === 0) {
          startPosition = 0;
        }
      } else {
        // For topToBottom, we animate from -height/2 to 0 (moving downward)
        endPosition = 0;

        // If we're at the end or beginning of a cycle, reset properly
        if (startPosition === 0 || startPosition === finalPosition) {
          startPosition = finalPosition;
        }
      }

      // Calculate proper remaining duration based on how far we need to travel
      let remainingDuration;
      const totalDistance = Math.abs(finalPosition);
      const remainingDistance = Math.abs(endPosition - startPosition);
      const progressRatio = remainingDistance / totalDistance;

      // Apply the progress ratio to get correct duration
      remainingDuration = currentDurationRef.current * progressRatio;

      // Safety check for valid duration
      if (isNaN(remainingDuration) || remainingDuration <= 0) {
        remainingDuration = currentDurationRef.current;
      }

      // Start the animation with proper values
      animationControls.current = animate(
        yTranslation,
        [startPosition, endPosition],
        {
          repeat: Infinity,
          repeatType: "loop",
          duration: remainingDuration,
          ease: "linear",
          repeatDelay: 0,
          onComplete: () => {
            setReRender(!reRender);
          },
        }
      );
    }

    return () => {
      if (animationControls.current) {
        animationControls.current.stop();
      }
    };
  }, [yTranslation, height, direction, reRender, isHovering, hoverBehavior]);

  const handleHoverStart = () => {
    setIsHovering(true);

    switch (hoverBehavior) {
      case "pause":
        // Stop animation on hover
        if (animationControls.current) {
          animationControls.current.stop();
        }
        break;
      case "slow":
        // Slow down the animation
        if (animationControls.current) {
          animationControls.current.stop();
        }
        currentDurationRef.current = slowDuration;
        // setDuration(slowDuration);
        break;
      case "none":
      default:
        // Do nothing
        break;
    }
  };

  const handleHoverEnd = () => {
    setIsHovering(false);

    switch (hoverBehavior) {
      case "pause":
        // Animation will resume from current position due to useEffect
        break;
      case "slow":
        // Speed up the animation again
        if (animationControls.current) {
          animationControls.current.stop();
        }
        currentDurationRef.current = fastDuration;
        // setDuration(fastDuration);
        break;
      case "none":
      default:
        // Do nothing
        break;
    }
  };

  return (
    <motion.div
      className="text-black flex flex-col gap-4 overflow-hidden"
      ref={ref}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      style={{ y: yTranslation }}>
      {children}
    </motion.div>
  );
}

// export default function InfiniteVerticalCarousel({
//   direction = "topToBottom",
//   images,
//   fastDuration = 25,
//   slowDuration = 75,
//   hoverBehavior = "none",
//   render,
// }: {
//   direction?: "topToBottom" | "bottomToTop";
//   images: string[];
//   fastDuration?: number;
//   slowDuration?: number;
//   hoverBehavior?: "pause" | "slow" | "none";
//   render: (image: string, index: number) => React.JSX.Element;
// }) {
//   // const [duration, setDuration] = useState(fastDuration);
//   const [ref, { height }] = useMeasure();
//   const yTranslation = useMotionValue(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const [reRender, setReRender] = useState(false);

//   // Keep track of animation progress
//   const animationControls = useRef<AnimationPlaybackControlsWithThen>(null);
//   const finalPositionRef = useRef(0);
//   const currentDurationRef = useRef(fastDuration);

//   // Set initial duration ref
//   useEffect(() => {
//     currentDurationRef.current = fastDuration;
//   }, [fastDuration]);

//   useEffect(() => {
//     if (!height) return;

//     const finalPosition = -height / 2 - 8;
//     finalPositionRef.current = finalPosition;

//     // Only animate if not currently hovering with pause behavior
//     if (!(isHovering && hoverBehavior === "pause")) {
//       let startPosition = yTranslation.get();

//       // If we're starting a new animation cycle
//       if (startPosition === 0 || startPosition === finalPosition) {
//         startPosition = direction === "bottomToTop" ? 0 : finalPosition;
//       }

//       const endPosition = direction === "bottomToTop" ? finalPosition : 0;

//       // Calculate remaining duration based on current position
//       let remainingDuration;
//       if (direction === "bottomToTop") {
//         const progress = Math.abs(startPosition / finalPosition);
//         remainingDuration = currentDurationRef.current * (1 - progress);
//       } else {
//         const progress = Math.abs(
//           (startPosition - finalPosition) / finalPosition
//         );
//         remainingDuration = currentDurationRef.current * (1 - progress);
//       }

//       // Ensure we have a valid duration
//       if (isNaN(remainingDuration) || remainingDuration <= 0) {
//         remainingDuration = currentDurationRef.current;
//       }

//       // Start animation
//       animationControls.current = animate(
//         yTranslation,
//         [startPosition, endPosition],
//         {
//           repeat: Infinity,
//           repeatType: "loop",
//           duration: remainingDuration,
//           ease: "linear",
//           repeatDelay: 0,
//           onComplete: () => {
//             setReRender(!reRender);
//           },
//         }
//       );
//     }

//     return () => {
//       if (animationControls.current) {
//         animationControls.current.stop();
//       }
//     };
//   }, [yTranslation, height, direction, reRender, isHovering, hoverBehavior]);

//   const handleHoverStart = () => {
//     setIsHovering(true);

//     switch (hoverBehavior) {
//       case "pause":
//         // Stop animation on hover
//         if (animationControls.current) {
//           animationControls.current.stop();
//         }
//         break;
//       case "slow":
//         // Slow down the animation
//         if (animationControls.current) {
//           animationControls.current.stop();
//         }
//         currentDurationRef.current = slowDuration;
//         // setDuration(slowDuration);
//         break;
//       case "none":
//       default:
//         // Do nothing
//         break;
//     }
//   };

//   const handleHoverEnd = () => {
//     setIsHovering(false);

//     switch (hoverBehavior) {
//       case "pause":
//         // Animation will resume from current position due to useEffect
//         break;
//       case "slow":
//         // Speed up the animation again
//         if (animationControls.current) {
//           animationControls.current.stop();
//         }
//         currentDurationRef.current = fastDuration;
//         // setDuration(fastDuration);
//         break;
//       case "none":
//       default:
//         // Do nothing
//         break;
//     }
//   };

//   return (
//     <motion.div
//       className="text-black flex flex-col gap-4"
//       ref={ref}
//       onHoverStart={handleHoverStart}
//       onHoverEnd={handleHoverEnd}
//       style={{ y: yTranslation }}>
//       {[...images, ...images].map((item, index) => {
//         return render(item, index);
//       })}
//     </motion.div>
//   );
// }
