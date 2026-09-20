export const siteIdentity = {
  mark: "KSM",
};

export const navigationItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Resume", to: "/resume" },
];

export const footerContent = {
  copyright: "© 2026 Kavya Sree Maniga",
  label: "Portfolio prototype track",
};

export const homePageContent = {
  hero: {
    eyebrow: "Data Platform Engineer",
    actions: [
      { label: "Explore Projects", to: "/projects", className: "button button-primary" },
      { label: "View Resume", to: "/resume", className: "button button-secondary" },
    ],
    socialLinks: [
      { label: "LinkedIn", icon: "linkedin", type: "external", valueKey: "linkedin" },
      { label: "Contact", icon: "contact", type: "email", valueKey: "email" },
    ],
  },
  stackSection: {
    eyebrow: "Core Competencies",
    title: "Technical Stack",
  },
  experienceSection: {
    eyebrow: "Career Snapshot",
    title: "Recent Experience",
  },
};

export const projectsPageContent = {
  eyebrow: "Projects Archive",
  title: "Intelligence Archive",
  searchPlaceholder: "Search tech stack, project title, or architecture...",
};

export const resumePageContent = {
  hero: {
    eyebrow: "Resume",
    lead:
      "Data engineer specializing in modern cloud platforms, analytics engineering, orchestration, and governance-first pipeline design.",
  },
  summary: {
    eyebrow: "Current Focus",
    title: "Platform Reliability + Data Quality",
    text: "Building systems with strong lineage, test coverage, and low-latency transformation workflows.",
    items: [
      { label: "Experience", value: "6+ Years" },
      { label: "Industries", value: "Healthcare · Fintech · Tech" },
      { label: "Location", value: "location" },
      { label: "Work Preference", value: "Remote-friendly" },
    ],
  },
  stackSection: {
    eyebrow: "Technical Arsenal",
    title: "Capabilities",
  },
  experienceSection: {
    eyebrow: "Experience Narrative",
    title: "Work History",
  },
};
