import React from "react";
import CardDefault from "../Cards/CardDefault";
import './Header.css'
import { Icon } from "@iconify/react";
import { useState } from "react";
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
    <>
      <div className="container-fluid">
        <div className="my-4 pb-2 d-none d-sm-block">
          <img
            className="img-fluid w-100"
            src="https://mediacdn.grabone.co.nz/asset/hoCwTPgtq5"
          />
        </div>
        <div className="mt-2 mb-2 pb-3  d-none d-block d-sm-none">
          <img
            className="img-fluid"
            src="https://mediacdn.grabone.co.nz/asset/aTX6skQdr4"
          />
        </div>

        <div className="row">
          <div className="d-none d-xl-flex">
            <Discover />
          </div>
          <div className="col-xl col-md-6 ">
            <CardDefault data={cardOne} />
          </div>
          <div className="col-xl col-md-6 pt-2 ">
            <CardDefault data={cardTwo} />
          </div>
        </div>
        <div className="p-4 my-4 bg-white ">
          <div className="row ">
            <h5 class="text-contact p-4 col-xl-6 font-weight-bolder">
              Get the best deals delivered direct to your inbox each day
            </h5>

            <div className=" p-xl-3 pl-5 col-xl-6 col-8">
              <div className="row">
                <span class="input-group-append ">
                  <button
                    class="pb-2 bg-white border-right-0 border"
                    type="button"
                  >
                    <Icon icon="carbon:email" className="mt-2" />
                  </button>
                </span>
                <div className="col-xl-8  col-7 p-0">
                  <input
                    type="text"
                    placeholder="Enter email address"
                    className="form-control border-left-0 border col-sm-12"
                  />
                </div>
                <div className="col-xl-3 col-1 p-0">
                  <Button
                    text={"Subscribe"}
                    classes={"btn--third"}
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
