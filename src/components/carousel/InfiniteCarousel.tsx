"use client";

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
      className="text-black break-inside-avoid"
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
