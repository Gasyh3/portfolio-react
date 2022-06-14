import React from "react";
import "./Projects.scss";
import Projet from "../Projet/Projet";
import ProjetAlt from "../ProjetAlt/ProjetAlt";
import Ohmyfood from "../../assets/img/ohmyfood.png";
import Booki from "../../assets/img/booki.png";
import Chouette from "../../assets/img/chouette.png";
import Kanap from "../../assets/img/kanap.png";

function Projects() {
  return (
    <div className="container">
      <div className="sky">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>

        <div className="projects">
          <h1 className="projects__title">Mes projets</h1>
          <div className="projects__block">
            <Projet
              img={Ohmyfood}
              title="Ohmyfood"
              legend="Entreprise française de livraison de plats cuisinés"
              techno="html sass"
            />
            <ProjetAlt
              img={Booki}
              title="Booki"
              legend="Entreprise française de réservation en ligne"
              techno="html css"
            />
            <Projet
              img={Chouette}
              title="La Chouete Agence"
              legend="Agence de web design "
              techno="html css"
            />
            <ProjetAlt
              img={Kanap}
              title="Kanap"
              legend="Entreprise française de ventes de canapés"
              techno="html css"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
