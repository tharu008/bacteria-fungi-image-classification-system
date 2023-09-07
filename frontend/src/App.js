import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Signin from "./components/Signin";
import Registration from "./components/Registration";
import {Routes, Route} from 'react-router-dom'
import Results from "./components/Results";
import ClassInfo from "./components/ClassInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/results" element={<Results />} />
        <Route path="/classinfo" element={<ClassInfo />} />

      </Routes>
    </>
  );
}

export default App;
