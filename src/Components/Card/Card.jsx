import React from "react";
import "./Card.css";

function Card({ Icon, title, value }) {
  return (
    <div className="card">
      {Icon && <Icon className="icon" />}
      {title && <h2>{title}</h2>}
      {value && <p>{value}</p>}
    </div>
  );
}

export default Card;
