import Flicking from "@egjs/react-flicking";
import React, { useContext } from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../Cart/cartSlice";
import { AuthContext } from "../../Context/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";

const ShowProduct = ({ product }) => {
  const { title, price, description, image, _id } = product;
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();

  const email = user?.email;

  const handleAddToCart = () => {
    dispatch(addToCart(product));

    const cartInfo = {
      email,
      image,
      title,
      price,
    };

    fetch("https://all-birds-server-rafat.vercel.app/addToCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success('The product added to the cart!')
      });
  };

  return (
    <div className="m-4 ">
    
        <div className="card w-96 bg-base-100 shadow-xl group">
          <Link to={`/seeDetails/${_id}`}>
            <figure>
              <Zoom>
              <img className="h-[250px] group-hover:scale-110 duration-300" src={image} alt="Shoes" />

              </Zoom>
              </figure>
            <div className="card-body">
            <Zoom>
            <h2 className="card-title font-link">
                {title.substring(0, 25)}..
              </h2>
            </Zoom>
            <Zoom>
              <p>{description.substring(0, 70)}...</p>
            </Zoom>

              <div className="card-actions justify-between">
                <Zoom>
                <p className="font-bold">Price: $ {price}</p>

                </Zoom>
                {/* <div className="badge badge-outline">$ {price}</div> */}
               <Zoom>
               <p className="badge badge-outline py-1 -px-2">
                  {product.rating.rate} Ratings
                </p>
               </Zoom>
              </div>
            </div>
          </Link>

          <div className="">
       <Zoom>
       <button
              onClick={handleAddToCart}
              className="btn btn-error w-full p-3 -mt-2 font-bold text-white font-link"
            >
              Add To Cart
              <FontAwesomeIcon
                className="h-6 w-6"
                icon={faCartPlus}
              ></FontAwesomeIcon>
            </button>
       </Zoom>
          </div>
        </div>
      
    </div>
  );
};

export default ShowProduct;
