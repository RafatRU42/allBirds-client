import { useState } from "react";
import ShowAmazon from "../AmazonProducts/ShowAmazon";
import { Helmet } from "react-helmet";
import Loading from "../../Shared/Loading";

const Pant = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    fetch('https://all-birds-server-rafat.vercel.app/pant')
    .then(res =>res.josn())
    .then(result=>{setData(result)
    setLoading(false)
    })
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <Helmet>
                <title>Pant | allBirds</title>
            </Helmet>
             <div>
        <h1 className="text-3xl font-link mt-10 text-center md:ml-20">
          Branded Pants from allBirds
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center md:ml-16 my-10">
          {data.map((products) => (
            <ShowAmazon key={products._id} product={products}></ShowAmazon>
          ))}
        </div>
      </div>
        </div>
    );
};

export default Pant;