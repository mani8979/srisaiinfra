import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/**
 * StaggerContainer
 * 
 * Container for grid elements (service cards, project cards, stats, features)
 * that staggers its children when scrolled into view.
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.12,
  delayChildren = 0.05,
  className = '',
  amount = 0.15,
  once = false,
  as = 'div',
  style = {}
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Component = as;
    return (
      <Component className={className} style={style}>
        {children}
      </Component>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren
      }
    }
  };

  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
      style={style}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * StaggerItem
 * 
 * Child element inside a StaggerContainer.
 */
export function StaggerItem({
  children,
  yOffset = 22,
  duration = 0.6,
  className = '',
  as = 'div',
  scale = false,
  style = {}
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Component = as;
    return (
      <Component className={className} style={style}>
        {children}
      </Component>
    );
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: yOffset,
      scale: scale ? 0.96 : 1
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent variants={itemVariants} className={className} style={style}>
      {children}
    </MotionComponent>
  );
}

export default StaggerContainer;

