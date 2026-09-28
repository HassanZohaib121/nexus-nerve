"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";
import ImageReveal from "@/components/animations/ImageReveal";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  layoutVariant?: "full" | "two-col" | "offset" | "standard";
  className?: string;
}

export default function ProjectCard({
  project,
  layoutVariant = "standard",
  className = "",
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Aspect ratio and container heights based on layout
  const aspectClass =
    layoutVariant === "full"
      ? "aspect-[16/9] md:aspect-[21/9]"
      : layoutVariant === "two-col"
      ? "aspect-[4/3] md:aspect-[5/4]"
      : layoutVariant === "offset"
      ? "aspect-[3/4] md:aspect-[4/5]"
      : "aspect-[16/10]";

  return (
    <div
      className={`group relative w-full mb-16 md:mb-28 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/work/${project.slug}`}
        className="block"
        data-cursor="VIEW PROJECT"
      >
        {/* Editorial image frame */}
        <div className="relative overflow-hidden bg-[#e5e2da] dark:bg-[#1a1a1e]">
          <ImageReveal
            className={`w-full ${aspectClass}`}
            cursorText="VIEW PROJECT"
          >
            <div className="relative h-full w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority={project.id === "01"}
              />
              {/* Subtle dark tint on hover */}
              <div
                className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </ImageReveal>

          {/* Floating year badge on image */}
          <div className="absolute top-4 right-4 z-10 hidden md:block">
            <span className="metadata-tag bg-[#111111]/80 text-[#f4f2ed] backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              {project.year}
            </span>
          </div>
        </div>

        {/* Project info row */}
        <div className="mt-5 pt-4 border-t border-current/15 flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="flex items-baseline gap-4">
            <span className="metadata-tag text-[#57cccc] font-bold text-xs md:text-sm">
              {project.id}
            </span>
            <div>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight transition-colors duration-300 group-hover:text-[#57cccc]">
                {project.title}
              </h3>
              <p className="mt-1 text-xs md:text-sm text-current/60 max-w-lg">
                {project.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 md:text-right">
            <div className="hidden sm:block">
              <p className="metadata-tag text-current/50">{project.category}</p>
              <div className="flex flex-wrap gap-2 mt-1 md:justify-end">
                {project.disciplines.slice(0, 2).map((disc, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] uppercase font-mono tracking-wider text-current/40"
                  >
                    {disc}
                    {idx < 1 && " /"}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-current/20 flex items-center justify-center transition-all duration-300 group-hover:border-[#57cccc] group-hover:bg-[#57cccc] group-hover:text-[#111111] flex-shrink-0">
              <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
