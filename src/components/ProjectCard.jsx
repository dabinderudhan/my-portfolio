import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      viewport={{ once: true }}
    >
      <div className="project-top">
        <div>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
        <span className="project-impact">{project.impact}</span>
      </div>

      <div className="tag-row">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <ul className="list">
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
            {link.label} <FiExternalLink />
          </a>
        ))}
      </div>
    </motion.article>
  );
}

export default ProjectCard;
