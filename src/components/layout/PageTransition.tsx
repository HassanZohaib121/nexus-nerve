"use client";

import { useEffect, useRef, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { animate } from "animejs";

export default function PageTransition({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!containerRef.current) return;

    animate(containerRef.current, {
      opacity: [0, 1],
      translateY: [15, 0],
      duration: 600,
      ease: "out(3)",
    });
  }, [pathname]);

  return (
    <div ref={containerRef} className="w-full opacity-0">
      {children}
    </div>
  );
}
