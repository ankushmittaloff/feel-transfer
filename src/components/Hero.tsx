import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const Hero = () => {
  return (
    <section className="section-padding pt-8 md:pt-16">
      <div className="container-main">
        <div className="inner-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
                Walk through your home{" "}
                <span className="text-italic">before you even build it.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                We convert your 2D plan into a photoreal 3D + 360° experience so you can confidently finalize layout, furniture flow, and room proportions{" "}
                <span className="font-medium text-foreground">before construction.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="xl">
                  Upload a floor plan
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button 
                  variant="heroOutline" 
                  size="xl"
                  onClick={() => document.getElementById('interactive-demo')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See examples
                </Button>
              </div>
            </div>

            {/* Right - Before/After Slider */}
            <div className="flex-shrink-0 w-full max-w-md lg:max-w-lg">
              <BeforeAfterSlider />
            </div>
          </div>
        </div>
        <div className="grid-line-left" />
        <div className="grid-line-right" />
      </div>
    </section>
  );
};

export default Hero;
