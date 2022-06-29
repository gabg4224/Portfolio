import React from "react";
import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem";
import tiktakSrc from "../../assets/tiktak.png";
const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio" >
      <h4>Mis Trabajos Recientes</h4>
      <h2>Portafolio</h2>
      <div className="container portfolio__container">

        <PortfolioItem/>

      
      </div>
    </section>
  );
};

export default Portfolio;
