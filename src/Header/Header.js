import React, { useState, useContext } from "react";
import "../Header/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { CgShoppingBag } from "react-icons/cg";
import { FaSistrix } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import CartItem from "../CartItems/CartItem";

const Header = () => {
  const [menu, setmenu] = useState("top");
  const { totalRegularPrice, getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="header-page">
      <div className="top-row">
        <div className="navbar-toggler-div">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars className="navbar-toggler-icon"></FaBars>
          </button>
        </div>

        <div className="search-icon-div">
          <FontAwesomeIcon
            id="search"
            icon={faMagnifyingGlass}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"
          />

          <div
            class="offcanvas offcanvas-top"
            tabindex="-1"
            id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel"
          >
            <div class="offcanva-body-div d-flex">
              <div className="input-wrap">
                <input type="email" className="nav-bar-input" required />
                <label>search</label>
                <FaSistrix type="button" className="nav-email-btn" />
              </div>
              <IoCloseOutline
                type="button"
                className="nav-btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></IoCloseOutline>
            </div>
          </div>
        </div>

        <div className="logo-img-div">
          <Link to="/">
            <img
              className="logo-img"
              src={require("../images/refreshimg.avif")}
            />
          </Link>
        </div>

        <div
          type="button"
          className="cart-icon-div"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <CgShoppingBag id="cart" size={25} />
          <div className="cart-count">{getTotalCartItems()}</div>
        </div>

        <div
          class="offcanvas offcanvas-end"
          data-bs-scroll="false"
          tabindex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
              Your cart
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body d-flex flex-column justify-content-between">
            <div>
              <CartItem />
            </div>
            <div>
              <hr />
              <div className="d-flex justify-content-between">
                <div className="subtotal-cart-item">Subtotal</div>
                <div className="total-price-cart-item">
                  ${totalRegularPrice}.00 USD
                </div>
              </div>
              <p className="total-price-cart-item-p">
                Taxes and shipping calculated at checkout
              </p>
              <div className="text-center">
                <div type="button" class="total-price-cart-item-btn">
                  Check out
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="navtop-menu">
        <nav className="navbar navbar-expand-lg">
          <div className="">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav nav-bar-all">
                <li
                  onClick={() => {
                    setmenu("hair");
                  }}
                  className="links"
                >
                  <Link className="nav-link" to="/Hair">
                    Hair{menu === "hair" ? <hr /> : <></>}
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setmenu("body");
                  }}
                  className="links nav-item"
                >
                  <Link className="nav-link" to="/Body">
                    Body{menu === "body" ? <hr /> : <></>}
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setmenu("face");
                  }}
                  className="links nav-item"
                >
                  <Link className="nav-link" to="/Face">
                    Face{menu === "face" ? <hr /> : <></>}
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setmenu("kits");
                  }}
                  className="links nav-item"
                >
                  <Link className="nav-link" to="/Kits">
                    Kits{menu === "kits" ? <hr /> : <></>}
                  </Link>
                </li>
                <ul className="navbar-nav">
                  <li className="links nav-item">
                    <a
                      className="nav-link dropdown-toggle"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      About
                    </a>
                    <ul
                      className="dropdown-menu list-view"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li className="dropdown-list">
                        <Link className="sub-link" to="/Ourstory">
                          Our story
                        </Link>
                      </li>
                      <li className="dropdown-list">
                        <Link className="sub-link" to="/Blog">
                          Blog
                        </Link>
                      </li>
                      <li className="dropdown-list">
                        <Link className="sub-link" to="/Contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
