import { Upload, Cpu, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload",
    description: "Upload your 2D floor plan in any format—PDF, PNG, or JPG.",
    color: "bg-lavender/20 text-lavender",
    borderColor: "border-lavender/30",
  },
  {
    icon: Cpu,
    title: "AI Process",
    description: "Our AI analyzes your floor plan and generates stunning 3D models.",
    color: "bg-coral/20 text-coral",
    borderColor: "border-coral/30",
  },
  {
    icon: Download,
    title: "Receive",
    description: "Download your 3D renders, virtual tour, and furnished layouts.",
    color: "bg-sage/20 text-sage",
    borderColor: "border-sage/30",
  },
];

const services = [
  "3D Floor Plans",
  "Virtual Tours",
  "Furnished Renders",
  "Interior Design",
  "Exterior Views",
  "2D to 3D Conversion",
  "Real Estate Visuals",
  "Architecture Viz",
];

const HowItWorks = () => {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="inner-container">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              The way floor plans <span className="text-italic">should've</span> been visualized
            </h2>
          </div>

          {/* Steps grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`card-elevated p-6 border ${step.borderColor} relative overflow-hidden group hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-5`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                {/* Step number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-foreground/5">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Marquee of services */}
          <div className="relative overflow-hidden py-4">
            <div className="flex gap-4 animate-marquee">
              {[...services, ...services].map((service, index) => (
                <span
                  key={index}
                  className="service-pill whitespace-nowrap"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Logo cloud placeholder */}
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
