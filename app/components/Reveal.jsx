"use client";

import { motion, useReducedMotion } from "motion/react";

const directionOffset = {
  left: { x: -90, y: 18 },
  right: { x: 90, y: 18 },
  up: { x: 0, y: 42 },
  center: { x: 0, y: 0 },
};

export default function Reveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  direction = "up",
  scale = 0.98,
  ...props
}) {
  const MotionElement = motion[as] || motion.div;
  const prefersReducedMotion = useReducedMotion();
  const offset = directionOffset[direction] || directionOffset.up;

  return (
    <MotionElement
      className={className}
      initial={
        prefersReducedMotion
          ? false
          : { opacity: 0, scale, x: offset.x, y: offset.y }
      }
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </MotionElement>
  );
}
