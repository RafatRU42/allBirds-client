import Flicking from "@egjs/react-flicking";
import React, { useContext } from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../Cart/cartSlice";
import { AuthContext } from "../../Context/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

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
        console.log(data);
      });
  };

  return (
    <div className="m-4 min-h-screen">
      <Fade cascade direction="up">
        <div className="card w-96 bg-base-100 shadow-xl ">
          <Link to={`/seeDetails/${_id}`}>
            <figure>
              <img className="h-[250px]" src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-link">
                {title.substring(0, 25)}..
              </h2>
              <p>{description.substring(0, 70)}...</p>

              <div className="card-actions justify-between">
                <p className="font-bold">Price: $ {price}</p>
                {/* <div className="badge badge-outline">$ {price}</div> */}
                <p className="badge badge-outline py-1 -px-2">
                  {product.rating.rate} Ratings
                </p>
              </div>
            </div>
          </Link>

          <div className="">
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
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ShowProduct;
