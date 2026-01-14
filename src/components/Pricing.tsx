import { Button } from "@/components/ui/button";
import { Check, RefreshCcw, Upload } from "lucide-react";

const features = [
  "Full 360° home preview (virtual tour)",
  "Generated in under 180 seconds",
  "Unlimited revisions",
  "Virtual tour exports",
  "Multiple furniture styles",
  "Up to 3 family members included",
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-main">
        <div className="inner-container">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="eyebrow">Pricing</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              One-time pricing. <span className="text-italic">Zero guesswork.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              ₹6,999 per floor — full 360° preview from your 2D plan.
            </p>
          </div>

          {/* Main pricing card - centered */}
          <div className="flex justify-center">
            <div className="card-elevated max-w-md w-full overflow-hidden ring-2 ring-primary/10 shadow-xl">
              {/* Card header */}
              <div className="p-6 border-b border-border">
                <h3 className="text-xl font-semibold mb-4">Per Floor</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold">₹6,999</span>
                  <span className="text-muted-foreground">/ floor</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Generated in under 180 seconds • Unlimited revisions
                </p>
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
              <div className="p-6 pt-0 text-center">
                <Button variant="hero" size="xl" className="w-full">
                  <Upload className="w-4 h-4" />
                  Upload Your Floor Plan
                </Button>
                <p className="text-xs text-muted-foreground mt-3">
                  Private upload. Shareable link. Works on mobile.
                </p>
              </div>
            </div>
          </div>

          {/* Refund card */}
          <div className="flex justify-center mt-12">
            <div className="card-elevated p-5 flex items-start gap-4 max-w-md w-full">
              <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                <RefreshCcw className="w-4 h-4 text-sage" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">100% refund, no questions asked</h4>
                <p className="text-sm text-muted-foreground">
                  If you're not satisfied, we'll refund you — no forms, no hassle.
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
