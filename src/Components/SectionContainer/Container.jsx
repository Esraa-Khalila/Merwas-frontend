import React from "react";
import Button from "../Button/Button";
import CardDefault from "../Cards/CardDefault";
import CardCollections from "../Cards/CardCollections";
import "./Container.css";

function Container(props) {
  return (
    <>
      <div className="card-container">
        <div className="row pb-3 pl-3">
          <h3 className="container-title mr-4">
            {props.title}
          </h3>
          <Button text={"View More >"} classes={"btn--primary "}></Button>
        </div>
        <div>
          <div className="row">
            {props.data.map((card) => (
              <div className="col-xl-3 col-lg-6 col-md-6 col-12 py-2">
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
    </>
  );
}

export default Container;
