import { education } from "../../data/portfolioData";
import SectionHeading from "../ui/SectionHeading";
import SurfaceCard from "../ui/SurfaceCard";

export default function EducationSection() {
  return (
    <section className="section-block">
      <SectionHeading eyebrow="Academic Foundation" title="Education" />

      <div className="two-column-grid">
        {education.map((item) => (
          <SurfaceCard key={item.degree}>
            <p className="eyebrow">{item.year}</p>
            <h3>{item.degree}</h3>
            <p>{item.school}</p>
            <p className="body-muted">{item.location}</p>
          </SurfaceCard>
        ))}
      </div>
    </section>
  );
}
