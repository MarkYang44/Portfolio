import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="section section-projects" data-reveal>
      <SectionHeading
        index="03"
        eyebrow="Selected Projects"
        title="A selection of systems, tools, and experiments."
        description="Project content is intentionally provisional. The structure is ready for real case studies and detail routes."
      />
      <div className="project-list">
        {featuredProjects.map((project, index) => (
          <article className="project-card" key={project.slug}>
            <div className={`project-visual project-visual-${project.visual}`}>
              <div className="visual-grid" />
              <div className="visual-object" />
              <span className="visual-code">P/{String(index + 1).padStart(2, "0")}</span>
              <span className="visual-status">{project.status}</span>
            </div>
            <div className="project-info">
              <div className="project-heading">
                <div>
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </div>
              <p>{project.description}</p>
              <div className="project-footer">
                <ul aria-label={`${project.title} technologies`}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <span>{project.year}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

