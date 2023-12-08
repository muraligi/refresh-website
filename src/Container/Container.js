import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "../Container/Container.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Carousel } from "react-bootstrap";
import image1 from "../images/slide img1.png";
import image2 from "../images/silde img2.png";
import image3 from "../images/slide img3.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Cartbutton from "../Cartbuttonpage/Cartbutton";

const Container = () => {
  const { addToCart } = useContext(ShopContext);

  const items = [
    {
      src: image1,
      id: 1,
      alt: "Image 1",
      heading: "Your hair, but better.",

      listcontent:
        "Lather up with our newest shampoo for clean, strong, and healthy hair.",
      btn: "Shop shampoo",
    },
    {
      src: image2,
      id: 2,
      alt: "Image 2",
      heading: "Keep things simple.",
      listcontent:
        "Build an easy-care hair routine you'll actually want to follow.",
      btn: "Shop hair",
    },
    {
      src: image3,
      id: 3,
      alt: "Image 3",
      heading: "So fresh, so clean.",
      listcontent:
        "Get a quality clean with powerhouse formulas to keep your skin smelling fresh and looking healthy.",
      btn: "Shop body",
    },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div className="slider-images">
        <div>
          <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
            {items.map((item) => (
              <Carousel.Item key={item.id}>
                <img
                  className="d-block w-100 carousel-img"
                  src={item.src}
                  alt={item.alt}
                />
                <Carousel.Caption className={`slide-content-${item.id}`}>
                  <h1 className="pt-4">{item.heading}</h1>
                  <p>{item.listcontent}</p>
                  <button className="text-start">{item.btn}</button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>

          <div className="slider-navigation">
            <span
              className="slider-btn"
              onClick={() =>
                setIndex((index - 1 + items.length) % items.length)
              }
            >
              &lt; &nbsp;&nbsp;&nbsp; {index + 1}/
            </span>
            <span
              className="slider-btn"
              onClick={() =>
                setIndex((index + 1 + items.length) % items.length)
              }
            >
              {items.length} &nbsp;&nbsp;&nbsp; &gt;
            </span>
          </div>
        </div>
      </div>

      <div className="cards-rows">
        <p id="Meet-para">Meet the internet's favorite skincare.</p>
        <CardGroup>
          <Card id="cards">
            <div className="hover-img">
              <Link to={`/Product/${1}`}>
                <img id="img1" src={require("../images/card1.png")} />
                <img id="img2" src={require("../images/card1zoom.png")} />
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
                  addToCart(1);
                }}
              >
                Add to cart
              </button>
              <Cartbutton />
            </div>
          </Card>
          <Card id="cards">
            <div className="hover-img">
              <Link to={`/Product/${2}`}>
                <img id="img1" src={require("../images/card2.png")} />
                <img id="img2" src={require("../images/card2zoom.png")} />
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
                  addToCart(2);
                }}
              >
                Add to cart
              </button>
              <Cartbutton />
            </div>
          </Card>
          <Card id="cards">
            <div className="hover-img">
              <Link to={`/Product/${3}`}>
                <img id="img1" src={require("../images/card3.png")} />
                <img id="img2" src={require("../images/card3zoom.png")} />
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
                  addToCart(3);
                }}
              >
                Add to cart
              </button>
              <Cartbutton />
            </div>
          </Card>
          <Card id="cards">
            <div className="hover-img">
              <Link to={`/Product/${4}`}>
                <img id="img1" src={require("../images/card4.png")} />
                <img id="img2" src={require("../images/card4zoom.png")} />
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
                  addToCart(4);
                }}
              >
                Add to cart
              </button>
              <Cartbutton />
            </div>
          </Card>
        </CardGroup>
        <div className="content-rows">
          <div id="content-image">
            <img id="ctn-imgall" src={require("../images/contentimg1.png")} />
            <p>
              "The formulas are sophisticated. They have an effortless quality
              to them."
            </p>
          </div>
          <div id="content-image">
            <img id="ctn-img2" src={require("../images/contentimg2.png")} />
            <p>
              "Affordable and a genuinely handsome addition to your shower
              ledge."
            </p>
          </div>
          <div id="content-image">
            <img id="ctn-imgall" src={require("../images/contentimg3.png")} />
            <p>
              "Easily cleans dirt and grime without drying skin at a price that
              can’t be beaten."
            </p>
          </div>
          <div id="content-image">
            <img id="ctn-imgall" src={require("../images/contentimg4.png")} />
            <p>
              "Perfect soothing hydration for after a long run or a day out in
              the sun."
            </p>
          </div>
        </div>
        <div id="list-content-img">
          <div className="white-space-hair">
            <h1>Hair.</h1>
            <p>
              Start from the top: great hair starts with a healthy scalp. We’ve
              got you covered with a range of expert formulas to keep your hair
              in tip-top shape and your style in mint condition.
            </p>
            <button>Shop hair</button>
          </div>
          <img id="hair-img" src={require("../images/hair-img.png")} />
        </div>
        <div id="list-content-img">
          <img id="body-img" src={require("../images/body-img.png")} />
          <div className="white-space-body">
            <h1>Body.</h1>
            <p>
              Caring for your body shouldn’t start and end with a hot shower.
              Show it some love with powerhouse formulas to keep your skin clean
              and healthy.
            </p>
            <button>Shop body</button>
          </div>
        </div>
        <div id="list-content-img">
          <div className="white-space-face">
            <h1>Face.</h1>
            <p>
              Let’s face it. A lot of men just aren’t that into skincare. We’re
              going to change all that. Because when you look great, you feel
              great. It’s that simple.
            </p>
            <button>Shop face</button>
          </div>
          <img id="hair-img" src={require("../images/face-img.png")} />
        </div>
        <div id="list-content-img">
          <img id="kits-img" src={require("../images/kits-img.png")} />
          <div className="white-space-body white-space-kits">
            <h1>Kits.</h1>
            <p>
              Bundle up and save on our best combo kits for face, body, and
              hair. These thoughtful combinations have everything you need to
              look great and feel fresh, day after day.
            </p>
            <button>Shop kits</button>
          </div>
        </div>
        <CardGroup id="sdcard-image">
          <Card id="cards">
            <div className="hover-img">
              <Link to={`/Product/${5}`}>
                <img id="img1" src={require("../images/sdcard1.png")} />
                <img id="img2" src={require("../images/sdcard1zoom.png")} />
              </Link>
            </div>
            <h6 id="sale">Sale</h6>
            <a>Body Duo</a>
            <p className="cart-para-text">
              <span>$28.00</span> $26.00
            </p>
            <div className="add-cart-btn">
              <button
                className="offcanva-btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
                onClick={() => {
                  addToCart(5);
                }}
              >
                Choose options
              </button>
              <Cartbutton />
            </div>
          </Card>
          <Card id="cards">
            <div className="hover-img">
              <Link to={`/Product/${6}`}>
                <img id="img1" src={require("../images/sdcard2.png")} />
                <img id="img2" src={require("../images/sdcard2zoom.png")} />
              </Link>
            </div>
            <a>Face and Body Kit</a>
            <p className="cart-para-text">$41.00</p>
            <div className="add-cart-btn">
              <button
                className="offcanva-btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
                onClick={() => {
                  addToCart(6);
                }}
              >
                Choose options
              </button>
              <Cartbutton />
            </div>
          </Card>
          <Card id="cards">
            <div className="hover-img">
              <Link to={`/Product/${7}`}>
                <img id="img1" src={require("../images/sdcard3.png")} />
                <img id="img2" src={require("../images/sdcard3zoom.png")} />
              </Link>
            </div>
            <a>Hair and Body Kit</a>
            <p className="cart-para-text">$39.00</p>
            <div className="add-cart-btn">
              <button
                className="offcanva-btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
                onClick={() => {
                  addToCart(7);
                }}
              >
                Choose options
              </button>
              <Cartbutton />
            </div>
          </Card>
          <Card id="cards">
            <div className="hover-img">
              <Link to={`/Product/${8}`}>
                <img id="img1" src={require("../images/sdcard4.png")} />
                <img id="img2" src={require("../images/sdcard4zoom.png")} />
              </Link>
            </div>
            <a>Face Kit</a>
            <p className="cart-para-text">$45.00</p>
            <div className="add-cart-btn">
              <button
                className="offcanva-btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
                onClick={() => {
                  addToCart(8);
                }}
              >
                Add to cart
              </button>
              <Cartbutton />
            </div>
          </Card>
        </CardGroup>
      </div>
      <div className="refresh-content">
        <p>WHY CHOOSE REFRESH?</p>
        <h1>
          We make the world's best-smelling men's products. They're 100% vegan,
          no harmful chemicals and made in the USA.
        </h1>
      </div>
      <div className="product-rows">
        <div>
          <img src={require("../images/product1.png")} />
          <h5>Natural ingredients that work.</h5>
          <p>Clinically tested, allergy tested, and won’t irritate skin.</p>
        </div>
        <div>
          <img src={require("../images/product2.png")} />
          <h5>Fast, free shipping in the USA.</h5>
          <p>We offer fast, free shipping on all orders over $40.</p>
        </div>
        <div>
          <img src={require("../images/product3.png")} />
          <h5>More than 1000 5-star reviews.</h5>
          <p>Our customers love us! Try our products and you’ll see why.</p>
        </div>
        <div>
          <img src={require("../images/product4.png")} />
          <h5>Quality products at a fair price.</h5>
          <p>Look good and smell fresh without ever breaking the bank.</p>
        </div>
      </div>
      <div className="cards-rows">
        <h3>Indulge in some light bathroom reading.</h3>
        <CardGroup id="sdcard-image1">
          <Card id="solution-card">
            <div className="hover-img">
              <img src={require("../images/solution1.png")} />
            </div>
            <a>Certified cruelty-free: we've joined Leaping Bunny</a>
            <p>APRIL 21, 2022</p>
            <h6>
              We’re excited to announce that we are now Leaping Bunny certified
              as a cruelty-free brand.
            </h6>
          </Card>
          <Card id="solution-card">
            <div className="hover-img">
              <img src={require("../images/solution2.png")} />
            </div>
            <a>Everything you need to know about Eye Stick 2.0</a>
            <p>APRIL 21, 2022</p>
            <h6>
              What it is, how to use it, and how it'll keep you looking and
              feeling your best for years to come.
            </h6>
          </Card>
          <Card id="solution-card">
            <div className="hover-img">
              <img src={require("../images/solution3.png")} />
            </div>
            <a>5 new year’s resolutions for 2022</a>
            <p>APRIL 21, 2022</p>
            <h6>
              We got specific, so you don’t have to. Consider
              these&nbsp;resolutions to kick off&nbsp;2022!
            </h6>
          </Card>
        </CardGroup>
        <Link to="/Blog">
          <button id="viewall-btn">View all</button>
        </Link>
      </div>
    </div>
  );
};

export default Container;
