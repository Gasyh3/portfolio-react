import React from "react";
import "./ProjetAlt.scss";

export default function Projet(props) {
  return (
    <div className="cardalt">
      <a className="cardalt__img" href={props.link}>
        <img className="projetalt__img" src={props.img} alt="Site Web" />
      </a>
      <div className="cardalt__text">
        <h1 className="projetalt__title">{props.title}</h1>
        <p className="projetalt__legend">{props.legend}</p>
        <h4 className="projetalt__techno">{props.techno}</h4>
      </div>
    </div>
  );
}
