import { ExternalLink, GithubIcon } from "lucide-react";
import TagList from "./TagList";

export default function ProjectCard({ featured = false, project }) {
  return (
    <article className={featured ? "project-card project-card-featured" : "project-card"}>
      <div className="project-card-top">
        <div>
          <p className="eyebrow">{project.category}</p>
          <h3>{project.title}</h3>
        </div>

        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              aria-label={`${project.title} GitHub repo`}
            >
              <GithubIcon size={17} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={17} />
            </a>
          )}
        </div>
      </div>

      <p>{project.description}</p>
      <ul className="detail-list">
        {project.highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <TagList items={project.tech} />
    </article>
  );
}
