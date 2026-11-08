import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/**
 * ScrollReveal
 * 
 * Element-level scroll reveal for headings, cards, text, images, and buttons.
 * Supports directional offsets (up, down, left, right, none) and subtle scale.
 * 
 * Responsiveness Safeguard:
 * On mobile viewports (< 768px), horizontal translations ('left' / 'right') are
 * gracefully converted to subtle vertical translations ('up') to guarantee
 * zero horizontal overflow beyond screen boundaries.
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  distance = 20,
  className = '',
  once = false,
  amount = 0.15,
  as = 'div',
  scale = false,
  style = {}
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    amount
  });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Component = as;
    return (
      <Component className={className} style={style}>
        {children}
      </Component>
    );
  }

  // Calculate directional offset
  let initialX = 0;
  let initialY = 0;

  // Check if running on mobile screen
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  if (isMobile) {
    // On mobile screens, keep initialX strictly 0 to prevent any horizontal overflow
    if (direction === 'down') {
      initialY = -Math.min(distance, 16);
    } else if (direction === 'none') {
      initialY = 0;
    } else {
      // For 'up', 'left', 'right', use a subtle vertical fade-up
      initialY = Math.min(distance, 16);
    }
  } else {
    // Desktop: full directional freedom
    switch (direction) {
      case 'up':
        initialY = distance;
        break;
      case 'down':
        initialY = -distance;
        break;
      case 'left':
        initialX = distance;
        break;
      case 'right':
        initialX = -distance;
        break;
      case 'none':
      default:
        break;
    }
  }

  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      ref={ref}
      className={`max-w-full ${className}`}
      initial={{
        opacity: 0,
        x: initialX,
        y: initialY,
        scale: scale ? 0.98 : 1
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              transition: {
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1]
              }
            }
          : {
              opacity: 0,
              x: initialX,
              y: initialY,
              scale: scale ? 0.98 : 1,
              transition: {
                duration: duration * 0.7,
                ease: [0.16, 1, 0.3, 1]
              }
            }
      }
      style={style}
    >
      {children}
    </MotionComponent>
  );
}
