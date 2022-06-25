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

        <PortfolioItem
          title={"tiktak"}
          linkRepository={
            "https://https://github.com/gabg4224/rock_paper-scissors"
          }
          linkApp={"https://gabg4224.github.io/rock_paper-scissors/"}
          source={tiktakSrc}
        />

        <PortfolioItem
          title={"tiktak"}
          linkRepository={
            "https://https://github.com/gabg4224/rock_paper-scissors"
          }
          linkApp={"https://gabg4224.github.io/rock_paper-scissors/"}
          source={tiktakSrc}
        />

        <PortfolioItem
          title={"tiktak"}
          linkRepository={
            "https://https://github.com/gabg4224/rock_paper-scissors"
          }
          linkApp={"https://gabg4224.github.io/rock_paper-scissors/"}
          source={tiktakSrc}
        />

        <PortfolioItem
          title={"tiktak"}
          linkRepository={
            "https://https://github.com/gabg4224/rock_paper-scissors"
          }
          linkApp={"https://gabg4224.github.io/rock_paper-scissors/"}
          source={tiktakSrc}
        />

        <PortfolioItem
          title={"tiktak"}
          linkRepository={
            "https://https://github.com/gabg4224/rock_paper-scissors"
          }
          linkApp={"https://gabg4224.github.io/rock_paper-scissors/"}
          source={tiktakSrc}
        />

        <PortfolioItem
          title={"tiktak"}
          linkRepository={
            "https://https://github.com/gabg4224/rock_paper-scissors"
          }
          linkApp={"https://gabg4224.github.io/rock_paper-scissors/"}
          source={tiktakSrc}
        />
      </div>
    </section>
  );
};

export default Portfolio;
