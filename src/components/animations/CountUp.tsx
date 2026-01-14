import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useScrollReveal";

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const CountUp = ({
  value,
  prefix = "",
  suffix = "",
  duration = 0.8,
  className = "",
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const rounded = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView && !prefersReducedMotion) {
      spring.set(value);
    } else if (prefersReducedMotion) {
      setDisplayValue(value);
    }
  }, [isInView, value, spring, prefersReducedMotion]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [rounded]);

  if (prefersReducedMotion) {
    return (
      <span ref={ref} className={className}>
        {prefix}{value.toLocaleString()}{suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
};
