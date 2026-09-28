import Hero from "@/components/sections/Hero";
import IntroSection from "@/components/sections/IntroSection";
import WorkSection from "@/components/sections/WorkSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <IntroSection />
      <WorkSection />
      <MarqueeSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <ContactSection />
    </div>
  );
}
