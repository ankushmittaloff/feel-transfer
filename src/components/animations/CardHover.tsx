import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useScrollReveal";

interface CardHoverProps {
  children: ReactNode;
  className?: string;
}

export const CardHover = ({ children, className = "" }: CardHoverProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{
        y: -6,
        boxShadow: "0 12px 32px -8px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.18, ease: "easeOut" },
      }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

interface IconTileHoverProps {
  children: ReactNode;
  className?: string;
}

export const IconTileHover = ({ children, className = "" }: IconTileHoverProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{
        rotate: 2,
        scale: 1.02,
        transition: { duration: 0.15, ease: "easeOut" },
      }}
    >
      {children}
    </motion.div>
  );
};
