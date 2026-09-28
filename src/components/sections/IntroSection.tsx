"use client";

import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function IntroSection() {
  return (
    <section className="w-full py-24 md:py-36 px-6 md:px-10 lg:px-12 border-t border-current/15">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left index label */}
        <div className="lg:col-span-3">
          <div className="flex items-center gap-3">
            <span className="metadata-tag text-[#57cccc] font-bold">[00]</span>
            <span className="metadata-tag text-current/60">PHILOSOPHY</span>
          </div>
          <p className="mt-4 text-xs font-mono text-current/40 uppercase tracking-widest">
            AESTHETIC RIGOR & TECHNICAL MASTERY
          </p>
        </div>

        {/* Center/Right Statement */}
        <div className="lg:col-span-9">
          <TextReveal
            lines={[
              "WE OPERATE AT THE",
              "INTERSECTION OF ART,",
              "EDITORIAL DESIGN &",
              "ADVANCED TECHNOLOGY."
            ]}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.92] text-current"
            staggerDelay={80}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-current/10">
            <Reveal delay={200}>
              <p className="text-base md:text-lg text-current/80 leading-relaxed">
                We believe exceptional brands are not assembled from template
                patterns. They are distilled from clarity of purpose, sculpted
                with bespoke typography, and brought to life through kinetic
                craftsmanship.
              </p>
            </Reveal>

            <Reveal delay={350} className="flex flex-col justify-between items-start">
              <p className="text-base md:text-lg text-current/80 leading-relaxed mb-6">
                From monolithic architectural archives to dynamic generative
                systems, we partner with clients who value distinction over
                conformity.
              </p>
              <MagneticButton href="/about" variant="text" withArrow>
                READ STUDIO MANIFESTO
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
