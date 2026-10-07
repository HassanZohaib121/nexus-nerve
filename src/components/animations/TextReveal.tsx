"use client";

import { RefObject, useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

interface TextRevealProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "div";
}

export default function TextReveal({
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  duration = 1000,
  staggerDelay = 90,
  as: Component = "h2",
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || animatedRef.current) return;

    const lineElements =
      containerRef.current.querySelectorAll<HTMLElement>(".reveal-text-line");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;

          animate(lineElements, {
            translateY: ["110%", "0%"],
            opacity: [0, 1],
            duration,
            delay: stagger(staggerDelay, { start: delay }),
            ease: "out(4)",
          });

          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [delay, duration, staggerDelay]);

  return (
    <Component
      ref={containerRef as RefObject<HTMLDivElement | null>}
      className={`overflow-hidden ${className}`}
    >
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden py-1">
          <span
            className={`reveal-text-line inline-block opacity-0 ${lineClassName}`}
            style={{ willChange: "transform, opacity" }}
          >
            {line}
          </span>
        </span>
      ))}
    </Component>
  );
}
