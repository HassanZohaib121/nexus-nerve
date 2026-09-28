"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import TextReveal from "@/components/animations/TextReveal";
import Reveal from "@/components/animations/Reveal";
import ImageReveal from "@/components/animations/ImageReveal";
import MagneticButton from "@/components/ui/MagneticButton";

const disciplines = [
  { name: "STRATEGY", desc: "Positioning, Naming, Narrative architecture" },
  { name: "DESIGN", desc: "Typography, Identity systems, Spatial graphics" },
  { name: "TECHNOLOGY", desc: "Next.js engineering, WebGL, Creative code" },
  { name: "MOTION", desc: "Kinetic typography, 3D physics, Soundscapes" },
  { name: "DEVELOPMENT", desc: "Headless platforms, Micro-interactions, Edge API" },
];

export default function AboutSection() {
  return (
    <section className="w-full py-20 md:py-32 px-6 md:px-10 lg:px-12 border-t border-current/15">
      <SectionHeading
        number="03"
        tag="ABOUT STUDIO"
        title={["STUDIO", "ETHOS"]}
        subtitle="Independent, multidisciplinary, and deliberately compact. We take on select commissions to ensure singular attention to craft."
      />

      {/* Massive Editorial Manifesto Statement */}
      <div className="my-10 md:my-16">
        <TextReveal
          lines={[
            "WE ARE AN INDEPENDENT",
            "CREATIVE STUDIO BUILDING",
            "IDENTITIES, EXPERIENCES",
            "AND BRANDS FOR THE FUTURE."
          ]}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.88] text-current"
          staggerDelay={85}
        />
      </div>

      {/* Visual & Narrative Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-16 md:mt-24 pt-12 border-t border-current/10">
        {/* Left Column: Editorial Studio Photo */}
        <div className="lg:col-span-5">
          <ImageReveal className="aspect-[4/5] w-full" cursorText="STUDIO">
            <div className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Nexus Nerve Studio space"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </ImageReveal>
          <div className="mt-4 flex items-center justify-between text-xs font-mono text-current/50">
            <span>STUDIO 4B, ISLAMABAD</span>
            <span>EST. 2014</span>
          </div>
        </div>

        {/* Right Column: Narrative & Disciplines Breakdown */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full">
          <div>
            <h3 className="metadata-tag text-[#57cccc] mb-4">// METHODOLOGY</h3>
            <p className="text-lg md:text-2xl text-current/80 leading-relaxed font-light mb-10">
              We reject the bloat of traditional agency models. By pairing direct
              collaborations with deep technical execution, we bypass middle
              layers and bring daring conceptual ideas directly into production.
            </p>

            <div className="border-t border-current/15 pt-8">
              <h4 className="metadata-tag text-current/50 mb-6">
                CORE DISCIPLINES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {disciplines.map((d, i) => (
                  <div key={d.name} className="border-b border-current/10 pb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="metadata-tag text-[#57cccc]">0{i + 1}</span>
                      <h5 className="font-bold text-sm uppercase tracking-wider">
                        {d.name}
                      </h5>
                    </div>
                    <p className="text-xs text-current/60">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-current/15 flex flex-wrap items-center gap-6">
            <MagneticButton href="/about" size="md" withArrow>
              LEARN MORE ABOUT OUR PRACTICE
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
