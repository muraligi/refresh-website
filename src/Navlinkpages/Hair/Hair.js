import React from 'react';
import "../Hair/Hair.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Hair() {
  return (
    <div>
      <div className='hair-header'>
      <img id='top-img' src={require("../../images/HairImages/hairimg-top.png")} />
      <div className='content-text'>
      <h1>Hair</h1>
      <p>Start from the top. We’ve got you covered with a range of 
      formulas to keep your hair in tip-top shape and your style in mint condition.</p>
      </div>

      <div className='Main-filter'>
        <div className='leftside'>Filter:
          <li className="nav-item filter-li dropdown">
            <a className="nav-toggle dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Availability
            </a>
            <ul className="dropdown-menu filter" aria-labelledby="navbarDropdownMenuLink">
                <div className='filter-area'>
                  <div id='select-row'><p>0 selected</p><a>Reset</a></div>
                  <div className="checkbox-row">
                  <div className="form-check check-box">
                  <input className="form-check-input box" type="checkbox" value="" id="defaultCheck1" />
                  <label className="form-check-label" for="defaultCheck1">
                    In stock (7)
                  </label>
                  </div>
                  <div className="form-check check-box">
                  <input className="form-check-input box" type="checkbox" value="" id="defaultCheck2" disabled />
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
            <a className="nav-toggle dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Prize
            </a>
            <ul className="dropdown-menu filter" aria-labelledby="navbarDropdownMenuLink">
                <div className='prize-area'>
                  <div id='select-row'><p>The highest price is $36.00</p><a>Reset</a></div>
                  <div className="input-row">
                  <div className="input-area">$
                  <input type="number" className='prizeip' required />
                  <label for=''>From</label>
                  </div>
                  <div className="input-area">$
                  <input type="number" className='prizeip' required />
                  <label for=''>To</label>
                  </div>
                  </div>
                </div>
            </ul>
            </li>
            </div>
        </div>

        <div className='rightside'>Sort by:
          <div className='option-area'>
          <select class="form-select select">
            <option value="1">Featured</option>
            <option selected value="2">Best selling</option>
            <option value="4">Alaphabetically, A-Z</option>
            <option value="5">Alaphabetically, Z-A</option>
            <option value="6">Prize, low to high</option>
            <option value="7">Prize, high to low</option>
            <option value="8">Date, old to new</option>
            <option value="9">Date, new to old</option>
          </select>
          </div>
          <div className='product'>7 products
          </div>
        </div>
      </div>


      <div className="cards-rows">
        <CardGroup>
          <Card id="cards">
            <div className="hover-img">
              <img id="img1" src={require("../../images/HairImages/card1.png")} />
              <img id="img2" src={require("../../images/HairImages/card1zoom.png")} />
            </div>
            <a>Conditioner</a>
            <p>$14.00</p>
            <button>Add to cart</button>
          </Card>
          <Card id="cards">
            <div className="hover-img">
              <img id="img1" src={require("../../images/HairImages/card2.png")} />
              <img id="img2" src={require("../../images/HairImages/card2zoom.png")} />
            </div>
            <a>shampoo</a>
            <p>$14.00</p>
            <button>Add to cart</button>
          </Card>
          <Card id="cards">
            <div className="hover-img">
              <img id="img1" src={require("../../images/HairImages/card3.png")} />
              <img id="img2" src={require("../../images/HairImages/card3zoom.png")} />
            </div>
            <a>Jumbo Conditioner</a>
            <p>$36.00</p>
            <button>Add to cart</button>
          </Card>
          <Card id="cards">
            <div className="hover-img">
              <img id="img1" src={require("../../images/HairImages/card4.png")} />
              <img id="img2" src={require("../../images/HairImages/card4zoom.png")} />
            </div>
            <h6 id="sale">Sale</h6>
            <a>Hair Duo</a>
            <p>
              <span>$28.00</span> $26.00
            </p>
            <button>Add to cart</button>
          </Card>
        </CardGroup>
    
        <CardGroup id='secondcard-row'>
          <div id="cards1">
            <div className="hover-img">
              <img id="img1" src={require("../../images/HairImages/card3.png")} />
              <img id="img2" src={require("../../images/HairImages/card2zoom.png")} />
            </div><br/>
            <a>Jumbo Conditioner</a>
            <p>$36.00</p>
            <button>Add to cart</button>
          </div>
          <div id="cards1">
            <div className="hover-img">
              <img id="img1" src={require("../../images/HairImages/card6.png")} />
              <img id="img2" src={require("../../images/HairImages/card6zoom.png")} />
            </div><br/>
            <a>Hair Styler</a>
            <p>$12.00</p>
            <button>Add to cart</button>
          </div>
          <div id="cards1">
            <div className="hover-img">
              <img id="img1" src={require("../../images/HairImages/card7.png")} />
              <img id="img2" src={require("../../images/HairImages/card7zoom.png")} />
            </div><br/>
            <a>Hair Gel</a>
            <p>$12.00</p>
            <button>Add to cart</button>
          </div>
        </CardGroup>

        <div id="list-content-img">
          <div className="white-space-gift">
            <h1>Gift card</h1>
            <p>
             Perfect for sharing the love with your nearest and dearest. Give the gift of 
             award-winning skin care, body care, and hair care.
            </p>
            <button>Buy now</button>
          </div>
          <img id="gift-img" src={require("../../images/HairImages/giftcard.png")} />
        </div>

        <div id="list-content-img">
          <img id="conhair-img" src={require("../../images/HairImages/conhairimg.png")} />
          <div className="white-space-conhair">
            <h1>Why our shampoo was named "Best of 2021"</h1>
            <p>
             Learn what separates our shampoo from the pack, and why it was named best in class.
            </p>
            <button>Read blog</button>
          </div>
        </div>

      </div>
      </div>
    </div>
    
  )
}

export default Hair;