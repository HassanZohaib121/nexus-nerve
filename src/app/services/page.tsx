"use client";

import { useState } from "react";
import { servicesData } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceRow from "@/components/ui/ServiceRow";
import MagneticButton from "@/components/ui/MagneticButton";

const processSteps = [
  {
    step: "01",
    phase: "DISCOVERY & ALIGNMENT",
    duration: "WEEKS 01—02",
    description:
      "Deep research into cultural context, market whitespace, and technical constraints. We define clear aesthetic principles and measurable objectives before opening any design canvas.",
  },
  {
    step: "02",
    phase: "STRATEGIC ARCHITECTURE",
    duration: "WEEKS 03—04",
    description:
      "Positioning frameworks, tone-of-voice foundations, and typographic mood boards. We establish the intellectual thesis that will govern all visual decisions.",
  },
  {
    step: "03",
    phase: "DESIGN & INTERACTION",
    duration: "WEEKS 05—08",
    description:
      "Sculpting logotypes, graphic marks, tactile color palettes, spatial layouts, and motion studies. Everything is tested across physical print and dynamic screen resolutions.",
  },
  {
    step: "04",
    phase: "TECHNICAL ENGINEERING",
    duration: "WEEKS 09—12",
    description:
      "Bespoke Next.js frontend development with smooth Anime.js transitions, clean semantic HTML, sub-second edge routing, and rigorous accessibility checks.",
  },
  {
    step: "05",
    phase: "LAUNCH & STEWARDSHIP",
    duration: "ONGOING",
    description:
      "Global deployment, press asset packages, brand style guides, team handover workshops, and continuous design evolution.",
  },
];

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full pt-32 pb-24 px-6 md:px-10 lg:px-12 text-current">
      <SectionHeading
        number="02"
        tag="SERVICES & CAPABILITIES"
        title={["DISCIPLINES", "& PRACTICE"]}
        subtitle="A full-spectrum creative studio partnering with vanguard founders, cultural institutions, and global enterprises."
      />

      {/* Services List */}
      <div className="w-full border-t border-current/15 mb-24">
        {servicesData.map((service, index) => (
          <ServiceRow
            key={service.number}
            service={service}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>

      {/* Studio Working Process */}
      <div className="pt-16 border-t border-current/15 mb-24">
        <div className="flex items-center justify-between border-b border-current/15 pb-4 mb-12">
          <div className="flex items-center gap-3">
            <span className="metadata-tag text-[#57cccc] font-bold">[PROCESS]</span>
            <span className="metadata-tag text-current/60">HOW WE WORK</span>
          </div>
          <span className="metadata-tag text-current/40">5-STAGE DISCIPLINE</span>
        </div>

        <div className="space-y-6">
          {processSteps.map((p) => (
            <div
              key={p.step}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-current/10 items-baseline"
            >
              <div className="md:col-span-2 flex items-baseline gap-4">
                <span className="metadata-tag text-[#57cccc] font-bold text-base">
                  {p.step}
                </span>
                <span className="metadata-tag text-current/50">{p.duration}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">
                  {p.phase}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-sm md:text-base text-current/75 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Callout */}
      <div className="pt-16 border-t border-current/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <span className="metadata-tag text-[#57cccc] block mb-2">
            HAVE A UNIQUE REQUIREMENT?
          </span>
          <p className="text-2xl md:text-3xl font-black uppercase tracking-tight">
            DISCUSS A BESPOKE PROPOSAL
          </p>
        </div>
        <MagneticButton href="/contact" size="lg" withArrow>
          CONTACT STUDIO
        </MagneticButton>
      </div>
    </div>
  );
}
