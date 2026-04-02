import React from 'react';
import { motion, useInView } from 'framer-motion';

const FadeIn = ({
  children,
  direction = 'up',
  delay = 0.4,
  duration = 0.6,
  className = '',
  once = true,
  margin = '-100px',
  ...props
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once,
    margin,
  });

  const directionVariants = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  const initial = {
    opacity: 0,
    ...directionVariants[direction],
  };

  const animate = isInView
    ? {
        opacity: 1,
        x: 0,
        y: 0,
      }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
