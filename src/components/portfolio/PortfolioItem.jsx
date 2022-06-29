import React from "react";
import "./PortfolioItem.css";
import ArrayPortfolio from "../Utils/PortfolioJobs";

const PortfolioItem = () => {

  return(
ArrayPortfolio.map(({ id, img, title, repository, liveDemo }) => {
  
  
  return(
  <article key={id} className="portfolio__item">
<div className="portfolio__item-image">
  <img src={img} alt={`${title} portfolio`} />
</div>

<h3>{title}</h3>
<div className="portfolio__item-call-to-action">
  <a
    href={repository}
    className="btn"
    target="_blank"
    rel="noreference"
  >
    Github
  </a>

  <a
    href={liveDemo}
    className="btn btn-primary"
    target="_blank"
    rel="noreference"
  >
    LiveDemo
  </a>
</div>
</article>

  )
})



  )



};

export default PortfolioItem;
