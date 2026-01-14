import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useScrollReveal";

interface PulseGlowProps {
  children: ReactNode;
  className?: string;
}

export const PulseGlow = ({ children, className = "" }: PulseGlowProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ boxShadow: "0 0 0 0 rgba(230, 100, 70, 0)" }}
      animate={
        isInView
          ? {
              boxShadow: [
                "0 0 0 0 rgba(230, 100, 70, 0)",
                "0 0 20px 4px rgba(230, 100, 70, 0.3)",
                "0 0 0 0 rgba(230, 100, 70, 0)",
              ],
            }
          : {}
      }
      transition={{
        duration: 1.2,
        ease: "easeOut",
        times: [0, 0.5, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
