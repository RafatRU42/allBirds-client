import Flicking from "@egjs/react-flicking";
import React from "react";
import { Zoom,Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";



const ShowProduct = ({ product }) => {
  const { title, price, description, image,_id } = product;

  return (
    <div className="m-4 " >
       
     <Fade cascade direction="left">
     <div className="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img
            className="h-[250px]"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-link">
           {title.substring(0,25)}..
            
          </h2>
          <p>{description.substring(0,70)}...</p>
          
          <div className="card-actions justify-between">
          <p className="font-bold">Price: $ {price}</p>
            {/* <div className="badge badge-outline">$ {price}</div> */}
            <p className="badge badge-outline py-1 -px-2">{product.rating.rate} Ratings</p>
          </div>

        </div >
        <div className="">
        {/* <button className=" bg-orange-400 w-full p-3 -mt-2 font-bold text-white">Add to Cart</button> */}
      
      <Link  className="btn btn-error w-full p-3 -mt-2 font-bold text-white font-link"  to={`/seeDetails/${_id}`}>See Details</Link>
      


        </div>

      </div>
     </Fade>
    
    </div>
  );
};

export default ShowProduct;
