"use client";

import { useState, FormEvent } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { studioInfo, socialLinks } from "@/data/navigation";
import MagneticButton from "@/components/ui/MagneticButton";
import { Check, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const serviceOptions = [
  "Brand Strategy",
  "Visual Identity",
  "Digital Design & UX",
  "Web Development (Next.js)",
  "Art Direction & Lookbook",
  "Motion & 3D Interactivity",
];

const budgetOptions = [
  "$25,000 — $50,000",
  "$50,000 — $100,000",
  "$100,000 — $200,000",
  "$200,000+",
];

const timelineOptions = [
  "Immediately (Next 30 Days)",
  "Next 2 — 3 Months",
  "Q3 / Q4 2026",
  "Exploring Feasibility",
];

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="w-full pt-32 pb-24 px-6 md:px-10 lg:px-12 text-current">
      <SectionHeading
        number="04"
        tag="NEW COMMISSIONS"
        title={["START A", "PROJECT"]}
        subtitle="We collaborate with ambitious organizations worldwide. Submit your project brief below or reach us directly via email."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Direct Contact Information */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <span className="metadata-tag text-[#57cccc] block mb-3">
              // DIRECT STUDIO CONTACT
            </span>
            <a
              href={`mailto:${studioInfo.email}`}
              className="text-2xl sm:text-3xl font-black font-mono text-current hover:text-[#57cccc] transition-colors break-all"
            >
              {studioInfo.email}
            </a>
            <p className="mt-2 text-xs font-mono text-current/50">
              Response guarantee within 24 hours (Monday to Friday).
            </p>
          </div>

          <div className="pt-8 border-t border-current/15 space-y-6 text-sm font-mono">
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-[#57cccc] mt-1 flex-shrink-0" />
              <div>
                <span className="text-current/50 block text-xs">STUDIO LOCATION</span>
                <span className="font-semibold">{studioInfo.address}</span>
                <p className="text-xs text-current/40 mt-0.5">
                  Pakistan / Worldwide Remote
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="h-4 w-4 text-[#57cccc] mt-1 flex-shrink-0" />
              <div>
                <span className="text-current/50 block text-xs">TELEPHONE</span>
                <span className="font-semibold">{studioInfo.phone}</span>
              </div>
            </div>
          </div>

          {/* Social Network */}
          <div className="pt-8 border-t border-current/15">
            <span className="metadata-tag text-current/50 block mb-4">
              CHANNELS & NETWORKS
            </span>
            <div className="flex flex-col gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="metadata-tag flex items-center justify-between text-current/80 hover:text-[#57cccc] py-2 border-b border-current/10"
                >
                  <span>{s.name}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Project Brief Form */}
        <div className="lg:col-span-7 bg-current/[0.02] p-6 sm:p-10 rounded-sm border border-current/10">
          {submitted ? (
            <div className="py-16 text-center">
              <div className="h-16 w-16 rounded-full bg-[#57cccc] text-[#111111] flex items-center justify-center mx-auto mb-6">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4">
                INQUIRY RECEIVED
              </h3>
              <p className="text-base text-current/75 max-w-md mx-auto leading-relaxed">
                Thank you for considering Nexus Nerve. Our partners will review your
                brief and get in touch within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 metadata-tag underline text-[#57cccc]"
              >
                SUBMIT ANOTHER BRIEF
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Step 1: Services Needed */}
              <div>
                <label className="metadata-tag text-current/60 block mb-4">
                  01 // SELECT SERVICES REQUIRED (MULTIPLE)
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {serviceOptions.map((srv) => {
                    const active = selectedServices.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => toggleService(srv)}
                        className={`text-xs font-mono uppercase tracking-wider px-3.5 py-2 rounded-full border transition-all ${
                          active
                            ? "bg-[#57cccc] text-[#111111] border-[#57cccc] font-semibold"
                            : "border-current/20 text-current/80 hover:border-current"
                        }`}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Budget */}
              <div>
                <label className="metadata-tag text-current/60 block mb-4">
                  02 // ESTIMATED BUDGET RANGE (USD)
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {budgetOptions.map((b) => {
                    const active = selectedBudget === b;
                    return (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setSelectedBudget(b)}
                        className={`text-xs font-mono uppercase tracking-wider px-3.5 py-2 rounded-full border transition-all ${
                          active
                            ? "bg-[#111111] text-white dark:bg-white dark:text-black border-current"
                            : "border-current/20 text-current/80 hover:border-current"
                        }`}
                      >
                        {b}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Timeline */}
              <div>
                <label className="metadata-tag text-current/60 block mb-4">
                  03 // DESIRED TIMELINE
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {timelineOptions.map((t) => {
                    const active = selectedTimeline === t;
                    return (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setSelectedTimeline(t)}
                        className={`text-xs font-mono uppercase tracking-wider px-3.5 py-2 rounded-full border transition-all ${
                          active
                            ? "bg-[#111111] text-white dark:bg-white dark:text-black border-current"
                            : "border-current/20 text-current/80 hover:border-current"
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Contact Details */}
              <div className="space-y-6 pt-6 border-t border-current/10">
                <label className="metadata-tag text-current/60 block">
                  04 // YOUR INFORMATION
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-current/60 uppercase mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Elena Rostova"
                      className="w-full bg-transparent border-b border-current/20 py-2.5 text-sm md:text-base focus:border-[#57cccc] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-current/60 uppercase mb-2">
                      ORGANIZATION / BRAND *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="e.g. Vanguard Robotics"
                      className="w-full bg-transparent border-b border-current/20 py-2.5 text-sm md:text-base focus:border-[#57cccc] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-current/60 uppercase mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="elena@vanguard.io"
                    className="w-full bg-transparent border-b border-current/20 py-2.5 text-sm md:text-base focus:border-[#57cccc] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-current/60 uppercase mb-2">
                    PROJECT VISION & OBJECTIVES
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about the project goals, current challenges, and desired launch scope..."
                    className="w-full bg-transparent border-b border-current/20 py-2.5 text-sm md:text-base focus:border-[#57cccc] focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#111111] dark:bg-white text-white dark:text-black hover:bg-[#57cccc] hover:text-[#111111] dark:hover:bg-[#57cccc] dark:hover:text-[#111111] px-10 py-5 text-sm font-mono uppercase tracking-widest transition-colors duration-300 disabled:opacity-50 cursor-pointer"
                  data-cursor="SUBMIT"
                >
                  <span>{isSubmitting ? "TRANSMITTING..." : "SUBMIT BRIEF"}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
