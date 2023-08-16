import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading";
import { AuthContext } from "../Context/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [product, setProduct] = useState([]);
  const [loading,setLoading] = useState(true)

  const {user,logOut} = useContext(AuthContext)
  const price = useSelector((state) =>state.cart.totalPrice)

  const email = user?.email
  fetch(`https://all-birds-server-rafat.vercel.app/getCartProduct?email=${email}`)
    .then((res) => res.json())
    .then((data) => {
      setProduct(data)
      setLoading(false)
    });

    if(loading) {
      return <Loading></Loading>
    }

    const handleLogOut = () =>{
    logOut()
      .then(res =>{})
      .catch(err=>{})
    }

  return (
    <div className="">
    <div className="navbar bg-orange-500 text-white shadow-md ">
        <div className="flex-1">
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost normal-case text-2xl font-link italic">
            allBirds
          </Link>
        </div>

        <div className="flex-none mr-5">
          <div className="">
            <ul className="hidden font-link md:flex">
              <Link to={"/"}>
                <li className="mx-3">Home</li>
              </Link>
              <div className="dropdown mx-3">
                <button tabIndex={0} className="">
                  Branded
                </button>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 my-2"
                >
                  <Link to={"/cap"}>
                    <li className="btn btn-xs btn-error text-white mx-3 my-1">Addidas Caps</li>
                  </Link>
                  <Link to={"/pant"}>
                    <li className="btn btn-xs btn-error text-white mx-3 my-1">TIRO Pants</li>
                  </Link>
                  <Link to={"/shoes"}>
                    <li className="btn btn-xs btn-error text-white mx-3 my-1">Addidas Shoes</li>
                  </Link>
                  <Link to={"/earphone"}>
                    <li className="btn btn-xs btn-error text-white mx-3 my-1">Branded Earphones</li>
                  </Link>
                  <Link to={"/bottle"}>
                    <li className="btn btn-xs btn-error text-white mx-3 my-1">Steel Bottle</li>
                  </Link>
                  <Link to={"/sneaker"}>
                    <li className="btn btn-xs btn-error text-white mx-3 my-1">Addidas Sneaker</li>
                  </Link>
                  <Link to={"/bag"}>
                    <li className="btn btn-xs btn-error text-white mx-3 my-1">Branded Bag</li>
                  </Link>

                </ul>
              </div>

              <div className="dropdown mx-3">
                <button tabIndex={0} className="">
                  Premium
                </button>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 my-2"
                >
                  <Link to={"/allProducts"}>
                    <li className="btn btn-xs btn-error text-white mx-3 my-1">All Products</li>
                  </Link>
                  <Link to={"/men"}>
                    <li className="btn btn-xs btn-error text-white mx-3 my-1">Men's Clothing</li>
                  </Link>
                  <Link to={"/women"}>
                    <li className="btn btn-xs btn-error text-white mx-3 my-1">Women's Clothing</li>
                  </Link>
                  <Link to={"/jewellery"}>
                    <li className="btn btn-xs btn-error text-white mx-3 my-1">Jewellery</li>
                  </Link>
                  <Link to={"/electronics"}>
                    <li className="btn btn-xs btn-error text-white mx-3 my-1">Electronics</li>
                  </Link>

                </ul>
              </div>

              <Link to={"/wishlist"}>
                <li className="mx-3">Wishlist</li>
              </Link>
            </ul>
          </div>
          <div className="dropdown dropdown-end  mr-3">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item text-md font-link text-error text-bold">
                  {product.length}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg text-black">
                  {product?.length} Items Selected
                </span>
                <span className="text-info">Total: ${price}</span>
                <div className="card-actions">
                  <Link
                    to={"/cartRoute"}
                    className="btn btn-error font-link text-white btn-block"
                  >
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
         {
          user?  <div className="dropdown dropdown-end mr-3">
          <label tabIndex={0} className="btn btn-default btn-circle btn-outline text-white avatar">
            <div className="w-10 rounded-full border-rounded">
             {
              user.photoURL? <img src={user.photoURL} alt="photo" /> : <p className="border-rounded text-3xl font-link">{user?.displayName?.substring(0,1)}</p>
             }
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="btn btn-default btn-sm font-link">
                Profile
               
              </a>
            </li>
            <li className="btn btn-default btn-sm font-link my-2">
              <a>Settings</a>
            </li>
            <li>
              <a className="btn btn-sm btn-error text-white my-2 font-link" onClick={handleLogOut}>Logout</a>
            </li>
          </ul>
        </div>
         : 
          <Link to={'/signUp'}>
            <FontAwesomeIcon className="h-5" beatFade icon={faArrowRightFromBracket}></FontAwesomeIcon>
         {/* <p className="btn btn-xs btn-error text-white mx-3 my-1 font-link">Login</p> */}
          </Link>
        }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
