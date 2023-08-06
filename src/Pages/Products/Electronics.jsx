import React, { useState } from 'react';
import ShowProduct from './ShowProduct';
import Loading from '../../Shared/Loading';

const Electronics = () => {

    const [product, setProduct] = useState([])
    const [loading,setLoading] = useState(true)
    fetch('https://all-birds-server-rafat.vercel.app/electronics')
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
            <p className='text-3xl font-link pt-5 pl-10'>Electronics</p>
          <div className='grid grid-grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-10'>
          {
                product.map(products => <ShowProduct product={products} key={products._id}></ShowProduct>)
            }
          </div>
        </div>
    );
};

export default Electronics;