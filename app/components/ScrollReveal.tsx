"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up"
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down";
}) {
  const shouldReduceMotion = useReducedMotion();
  const yFrom = direction === "up" ? 30 : -30;

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: yFrom }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
