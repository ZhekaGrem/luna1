export const slideUp = {
  hidden: { y: 300, opacity: 1 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7 },
  },
};
export const slideRCenter = {
  hidden: { x: 400, opacity: 1 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7 },
  },
};

export const emergence = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
    },
  },
};

export const slideInLeft = {
  hidden: { x: -200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};
export const slideInRight = {
  hidden: { x: +200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};
