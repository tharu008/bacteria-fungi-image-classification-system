import React from "react";
import Navbar from "./Navbar";
import { useImageContext } from "../context/ImageContext"; // Import the context


function Results() {
    const { selectedImage } = useImageContext(); // Access the selected image from context
    const imageUrl = selectedImage ? URL.createObjectURL(selectedImage) : null;

    
    return (
        <>
        <div>
            <Navbar />
            <h1>Results</h1>
            {selectedImage && (
                <div>
                    
                    <h2>Uploaded Image:</h2>
                    <img src={imageUrl} alt="Uploaded" />                    
                </div>
            )}
        </div>
        </>
    );
}

export default Results;