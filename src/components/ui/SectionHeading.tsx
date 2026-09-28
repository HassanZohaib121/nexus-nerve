import TextReveal from "@/components/animations/TextReveal";

interface SectionHeadingProps {
  number: string;
  tag: string;
  title: string[];
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  number,
  tag,
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`w-full mb-12 md:mb-20 ${className}`}>
      {/* Editorial metadata badge */}
      <div className="flex items-center justify-between border-b border-current/15 pb-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="metadata-tag text-[#57cccc] font-bold">[{number}]</span>
          <span className="metadata-tag text-current/60">{tag}</span>
        </div>
        <div className="h-1.5 w-1.5 rounded-full bg-[#57cccc]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
        <div className="lg:col-span-8">
          <TextReveal
            lines={title}
            as="h2"
            className="display-section font-black uppercase text-current tracking-tighter"
            lineClassName="leading-[0.88]"
          />
        </div>
        {subtitle && (
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-sm md:text-base text-current/70 max-w-md ml-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
