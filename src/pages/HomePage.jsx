import ExperienceSection from "../components/sections/ExperienceSection";
import HomeHeroSection from "../components/sections/HomeHeroSection";
import TechStackSection from "../components/sections/TechStackSection";
import { homePageContent } from "../data/siteContent";

export default function HomePage() {
  return (
    <main className="page-frame">
      <HomeHeroSection />
      <TechStackSection
        eyebrow={homePageContent.stackSection.eyebrow}
        title={homePageContent.stackSection.title}
      />
      <ExperienceSection
        eyebrow={homePageContent.experienceSection.eyebrow}
        title={homePageContent.experienceSection.title}
        limit={2}
      />
    </main>
  );
}
