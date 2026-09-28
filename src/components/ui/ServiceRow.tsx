"use client";

import { useState } from "react";
import Image from "next/image";
import { ServiceItem } from "@/data/services";
import { Plus, ArrowUpRight } from "lucide-react";

interface ServiceRowProps {
  service: ServiceItem;
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function ServiceRow({ service, isOpen = false, onToggle }: ServiceRowProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`border-b border-current/15 transition-colors duration-500 ${
        isHovered || isOpen ? "bg-current/[0.03]" : "bg-transparent"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Clickable Header Row */}
      <button
        onClick={onToggle}
        className="w-full text-left py-8 md:py-12 px-2 md:px-6 flex items-center justify-between group focus:outline-none cursor-pointer"
        data-cursor="EXPLORE"
        aria-expanded={isOpen}
      >
        <div className="flex items-baseline gap-4 md:gap-10">
          <span className="metadata-tag text-[#57cccc] font-bold text-sm md:text-base">
            {service.number}
          </span>
          <div>
            <h3 className="text-2xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight transition-transform duration-300 group-hover:translate-x-2">
              {service.title}
            </h3>
            <span className="hidden md:inline-block metadata-tag text-current/50 mt-1">
              {service.subtitle}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden lg:block metadata-tag text-current/40 group-hover:text-[#57cccc] transition-colors">
            {isOpen ? "COLLAPSE" : "DISCOVER"}
          </span>
          <div
            className={`h-10 w-10 md:h-12 md:w-12 rounded-full border border-current/25 flex items-center justify-center transition-all duration-300 ${
              isOpen
                ? "bg-[#57cccc] text-[#111111] border-[#57cccc] rotate-45"
                : isHovered
                ? "border-current bg-current/5"
                : ""
            }`}
          >
            <Plus className="h-5 w-5 transition-transform duration-300" />
          </div>
        </div>
      </button>

      {/* Expanded Accordion Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100 pb-10 px-4 md:px-8" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-current/10">
          {/* Preview Image */}
          <div className="md:col-span-4 relative aspect-[4/3] overflow-hidden rounded-sm bg-neutral-200 dark:bg-neutral-800">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h4 className="metadata-tag text-current/40 mb-2">Scope & Focus</h4>
              <p className="text-base md:text-lg leading-relaxed text-current/80">
                {service.description}
              </p>
            </div>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 metadata-tag text-[#57cccc] hover:underline"
              >
                Inquire about this capability <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="md:col-span-3">
            <h4 className="metadata-tag text-current/40 mb-4">Core Deliverables</h4>
            <ul className="space-y-2">
              {service.deliverables.map((item, idx) => (
                <li
                  key={idx}
                  className="text-xs md:text-sm font-mono uppercase tracking-wider text-current/70 flex items-center gap-2"
                >
                  <span className="h-1 w-1 rounded-full bg-[#57cccc]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
