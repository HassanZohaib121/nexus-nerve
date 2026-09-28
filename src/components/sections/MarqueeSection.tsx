"use client";

import Marquee from "@/components/animations/Marquee";

export default function MarqueeSection() {
  const line1 = [
    "BRAND IDENTITY",
    "DIGITAL ARCHITECTURE",
    "ART DIRECTION",
    "MOTION SYSTEMS",
    "EDITORIAL DESIGN",
    "INTERACTION",
  ];

  const line2 = [
    "STRATEGY",
    "CREATIVE CODE",
    "SPATIAL EXPERIENCES",
    "KINETIC TYPE",
    "SOUND DESIGN",
    "NEXT.JS ENGINEERING",
  ];

  return (
    <section className="w-full py-16 md:py-24 overflow-hidden bg-current/[0.02]">
      <div className="flex flex-col gap-4 md:gap-8">
        <Marquee
          items={line1}
          speed={32}
          direction="left"
          pauseOnHover={true}
          itemClassName="text-current/90 hover:text-[#57cccc] transition-colors"
        />
        <Marquee
          items={line2}
          speed={38}
          direction="right"
          pauseOnHover={true}
          itemClassName="text-current/70 hover:text-[#57cccc] transition-colors font-serif italic lowercase tracking-normal"
        />
      </div>
    </section>
  );
}
