import React from "react";
import Button from "../Button/Button";
import CardDefault from "../Cards/CardDefault";
import CardCollections from "../Cards/CardCollections";
import "./Container.css";

function Container(props) {
  return (
    <div className="card-container">
      <div className="header">
        <h3 className="container-title ">{props.title}</h3>
        <Button text={"View More >"} classes={"btn--primary"}></Button>
      </div>
      <div >
        <div className="row ">
          {props.data.map((card) => (
            <div className="cards col-lg-3 col-md-6 col-sm-12 pb-4 d-flex    ">
              {props.isDefault ? (
                <CardDefault data={card} />
              ) : (
                <CardCollections data={card} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Container;
