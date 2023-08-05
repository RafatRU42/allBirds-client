import React, { useState } from 'react';
import ShowProduct from './ShowProduct';
import Loading from '../../Shared/Loading';

const Jewellery = () => {

    const [product,setProduct] = useState([])
    const [loading,setLoading] = useState(true)
     
    fetch('http://localhost:5000/jewellery')
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