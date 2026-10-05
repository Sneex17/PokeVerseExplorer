import React from "react";
import "./Header.css";
import Ball from "../../assets/PokeBall.svg";
import Titulo from "../../assets/Titulo.svg";
import BallGray from '../../assets/BallGrey.svg'

function HeaderMain() {
  return (
    <header className="header-main">
      <div className="container-titulo">
        <img src={Ball} alt="" className="ball"/>
        <img src={Titulo} alt="" className="text" />
      </div>
      <div className="conatiner-img">
        <img src={BallGray} alt="" />
      </div>
      <div className="container-ball">
        <h3 className="text-msj">!Descubre, explora, atrapa!</h3>
        <img src={Ball} alt="" className="ball"/>
      </div>
    </header>
  );
}

export default HeaderMain;
