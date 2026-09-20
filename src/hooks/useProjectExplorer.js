import { useDeferredValue, useState } from "react";
import { projects } from "../data/portfolioData";

const ALL_SYSTEMS_FILTER = "All Systems";

export default function useProjectExplorer() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState(ALL_SYSTEMS_FILTER);
  const deferredQuery = useDeferredValue(query);

  const filters = [ALL_SYSTEMS_FILTER, ...new Set(projects.map((project) => project.category))];
  const normalizedQuery = deferredQuery.trim().toLowerCase();

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === ALL_SYSTEMS_FILTER || project.category === activeFilter;
    const searchText = `${project.title} ${project.description} ${project.tech.join(" ")}`.toLowerCase();
    const matchesQuery = normalizedQuery.length === 0 || searchText.includes(normalizedQuery);

    return matchesFilter && matchesQuery;
  });

  return {
    activeFilter,
    featuredProject: filteredProjects.find((project) => project.featured),
    filters,
    filteredProjects,
    query,
    secondaryProjects: filteredProjects.filter((project) => !project.featured),
    setActiveFilter,
    setQuery,
  };
}
