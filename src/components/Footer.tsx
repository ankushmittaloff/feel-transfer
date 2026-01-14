import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer id="book" className="bg-foreground text-background section-padding">
      <div className="container-main">
        <div className="inner-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left content */}
            <div className="flex-1">
              {/* Logo */}
              <a href="/" className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-gradient-coral rounded-xl flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-xl font-semibold">FloorCraft</span>
              </a>

              <h2 className="text-3xl md:text-4xl font-semibold mb-4 max-w-md">
                See if FloorCraft is right for you{" "}
                <span className="text-italic opacity-70">(it totally is)</span>
              </h2>
              <p className="text-background/60 mb-8 max-w-md">
                Schedule a quick 15-minute guided tour through our platform and see how we can transform your floor plans.
              </p>

              {/* Footer links */}
              <div className="flex flex-col gap-2 text-sm text-background/50">
                <span>Based in San Francisco, CA</span>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-background transition-colors">Terms of service</a>
                  <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
                </div>
                <span className="mt-4">© 2024 FloorCraft. All rights reserved.</span>
              </div>
            </div>

            {/* Right - Booking placeholder */}
            <div className="lg:w-[440px] flex-shrink-0">
              <div className="bg-background/5 rounded-2xl border border-background/10 p-6">
                <p className="text-sm text-background/60 mb-6 text-center">
                  High volume of bookings, limited slots. For faster service, email{" "}
                  <a href="mailto:hello@floorcraft.io" className="text-coral hover:underline">
                    hello@floorcraft.io
                  </a>
                </p>

                {/* Calendar placeholder */}
                <div className="bg-background/5 rounded-xl p-8 text-center border border-background/10">
                  <div className="w-16 h-16 rounded-full bg-background/10 mx-auto mb-4 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-background/60">
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M16 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <p className="text-background/60 mb-4">Scheduling widget</p>
                  <Button variant="hero" size="lg" className="w-full">
                    Book your call
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-line-left opacity-20" />
        <div className="grid-line-right opacity-20" />
      </div>
    </footer>
  );
};

export default Footer;
