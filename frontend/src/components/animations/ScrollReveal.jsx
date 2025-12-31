import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ScrollReveal = ({ children, width = "100%", height = "auto", delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getVariants = () => {
    switch (direction) {
      case "left": return { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } };
      case "right": return { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } };
      case "down": return { hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1 } };
      case "scale": return { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } };
      case "up":
      default: return { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } };
    }
  };

  return (
    <div ref={ref} style={{ width, height, position: 'relative', overflow: 'hidden' }}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
        style={{ width: '100%', height: '100%' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
