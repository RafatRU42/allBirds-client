import { Link, useNavigate, useRouteError } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";


const ErrorPage = () => {

    const navigate = useNavigate()
    const error = useRouteError();
    const {logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then(result =>{
            navigate('/login')
        })
    }

    return (
        <div className="mx-auto">
            <div className="w-1/4 mx-auto my-10">
                <img src='https://i.ibb.co/FW4m8J7/tolkie-sad.gif' alt="" />
            </div>
            <div className="text-center font-bold text-2xl">
                <p>Something Went Wrong</p>
                <p>Status Code is {error.status? error.status : 'Unknown'}</p>
                <Link className="btn btn-error text-white font-link mx-4" to={'/'}>Home</Link>
                <button onClick={handleLogOut} className="btn btn-error my-5 text-white">Log Out</button>
            </div>
        </div>
    );
};

export default ErrorPage;