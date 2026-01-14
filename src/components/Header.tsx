import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-6">
      <div className="container-main">
        <div className="inner-container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-coral rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-semibold text-foreground">FloorCraft</span>
            </a>

            {/* Nav buttons */}
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="hidden md:inline-flex">
                Login
              </Button>
              <Button variant="heroOutline" size="sm" className="hidden sm:inline-flex">
                <Phone className="w-4 h-4" />
                Book a call
              </Button>
              <Button variant="hero" size="sm">
                See pricing
              </Button>
            </div>
          </div>
        </div>
        <div className="grid-line-left" />
        <div className="grid-line-right" />
      </div>
    </header>
  );
};

export default Header;
