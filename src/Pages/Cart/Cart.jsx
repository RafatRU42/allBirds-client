import { useContext, useEffect, useState } from "react";
// import ShowCart from "../../Components/ShowCart";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Context/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDeleteLeft,
  faTrash,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Fade, Zoom } from "react-awesome-reveal";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const email = user?.email;

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const price = useSelector((state) => state.cart.totalPrice);
  // const items = useSelector((state) => state.cart.items);
  // console.log('items',items);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://all-birds-server-rafat.vercel.app/getCartProduct?email=${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return navigate("/signUp");
  }

  // const handleDelete = (id) =>{
  //   fetch(`https://all-birds-server-rafat.vercel.app/deleteProduct?id=${id}`,{
  //     method:'DELETE',
  //     headers:{
  //       'content-type' : 'application/json'
  //     }
  //   })
  //   .then(res =>res.json())
  //   .then(data =>{
  //     toast.success('Deleted successfully')
  //   })

  // }

  const handleAddToWishlist = (data) => {
    const dataInfo = {
      email,
      image: data.image,
      title: data.title,
      price: data.price,
    };
    fetch("https://all-birds-server-rafat.vercel.app/addToWishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dataInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully added to the wishlist");
      });
  };

  return (
    <div className="m-10 min-h-screen">
      <Zoom>
        <p className="text-3xl font-link">{user?.displayName}'s Cart</p>
      </Zoom>
      <Helmet>
        <title>allBirds | Cart</title>
      </Helmet>
      <Fade cascade>
        <div className="flex ">
          <div className="w-2/3 my-5">
            <div className="">
              <table className="table">
                {product == 0 ? (
                  <div className="flex ">
                    <p className="mx-auto mt-36 text-3xl ">
                      Your cart is empty!
                    </p>
                  </div>
                ) : (
                  product.map((pro) => (
                    <div
                      key={pro._id}
                      className="ml-20 mr-36 border border-gray-500 my-2 rounded"
                    >
                      <li className="flex flex-col p-6 sm:flex-row sm:justify-between">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                          <img
                            className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                            src={pro.image}
                            alt="Polaroid camera"
                          />
                          <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                              <div className="space-y-1">
                                <h3 className="text-lg font-semibold leadi sm:pr-8">
                                  {pro.title.substring(0, 30)}..
                                </h3>
                                <p className="text-sm dark:text-gray-400">
                                  Classic
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-lg font-semibold">
                                  ${pro.price}
                                </p>
                              </div>
                            </div>
                            <div className="flex text-sm divide-x">
                              <button
                                onClick={() => handleDelete(pro._id)}
                                type="button"
                                className="flex items-center px-2 p-1 text-white font-link space-x-1 btn btn-sm btn-error"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                  className="w-4 h-4 fill-current"
                                >
                                  <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                  <rect
                                    width="32"
                                    height="200"
                                    x="168"
                                    y="216"
                                  ></rect>
                                  <rect
                                    width="32"
                                    height="200"
                                    x="240"
                                    y="216"
                                  ></rect>
                                  <rect
                                    width="32"
                                    height="200"
                                    x="312"
                                    y="216"
                                  ></rect>
                                  <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                </svg>
                                <span className="">Remove</span>
                              </button>
                              <button
                                onClick={() => handleAddToWishlist(pro)}
                                type="button"
                                className="flex items-center px-2 py-1 space-x-1 btn btn-error text-white font-link btn-sm ml-4"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                  className="w-4 h-4 fill-current"
                                >
                                  <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                </svg>
                                <span>Add to wishlist</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                  ))
                )}
              </table>
            </div>
          </div>
          <div className="">
            <div className="w-1/3 text-2xl font-link fixed">
              <p className="mt-10">Selected Product: {product.length}</p>
              <p>Total Price: ${price}</p>
              {/* <p>{items.length}</p> */}
              <div className="mr-20 mt-10">
                <img
                  src="https://i.ibb.co/sHKvyKm/image-processing20220111-6085-x3omkr.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Cart;
