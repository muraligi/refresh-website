import React from 'react';
import All_images from '../all_product';
import Container from '../Container/Container';

function Itemall() {
  return (
    <div>
        {All_images.map((item,i) => {
            return <Container key={i} id={item.id} name={item.name} image={item.image} prize={item.prize} />
        })}
    </div>
  )
}

export default Itemall;