import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useScrollReveal";

interface BlueprintLineDrawProps {
  onComplete?: () => void;
}

export const BlueprintLineDraw = ({ onComplete }: BlueprintLineDrawProps) => {
  const prefersReducedMotion = useReducedMotion();

  // Simple floor plan SVG path
  const floorplanPath = `
    M 20 20 
    L 180 20 
    L 180 80 
    L 140 80 
    L 140 140 
    L 180 140 
    L 180 180 
    L 20 180 
    L 20 100 
    L 60 100 
    L 60 60 
    L 20 60 
    Z
    M 80 20 L 80 60
    M 100 100 L 100 180
    M 140 80 L 140 140
  `;

  if (prefersReducedMotion) {
    return (
      <svg 
        viewBox="0 0 200 200" 
        className="w-full h-full max-w-[200px] max-h-[200px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={floorplanPath} className="text-muted-foreground/30" />
      </svg>
    );
  }

  return (
    <svg 
      viewBox="0 0 200 200" 
      className="w-full h-full max-w-[200px] max-h-[200px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        d={floorplanPath}
        className="text-muted-foreground/30"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ 
          duration: 1.2, 
          ease: "easeInOut",
        }}
        onAnimationComplete={onComplete}
      />
    </svg>
  );
};
