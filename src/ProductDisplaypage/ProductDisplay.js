import React, { useState, useContext } from "react";
import "../ProductDisplaypage/ProductDisplay.css";
import { AiOutlinePlus, AiOutlineLine } from "react-icons/ai";
import { ShopContext } from "../Context/ShopContext";
import CartItem from "../CartItems/CartItem";

const ProductDisplay = (props) => {
  const { product } = props;
  const [AddCount, SetAddCount] = useState(0);
  const { addToCart, totalRegularPrice } = useContext(ShopContext);

  return (
    <div>
      <div className="productarea-row">
        <img className="product-left" src={product.image} />
        <div className="product-right">
          <h1>{product.name}</h1>

          <div>
            <span className="regular-prize">{product.regularprize}</span>
            &nbsp;&nbsp;
            <span className="new-prize">{product.newprize}</span>
            &nbsp;&nbsp;
            <span>
              {product.sale ? (
                <span className="product-sale bg-primary text-white">sale</span>
              ) : null}
            </span>
          </div>

          <h3>Quantity</h3>

          <div className="increase">
            <AiOutlineLine
              onClick={() => SetAddCount(AddCount - 1)}
              type="button"
            />
            <p>{AddCount}</p>
            <AiOutlinePlus
              onClick={() => SetAddCount(AddCount + 1)}
              type="button"
            />
          </div>

          <div>
            <button
              className="btn-1"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
              onClick={() => {
                addToCart(product.id, AddCount);
              }}
            >
              Add to cart
            </button>
            <br />

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

          <button className="btn-2">Buy it now</button>
          <div className="display-para">
            This is a demonstration store. You can purchase products like this
            from <a>Huron</a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
