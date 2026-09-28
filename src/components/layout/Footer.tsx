"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { socialLinks, studioInfo, navItems } from "@/data/navigation";
import Magnetic from "@/components/animations/Magnetic";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format Islamabad/PKT local time (UTC+5)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-GB", options).format(now) + " PKT");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-current/15 bg-transparent pt-16 md:pt-24 pb-12 px-6 md:px-10 lg:px-12 text-current">
      {/* Upper footer grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-current/10">
        {/* Brand statement */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpeg"
                alt="Nexus Nerve logo"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <span className="text-xl md:text-2xl font-black uppercase tracking-tight">
                {studioInfo.name}
              </span>
            </div>
            <p className="text-sm md:text-base text-current/70 max-w-sm leading-relaxed">
              An independent creative studio shaping visual identities, digital
              architecture, and brand experiences that advance culture.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="metadata-tag text-current/50">LOCAL TIME:</span>
            <span className="font-mono text-sm font-semibold tracking-wider text-[#57cccc]">
              {currentTime || "12:00:00 PKT"}
            </span>
          </div>
        </div>

        {/* Navigation links */}
        <div className="md:col-span-3">
          <span className="metadata-tag text-current/40 block mb-6">// DIRECTORY</span>
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="metadata-tag text-xs md:text-sm text-current/80 hover:text-[#57cccc] transition-colors"
                >
                  <span className="opacity-40 mr-2">{item.number}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social presence */}
        <div className="md:col-span-3">
          <span className="metadata-tag text-current/40 block mb-6">// NETWORK</span>
          <ul className="space-y-3">
            {socialLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="metadata-tag text-xs md:text-sm text-current/80 hover:text-[#57cccc] transition-colors flex items-center justify-between"
                  data-cursor="VISIT"
                >
                  <span>{item.name}</span>
                  <span className="opacity-40 text-[10px]">{item.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Back to top magnetic trigger */}
        <div className="md:col-span-1 flex md:justify-end items-start">
          <Magnetic strength={0.4}>
            <button
              onClick={scrollToTop}
              className="h-12 w-12 rounded-full border border-current/20 flex items-center justify-center text-current hover:bg-[#111111] hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
              aria-label="Back to top"
              data-cursor="TOP"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </Magnetic>
        </div>
      </div>

      {/* Bottom meta row */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-current/50">
        <div>
          © {studioInfo.year} {studioInfo.name}. ALL RIGHTS RESERVED.
        </div>
        <div className="uppercase tracking-widest text-[10px]">
          {studioInfo.location}
        </div>
        <div className="text-[10px]">
          POWERED BY ANIME.JS & NEXT.JS APP ROUTER
        </div>
      </div>
    </footer>
  );
}
