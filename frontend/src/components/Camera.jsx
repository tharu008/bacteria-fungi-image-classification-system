import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1000,
  height: 1000,
  facingMode: "environment",
};

const Camera = () => {
  const webcamRef = useRef(null);

  const [url, setUrl] = useState();
  const [captured, setCaptured] = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);

  const openCamera = () => {
    setCameraOpen(true);
  };

  const closeCamera = () => {
    setCameraOpen(false);
  };

  const capturePhoto = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
    setCaptured(true);

    // Save the image to the device (e.g., using the download attribute)
    const a = document.createElement("a");
    a.href = imageSrc;
    a.download = "captured-image.jpg";
    a.click();

    // Automatically go back to the home page
    setTimeout(() => {
      window.location.href = "/";
    }, 2000); // Redirect after 2 seconds (adjust as needed)
  };

  return (
    <div>
      {!cameraOpen ? (
        <button
          onClick={openCamera}
          className="group border-2 px-6 py-3 my-2 border-[#00df9a] bg-[#00df9a] text-[#0a192f] flex items-center hover:text-[#00df9a] hover:bg-[#0a192f] hover:border-[#00df9a] duration-300"
        >
          Open Camera
        </button>
      ) : !captured ? (
        <>
          <Webcam
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            ref={webcamRef}
          />
          <div className='flex flex-row items-center'>
            <button
              onClick={capturePhoto}
              className="text-[#00df9a] group border-2 px-6 py-3 my-2 border-[#00df9a] flex items-center hover:text-white hover:bg-[#00df9a] hover:border-[#00df9a] duration-300"
            >
              Capture
            </button>
            <button
              onClick={closeCamera}
              className="text-red-500 group border-2 px-6 py-3 my-2 border-red-500 flex items-center hover:text-white hover:bg-red-500 hover:border-red-500 duration-300"
            >
              Close Camera
            </button>
          </div>
        </>
      ) : (
        <p>Image captured and saved. Redirecting to the home page...</p>
      )}

      {url && <img src={url} alt="screenshot" />}
    </div>
  );
};

export default Camera;
