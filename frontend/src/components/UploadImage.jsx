import React, { useState } from 'react';
import axios from 'axios';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate(); //initiallizing useHistory() instance
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      try {
        // Send the image to the backend using Axios
        const response = await axios.post('http://localhost:5000/upload', formData); // Adjust the endpoint URL
        console.log(response.data); // Display response from the backend

        // Redirect to Results component
        navigate('/results');
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
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
      <p className='mx-3 text-white'>Selected File: {selectedFile.name}</p>
    )}
    <button onClick={handleUpload} className='text-[#00df9a] group border-2 px-6 py-3 my-2 border-[#00df9a] flex items-center hover:text-white hover:bg-[#00df9a] hover:border-[#00df9a] duration-300'>
      Upload
    </button>
  </div>
  );
}

export default UploadImage;