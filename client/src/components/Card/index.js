import React from "react";

function Card(props) {
  return (
    <div className="card" style={{backgroundImage: props.image ? `url(${props.image})` : "none"}}>
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
  );
}

export default Card;
