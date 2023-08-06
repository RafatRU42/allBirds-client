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