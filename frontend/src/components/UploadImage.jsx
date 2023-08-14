import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate(); //initiallizing useHistory() instance
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Here you can implement the code to send the selectedFile to the backend
    // using Axios or fetch
    navigate('/results');
  };

  return (
    <div className='flex flex-row items-center'>
    <label
      htmlFor='fileInput'
      className='text-[#00df9a] group border-2 px-6 py-3 my-2 border-[#00df9a] flex items-center hover:text-white hover:bg-[#00df9a] hover:border-[#00df9a] duration-300'
    >
      Choose Files
      <span className='group-hover:-rotate-90 duration-300'>
        <HiArrowNarrowRight className='ml-3' />
      </span>
    </label>
    <input
      type='file'
      accept='image/*'
      onChange={handleFileChange}
      style={{ display: 'none' }}
      id='fileInput'
    />
    {selectedFile && (
      <p className='mx-3'>Selected File: {selectedFile.name}</p>
    )}
    <button onClick={handleUpload} className='text-[#00df9a] group border-2 px-6 py-3 my-2 border-[#00df9a] flex items-center hover:text-white hover:bg-[#00df9a] hover:border-[#00df9a] duration-300'>
      Upload
    </button>
  </div>
  );
}

export default UploadImage;