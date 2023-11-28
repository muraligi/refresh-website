import React from 'react';
import "../Body/Body.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Body() {
  return (
    <div>
      <div className='hair-header'>
      <img id='top-img' src={require("../../images/BodyImages/Bodyimg-top.png")} />
      <div className='content-text'>
      <h1>Body</h1>
      <p>
      Caring for your body shouldn’t start and end with a hot shower. 
      Show it some love with powerhouse formulas to keep your skin clean and healthy.
      </p>
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
                    In stock (8)
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
          <div className='product'>8 products
          </div>
        </div>
      </div>


      <div className="cards-rows">
        <CardGroup>
          <Card id="cards">
            <div className="hover-img">
              <img id="img1" src={require("../../images/BodyImages/card1.png")} />
              <img id="img2" src={require("../../images/BodyImages/card1zoom.png")} />
            </div>
            <h6 id="sale">Sale</h6>
            <a>Bar Soap 2 Pack</a>
            <p>
              <span>$16.00</span> $15.00
            </p>
            <button>Choose options</button>
          </Card>
          <Card id="cards">
            <div className="hover-img">
              <img id="img1" src={require("../../images/BodyImages/card2.png")} />
              <img id="img2" src={require("../../images/BodyImages/card2zoom.png")} />
            </div>
            <a>Deodorant</a>
            <p>$14.00</p>
            <button>Choose options</button>
          </Card>
          <Card id="cards">
            <div className="hover-img">
              <img id="img1" src={require("../../images/BodyImages/card3.png")} />
              <img id="img2" src={require("../../images/BodyImages/card3zoom.png")} />
            </div>
            <a>Body Wash</a>
            <p>$14.00</p>
            <button>Choose options</button>
          </Card>
          <Card id="cards">
            <div className="hover-img">
              <img id="img1" src={require("../../images/BodyImages/card4.png")} />
              <img id="img2" src={require("../../images/BodyImages/card4zoom.png")} />
            </div>
            <a>Bar Soap</a>
            <p>$8.00</p>
            <button>Choose options</button>
          </Card>
        </CardGroup>
    
        <CardGroup id='secondcard-row'>
          <Card id="cards">
            <div className="hover-img">
              <img id="img1" src={require("../../images/BodyImages/card5.png")} />
              <img id="img2" src={require("../../images/BodyImages/card5zoom.png")} />
            </div>
            <a>Jumbo Body Wash</a>
            <p>$36.00</p>
            <button>Choose options</button>
          </Card>
          <Card id="cards">
            <div className="hover-img">
              <img id="img1" src={require("../../images/BodyImages/card6.png")} />
              <img id="img2" src={require("../../images/BodyImages/card2zoom.png")} />
            </div>
            <h6 id="sale">Sale</h6>
            <a>Deodorant - Scent Duo</a>
            <p>
              <span>$28.00</span> 26.00
            </p>
            <button>Add to cart</button>
          </Card>
          <Card id="cards">
            <div className="hover-img">
              <img id="img1" src={require("../../images/BodyImages/card7.png")} />
              <img id="img2" src={require("../../images/BodyImages/card7zoom.png")} />
            </div>
            <a>Shower Loofah</a>
            <p>$6.00</p>
            <button>Add to cart</button>
          </Card>
          <Card id="cards">
            <div className="hover-img">
              <img id="img1" src={require("../../images/BodyImages/card8.png")} />
              <img id="img2" src={require("../../images/BodyImages/card8zoom.png")} />
            </div>
            <h6 id="sale">Sale</h6>
            <a>Body Wash - Travel Size</a>
            <p>
              <span>10.00</span> 5.00
            </p>           
            <button>Add to cart</button>
          </Card>
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
          <img id="body-img" src={require("../../images/BodyImages/Bodyimg-bot.png")} />
          <div className="white-space-body body-bot">
            <h1>We’re certified cruelty-free.</h1>
            <p>
              Good for you, good for our furry friends. Learn more about our Leaping 
              Bunny certification.
            </p>
            <button>Read blog</button>
          </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Body;