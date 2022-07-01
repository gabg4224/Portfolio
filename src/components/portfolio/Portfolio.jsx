import React from "react";
import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem";
const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio" >
      <h4>My recent work</h4>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">

        <PortfolioItem/>

      
      </div>
    </section>
  );
};

export default Portfolio;
