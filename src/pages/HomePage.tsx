import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { CoachesSection } from "../components/CoachesSection";
import { ContactPreview } from "../components/ContactPreview";

export function HomePage() {
  return (
    <div className="bg-black">
      <HeroSection />
      <ServicesSection />
      <CoachesSection />
      <ContactPreview />
    </div>
  );
}

