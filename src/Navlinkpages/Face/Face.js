import React, { useContext } from "react";
import "../Face/Face.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import Cartbutton from "../../Cartbuttonpage/Cartbutton";

function Face() {
  const { addToCart } = useContext(ShopContext);

  return (
    <div>
      <div className="hair-header">
        <img
          className="top-img"
          src={require("../../images/FaceImages/Faceimg-top.png")}
        />
        <div className="content-text">
          <h1>Face</h1>
          <p>
            Life can take a toll on your skin: environmental assaults,
            fluctuating climate, everyday stress, even celebrating another
            birthday. Keep it clean, smooth, moisturized and protected.
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
                        In stock (4)
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
                      <p>The highest price is $18.00</p>
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
            <div className="product">4 products</div>
          </div>
        </div>

        <div className="cards-rows">
          <CardGroup className="face-card">
            <Card id="cards">
              <div className="hover-img">
                <Link to={`/Product/${24}`}>
                  <img id="img1" src={require("../../images/card1.png")} />
                  <img id="img2" src={require("../../images/card1zoom.png")} />
                </Link>
              </div>
              <a>Face Moisturizer</a>
              <p className="cart-para-text">$16.00</p>
              <div className="add-cart-btn">
                <button
                  className="offcanva-btn"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                  onClick={() => {
                    addToCart(24);
                  }}
                >
                  Add to cart
                </button>
                <Cartbutton />
              </div>{" "}
            </Card>
            <Card id="cards">
              <div className="hover-img">
                <Link to={`/Product/${25}`}>
                  <img id="img1" src={require("../../images/card2.png")} />
                  <img id="img2" src={require("../../images/card2zoom.png")} />
                </Link>
              </div>
              <a>Eye Stick 2.0</a>
              <p className="cart-para-text">$18.00</p>
              <div className="add-cart-btn">
                <button
                  className="offcanva-btn"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                  onClick={() => {
                    addToCart(25);
                  }}
                >
                  Add to cart
                </button>
                <Cartbutton />
              </div>{" "}
            </Card>
            <Card id="cards">
              <div className="hover-img">
                <Link to={`/Product/${26}`}>
                  <img id="img1" src={require("../../images/card3.png")} />
                  <img id="img2" src={require("../../images/card3zoom.png")} />
                </Link>
              </div>
              <h6 id="sale">Sale</h6>
              <a>Face Wash - Travel Size</a>
              <p className="cart-para-text">
                <span>$10.00</span> $5.00
              </p>
              <div className="add-cart-btn">
                <button
                  className="offcanva-btn"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                  onClick={() => {
                    addToCart(26);
                  }}
                >
                  Add to cart
                </button>
                <Cartbutton />
              </div>{" "}
            </Card>
            <Card id="cards">
              <div className="hover-img">
                <Link to={`/Product/${27}`}>
                  <img id="img1" src={require("../../images/card4.png")} />
                  <img id="img2" src={require("../../images/card4zoom.png")} />
                </Link>
              </div>
              <a>Face Wash</a>
              <p className="cart-para-text">$14.00</p>
              <div className="add-cart-btn">
                <button
                  className="offcanva-btn"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                  onClick={() => {
                    addToCart(27);
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
              id="face-img"
              src={require("../../images/FaceImages/Faceimg-bot.png")}
            />
            <div className="white-space-facebot">
              <h1>Feel really, really good. Look even better.</h1>
              <p>
                Zoom calls, Dad duties, and late nights take a toll on your
                eyes. Meet your new secret weapon: Eye Stick 2.0.
              </p>
              <button>Read blog</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Face;
