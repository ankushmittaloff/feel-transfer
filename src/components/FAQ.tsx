import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How fast will I receive my 3D renders?",
    answer: "Most floor plan renders are completed within 24-48 hours. Complex multi-floor layouts or custom requests may take an additional day or two.",
  },
  {
    question: "What file formats do you accept?",
    answer: "We accept PDF, PNG, JPG, DWG, and most common floor plan formats. Even a hand-drawn sketch works—our AI is trained to interpret various input types.",
  },
  {
    question: "Can I request furnished layouts?",
    answer: "Absolutely! Every 3D render includes furniture staging in your preferred style—modern, classic, minimal, or custom. Just let us know your preferences.",
  },
  {
    question: "Is there a limit to how many floor plans I can submit?",
    answer: "No limits! Add as many floor plans to your queue as you need. We'll work through them one by one, delivering each within our average turnaround time.",
  },
  {
    question: "Do I own the 3D renders?",
    answer: "Yes, 100%. Every render we create is yours to use commercially, in marketing materials, client presentations, or anywhere else you need.",
  },
];

const FAQ = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <div className="inner-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left - FAQ */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                <span className="text-italic">Frequently</span> asked questions
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="card-elevated px-6 border-none"
                  >
                    <AccordionTrigger className="text-left font-medium py-5 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Right - CTA card */}
            <div className="lg:w-[360px] flex-shrink-0">
              <div className="card-elevated overflow-hidden sticky top-8">
                <div className="bg-gradient-coral p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-foreground/20 mx-auto mb-4 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                      <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.99C20.45 21.04 19.89 21.07 19.33 21.07C10.16 21.07 2.82998 13.81 2.82998 4.67002C2.82998 4.11002 2.85998 3.55002 2.91998 3.00002C2.97998 2.44002 3.42998 2.00002 3.99998 2.00002H6.99998C7.55998 2.00002 8.02998 2.41002 8.09998 2.97002C8.15998 3.49002 8.26998 4.00002 8.41998 4.49002C8.56998 4.97002 8.43998 5.50002 8.04998 5.89002L6.59998 7.34002C7.89998 9.71002 9.83998 11.65 12.21 12.95L13.66 11.5C14.05 11.11 14.58 10.98 15.06 11.13C15.55 11.28 16.06 11.39 16.58 11.45C17.14 11.52 17.55 11.99 17.55 12.55V15.55C17.55 16.11 17.14 16.56 16.58 16.62C16.03 16.68 15.47 16.71 14.91 16.71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-foreground mb-4">
                    Book a 15-min intro call
                  </h3>
                  <Button variant="dark" size="lg" className="w-full">
                    Book a call
                  </Button>
                </div>

                <a
                  href="mailto:hello@floorcraft.io"
                  className="flex items-center justify-between p-5 hover:bg-secondary/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Prefer to email?</p>
                      <p className="text-xs text-muted-foreground">hello@floorcraft.io</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </a>
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

export default FAQ;
