import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

/**
 * ScrollFadeSection
 * 
 * Continuous scroll-linked fade-in to fade-out container.
 * 
 * Behavior:
 * - When entering the viewport from below, smoothly transitions opacity 0 -> 1 & y +25px -> 0
 * - Stays 100% visible throughout the active reading zone
 * - When scrolling away past the top of the viewport, smoothly transitions opacity 1 -> 0 & y 0 -> -20px
 * - Scrolling upward naturally reverses the transition
 * - For Hero section (isHero=true): Starts at opacity 1, smoothly fades out as user scrolls down
 * - For Last section/Footer (isLast=true): Smoothly fades in, remains visible at the end of the page
 * 
 * Responsiveness:
 * Built with `w-full max-w-full overflow-x-clip` to strictly prevent any horizontal overflow.
 */
export default function ScrollFadeSection({
  children,
  className = '',
  isHero = false,
  isLast = false,
  fadeExit = true,
  yOffset = 20,
  scaleEffect = false, // Keep false or subtle on mobile to avoid any overflow or subpixel clipping
  as = 'section',
  id,
  style = {}
}) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll offset configuration based on section role
  const offsetConfig = isHero
    ? ['start start', 'end start']
    : isLast
    ? ['start end', 'end end']
    : ['start end', 'end start'];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offsetConfig
  });

  // Smooth out discrete mouse wheel ticks for a cinematic feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 26,
    mass: 0.12,
    restDelta: 0.0005
  });

  // Calculate transforms based on role
  // 1. Hero section: starts at 1, fades out as user scrolls past
  const heroOpacity = useTransform(smoothProgress, [0, 0.45, 0.95], [1, 1, 0.04]);
  const heroY = useTransform(smoothProgress, [0, 0.45, 0.95], [0, 0, -24]);
  const heroScale = useTransform(smoothProgress, [0, 0.45, 0.95], [1, 1, 0.99]);

  // 2. Middle section: enters (0->0.18), stays (0.18->0.82), exits (0.82->1.0)
  const middleOpacityWithExit = useTransform(
    smoothProgress,
    [0, 0.18, 0.82, 1],
    [0, 1, 1, 0.04]
  );
  const middleOpacityNoExit = useTransform(
    smoothProgress,
    [0, 0.22, 1],
    [0, 1, 1]
  );
  const middleOpacity = fadeExit ? middleOpacityWithExit : middleOpacityNoExit;

  const middleY = useTransform(
    smoothProgress,
    [0, 0.18, 0.82, 1],
    [yOffset, 0, 0, -yOffset]
  );

  const middleScale = useTransform(
    smoothProgress,
    [0, 0.18, 0.82, 1],
    [0.99, 1, 1, 0.99]
  );

  // 3. Last section / Footer: enters (0->0.35), stays at 1
  const lastOpacity = useTransform(smoothProgress, [0, 0.35, 1], [0, 1, 1]);
  const lastY = useTransform(smoothProgress, [0, 0.35, 1], [yOffset, 0, 0]);
  const lastScale = useTransform(smoothProgress, [0, 0.35, 1], [0.99, 1, 1]);

  // Select appropriate motion values
  let opacity = middleOpacity;
  let y = middleY;
  let scale = scaleEffect ? middleScale : 1;

  if (isHero) {
    opacity = heroOpacity;
    y = heroY;
    scale = scaleEffect ? heroScale : 1;
  } else if (isLast) {
    opacity = lastOpacity;
    y = lastY;
    scale = scaleEffect ? lastScale : 1;
  }

  // Accessibility: respect reduced motion preferences
  if (shouldReduceMotion) {
    const Component = as;
    return (
      <Component id={id} className={`w-full max-w-full overflow-x-clip ${className}`} style={style}>
        {children}
      </Component>
    );
  }

  const MotionComponent = motion[as] || motion.section;

  return (
    <MotionComponent
      ref={containerRef}
      id={id}
      className={`w-full max-w-full overflow-x-clip will-change-[opacity,transform] ${className}`}
      style={{
        opacity,
        y,
        scale,
        ...style
      }}
    >
      {children}
    </MotionComponent>
  );
}
