import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home";
import AllProducts from "../Pages/Products/AllProducts";

export const router = createBrowserRouter([
    {path:'/',element:<MainLayout></MainLayout>,children:[
        {path:'/',element:<Home></Home>},
        {path:'/allProducts',element:<AllProducts></AllProducts>},
    ]}
])