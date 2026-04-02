import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        type: 'tween',
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.4,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
