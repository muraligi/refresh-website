import React from 'react';
import "../ProductDisplaypage/ProductDisplay.css";

const ProductDisplay = () => {

  return (
    <div>
      <div className='productarea-row'>
      <img className='product-left' src={require("../images/card1.png")} />
      <div className='product-right'>
        <h1>Face Moisturizer</h1>
        <h6>$16.00</h6>
        <p>Quantity</p>
        <div className='increase'><span>-</span><p>1</p><span>+</span></div>
        <button className='btn-1'>Add to cart</button><br/>
        <button className='btn-2'>Buy it now</button>
        <h2>This is a demonstration store. You can purchase products like this from <a>Huron</a>.</h2>
      </div>
      </div>
    </div>
  )
}

export default ProductDisplay;