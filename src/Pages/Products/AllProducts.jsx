import React, { useState } from "react";
import ShowProduct from "./ShowProduct";
import Flicking from "@egjs/react-flicking";
import Men from "./Men";
import Women from "./Women";
import Jewellery from "./Jewellery";
import Electronics from "./Electronics";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading";
import { Helmet } from "react-helmet";

const AllProducts = () => {


 
 

 
  return (
    <div className="">
    
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
