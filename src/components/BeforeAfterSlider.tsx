import { useState, useRef } from "react";
import floorplan2d from "@/assets/floorplan-2d.jpg";
import floorplan3d from "@/assets/floorplan-3d.jpg";

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Labels */}
      <div className="flex justify-between mb-3">
        <span className="badge-pill bg-secondary text-foreground text-xs font-medium">
          2D Floor Plan
        </span>
        <span className="badge-pill bg-primary text-primary-foreground text-xs font-medium">
          3D Render
        </span>
      </div>

      {/* Slider container */}
      <div
        ref={containerRef}
        className="relative w-full aspect-square rounded-2xl overflow-hidden cursor-ew-resize shadow-elegant select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={handleClick}
      >
        {/* 3D Image (background) */}
        <img
          src={floorplan3d}
          alt="3D rendered floor plan"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* 2D Image (clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={floorplan2d}
            alt="2D floor plan"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          {/* Slider handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-muted-foreground rounded-full" />
              <div className="w-0.5 h-4 bg-muted-foreground rounded-full" />
            </div>
          </div>
        </div>

        {/* Corner labels */}
        <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-foreground">
          Before
        </div>
        <div className="absolute bottom-3 right-3 bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-primary-foreground">
          After
        </div>
      </div>

      {/* Instruction text */}
      <p className="text-center text-muted-foreground text-sm mt-3">
        ← Drag to compare →
      </p>
    </div>
  );
};

export default BeforeAfterSlider;
