import { Search } from "lucide-react";
import { projectsPageContent } from "../../data/siteContent";
import useProjectExplorer from "../../hooks/useProjectExplorer";
import ProjectCard from "../ui/ProjectCard";
import SectionHeading from "../ui/SectionHeading";

export default function ProjectExplorerSection() {
  const {
    activeFilter,
    featuredProject,
    filters,
    filteredProjects,
    query,
    secondaryProjects,
    setActiveFilter,
    setQuery,
  } = useProjectExplorer();

  return (
    <section className="section-block">
      <SectionHeading eyebrow={projectsPageContent.eyebrow} title={projectsPageContent.title} />

      <label className="search-field">
        <Search size={16} />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={projectsPageContent.searchPlaceholder}
        />
      </label>

      <div className="filter-row" aria-label="Project categories">
        {filters.map((filter) => (
          <button
            key={filter}
            className={filter === activeFilter ? "filter-chip is-active" : "filter-chip"}
            type="button"
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <article className="surface-card">
          <h3>No matches found</h3>
          <p>Try a different search phrase or switch back to &quot;All Systems&quot;.</p>
        </article>
      )}

      {filteredProjects.length > 0 && (
        <div className="project-grid">
          {featuredProject && <ProjectCard project={featuredProject} featured />}
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
