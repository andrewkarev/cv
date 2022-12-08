import React from "react";
import "./hero.css";
import HERO_IMG_LINK from "../../assets/images/hero.jpg";
import CV_PDF_LINK from "../../assets/files/CV_Andrew_Karev_Front-end_Developer.pdf";

const Hero = () => {
  return (
    <div className="hero" id="about">
      <section className="hero-section">
        <h1 className="app-title">Welcome</h1>
        <p className="app-description">
          My name is Andrew and I'm a Front-end Developer. I'm familiar with
          Agile. I have knowledge of tools for creating web applications. I have
          experience in creating applications applying the best coding practice
          like DRY, KISS and YAGNI. I'm interested in gaining knowledge and
          applying them in real projects. At the moment I'm learning Node.js and
          looking forward to working in teams as well as individually.
        </p>
        <a className="learn-more-btn" href={CV_PDF_LINK} download={true}>
          <p className="learn-more-btn-content">Download CV</p>
        </a>
      </section>
      <div className="hero-img-container">
        <img className="hero-img" src={HERO_IMG_LINK} alt="Author" />
      </div>
    </div>
  );
};

export default Hero;
