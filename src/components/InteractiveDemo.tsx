import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Hand } from "lucide-react";

import plan2d from "@/assets/plan_2d.jpg";
import dollhouse3d from "@/assets/dollhouse_3d.jpg";
import living360 from "@/assets/living_360.jpg";

type ViewMode = "2D" | "3D" | "360";

const PanoramaViewer = lazy(() => import("./PanoramaViewer"));

const InteractiveDemo = () => {
  const [mode, setMode] = useState<ViewMode>("3D");
  const [showHint, setShowHint] = useState(false);
  const [hasShownHint, setHasShownHint] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = 
    typeof window !== "undefined" && 
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const transitionDuration = prefersReducedMotion ? 0 : 0.3;

  useEffect(() => {
    if (mode === "360" && !hasShownHint) {
      setShowHint(true);
      setHasShownHint(true);
      const timer = setTimeout(() => setShowHint(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [mode, hasShownHint]);

  const handleFullscreen = () => {
    if (!containerRef.current) return;
    
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const getCurrentImage = () => {
    switch (mode) {
      case "2D":
        return plan2d;
      case "3D":
        return dollhouse3d;
      default:
        return dollhouse3d;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
            Interactive Demo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience it yourself
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Switch between 2D plans, 3D dollhouse, and immersive 360° views.
          </p>
        </div>

        {/* Viewer Container */}
        <div 
          ref={containerRef}
          className={`relative mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-card border border-border/50 ${
            isFullscreen ? "max-w-none rounded-none" : ""
          }`}
        >
          {/* 16:9 Aspect Ratio Container */}
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <div className="absolute inset-0">
              <AnimatePresence mode="wait">
                {mode === "360" ? (
                  <motion.div
                    key="360"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: transitionDuration }}
                    className="w-full h-full"
                  >
                    <Suspense 
                      fallback={
                        <div className="w-full h-full flex items-center justify-center bg-muted">
                          <div className="animate-pulse text-muted-foreground">Loading 360° view...</div>
                        </div>
                      }
                    >
                      <PanoramaViewer imageUrl={living360} />
                    </Suspense>
                  </motion.div>
                ) : (
                  <motion.div
                    key={mode}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: transitionDuration }}
                    className="w-full h-full"
                  >
                    <img
                      src={getCurrentImage()}
                      alt={`${mode} view`}
                      className="w-full h-full object-contain bg-white"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 360 Hint Overlay */}
              <AnimatePresence>
                {showHint && mode === "360" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none"
                  >
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl px-6 py-4 flex items-center gap-3 shadow-lg">
                      <Hand className="w-6 h-6 text-primary" />
                      <span className="text-foreground font-medium">Drag to look around</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom-left: 2D thumbnail */}
              <button
                onClick={() => setMode("2D")}
                className={`absolute bottom-4 left-4 w-20 h-16 md:w-24 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 shadow-lg hover:scale-105 ${
                  mode === "2D" 
                    ? "border-primary ring-2 ring-primary/30" 
                    : "border-white/80 hover:border-white"
                }`}
              >
                <img
                  src={plan2d}
                  alt="2D floor plan thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold drop-shadow">2D</span>
                </div>
              </button>

              {/* Top-right: Fullscreen button */}
              <button
                onClick={handleFullscreen}
                className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-lg shadow-md hover:bg-white transition-colors"
                aria-label="Toggle fullscreen"
              >
                <Maximize2 className="w-5 h-5 text-foreground" />
              </button>

              {/* Bottom-right: Mode buttons */}
              <div className="absolute bottom-4 right-4 flex bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
                {(["2D", "3D", "360"] as ViewMode[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      mode === m
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Click the thumbnail or buttons to switch views • Drag to explore in 360° mode
        </p>
      </div>
    </section>
  );
};

export default InteractiveDemo;
