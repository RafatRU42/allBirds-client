import React from "react";

const ShowCart = ({ product }) => {
  return (
    <div>
     
    
{/* row 1 */}

  
  <td>
    <div className="flex items-center space-x-3">
      <div className="avatar">
        <div className="mask mask-squircle w-12 h-12">
          <img className="bg-cover"
            src={product.image}
            alt="Component"
          />
        </div>
      </div>
      <div>
     
      </div>
    </div>
  </td>
  <td>
    Zemlak, Daniel and Leannon
    <br />
    <span className="badge badge-ghost badge-sm">
      Desktop Support Technician
    </span>
  </td>
  <td>Purple</td>
  <th>
    <button className="btn btn-ghost btn-xs">details</button>
  </th>



     
    </div>
  );
};

export default ShowCart;



