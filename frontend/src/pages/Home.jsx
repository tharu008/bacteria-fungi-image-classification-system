import React from 'react';
import Navbar from '../components/Navbar';
import UploadImage from '../components/UploadImage';
import Footer from '../components/Footer';

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
        {/* <p className='text-[#8892b0] py-4 max-w-[700px] text-center'>
        Make sure the microscopic image is clear, and a minimum 400x magnification is recommended. The image must be a minimum of 500x500 pixels in size and under 20MB.
        Only PNG and JPEG/JPG formats are supported.
        </p> */}
        <div>
          <UploadImage />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Home;
