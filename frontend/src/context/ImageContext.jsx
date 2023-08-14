// context/ImageContext.js
import React, { createContext, useContext, useState } from 'react';

const ImageContext = createContext(); // Create a context

export function ImageProvider({ children }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <ImageContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
    </ImageContext.Provider>
  );
}

export function useImageContext() {
  return useContext(ImageContext); // Custom hook to access context values
}