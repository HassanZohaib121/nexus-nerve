"use client";

import { useEffect, useRef, ReactNode } from "react";
import { animate } from "animejs";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  cursorText?: string;
}

export default function ImageReveal({
  children,
  className = "",
  delay = 0,
  duration = 1300,
  cursorText,
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const imageInner = imageInnerRef.current;
    if (!container || !imageInner || animatedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;

          // Clip-path curtain reveal
          animate(container, {
            clipPath: ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"],
            opacity: [0, 1],
            duration: duration * 0.85,
            delay,
            ease: "out(4)",
          });

          // Inner image scale down from 1.08 to 1
          animate(imageInner, {
            scale: [1.12, 1],
            duration,
            delay,
            ease: "out(4)",
          });

          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [delay, duration]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden relative opacity-0 ${className}`}
      data-cursor={cursorText}
      style={{
        clipPath: "inset(100% 0% 0% 0%)",
        willChange: "clip-path, opacity",
      }}
    >
      <div
        ref={imageInnerRef}
        className="w-full h-full transform origin-center transition-transform duration-700 ease-out"
        style={{ willChange: "transform" }}
      >
        {children}
      </div>
    </div>
  );
}
