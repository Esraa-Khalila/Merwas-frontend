import React from "react";
import Button from "../Components/Button/Button";
import "./Layout.css";

function Footer() {
  return (
    <div className="footer-bg">
      <div className="">
        <div className="row">
          <div className="social col-lg-4 col-sm-12 text-center p-4">
            <p class="social-text">follow us on</p>

            <a class="btn  btn-floating " href="#!" role="button">
              <i class="fab fa-facebook-f"></i>
            </a>

            <a class="btn btn-floating m-1" href="#!">
              <i class="fab fa-twitter"></i>
            </a>

            <a class="btn  btn-floating m-1" href="#!" role="button">
              <i class="fab fa-instagram"></i>
            </a>

            <a class="btn  btn-floating m-1" href="#!" role="button">
              <i class="fab fa-youtube"></i>
            </a>

            <p className="social-text">Get app exclusive deals</p>
            <Button text={"Download our App"} classes={"btn--third"}></Button>
          </div>
          <div className="link-footer col-lg-4 col-sm-12 text-center ">
            <div className="row">
              <div className="col-lg-4 col-sm-12 text-center p-4">
                <h5 class="text-uppercase link-header">GrabOne</h5>

                <ul class="list-unstyled ">
                  <li>
                    <a href="#!" class="text-decoration-none">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-decoration-none">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-decoration-none">
                      Terms & Returns
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-decoration-none">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-decoration-none">
                      Gift Cards
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-sm-12 text-center p-4 ">
                <h5 class="text-uppercase link-header">My Account</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-decoration-none">
                      My Account
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-decoration-none">
                      My Cart
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-decoration-none">
                      My Coupons
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-decoration-none">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-12 p-4 m-1">
                <h5 class="text-uppercase link-header">Merchants</h5>

                <ul class="list-unstyled mb-0 ">
                  <li>
                    <a href="#!" class="text-decoration-none ">
                      Run a Deal
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-decoration-none">
                      Merchant Centre
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="subsribe-footer col-lg-4 col-sm-12 text-center p-5">
            <p>Newsletter Signup</p>
            <p>
              Sign up for our daily emails and we'll send you all the best
              deals, tailored for you.
            </p>
            <div className="subscribe text-center m-25">
              <input
                type="text"
                placeholder="&#9993; Enter email address"
                className=""
              />

              <Button text={"Subscribe"} classes={"btn--third "}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
