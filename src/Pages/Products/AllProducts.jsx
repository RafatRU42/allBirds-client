import React, { useState } from 'react';
import ShowProduct from './ShowProduct';

const AllProducts = () => {

    const [product,setProduct] = useState([])

    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setProduct(data))
    return (
        <div className='flex m-10'>
            
            {
                product.map(data => <ShowProduct key={data.id} product={data}></ShowProduct>)
            }
        </div>
    );
};

export default AllProducts;