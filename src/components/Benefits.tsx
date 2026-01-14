import { Users, ShieldCheck, BadgeCheck, Timer, Move, Link2 } from "lucide-react";

const benefits = [{
  icon: Users,
  title: "Family aligned",
  description: "Everyone sees the same home.",
  tag: "Less debate",
  color: "bg-coral/10"
}, {
  icon: ShieldCheck,
  title: "Catch mistakes early",
  description: "Fix layout issues before construction starts.",
  tag: "Saves rework",
  color: "bg-sky/10"
}, {
  icon: BadgeCheck,
  title: "Build with confidence",
  description: "No more 'hope it looks right.'",
  tag: "Less stress",
  color: "bg-lavender/10"
}, {
  icon: Timer,
  title: "Faster approvals",
  description: "Finalize layouts in fewer cycles.",
  tag: "Saves time",
  color: "bg-sage/10"
}, {
  icon: Move,
  title: "Feel the space",
  description: "Flow and proportions become obvious.",
  tag: "Better decisions",
  color: "bg-coral/10"
}, {
  icon: Link2,
  title: "Shareable preview",
  description: "One link for family + architect.",
  tag: "No app needed",
  color: "bg-sky/10"
}];

const Benefits = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <div className="inner-container">
          {/* Intro line */}
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Six reasons homeowners love seeing their home in 360° — before construction begins.
          </p>

          {/* Section header */}
          <div className="text-center mb-16">
            <span className="eyebrow">Benefits</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              You'll feel confident <span className="text-italic">before</span> you build.
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              See the layout clearly, align your family, and avoid expensive last-minute changes.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(benefit => (
              <div 
                key={benefit.title} 
                className="flex flex-col p-6 rounded-2xl bg-card border border-border/50 hover:shadow-card transition-shadow min-h-[180px]"
              >
                <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center mb-4`}>
                  <benefit.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{benefit.description}</p>
                <span className="mt-auto inline-flex w-fit text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
                  {benefit.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid-line-left" />
        <div className="grid-line-right" />
      </div>
    </section>
  );
};

export default Benefits;
