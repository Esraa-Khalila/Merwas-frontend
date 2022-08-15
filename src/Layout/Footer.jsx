import React from "react";
import Button from "../Components/Button/Button";
import "./Layout.css";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer className="pt-4 mt-4 bg-white ">
      <div className="container-fluid ">
        <div className="row px-5">
          <>
            <div className="col-md-12 mb-5	d-none d-block d-xl-none">
              <h5 className="text-dark mb-3 text-muted">Newsletter Signup</h5>
              <p className="text-muted">
                Sign up for our daily emails and we'll send you all the best
                deals, tailored for you.
              </p>
              <div className="input-group">
                <span className="input-group-append">
                  <button
                    className="pb-2 bg-white border-right-0 border rounded "
                    type="button"
                  >
                    <Icon icon="carbon:email" className="mt-1" />
                  </button>
                </span>
                <input
                  className="col-md-7 col-sm-7 col-4 border-left-0 border"
                  type="email"
                  placeholder="Enter your Email"
                />
                <Button text={"Subscribe"} classes={"btn--third "}></Button>
              </div>
            </div>
          </>
          <div className="col-xl-3 col-md-5">
            <p className=" text-muted">follow us on</p>
            <p className=" text-muted p-1">
              <a className="text-primary" href="#">
                <Icon icon="cib:facebook" color="black" />
              </a>
              <a className="text-primary" href="#">
                <Icon icon="entypo-social:twitter-with-circle" color="black" />
              </a>
              <a className="text-primary" href="#">
                <Icon
                  icon="entypo-social:instagram-with-circle"
                  color="black"
                />
              </a>
              <a className="text-primary" href="#">
                <Icon icon="cib:facebook" color="black" />
              </a>
            </p>
            <p className="small text-muted">Get app exclusive deals</p>
            <Button
              text={"Download our App"}
              classes={"btn--third  mb-3"}
            ></Button>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-3 ">
            <h4 className="text-link mb-3">GrabOne</h4>
            <ul className="list-unstyled text-muted">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Terms & Returns</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Gift Card</a>
              </li>
            </ul>
          </div>
          <div className=" col-xl-2 col-lg-3 col-md-3">
            <h4 className="text-link mb-3">My Account</h4>
            <ul className="list-unstyled text-muted">
              <li>
                <a href="#">My Cart</a>
              </li>
              <li>
                <a href="#">My Coupons</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className=" col-xl-2 col-lg-3 ">
            <h4 className="text-link mb-3">Merchants</h4>
            <ul className="list-unstyled text-muted">
              <li>
                <a href="#">Run a Deal</a>
              </li>
              <li>
                <a href="#">Merchant Center</a>
              </li>
            </ul>
          </div>
          <>
            <div className="col-lg-3 d-none d-xl-block d-md-none">
              <h5 className="text-dark mb-3">Newsletter Signup</h5>
              <p class="small text-muted">
                Sign up for our daily emails and we'll send you all the best
                deals, tailored for you.
              </p>
              <div className="input-group">
                <span className="input-group-append">
                  <button
                    className="pb-2 bg-white border-right-0 border rounded"
                    type="button"
                  >
                    <Icon icon="carbon:email" className="mt-1" />
                  </button>
                </span>
                <input
                  class="col-6 border-left-0 border"
                  type="email"
                  value="Enter your Email"
                  id="example-search-input"
                />
                <Button text={"Subscribe"} classes={"btn--third "}></Button>
              </div>
            </div>
          </>
        </div>
        <hr />
      <div className="d-flex justify-content-center">
        <a href="">Privacy Policy</a>
        <p className=" text-muted">© 2022 GrabOne Limited</p>
      </div>
      </div>
  
    </footer>
  );
}

export default Footer;
