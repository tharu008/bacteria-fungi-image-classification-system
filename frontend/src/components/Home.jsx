import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full'>
        <h2 className='uppercase text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Upload your
        </h2>
        <h3 className='uppercase text-4xl sm:text-5xl font-bold text-[#8892b0] flex-center'>
          Microscopic image here.
        </h3>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Make sure the image is clear and taken with resolution of minimum 100x zoom.
        </p>
        <div>
          <button className='text-[#00df9a] group border-2 px-6 py-3 my-2 border-[#00df9a] flex items-center hover:text-white hover:bg-[#00df9a] hover:border-[#00df9a] duration-300'>
            Choose Files
            <span className='group-hover:-rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
