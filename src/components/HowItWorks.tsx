import { Upload, Cpu, Eye } from "lucide-react";
import stageRender from "@/assets/stage-render.jpg";
import stageVrTour from "@/assets/stage-vr-tour.jpg";

const steps = [
  {
    icon: Upload,
    title: "Upload Plan",
    description: "Simply upload a photo or PDF of your 2D floor plan. Even hand-drawn sketches work with our advanced recognition.",
    isDark: false,
    image: stageRender,
    tags: [],
  },
  {
    icon: Cpu,
    title: "AI Processing",
    description: "Our neural engine analyzes geometry, identifies rooms, and builds a 3D model with accurate dimensions instantly.",
    isDark: true,
    image: null,
    tags: ["detect_walls()", "gen_mesh()", "render_texture()"],
  },
  {
    icon: Eye,
    title: "Receive & Tour",
    description: "Download high-res renders or share a link to an interactive virtual tour. Compatible with all devices.",
    isDark: false,
    image: stageVrTour,
    tags: [],
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="inner-container">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
              The way floor plans <span className="text-italic">should've</span> been done.
            </h2>
            <p className="text-muted-foreground text-lg">
              No complex CAD software. No waiting weeks for architects.
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  step.isDark 
                    ? "bg-charcoal text-cream" 
                    : "bg-card border border-border shadow-sm"
                }`}
              >
                <div className="p-6 pb-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                    step.isDark 
                      ? "bg-cream/10 border border-cream/20" 
                      : "bg-muted border border-border"
                  }`}>
                    <step.icon className={`w-6 h-6 ${step.isDark ? "text-cream" : "text-foreground"}`} />
                  </div>

                  {/* Step number - positioned top right */}
                  <div className={`absolute top-4 right-6 text-7xl font-bold ${
                    step.isDark ? "text-cream/10" : "text-foreground/5"
                  }`}>
                    {index + 1}
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-semibold mb-3 ${step.isDark ? "text-cream" : "text-foreground"}`}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed ${step.isDark ? "text-cream/70" : "text-muted-foreground"}`}>
                    {step.description}
                  </p>

                  {/* Code-like tags for dark card */}
                  {step.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-6">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-md bg-sage/20 text-sage text-xs font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Image at bottom for non-dark cards */}
                {step.image && (
                  <div className="relative h-48 mt-2">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay icon for the last card */}
                    {index === 2 && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <Eye className="w-5 h-5 text-foreground" />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Trusted by */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16 opacity-40">
            <span className="text-sm font-medium uppercase tracking-widest">Trusted by 500+ agencies</span>
          </div>
        </div>
        <div className="grid-line-left" />
        <div className="grid-line-right" />
      </div>
    </section>
  );
};

export default HowItWorks;
