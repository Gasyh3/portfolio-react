import React from "react";
import LogoReact from "../../assets/img/react.png";
import LogoHTML from "../../assets/img/html.png";
import LogoJS from "../../assets/img/js.png";
import LogoExp from "../../assets/img/express.png";
import LogoNode from "../../assets/img/node.png";
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
          <img className="technoslide__img" src={LogoReact} alt="Logo React" />
        </li>
        <li>
          <img className="technoslide__img" src={LogoHTML} alt="Logo HTML" />
        </li>

        <li>
          <img className="technoslide__img" src={LogoJS} alt="Logo JS" />
        </li>
        <li>
          <img className="technoslide__img" src={LogoExp} alt="Logo express" />
        </li>
        <li>
          <img className="technoslide__img" src={LogoNode} alt="Logo Node" />
        </li>
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
