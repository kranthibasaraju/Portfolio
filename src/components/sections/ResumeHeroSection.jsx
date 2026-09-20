import { profile } from "../../data/portfolioData";
import { resumePageContent } from "../../data/siteContent";
import SurfaceCard from "../ui/SurfaceCard";

export default function ResumeHeroSection() {
  return (
    <section className="resume-hero">
      <div>
        <p className="eyebrow">{resumePageContent.hero.eyebrow}</p>
        <h2>{profile.role}</h2>
        <p className="hero-lead">{resumePageContent.hero.lead}</p>
        <div className="button-row no-print">
          <button type="button" className="button button-primary" onClick={() => window.print()}>
            Download as PDF
          </button>
        </div>
      </div>

      <SurfaceCard>
        <p className="eyebrow">{resumePageContent.summary.eyebrow}</p>
        <h3>{resumePageContent.summary.title}</h3>
        <p className="body-muted">{resumePageContent.summary.text}</p>

        <div className="summary-grid">
          {resumePageContent.summary.items.map((item) => (
            <div key={item.label}>
              <p className="eyebrow">{item.label}</p>
              <p className="body-muted">{item.value === "location" ? profile.location : item.value}</p>
            </div>
          ))}
        </div>
      </SurfaceCard>
    </section>
  );
}
