import React from 'react';
import { motion } from 'framer-motion';

function ProjectCard({ project }) {
  return (
    <motion.div className="card p-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h3 className="card-title">{project.title}</h3>
      <p className="card-text">{project.description}</p>
      {project.image && <img src={project.image} alt={project.title} className="img-fluid mb-2" />}
      {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">GitHub Link</a>}
    </motion.div>
  );
}

export default ProjectCard;
