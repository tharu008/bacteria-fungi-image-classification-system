import React from "react";
import Navbar from "./Navbar";
import { useImageContext } from "../context/ImageContext"; // Import the context
import ClassInfo from "./ClassInfo";



function Results() {
    const { selectedImage, classData } = useImageContext(); // Access the selected image from context
    
    const imageUrl = selectedImage ? URL.createObjectURL(selectedImage) : null;
    

    return (
        <>
        <Navbar />
        <div className='w-full h-screen bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <div>
                {selectedImage && (
                    <div className="align-center">
                        
                        {/* <h2>Uploaded Image:</h2> */}
                        <img src={imageUrl} alt="Uploaded" className="w-[400px] mx-auto my-4" />                    
                    </div>
                )}
                </div> 
                <div><ClassInfo classData={classData} /></div> {/* Pass classData as a prop */}       
            </div>                   
            
        </div>
        </>
    );
}

export default Results;