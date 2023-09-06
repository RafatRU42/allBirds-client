import React, { useState } from 'react';
import ShowProduct from './ShowProduct';
import Loading from '../../Shared/Loading';

const Men = () => {

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    fetch('https://all-birds-server-rafat-gmpmsmryt-rafatru42.vercel.app/men')
    .then(res=> res.json())
    .then(result => {
        setLoading(false)
        setData(result)
    })

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div>
            <p className='text-3xl font-link pt-5 text-center md:pl-10'>Men's Clothing</p>
           <div className='grid grid-grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-10'>
           {
                data.map(men => <ShowProduct product={men} key={men._id}></ShowProduct>)
            }
           </div>
        </div>
    );
};

export default Men;