import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Hand } from "lucide-react";
import { useReducedMotion } from "@/hooks/useScrollReveal";

interface DemoHintOverlayProps {
  onInteraction?: () => void;
}

export const DemoHintOverlay = ({ onInteraction }: DemoHintOverlayProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleInteraction = () => {
    setIsVisible(false);
    onInteraction?.();
  };

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center bg-foreground/5 backdrop-blur-[1px] rounded-2xl cursor-pointer z-10"
          onClick={handleInteraction}
          onTouchStart={handleInteraction}
        >
          <div className="flex flex-col items-center gap-2 text-foreground">
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Hand className="w-8 h-8" />
            </motion.div>
            <span className="text-sm font-medium">Drag to look around</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
