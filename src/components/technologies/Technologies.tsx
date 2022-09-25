import React from 'react';
import './technologies.css';
import technologies from './technologies-data';

const Technologies = () => {
  const technologiesList = technologies.map((technology) => {
    return (
      <div className="technology" key={technology.title}>
        <a
          className="technology-link-img"
          href={technology.url}
        >
          <img className="technology-img" src={technology.icon} alt={technology.title} />
        </a>
        <a
          className="technology-link"
          href={technology.url}
        >
          {technology.title}
        </a>
      </div>
    );
  });

  return (
    <section className="technologies" id="technologies">
      <h2 className="technologies-title">Technologies</h2>
      <p className="technologies-description">I've already studied such technologies in web development as:</p>
      <div className="technologies-container">
        {technologiesList}
      </div>
    </section>
  );
};

export default Technologies;