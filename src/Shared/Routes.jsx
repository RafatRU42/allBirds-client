import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home";
import AllProducts from "../Pages/Products/AllProducts";
import Men from "../Pages/Products/Men";
import Women from "../Pages/Products/Women";
import Jewellery from "../Pages/Products/Jewellery";
import Electronics from "../Pages/Products/Electronics";
import SeeDetails from "../Pages/Products/SeeDetails";
import Cart from "../Pages/Cart/Cart";
import Loading from "./Loading";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import ErrorPage from "./ErrorPage";
import AmazonProduct from "../Pages/AmazonProducts/AmazonProduct";
import AmazonDetails from "../Pages/AmazonProducts/AmazonDetails";

export const router = createBrowserRouter([
    {path:'/',element:<MainLayout></MainLayout>,errorElement:<ErrorPage></ErrorPage>,children:[
        {path:'/',element:<Home></Home>},
        {path:'/allProducts',element:<AllProducts></AllProducts>},
        {path:'/men',element:<Men></Men>},
        {path:'/women',element:<Women></Women>},
        {path:'/jewellery',element:<Jewellery></Jewellery>},
        {path:'/electronics',element:<Electronics></Electronics>},
        {path:'/cartRoute',element:<Cart></Cart>},
        {path:'/signUp',element:<SignUp></SignUp>},
        {path:'/login',element:<Login/>},
        {path:'/AProduct',element:<AmazonProduct></AmazonProduct>},
        {path:'/amazonDetails/:id',element:<AmazonDetails></AmazonDetails>,loader: ({params}) => fetch(`https://all-birds-server-rafat.vercel.app/amazonDetails/${params.id}`) },

        {path:'/seeDetails/:id',element:<SeeDetails></SeeDetails>,loader:({params}) =>fetch(`https://all-birds-server-rafat.vercel.app/details/${params.id}`)},
    ]},

])