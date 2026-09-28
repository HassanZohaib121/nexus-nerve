"use client";

import { useRef, ReactNode, MouseEvent } from "react";
import { animate } from "animejs";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export default function Magnetic({
  children,
  strength = 0.25,
  className = "",
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * strength;
    const y = (e.clientY - (top + height / 2)) * strength;

    animate(ref.current, {
      translateX: x,
      translateY: y,
      duration: 500,
      ease: "out(3)",
    });
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    animate(ref.current, {
      translateX: 0,
      translateY: 0,
      duration: 700,
      ease: "out(4)",
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}
