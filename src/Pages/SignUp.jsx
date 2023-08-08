import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {

  const {createUser,googleSignIn} = useContext(AuthContext)

  const provider = new GoogleAuthProvider()



  const handleGoogleLogin = () =>{
    googleSignIn(provider)
  }

  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
    const email = data.email;
    const password = data.password;
    createUser(email,password)
    .then(result =>{
      console.log(result);
    })
    .catch(error =>{
      console.log('errr',error);
    })
  
  };



  return (
    <div>
      {/* <div>
        <label for="email" className="block mb-2 text-sm">
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="leroy@jenkins.com"
          className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
        />
      </div> */}
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="input input-bordered input-warning w-full max-w-xs m-10" type="email" placeholder="Email" {...register("email")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input className="input input-bordered input-warning w-full max-w-xs m-10" type="password" placeholder="Password" {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input className="btn btn-error" type="submit" />
    </form>
    <button onClick={handleGoogleLogin} className="btn btn-error">Google</button>
    </div>
  );
};

export default SignUp;
