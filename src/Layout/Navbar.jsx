import React from "react";
import "./Layout.css";

function Navbar() {
  return (
    <>
      <nav>
        <div class="navbar navbar-expand-lg">
          <div class="container-fluid ">
            <a class="navbar-brand" href="#">
              GrabOne
            </a>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup"></div>
            <div className="icons  ">
              <div className="  d-flex justify-content-sm-start">
                <a
                  class="nav-link location  icon-weight"
                  aria-current="page"
                  href="#"
                >
                  <i class="fa fa-location-dot "></i>
                </a>
                <div class=" nav-link dropdown nav-location">
                  <button class="dropbtn dropdown-toggle">Auckland</button>

                  <div class="dropdown-content">
                    <a href="#">Auckland</a>
                    <a href="#">Waikato</a>
                    <a href="#">Wellington</a>
                  </div>
                </div>
              </div>

              <div className="position d-flex">
                <a class="nav-link " aria-current="page" href="#">
                  <i class="fa fa-heart"></i>
                </a>
                <a class="nav-link icon-weight" aria-current="page" href="#">
                  <i class="fa-solid fa-cart-shopping"></i>
                </a>
                <a class="nav-link " aria-current="page" href="#">
                  <i class="fa fa-user"></i>
                </a>
                <a class="nav-link  subscribe" aria-current="page" href="#">
                  <i class="fa fa-envelope"></i>
                  <span>Subscribe</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar navbar-bg navbar-expand-lg ">
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto  ">
              <li class="nav-item dropdown">
                <div class=" nav-link dropdown ">
                  <a class=" nav-link dropdown-toggle pt-0 ">
                    Browse Categories
                  </a>

                  <div class="dropdown-content ">
                    <a href="#">Automotive</a>
                    <a href="#">Baby, Kids & Toys</a>
                    <a href="#">Beauty, Massage & Spa</a>
                    <a href="#"> Books & Magazines</a>
                  </div>
                </div>

                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    What's New
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Trending
                  </a>
                </div>
              </li>
              <li class="nav-item active">
                <a class="nav-link nav-color" href="#">
                  What's New <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Trending
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  For You
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Shop Products
                </a>
              </li>
            </ul>
            <div> </div>
            <form class="form-inline my-2 my-lg-0 ">
              <div className="search">
                <i class="fa fa-magnifying-glass"></i>
                <input
                  class="form-control"
                  type="search"
                  placeholder="Search GrabOne"
                  aria-label="Search"
                />
              </div>
              {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button> */}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
