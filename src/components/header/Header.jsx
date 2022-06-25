import React from "react";
import "./Header.css";
import ME from "../../assets/gus.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hola! yo soy</h4>
        <h1>Gustavo Bermudez</h1>
        <h4 className="text-light">Front-End Developer</h4>

        <div className="me">
        
          <img src={ME} alt="profile gus" />
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
