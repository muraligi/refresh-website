import React, { useContext } from "react";
import "../CartItems/CartItem.css";
import { ShopContext } from "../Context/ShopContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlinePlus, AiOutlineLine } from "react-icons/ai";

const CartItem = () => {
  const { All_images, cartItems, removeFromCart, addToCart } =
    useContext(ShopContext);

  return (
    <div className="CartItem">
      <div className="d-flex justify-content-between">
        <div className="CartItem-prct-tol">PRODUCT</div>
        <div className="CartItem-prct-tol">TOTAL</div>
      </div>
      <hr />

      <div>
        {All_images.map((e) => {
          if (cartItems[e.id] > 0) {
            const regularPriceWithDollarSign = e.newprize;

            // Remove the dollar sign ('$') from the string
            const regularPriceWithoutDollarSign =
              regularPriceWithDollarSign.replace("$", "");
            const regularPriceAsNumber = parseFloat(
              regularPriceWithoutDollarSign
            );
            return (
              <div className="data-cart">
                <div>
                  <img src={e.image} alt="" className="CartItem-image" />
                </div>
                <div className="CartItem-content-center-full-div">
                  <div>
                    <h4 className="CartItem-heading">{e.name}</h4>
                  </div>
                  <div>
                    <p className="CartItem-newprize">{e.newprize}</p>
                  </div>
                  <div className="d-flex justify-content-between CartItem-quantity-remove-div ">
                    <div className="d-flex  justify-content-between CartItem-plus-minuse-div">
                      <div>
                        <AiOutlineLine
                          type="button"
                          onClick={() => {
                            removeFromCart(e.id);
                          }}
                        />
                      </div>
                      <div>{cartItems[e.id]}</div>
                      <div>
                        <AiOutlinePlus
                          type="button"
                          onClick={() => {
                            addToCart(e.id);
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <RiDeleteBin5Line
                        className="CartItem-removeFromCart"
                        onClick={() => {
                          removeFromCart(e.id);
                        }}
                        type="button"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="CartItem-total-price">
                    ${regularPriceAsNumber * cartItems[e.id]}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CartItem;
