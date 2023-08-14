import React from "react";
import Navbar from "./Navbar";
import { useImageContext } from "../context/ImageContext"; // Import the context


function Results() {
    const { selectedImage } = useImageContext(); // Access the selected image from context

    return (
        <>
        <div>
            <Navbar />
            <h1>Results</h1>
            {selectedImage && (
                <div>
                    <h2>Uploaded Image:</h2>
                    <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" />
                </div>
            )}
        </div>
        </>
    );
}

export default Results;