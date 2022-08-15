import React from "react";
import "./CardDefault.css";

function CardDefault(props) {
  return (
    <div class="card">
      <div>
        {/* <a className="anchor" href={props.data.link}> */}
        <div className="img-container position-relative">
          <img class="card-img-top" src={props.data.image} />
          <div className="onHover">
            <p className="img-text text-white text-center col-12">
              {props.data.description}
            </p>
          </div>
        </div>
        <div class="card-body pb-xl-0 pt-2 pl-3">
          <div class="card-title text-dark text-truncate mb-0">
            {props.data.title}
          </div>
          <a class="card-anchor">{props.data.subTitle}</a>
          <div className="location">{props.data.location}</div>
        </div>
        <div className="card-price d-flex justify-content-between px-3 pb-2">
          <div className="bought d-flex align-items-end pb-2">
            {props.data.bought}
          </div>
          <div className="price">
            <span className="from d-flex justify-content-end">from</span>
            <div className="price-container">
              <span className="discount pr-2">{props.data.discount}</span>
              <span className="currentPrice h3 font-weight-bold">{props.data.price}</span>
              <span className="currentPrice">{props.data.isBig}</span>
            </div>
          </div>
        </div>
        {/* </a> */}
      </div>
    </div>
  );
}

export default CardDefault;
