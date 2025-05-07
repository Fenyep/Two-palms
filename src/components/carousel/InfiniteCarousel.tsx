"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  animate,
  AnimationPlaybackControlsWithThen,
} from "framer-motion";
import useMeasure from "react-use-measure";

// import useMeasure from "react-use-measure";
// import {
//   animate,
//   useMotionValue,
//   motion,
//   AnimationPlaybackControlsWithThen,
// } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

export default function InfiniteCarousel({
  direction = "leftToRight",
  fastDuration = 25,
  slowDuration = 75,
  hoverBehavior = "none",
  children,
}: {
  direction?: "topToBottom" | "bottomToTop" | "leftToRight" | "rightToLeft";
  fastDuration?: number;
  slowDuration?: number;
  hoverBehavior?: "pause" | "slow" | "none";
  children: React.ReactNode;
}) {
  const [ref, { width, height }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const yTranslation = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const [reRender, setReRender] = useState(false);

  // Keep track of animation progress
  const animationControls = useRef<AnimationPlaybackControlsWithThen>(null);
  const finalPositionRef = useRef(0);
  const currentDurationRef = useRef(fastDuration);

  // Determine if animation is horizontal or vertical
  const isHorizontal =
    direction === "leftToRight" || direction === "rightToLeft";

  // Set initial duration ref
  useEffect(() => {
    currentDurationRef.current = fastDuration;
  }, [fastDuration]);

  useEffect(() => {
    // Don't animate if we don't have dimensions yet
    if ((!height && !isHorizontal) || (!width && isHorizontal)) return;

    // Calculate final position based on direction
    const finalPosition = isHorizontal ? -width / 2 : -height / 2;
    finalPositionRef.current = finalPosition;

    // Only animate if not currently hovering with pause behavior
    if (!(isHovering && hoverBehavior === "pause")) {
      // Always stop any existing animation before starting a new one
      if (animationControls.current) {
        animationControls.current.stop();
      }

      const motionValue = isHorizontal ? xTranslation : yTranslation;
      let startPosition = motionValue.get();
      let endPosition;

      // Handle direction properly
      if (direction === "bottomToTop" || direction === "rightToLeft") {
        // We animate from 0 to -size/2 (moving upward/leftward)
        endPosition = finalPosition;

        // If we're at the end or beginning of a cycle, reset properly
        if (startPosition === finalPosition || startPosition === 0) {
          startPosition = 0;
        }
      } else {
        // For topToBottom/leftToRight, we animate from -size/2 to 0 (moving downward/rightward)
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
        motionValue,
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
  }, [
    xTranslation,
    yTranslation,
    width,
    height,
    direction,
    reRender,
    isHovering,
    hoverBehavior,
    isHorizontal,
  ]);

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
        break;
      case "none":
      default:
        // Do nothing
        break;
    }
  };

  return (
    <motion.div
      className="text-black"
      ref={ref}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      style={{
        x: isHorizontal ? xTranslation : 0,
        y: isHorizontal ? 0 : yTranslation,
        flexDirection: isHorizontal ? "row" : "column",
        display: "flex",
        alignItems: isHorizontal ? "center" : "flex-start",
        gap: "1rem",
      }}>
      {children}
      {children}
    </motion.div>
  );
}

// interface InfiniteCarouselProps {
//   direction?: "leftToRight" | "rightToLeft";
//   speed?: number; // Speed in pixels per second
//   slowFactor?: number; // Factor to slow down by when hovering
//   hoverBehavior?: "pause" | "slow" | "none";
//   children: React.ReactNode;
// }

// export default function InfiniteCarousel({
//   direction = "leftToRight",
//   speed = 100, // Default: 100px per second
//   slowFactor = 0.3, // Default: 30% of normal speed when slow
//   hoverBehavior = "none",
//   children,
// }: InfiniteCarouselProps) {
//   const [ref, { width }] = useMeasure();
//   const xTranslation = useMotionValue(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const [reRender, setReRender] = useState(false);

//   // Keep track of animation progress
//   const animationControls = useRef<AnimationPlaybackControlsWithThen>(null);
//   const finalPositionRef = useRef(0);
//   const currentSpeedRef = useRef(speed);

//   // Set initial speed ref
//   useEffect(() => {
//     currentSpeedRef.current = speed;
//   }, [speed]);

//   useEffect(() => {
//     if (!width) return;

//     // Calculate final position - this is the full width of one set of elements
//     const finalPosition = -width / 2;
//     finalPositionRef.current = finalPosition;

//     // Only animate if not currently hovering with pause behavior
//     if (!(isHovering && hoverBehavior === "pause")) {
//       // Always stop any existing animation before starting a new one
//       if (animationControls.current) {
//         animationControls.current.stop();
//       }

//       let startPosition = xTranslation.get();
//       let endPosition;

//       // Handle direction properly
//       if (direction === "rightToLeft") {
//         // For rightToLeft, we animate from 0 to -width/2 (moving leftward)
//         endPosition = finalPosition;

//         // If we're at the end or beginning of a cycle, reset properly
//         if (startPosition === finalPosition || startPosition === 0) {
//           startPosition = 0;
//         }
//       } else {
//         // For leftToRight, we animate from -width/2 to 0 (moving rightward)
//         endPosition = 0;

//         // If we're at the end or beginning of a cycle, reset properly
//         if (startPosition === 0 || startPosition === finalPosition) {
//           startPosition = finalPosition;
//         }
//       }

//       // Calculate duration based on distance and speed
//       const remainingDistance = Math.abs(endPosition - startPosition);
//       const durationInSeconds = remainingDistance / currentSpeedRef.current;

//       // Convert to milliseconds for the animation API
//       const durationMs = durationInSeconds * 1000;

//       // Start the animation with proper values
//       animationControls.current = animate(
//         xTranslation,
//         [startPosition, endPosition],
//         {
//           repeat: Infinity,
//           repeatType: "loop",
//           duration: durationMs,
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
//   }, [xTranslation, width, direction, reRender, isHovering, hoverBehavior]);

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
//         currentSpeedRef.current = speed * slowFactor;
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
//         currentSpeedRef.current = speed;
//         break;
//       case "none":
//       default:
//         // Do nothing
//         break;
//     }
//   };

//   return (
//     <div className="overflow-hidden">
//       <motion.div
//         className="text-black flex gap-4"
//         ref={ref}
//         onHoverStart={handleHoverStart}
//         onHoverEnd={handleHoverEnd}
//         style={{ x: xTranslation }}>
//         {/* Duplicate children to create infinite effect */}
//         {children}
//         {children}
//       </motion.div>
//     </div>
//   );
// }

// interface InfiniteCarouselProps {
//   direction?: "leftToRight" | "rightToLeft";
//   fastDuration?: number;
//   slowDuration?: number;
//   hoverBehavior?: "pause" | "slow" | "none";
//   children: React.ReactNode;
// }

// export default function InfiniteCarousel({
//   direction = "leftToRight",
//   fastDuration = 25,
//   slowDuration = 75,
//   hoverBehavior = "none",
//   children,
// }: InfiniteCarouselProps) {
//   // const [duration, setDuration] = useState(fastDuration);
//   const [ref, { width }] = useMeasure();
//   const xTranslation = useMotionValue(0);
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
//     if (!width) return;

//     // Calculate final position - this is the full width of one set of elements
//     const finalPosition = -width / 2;
//     finalPositionRef.current = finalPosition;

//     // Only animate if not currently hovering with pause behavior
//     if (!(isHovering && hoverBehavior === "pause")) {
//       // Always stop any existing animation before starting a new one
//       if (animationControls.current) {
//         animationControls.current.stop();
//       }

//       let startPosition = xTranslation.get();
//       let endPosition;

//       // Handle direction properly
//       if (direction === "rightToLeft") {
//         // For rightToLeft, we animate from 0 to -width/2 (moving leftward)
//         endPosition = finalPosition;

//         // If we're at the end or beginning of a cycle, reset properly
//         if (startPosition === finalPosition || startPosition === 0) {
//           startPosition = 0;
//         }
//       } else {
//         // For leftToRight, we animate from -width/2 to 0 (moving rightward)
//         endPosition = 0;

//         // If we're at the end or beginning of a cycle, reset properly
//         if (startPosition === 0 || startPosition === finalPosition) {
//           startPosition = finalPosition;
//         }
//       }

//       // Calculate proper remaining duration based on how far we need to travel
//       let remainingDuration;
//       const totalDistance = Math.abs(finalPosition);
//       const remainingDistance = Math.abs(endPosition - startPosition);
//       const progressRatio = remainingDistance / totalDistance;

//       // Apply the progress ratio to get correct duration
//       remainingDuration = currentDurationRef.current * progressRatio;

//       // Safety check for valid duration
//       if (isNaN(remainingDuration) || remainingDuration <= 0) {
//         remainingDuration = currentDurationRef.current;
//       }

//       // Start the animation with proper values
//       animationControls.current = animate(
//         xTranslation,
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
//   }, [xTranslation, width, direction, reRender, isHovering, hoverBehavior]);

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
//       className="text-black flex gap-4 overflow-hidden"
//       ref={ref}
//       onHoverStart={handleHoverStart}
//       onHoverEnd={handleHoverEnd}
//       style={{ x: xTranslation }}>
//       {/* Duplicate children to create infinite effect */}
//       {children}
//       {children}
//     </motion.div>
//   );
// }
