import React from "react";
import Slideshow from "../Slideshow/Slideshow";
import TechnoSlide from "../TechnoSlide/TechnoSlide";
import "./About.scss";

function About() {
  return (
    <div className="container">
      <div className="sky">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>

        <div className="about">
          <h1 className="about__title">À propos de moi</h1>
          <div className="aboutme">
            <div className="aboutme__text">
              <p>
                Salut ! Je suis Kévin Rakotoniaina et aussi loin que je me
                rappelle j'ai toujours eu un clavier et une souris entre les
                mains.
              </p>
              <p>
                Le domaine du développement m'a toujours fasciné - jeux vidéos,
                application mobile et site Web.
              </p>
              <p>
                Mon intêret pour le développement Web commence en 2017 lorsque
                je découvre HTML/CSS, depuis j'ai découvert un nouveau monde.
              </p>
              <p>
                Grâce à{" "}
                <a href="https://openclassrooms.com/fr/">OpenClassrooms</a> j'ai
                affiné mes compétences en travaillant sur des projets guidés
                dans le domaine du Web.
              </p>
            </div>
            <div className="aboutme__img">
              <Slideshow />
            </div>
          </div>
          <div className="about__tech">
            <TechnoSlide />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
