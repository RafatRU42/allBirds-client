import React from "react";
import { useDispatch } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import { addToCart } from "../Cart/cartSlice";

const SeeDetails = () => {
  const data = useLoaderData();

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { image, category, title, description, price, rating } = data;
  const email = 'rmrafat127@gmail.com'


  const handleAddToCart = () =>{

    dispatch(addToCart(data))

        const cartInfo = {
            email,
            image,
            title,
            price
        }

        fetch('http://localhost:5000/addToCart',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(cartInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // navigate('/cartRoute')
        })
  }


  return (
    <div>
      <h1 className="text-3xl font-link text-center uppercase mt-10">
        {category}
      </h1>
      <div className="flex m-10">
        <div className="w-1/3">
          <img className="h-[350px] ml-10" src={image} alt="" />
        </div>

        <div className="w-2/3 mt-10">
          <p className="text-5xl font-link ">{title}.</p>
          <p className="text-xl my-5 font-bold">Price: ${price}</p>
          <div className="flex">
            <p className="badge badge-outline text-xl p-3">
              Rating {rating.rate}
            </p>
            <p className="badge badge-outline text-xl ml-3 p-3">
              Count {rating.count}
            </p>
          </div>
          <p className="text-xl mt-4">Price is including VAT.</p>
      <button onClick={handleAddToCart} className="btn btn-error font-link text-white mt-4">Add To Cart</button>

        </div>
      </div>
      <div>
        <p className="mx-10 text-lg">{description}.</p>
      </div>


    </div>
  );
};

export default SeeDetails;
