import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import image from "../assets/679.jpg";
import { Link, useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const SignUp = () => {
  const { createUser, googleSignIn, updateUser } = useContext(AuthContext);
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const [error,setError] = useState('')

  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    googleSignIn(provider)
    .then(res =>{
      navigate('/')
    })
    .catch(error =>{

    })
  };

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true)
    const email = data.email;
    const password = data.password;
    const name = data.name;

    createUser(email, password)
      .then((result) => {
        console.log("result", result);
        const userInfo = {
          displayName: name,
        };
        console.log("info", userInfo);
        updateUser(userInfo)
          .then((res) => {
            navigate('/')
            saveUser(user.name,user.email)
          })
          .catch((err) => {
            console.log("eer", err);
          });
      })
      .catch((error) => {
        console.log("error", error);
        setError(error.message)
        setLoading(false)
      });

      const saveUser = (name,email) =>{
        const info = {name,email}
        fetch('https://all-birds-server-rafat.vercel.app/user',{
          method:'POST',
          headers:{
            'content-type' : 'application/json'
          },
          body:JSON.stringify(info)
        })
        .then(result=>{
          console.log('success',result);
        })
        .catch(err=>{
          console.log(err)
        })
      }
  };



  return (
    <div
      className="pb-14 pt-6 flex justify-center items-center bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hidden md:flex md:w-1/2">
        <img className="ml-20" src="https://i.ibb.co/YLRfdDz/work.png" alt="" />
      </div>

      <div className="w-full max-w-md p-8 space-y-3 shadow-xl mx-auto my-5 rounded-xl ">
        <div className="flex -my-10">
          <div className="mx-auto h-40 w-40">
            <img className=""
              src="https://i.ibb.co/6bShK8p/output-onlinegiftools.gif"
              alt=""
            />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <input
            type="text"
            className="input input-bordered input-warning w-full  "
            placeholder="User Name"
            {...register("name", { required: "Please Set The Email" })}
          />
          <p className="text-red-500">{errors.name?.message}</p>

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Please Set The Email" })}
            className="input input-bordered input-warning w-full  "
          />
          <p className="text-red-500">{errors.email?.message}</p>

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="input input-bordered input-warning w-full"
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password Must be 6 characters long.",
              },
              pattern: {
                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                message:
                  "Password must have uppercase, number and special characters",
              },
            })}
          />

          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <div className="flex justify-end text-xs dark:text-gray-400">
            <a rel="noopener noreferrer" href="#">
              Forgot Password?
            </a>
          </div>

          <button className="btn btn-error text-white font-link w-full">
           {
            loading? <PropagateLoader className="items-center" color="#fff" /> : 'Sign Up'
           }
          </button>
          <p className="text-red-500">{error}</p>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoogleLogin}
            aria-label="Log in with Google"
            className="p-3 btn btn-outline btn-info w-full font-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login With Google</p>
          </button>
         
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Already have an account? Please <Link className="text-blue-500 " to={'/login'}>Login.</Link>
          <a
            rel="noopener noreferrer"
            href="#"
            className="underline dark:text-gray-100"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
