import React from "react";
import "./Projet.scss";

export default function Projet(props) {
  return (
    <div className="card">
      <a className="card__img" href={props.link}>
        <img className="projet__img" src={props.img} alt="SIte Web" />
      </a>
      <div className="card__text">
        <h1 className="projet__title">{props.title}</h1>
        <p className="projet__legend">{props.legend}</p>
        <h4 className="projet__techno">{props.techno}</h4>
      </div>
    </div>
  );
}
