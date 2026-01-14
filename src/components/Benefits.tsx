import { Zap, Shield, Palette, Clock, RefreshCcw, Award } from "lucide-react";
const benefits = [{
  icon: Zap,
  title: "Lightning fast",
  description: "Receive your 3D renders within 24-48 hours on average.",
  color: "bg-coral/10"
}, {
  icon: Shield,
  title: "Fixed monthly rate",
  description: "No surprises. Pay the same predictable price each month.",
  color: "bg-sky/10"
}, {
  icon: Palette,
  title: "Multiple styles",
  description: "Choose from modern, classic, minimal, or custom aesthetics.",
  color: "bg-lavender/10"
}, {
  icon: Clock,
  title: "Unlimited requests",
  description: "Queue as many floor plans as you need. We handle them all.",
  color: "bg-sage/10"
}, {
  icon: RefreshCcw,
  title: "Unlimited revisions",
  description: "Not happy? We'll revise until it's perfect. No extra cost.",
  color: "bg-coral/10"
}, {
  icon: Award,
  title: "Premium quality",
  description: "Photorealistic renders that win clients and close deals.",
  color: "bg-sky/10"
}];
const Benefits = () => {
  return <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <div className="inner-container">
          {/* Story text */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We <span className="text-italic text-foreground">revolutionized</span> floor plan visualization 
              by combining AI with expert design. Our subscription model gives you unlimited access to 
              stunning 3D renders—no hourly rates, no surprises.
            </p>
          </div>

          {/* Section header */}
          <div className="text-center mb-12">
            <span className="eyebrow">Membership benefits</span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              It's <span className="text-italic">Make layout decisions with confidence save money on rework, reduce stress, and keep your family and architect aligned before the first brick.</span> better
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Replace expensive 3D artists and slow turnaround times with one simple subscription.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(benefit => <div key={benefit.title} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:shadow-card transition-shadow">
                <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center flex-shrink-0`}>
                  <benefit.icon className="w-5 h-5 text-foreground" />
                </div>
                
              </div>)}
          </div>
        </div>
        <div className="grid-line-left" />
        <div className="grid-line-right" />
      </div>
    </section>;
};
export default Benefits;