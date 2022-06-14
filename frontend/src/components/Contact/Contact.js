import React from "react";
import "./Contact.scss";
import Button from "../Button/Button";

function Contact() {
  return (
    <div className="container">
      <div className="sky">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>

        <div id="contact" className="contact">
          <h1 className="contact__title">Contact</h1>
          <p className="contact__legend">
            Je suis actuellement à la recherche d'une alternance pour la rentrée
            2022-2023 en Pré-MSC à{" "}
            <a href="https://www.epitech.eu/fr/formations/pre-msc/">
              l'EPITECH
            </a>
            <br />
            en tant que <span>développeur Fullstack ou Front-end</span>
          </p>
          <div className="contact__me">
            <Button
              classname="contact__button"
              action="Me contacter"
              onClick={() => (window.location = "mailto:kevrakt@gmail.com")}
            ></Button>
            <div className="contact__social">
              <a href="https://www.linkedin.com/in/rakoto-kevin/">Linkedin</a>
              <a href="https://github.com/Gasyh3">GitHub</a>
              <a href="https://twitter.com/RakotoKev14">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
