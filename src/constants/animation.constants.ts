const backgroundVariant = {
  initial: {
    backgroundColor: "#B9FD50",
  },
  hover: {
    backgroundColor: "#111204",
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    backgroundColor: "#B9FD50",
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

const firstTextVariant = {
  initial: {
    y: 0,
  },
  hover: {
    y: "-100%",
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    y: 0,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

const secondTextVariant = {
  initial: {
    y: "100%",
  },
  hover: {
    y: 0,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    y: "100%",
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
      type: "spring",
      stiffness: 200,
      damping: "10",
    },
  },
};

const menuVariants = {
  hidden: {
    x: "100%",
    // borderTopLeftRadius: "50%",
    // borderBottomLeftRadius: "50%",
  }, // Off-screen to the right
  visible: {
    x: 0,
    // borderTopLeftRadius: 0,
    // borderBottomLeftRadius: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
  exit: {
    x: "100%",
    // borderTopLeftRadius: "50%",
    // borderBottomLeftRadius: "50%",
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

export { firstTextVariant, secondTextVariant, backgroundVariant, menuVariants };
