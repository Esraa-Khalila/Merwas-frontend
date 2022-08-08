import React from "react";
import Button from "../Button/Button";
import "./CardCollections.css";

function CardCollections(props) {
  return (
    <div class="card" >
      <div className="img-container">
        <img class="card-img-top" src={props.data.image} alt="Card image cap" />{" "}
        <div className="onHover">
          <p className="img-text col-12">{props.data.title}</p>
        </div>
      </div>

      <div class="card-body">
        <h5 class="card-title">{props.data.title}</h5>
        <a class="card-anchor">Multiple deals</a>
        <Button classes={"btn--secondary"} text={"View Collections >"}></Button>
      </div>
    </div>
  );
}

export default CardCollections;
