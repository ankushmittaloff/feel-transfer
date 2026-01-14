import { ArrowRight } from "lucide-react";
import stage2DPlan from "@/assets/stage-2d-plan.jpg";
import stage3DColor from "@/assets/stage-3d-color.jpg";
import stageVRTour from "@/assets/stage-vr-tour.jpg";
import stageRender from "@/assets/stage-render.jpg";

const stages = [
  {
    image: stage2DPlan,
    title: "2D Floor Plan",
    description: "Your basic blueprint",
    accent: "from-charcoal/20 to-transparent",
  },
  {
    image: stage3DColor,
    title: "3D Full Color",
    description: "Brought to life",
    accent: "from-sage/30 to-transparent",
  },
  {
    image: stageVRTour,
    title: "360° Virtual Tour",
    description: "Walk through it",
    accent: "from-lavender/30 to-transparent",
  },
  {
    image: stageRender,
    title: "Photorealistic Render",
    description: "Live in it",
    accent: "from-coral/30 to-transparent",
  },
];

const TransformationStages = () => {
  return (
    <section className="section-padding bg-cream/30">
      <div className="container-main">
        <div className="inner-container">
          {/* Header */}
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
              From flat blueprints to <span className="text-italic text-coral">walking through</span> your dream home
            </h2>
            <p className="text-lg text-muted-foreground">
              Get an immersive experience of your house in under 60 seconds. Here's how your floor plan transforms.
            </p>
          </div>

          {/* Stages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stages.map((stage, index) => (
              <div key={stage.title} className="relative group">
                {/* Card */}
                <div className="card-elevated overflow-hidden">
                  {/* Image container */}
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${stage.accent}`} />
                    
                    {/* Step number badge */}
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-sm font-semibold shadow-md">
                      {index + 1}
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{stage.title}</h3>
                    <p className="text-sm text-muted-foreground">{stage.description}</p>
                  </div>
                </div>

                {/* Arrow connector (hidden on last item and mobile) */}
                {index < stages.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-5 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background shadow-lg items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-coral" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom tagline */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-medium">
              All from a simple floor plan upload
            </p>
          </div>
        </div>
        <div className="grid-line-left" />
        <div className="grid-line-right" />
      </div>
    </section>
  );
};

export default TransformationStages;
