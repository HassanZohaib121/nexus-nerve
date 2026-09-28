"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, socialLinks, studioInfo } from "@/data/navigation";
import { animate, stagger } from "animejs";
import Magnetic from "@/components/animations/Magnetic";
import { ArrowUpRight, Menu as MenuIcon, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Animate mobile menu entrance with Anime.js
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const links = mobileMenuRef.current.querySelectorAll(".mobile-nav-item");
      const metadata = mobileMenuRef.current.querySelectorAll(".mobile-meta-item");

      animate(mobileMenuRef.current, {
        opacity: [0, 1],
        translateY: ["-10%", "0%"],
        duration: 500,
        ease: "out(4)",
      });

      animate(links, {
        opacity: [0, 1],
        translateY: [60, 0],
        duration: 800,
        delay: stagger(100, { start: 200 }),
        ease: "out(4)",
      });

      animate(metadata, {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 700,
        delay: stagger(80, { start: 500 }),
        ease: "out(4)",
      });
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#f4f2ed]/85 dark:bg-[#0e0e10]/85 backdrop-blur-md border-b border-current/10 py-4"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="w-full px-6 md:px-10 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-current text-sm md:text-base font-black tracking-widest uppercase font-mono"
            data-cursor="HOME"
          >
            <span className="h-2 w-2 rounded-full bg-[#57cccc] group-hover:scale-150 transition-transform duration-300" />
            <span>NEXUS NERVE</span>
            <span className="hidden sm:inline-block text-[10px] text-current/50 font-normal tracking-wider ml-1">
              [STUDIO]
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`metadata-tag relative py-1 transition-colors duration-300 ${
                    isActive
                      ? "text-[#57cccc] font-bold"
                      : "text-current/80 hover:text-current"
                  }`}
                  data-cursor="OPEN"
                >
                  <span className="mr-1.5 opacity-40 text-[9px]">{item.number}</span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#57cccc]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Magnetic strength={0.3}>
                <Link
                  href="/contact"
                  className="metadata-tag inline-flex items-center gap-2 rounded-full border border-current/20 px-5 py-2.5 transition-all duration-300 hover:border-[#57cccc] hover:bg-[#57cccc] hover:text-[#111111]"
                  data-cursor="LET'S TALK"
                >
                  <span>START A PROJECT</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </Magnetic>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center gap-2 p-2 text-current hover:text-[#57cccc] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              data-cursor="MENU"
            >
              <span className="metadata-tag font-bold">
                {mobileMenuOpen ? "CLOSE" : "MENU"}
              </span>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-40 bg-[#f4f2ed] dark:bg-[#0e0e10] flex flex-col justify-between px-6 py-28 md:hidden overflow-y-auto"
        >
          <div className="flex flex-col gap-6">
            <span className="metadata-tag text-[#57cccc] font-bold">
              // INDEX NAVIGATION
            </span>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-item flex items-baseline justify-between border-b border-current/10 pb-4 text-4xl font-black uppercase tracking-tight text-current hover:text-[#57cccc] transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-sm font-mono text-current/40">
                    {item.number}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-12 pt-8 border-t border-current/15 flex flex-col gap-6">
            <div className="mobile-meta-item flex flex-col gap-1">
              <span className="metadata-tag text-current/40">DIRECT INQUIRIES</span>
              <a
                href={`mailto:${studioInfo.email}`}
                className="text-base font-mono underline decoration-current/30 text-[#57cccc]"
              >
                {studioInfo.email}
              </a>
            </div>

            <div className="mobile-meta-item flex flex-wrap gap-4 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="metadata-tag text-xs text-current/70 hover:text-current"
                >
                  {s.name}
                </a>
              ))}
            </div>

            <div className="mobile-meta-item text-[10px] font-mono text-current/40 uppercase">
              {studioInfo.location} — {studioInfo.year}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
