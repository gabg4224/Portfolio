import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { DiGithubAlt } from "react-icons/di";
import { BsMouse } from "react-icons/bs";
const Footer = () => {
  return (
    <footer id="footer" className="container footer-container">
      <h1>
        That's all{" "}
        <a href="#">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com/gusta_bermudez/"
         target="_blank"
         rel="noreferrer">
          <FaInstagram className="social"
          />
        </a>
        <a href="https://github.com/gabg4224?tab=repositories"
         target="_blank"
         rel="noreferrer">
          {" "}
          <DiGithubAlt className="social" />
        </a>

        <a href="https://linkedin.com/in/gustavo-bermudez-027465172"
         target="_blank"
         rel="noreferrer">
          <GrLinkedin className="social" />
        </a>
      </div>

      <small className="footer_copy">
        &copy; Gustavo Portfolio :)
      </small>
    </footer>
  );
};

export default Footer;
