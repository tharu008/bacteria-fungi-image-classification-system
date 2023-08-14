import React from 'react';
import Navbar from "./Navbar";
import UploadImage from './UploadImage';

const Home = () => {
  return (
    <>
    <Navbar />
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full'>
        <h2 className='uppercase text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Upload your
        </h2>
        <h3 className='uppercase text-4xl sm:text-5xl font-bold text-[#8892b0] text-center'>
          Microscopic image here.
        </h3>
        <p className='text-[#8892b0] py-4 max-w-[700px] text-center'>
          Make sure the image is clear and taken with resolution of minimum 400x maginification recommended.
          Image should be of minimum 500x500 pixels.
        </p>
        <div>
          <UploadImage />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
