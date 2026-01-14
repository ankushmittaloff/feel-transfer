import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="section-padding pt-8 md:pt-16">
      <div className="container-main">
        <div className="inner-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
                Transform floor plans into{" "}
                <span className="text-italic">stunning 3D</span> renders
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                Upload your 2D floor plan and receive photorealistic 3D visualizations with furniture.{" "}
                <span className="font-medium text-foreground">AI-powered. Lightning fast.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="xl">
                  Start free trial
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="heroOutline" size="xl">
                  See examples
                </Button>
              </div>
            </div>

            {/* Right - Member card */}
            <div className="flex-shrink-0 w-full max-w-md">
              <div className="card-elevated p-1 relative overflow-hidden">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="badge-pill bg-foreground text-background text-xs">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI Powered
                  </span>
                </div>

                {/* Card header gradient */}
                <div className="bg-gradient-coral rounded-xl p-8 pt-14 text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-4 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
                    <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                  </div>
                  <h2 className="text-2xl font-semibold text-primary-foreground mb-1 relative">Join</h2>
                  <h2 className="text-2xl font-semibold text-primary-foreground mb-3 relative">FloorCraft</h2>
                  <p className="text-primary-foreground/80 text-sm mb-6 relative">One subscription for unlimited renders.</p>
                  <Button variant="dark" size="lg" className="w-full relative">
                    See pricing
                  </Button>
                </div>

                {/* Call booking link */}
                <a
                  href="#book"
                  className="flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors rounded-b-xl group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-foreground">
                        <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.99C20.45 21.04 19.89 21.07 19.33 21.07C10.16 21.07 2.82998 13.81 2.82998 4.67002C2.82998 4.11002 2.85998 3.55002 2.91998 3.00002C2.97998 2.44002 3.42998 2.00002 3.99998 2.00002H6.99998C7.55998 2.00002 8.02998 2.41002 8.09998 2.97002C8.15998 3.49002 8.26998 4.00002 8.41998 4.49002C8.56998 4.97002 8.43998 5.50002 8.04998 5.89002L6.59998 7.34002C7.89998 9.71002 9.83998 11.65 12.21 12.95L13.66 11.5C14.05 11.11 14.58 10.98 15.06 11.13C15.55 11.28 16.06 11.39 16.58 11.45C17.14 11.52 17.55 11.99 17.55 12.55V15.55C17.55 16.11 17.14 16.56 16.58 16.62C16.03 16.68 15.47 16.71 14.91 16.71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Book a 15-min intro call</p>
                      <p className="text-xs text-muted-foreground">Schedule now</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Floating mockup */}
                <div className="absolute -right-8 -bottom-4 w-32 h-20 bg-gradient-to-br from-secondary to-muted rounded-lg shadow-lg transform rotate-6 opacity-60" />
              </div>
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
