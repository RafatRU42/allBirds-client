import React, { useState } from 'react';

const Cart = () => {

    const email ='rmrafat127@gmail.com'

    const [product, setProduct] = useState([])

    fetch(`http://localhost:5000/getCartProduct?email=${email}`)
 .then(res => res.json())
 .then(data => setProduct(data))
    return (
        <div className='m-10'>
            <p className='text-3xl font-link'>Your Cart</p>
          <p>{product.title}</p>
          {
            product.map(pro=> <div>
                <p>{pro.title}</p>
            </div>)
          }
        </div>
    );
};

export default Cart;