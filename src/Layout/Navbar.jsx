import React from "react";
import "./Layout.css";
import { Icon } from "@iconify/react";

function Navbar() {
  return (
    <>
      {/* header */}
      <nav class="navbar pr-xl-5">
        <a class="navbar-brand text-white" href="/">
          GrabOne
        </a>
        <div>
          <ul class="nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="/"
              >
                <Icon className="navbar-iconItem" icon="ep:location" />
                Auckland
              </a>
              <div class="dropdown-menu navOne">
                <a
                  class="dropdown-item"
                  href="https://new.grabone.co.nz/auckland?region=auckland"
                >
                  Auckland
                </a>

                <a
                  class="dropdown-item"
                  href="https://new.grabone.co.nz/auckland?region=waikato"
                >
                  Waikato
                </a>

                <a
                  class="dropdown-item"
                  href="https://new.grabone.co.nz/auckland?region=wellington"
                >
                  Welligton
                </a>

                <a
                  class="dropdown-item"
                  href="https://new.grabone.co.nz/northland"
                >
                  notthland
                </a>

                <a
                  class="dropdown-item"
                  href="https://new.grabone.co.nz/manawatu-wanganui"
                >
                  manawaru - wanganui
                </a>

                <a
                  class="dropdown-item"
                  href="https://new.grabone.co.nz/tauranga"
                >
                  taurango
                </a>

                <a
                  class="dropdown-item"
                  href="https://new.grabone.co.nz/rotorua-taupo"
                >
                  Rotorua - taupo
                </a>

                <a
                  class="dropdown-item"
                  href="https://new.grabone.co.nz/hawkes-bay"
                >
                  hawkes bay
                </a>

                <a
                  class="dropdown-item"
                  href="https://new.grabone.co.nz/auckland?region=christchurch"
                >
                  christchurch
                </a>

                <a
                  class="dropdown-item"
                  href="https://new.grabone.co.nz/taranaki"
                >
                  taranaki
                </a>

                <a
                  class="dropdown-item"
                  href="https://new.grabone.co.nz/nelson-marlborough"
                >
                  nelson - marlborough
                </a>

                <a
                  class="dropdown-item"
                  href="https://new.grabone.co.nz/queenstown-wanaka"
                >
                  queenstown - wanaka
                </a>

                <a
                  class="dropdown-item"
                  href="https://new.grabone.co.nz/dunedin-invercargill"
                >
                  Dunedin - invercargill
                </a>
              </div>
            </li>
            <ul className="nav d-none d-xl-flex">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Icon className="navbar-iconItem" icon="akar-icons:heart" />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Icon className="navbar-iconItem" icon="bx:cart" />
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  <Icon className="navbar-iconItem" icon="carbon:user" />
                </a>
                <div class="dropdown-menu">
                  <a
                    class="dropdown-item"
                    href="https://www.grabone.co.nz/my-stuff/my-account?_ga=2.92769240.474249449.1660289983-997285099.1659601708"
                  >
                    My Account
                  </a>
                  <a
                    class="dropdown-item"
                    href="https://www.grabone.co.nz/login"
                  >
                    Gifts
                  </a>
                  <a class="dropdown-item" href="#">
                    Profile
                  </a>

                  <a class="dropdown-item" href="#">
                    My Subscriptions
                  </a>
                  <a class="dropdown-item" href="#">
                    My Purchases
                  </a>
                  <a
                    class="dropdown-item"
                    href="https://www.grabone.co.nz/login?_ga=2.105295814.474249449.1660289983-997285099.1659601708"
                  >
                    Login
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Icon className="navbar-iconItem" icon="ic:outline-email" />
                  <span> Subscribe</span>
                
                </a>
              </li>
            </ul>
            <ul className="nav d-none d-flex d-xl-none fixed-bottom bg-white justify-content-around pt-1 ">
              <li class="nav-item">
                <a href="/">
                  <Icon
                    icon="ant-design:home-outlined"
                    className="navbar-iconMedia"
                  />
                  <p className="icon text-dark">Home</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#">
                  <Icon icon="akar-icons:search" className="navbar-iconMedia" />
                  <p className="icon text-dark">Search</p>
                </a>
              </li>
              <li class="nav-item">
                <a class="" href="#">
                  <Icon icon="bx:category" className="navbar-iconMedia" />
                  <p className="icon text-dark">Category</p>
                </a>
              </li>
              <li class="nav-item">
                <a class="" href="#">
                  <Icon className="navbar-iconMedia" icon="bx:cart" />
                  <p className="icon text-dark">Cart</p>
                </a>
              </li>

              <li class="nav-item dropdown">
                <a data-toggle="dropdown" href="#">
                  <Icon className="navbar-iconMedia" icon="carbon:user" />
                  <p className="icon text-dark ">Account</p>
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">
                    My Account
                  </a>
                  <a class="dropdown-item" href="#">
                    Gifts
                  </a>
                  <a class="dropdown-item" href="#">
                    Profile
                  </a>

                  <a class="dropdown-item" href="#">
                    My Subscriptions
                  </a>
                  <a class="dropdown-item" href="#">
                    My Purchases
                  </a>
                  <a class="dropdown-item" href="#">
                    Login
                  </a>
                </div>
              </li>
            </ul>
          </ul>
        </div>
      </nav>

      {/* navbar */}
      <nav
        class="navbar navbar-expand shadow-sm bg-white d-none d-lg-none d-xl-flex"
        id="navbar"
      >
        <div>
          <ul class="nav ml-5" id="links">
            <li class="nav-item dropdown " id="links">
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
              >
                Browse Categories
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  Activities,Event &amp; Outdoors
                </a>
                <a class="dropdown-item" href="#">
                  Gifts
                </a>
                <a class="dropdown-item" href="#">
                  Profile
                </a>

                <a class="dropdown-item" href="#">
                  My Subscriptions
                </a>
                <a class="dropdown-item" href="#">
                  My Purchases
                </a>
                <a class="dropdown-item" href="#">
                  Login
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div class="navbar-collapse">
          <ul class="navbar-nav mr-auto ml-3" id="items">
            <li>
              <a
                class="nav-link"
                href="https://new.grabone.co.nz/auckland/search?sortby=new&view=grid"
              >
                What's New
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://new.grabone.co.nz/auckland/search?view=grid"
              >
                Trending
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.grabone.co.nz/login?success_url=https://new.grabone.co.nz/auckland/picked-for-you"
              >
                For You
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://new.grabone.co.nz/auckland/c/shop-collection?view=grid"
              >
                Shop Products
              </a>
            </li>
          </ul>
          <div class="input-group col-xl-5">
            <span>
              <button class="pb-2 bg-white border-right-0 border rounded" type="button">
                <Icon icon="akar-icons:search" className="mt-2"/>
              </button>
            </span>
            <input
              class="col-10 border-left-0 border rounded"
              type="text"
              placeholder="Search GrabOne"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
