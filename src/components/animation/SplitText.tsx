"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "@/lib/anime";

interface SplitTextProps {
  text: string;
  className?: string;
}

export default function SplitText({ text, className }: SplitTextProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const words = text.split(" ");

    element.innerHTML = words
      .map(
        (word) => `
          <span
            class="inline-block overflow-hidden mr-[0.2em]"
          >
            <span
              class="split-word inline-block"
              style="transform: translateY(110%)"
            >
              ${word}
            </span>
          </span>
        `,
      )
      .join("");

    animate(element.querySelectorAll(".split-word"), {
      translateY: ["110%", "0%"],
      opacity: [0, 1],
      delay: stagger(80),
      duration: 900,
      ease: "out(4)",
    });
  }, [text]);

  return (
    <h1 ref={ref} className={className}>
      {text}
    </h1>
  );
}
