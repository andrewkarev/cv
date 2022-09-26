import React from 'react';
import './hero.css';
import HERO_IMG_LINK from '../../assets/images/hero.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <section className="hero-section">
        <h1 className="app-title">Welcome</h1>
        <p className="app-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita numquam eius enim qui ducimus, aut corporis laborum quo aspernatur veritatis dolorem, quasi cum! Porro tempora illum, quibusdam cum voluptates id?
        </p>
        <a
          className="learn-more-btn"
          href="https://github.com/andrewkarev"
        >
          <p className="learn-more-btn-content">Learn more</p>
        </a>
      </section>
      <div className="hero-img-container">
        <img className="hero-img" src={HERO_IMG_LINK} alt="Author" />
      </div>
    </div>
  );
};

export default Hero;