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

        <div className="contact">
          <h1 className="contact__title">Contact</h1>
          <p className="contact__legend">
            Je suis actuellement à la recherche d'une alternance pour la rentrée
            2022-2023 <br />
            en tant que développeur Fullstack ou Front-end
          </p>
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
  );
}

export default Contact;
