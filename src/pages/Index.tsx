import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesMarquee from "@/components/ServicesMarquee";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import TransformationStages from "@/components/TransformationStages";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServicesMarquee />
      <ProblemSection />
      <HowItWorks />
      <TransformationStages />
      <Benefits />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
