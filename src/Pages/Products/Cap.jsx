import { useState } from "react";
import ShowAmazon from "../AmazonProducts/ShowAmazon";

const Cap = () => {
    const [data,setData] = useState([])
    fetch('http://localhost:5000/cap')
    .then(res => res.json())
    .then(result=> setData(result))
    return (
        <div>
                <div>
        <h1 className="text-3xl font-link mt-10 ml-20">This is Amazon Products</h1>
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