"use client";

import { useEffect, useRef } from "react";
import { animate, createTimeline, stagger } from "animejs";
import Magnetic from "@/components/animations/Magnetic";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const hero = heroRef.current;
    const meta = hero.querySelectorAll(".hero-meta");
    const lines = hero.querySelectorAll(".hero-line-inner");
    const desc = hero.querySelector(".hero-desc");
    const cta = hero.querySelector(".hero-cta");
    const scroll = hero.querySelector(".hero-scroll");

    const tl = createTimeline({
      defaults: {
        ease: "out(4)",
      },
    });

    tl.add(meta, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      delay: stagger(100),
    })
      .add(
        lines,
        {
          translateY: ["110%", "0%"],
          opacity: [0, 1],
          duration: 1000,
          delay: stagger(120),
        },
        "-=300"
      )
      .add(
        desc!,
        {
          opacity: [0, 1],
          translateY: [25, 0],
          duration: 800,
        },
        "-=500"
      )
      .add(
        cta!,
        {
          opacity: [0, 1],
          scale: [0.85, 1],
          duration: 700,
        },
        "-=500"
      )
      .add(
        scroll!,
        {
          opacity: [0, 1],
          translateY: [15, 0],
          duration: 600,
        },
        "-=400"
      );

    // Looping scroll line animation
    let scrollAnim: any = null;
    if (scrollIndicatorRef.current) {
      scrollAnim = animate(scrollIndicatorRef.current, {
        scaleY: [0, 1, 0],
        translateY: [0, 15, 30],
        opacity: [0, 1, 0],
        duration: 2200,
        loop: true,
        ease: "inOutSine",
      });
    }

    return () => {
      tl.pause();
      if (scrollAnim) scrollAnim.pause();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] md:min-h-screen w-full flex flex-col justify-between pt-32 pb-10 px-6 md:px-10 lg:px-12 overflow-hidden"
    >
      {/* Top metadata row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-current/10 pb-6">
        <div className="hero-meta opacity-0 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#57cccc] animate-pulse" />
          <span className="metadata-tag text-xs font-semibold">
            INDEPENDENT CREATIVE STUDIO
          </span>
        </div>

        <div className="hero-meta opacity-0 hidden sm:flex items-center gap-6 metadata-tag text-xs text-current/60">
          <span>PAKISTAN / WORLDWIDE</span>
          <span>© 2026</span>
        </div>
      </div>

      {/* Main hero typography & centerpiece */}
      <div className="my-auto py-12 md:py-16">
        <h1 className="display-hero font-black uppercase text-current tracking-tighter select-none">
          <span className="block overflow-hidden py-1">
            <span className="hero-line-inner inline-block opacity-0">
              WE BUILD
            </span>
          </span>
          <span className="block overflow-hidden py-1">
            <span className="hero-line-inner inline-block opacity-0">
              BRANDS THAT
            </span>
          </span>
          <span className="block overflow-hidden py-1 flex items-baseline flex-wrap gap-x-4 md:gap-x-8">
            <span className="hero-line-inner inline-block opacity-0 text-[#111111] dark:text-[#f4f2ed]">
              MOVE
            </span>
            <span className="hero-line-inner inline-block opacity-0 text-[#57cccc] italic font-serif font-light lowercase text-[0.85em]">
              people.
            </span>
          </span>
        </h1>

        {/* Narrative & Floating Magnetic CTA */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7 lg:col-span-6">
            <p className="hero-desc opacity-0 text-base md:text-xl text-current/80 font-normal leading-relaxed max-w-xl">
              We design identities, spatial environments, and digital flagships
              for ambitious organizations that refuse to blend into the background.
            </p>
          </div>

          <div className="md:col-span-5 lg:col-span-6 flex md:justify-end">
            <div className="hero-cta opacity-0">
              <Magnetic strength={0.35}>
                <Link
                  href="/work"
                  className="group relative flex h-28 w-28 md:h-36 md:w-36 items-center justify-center rounded-full bg-[#111111] dark:bg-[#f4f2ed] text-[#f4f2ed] dark:text-[#111111] hover:bg-[#57cccc] hover:text-[#111111] dark:hover:bg-[#57cccc] dark:hover:text-[#111111] transition-colors duration-500 shadow-xl"
                  data-cursor="EXPLORE"
                >
                  <div className="flex flex-col items-center justify-center text-center">
                    <span className="metadata-tag text-[10px] md:text-xs font-bold leading-none tracking-widest">
                      SELECTED
                    </span>
                    <span className="metadata-tag text-[10px] md:text-xs font-bold leading-none tracking-widest mt-1">
                      WORK
                    </span>
                    <ArrowDown className="h-4 w-4 mt-2 transition-transform duration-300 group-hover:translate-y-1" />
                  </div>
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom status & scroll indicator */}
      <div className="hero-scroll opacity-0 flex items-end justify-between border-t border-current/10 pt-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-[1.5px] bg-current/20 relative overflow-hidden">
            <div
              ref={scrollIndicatorRef}
              className="absolute top-0 left-0 w-full h-4 bg-[#57cccc] origin-top"
            />
          </div>
          <span className="metadata-tag text-[10px] text-current/50">
            SCROLL TO EXPLORE
          </span>
        </div>

        <div className="flex items-center gap-6 metadata-tag text-[10px] text-current/50">
          <span>CURATED ARCHIVE</span>
          <span>(01 / 06)</span>
        </div>
      </div>
    </section>
  );
}
