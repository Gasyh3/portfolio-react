import React from "react";
import LogoReact from "../../assets/img/react.png";
import LogoHTML from "../../assets/img/html.png";
import LogoJS from "../../assets/img/js.png";
import LogoNode from "../../assets/img/node.png";
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
          <img className="technoslide__img" src={LogoNode} alt="Logo Node" />
        </li>
      </ul>
    </div>
  );
}

export default TechnoSlide;
