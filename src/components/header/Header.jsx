import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/papailogoPNG.png";
import Social from "./Social";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Papai Mistry</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <Social />
        <div className="me">
          <img src={ME} alt="my-pic" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
