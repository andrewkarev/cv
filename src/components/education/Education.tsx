import React from 'react';
import './education.css';
import educationData from './education-data';

const Education = () => {
  const educationDataList = educationData.map((educationItem) => {
    return (
      <li className="expandbutton-list-item" key={educationItem.name}>
        <p className="education-term">{educationItem.term}</p>
        <p className="education-status">
          <a className="education-status-link" href={educationItem.certificate}>{educationItem.status}</a>
        </p>
        <h3 className="education-specification">{educationItem.name}</h3>
        <p className="education-program">
          <a className="education-program-link" href={educationItem.program}>{educationItem.company}</a>
        </p>
      </li>
    );
  });

  return (
    <section className="education" id="education">
      <h2 className="education-title">Education and courses</h2>
      <p className="education-description">Where I gained my knowledge:</p>
      <ul className="education-list">
        {educationDataList}
      </ul>
    </section>
  );
};

export default Education;