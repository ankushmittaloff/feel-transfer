import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useScrollReveal";
import floorplan2d from "@/assets/floorplan-2d.jpg";
import floorplan3d from "@/assets/floorplan-3d.jpg";
import stageVrTour from "@/assets/stage-vr-tour.jpg";

const stages = [
  { label: "2D Plan", image: floorplan2d },
  { label: "3D Model", image: floorplan3d },
  { label: "360° Tour", image: stageVrTour },
];

export const TransformationScrubber = () => {
  const [value, setValue] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const currentStageIndex = Math.min(Math.floor(value / 34), 2);
  const currentStage = stages[currentStageIndex];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Label */}
      <p className="text-center text-sm text-muted-foreground mb-4">
        Drag to see the transformation
      </p>

      {/* Image container */}
      <div 
        ref={containerRef}
        className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted mb-6"
      >
        {stages.map((stage, index) => (
          <motion.img
            key={stage.label}
            src={stage.image}
            alt={stage.label}
            className="absolute inset-0 w-full h-full object-cover"
            initial={false}
            animate={{ 
              opacity: currentStageIndex === index ? 1 : 0,
              scale: currentStageIndex === index ? 1 : 1.02,
            }}
            transition={{ 
              duration: prefersReducedMotion ? 0 : 0.3, 
              ease: "easeOut" 
            }}
          />
        ))}

        {/* Stage indicator */}
        <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <span className="text-xs font-medium">{currentStage.label}</span>
        </div>
      </div>

      {/* Scrubber slider */}
      <div className="relative px-2">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleSliderChange}
          className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-foreground
            [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:cursor-grab
            [&::-webkit-slider-thumb]:active:cursor-grabbing
            [&::-webkit-slider-thumb]:transition-transform
            [&::-webkit-slider-thumb]:hover:scale-110
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-foreground
            [&::-moz-range-thumb]:border-0
            [&::-moz-range-thumb]:shadow-md
            [&::-moz-range-thumb]:cursor-grab
            [&::-moz-range-thumb]:active:cursor-grabbing"
        />

        {/* Stage markers */}
        <div className="flex justify-between mt-3 text-xs text-muted-foreground">
          {stages.map((stage) => (
            <span key={stage.label}>{stage.label}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
