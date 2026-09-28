"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Magnetic from "@/components/animations/Magnetic";
import { ArrowUpRight } from "lucide-react";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  className?: string;
  dataCursor?: string;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  dataCursor = "OPEN",
}: MagneticButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-xs md:text-sm",
    lg: "px-9 py-5 text-sm md:text-base",
  };

  const variantClasses = {
    primary:
      "bg-[#111111] text-[#f4f2ed] dark:bg-[#f4f2ed] dark:text-[#111111] border border-transparent hover:bg-[#57cccc] hover:text-[#111111] dark:hover:bg-[#57cccc] dark:hover:text-[#111111] transition-colors duration-300",
    outline:
      "bg-transparent text-current border border-current/25 hover:border-current hover:bg-current/5 transition-all duration-300",
    text:
      "bg-transparent text-current border-b border-current/30 hover:border-[#57cccc] hover:text-[#57cccc] px-0 py-1 transition-colors duration-300 rounded-none",
  };

  const baseContent = (
    <span
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full uppercase tracking-widest font-mono font-medium transition-transform duration-300 active:scale-95 ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${className}`}
      data-cursor={dataCursor}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </span>
  );

  if (href) {
    return (
      <Magnetic strength={0.3}>
        <Link href={href} className="inline-block">
          {baseContent}
        </Link>
      </Magnetic>
    );
  }

  return (
    <Magnetic strength={0.3}>
      <button onClick={onClick} className="inline-block bg-transparent p-0 border-none cursor-pointer">
        {baseContent}
      </button>
    </Magnetic>
  );
}
