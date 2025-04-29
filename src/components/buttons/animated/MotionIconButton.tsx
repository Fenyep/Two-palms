"use client";

import {
  // backgroundVariant,
  firstTextVariant,
  secondTextVariant,
} from "@/constants/animation.constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

const backgroundVariant = {
  initial: {
    backgroundColor: "#000000",
  },
  hover: {
    backgroundColor: "#000000EE",
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    backgroundColor: "#000000",
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.JSX.Element;
  iconX?: number;
}

const MotionIconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, icon, className, iconX = -10 }, ref) => {
    const iconVariant = {
      initial: {
        x: "100%",
      },
      hover: {
        x: iconX,
        transition: {
          duration: 1.125,
          ease: [0.19, 1, 0.22, 1],
        },
      },
      animate: {
        x: "100%",
        transition: {
          duration: 1.125,
          ease: [0.19, 1, 0.22, 1],
        },
      },
    };

    return (
      <motion.button
        initial="initial"
        whileHover={"hover"}
        animate="animate"
        variants={backgroundVariant}
        ref={ref}
        className={cn("", className)}>
        <div className="overflow-hidden relative">
          <motion.p
            variants={firstTextVariant}
            className="text-white font-semibold">
            {children}
          </motion.p>
          <motion.p
            variants={secondTextVariant}
            aria-hidden
            className="absolute top-0 -left-0 text-center text-white font-semibold w-full">
            {children}
          </motion.p>
        </div>
        <motion.div
          variants={iconVariant}
          className="absolute w-fit h-full top-0 flex items-center right-0 text-red-300 font-bold"
          aria-hidden>
          {icon}
        </motion.div>
      </motion.button>
    );
  }
);

MotionIconButton.displayName = "MotionIconButton";

export default MotionIconButton;
