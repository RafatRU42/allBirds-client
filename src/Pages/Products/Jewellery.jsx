import React, { useState } from 'react';
import ShowProduct from './ShowProduct';

const Jewellery = () => {

    const [product,setProduct] = useState([])
     
    fetch('http://localhost:5000/jewellery')
    .then(res => res.json())
    .then(data => setProduct(data))
    return (
        <div>
            <p className='text-3xl font-link pt-5 pl-10'>Jewellery</p>
          <div className='flex m-5'>
          {
            product.map(products => <ShowProduct product={products} key={products._id}></ShowProduct>)
           }
          </div>
        </div>
    );
};

export default Jewellery;