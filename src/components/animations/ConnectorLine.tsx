import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/useScrollReveal";

export const ConnectorLine = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-1/2 h-px bg-border z-0" />
    );
  }

  return (
    <div ref={ref} className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-1/2 h-px z-0">
      <motion.div
        className="h-full bg-border origin-left"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      />
    </div>
  );
};
