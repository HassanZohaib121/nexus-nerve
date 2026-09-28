"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageReveal from "@/components/animations/ImageReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import StatsSection from "@/components/sections/StatsSection";

const awards = [
  { year: "2026", award: "SITE OF THE MONTH (NOMINEE)", project: "Aether Kinetic", org: "AWWWARDS" },
  { year: "2025", award: "FWA OF THE DAY", project: "Monument Pavilion", org: "FWA" },
  { year: "2025", award: "WOODEN PENCIL // TYPOGRAPHY", project: "Noir Lookbook", org: "D&AD" },
  { year: "2024", award: "CERTIFICATE OF TYPOGRAPHIC EXCELLENCE", project: "Forma Soundworks", org: "TDC NEW YORK" },
  { year: "2024", award: "BEST INNOVATION IN INTERFACE", project: "Vapor & Stone", org: "WEBBY AWARDS" },
];

const clients = [
  "Aether Robotics (Zurich)",
  "Studio Monument (Bern)",
  "Maison Noir (Paris)",
  "Forma Sound (Copenhagen)",
  "Synapse Labs (London)",
  "Venice Biennale (Venice)",
  "Apex Architectural (Tokyo)",
  "Solstice Audio (New York)",
];

export default function AboutPage() {
  return (
    <div className="w-full pt-32 pb-24 px-6 md:px-10 lg:px-12 text-current">
      <SectionHeading
        number="03"
        tag="STUDIO PROFILE"
        title={["ABOUT", "NEXUS NERVE"]}
        subtitle="Founded in 2014, Nexus Nerve is an independent creative studio operating globally from Pakistan and Europe."
      />

      {/* Hero Manifesto & Photo Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-current/15">
        <div className="lg:col-span-7">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-[0.95] mb-8">
            WE BELIEVE IN RADICAL CLARITY, MONUMENTAL TYPOGRAPHY, AND EXPERIENCES THAT ENGAGE THE SENSES.
          </h2>

          <div className="space-y-6 text-base md:text-lg text-current/80 font-light leading-relaxed">
            <p>
              Nexus Nerve was established as an antidote to corporate agency culture.
              We do not pitch for hundreds of accounts. We commit to a deliberately
              calibrated roster of vanguard clients each year.
            </p>
            <p>
              Every project is led directly by our principal designers and creative
              technologists. No account managers, no diluted creative visions, no
              generic design templates.
            </p>
            <p>
              We combine Swiss editorial typographic discipline with experimental
              code and tactile physical monographs. The result is work that endures
              long after short-lived trends have evaporated.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <ImageReveal className="aspect-[4/5] w-full" cursorText="ARCHIVE">
            <div className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
                alt="Nexus Nerve Creative Direction"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </ImageReveal>
          <div className="mt-4 flex items-center justify-between text-xs font-mono text-current/50">
            <span>PRINT & EXPERIMENTAL WORKSHOP</span>
            <span>2026</span>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <StatsSection />

      {/* Awards & Honors */}
      <div className="py-20 md:py-32 border-t border-current/15">
        <div className="flex items-center justify-between border-b border-current/15 pb-4 mb-12">
          <div className="flex items-center gap-3">
            <span className="metadata-tag text-[#57cccc] font-bold">[ACCOLADES]</span>
            <span className="metadata-tag text-current/60">RECOGNITION</span>
          </div>
          <span className="metadata-tag text-current/40">SELECTED HONORS</span>
        </div>

        <div className="divide-y divide-current/10">
          {awards.map((a, i) => (
            <div
              key={i}
              className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline text-xs font-mono"
            >
              <span className="sm:col-span-2 text-current/40">{a.year}</span>
              <span className="sm:col-span-5 font-bold uppercase text-sm font-sans tracking-wide">
                {a.award}
              </span>
              <span className="sm:col-span-3 text-current/60 uppercase">
                {a.project}
              </span>
              <span className="sm:col-span-2 text-[#57cccc] sm:text-right font-bold">
                {a.org}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Clients */}
      <div className="py-20 border-t border-current/15">
        <div className="flex items-center justify-between border-b border-current/15 pb-4 mb-12">
          <div className="flex items-center gap-3">
            <span className="metadata-tag text-[#57cccc] font-bold">[NETWORK]</span>
            <span className="metadata-tag text-current/60">SELECTED COLLABORATORS</span>
          </div>
          <span className="metadata-tag text-current/40">GLOBAL ROSTER</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((c) => (
            <div
              key={c}
              className="border-b border-current/10 pb-4 text-sm font-mono uppercase tracking-wider text-current/80"
            >
              <span className="text-[#57cccc] mr-2">—</span>
              {c}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="pt-16 border-t border-current/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <span className="metadata-tag text-[#57cccc] block mb-2">
            JOIN OUR ROSTER
          </span>
          <p className="text-2xl md:text-3xl font-black uppercase tracking-tight">
            WORK WITH OUR CORE TEAM
          </p>
        </div>
        <MagneticButton href="/contact" size="lg" withArrow>
          INITIATE A CONVERSATION
        </MagneticButton>
      </div>
    </div>
  );
}
