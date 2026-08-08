import { ArrowUpRight } from "lucide-react";

function ProjectSlide({ project, duplicate = false }) {
  return (
    <article className="project-carousel-card" aria-hidden={duplicate || undefined}>
      <div className="project-carousel-media">
        <img src={project.image} alt={duplicate ? "" : project.imageAlt} loading="lazy" />
        <span>{project.category}</span>
      </div>
      <div className="project-carousel-copy">
        <p>{project.name}</p>
        <h3>{project.contribution}</h3>
        <a href={`/proyectos#${project.slug}`} tabIndex={duplicate ? -1 : undefined}>
          Ver caso completo <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}

export default function ProjectCarousel({ projects }) {
  return (
    <div className="project-carousel" aria-label="Proyectos seleccionados">
      <div className="project-carousel-track">
        <div className="project-carousel-group">
          {projects.map((project) => (
            <ProjectSlide key={project.slug} project={project} />
          ))}
        </div>
        <div className="project-carousel-group" aria-hidden="true">
          {projects.map((project) => (
            <ProjectSlide key={`${project.slug}-copy`} project={project} duplicate />
          ))}
        </div>
      </div>
    </div>
  );
}
