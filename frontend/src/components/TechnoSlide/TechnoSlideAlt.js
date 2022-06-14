import React from "react";
import LogoGit from "../../assets/img/github.png";
import LogoSass from "../../assets/img/sass.png";
import LogoMongodb from "../../assets/img/mongodb.png";
import LogoCss from "../../assets/img/css.png";
import LogoMysql from "../../assets/img/mysql.png";
import "./TechnoSlide.scss";

function TechnoSlide() {
  return (
    <div className="technoslide">
      <ul className="technoslide__contents">
        <li>
          <img className="technoslide__img" src={LogoGit} alt="Logo Github" />
        </li>
        <li>
          <img className="technoslide__img" src={LogoSass} alt="Logo SASS" />
        </li>
        <li>
          <img
            className="technoslide__img"
            src={LogoMongodb}
            alt="Logo MongoDB"
          />
        </li>
        <li>
          <img className="technoslide__img" src={LogoCss} alt="Logo CSS" />
        </li>
        <li>
          <img className="technoslide__img" src={LogoMysql} alt="Logo MySQL" />
        </li>
      </ul>
    </div>
  );
}

export default TechnoSlide;
