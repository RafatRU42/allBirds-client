import React, { useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import ShowProduct from "./Products/ShowProduct";
import Loading from "../Shared/Loading";
import { Link } from "react-router-dom";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  fetch("https://all-birds-server-rafat.vercel.app/allProducts")
    .then((res) => res.json())
    .then((data) => {
      setLoading(false);
      setProduct(data);
    });

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className=" py-6">
      <Helmet>
        <title>allBirds | Home</title>
      </Helmet>
      <div className="w-full md:flex m-6 ">
        <div className="md:w-1/3 w-full">
          <Fade direction="left">
            <img
              className="ml-20"
              src="https://i.ibb.co/s3xttLY/1759326.gif"
              alt=""
            />
          </Fade>
        </div>
        <div className="w-full mt-8 md:w-2/3 md:my-auto">
          <Fade cascade>
            <h1 className="uppercase text-7xl font-link text-center ">
              Upto 50% Off Wardrobe wins!
            </h1>
            <p className="text-center my-4 text-xl">
              Limited time only. Selected styles marked down as shown.
            </p>
            <div className="text-center">
            <Link to={'/allProducts'} className="btn btn-error my-10 font-link text-white">Shop Now!</Link>
            </div>
          </Fade>
        </div>
      </div>
       <Zoom>
       <div className="flex ml-16">
          <img src="https://i.ibb.co/kGzYBf2/images.png" alt="" />
          <img src="https://i.ibb.co/t4MDkkP/images-2.png" alt="" />
          <img src="https://i.ibb.co/r4rMH2Q/images-3.png" alt="" />
          <img src="https://i.ibb.co/nDDVtfK/images-4.png" alt="" />
          <img src="https://i.ibb.co/7XjbrBn/images-1.png" alt="" />

        </div>
       </Zoom>
      <div className="mb-10">
        <h1 className="font-link text-3xl pt-5 pl-10 my-4">Products</h1>

        <div className="grid grid-grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-10">
          {product.slice(0, 10).map((data) => (
            <ShowProduct key={data.id} product={data}></ShowProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
