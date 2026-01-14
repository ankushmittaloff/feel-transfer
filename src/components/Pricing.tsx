import { Button } from "@/components/ui/button";
import { Check, Pause, RefreshCcw, Sparkles } from "lucide-react";

const features = [
  "Unlimited 3D floor plans",
  "Avg. 48 hour delivery",
  "Unlimited revisions",
  "Virtual tour exports",
  "Multiple furniture styles",
  "Up to 3 team members",
  "Pause or cancel anytime",
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-main">
        <div className="inner-container">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="eyebrow">Pricing</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              One subscription, <span className="text-italic">endless renders</span>
            </h2>
          </div>

          {/* Pricing layout */}
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            {/* Left decorative card */}
            <div className="hidden lg:block card-elevated p-8 text-center max-w-xs">
              <span className="badge-pill bg-foreground text-background text-xs mb-6 inline-flex">
                <Sparkles className="w-3 h-3 mr-1" />
                Start today
              </span>
              <h3 className="text-2xl font-semibold mb-1">Join</h3>
              <h3 className="text-2xl font-semibold mb-6">FloorCraft</h3>
              <div className="w-full h-32 bg-gradient-to-br from-coral/20 to-lavender/20 rounded-xl flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-coral rounded-xl transform rotate-12 shadow-lg" />
              </div>
            </div>

            {/* Main pricing card */}
            <div className="card-elevated max-w-md w-full overflow-hidden">
              {/* Card header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Monthly Club</h3>
                  <span className="badge-pill bg-secondary text-xs uppercase tracking-wider">
                    Pause or cancel anytime
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">$2,995</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>

              {/* Features */}
              <div className="p-6 space-y-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-sage" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="p-6 pt-0">
                <Button variant="hero" size="xl" className="w-full">
                  <Sparkles className="w-4 h-4" />
                  Join today
                </Button>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
            <div className="card-elevated p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-lavender/20 flex items-center justify-center flex-shrink-0">
                <Pause className="w-4 h-4 text-lavender" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Pause anytime</h4>
                <p className="text-sm text-muted-foreground">
                  Going on vacation? Pause your subscription and resume when ready.
                </p>
              </div>
            </div>
            <div className="card-elevated p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                <RefreshCcw className="w-4 h-4 text-sage" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Try it risk-free</h4>
                <p className="text-sm text-muted-foreground">
                  Not loving it after a week? Get 75% back, no questions asked.
                </p>
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

export default Pricing;
