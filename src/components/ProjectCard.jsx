import React from "react";
import { FiExternalLink } from "react-icons/fi";
import FadeIn from "./FadeIn";

function ProjectCard({ project, delay = 0 }) {
  return (
    <FadeIn delay={delay}>
      <article className="project-card">
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>

        <div className="project-impact">{project.impact}</div>

        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <ul className="project-list">
          {project.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-link"
            >
              {link.label} <FiExternalLink size={13} />
            </a>
          ))}
        </div>
      </article>
    </FadeIn>
  );
}

export default ProjectCard;
