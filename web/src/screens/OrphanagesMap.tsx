import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "react-feather";
import { Map, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

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

      <Map
        center={[-4.3639713, -39.3102357]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <Link to="" className="create-orphanage">
        <Plus className="enter-icon" size={32} />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
