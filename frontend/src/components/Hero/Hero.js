import React from "react";
import "./Hero.scss";
import Button from "../Button/Button";

function Hero() {
  return (
    <div className="container">
      <div className="sky">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>

        <div className="hero">
          <h1 className="hero__hello">Bonjour, je suis </h1>
          <h2 className="hero__name">Kévin Rakotoniaina</h2>
          <h3 className="hero__legend">Créateur de contenu pour le Web</h3>
          <p className="hero__text">
            Passionné par la programmation et le monde numérique,
            l'apprentissage de nouveaux langages et des évolutions
            technologiques du Web constituent pour moi un défi des plus
            intéressants.
          </p>
          <Button
            classname="contact__button"
            action="Me contacter"
            onClick={() => (window.location = "mailto:kevrakt@gmail.com")}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
