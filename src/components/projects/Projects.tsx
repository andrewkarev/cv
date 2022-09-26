import React from 'react';
import './projects.css';
import projectsData from './/projects-data';

const Projects = () => {
  const projectsList = projectsData.map((project) => {
    const technologiesStack = project.technologies.map((technology, i) => {
      return (
        <div className="project-technology" key={technology + i}>{technology}</div>
      )
    });

    return (
      <div className="project" key={project.title}>
        <img className="project-img" src={project.img} alt={project.title} />
        <h3 className="project-title">{project.title}</h3>
        <div className="project-description">{project.description}</div>
        <div className="project-stack">{technologiesStack}</div>
        <div className="project-btns-container">
          <a
            className="project-deploy-link"
            href={project.deploy}
          >
            Site
          </a>
          <a
            className="project-code-link"
            href={project.code}
          >
            Code
          </a>
        </div>
      </div>
    );
  });

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-description">Here are examples of my work:</p>
      <div className="projects-container">
        {projectsList}
      </div>
    </section>
  );
};

export default Projects;