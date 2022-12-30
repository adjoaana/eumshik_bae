import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../assets/images/microchip-solid.svg";

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav_logo">
          <img
            src={logo}
            width="50px"
            alt="Microchip logo.Click to send you back to home"
          />
        </div>
        <div className="nav_links">
          <a href="#home">HOME</a>
          <a href="hphones">HEADPHONES</a>
          <a href="speakers">SPEAKERS</a>
          <a href="ephones">EARPHONES</a>
        </div>
        <button>

        <FontAwesomeIcon className="fa-icon" icon={["fab", "shopping-cart"]} />
        </button>
        <FontAwesomeIcon icon={solid("shopping-cart")} />
      </nav>
    </header>
  );
};
