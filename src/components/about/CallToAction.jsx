import React from "react";
import CV from '../../assets/GustavoBermudezCV.pdf'
import "./CallToAction.css"
const CallToAction = () => {
  return (
    <div className="callToAction">
      <a href={CV} download className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Contact</a>
    </div>
  );
};

export default CallToAction;
