import React from "react";

const ShowProduct = ({ product }) => {
  const { title, price, description, category, image } = product;

  return (
    <div className="m-4">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img
            className="h-[250px]"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
           {title.substring(0,20)}..
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
