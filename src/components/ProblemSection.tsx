import problemProportions from "@/assets/problem-proportions.jpg";
import problemFlow from "@/assets/problem-flow.jpg";
import problemFurniture from "@/assets/problem-furniture.jpg";
import problemConstruction from "@/assets/problem-construction.jpg";

const problems = [
  {
    image: problemProportions,
    title: "Room proportions",
    description: "Rooms look fine on paper but feel cramped or oversized once you're inside.",
  },
  {
    image: problemFlow,
    title: "Movement flow",
    description: "Hallways and doorways create awkward bottlenecks you never saw coming.",
  },
  {
    image: problemFurniture,
    title: "Furniture fit",
    description: "That sectional won't fit. That corner is unusable. You discover it after move-in.",
  },
  {
    image: problemConstruction,
    title: "Costly changes",
    description: "Changes after construction cost 5-10x more and add weeks of stress.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="eyebrow-text text-coral-500">THE PROBLEM</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            The 2D Blindspot
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Most homeowners only have a 2D plan. They cannot accurately envision what their space will truly feel like.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-cream-200"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={problem.image}
                  alt={problem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {problem.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
