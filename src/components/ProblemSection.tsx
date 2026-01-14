import blindspotImage from "@/assets/2d-blindspot.jpg";

const problems = [
  {
    title: "Room proportions and \"feel\"",
    description: "Rooms look fine on paper but feel cramped or oversized once you're standing inside them.",
  },
  {
    title: "Movement and space flow",
    description: "Hallways, doors, and pathways create awkward bottlenecks you never saw coming.",
  },
  {
    title: "Furniture fit and dead zones",
    description: "That sectional won't fit. That corner is unusable. You discover it after move-in.",
  },
  {
    title: "The layout feels wrong once built",
    description: "By then, changes cost 5-10x more and cause weeks of stress and delays.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
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

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left Visual - 2 columns */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-coral-100 to-coral-50 rounded-3xl -z-10" />
              <img
                src={blindspotImage}
                alt="Homeowner confused by 2D floor plan"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Right Content - 3 columns */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-coral-200 hover:border-coral-400 transition-colors"
                >
                  {/* X Icon */}
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-coral-500 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Banner */}
        <div className="mt-16 md:mt-20">
          <div className="bg-gradient-coral rounded-2xl p-8 md:p-10 text-center">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
              Changes after construction cost{" "}
              <span className="text-cream-100 underline decoration-2 underline-offset-4">
                5-10x more
              </span>{" "}
              and add weeks of stress.
            </p>
            <p className="text-cream-200 mt-2 text-sm md:text-base">
              Most homeowners wish they had visualized their layout before breaking ground.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
