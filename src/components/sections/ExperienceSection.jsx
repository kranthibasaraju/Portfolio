import { experience } from "../../data/portfolioData";
import SectionHeading from "../ui/SectionHeading";
import TimelineCard from "../ui/TimelineCard";

export default function ExperienceSection({ eyebrow, title, limit }) {
  const jobs = typeof limit === "number" ? experience.slice(0, limit) : experience;

  return (
    <section className="section-block">
      <SectionHeading eyebrow={eyebrow} title={title} />

      <div className="timeline-list">
        {jobs.map((job) => (
          <TimelineCard key={`${job.company}-${job.period}`} job={job} />
        ))}
      </div>
    </section>
  );
}
