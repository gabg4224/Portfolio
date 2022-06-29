import React from "react";
import "./ContactItem.css"
export const ContactItem = ({icon,util,name,source}) => {
 
 const goSource = ()=>{
  var win = window.open(source);
  // Cambiar el foco al nuevo tab (punto opcional)
  win.focus();
 }
  return (
    <article className="contact__option" onClick={goSource}>
      {icon}
      <h4>{util}</h4>
      <h5>{name}</h5>
      <a href={source} >Send a message</a>
    </article>
  );
};
