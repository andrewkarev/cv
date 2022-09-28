import React, { useState } from 'react';
import './header.css';
import { AiFillGithub, AiFillCode, AiFillLinkedin } from "react-icons/ai";

const Header = () => {
  const navItems = ['About', 'Technologies', 'Education', 'Projects', 'Contacts'];

  const [isBurgerOpened, setIsBurgerOpened] = useState(false);

  const toggleBurgerMenu = () => {
    const body = document.querySelector('body');

    if (!body) return;

    if (!isBurgerOpened) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }

    setIsBurgerOpened(!isBurgerOpened);
  };

  const navLinks = navItems.map((item) => {
    return (
      <li className="nav-list-item" key={item}>
        <a className="nav-list-link" href={`#${item.toLowerCase()}`} onClick={toggleBurgerMenu} key={item}>{item}</a>
      </li>
    );
  });

  return (
    <header className="header">
      <nav className={`${isBurgerOpened ? 'nav opened' : 'nav'}`}>
        <ul className="nav-list">
          {navLinks}
        </ul>
      </nav>
      <div
        className={`${isBurgerOpened ? 'burger opened' : 'burger'}`}
        onClick={toggleBurgerMenu}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
      <ul className="socials-list">
        <a href="https://github.com/andrewkarev">
          <li className="socials-list-item">
            <AiFillGithub size="2rem" />
          </li>
        </a>
        <a href="https://linkedin.com/in/андрей-карев-62203a252">
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
      {isBurgerOpened && <div className="overlay" onClick={toggleBurgerMenu}></div>}
    </header>
  );
};

export default Header;
