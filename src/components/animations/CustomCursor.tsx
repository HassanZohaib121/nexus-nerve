"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(true);

  useEffect(() => {
    // Check if device is touch
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    let mouseX = -100;
    let mouseY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      if (ringRef.current) {
        animate(ringRef.current, {
          translateX: mouseX,
          translateY: mouseY,
          duration: 350,
          ease: "out(3)",
        });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest<HTMLElement>("[data-cursor]");
      const linkTarget = target.closest("a, button, [role='button'], input, textarea, select");

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);

        if (ringRef.current) {
          animate(ringRef.current, {
            scale: 2.8,
            duration: 300,
            ease: "out(4)",
          });
        }
      } else if (linkTarget) {
        setCursorText("");
        setIsHovered(true);

        if (ringRef.current) {
          animate(ringRef.current, {
            scale: 1.8,
            duration: 300,
            ease: "out(4)",
          });
        }
      } else {
        setCursorText("");
        setIsHovered(false);

        if (ringRef.current) {
          animate(ringRef.current, {
            scale: 1,
            duration: 300,
            ease: "out(4)",
          });
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Center dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-[#111111] dark:bg-[#f4f2ed] transition-opacity duration-200 ${
          isHovered && cursorText ? "opacity-0" : "opacity-100"
        }`}
        style={{ willChange: "transform" }}
      />

      {/* Outer ring / label container */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-5 -mt-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#111111]/30 dark:border-[#f4f2ed]/40 transition-colors duration-200 ${
          cursorText
            ? "bg-[#111111] text-[#f4f2ed] dark:bg-[#f4f2ed] dark:text-[#111111] border-transparent"
            : isHovered
            ? "border-[#57cccc] bg-[#57cccc]/10"
            : "bg-transparent"
        }`}
        style={{ willChange: "transform" }}
      >
        {cursorText && (
          <span className="text-[7.5px] font-bold tracking-widest uppercase text-center px-1 select-none whitespace-nowrap">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
