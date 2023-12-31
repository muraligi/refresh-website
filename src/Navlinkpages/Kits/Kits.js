import React, { useContext } from "react";
import "../Kits/Kits.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import Cartbutton from "../../Cartbuttonpage/Cartbutton";

function Kits() {

  const { addToCart } = useContext(ShopContext);

  return (
    <div>
      <div className="hair-header">
        <img
          className="top-img"
          src={require("../../images/KitsImages/Kitsimg-top.png")}
        />
        <div className="content-text">
          <h1>Kits</h1>
          <p>
            Whether at home, at the gym, or on the road, we’ve got the kits you
            need to ensure that you’re looking great and feeling fresh, day
            after day.
          </p>
        </div>

        <div className="Main-filter">
          <div className="leftside">
            Filter:
            <li className="nav-item filter-li dropdown">
              <a
                className="nav-toggle dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Availability
              </a>
              <ul
                className="dropdown-menu filter"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <div className="filter-area">
                  <div id="select-row">
                    <p>0 selected</p>
                    <a>Reset</a>
                  </div>
                  <div className="checkbox-row">
                    <div className="form-check check-box">
                      <input
                        className="form-check-input box"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label className="form-check-label" for="defaultCheck1">
                        In stock (6)
                      </label>
                    </div>
                    <div className="form-check check-box">
                      <input
                        className="form-check-input box"
                        type="checkbox"
                        value=""
                        id="defaultCheck2"
                        disabled
                      />
                      <label className="form-check-label" for="defaultCheck2">
                        Out of stock (0)
                      </label>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
            <div className="prize-row">
              <li className="nav-item filter-li dropdown">
                <a
                  className="nav-toggle dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Prize
                </a>
                <ul
                  className="dropdown-menu filter"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div className="prize-area">
                    <div id="select-row">
                      <p>The highest price is $98.00</p>
                      <a>Reset</a>
                    </div>
                    <div className="input-row">
                      <div className="input-area">
                        $
                        <input type="number" className="prizeip" required />
                        <label for="">From</label>
                      </div>
                      <div className="input-area">
                        $
                        <input type="number" className="prizeip" required />
                        <label for="">To</label>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
            </div>
          </div>

          <div className="rightside">
            Sort by:
            <div className="option-area">
              <select class="form-select select">
                <option value="1">Featured</option>
                <option selected value="2">
                  Best selling
                </option>
                <option value="4">Alaphabetically, A-Z</option>
                <option value="5">Alaphabetically, Z-A</option>
                <option value="6">Prize, low to high</option>
                <option value="7">Prize, high to low</option>
                <option value="8">Date, old to new</option>
                <option value="9">Date, new to old</option>
              </select>
            </div>
            <div className="product">6 products</div>
          </div>
        </div>

        <div className="cards-rows">
          <CardGroup id="kits1-card-row">
            <Card id="kits-cards">
              <div className="hover-img">
                <Link to={`/Product/${28}`}>
                  <img
                    id="kit-img1"
                    src={require("../../images/KitsImages/card1.png")}
                  />
                  <img
                    id="kit-img2"
                    src={require("../../images/KitsImages/card1zoom.png")}
                  />
                </Link>
              </div>
              <h6 id="sale">Sale</h6>
              <a>Body Duo</a>
              <p className="cart-para-text">
                <span>$28.00</span> $26.00
              </p>
              <div className="add-cart-btn">
                <button
                  className="offcanva-btn1"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                  onClick={() => {
                    addToCart(28);
                  }}
                >
                  Choose options
                </button>
                <Cartbutton />
              </div>{" "}
            </Card>
            <Card id="kits-cards">
              <div className="hover-img">
                <Link to={`/Product/${29}`}>
                  <img
                    id="kit-img1"
                    src={require("../../images/KitsImages/card2.png")}
                  />
                  <img
                    id="kit-img2"
                    src={require("../../images/KitsImages/card2zoom.png")}
                  />
                </Link>
              </div>
              <a>Face and Body Kit</a>
              <p className="cart-para-text">$41.00</p>
              <div className="add-cart-btn">
                <button
                  className="offcanva-btn1"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                  onClick={() => {
                    addToCart(29);
                  }}
                >
                  Choose options
                </button>
                <Cartbutton />
              </div>{" "}
            </Card>
            <Card id="kits-cards">
              <div className="hover-img">
                <Link to={`/Product/${30}`}>
                  <img
                    id="kit-img1"
                    src={require("../../images/KitsImages/card3.png")}
                  />
                  <img
                    id="kit-img2"
                    src={require("../../images/KitsImages/card3zoom.png")}
                  />
                </Link>
              </div>
              <a>Hair and Body Kit</a>
              <p className="cart-para-text">$39.00</p>
              <div className="add-cart-btn">
                <button
                  className="offcanva-btn1"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                  onClick={() => {
                    addToCart(30);
                  }}
                >
                  Choose options
                </button>
                <Cartbutton />
              </div>{" "}
            </Card>
          </CardGroup>

          <CardGroup id="kits2-card-row">
            <Card id="kits-cards">
              <div className="hover-img">
                <Link to={`/Product/${31}`}>
                  <img
                    id="kit-img1"
                    src={require("../../images/KitsImages/card4.png")}
                  />
                  <img
                    id="kit-img2"
                    src={require("../../images/KitsImages/card4zoom.png")}
                  />
                </Link>
              </div>
              <a>Face Kit</a>
              <p className="cart-para-text">$45.00</p>
              <div className="add-cart-btn">
                <button
                  className="offcanva-btn1"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                  onClick={() => {
                    addToCart(31);
                  }}
                >
                  Add to cart
                </button>
                <Cartbutton />
              </div>
            </Card>
            <Card id="kits-cards">
              <div className="hover-img">
                <Link to={`/Product/${32}`}>
                  <img
                    id="kit-img1"
                    src={require("../../images/KitsImages/card5.png")}
                  />
                  <img
                    id="kit-img2"
                    src={require("../../images/KitsImages/card5zoom.png")}
                  />
                </Link>
              </div>
              <h6 id="sale">Sale</h6>
              <a>Jumbo Hair and Body Kit</a>
              <p className="cart-para-text">
                <span>$108.00</span> $98.00
              </p>
              <div className="add-cart-btn">
                <button
                  className="offcanva-btn1"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                  onClick={() => {
                    addToCart(32);
                  }}
                >
                  Add to cart
                </button>
                <Cartbutton />
              </div>{" "}
            </Card>
            <Card id="kits-cards">
              <div className="hover-img">
                <Link to={`/Product/${33}`}>
                  <img
                    id="kit-img1"
                    src={require("../../images/KitsImages/card6.png")}
                  />
                  <img
                    id="kit-img2"
                    src={require("../../images/KitsImages/card6zoom.png")}
                  />
                </Link>
              </div>
              <h6 id="sale">Sale</h6>
              <a>Hair Duo</a>
              <p className="cart-para-text">
                <span>$28.00</span> $26.00
              </p>
              <div className="add-cart-btn">
                <button
                  className="offcanva-btn1"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                  onClick={() => {
                    addToCart(33);
                  }}
                >
                  Add to cart
                </button>
                <Cartbutton />
              </div>{" "}
            </Card>
          </CardGroup>

          <div id="list-content-img">
            <div className="white-space-gift">
              <h1>Gift card</h1>
              <p>
                Perfect for sharing the love with your nearest and dearest. Give
                the gift of award-winning skin care, body care, and hair care.
              </p>
              <button>Buy now</button>
            </div>
            <img
              id="gift-img"
              src={require("../../images/HairImages/giftcard.png")}
            />
          </div>

          <div id="list-content-img">
            <img
              id="body-img"
              src={require("../../images/BodyImages/Bodyimg-bot.png")}
            />
            <div className="white-space-body body-bot">
              <h1>We’re certified cruelty-free.</h1>
              <p>
                Good for you, good for our furry friends. Learn more about our
                Leaping Bunny certification.
              </p>
              <button>Read blog</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kits;
