"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const categories = [
  "ALL",
  "BRAND IDENTITY & DIGITAL",
  "SPATIAL ARCHITECTURE",
  "CREATIVE DEVELOPMENT",
  "ART DIRECTION & FASHION",
  "VISUAL IDENTITY & SYSTEMS",
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [viewMode, setViewMode] = useState<"editorial" | "list">("editorial");

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) =>
          p.category.toUpperCase().includes(activeCategory.toUpperCase()),
        );

  return (
    <div className="w-full pt-32 pb-24 px-6 md:px-10 lg:px-12">
      <SectionHeading
        number="01"
        tag="PORTFOLIO ARCHIVE"
        title={["COMPLETE", "WORKS"]}
        subtitle="A comprehensive index of commercial and cultural projects developed for international partners."
      />

      {/* Filter Bar & View Toggle */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-current/15 mb-16">
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`metadata-tag px-3 py-1.5 rounded-full border transition-all duration-300 ${
                  isActive
                    ? "bg-[#111111] text-[#f4f2ed] border-[#111111] dark:bg-[#f4f2ed] dark:text-[#111111]"
                    : "border-current/20 text-current/70 hover:border-current hover:text-current"
                }`}
                data-cursor="FILTER"
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 metadata-tag text-xs text-current/60">
          <span>VIEW:</span>
          <button
            onClick={() => setViewMode("editorial")}
            className={`px-2 py-1 rounded transition-colors ${
              viewMode === "editorial"
                ? "text-[#57cccc] font-bold underline"
                : "hover:text-current"
            }`}
          >
            EDITORIAL
          </button>
          <span>/</span>
          <button
            onClick={() => setViewMode("list")}
            className={`px-2 py-1 rounded transition-colors ${
              viewMode === "list"
                ? "text-[#57cccc] font-bold underline"
                : "hover:text-current"
            }`}
          >
            INDEX LIST
          </button>
        </div>
      </div>

      {/* Editorial Grid View */}
      {viewMode === "editorial" ? (
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => {
            // Asymmetric layout patterns
            const layout =
              idx % 3 === 0 ? "full" : idx % 3 === 1 ? "two-col" : "offset";
            return (
              <ProjectCard
                key={project.id}
                project={project}
                layoutVariant={layout}
              />
            );
          })}
        </div>
      ) : (
        /* Index List View */
        <div className="divide-y divide-current/15 border-t border-b border-current/15">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              className="group py-6 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:bg-current/2 px-4"
              data-cursor="VIEW"
            >
              <div className="flex items-baseline gap-6">
                <span className="metadata-tag text-[#57cccc] font-bold">
                  {project.id}
                </span>
                <span className="text-xl md:text-3xl font-black uppercase tracking-tight group-hover:text-[#57cccc] transition-colors">
                  {project.title}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-6 md:gap-12 text-xs font-mono text-current/60">
                <span className="hidden sm:inline-block">{project.client}</span>
                <span className="text-current/40">{project.category}</span>
                <span className="text-current/80 font-bold">
                  {project.year}
                </span>
                <div className="h-8 w-8 rounded-full border border-current/20 flex items-center justify-center group-hover:border-[#57cccc] group-hover:bg-[#57cccc] group-hover:text-[#111111] transition-all">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Commission Footer Prompt */}
      <div className="mt-24 pt-16 border-t border-current/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <span className="metadata-tag text-[#57cccc] block mb-2">
            HAVE A VISION?
          </span>
          <p className="text-xl md:text-2xl font-black uppercase tracking-tight">
            START YOUR NEXT PROJECT WITH US
          </p>
        </div>
        <MagneticButton href="/contact" size="lg" withArrow>
          GET IN TOUCH
        </MagneticButton>
      </div>
    </div>
  );
}
