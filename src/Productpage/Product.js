import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProductDisplay from '../ProductDisplaypage/ProductDisplay';
import { useParams } from '@reach/router';

const Product = () => {

    const {All_images} = useContext(ShopContext);
    const {productId} = useParams();
    const product = All_images.find((e)=> e.id === Number(productId));

    return (
        <div>
            <ProductDisplay product={product}/>
        </div>
  )
}

export default Product;