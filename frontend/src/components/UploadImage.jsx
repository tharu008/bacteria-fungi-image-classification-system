import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Here you can implement the code to send the selectedFile to the backend
    // using Axios or fetch
  };

  return (
    <div>
      <input
        type='file'
        accept='image/*' // Allow only image files
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id='fileInput' // Attach this id to the label
      />
      <label
        htmlFor='fileInput'
        className='text-[#00df9a] group border-2 px-6 py-3 my-2 border-[#00df9a] flex items-center hover:text-white hover:bg-[#00df9a] hover:border-[#00df9a] duration-300'
      >
        Choose Files
        <span className='group-hover:-rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-3' />
        </span>
      </label>
      {selectedFile && (
        <p>Selected File: {selectedFile.name}</p>
        // Display the selected file name or other information if needed
      )}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadImage;