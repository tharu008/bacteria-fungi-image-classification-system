// context/ImageContext.js
import React, { createContext, useContext, useState, useCallback } from 'react';

const ImageContext = createContext(); // Create a context

export function ImageProvider({ children }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [classData, setClassData] = useState(null);

    // Function to clear classData
    const clearClassData = useCallback(() => {
      setClassData(null);
    }, []);

  return (
    <ImageContext.Provider value={{ selectedImage, setSelectedImage, classData, setClassData, clearClassData }}>
      {children}
    </ImageContext.Provider>
  );
}

export function useImageContext() {
  return useContext(ImageContext); // Custom hook to access context values
}