import React from "react";
import CardDefault from "../Cards/CardDefault";
import Container from "../SectionContainer/Container";

import { useState } from "react";
import "./Header.css";
import Discover from "../Discover/Discover";
import Button from "../Button/Button";

function Header(props) {
  const [cardOne, setCardOne] = useState({
    title: "Luxury 5-Star Auckland Stay at Cordis",
    image:
      "//main-cdn.grabone.co.nz/goimage/495x343/aeb84584eaa6c41eed7337bd45f4ad22e01cdf99.jpg",
    description:
      "Luxury Five-Star Auckland Stay for Two at Cordis Auckland incl. Buffet Breakfast, $50 Food & Beverage Credit, Drinks, Pool & Spa Access, Daily Parking & Late Checkout - Options to Stay in the Pinna...",
    subTitle: "Cordis",
    location: "Auckland",
    bought: "100 bought",
    price: "$279",
    discount: "$711",

  });
  const [cardTwo, setCardTwo] = useState({
    title: " Unlimited Entry Superpass to Rainbow's End",
    image:
      "//main-cdn.grabone.co.nz/goimage/495x343/cd3366fb48c5643b0676674cc0b31b46f11f77e3.jpg",
    description:
      "Superpass to Rainbow's End - Unlimited Entry to all Rides incl. incl. New City Strike Laser Tag - Option for a Family Pass for Four People - Valid from 25th July",
    subTitle: "Rainbow's End",
    location: "Manukau",
    bought: "2280 bought",
    price: "$49",
    discount: "$64.66",
  
  });

  return (
    <div>
      <div>
        <div className="container">
      <div className="header-top ">
        <img
          className="header-img col-12 w-100"
          src="https://mediacdn.grabone.co.nz/asset/QtN08LooJk"
          alt=""
        /></div>
      </div></div>
      <div className="container">
        <div className="row big ">
          <div className="col-lg-3  col-sm-12  ">
            <Discover />
          </div>
          <div className="col-lg-4   col-sm col-md-12 bigg ">
            <CardDefault data={cardOne} />
          </div>
          <div className="col-lg-4 col-sm-12 bigg ">
            <CardDefault data={cardTwo} />
          </div>
        </div>
      </div>
      <div className="contact container">
        <div className="row ">
          <div className="col-lg-6 col-m-12">
            <h5 class="discover-text  mb-0  ">
              Get the best deals delivered direct to your inbox each day
            </h5>
          </div>
          <div className="col-lg-5 col-m-12 col-sm-2">
            <div className="row">
              <div className="subscribe ">
                <input
                  type="text"
                  placeholder="&#9993; Enter email address"
                  className="col-lg-11 col-m-12 col-sm-2"
                />

                <Button
                  text={"Subscribe"}
                  classes={"btn--third col-12 "}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
