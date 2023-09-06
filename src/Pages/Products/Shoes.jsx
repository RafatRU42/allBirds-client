import { useState } from "react";
import ShowAmazon from "../AmazonProducts/ShowAmazon";
import { Helmet } from "react-helmet";
import Loading from "../../Shared/Loading";

const Shoes = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true)
  fetch("https://all-birds-server-rafat.vercel.app/shoes")
    .then((res) => res.json())
    .then((result) => {setData(result)
    setLoading(false)
    });
    if(loading){
        return <Loading></Loading>
    }
  return (
    <div>
        <Helmet>
            <title>Shoes | allBirds</title>
        </Helmet>
      <div>
        <h1 className="text-3xl font-link mt-10 text-center md:ml-20">
          This is Amazon Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:ml-16 my-10">
          {data.map((products) => (
            <ShowAmazon key={products._id} product={products}></ShowAmazon>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shoes;
