import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home";
import AllProducts from "../Pages/Products/AllProducts";
import Men from "../Pages/Products/Men";
import Women from "../Pages/Products/Women";
import Jewellery from "../Pages/Products/Jewellery";
import Electronics from "../Pages/Products/Electronics";

export const router = createBrowserRouter([
    {path:'/',element:<MainLayout></MainLayout>,children:[
        {path:'/',element:<Home></Home>},
        {path:'/allProducts',element:<AllProducts></AllProducts>},
        {path:'/men',element:<Men></Men>},
        {path:'/women',element:<Women></Women>},
        {path:'/jewellery',element:<Jewellery></Jewellery>},
        {path:'/electronics',element:<Electronics></Electronics>},
    ]}
])