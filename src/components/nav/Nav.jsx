import React from "react";
import "./Nav.css";
import { BiHome, BiUser, BiMessageDetail } from "react-icons/bi";
import { FiFolder } from "react-icons/fi";
import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

 
    
  return (
    <nav>
      <a
      
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUser />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <FiFolder />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
