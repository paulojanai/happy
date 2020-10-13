import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "react-feather";

import icon from "../assets/icon.svg";

import "../sass/screens/orphanages-map.css";

const OrphanagesMap = () => {
  return (
    <div className="page-map">
      <aside>
        <header>
          <img src={icon} alt="Icon" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Ceará</strong>
          <span>Canindé</span>
        </footer>
      </aside>

      <div></div>

      <Link to="" className="create-orphanage">
        <Plus className="enter-icon" size={32} />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
