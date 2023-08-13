import  { useContext, useState } from "react";
// import ShowCart from "../../Components/ShowCart";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Context/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Fade, Zoom } from "react-awesome-reveal";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email
 

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const price = useSelector((state) => state.cart.totalPrice);
  // const items = useSelector((state) => state.cart.items);
  // console.log('items',items);

  fetch(
    `https://all-birds-server-rafat.vercel.app/getCartProduct?email=${email}`
  )
    .then((res) => res.json())
    .then((data) => {
      setProduct(data);
      setLoading(false);
    });
  if (loading) {
    return <Loading></Loading>;
  }


  const handleDelete = (id) =>{
    console.log('clink');
  fetch(`http://localhost:5000/deleteProduct?email=${email}&id=${id}`,{
    method:'DELETE',
    headers:{
      'content-type' : 'application/json'
    }
  })
  .then(res =>{})
  .then(data=>{})
  }

  return (
    <div className="m-10 min-h-screen">
      <Zoom>
      <p className="text-3xl font-link">{user?.displayName}'s Cart</p>

      </Zoom>
      <Helmet>
        <title>allBirds | Cart</title>
      </Helmet>
      <div className="flex ">
        <div className="w-2/3 my-5">
          <div className="">
            <table className="table">
              { 

                product==0?
                <div className="flex ">
                <p className="mx-auto mt-36 text-3xl ">Your cart is empty!</p>

                </div> 
                 :


              
              product.map((pro) => (
                <div key={pro._id} className="border border-orange-500 m-2 rounded mr-40">
                  <Fade>
                  <tr>
                    <td>
                      <div className="flex items-center space-x-3 ">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={pro.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div className="px-10 font-link text-xl w-[300px]">
                          <p>{pro.title.substring(0, 20)}..</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-10">
                      <p className="text-md font-link w-[100px]">
                        Price: ${pro.price}
                      </p>
                    </td>
                    {/* <th>
                      <button className="btn btn-error btn-sm btn-end text-white">
                        Pay
                      </button>
                    </th> */}
                    <th>
                      <button onClick={() =>handleDelete(pro._id)} className="btn btn-error btn-circle btn-outline text-white ml-10">
                       <FontAwesomeIcon className="h-8 w-8 " icon={faTrashAlt}></FontAwesomeIcon>
                      </button>
                    </th>
                  </tr>
                  </Fade>
                </div>
              ))
            } 
              
            </table>
          </div>
        </div>
        <div className="">
          <div className="w-1/3 text-2xl font-link fixed">
            <p className="mt-10">Selected Product: {product.length}</p>
            <p>Total Price: ${price}</p>
            {/* <p>{items.length}</p> */}
    <div className="mr-20 mt-10">

     <img src="https://i.ibb.co/sHKvyKm/image-processing20220111-6085-x3omkr.gif" alt="" />
    </div>
    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
