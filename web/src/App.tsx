import React from "react";
import { ArrowRight } from "react-feather";

import "./sass/app.css";
import "./sass/screens/landing.css";

import logo from "./assets/logo.svg";

function App() {
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

        <a href="" className="enter-app">
          <ArrowRight className="enter-icon" size={28} />
        </a>
      </div>
    </div>
  );
}

export default App;
