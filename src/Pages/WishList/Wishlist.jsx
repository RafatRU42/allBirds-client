import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Fade, Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  const { user } = useContext(AuthContext);
  
  const email = user?.email;
  fetch(`https://all-birds-server-rafat.vercel.app/getWishList?email=${email}`)
    .then((res) => res.json())
    .then((result) => setData(result));

    if(!user){
      return navigate('/signUp')
    }

  
  return (
    <div className="m-10 min-h-screen">
      <Helmet>
        <title>Wishlist | allBirds</title>
      </Helmet>
      <Zoom>
        <p className="text-3xl font-link ml-5">{user.displayName}'s wishlist</p>
      </Zoom>
     <Fade>
     <div className="flex">
        <div className="w-2/3 my-5">
         
          {data ==0 ? (
            <div className="flex">
            <p className="mx-auto text-3xl mt-40">Your wishlist is empty!</p>

            </div>
    )
        :
        data?.map((pro) => (
          <div key={pro._id}>
            <div className="border border-orange-500 m-4 p-2 mr-40 rounded">
              <table>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={pro.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div className="px-10 font-link text-xl w-[300px]">
                        <p>{pro.title.substring(0, 20)}..</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-10">
                    <p className="text-md font-link w-[100px]">
                      Price: ${pro.price}
                    </p>
                  </td>

                  <th>
                    <button
                      onClick={() => handleDelete(pro._id)}
                      className="btn btn-error btn-circle btn-outline text-white ml-10"
                    >
                      <FontAwesomeIcon
                        className="h-8 w-8 "
                        icon={faTrashAlt}
                      ></FontAwesomeIcon>
                    </button>
                  </th>
                </tr>
              </table>
            </div>
          </div>
        ))
        }

          
        </div>

        <div className="w-1/3">
          <div className="mr-20 mt-10">
            <img
              src="https://i.ibb.co/sHKvyKm/image-processing20220111-6085-x3omkr.gif"
              alt=""
            />
          </div>
        </div>
      </div>
     </Fade>
    </div>
  );
};

export default Wishlist;

{
  /* <div className="m-10 min-h-screen">
<Zoom>
  <p className="text-3xl font-link">
	{user?.displayName}'s Cart
  </p>
</Zoom>
<Helmet>
  <title>allBirds | Cart</title>
</Helmet>
<Fade cascade>
  <div className="flex">
	<div className="w-2/3 my-5">
	  {data === 0 ? (
		<div className="flex">
		  <p className="mx-auto mt-36 text-3xl ">
			Your cart is empty!
		  </p>
		</div>
	  ) : (
		<div className="border border-orange-500 m-2 rounded mr-40">
		  <table className="table">
			{data?.map((pro) => (
			  <Fade key={pro._id}>
				<tr>
				  <td>
					<div className="flex items-center space-x-3">
					  <div className="avatar">
						<div className="mask mask-squircle w-12 h-12">
						  <img
							src={pro.image}
							alt="Avatar Tailwind CSS Component"
						  />
						</div>
					  </div>
					  <div className="px-10 font-link text-xl w-[300px]">
						<p>{pro.title.substring(0, 20)}..</p>
					  </div>
					</div>
				  </td>
				  <td className="px-10">
					<p className="text-md font-link w-[100px]">
					  Price: ${pro.price}
					</p>
				  </td>
				  <th>
					<button
					  onClick={() => handleDelete(pro._id)}
					  className="btn btn-error btn-circle btn-outline text-white ml-10"
					>
					  <FontAwesomeIcon
						className="h-8 w-8 "
						icon={faTrashAlt}
					  ></FontAwesomeIcon>
					</button>
				  </th>
				</tr>
			  </Fade>
			))}
		  </table>
		</div>
	  )}
	</div>
	<div className="w-1/3 text-2xl font-link fixed">
	  {/* <p className="mt-10">Selected Product: {data.length}</p>
	  <p>Total Price: ${data.price}</p> */
}
// 	  <div className="mr-20 mt-10">
// 		<img
// 		  src="https://i.ibb.co/sHKvyKm/image-processing20220111-6085-x3omkr.gif"
// 		  alt=""
// 		/>
// 	  </div>
// 	</div>
//   </div>
// </Fade>
// </div> */}
