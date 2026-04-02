import React from 'react';
import { motion, useInView } from 'framer-motion';

const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  initialDelay = 0,
  duration = 0.5,
  yOffset = 30,
  className = '',
  once = true,
  margin = '-50px',
  variants = null,
  ...props
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once,
    margin,
  });

  const defaultVariants = {
    hidden: { opacity: 0, y: yOffset },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay: initialDelay + i * staggerDelay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const containerVariants = variants || defaultVariants;

  const items = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return child;
    
    return (
      <motion.div
        key={index}
        custom={index}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className={child.props.className}
        {...child.props}
      >
        {child.props.children}
      </motion.div>
    );
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      {...props}
    >
      {items}
    </motion.div>
  );
};

export default StaggerContainer;
