export default function TimelineCard({ job }) {
  return (
    <article className="timeline-card">
      <div className="timeline-card-top">
        <div>
          <h3>{job.title}</h3>
          <p className="company-name">{job.company}</p>
        </div>
        <p className="timeline-period">
          {job.period}
          <span>{job.location}</span>
        </p>
      </div>

      <ul className="detail-list">
        {job.highlights.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </article>
  );
}
