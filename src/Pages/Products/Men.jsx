import React, { useState } from 'react';
import ShowProduct from './ShowProduct';

const Men = () => {

    const [data,setData] = useState([])

    fetch('http://localhost:5000/men')
    .then(res=> res.json())
    .then(result => setData(result))

    return (
        <div>
            <p className='text-3xl font-link pt-5 pl-10'>Men's Clothing</p>
           <div className='flex m-5'>
           {
                data.map(men => <ShowProduct product={men} key={men._id}></ShowProduct>)
            }
           </div>
        </div>
    );
};

export default Men;