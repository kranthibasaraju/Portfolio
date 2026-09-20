import { techStack } from "../../data/portfolioData";
import SectionHeading from "../ui/SectionHeading";
import SurfaceCard from "../ui/SurfaceCard";
import TagList from "../ui/TagList";

export default function TechStackSection({ eyebrow, title }) {
  return (
    <section className="section-block">
      <SectionHeading eyebrow={eyebrow} title={title} />

      <div className="two-column-grid">
        {techStack.map((group) => (
          <SurfaceCard key={group.category}>
            <h3>{group.category}</h3>
            <TagList items={group.items} />
          </SurfaceCard>
        ))}
      </div>
    </section>
  );
}
