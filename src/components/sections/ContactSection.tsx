"use client";

import { useState } from "react";
import Link from "next/link";
import { studioInfo, socialLinks } from "@/data/navigation";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowUpRight, Check, Copy } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(studioInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-24 md:py-40 px-6 md:px-10 lg:px-12 border-t border-current/15 bg-current/[0.015]">
      {/* Top index label */}
      <div className="flex items-center justify-between border-b border-current/15 pb-4 mb-12">
        <div className="flex items-center gap-3">
          <span className="metadata-tag text-[#57cccc] font-bold">[05]</span>
          <span className="metadata-tag text-current/60">INITIATE COLLABORATION</span>
        </div>
        <span className="metadata-tag text-current/40">NOW BOOKING Q3/Q4</span>
      </div>

      <div className="max-w-6xl">
        <TextReveal
          lines={["HAVE A PROJECT IN MIND?", "LET'S TALK."]}
          className="display-hero font-black uppercase text-current tracking-tighter"
          lineClassName="leading-[0.82]"
        />

        <p className="mt-8 text-lg md:text-2xl text-current/70 max-w-2xl leading-relaxed">
          Whether you require a complete brand foundation, an experiential web
          flagship, or art direction for an upcoming product launch — we are ready.
        </p>

        {/* Large Animated Email Link */}
        <div className="mt-12 md:mt-20 pt-8 border-t border-current/15">
          <span className="metadata-tag text-current/40 block mb-3">
            DIRECT CHANNEL
          </span>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={`mailto:${studioInfo.email}`}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-mono text-[#111111] dark:text-[#f4f2ed] hover:text-[#57cccc] dark:hover:text-[#57cccc] transition-colors duration-300 break-all"
              data-cursor="EMAIL US"
            >
              {studioInfo.email}
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-current/20 px-4 py-2 text-xs font-mono uppercase tracking-wider text-current hover:border-[#57cccc] hover:text-[#57cccc] transition-colors"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-green-500" />
                  <span>COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>COPY</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Action Row */}
        <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-6">
          <MagneticButton href="/contact" size="lg" withArrow>
            OPEN INQUIRY FORM
          </MagneticButton>
          <span className="text-xs font-mono text-current/40 uppercase">
            TYPICAL RESPONSE TIME: 24 HOURS
          </span>
        </div>
      </div>
    </section>
  );
}
