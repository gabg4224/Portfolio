import React from "react";
import "./ContactItem.css";
export const ContactItem = ({ icon, util, name, source }) => {
  return (
    <a
      className="contact__option"
      href={source}
      target={source.includes("mailto") ? "_self" : "_blank"}
      rel="noreferrer"
    >
      {icon}
      <h4>{util}</h4>
      <h5>{name}</h5>
      <h6>Send a {source.includes("mailto") ? "mail" : "message"}</h6>
    </a>
  );
};
