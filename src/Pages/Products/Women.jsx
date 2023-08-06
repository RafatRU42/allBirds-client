import React, { useState } from 'react';
import ShowProduct from './ShowProduct';
import Loading from '../../Shared/Loading';

const Women = () => {

    const [product,setProduct] = useState([])
    const [loading,setLoading] = useState(true)

    fetch('https://all-birds-server-rafat.vercel.app/women')
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
           <div className='grid grid-grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-10'>
           {
            product.map(products => <ShowProduct product={products} key={products._id}></ShowProduct>)
           } 
           </div>
        </div>
    );
};

export default Women;