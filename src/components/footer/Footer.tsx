import React from 'react';
import './footer.css';
import { AiFillGithub, AiFillCode, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-info">2022 by Andrew Karev</p>
      <ul className="socials-list">
        <a href="https://github.com/andrewkarev">
          <li className="socials-list-item">
            <AiFillGithub size="2rem" />
          </li>
        </a>
        <a href="/">
          <li className="socials-list-item">
            <AiFillLinkedin size="2rem" />
          </li>
        </a>
        <a href="https://www.codewars.com/users/andrewkarev">
          <li className="socials-list-item">
            <AiFillCode size="2rem" />
          </li>
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
