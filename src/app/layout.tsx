import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/animations/CustomCursor";
import SmoothScroll from "@/components/scroll/SmoothScroll";
import PageTransition from "@/components/layout/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEXUS NERVE — Independent Creative Studio",
  description:
    "We create brands, digital experiences, and visual identities that move people. Independent creative studio in Pakistan & Worldwide.",
  keywords: [
    "creative studio",
    "brand identity",
    "digital experience",
    "art direction",
    "web development",
    "typography",
  ],
  authors: [{ name: "Nexus Nerve" }],
  openGraph: {
    title: "NEXUS NERVE — Independent Creative Studio",
    description:
      "We create brands, digital experiences, and visual identities that move people.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} font-sans`}
    >
      <body className="min-h-screen flex flex-col bg-[#f4f2ed] text-[#111111] dark:bg-[#0e0e10] dark:text-[#f4f2ed] selection:bg-[#111111] selection:text-[#f4f2ed] antialiased">
        <SmoothScroll />
        <CustomCursor />
        <Navbar />
        <main className="flex-1 w-full">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
