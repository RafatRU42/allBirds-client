import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "react-awesome-reveal";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../Cart/cartSlice";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const ShowAmazon = ({product}) => {
    const {name,_id,description,price,category,img,ratings} = product;
    const dispatch= useDispatch()
    const {user} = useContext(AuthContext)
    const email = user?.email;

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        
    
        const cartInfo = {
          email,
          image:img,
          title:name,
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
        <div className="m-4 ">
      <Fade cascade >
        <div className="card w-60 bg-base-100 shadow-xl ">
          <Link to={`/amazonDetails/${_id}`}>
            <figure>
              <img className="h-[150px] w-full" src={img} alt="Shoes" />
            </figure>
            <div className="card-body -mx-4">
              <h2 className="text-md font-link">
                {name.substring(0, 15)}..
              </h2>
              {/* <p>{description.substring(0, 70)}...</p> */}

              <div className="card-actions justify-between">
                <p className="font-bold">Price: $ {price}</p>
                {/* <div className="badge badge-outline">$ {price}</div> */}
                <p className="badge badge-outline py-1 -px-2">
                  {ratings} Ratings
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

export default ShowAmazon;