import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card" style={{backgroundImage: props.image ? `url(${props.image})` : "none"}}>{props.text}</div>
  );
}

export default Card;
