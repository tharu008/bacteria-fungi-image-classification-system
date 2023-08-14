import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Registration from "./components/Registration";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
