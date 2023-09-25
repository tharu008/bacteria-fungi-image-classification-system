import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 500,
  height: 500,
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

  // const closeCamera = () => {
  //   setCameraOpen(false);
  // };

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
          className="text-[#00df9a] group border-2 px-6 py-3 my-2 border-[#00df9a] bg-[#00df9a] text-[#0a192f] flex items-center hover:text-[#00df9a] hover:bg-[#0a192f] hover:border-[#00df9a] duration-300"
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
          <button
            onClick={capturePhoto}
            className="text-[#00df9a] group border-2 px-6 py-3 my-2 border-[#00df9a] flex items-center hover:text-white hover:bg-[#00df9a] hover:border-[#00df9a] duration-300"
          >
            Capture
          </button>
        </>
      ) : (
        <p>Image captured and saved. Redirecting to the home page...</p>
      )}

      {url && <img src={url} alt="screenshot" />}
    </div>
  );
};

export default Camera;
