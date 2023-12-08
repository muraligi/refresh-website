import React, { createContext, useEffect, useState } from "react";
import { All_images } from "../all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < All_images.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  // Load cart items from local storage or use the default cart
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : getDefaultCart();
  });

  // Save cart items to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartItems = () => {
    let totalCartItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalCartItem += cartItems[item];
      }
    }
    return totalCartItem;
  };

  // Calculate total regular price
  const totalRegularPrice = All_images.reduce((total, product) => {
    if (cartItems[product.id] > 0) {
      const regularPriceWithDollarSign = product.newprize;
      const regularPriceWithoutDollarSign = regularPriceWithDollarSign.replace(
        "$",
        ""
      );
      const regularPriceAsNumber = parseFloat(regularPriceWithoutDollarSign);
      return total + regularPriceAsNumber * cartItems[product.id];
    }
    return total;
  }, 0);

  return (
    <ShopContext.Provider
      value={{
        All_images,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartItems,
        totalRegularPrice,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
