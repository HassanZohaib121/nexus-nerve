"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sub: string;
}

const stats: StatItem[] = [
  { value: 12, suffix: "+", label: "YEARS PRACTICE", sub: "FOUNDED IN 2014" },
  { value: 84, suffix: "+", label: "COMPLETED PROJECTS", sub: "GLOBAL COMMISSIONS" },
  { value: 24, suffix: "", label: "COUNTRIES REACHED", sub: "EUROPE, ASIA & US" },
  { value: 18, suffix: "", label: "DESIGN ACCOLADES", sub: "AWWWARDS, FWA & D&AD" },
];

export default function StatsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Animate numeric counters with Anime.js
          const currentObj = { c0: 0, c1: 0, c2: 0, c3: 0 };
          animate(currentObj, {
            c0: stats[0].value,
            c1: stats[1].value,
            c2: stats[2].value,
            c3: stats[3].value,
            duration: 1800,
            ease: "out(4)",
            onUpdate: () => {
              setCounts([
                Math.round(currentObj.c0),
                Math.round(currentObj.c1),
                Math.round(currentObj.c2),
                Math.round(currentObj.c3),
              ]);
            },
          });

          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full py-20 md:py-32 px-6 md:px-10 lg:px-12 border-t border-current/15"
    >
      <div className="flex items-center justify-between border-b border-current/15 pb-4 mb-12">
        <div className="flex items-center gap-3">
          <span className="metadata-tag text-[#57cccc] font-bold">[04]</span>
          <span className="metadata-tag text-current/60">STUDIO METRICS</span>
        </div>
        <span className="metadata-tag text-current/40">2014 — 2026</span>
      </div>

      {/* Typography-driven Stats Grid without cards or box shadows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {stats.map((item, idx) => (
          <div
            key={item.label}
            className="flex flex-col justify-between border-l border-current/15 pl-6 md:pl-8 py-2"
          >
            <div>
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-sans tracking-tighter text-current leading-none">
                {counts[idx]}
                <span className="text-[#57cccc] text-0.75em">{item.suffix}</span>
              </div>
              <h4 className="metadata-tag text-xs font-bold text-current mt-4">
                {item.label}
              </h4>
            </div>
            <p className="text-[11px] font-mono uppercase text-current/40 mt-2">
              {item.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
