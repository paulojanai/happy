import React from "react";
import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";

import "../sass/screens/landing.css";

import logo from "../assets/logo.svg";

const Landing = () => {
  return (
    <div className="page-landing">
      <div className="content-wrapper">
        <img src={logo} alt="happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Canindé</strong>
          <span>Ceará</span>
        </div>

        <Link to="/app" className="enter-app">
          <ArrowRight className="enter-icon" size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
