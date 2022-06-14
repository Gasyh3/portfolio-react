import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <a href="/" className="header__logo">
        ケビン
      </a>
      <div className="header__link">
        <a href="#about" className="about">
          A propos
        </a>
        <a href="#projects" className="projects">
          Mes projets
        </a>
        <a href="#contact" className="contact">
          Me contacter
        </a>
      </div>
    </div>
  );
}

export default Header;
