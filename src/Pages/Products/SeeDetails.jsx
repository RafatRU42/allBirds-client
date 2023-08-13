import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import { addToCart } from "../Cart/cartSlice";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Context/AuthProvider";

const SeeDetails = () => {
  const data = useLoaderData();

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const {user} = useContext(AuthContext)

  const { image, category, title, description, price, rating } = data;
  const email = user?.email;


  const handleAddToCart = () =>{

    dispatch(addToCart(data))

        const cartInfo = {
            email,
            image,
            title,
            price
        }

        fetch('https://all-birds-server-rafat.vercel.app/addToCart',{
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
    <div className="min-h-screen">
      <Helmet>
        <title>allBirds | Details</title>
      </Helmet>
      <h1 className="text-3xl font-link text-center uppercase mt-10">
        {category}
      </h1>
      <div className="flex m-10">
        <div className="w-1/3">
          <img className="h-[350px] ml-10" src={image} alt="" />
        </div>

      <div className="w-2/3 mt-10">
      <Fade cascade >

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
      <button onClick={handleAddToCart} className="btn btn-error font-link text-white mt-4">Add To Cart
      <FontAwesomeIcon className="h-6 w-6" icon={faCartPlus}></FontAwesomeIcon>
      
      </button>
      </Fade>

        </div>
      </div>
      <div>
        <p className="mx-10 text-lg">{description}.</p>
      </div>


    </div>
  );
};

export default SeeDetails;
