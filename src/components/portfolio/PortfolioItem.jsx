import React from "react";
import "./PortfolioItem.css"
const PortfolioItem = ({ title, linkRepository, linkApp,source }) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={source} alt={`${title} portfolio`} />
      </div>
      
      <h3>{title}</h3>
<div className="portfolio__item-call-to-action"><a
        href={linkRepository}
        className="btn"
        target="_blank"
        rel="noreference"
      >
        Github
      </a>

      <a
        href={linkApp}
        className="btn btn-primary"
        target="_blank"
        rel="noreference"
      >
       LiveDemo
      </a></div>
      
    </article>
  );
};

export default PortfolioItem;
