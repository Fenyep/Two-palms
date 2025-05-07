"use client";

// import { useState, useEffect, useRef, useLayoutEffect } from "react";
// import {
//   motion,
//   useMotionValue,
//   animate,
//   useAnimationControls,
//   AnimationPlaybackControlsWithThen,
// } from "framer-motion";

// export default function InfiniteCarousel({
//   direction = "leftToRight",
//   fastDuration = 25,
//   slowDuration = 75,
//   hoverBehavior = "none",
//   children,
// }: {
//     direction?: "topToBottom" | "bottomToTop" | "leftToRight" | "rightToLeft";
//     fastDuration?: number;
//     slowDuration?: number;
//     hoverBehavior?: "pause" | "slow" | "none";
//     children: React.ReactNode;
//   }) {
//   // Refs for elements
//   const containerRef = useRef(null);
//   const contentRef = useRef(null);

//   // State for measurements
//   const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
//   const [contentSize, setContentSize] = useState({ width: 0, height: 0 });

//   // Animation controls
//   const controls = useAnimationControls();
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   // Animation state
//   const [isHovering, setIsHovering] = useState(false);
//   const [currentDuration, setCurrentDuration] = useState(fastDuration);
//   const animationInProgress = useRef(false);

//   // Determine if animation is horizontal
//   const isHorizontal = direction === "leftToRight" || direction === "rightToLeft";

//   // Measure elements
//   useLayoutEffect(() => {
//     if (!containerRef.current || !contentRef.current) return;

//     const measureContainer = () => {
//       const rect = containerRef.current?.getBoundingClientRect();
//       setContainerSize({ width: rect.width, height: rect.height });
//     };

//     const measureContent = () => {
//       // We need to measure just one set of children, not both duplicated sets
//       const firstChild = contentRef.current.firstChild;
//       if (firstChild) {
//         const rect = firstChild.getBoundingClientRect();
//         setContentSize({ width: rect.width, height: rect.height });
//       }
//     };

//     measureContainer();
//     measureContent();

//     const resizeObserver = new ResizeObserver(() => {
//       measureContainer();
//       measureContent();
//     });

//     resizeObserver.observe(containerRef.current);

//     return () => resizeObserver.disconnect();
//   }, []);

//   // Setup animation
//   useEffect(() => {
//     // Don't animate until we have sizes
//     if (
//       (isHorizontal && (!containerSize.width || !contentSize.width)) ||
//       (!isHorizontal && (!containerSize.height || !contentSize.height))
//     ) {
//       return;
//     }

//     // Calculate the animation distance and direction
//     const size = isHorizontal ? contentSize.width : contentSize.height;
//     if (size === 0) return; // Prevent division by zero

//     // Define animation based on direction
//     const defineAnimation = () => {
//       let start, end;

//       if (direction === "rightToLeft") {
//         start = 0;
//         end = -size;
//       } else if (direction === "leftToRight") {
//         start = -size;
//         end = 0;
//       } else if (direction === "bottomToTop") {
//         start = 0;
//         end = -size;
//       } else { // topToBottom
//         start = -size;
//         end = 0;
//       }

//       return { start, end };
//     };

//     const { start, end } = defineAnimation();

//     // Function to start animation
//     const startAnimation = async () => {
//       if (animationInProgress.current) return;

//       animationInProgress.current = true;

//       // Set initial position
//       if (isHorizontal) {
//         x.set(start);
//       } else {
//         y.set(start);
//       }

//       // Create transition config
//       const transition = {
//         duration: currentDuration,
//         ease: "linear",
//         repeat: Infinity,
//         repeatType: "loop",
//       };

//       // Start animation
//       try {
//         await controls.start({
//           x: isHorizontal ? end : undefined,
//           y: isHorizontal ? undefined : end,
//           transition,
//         });
//       } catch (e) {
//         // Animation might be interrupted
//       }

//       animationInProgress.current = false;
//     };

//     // Start animation if not paused
//     if (!(isHovering && hoverBehavior === "pause")) {
//       startAnimation();
//     }

//     // Cleanup function
//     return () => {
//       controls.stop();
//       animationInProgress.current = false;
//     };
//   }, [
//     direction,
//     isHorizontal,
//     containerSize.width,
//     containerSize.height,
//     contentSize.width,
//     contentSize.height,
//     currentDuration,
//     isHovering,
//     hoverBehavior,
//     controls,
//     x,
//     y
//   ]);

//   // Handle hover
//   const handleHoverStart = () => {
//     setIsHovering(true);

//     if (hoverBehavior === "pause") {
//       controls.stop();
//     } else if (hoverBehavior === "slow") {
//       setCurrentDuration(slowDuration);
//     }
//   };

//   const handleHoverEnd = () => {
//     setIsHovering(false);

//     if (hoverBehavior === "pause") {
//       // Resume animation without restart
//       const currentX = x.get();
//       const currentY = y.get();

//       const size = isHorizontal ? contentSize.width : contentSize.height;
//       const position = isHorizontal ? currentX : currentY;

//       // Calculate remaining duration based on position
//       const { start, end } = isHorizontal
//         ? (direction === "rightToLeft" ? { start: 0, end: -size } : { start: -size, end: 0 })
//         : (direction === "bottomToTop" ? { start: 0, end: -size } : { start: -size, end: 0 });

//       const totalDistance = Math.abs(end - start);
//       const remainingDistance = Math.abs(end - position);
//       const progress = 1 - (remainingDistance / totalDistance);
//       const remainingDuration = fastDuration * (1 - progress);

//       // Create transition for remaining animation
//       const transition = {
//         duration: remainingDuration <= 0 ? fastDuration : remainingDuration,
//         ease: "linear",
//         repeat: Infinity,
//         repeatType: "loop",
//       };

//       // Continue from current position
//       controls.start({
//         x: isHorizontal ? end : undefined,
//         y: isHorizontal ? undefined : end,
//         transition,
//       });
//     } else if (hoverBehavior === "slow") {
//       setCurrentDuration(fastDuration);
//     }
//   };

//   // Create container style
//   const containerStyle = {
//     width: "100%",
//     height: isHorizontal ? "auto" : "100%",
//     overflow: "hidden",
//     position: "relative",
//   };

//   // Content wrapper style
//   const contentWrapperStyle = {
//     display: "flex",
//     flexDirection: isHorizontal ? "row" : "column",
//     alignItems: "center",
//     gap: "1rem",
//     willChange: "transform",
//   };

//   return (
//     <div ref={containerRef} style={containerStyle}>
//       <motion.div
//         ref={contentRef}
//         style={contentWrapperStyle}
//         animate={controls}
//         initial={false}
//         onHoverStart={handleHoverStart}
//         onHoverEnd={handleHoverEnd}
//       >
//         <div className="flex-shrink-0">
//           {children}
//         </div>
//         <div className="flex-shrink-0">
//           {children}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  animate,
  AnimationPlaybackControlsWithThen,
} from "framer-motion";
import useMeasure from "react-use-measure";

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
