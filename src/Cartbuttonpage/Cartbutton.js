import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "../Cartbuttonpage/Cartbutton.css";
import CartItem from "../CartItems/CartItem";

const Cartbutton = () => {
  const { totalRegularPrice } = useContext(ShopContext);

  return (
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
  );
};

export default Cartbutton;
