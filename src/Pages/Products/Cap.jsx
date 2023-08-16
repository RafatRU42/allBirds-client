import { useState } from "react";
import ShowAmazon from "../AmazonProducts/ShowAmazon";
import { Helmet } from "react-helmet";
import Loading from "../../Shared/Loading";

const Cap = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    fetch('https://all-birds-server-rafat.vercel.app/cap')
    .then(res => res.json())
    .then(result=>{ setData(result)
    setLoading(false)
    })
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <Helmet>
                <title>Cap | allBirds</title>
            </Helmet>
                <div>
        <h1 className="text-3xl font-link mt-10 ml-20">Branded cap from allBirds</h1>
      <div className="grid grid-cols-4 ml-16 my-10">
        {data.map((products) => (
          <ShowAmazon key={products._id} product={products}></ShowAmazon>
        ))}
      </div>
    </div>
        </div>
    );
};

export default Cap;