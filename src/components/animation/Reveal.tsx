"use client";

import { useEffect, useRef } from "react";
import { animate } from "@/lib/anime";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  duration = 900,
  y = 60,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    element.style.opacity = "0";
    element.style.transform = `translateY(${y}px)`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        animate(element, {
          opacity: [0, 1],
          translateY: [y, 0],
          duration,
          delay,
          ease: "out(4)",
        });

        observer.disconnect();
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, duration, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
