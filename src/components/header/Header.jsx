import React from "react";
import "./Header.css";
import ME from "../../assets/gus.jpg";
import { BsMouse } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello! i am</h4>
        <h1>Gustavo Bermudez</h1>
        <h4 className="text-light">Front-End Developer</h4>

        <div className="me">
        
          <img src={ME} alt="profile gus" />
        </div>

        <a href='#footer' className='scroll_down'>
      
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
      
      </a>
      </div>
    </header>
  );
};

export default Header;
