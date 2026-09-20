import { certifications } from "../../data/portfolioData";
import SectionHeading from "../ui/SectionHeading";
import SurfaceCard from "../ui/SurfaceCard";

export default function CertificationsSection() {
  return (
    <section className="section-block">
      <SectionHeading eyebrow="Continuous Learning" title="Certifications" />

      <div className="two-column-grid">
        {certifications.map((item) => (
          <SurfaceCard key={item.name}>
            <h3>{item.name}</h3>
            <p className="body-muted">{item.issuer}</p>
          </SurfaceCard>
        ))}
      </div>
    </section>
  );
}
