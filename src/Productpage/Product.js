import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import ProductDisplay from "../ProductDisplaypage/ProductDisplay";
import Cartbutton from "../Cartbuttonpage/Cartbutton";
import { useParams } from "react-router-dom";

const Product = () => {
  const { All_images } = useContext(ShopContext);
  const { productId } = useParams();
  const product = All_images.find((e) => e.id === Number(productId));

  return (
    <div>
      <ProductDisplay product={product} />
      <Cartbutton product={product} />
    </div>
  );
};

export default Product;
