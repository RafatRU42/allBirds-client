import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { addToCart } from "../Cart/cartSlice";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";

const AmazonDetails = () => {
    const dispatch = useDispatch()
    const data = useLoaderData()


    const {user} = useContext(AuthContext)
  
    const { img, category, name, description, price, ratings } = data;
    const email = user?.email;
  
  
    const handleAddToCart = () =>{
  
      dispatch(addToCart(data))
  
          const cartInfo = {
              email,
              image:img,
              title:name,
              price
          }
  
          fetch('https://all-birds-server-rafat.vercel.app/addToCart',{
              method:'POST',
              headers:{
                  'content-type' : 'application/json'
              },
              body:JSON.stringify(cartInfo)
          })
          .then(res => res.json())
          .then(data => {
              console.log(data)
              // navigate('/cartRoute')
              toast.success('The product added to the cart!')
          })
    }
    return (
        <div className="min-h-screen">
        <Helmet>
          <title>Details | allBirds</title>
        </Helmet>
        <h1 className="text-3xl font-link text-center uppercase mt-10">
          {category}
        </h1>
        <div className="block md:flex m-10">
          <div className="w-full md:w-1/3 ">
            <img className="h-[350px] mx-auto md:ml-10" src={img} alt="" />
          </div>
  
        <div className="w-full md:w-2/3 mt-10">
        <Fade cascade >
  
            <p className="text-3xl md:text-5xl font-link ">{name}.</p>
            <p className="text-xl my-5 font-bold">Price: ${price}</p>
            <div className="flex">
              <p className="badge badge-outline text-xl p-3">
                Rating {ratings}
              </p>
              <p className="badge badge-outline text-xl ml-3 p-3">
                Count {ratings}
              </p>
            </div>
            <p className="text-xl mt-4">Price is including VAT.</p>
        <button onClick={handleAddToCart} className="btn btn-error font-link text-white mt-4">Add To Cart
        <FontAwesomeIcon className="h-6 w-6" icon={faCartPlus}></FontAwesomeIcon>
        
        </button>
        </Fade>
  
          </div>
        </div>
        <div>
          <p className="mx-10 text-lg">{description}.</p>
        </div>
  
  
      </div>
    );
};

export default AmazonDetails;