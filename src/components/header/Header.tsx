import React from 'react';
import './header.css';
import { AiFillGithub, AiFillCode, AiFillLinkedin } from "react-icons/ai";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <a href="#about"><li className="nav-list-item">About</li></a>
          <a href="#skills"><li className="nav-list-item">Skills</li></a>
          <a href="#education"><li className="nav-list-item">Education</li></a>
          <a href="#projects"><li className="nav-list-item">Projects</li></a>
          <a href="#contacts"><li className="nav-list-item">Contacts</li></a>
        </ul>
      </nav>
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
    </header>
  );
};

export default Header;
