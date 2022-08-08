import React from "react";
import './CardDefault.css'

function CardDefault(props) {
  return (
    <div class="card card-default  flex-fill ">
      <a className="anchor" href={props.data.link} >
        <div className="img-container ">
          <img
            class="card-img-top"
            src={props.data.image}
            alt="Card image cap"
          />{" "}
          <div className="onHover">
            <p className="img-text col-12">{props.data.description}</p>
          </div>
        </div>
        <div class="card-body card-default ">
          <h6 class="card-title ">{props.data.title}</h6>
          <a class="card-anchor ">{props.data.subTitle}</a>
          <div className="location">{props.data.location}</div>
        </div>
        <div className="card-price">
          <div className="bought fs-6">{props.data.bought} </div>
          <div className="price">
            <span className="from ">from</span>
            <div className="price-container">
              <span className="discount fs-6">{props.data.discount}</span>
              <span className="currentPrice fs-4">{props.data.price}</span>
              <span className="currentPrice" style={{ color: "red" }}>
                {props.data.isBig}
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CardDefault;
