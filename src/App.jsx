
/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import {MyNavbar} from "./components/MyNavbar";
 import React from 'react'
import Home from "./pages/Home";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
