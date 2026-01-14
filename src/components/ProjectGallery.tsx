import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { DemoHintOverlay } from "@/components/animations/DemoHintOverlay";
import { useReducedMotion } from "@/hooks/useScrollReveal";

// Import available images
import floorplan2d from "@/assets/floorplan-2d.jpg";
import floorplan3d from "@/assets/floorplan-3d.jpg";
import stage2dPlan from "@/assets/stage-2d-plan.jpg";
import stage3dColor from "@/assets/stage-3d-color.jpg";
import stageRender from "@/assets/stage-render.jpg";
import stageVrTour from "@/assets/stage-vr-tour.jpg";

interface Project {
  id: number;
  name: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Modern Apartment Complex",
    beforeImage: floorplan2d,
    afterImage: floorplan3d,
    beforeLabel: "2D Floor Plan",
    afterLabel: "3D Visualization",
  },
  {
    id: 2,
    name: "Luxury Villa Project",
    beforeImage: stage2dPlan,
    afterImage: stage3dColor,
    beforeLabel: "Original Blueprint",
    afterLabel: "Rendered Interior",
  },
  {
    id: 3,
    name: "Office Space Redesign",
    beforeImage: floorplan2d,
    afterImage: stageRender,
    beforeLabel: "Layout Plan",
    afterLabel: "Photorealistic Render",
  },
  {
    id: 4,
    name: "Residential Development",
    beforeImage: stage2dPlan,
    afterImage: stageVrTour,
    beforeLabel: "Architectural Plan",
    afterLabel: "VR-Ready Tour (Coming Soon)",
  },
];

const ProjectGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-main">
        <div className="inner-container">
          {/* Header */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2">
                  Stop guessing. Start seeing.
                </h2>
                <p className="text-muted-foreground text-lg">
                  We generate multiple views so decisions become obvious.
                </p>
              </div>
              <Button variant="outline" className="w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Play className="w-4 h-4 mr-2" />
                Explore the project
              </Button>
            </div>
          </ScrollReveal>

          {/* Gallery with navigation */}
          <ScrollReveal delay={0.1}>
            <div className="relative">
              {/* Left Arrow */}
              <motion.button
                onClick={goToPrevious}
                className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Previous project"
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </motion.button>

              {/* Images Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Before Image */}
                <div className="relative group overflow-hidden rounded-2xl bg-background shadow-sm">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`before-${currentProject.id}`}
                      initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="aspect-[4/3] overflow-hidden"
                    >
                      <img
                        src={currentProject.beforeImage}
                        alt={`${currentProject.name} - ${currentProject.beforeLabel}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-lg border border-border">
                    <span className="text-sm font-medium text-foreground">{currentProject.beforeLabel}</span>
                  </div>
                </div>

                {/* After Image */}
                <div className="relative group overflow-hidden rounded-2xl shadow-sm">
                  {showHint && <DemoHintOverlay onInteraction={() => setShowHint(false)} />}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`after-${currentProject.id}`}
                      initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
                      className="aspect-[4/3] overflow-hidden"
                    >
                      <img
                        src={currentProject.afterImage}
                        alt={`${currentProject.name} - ${currentProject.afterLabel}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-lg border border-border">
                    <span className="text-sm font-medium text-foreground">{currentProject.afterLabel}</span>
                  </div>
                </div>
              </div>

              {/* Right Arrow */}
              <motion.button
                onClick={goToNext}
                className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Next project"
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </motion.button>
            </div>
          </ScrollReveal>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2.5"
                }`}
                aria-label={`Go to project ${index + 1}`}
                whileHover={prefersReducedMotion ? {} : { scale: 1.2 }}
              />
            ))}
          </div>

          {/* CTA Button */}
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center mt-10">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-base">
                Get a Demo
              </Button>
            </div>
          </ScrollReveal>
        </div>
        <div className="grid-line-left" />
        <div className="grid-line-right" />
      </div>
    </section>
  );
};

export default ProjectGallery;
