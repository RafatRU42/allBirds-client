import React, { useState } from "react";
import ShowCart from "../../Components/ShowCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading";
import { Helmet } from "react-helmet";

const Cart = () => {
  const email = "rmrafat127@gmail.com";

  const [product, setProduct] = useState([]);
  const [loading,setLoading] = useState(true)

  const price = useSelector((state) =>state.cart.totalPrice)
  // const items = useSelector((state) = state.cart.items)


  fetch(`https://all-birds-server-rafat.vercel.app/getCartProduct?email=${email}`)
    .then((res) => res.json())
    .then((data) => {
      setProduct(data)
      setLoading(false)
    });
    if(loading){
      return <Loading></Loading>
    }
  return (
 <div className="m-10">
      <p className="text-3xl font-link">Your Cart</p>
      <Helmet>
        <title>allBirds | Cart</title></Helmet>
     <div className="flex ">

     <div className="w-2/3 my-5">
     <div className="">
        <table className="table">
        

          {product.map((pro) => (
            <div className="border border-orange-500 m-2 rounded mr-24">
              <tr>
               
                <td>
                  <div className="flex items-center space-x-3 ">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={pro.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div className="px-10 font-link text-xl w-[300px]">
                      <p>{pro.title.substring(0,20)}..</p>
                    </div>
                  </div>
                </td>
                <td className="px-10">
                 <p className="text-md font-link w-[100px]">Price: ${pro.price}</p>
                </td>
                  <th>
                <button  className="btn btn-error btn-sm btn-end text-white">Pay</button>

                  </th>
                  <th>
                <button  className="btn btn-primary btn-sm btn-end text-white">Delete</button>

                  </th>
               
              </tr>
             
            </div>
          ))}
        </table>
      </div>
     </div>
<div className="">
  
<div className="w-1/3 text-2xl font-link fixed">
            <p className="mt-10">Selected Product: {product.length}</p>
            <p>Total Price: ${price}</p>
            {/* <p>{items.length}</p> */}
     </div>
</div>
    </div>
 </div>
  );
};

export default Cart;
