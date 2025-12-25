import { motion } from "framer-motion";

const animationVariants = {
  fade: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.8, staggerChildren: 0.3 } 
    },
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, staggerChildren: 0.3 } 
    },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, staggerChildren: 0.3 } 
    },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, staggerChildren: 0.3 } 
    },
  },
  rotate: {
    hidden: { opacity: 0, rotate: -15 },
    visible: { 
      opacity: 1, 
      rotate: 0, 
      transition: { duration: 0.8, staggerChildren: 0.3 } 
    },
  },
};

export default function AnimatedSection({ children, type = "fade", delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={animationVariants[type]}
      transition={{ delay }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={animationVariants[type]}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={animationVariants[type]}>{children}</motion.div>}
    </motion.div>
  );
}
