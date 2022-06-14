import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">ケビン </div>
      <div className="header__link">
        <a href="#" className="about">
          A propos
        </a>
        <a href="#" className="projects">
          Mes projets
        </a>
        <a href="#" className="contact">
          Me contacter
        </a>
      </div>
    </div>
  );
}

export default Header;
