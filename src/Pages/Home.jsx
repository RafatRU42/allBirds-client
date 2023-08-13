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
				<Link to={'/men'}  className="btn btn-outline btn-error rounded  font-link text-white">Shop Men</Link>
				<Link to={'/women'}  className="btn btn-outline rounded  btn-error font-link text-white">Shop Women</Link>
			</div>
		</div>
	</div>
</section>

{/* div 5 */}
 
 <h1 className="text-5xl font-semibold font-link ml-20">Our Rankings</h1>

<section className="p-6 my-6 ">
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 ">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-error ">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 text-white">
					<polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
					<path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
					<path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
				</svg>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold font-link">200</p>
				<p className="capitalize">Orders</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 ">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-error ">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 text-white">
					<path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
					<path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
					<polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
					<polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
				</svg>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold font-link">7500</p>
				<p className="capitalize">New customers</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 ">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-error ">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 text-white">
					<path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
					<rect width="32" height="32" x="80" y="264"></rect>
					<rect width="32" height="32" x="240" y="128"></rect>
					<rect width="32" height="32" x="136" y="168"></rect>
					<rect width="32" height="32" x="400" y="264"></rect>
					<path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
				</svg>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold font-link">172%</p>
				<p className="capitalize">Growth</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 ">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-error ">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 text-white">
					<path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
				</svg>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold font-link">17%</p>
				<p className="capitalize">Bounce rate</p>
			</div>
		</div>
	</div>
</section>

    </div>
  );
};

export default Home;
