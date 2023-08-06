import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [product, setProduct] = useState([]);

  const email = "rmrafat127@gmail.com";
  fetch(`https://all-birds-server-rafat.vercel.app/getCartProduct?email=${email}`)
    .then((res) => res.json())
    .then((data) => {
      setProduct(data)
      setLoading(false)
    });

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

        <div className="flex-none">
          <div className="">
            <ul className="hidden font-link md:flex">
              <Link to={"/"}>
                <li className="mx-3">Home</li>
              </Link>

              <div className="dropdown mx-3">
                <button tabIndex={0} className="">
                  Products
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

              {/* <Link to={""}>
                <li className="mx-3">Home</li>
              </Link> */}
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
                <span className="font-bold text-lg">
                  {product.length} Items
                </span>
                <span className="text-info">Subtotal: $999</span>
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
          <div className="dropdown dropdown-end mr-3">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
