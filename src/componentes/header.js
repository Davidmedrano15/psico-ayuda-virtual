// src/components/Header.js
import React from "react";
import "../css/header.css";
import psilogo from "../images/logo1.png";

function Header() {
  return (
    <header className="header__app">
      <div className="header__logo">
        <img src={psilogo} className="psi__logo" alt="Logo De psicologia" />
      </div>
    </header>
  );
}

export default Header;
