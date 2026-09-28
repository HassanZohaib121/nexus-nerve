"use client";

import { useEffect, useRef, ReactNode } from "react";
import { animate } from "animejs";

interface RevealProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  yOffset?: number;
  threshold?: number;
  className?: string;
}

export default function Reveal({
  children,
  duration = 900,
  delay = 0,
  yOffset = 40,
  threshold = 0.15,
  className = "",
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el || animatedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          animate(el, {
            opacity: [0, 1],
            translateY: [yOffset, 0],
            duration,
            delay,
            ease: "out(4)",
          });
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, duration, yOffset, threshold]);

  return (
    <div
      ref={elementRef}
      className={`opacity-0 ${className}`}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </div>
  );
}
