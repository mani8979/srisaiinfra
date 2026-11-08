import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/**
 * ScrollReveal
 * 
 * Element-level scroll reveal for headings, cards, text, images, and buttons.
 * Supports directional offsets (up, down, left, right, none) and subtle scale.
 * Works symmetrically on scroll down and scroll up when `once: false`.
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  distance = 22,
  className = '',
  once = false,
  amount = 0.18,
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

  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        x: initialX,
        y: initialY,
        scale: scale ? 0.97 : 1
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
              scale: scale ? 0.97 : 1,
              transition: {
                duration: duration * 0.75,
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
