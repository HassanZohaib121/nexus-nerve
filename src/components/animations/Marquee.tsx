"use client";

import { useRef, useState, useEffect } from "react";
import { animate } from "animejs";

interface MarqueeProps {
  items: string[];
  speed?: number; // duration in seconds
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  itemClassName?: string;
  separator?: string;
}

export default function Marquee({
  items,
  speed = 28,
  direction = "left",
  pauseOnHover = true,
  className = "",
  itemClassName = "",
  separator = "—",
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<any>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!trackRef.current) return;

    const fromVal = direction === "left" ? "0%" : "-50%";
    const toVal = direction === "left" ? "-50%" : "0%";

    const anim = animate(trackRef.current, {
      translateX: [fromVal, toVal],
      duration: speed * 1000,
      ease: "linear",
      loop: true,
      autoplay: true,
    });

    animRef.current = anim;

    return () => {
      if (animRef.current) {
        animRef.current.pause();
      }
    };
  }, [direction, speed]);

  const handleMouseEnter = () => {
    if (pauseOnHover && animRef.current) {
      animRef.current.pause();
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && animRef.current) {
      animRef.current.play();
      setIsPaused(false);
    }
  };

  // Duplicate items 4 times to ensure seamless infinite looping on ultra-wide screens
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden select-none py-4 border-y border-current/10 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={trackRef}
        className="flex w-max items-center whitespace-nowrap will-change-transform"
      >
        {repeated.map((text, idx) => (
          <div key={idx} className="flex items-center">
            <span
              className={`inline-block font-black uppercase tracking-tight text-3xl md:text-5xl lg:text-7xl px-4 md:px-8 transition-opacity duration-300 ${
                isPaused ? "opacity-80" : "opacity-100"
              } ${itemClassName}`}
            >
              {text}
            </span>
            <span className="text-xl md:text-3xl lg:text-4xl text-[#57cccc] opacity-80 px-2">
              {separator}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
