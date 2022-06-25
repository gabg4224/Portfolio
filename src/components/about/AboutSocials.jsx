import React from "react";
import {   FaInstagram } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import {  DiGithubAlt} from "react-icons/di";
import "./AboutSocials.css";

const AboutSocials = () => {
  return (
    <div className="about__socials">
      
      <div className="card">
        <a
          href="https://linkedin.com/in/gustavo-bermudez-027465172"
          target="_blank"
          rel="noreferrer"
        >
          <GrLinkedin />
        </a>
        
      </div>

      <div className="card">
        <a
          href="https://github.com/gabg4224?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <DiGithubAlt />
        </a>
       
      </div>

      <div className="card">
        <a
          href="https://www.instagram.com/gusta_bermudez/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        
      </div>
      
    </div>
  );
};

export default AboutSocials;
