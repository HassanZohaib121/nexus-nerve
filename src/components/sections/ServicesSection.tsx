"use client";

import { useState } from "react";
import { servicesData } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceRow from "@/components/ui/ServiceRow";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First service open by default

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 md:py-32 px-6 md:px-10 lg:px-12 border-t border-current/15">
      <SectionHeading
        number="02"
        tag="CAPABILITIES"
        title={["WHAT", "WE DO"]}
        subtitle="A multidisciplinary studio bridging strategic brand positioning with meticulous digital and physical execution."
      />

      {/* Services Horizontal Rows Accordion */}
      <div className="w-full border-t border-current/15">
        {servicesData.map((service, index) => (
          <ServiceRow
            key={service.number}
            service={service}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>

      {/* Bottom Service Callout */}
      <div className="mt-16 md:mt-24 pt-12 border-t border-current/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="metadata-tag text-[#57cccc] block mb-1">
            BESPOKE ENGAGEMENTS
          </span>
          <p className="text-sm md:text-base text-current/70 max-w-lg">
            We adapt our engagement models from complete 0-to-1 brand launches
            to targeted quarterly creative direction sprints.
          </p>
        </div>
        <MagneticButton href="/services" size="lg" withArrow>
          VIEW DETAILED CAPABILITIES & SPECS
        </MagneticButton>
      </div>
    </section>
  );
}
