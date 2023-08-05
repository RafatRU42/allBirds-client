import React, { useState } from 'react';
import ShowProduct from './ShowProduct';
import Loading from '../../Shared/Loading';

const Women = () => {

    const [product,setProduct] = useState([])
    const [loading,setLoading] = useState(true)

    fetch('http://localhost:5000/women')
    .then(res => res.json())
    .then(data => {
        setProduct(data)
        setLoading(false)
    })

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <p className='font-link text-3xl pt-5 pl-10'>Women's Clothing</p>
           <div className='flex m-5'>
           {
            product.map(products => <ShowProduct product={products} key={products._id}></ShowProduct>)
           } 
           </div>
        </div>
    );
};

export default Women;