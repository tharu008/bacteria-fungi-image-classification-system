import React, { useState } from 'react';
import axios from 'axios';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useImageContext } from '../context/ImageContext'; // Import the context
import ClassInfo from './ClassInfo'; // Import the ClassInfo component


function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate(); //initiallizing useHistory() instance
  const { setSelectedImage } = useImageContext(); // Access the setSelectedImage function from context
  const [classData, setClassData] = useState(null); // State to store the class data


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      // Perform validation here
      const isValid = await validateImage(selectedFile);

      if (isValid) {
        // Set the selectedImage state in context
        setSelectedImage(selectedFile);
        // Redirect to Results component
        navigate('/results');

        // Create a FormData object to send the image to the backend
        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
          // Send the image to the backend using Axios
          const response = await axios.post('http://localhost:5000/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          // Access the JSON response data here
          const classData = response.data;
          setClassData(classData); //set the class data from the response

          // Use responseData as needed
          console.log('Response from the backend:', classData);

          
        } catch (error) {
          console.error("Error uploading image to the backend: ", error);
        }
              
      } else {
        alert('Please upload an image that is at least 500x500 pixels and less than 20MB.');
      }
    }
  };

  const validateImage = async (file) => {
    if (!file) {
      return false;
    }

    // Check image dimensions (width and height)
    const image = new Image();
    image.src = URL.createObjectURL(file);

    return new Promise((resolve) => {
      image.onload = () => {
        const width = image.width;
        const height = image.height;
        const fileSizeMB = file.size / 1024 / 1024; // Convert to MB

        const isSizeValid = fileSizeMB < 20;
        const areDimensionsValid = width >= 500 && height >= 500;

        resolve(isSizeValid && areDimensionsValid);
      };
    });
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
    
    
    {classData && <ClassInfo classData={classData} />} 
    {console.log('classData in UploadImage:', classData)}
  
  </div>
  );
}

export default UploadImage;