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

const ServicesMarquee = () => {
  return (
    <section className="py-6 bg-background border-y border-border/30">
      <div className="relative overflow-hidden">
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
    </section>
  );
};

export default ServicesMarquee;
