import { useState, useEffect, useRef, lazy, Suspense, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Hand } from "lucide-react";

import plan2d from "@/assets/plan_2d.jpg";
import dollhouse3d from "@/assets/dollhouse_3d.jpg";
import living360 from "@/assets/living_360.jpg";

// Panorama assets for style/view combinations
import modernCity360 from "@/assets/modern_city_360.jpg";
import modernGarden360 from "@/assets/modern_garden_360.jpg";
import modernPool360 from "@/assets/modern_pool_360.jpg";
import scandiCity360 from "@/assets/scandi_city_360.jpg";
import scandiGarden360 from "@/assets/scandi_garden_360.jpg";
import scandiPool360 from "@/assets/scandi_pool_360.jpg";
import japandiCity360 from "@/assets/japandi_city_360.jpg";
import japandiGarden360 from "@/assets/japandi_garden_360.jpg";
import japandiPool360 from "@/assets/japandi_pool_360.jpg";

type ViewMode = "2D" | "3D" | "360";
type InteriorStyle = "modern" | "scandi" | "japandi";
type WindowView = "city" | "garden" | "pool";

const PanoramaViewer = lazy(() => import("./PanoramaViewer"));

const HINT_DISMISSED_KEY = "interactive-demo-hint-dismissed";

// Define all panorama combinations - all are now available
const PANORAMA_MAP: Record<string, string> = {
  "modern_city": modernCity360,
  "modern_garden": modernGarden360,
  "modern_pool": modernPool360,
  "scandi_city": scandiCity360,
  "scandi_garden": scandiGarden360,
  "scandi_pool": scandiPool360,
  "japandi_city": japandiCity360,
  "japandi_garden": japandiGarden360,
  "japandi_pool": japandiPool360,
};

const STYLE_OPTIONS: { value: InteriorStyle; label: string }[] = [
  { value: "modern", label: "Modern" },
  { value: "scandi", label: "Scandi" },
  { value: "japandi", label: "Japandi" },
];

const VIEW_OPTIONS: { value: WindowView; label: string }[] = [
  { value: "city", label: "City" },
  { value: "garden", label: "Garden" },
  { value: "pool", label: "Pool" },
];

const InteractiveDemo = () => {
  const [mode, setMode] = useState<ViewMode>("3D");
  const [interiorStyle, setInteriorStyle] = useState<InteriorStyle>("modern");
  const [windowView, setWindowView] = useState<WindowView>("city");
  const [isLoading, setIsLoading] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem(HINT_DISMISSED_KEY) === "true";
    }
    return false;
  });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const panoramaContainerRef = useRef<HTMLDivElement>(null);
  const hintTimerRef = useRef<NodeJS.Timeout | null>(null);

  const prefersReducedMotion = 
    typeof window !== "undefined" && 
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const transitionDuration = prefersReducedMotion ? 0 : 0.3;

  const getPanoramaKey = (style: InteriorStyle, view: WindowView) => `${style}_${view}`;
  
  const getCurrentPanorama = () => {
    const key = getPanoramaKey(interiorStyle, windowView);
    return PANORAMA_MAP[key] || living360;
  };

  const isOptionAvailable = (_style: InteriorStyle, _view: WindowView) => {
    // All combinations are now available
    return true;
  };

  const handleStyleChange = (style: InteriorStyle) => {
    if (!isOptionAvailable(style, windowView)) {
      // Find first available view for this style
      const availableView = VIEW_OPTIONS.find(v => isOptionAvailable(style, v.value));
      if (availableView) {
        setWindowView(availableView.value);
      }
    }
    setInteriorStyle(style);
    triggerLoadingTransition();
  };

  const handleViewChange = (view: WindowView) => {
    if (!isOptionAvailable(interiorStyle, view)) {
      // Find first available style for this view
      const availableStyle = STYLE_OPTIONS.find(s => isOptionAvailable(s.value, view));
      if (availableStyle) {
        setInteriorStyle(availableStyle.value);
      }
    }
    setWindowView(view);
    triggerLoadingTransition();
  };

  const triggerLoadingTransition = () => {
    if (mode === "360") {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 400);
    }
  };

  const dismissHint = useCallback(() => {
    setShowHint(false);
    setHasInteracted(true);
    sessionStorage.setItem(HINT_DISMISSED_KEY, "true");
    if (hintTimerRef.current) {
      clearTimeout(hintTimerRef.current);
      hintTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (mode === "360" && !hasInteracted) {
      setShowHint(true);
      hintTimerRef.current = setTimeout(() => {
        setShowHint(false);
      }, 2000);
      return () => {
        if (hintTimerRef.current) {
          clearTimeout(hintTimerRef.current);
        }
      };
    }
  }, [mode, hasInteracted]);

  // Listen for interaction events on the panorama container
  useEffect(() => {
    if (mode !== "360" || hasInteracted) return;

    const container = panoramaContainerRef.current;
    if (!container) return;

    const handleInteraction = () => {
      dismissHint();
    };

    container.addEventListener("mousedown", handleInteraction);
    container.addEventListener("touchstart", handleInteraction);
    container.addEventListener("wheel", handleInteraction);

    return () => {
      container.removeEventListener("mousedown", handleInteraction);
      container.removeEventListener("touchstart", handleInteraction);
      container.removeEventListener("wheel", handleInteraction);
    };
  }, [mode, hasInteracted, dismissHint]);

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
                    key={`360-${interiorStyle}-${windowView}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: transitionDuration }}
                    className="w-full h-full"
                    ref={panoramaContainerRef}
                    style={{ filter: "brightness(1.1)" }}
                  >
                    {/* Loading blur overlay */}
                    <AnimatePresence>
                      {isLoading && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="absolute inset-0 z-20 bg-white/40 backdrop-blur-md"
                        />
                      )}
                    </AnimatePresence>
                    
                    <Suspense 
                      fallback={
                        <div className="w-full h-full flex items-center justify-center bg-muted">
                          <div className="animate-pulse text-muted-foreground">Loading 360° view...</div>
                        </div>
                      }
                    >
                      <PanoramaViewer imageUrl={getCurrentPanorama()} />
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

              {/* 360 Hint - Non-blocking, minimal */}
              <AnimatePresence>
                {showHint && mode === "360" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
                  >
                    <div className="bg-gradient-to-r from-black/70 via-black/60 to-black/70 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-3 shadow-xl">
                      <Hand className="w-5 h-5 text-white" />
                      <span className="text-white font-medium text-sm">Drag to look around</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom-left: 2D thumbnail card */}
              <button
                onClick={() => setMode("2D")}
                className={`absolute bottom-4 left-4 md:bottom-5 md:left-5 flex flex-col items-center gap-1.5 p-2 bg-white rounded-xl shadow-lg border transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  mode === "2D" 
                    ? "border-primary ring-2 ring-primary/20" 
                    : "border-border/60 hover:border-border"
                }`}
              >
                <div className="w-20 h-14 md:w-28 md:h-20 rounded-lg overflow-hidden">
                  <img
                    src={plan2d}
                    alt="2D floor plan thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[10px] md:text-xs font-medium text-muted-foreground">
                  2D Plan
                </span>
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

        {/* Style & View Toggles - Only visible in 360 mode */}
        <AnimatePresence>
          {mode === "360" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
            >
              {/* Interior Style Toggle */}
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Interior Style
                </span>
                <div className="flex bg-white rounded-full p-1 shadow-md border border-border/40">
                  {STYLE_OPTIONS.map((option) => {
                    const isAvailable = isOptionAvailable(option.value, windowView);
                    const isActive = interiorStyle === option.value;
                    
                    return (
                      <button
                        key={option.value}
                        onClick={() => isAvailable && handleStyleChange(option.value)}
                        disabled={!isAvailable}
                        className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : isAvailable
                              ? "text-foreground hover:bg-muted/60"
                              : "text-muted-foreground/50 cursor-not-allowed"
                        }`}
                      >
                        {option.label}
                        {!isAvailable && (
                          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground whitespace-nowrap">
                            Coming soon
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Window View Toggle */}
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Window View
                </span>
                <div className="flex bg-white rounded-full p-1 shadow-md border border-border/40">
                  {VIEW_OPTIONS.map((option) => {
                    const isAvailable = isOptionAvailable(interiorStyle, option.value);
                    const isActive = windowView === option.value;
                    
                    return (
                      <button
                        key={option.value}
                        onClick={() => isAvailable && handleViewChange(option.value)}
                        disabled={!isAvailable}
                        className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : isAvailable
                              ? "text-foreground hover:bg-muted/60"
                              : "text-muted-foreground/50 cursor-not-allowed"
                        }`}
                      >
                        {option.label}
                        {!isAvailable && (
                          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground whitespace-nowrap">
                            Coming soon
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Caption */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Click the thumbnail or buttons to switch views • Drag to explore in 360° mode
        </p>
      </div>
    </section>
  );
};

export default InteractiveDemo;
