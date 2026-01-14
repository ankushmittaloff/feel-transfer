import { Users, PiggyBank, ShieldCheck, Clock, Move, Link2 } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Everyone sees the same home.",
    description: "Share the 360° link with your family—so decisions stop becoming debates and everyone agrees on the same reality.",
    color: "bg-coral/10",
  },
  {
    icon: PiggyBank,
    title: "Fix issues when fixes are cheap.",
    description: "Spot tight passages, awkward door swings, and furniture misfits early—before changes turn into rework and extra cost.",
    color: "bg-sky/10",
  },
  {
    icon: ShieldCheck,
    title: "No more \"hope it looks right.\"",
    description: "See the layout before you commit—so you build with calm confidence, not construction anxiety.",
    color: "bg-lavender/10",
  },
  {
    icon: Clock,
    title: "Decide faster. Build sooner.",
    description: "When you can visualize clearly, you reduce back-and-forth with your architect and finalize layouts in fewer cycles.",
    color: "bg-sage/10",
  },
  {
    icon: Move,
    title: "Feel the space—not just the lines.",
    description: "Understand room proportions, movement flow, and \"how it will feel\" in a way 2D plans simply can't show.",
    color: "bg-coral/10",
  },
  {
    icon: Link2,
    title: "One link. Anywhere. Anytime.",
    description: "Open on any phone or laptop and share instantly with your architect, contractor, or family—no app, no confusion.",
    color: "bg-sky/10",
  },
];

const Benefits = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <div className="inner-container">
          {/* Story text */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              A floor plan shouldn't be a gamble. Upload yours and get a 360° preview that makes space, flow, and layout decisions obvious before they become expensive to change.
            </p>
          </div>

          {/* Section header */}
          <div className="text-center mb-12">
            <span className="eyebrow">WHY THIS CHANGES EVERYTHING</span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              You'll never build from 2D again.
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Make layout decisions with confidence—save money on rework, reduce stress, and keep your family and architect aligned before the first brick.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:shadow-card transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center flex-shrink-0`}>
                  <benefit.icon className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
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
