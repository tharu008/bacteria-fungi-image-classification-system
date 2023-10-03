import React from "react";
import Home from "./pages/Home";
import ImageUploadPage from "./pages/ImageUploadPage";
import About from "./components/About";
import Signin from "./components/Signin";
import Registration from "./components/Registration";
import {Routes, Route} from 'react-router-dom'
import Results from "./components/Results";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imageupload" element={<ImageUploadPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/results" element={<Results />} />

      </Routes>
      
    </>
  );
}

export default App;
