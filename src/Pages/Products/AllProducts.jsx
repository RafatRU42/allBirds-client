import React, { useState } from "react";
import ShowProduct from "./ShowProduct";
import Flicking from "@egjs/react-flicking";
import Men from "./Men";
import Women from "./Women";
import Jewellery from "./Jewellery";
import Electronics from "./Electronics";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [product, setProduct] = useState([]);

  fetch("http://localhost:5000/allProducts")
    .then((res) => res.json())
    .then((data) => setProduct(data));
  return (
    <div class="horizontal-scroll-container">
      <h1 className="font-link text-3xl pt-5 pl-10">All Products</h1>

      <div class="horizontal-scroll-content" className="flex m-5">
        {product.slice(0,2).map((data) => (
          <ShowProduct key={data.id} product={data}></ShowProduct>
        ))}
      </div>
      <div>
        <Jewellery></Jewellery>
        <Women></Women>
        <Men></Men>
        <Electronics></Electronics>
      </div>
    </div>
  );
};

export default AllProducts;
