import CertificationsSection from "../components/sections/CertificationsSection";
import EducationSection from "../components/sections/EducationSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ResumeHeroSection from "../components/sections/ResumeHeroSection";
import TechStackSection from "../components/sections/TechStackSection";
import { resumePageContent } from "../data/siteContent";

export default function ResumePage() {
  return (
    <main className="page-frame">
      <ResumeHeroSection />
      <TechStackSection
        eyebrow={resumePageContent.stackSection.eyebrow}
        title={resumePageContent.stackSection.title}
      />
      <ExperienceSection
        eyebrow={resumePageContent.experienceSection.eyebrow}
        title={resumePageContent.experienceSection.title}
      />
      <EducationSection />
      <CertificationsSection />
    </main>
  );
}
