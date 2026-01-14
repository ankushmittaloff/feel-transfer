import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BlueprintGrid } from "@/components/animations/BlueprintGrid";
import { BlueprintLineDraw } from "@/components/animations/BlueprintLineDraw";
import { TransformationScrubber } from "@/components/TransformationScrubber";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useReducedMotion } from "@/hooks/useScrollReveal";

const Hero = () => {
  const [lineDrawComplete, setLineDrawComplete] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-padding pt-8 md:pt-16 relative overflow-hidden">
      {/* Blueprint grid background */}
      <BlueprintGrid />

      <div className="container-main relative z-10">
        <div className="inner-container">
          <div className="flex flex-col gap-12 lg:gap-16">
            {/* Top content */}
            <div className="text-center max-w-3xl mx-auto">
              <ScrollReveal>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
                  Walk through your home{" "}
                  <span className="text-italic">before you even build it.</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
                  We convert your 2D plan into a photoreal 3D + 360° experience so you can confidently finalize layout, furniture flow, and room proportions{" "}
                  <span className="font-medium text-foreground">before construction.</span>
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="xl">
                    Upload a floor plan
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button variant="heroOutline" size="xl">
                    See examples
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Blueprint line draw + crossfade to scrubber */}
            <ScrollReveal delay={0.3}>
              <div className="relative w-full max-w-2xl mx-auto">
                <AnimatePresence mode="wait">
                  {!lineDrawComplete && !prefersReducedMotion ? (
                    <motion.div
                      key="blueprint"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex justify-center py-12"
                    >
                      <BlueprintLineDraw onComplete={() => setLineDrawComplete(true)} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="scrubber"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <TransformationScrubber />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="grid-line-left" />
        <div className="grid-line-right" />
      </div>
    </section>
  );
};

export default Hero;
