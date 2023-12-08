import React from "react";
import "../Footer/Footer.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { ImTwitter } from "react-icons/im";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-page">
      <h1>Get 10% off your first order.</h1>
      <p className="footer-page-p">
        Plus get early access to new launches and our best self-care tips.
      </p>
      <form className="footer-email">
        <div className="input-wrap">
          <input type="text" className="footer-input" required />
          <label for="">Email</label>
          <FaArrowRightLong className="footer-email-btn" size={15} />
        </div>
      </form>

      <div className="content-links">
        <div className="shop-links">
          <h5>Shop</h5>
          <a>
            <Link className="list-link" to="/Hair">
              Hair
            </Link>
          </a>
          <a>
            <Link className="list-link" to="/Body">
              Body
            </Link>
          </a>
          <a>
            <Link className="list-link" to="/Face">
              Face
            </Link>
          </a>
          <a>
            <Link className="list-link" to="/Kits">
              Kits
            </Link>
          </a>
        </div>
        <div className="about-links">
          <h5>About</h5>
          <a>
            <Link className="list-link" to="/Ourstory">
              Our story
            </Link>
          </a>
          <a>
            <Link className="list-link" to="/Shipping">
              Shipping and returns
            </Link>
          </a>
          <a>
            <Link className="list-link" to="/Contact">
              Contact
            </Link>
          </a>
          <a>
            <Link className="list-link" to="/Blog">
              Blog
            </Link>
          </a>
        </div>
        <div className="our-text">
          <h5>Our mission</h5>
          <p>
            We make the internet's favorite men's products. No harmful chemicals
            and made in the USA.
          </p>
        </div>
        <div>
          <img id="logoref" src={require("../images/refreshimg.avif")} />
        </div>
      </div>
      <div className="social-links">
        <ImTwitter id="links-logo" size={20} />
        <AiFillFacebook id="links-logo" size={22} />
        <BsInstagram id="links-logo" size={19} />
        <FaTiktok id="links-logo" size={19} />
        <AiFillYoutube id="links-logo" size={20} />
      </div>
      <hr />
      <div className="copy-rgt">
        © 2023,{" "}
        <Link className="fot-link" to="/">
          theme-refresh-demo
        </Link>
        <a className="fot-link">Powered by Shopify</a>
      </div>
    </div>
  );
};

export default Footer;
