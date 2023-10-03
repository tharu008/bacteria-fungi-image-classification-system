import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useImageContext } from '../context/ImageContext'; // Import the context
import ClassInfo from './ClassInfo'; // Import the ClassInfo component
import Camera from './Camera';
import Remedies from './Remedies';


function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  //const [classData, setClassData] = useState(null); // State to store the class data
  const navigate = useNavigate(); //initiallizing useHistory() instance
  const { setSelectedImage, classData, setClassData, remedyData, setRemedyData } = useImageContext(); // Access the setSelectedImage function from context

  useEffect(() => {
    // This effect will run whenever classData changes
    console.log('classData in UploadImage:', classData);
    console.log('remedyData in UploadImage:', remedyData);

  }, [classData, remedyData]);


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      // Check if the file type is supported (PNG or JPEG)
    const supportedTypes = ['image/png', 'image/jpeg'];
    if (!supportedTypes.includes(selectedFile.type)) {
      alert('File type not supported. Please upload a PNG or JPEG image.');
      return;
    }
    
      // Perform pixel size and image size validation here
      const isPixelSizeValid = await validatePixelSize(selectedFile);
      const isSizeValid = validateImageSize(selectedFile);
      
  
      if (isPixelSizeValid && isSizeValid) {
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
          const classData = response.data.document;
          setClassData(classData); //set the class data from the response
  
          // Use responseData as needed
          console.log('Response from the backend:', classData);
  
          const remedyData = response.data.document.remedies;
          setRemedyData(remedyData); //set the remedy data from the response
  
          // Check if remedyData is an array
          if (Array.isArray(remedyData)) {
            // remedyData is an array, you can access and work with it here
            console.log('Response of remedies from the backend is an array:', remedyData);
          } else {
            // remedyData is not an array; handle this case accordingly
            console.error('Response of remedies from the backend is not an array:', remedyData);
          }
        } catch (error) {
          console.error("Error uploading image to the backend: ", error);
        }
      } else {
        if (!isPixelSizeValid) {
          alert('Please upload an image that is at least 500x500 pixels.');
        }
  
        if (!isSizeValid) {
          alert('Please upload an image that is less than 20MB.');
        }
      }
    }
  };
  
  const validatePixelSize = async (file) => {
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
  
        const areDimensionsValid = width >= 500 && height >= 500;
        resolve(areDimensionsValid);
      };
    });
  };
  
  const validateImageSize = (file) => {
    if (!file) {
      return false;
    }
  
    const fileSizeMB = file.size / 1024 / 1024; // Convert to MB
    const isSizeValid = fileSizeMB < 20;
  
    return isSizeValid;
  };

 


  return (
    <>
    <div className='items-center'>
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
      
    {/* Render ClassInfo as a child component */}
    <ClassInfo classData={classData} />
    <Remedies classData={classData} />
    {/* {console.log('classData in UploadImage in return:', classData)}
    {console.log('RemedyData in UploadImage in return:', remedyData)} */}

    
    </div>
    <div className="flex justify-center">
      <Camera />
    </div>
  </div>
  </>
  );
}

export default UploadImage;