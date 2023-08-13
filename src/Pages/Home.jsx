import React, { useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import ShowProduct from "./Products/ShowProduct";
import Loading from "../Shared/Loading";
import { Link } from "react-router-dom";
import image from '../assets/architecture-2562316_640.jpg'

const Home = () => {
  // const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  fetch("https://all-birds-server-rafat.vercel.app/allProducts")
    .then((res) => res.json())
    .then((data) => {
      setLoading(false);
      // setProduct(data);
    });

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className=" py-6">
      <Helmet>
        <title>allBirds | Home</title>
      </Helmet>
      <div className="w-full md:flex m-6 ">
        <div className="md:w-1/3 w-full">
          <Fade direction="left">
            <img
              className="ml-20"
              src="https://i.ibb.co/s3xttLY/1759326.gif"
              alt=""
            />
          </Fade>
        </div>
        <div className="w-full mt-8 md:w-2/3 md:my-auto">
          <Fade cascade>
            <h1 className="uppercase text-7xl font-link text-center ">
              Upto 50% Off Wardrobe wins!
            </h1>
            <p className="text-center my-4 text-xl">
              Limited time only. Selected styles marked down as shown.
            </p>
            <div className="text-center">
              <Link
                to={"/allProducts"}
                className="btn btn-error my-10 font-link text-white"
              >
                Shop Now!
              </Link>
            </div>
          </Fade>
        </div>
      </div>
      <Zoom>
        <div className="flex ml-16">
          <img src="https://i.ibb.co/kGzYBf2/images.png" alt="" />
          <img src="https://i.ibb.co/t4MDkkP/images-2.png" alt="" />
          <img src="https://i.ibb.co/r4rMH2Q/images-3.png" alt="" />
          <img src="https://i.ibb.co/nDDVtfK/images-4.png" alt="" />
          <img src="https://i.ibb.co/7XjbrBn/images-1.png" alt="" />
        </div>
      </Zoom>

      {/* div ---3 */}



<div>
<section className="">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracki text-center sm:text-5xl font-link">Shopping Your Dream!</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center ">From Our Legends Collection.</p>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracki sm:text-3xl">Mens Casual Premium Slim Fit T-Shirts</h3>
				<p className="mt-3 text-lg ">Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.</p>
				<div className="mt-12 space-y-12">
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-error text-white">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leadi ">Mens Cotton Jacket</h4>
							<p className="mt-2 ">Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, traveling or other outdoors.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-error text-white">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leadi ">Mens Casual Slim Fit</h4>
							<p className="mt-2 ">Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-error text-white">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leadi ">White Gold Plated Princess</h4>
							<p className="mt-2 ">Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary.</p>
						</div>
					</div>
				</div>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src="https://i.ibb.co/bWKKSFJ/pexels-photo-5935741.jpg" alt="" className="mx-auto h-[70vh] rounded-lg shadow-lg dark:bg-gray-500" />
			</div>
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracki sm:text-3xl ">Pierced Owl Rose Gold Plated.</h3>
					<p className="mt-3 text-lg ">Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.</p>
					<div className="mt-12 space-y-12">
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md bg-error text-white">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leadi ">Mens Casual Slim Fit</h4>
								<p className="mt-2 ">An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md bg-error text-white">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leadi ">Removable Hooded Faux Leather Moto Biker Jacket</h4>
								<p className="mt-2 ">Te per quidam maiorum ocurreret, etiam delicatissimi usu ad. Ne has quod periculis. Te sit primis iisque efficiantur.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md bg-error text-white">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leadi ">John Hardy Women's Legends Naga Gold </h4>
								<p className="mt-2 ">Audire principes rationibus eam an, autem nominavi luptatum per te. Sumo fabulas vim eu, sonet saperet eleifend ut vix.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src="https://i.ibb.co/M7p9ht4/pexels-photo-6214155.jpg" alt="" className="mx-auto h-[70vh] rounded-lg shadow-lg dark:bg-gray-500" />
				</div>
			</div>
		</div>
	</div>
</section>
</div>


{/* div -4  */}
{/* https://i.ibb.co/NSsKmxs/download.jpg */}
{/* https://i.ibb.co/7NWhX2k/images-5.png */}

<section className="background">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src=" https://i.ibb.co/9tBZMTJ/download-1.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-4 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-4xl font-bold leadi sm:text-6xl font-link">Return or  
				<span className="text-error"> exchange </span>any order available!
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
				<br className="hidden md:inline lg:hidden"/>turpis pulvinar, est scelerisque ligula sem
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link  className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Shop Men</Link>
				<Link  className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Shop Women</Link>
			</div>
		</div>
	</div>
</section>


    </div>
  );
};

export default Home;
