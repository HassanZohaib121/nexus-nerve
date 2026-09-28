"use client";

import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import MagneticButton from "@/components/ui/MagneticButton";

export default function WorkSection() {
  const p1 = projects[0]; // Aether - Full width
  const p2 = projects[1]; // Monument - Large
  const p3 = projects[2]; // Forma - Medium
  const p4 = projects[3]; // Noir Atelier - Large offset
  const p5 = projects[4]; // Synapse - Small
  const p6 = projects[5]; // Vapor & Stone - Wide

  return (
    <section className="w-full py-20 md:py-32 px-6 md:px-10 lg:px-12 border-t border-current/15">
      <SectionHeading
        number="01"
        tag="PORTFOLIO"
        title={["SELECTED", "WORKS"]}
        subtitle="A curated selection of identities, spatial digital archives, and interactive products created between 2024 and 2026."
      />

      {/* Composition 1: Full-width Heroic Project */}
      {p1 && (
        <div className="w-full">
          <ProjectCard project={p1} layoutVariant="full" />
        </div>
      )}

      {/* Composition 2: Asymmetric Two-Column Split (7 cols vs 5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {p2 && (
          <div className="lg:col-span-7">
            <ProjectCard project={p2} layoutVariant="two-col" />
          </div>
        )}
        {p3 && (
          <div className="lg:col-span-5 lg:pt-24">
            <ProjectCard project={p3} layoutVariant="offset" />
          </div>
        )}
      </div>

      {/* Composition 3: Asymmetric Editorial Single Project with statement */}
      {p4 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-12">
          <div className="lg:col-span-4 order-2 lg:order-1">
            <span className="metadata-tag text-[#57cccc] block mb-3">// FEATURED DIRECTION</span>
            <p className="text-xl md:text-2xl font-serif italic text-current/80 leading-relaxed mb-6">
              "Tactile austerity meets modern digital conversion. Every frame is treated with the rigor of a printed art catalogue."
            </p>
            <div className="h-px w-16 bg-current/20 mb-6" />
            <p className="text-xs font-mono uppercase text-current/50">
              Maison Noir — Paris, France
            </p>
          </div>
          <div className="lg:col-span-8 order-1 lg:order-2">
            <ProjectCard project={p4} layoutVariant="standard" />
          </div>
        </div>
      )}

      {/* Composition 4: Asymmetric Two-Column Offset Pair */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {p5 && (
          <div className="lg:col-span-5 lg:pt-16">
            <ProjectCard project={p5} layoutVariant="offset" />
          </div>
        )}
        {p6 && (
          <div className="lg:col-span-7">
            <ProjectCard project={p6} layoutVariant="two-col" />
          </div>
        )}
      </div>

      {/* Bottom CTA to full archive */}
      <div className="mt-16 md:mt-24 pt-12 border-t border-current/15 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="metadata-tag text-xs text-current/50">
          EXPLORE COMPLETE PORTFOLIO WITH CASE STUDIES & PROCESS
        </p>
        <MagneticButton href="/work" size="lg" withArrow>
          VIEW ALL ARCHIVED PROJECTS
        </MagneticButton>
      </div>
    </section>
  );
}
