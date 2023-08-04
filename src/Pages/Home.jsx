import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Home = () => {
    return (
     <div className='bg-slate-50 py-6'>
           <div className='w-full md:flex m-6'>
           <div className='md:w-1/3 w-full'>
           <Fade direction='left'>
           <img  src="https://i.ibb.co/s3xttLY/1759326.gif" alt="" />
           </Fade>
           </div>
           <div className='w-full my-8 md:w-2/3 md:my-auto'>
           
                <Fade>
                <h1 className='uppercase text-7xl font-link text-center '>Upto 50% Off Wardrobe wins!</h1>
                <p className='text-center my-4 text-xl'>Limited time only. Selected styles marked down as shown.</p>
                </Fade>
           </div>
        </div>
     </div>
    );
};

export default Home;