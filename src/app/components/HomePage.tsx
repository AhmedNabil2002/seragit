
import { HeroSection } from "./home/HeroSection";
import { ServicesSection } from "./home/ServicesSection";
import { ProjectsSection } from "./home/ProjectsSection";
import { StatsSection } from "./home/StatsSection";
import { NewsSection } from "./home/NewsSection";
import { ContactSection } from "./home/ContactSection";
import { MapSection } from "./home/MapSection";

export function HomePage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <ProjectsSection />
      <NewsSection />
      <ContactSection />
      <MapSection />
    </div>
  );
}
