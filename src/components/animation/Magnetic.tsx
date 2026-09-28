"use client";

import { useRef } from "react";
import { animate } from "@/lib/anime";

export default function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = event.clientX - rect.left - rect.width / 2;

    const y = event.clientY - rect.top - rect.height / 2;

    animate(ref.current, {
      translateX: x * 0.2,
      translateY: y * 0.2,
      duration: 500,
      ease: "out(4)",
    });
  }

  function handleLeave() {
    if (!ref.current) return;

    animate(ref.current, {
      translateX: 0,
      translateY: 0,
      duration: 700,
      ease: "out(4)",
    });
  }

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {children}
    </div>
  );
}
